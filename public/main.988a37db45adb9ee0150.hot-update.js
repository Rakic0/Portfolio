/*! For license information please see main.988a37db45adb9ee0150.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatewebsite_template("main",{"./app/classes/Page.js":(t,e,i)=>{i.r(e),i.d(e,{default:()=>v});var s=i("./node_modules/gsap/index.js"),n=i("./node_modules/lodash/each.js"),a=i.n(n),o=i("./node_modules/lodash/map.js"),h=i.n(o),l=i("./node_modules/normalize-wheel/index.js"),r=i.n(l),m=i("./node_modules/prefix/index.js"),u=i.n(m),c=i("./app/animations/Title.js"),d=i("./app/animations/Paragraph.js"),p=i("./app/animations/Label.js"),g=i("./app/animations/Highlight.js"),w=i("./app/classes/AsyncLoad.js");class v{constructor({id:t,element:e,elements:i}){this.id=t,this.selector=e,this.selectorChildren={...i,animationsTitles:'[data-animation="title"]',animationsParagraphs:'[data-animation="paragraph"]',animationsLabels:'[data-animation="label"]',animationsHighlights:'[data-animation="highlight"]',preloaders:"[data-src]"},this.transformPrefix=u()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.onTouhcStartEvent=this.onTouchStart.bind(this),this.onTouhcMoveEvent=this.onTouchMove.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},a()(this.selectorChildren,((t,e)=>{t instanceof window.HTMLElement||t instanceof window.NodeList||Array.isArray(t)?this.elements[e]=t:(this.elements[e]=document.querySelectorAll(t),0===this.elements[e].length?this.elements[e]=null:1===this.elements[e].length&&(this.elements[e]=document.querySelector(t)))})),this.createAnimations(),this.createPreloader()}createPreloader(){this.preloaders=h()(this.elements.preloaders,(t=>new w.default({element:t})))}createAnimations(){this.animations=[],this.animationsHighlights=h()(this.elements.animationsHighlights,(t=>new g.default({element:t}))),this.animations.push(...this.animationsHighlights),this.animationsTitles=h()(this.elements.animationsTitles,(t=>new c.default({element:t}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=h()(this.elements.animationsParagraphs,(t=>new d.default({element:t}))),this.animations.push(...this.animationsParagraphs),this.animationsLabels=h()(this.elements.animationsLabels,(t=>new p.default({element:t}))),this.animations.push(...this.animationsLabels)}show(t){return new Promise((e=>{this.animationIn=s.default.timeline(),t?this.animationIn=t:(this.animationIn=s.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1})),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((t=>{this.removeEventListeners(),this.animationOut=s.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:t})}))}onMouseWheel(t){const{pixelY:e}=r()(t);this.scroll.target+=e}onTouchStart(t){this.touchStart=t.touches[0].clientY}onTouchMove(t){this.touchCurrent=t.touches[0].clientY,this.touchStart>this.touchCurrent?this.scroll.target+=15:this.touchStart<this.touchCurrent&&(this.scroll.target+=-15)}update(){this.scroll.target=s.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current<.01&&(this.scroll.current=0),this.scroll.current=s.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),a()(this.animations,(t=>t.onResize()))}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent),window.addEventListener("touchmove",this.onTouhcMoveEvent),window.addEventListener("touchstart",this.onTouhcStartEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(t){t.h=()=>"130f1d08dc5731d67a9a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxLQUFLZSxrQkFDMUNhLE9BQU84QyxpQkFBaUIsYUFBYzFFLEtBQUthLGtCQUM3QyxDQUVBNEMsdUJBQ0U3QixPQUFPK0Msb0JBQW9CLGFBQWMzRSxLQUFLVSxrQkFDaEQsa0JDNU5Ga0UsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUtdGVtcGxhdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL3dlYnNpdGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCc7XHJcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XHJcbmltcG9ydCBub3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnO1xyXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCc7XHJcblxyXG5pbXBvcnQgVGl0bGUgZnJvbSAnYW5pbWF0aW9ucy9UaXRsZSc7XHJcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnYW5pbWF0aW9ucy9QYXJhZ3JhcGgnO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSAnYW5pbWF0aW9ucy9MYWJlbCc7XHJcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnYW5pbWF0aW9ucy9IaWdobGlnaHQnO1xyXG5cclxuaW1wb3J0IEFzeW5jTG9hZCBmcm9tICdjbGFzc2VzL0FzeW5jTG9hZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcclxuICBjb25zdHJ1Y3Rvcih7IGlkLCBlbGVtZW50LCBlbGVtZW50cyB9KSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XHJcbiAgICAgIC4uLmVsZW1lbnRzLFxyXG5cclxuICAgICAgYW5pbWF0aW9uc1RpdGxlczogJ1tkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdJyxcclxuICAgICAgYW5pbWF0aW9uc1BhcmFncmFwaHM6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhZ3JhcGhcIl0nLFxyXG4gICAgICBhbmltYXRpb25zTGFiZWxzOiAnW2RhdGEtYW5pbWF0aW9uPVwibGFiZWxcIl0nLFxyXG4gICAgICBhbmltYXRpb25zSGlnaGxpZ2h0czogJ1tkYXRhLWFuaW1hdGlvbj1cImhpZ2hsaWdodFwiXScsXHJcblxyXG4gICAgICBwcmVsb2FkZXJzOiAnW2RhdGEtc3JjXScsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKTtcclxuXHJcbiAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Ub3VoY1N0YXJ0RXZlbnQgPSB0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblRvdWhjTW92ZUV2ZW50ID0gdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcclxuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcclxuXHJcbiAgICB0aGlzLnNjcm9sbCA9IHtcclxuICAgICAgY3VycmVudDogMCxcclxuICAgICAgdGFyZ2V0OiAwLFxyXG4gICAgICBsYXN0OiAwLFxyXG4gICAgICBsaW1pdDogMCxcclxuICAgIH07XHJcblxyXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxyXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKTtcclxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQcmVsb2FkZXIoKSB7XHJcbiAgICB0aGlzLnByZWxvYWRlcnMgPSBtYXAodGhpcy5lbGVtZW50cy5wcmVsb2FkZXJzLCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IEFzeW5jTG9hZCh7IGVsZW1lbnQgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcclxuXHJcbiAgICAvLyBIaWdobGlnaHRcclxuICAgIHRoaXMuYW5pbWF0aW9uc0hpZ2hsaWdodHMgPSBtYXAoXHJcbiAgICAgIHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc0hpZ2hsaWdodHMsXHJcbiAgICAgIChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIaWdobGlnaHQoe1xyXG4gICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNIaWdobGlnaHRzKTtcclxuXHJcbiAgICAvLyBUaXRsZXNcclxuICAgIHRoaXMuYW5pbWF0aW9uc1RpdGxlcyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNUaXRsZXMsIChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVGl0bGUoe1xyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zVGl0bGVzKTtcclxuXHJcbiAgICAvLyBQYXJhZ3JhcGhcclxuICAgIHRoaXMuYW5pbWF0aW9uc1BhcmFncmFwaHMgPSBtYXAoXHJcbiAgICAgIHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsXHJcbiAgICAgIChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoe1xyXG4gICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzKTtcclxuXHJcbiAgICAvLyBMYWJlbHNcclxuICAgIHRoaXMuYW5pbWF0aW9uc0xhYmVscyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNMYWJlbHMsIChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgTGFiZWwoe1xyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zTGFiZWxzKTtcclxuICB9XHJcblxyXG4gIC8vIEFuaW1hdGlvbnNcclxuICBzaG93KGFuaW1hdGlvbikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBnc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgICBpZiAoYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25JbiA9IGFuaW1hdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkluID0gZ3NhcC50aW1lbGluZSgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKFxyXG4gICAgICAgICAgdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhdXRvQWxwaGE6IDEsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKChfKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBnc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbk91dC50byh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VXaGVlbChlKSB7XHJcbiAgICBjb25zdCB7IHBpeGVsWSB9ID0gbm9ybWFsaXplV2hlZWwoZSk7XHJcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZO1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaFN0YXJ0KGUpIHtcclxuICAgIHRoaXMudG91Y2hTdGFydCA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaE1vdmUoZSkge1xyXG4gICAgdGhpcy50b3VjaEN1cnJlbnQgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHJcbiAgICBpZiAodGhpcy50b3VjaFN0YXJ0ID4gdGhpcy50b3VjaEN1cnJlbnQpIHtcclxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IDE1O1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRvdWNoU3RhcnQgPCB0aGlzLnRvdWNoQ3VycmVudCkge1xyXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gLTE1O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gZ3NhcC51dGlscy5jbGFtcChcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5zY3JvbGwubGltaXQsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcclxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IGdzYXAudXRpbHMuaW50ZXJwb2xhdGUoXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcclxuICAgICAgMC4xXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcclxuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYDsgLy9wcmV0dGllci1pZ25vcmVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUmVzaXplKCkge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xyXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBlYWNoKHRoaXMuYW5pbWF0aW9ucywgKGFuaW1hdGlvbikgPT4gYW5pbWF0aW9uLm9uUmVzaXplKCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91aGNNb3ZlRXZlbnQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91aGNTdGFydEV2ZW50KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTMwZjFkMDhkYzU3MzFkNjdhOWFcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiYW5pbWF0aW9uc1RpdGxlcyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc0xhYmVscyIsImFuaW1hdGlvbnNIaWdobGlnaHRzIiwicHJlbG9hZGVycyIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsIm9uTW91c2VXaGVlbEV2ZW50Iiwib25Nb3VzZVdoZWVsIiwiYmluZCIsIm9uVG91aGNTdGFydEV2ZW50Iiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VoY01vdmVFdmVudCIsIm9uVG91Y2hNb3ZlIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlQW5pbWF0aW9ucyIsImNyZWF0ZVByZWxvYWRlciIsIm1hcCIsIkFzeW5jTG9hZCIsImFuaW1hdGlvbnMiLCJIaWdobGlnaHQiLCJwdXNoIiwiVGl0bGUiLCJQYXJhZ3JhcGgiLCJMYWJlbCIsInNob3ciLCJhbmltYXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiZ3NhcCIsImZyb21UbyIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJ0byIsIm9uQ29tcGxldGUiLCJlIiwicGl4ZWxZIiwibm9ybWFsaXplV2hlZWwiLCJ0b3VjaFN0YXJ0IiwidG91Y2hlcyIsImNsaWVudFkiLCJ0b3VjaEN1cnJlbnQiLCJ1cGRhdGUiLCJ3cmFwcGVyIiwic3R5bGUiLCJvblJlc2l6ZSIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=