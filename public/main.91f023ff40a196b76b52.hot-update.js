/*! For license information please see main.91f023ff40a196b76b52.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatewebsite_template("main",{"./app/classes/Page.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>f});var i=s("./node_modules/gsap/index.js"),n=s("./node_modules/lodash/each.js"),a=s.n(n),o=s("./node_modules/lodash/map.js"),l=s.n(o),h=s("./node_modules/normalize-wheel/index.js"),r=s.n(h),m=s("./node_modules/prefix/index.js"),d=s.n(m),c=s("./app/animations/Title.js"),u=s("./app/animations/Paragraph.js"),p=s("./app/animations/Label.js"),g=s("./app/animations/Highlight.js"),w=s("./app/classes/AsyncLoad.js");class f{constructor({id:t,element:e,elements:s}){this.id=t,this.selector=e,this.selectorChildren={...s,animationsTitles:'[data-animation="title"]',animationsParagraphs:'[data-animation="paragraph"]',animationsLabels:'[data-animation="label"]',animationsHighlights:'[data-animation="highlight"]',preloaders:"[data-src]"},this.transformPrefix=d()("transform"),this.scrollOffset=0,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.onTouchStartEvent=this.onTouchStart.bind(this),this.onTouchEndEvent=this.onTouchEnd.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},a()(this.selectorChildren,((t,e)=>{t instanceof window.HTMLElement||t instanceof window.NodeList||Array.isArray(t)?this.elements[e]=t:(this.elements[e]=document.querySelectorAll(t),0===this.elements[e].length?this.elements[e]=null:1===this.elements[e].length&&(this.elements[e]=document.querySelector(t)))})),this.createAnimations(),this.createPreloader()}createPreloader(){this.preloaders=l()(this.elements.preloaders,(t=>new w.default({element:t})))}createAnimations(){this.animations=[],this.animationsHighlights=l()(this.elements.animationsHighlights,(t=>new g.default({element:t}))),this.animations.push(...this.animationsHighlights),this.animationsTitles=l()(this.elements.animationsTitles,(t=>new c.default({element:t}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=l()(this.elements.animationsParagraphs,(t=>new u.default({element:t}))),this.animations.push(...this.animationsParagraphs),this.animationsLabels=l()(this.elements.animationsLabels,(t=>new p.default({element:t}))),this.animations.push(...this.animationsLabels)}show(t){return new Promise((e=>{this.animationIn=i.default.timeline(),t?this.animationIn=t:(this.animationIn=i.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1})),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((t=>{this.removeEventListeners(),this.animationOut=i.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:t})}))}onMouseWheel(t){const{pixelY:e}=r()(t);this.scroll.target+=e}onTouchStart(t){this.touchStart=t.touches[0].clientY}onTouchEnd(t){this.touchEnd=t.changedTouches[0].clientY,this.scroll.target+=-1*(this.touchEnd-this.touchStart)}update(){this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current<.01&&(this.scroll.current=0),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),a()(this.animations,(t=>t.onResize()))}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent),window.addEventListener("touchstart",this.onTouchStartEvent),window.addEventListener("touchend",this.onTouchEndEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(t){t.h=()=>"8a29e6b895381e5a85ff"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTVFLEtBQUtnQixnQkFDM0MsQ0FFQTBDLHVCQUNFN0IsT0FBT2dELG9CQUFvQixhQUFjN0UsS0FBS1csa0JBQ2hELGtCQ3pPRm1FLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLXRlbXBsYXRlLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnO1xyXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnO1xyXG5pbXBvcnQgbm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJztcclxuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnO1xyXG5cclxuaW1wb3J0IFRpdGxlIGZyb20gJ2FuaW1hdGlvbnMvVGl0bGUnO1xyXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJ2FuaW1hdGlvbnMvUGFyYWdyYXBoJztcclxuaW1wb3J0IExhYmVsIGZyb20gJ2FuaW1hdGlvbnMvTGFiZWwnO1xyXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJ2FuaW1hdGlvbnMvSGlnaGxpZ2h0JztcclxuXHJcbmltcG9ydCBBc3luY0xvYWQgZnJvbSAnY2xhc3Nlcy9Bc3luY0xvYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IoeyBpZCwgZWxlbWVudCwgZWxlbWVudHMgfSkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xyXG4gICAgICAuLi5lbGVtZW50cyxcclxuXHJcbiAgICAgIGFuaW1hdGlvbnNUaXRsZXM6ICdbZGF0YS1hbmltYXRpb249XCJ0aXRsZVwiXScsXHJcbiAgICAgIGFuaW1hdGlvbnNQYXJhZ3JhcGhzOiAnW2RhdGEtYW5pbWF0aW9uPVwicGFyYWdyYXBoXCJdJyxcclxuICAgICAgYW5pbWF0aW9uc0xhYmVsczogJ1tkYXRhLWFuaW1hdGlvbj1cImxhYmVsXCJdJyxcclxuICAgICAgYW5pbWF0aW9uc0hpZ2hsaWdodHM6ICdbZGF0YS1hbmltYXRpb249XCJoaWdobGlnaHRcIl0nLFxyXG5cclxuICAgICAgcHJlbG9hZGVyczogJ1tkYXRhLXNyY10nLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJyk7XHJcbiAgICB0aGlzLnNjcm9sbE9mZnNldCA9IDA7XHJcblxyXG4gICAgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uVG91Y2hTdGFydEV2ZW50ID0gdGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKTtcclxuICAgIC8vIHRoaXMub25Ub3VjaE1vdmVFdmVudCA9IHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Ub3VjaEVuZEV2ZW50ID0gdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsID0ge1xyXG4gICAgICBjdXJyZW50OiAwLFxyXG4gICAgICB0YXJnZXQ6IDAsXHJcbiAgICAgIGxhc3Q6IDAsXHJcbiAgICAgIGxpbWl0OiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XHJcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcclxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xyXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcclxuICAgIHRoaXMucHJlbG9hZGVycyA9IG1hcCh0aGlzLmVsZW1lbnRzLnByZWxvYWRlcnMsIChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgQXN5bmNMb2FkKHsgZWxlbWVudCB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodFxyXG4gICAgdGhpcy5hbmltYXRpb25zSGlnaGxpZ2h0cyA9IG1hcChcclxuICAgICAgdGhpcy5lbGVtZW50cy5hbmltYXRpb25zSGlnaGxpZ2h0cyxcclxuICAgICAgKGVsZW1lbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IEhpZ2hsaWdodCh7XHJcbiAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc0hpZ2hsaWdodHMpO1xyXG5cclxuICAgIC8vIFRpdGxlc1xyXG4gICAgdGhpcy5hbmltYXRpb25zVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1RpdGxlcywgKGVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUaXRsZSh7XHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNUaXRsZXMpO1xyXG5cclxuICAgIC8vIFBhcmFncmFwaFxyXG4gICAgdGhpcy5hbmltYXRpb25zUGFyYWdyYXBocyA9IG1hcChcclxuICAgICAgdGhpcy5lbGVtZW50cy5hbmltYXRpb25zUGFyYWdyYXBocyxcclxuICAgICAgKGVsZW1lbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFBhcmFncmFwaCh7XHJcbiAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc1BhcmFncmFwaHMpO1xyXG5cclxuICAgIC8vIExhYmVsc1xyXG4gICAgdGhpcy5hbmltYXRpb25zTGFiZWxzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc0xhYmVscywgKGVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBMYWJlbCh7XHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNMYWJlbHMpO1xyXG4gIH1cclxuXHJcbiAgLy8gQW5pbWF0aW9uc1xyXG4gIHNob3coYW5pbWF0aW9uKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IGdzYXAudGltZWxpbmUoKTtcclxuXHJcbiAgICAgIGlmIChhbmltYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkluID0gYW5pbWF0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBnc2FwLnRpbWVsaW5lKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Jbi5mcm9tVG8oXHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnQsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKF8pID0+IHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IGdzYXAudGltZWxpbmUoKTtcclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0LnRvKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZVdoZWVsKGUpIHtcclxuICAgIGNvbnN0IHsgcGl4ZWxZIH0gPSBub3JtYWxpemVXaGVlbChlKTtcclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFk7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoU3RhcnQoZSkge1xyXG4gICAgdGhpcy50b3VjaFN0YXJ0ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgfVxyXG5cclxuICAvLyBvblRvdWNoTW92ZShlKSB7XHJcbiAgLy8gICB0aGlzLnRvdWNoQ3VyciA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG5cclxuICAvLyAgIGlmICh0aGlzLnRvdWNoQ3VyciA+IHRoaXMudG91Y2hTdGFydCkge1xyXG4gIC8vICAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gLTU7XHJcblxyXG4gIC8vICAgICB0aGlzLnNjcm9sbE9mZnNldCArPSAtNTtcclxuICAvLyAgIH0gZWxzZSBpZiAodGhpcy50b3VjaEN1cnIgPCB0aGlzLnRvdWNoU3RhcnQpIHtcclxuICAvLyAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IDU7XHJcblxyXG4gIC8vICAgICB0aGlzLnNjcm9sbE9mZnNldCArPSA1O1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgb25Ub3VjaEVuZChlKSB7XHJcbiAgICB0aGlzLnRvdWNoRW5kID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSAodGhpcy50b3VjaEVuZCAtIHRoaXMudG91Y2hTdGFydCkgKiAtMTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IGdzYXAudXRpbHMuY2xhbXAoXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxyXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXRcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjAxKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBnc2FwLnV0aWxzLmludGVycG9sYXRlKFxyXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50LFxyXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXHJcbiAgICAgIDAuMVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWA7IC8vcHJldHRpZXItaWdub3JlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcclxuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZWFjaCh0aGlzLmFuaW1hdGlvbnMsIChhbmltYXRpb24pID0+IGFuaW1hdGlvbi5vblJlc2l6ZSgpKTtcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0RXZlbnQpO1xyXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmVFdmVudCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmRFdmVudCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhhMjllNmI4OTUzODFlNWE4NWZmXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvbnNUaXRsZXMiLCJhbmltYXRpb25zUGFyYWdyYXBocyIsImFuaW1hdGlvbnNMYWJlbHMiLCJhbmltYXRpb25zSGlnaGxpZ2h0cyIsInByZWxvYWRlcnMiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJzY3JvbGxPZmZzZXQiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJvblRvdWNoU3RhcnRFdmVudCIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmRFdmVudCIsIm9uVG91Y2hFbmQiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwiY3JlYXRlUHJlbG9hZGVyIiwibWFwIiwiQXN5bmNMb2FkIiwiYW5pbWF0aW9ucyIsIkhpZ2hsaWdodCIsInB1c2giLCJUaXRsZSIsIlBhcmFncmFwaCIsIkxhYmVsIiwic2hvdyIsImFuaW1hdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJnc2FwIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiY2FsbCIsIl8iLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsInRvIiwib25Db21wbGV0ZSIsImUiLCJwaXhlbFkiLCJub3JtYWxpemVXaGVlbCIsInRvdWNoU3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WSIsInRvdWNoRW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJ1cGRhdGUiLCJ3cmFwcGVyIiwic3R5bGUiLCJvblJlc2l6ZSIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=