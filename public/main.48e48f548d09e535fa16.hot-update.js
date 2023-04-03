/*! For license information please see main.48e48f548d09e535fa16.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatewebsite_template("main",{"./app/index.js":(e,t,s)=>{s.r(t);var i=s("./app/pages/Home/index.js"),a=s("./app/pages/Project/index.js"),n=s("./app/components/Preloader.js"),o=s("./node_modules/lodash/each.js"),h=s.n(o);new class{constructor(){this.createContent(),this.createPreloader(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.onResize(),this.update()}createPreloader(){this.preloader=new n.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={home:new i.default,project:new a.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}onPreloaded(){this.onResize(),this.preloader.destroy()}onPopState(){this.onChange({url:window.location.pathname,push:!1})}async onChange({url:e,push:t=!0}){await this.page.hide();const s=await window.fetch(e);if(200===s.status){const i=await s.text(),a=document.createElement("div");t&&window.history.pushState({},"",e),a.innerHTML=i;const n=a.querySelector(".content");this.template=n.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=n.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else console.error("Error")}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.page&&this.page.updateTime&&this.page.updateTime(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll(".home__project__explore--link, .home__project__video__link, .navigation__link__to__home");h()(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange({url:s}),window.scrollTo({top:0,left:0})}}))}}}},(function(e){e.h=()=>"15cafe4cfb849e93faa9"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40OGU0OGY1NDhkMDllNTM1ZmExNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eVBBd0lBLElBaklBLE1BQ0VBLGNBQ0VDLEtBQUtDLGdCQUNMRCxLQUFLRSxrQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUVMTCxLQUFLTSxXQUNMTixLQUFLTyxRQUNQLENBRUFMLGtCQUNFRixLQUFLUSxVQUFZLElBQUlDLEVBQUFBLFFBQ3JCVCxLQUFLUSxVQUFVRSxLQUFLLFlBQWFWLEtBQUtXLFlBQVlDLEtBQUtaLE1BQ3pELENBRUFDLGdCQUNFRCxLQUFLYSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDZixLQUFLZ0IsU0FBV2hCLEtBQUthLFFBQVFJLGFBQWEsZ0JBQzVDLENBRUFkLGNBQ0VILEtBQUtrQixNQUFRLENBQ1hDLEtBQU0sSUFBSUMsRUFBQUEsUUFDVkMsUUFBUyxJQUFJQyxFQUFBQSxTQUdmdEIsS0FBS3VCLEtBQU92QixLQUFLa0IsTUFBTWxCLEtBQUtnQixVQUU1QmhCLEtBQUt1QixLQUFLQyxTQUNWeEIsS0FBS3VCLEtBQUtFLE1BQ1osQ0FFQWQsY0FDRVgsS0FBS00sV0FDTE4sS0FBS1EsVUFBVWtCLFNBQ2pCLENBRUFDLGFBQ0UzQixLQUFLNEIsU0FBUyxDQUFFQyxJQUFLQyxPQUFPQyxTQUFTQyxTQUFVQyxNQUFNLEdBQ3ZELENBRUFDLGdCQUFlLElBQUVMLEVBQUcsS0FBRUksR0FBTyxVQUNyQmpDLEtBQUt1QixLQUFLWSxPQUVoQixNQUFNQyxRQUFnQk4sT0FBT08sTUFBTVIsR0FFbkMsR0FBdUIsTUFBbkJPLEVBQVFFLE9BQWdCLENBQzFCLE1BQU1DLFFBQWFILEVBQVFJLE9BQ3JCQyxFQUFNM0IsU0FBUzRCLGNBQWMsT0FFL0JULEdBQ0ZILE9BQU9hLFFBQVFDLFVBQVUsQ0FBQyxFQUFHLEdBQUlmLEdBR25DWSxFQUFJSSxVQUFZTixFQUVoQixNQUFNTyxFQUFhTCxFQUFJMUIsY0FBYyxZQUVyQ2YsS0FBS2dCLFNBQVc4QixFQUFXN0IsYUFBYSxpQkFFeENqQixLQUFLYSxRQUFRa0MsYUFBYSxnQkFBaUIvQyxLQUFLZ0IsVUFDaERoQixLQUFLYSxRQUFRZ0MsVUFBWUMsRUFBV0QsVUFFcEM3QyxLQUFLdUIsS0FBT3ZCLEtBQUtrQixNQUFNbEIsS0FBS2dCLFVBRTVCaEIsS0FBS3VCLEtBQUtDLFNBRVZ4QixLQUFLTSxXQUVMTixLQUFLdUIsS0FBS0UsT0FDVnpCLEtBQUtLLGtCQUNQLE1BQ0UyQyxRQUFRQyxNQUFNLFFBRWxCLENBRUEzQyxXQUNNTixLQUFLdUIsTUFBUXZCLEtBQUt1QixLQUFLakIsVUFDekJOLEtBQUt1QixLQUFLakIsVUFFZCxDQUtBQyxTQUNNUCxLQUFLdUIsTUFBUXZCLEtBQUt1QixLQUFLaEIsUUFDekJQLEtBQUt1QixLQUFLaEIsU0FHUlAsS0FBS3VCLE1BQVF2QixLQUFLdUIsS0FBSzJCLFlBQ3pCbEQsS0FBS3VCLEtBQUsyQixhQUdabEQsS0FBS21ELE1BQVFyQixPQUFPc0Isc0JBQXNCcEQsS0FBS08sT0FBT0ssS0FBS1osTUFDN0QsQ0FLQUksb0JBQ0UwQixPQUFPdUIsaUJBQWlCLFdBQVlyRCxLQUFLMkIsV0FBV2YsS0FBS1osT0FDekQ4QixPQUFPdUIsaUJBQWlCLFNBQVVyRCxLQUFLTSxTQUFTTSxLQUFLWixNQUN2RCxDQUVBSyxtQkFDRSxNQUFNaUQsRUFBUXhDLFNBQVN5QyxpQkFDckIsMkZBR0ZDLElBQUtGLEdBQVFHLElBQ1hBLEVBQUtDLFFBQVdDLElBQ2RBLEVBQUVDLGlCQUVGLE1BQU0sS0FBRUMsR0FBU0osRUFFakJ6RCxLQUFLNEIsU0FBUyxDQUFFQyxJQUFLZ0MsSUFDckIvQixPQUFPZ0MsU0FBUyxDQUNkQyxJQUFLLEVBQ0xDLEtBQU0sR0FDTixDQUNILEdBRUwsa0JDcklGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS10ZW1wbGF0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9tZSBmcm9tICdwYWdlcy9Ib21lJztcclxuXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJ3BhZ2VzL1Byb2plY3QnO1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJztcclxuXHJcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKTtcclxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcclxuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpO1xyXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhZ2VzKCkge1xyXG4gICAgdGhpcy5wYWdlcyA9IHtcclxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcclxuICAgICAgcHJvamVjdDogbmV3IFByb2plY3QoKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcclxuXHJcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XHJcbiAgICB0aGlzLnBhZ2Uuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgb25QcmVsb2FkZWQoKSB7XHJcbiAgICB0aGlzLm9uUmVzaXplKCk7XHJcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBvblBvcFN0YXRlKCkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSh7IHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCBwdXNoOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uQ2hhbmdlKHsgdXJsLCBwdXNoID0gdHJ1ZSB9KSB7XHJcbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKTtcclxuXHJcbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KCk7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgaWYgKHB1c2gpIHtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuXHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpO1xyXG5cclxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpO1xyXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUw7XHJcblxyXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xyXG5cclxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG5cclxuICAgICAgdGhpcy5wYWdlLnNob3coKTtcclxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25SZXNpemUoKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xyXG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvb3BcclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcclxuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZVRpbWUpIHtcclxuICAgICAgdGhpcy5wYWdlLnVwZGF0ZVRpbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3RlbmVyc1xyXG4gICAqL1xyXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlLmJpbmQodGhpcykpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBhZGRMaW5rTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLmhvbWVfX3Byb2plY3RfX2V4cGxvcmUtLWxpbmssIC5ob21lX19wcm9qZWN0X192aWRlb19fbGluaywgLm5hdmlnYXRpb25fX2xpbmtfX3RvX19ob21lJ1xyXG4gICAgKTtcclxuXHJcbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xyXG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHsgdXJsOiBocmVmIH0pO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5uZXcgQXBwKCk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE1Y2FmZTRjZmI4NDllOTNmYWE5XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsIm9uUmVzaXplIiwidXBkYXRlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiaG9tZSIsIkhvbWUiLCJwcm9qZWN0IiwiUHJvamVjdCIsInBhZ2UiLCJjcmVhdGUiLCJzaG93IiwiZGVzdHJveSIsIm9uUG9wU3RhdGUiLCJvbkNoYW5nZSIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwdXNoIiwiYXN5bmMiLCJoaWRlIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwiZXJyb3IiLCJ1cGRhdGVUaW1lIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==