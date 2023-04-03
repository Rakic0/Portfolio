require('dotenv').config();

const fetch = require('node-fetch');
const logger = require('morgan');
const path = require('path');
const express = require('express');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Express Config
const app = express();
const port = process.env.PORT || 3000;

// Prismic
const Prismic = require('@prismicio/client');
const PrismicH = require('@prismicio/helpers');
const { application } = require('express');
const UAParser = require('ua-parser-js');

// View Engines
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(errorHandler());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// Prismic
const initApi = (req) => {
  return Prismic.createClient(`${process.env.PRISMIC_ENDPOINT}`, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  });
};

const handleLinkResolver = (doc) => {
  if (doc.type === 'project') {
    return `/project/${doc.slug}`;
  }

  return '/';
};

app.use((req, res, next) => {
  const ua = UAParser(req.headers['user-agent']);

  res.locals.isDesktop = ua.device.type === undefined;
  res.locals.isPhone = ua.device.type === 'mobile';
  res.locals.isTablet = ua.device.type === 'tablet';

  res.locals.Link = handleLinkResolver;
  res.locals.params = req.originalUrl;

  res.locals.PrismicH = PrismicH;

  next();
});

const handleRequest = async (api) => {
  const preloader = await api.getSingle('preloader');
  const navigation = await api.getSingle('navigation');
  const footer = await api.getSingle('footer');
  const home = await api.getSingle('home');
  const projects = await api.getAllByType('project');

  return {
    home,
    navigation,
    footer,
    preloader,
    projects,
  };
};

// Routing
app.get('/', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);

  res.status(200).render('pages/home', {
    ...defaults,
  });
});

app.get('/project/:uid', async (req, res) => {
  const api = await initApi(req);
  const defaults = await handleRequest(api);

  const project = await api.getByUID('project', req.params.uid, {
    fetchLinks: 'project.title',
  });

  res.status(200).render('pages/project', {
    ...defaults,
    project,
  });
});

// ******** //
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
