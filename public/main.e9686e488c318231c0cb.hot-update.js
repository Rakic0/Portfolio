/*! For license information please see main.e9686e488c318231c0cb.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatewebsite_template("main",{"./app/index.js":(e,t,a)=>{a.r(t),Object(function(){var e=new Error("Cannot find module 'pages/About'");throw e.code="MODULE_NOT_FOUND",e}());var s=a("./app/pages/Home/index.js"),n=a("./app/pages/Work/index.js"),i=a("./app/pages/Project/index.js"),o=a("./app/components/Preloader.js"),r=a("./node_modules/lodash/each.js"),d=a.n(r);new class{constructor(){this.createContent(),this.createPreloader(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new o.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new Object(function(){var e=new Error("Cannot find module 'pages/About'");throw e.code="MODULE_NOT_FOUND",e}())(),home:new s.default,work:new n.default,project:new i.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}onPreloaded(){this.onResize(),this.preloader.destroy()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show()}else console.error("Error")}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.page&&this.page.updateTime&&this.page.updateTime(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll(".navigation__link");d()(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:a}=e;this.onChange(a)}}))}}}},(function(e){e.h=()=>"40aa322d57427fa936cf"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lOTY4NmU0ODhjMzE4MjMxYzBjYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7c1lBdUhBLElBOUdBLE1BQ0VBLGNBQ0VDLEtBQUtDLGdCQUNMRCxLQUFLRSxrQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUVMTCxLQUFLTSxRQUNQLENBRUFKLGtCQUNFRixLQUFLTyxVQUFZLElBQUlDLEVBQUFBLFFBQ3JCUixLQUFLTyxVQUFVRSxLQUFLLFlBQWFULEtBQUtVLFlBQVlDLEtBQUtYLE1BQ3pELENBRUFDLGdCQUNFRCxLQUFLWSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDZCxLQUFLZSxTQUFXZixLQUFLWSxRQUFRSSxhQUFhLGdCQUM1QyxDQUVBYixjQUNFSCxLQUFLaUIsTUFBUSxDQUNYQyxNQUFPLElBQUlDLE9BQUFBLFdBQUFBLElBQUFBLEVBQUFBLElBQUFBLE1BQUFBLG9DQUFBQSxNQUFBQSxFQUFBQSxLQUFBQSxtQkFBQUEsQ0FBQUEsQ0FBQUEsR0FBSixHQUNQQyxLQUFNLElBQUlDLEVBQUFBLFFBQ1ZDLEtBQU0sSUFBSUMsRUFBQUEsUUFDVkMsUUFBUyxJQUFJQyxFQUFBQSxTQUdmekIsS0FBSzBCLEtBQU8xQixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBQzVCZixLQUFLMEIsS0FBS0MsU0FDVjNCLEtBQUswQixLQUFLRSxNQUNaLENBRUFsQixjQUNFVixLQUFLNkIsV0FDTDdCLEtBQUtPLFVBQVV1QixTQUNqQixDQUVBQyxlQUFlQyxTQUNQaEMsS0FBSzBCLEtBQUtPLE9BRWhCLE1BQU1DLFFBQWdCQyxPQUFPQyxNQUFNSixHQUVuQyxHQUF1QixNQUFuQkUsRUFBUUcsT0FBZ0IsQ0FDMUIsTUFBTUMsUUFBYUosRUFBUUssT0FDckJDLEVBQU0zQixTQUFTNEIsY0FBYyxPQUVuQ0QsRUFBSUUsVUFBWUosRUFFaEIsTUFBTUssRUFBYUgsRUFBSTFCLGNBQWMsWUFFckNkLEtBQUtlLFNBQVc0QixFQUFXM0IsYUFBYSxpQkFFeENoQixLQUFLWSxRQUFRZ0MsYUFBYSxnQkFBaUI1QyxLQUFLZSxVQUNoRGYsS0FBS1ksUUFBUThCLFVBQVlDLEVBQVdELFVBRXBDMUMsS0FBSzBCLEtBQU8xQixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBRTVCZixLQUFLMEIsS0FBS0MsU0FDVjNCLEtBQUswQixLQUFLRSxNQUNaLE1BQ0VpQixRQUFRQyxNQUFNLFFBRWxCLENBRUFqQixXQUNNN0IsS0FBSzBCLE1BQVExQixLQUFLMEIsS0FBS0csVUFDekI3QixLQUFLMEIsS0FBS0csVUFFZCxDQUtBdkIsU0FDTU4sS0FBSzBCLE1BQVExQixLQUFLMEIsS0FBS3BCLFFBQ3pCTixLQUFLMEIsS0FBS3BCLFNBR1JOLEtBQUswQixNQUFRMUIsS0FBSzBCLEtBQUtxQixZQUN6Qi9DLEtBQUswQixLQUFLcUIsYUFHWi9DLEtBQUtnRCxNQUFRYixPQUFPYyxzQkFBc0JqRCxLQUFLTSxPQUFPSyxLQUFLWCxNQUM3RCxDQUtBSSxvQkFDRStCLE9BQU9lLGlCQUFpQixTQUFVbEQsS0FBSzZCLFNBQVNsQixLQUFLWCxNQUN2RCxDQUVBSyxtQkFDRSxNQUFNOEMsRUFBUXRDLFNBQVN1QyxpQkFBaUIscUJBRXhDQyxJQUFLRixHQUFRRyxJQUNYQSxFQUFLQyxRQUFXQyxJQUNkQSxFQUFFQyxpQkFFRixNQUFNLEtBQUVDLEdBQVNKLEVBRWpCdEQsS0FBSzJELFNBQVNELEVBQUssQ0FDcEIsR0FFTCxrQkNwSEZFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLXRlbXBsYXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL3dlYnNpdGUtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICdwYWdlcy9BYm91dCc7XHJcbmltcG9ydCBIb21lIGZyb20gJ3BhZ2VzL0hvbWUnO1xyXG5pbXBvcnQgV29yayBmcm9tICdwYWdlcy9Xb3JrJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAncGFnZXMvUHJvamVjdCc7XHJcblxyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJztcclxuXHJcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKTtcclxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcclxuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpO1xyXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbnRlbnQoKSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhZ2VzKCkge1xyXG4gICAgdGhpcy5wYWdlcyA9IHtcclxuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxyXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxyXG4gICAgICB3b3JrOiBuZXcgV29yaygpLFxyXG4gICAgICBwcm9qZWN0OiBuZXcgUHJvamVjdCgpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xyXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5wYWdlLnNob3coKTtcclxuICB9XHJcblxyXG4gIG9uUHJlbG9hZGVkKCkge1xyXG4gICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgdGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25DaGFuZ2UodXJsKSB7XHJcbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKTtcclxuXHJcbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KCk7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgICB0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKTtcclxuXHJcbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKTtcclxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MO1xyXG5cclxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcclxuXHJcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcclxuICAgICAgdGhpcy5wYWdlLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XHJcbiAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9vcFxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xyXG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlVGltZSkge1xyXG4gICAgICB0aGlzLnBhZ2UudXBkYXRlVGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdGVuZXJzXHJcbiAgICovXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uX19saW5rJyk7XHJcblxyXG4gICAgZWFjaChsaW5rcywgKGxpbmspID0+IHtcclxuICAgICAgbGluay5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGluaztcclxuXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxubmV3IEFwcCgpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MGFhMzIyZDU3NDI3ZmE5MzZjZlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlUGFnZXMiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiaG9tZSIsIkhvbWUiLCJ3b3JrIiwiV29yayIsInByb2plY3QiLCJQcm9qZWN0IiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJvblJlc2l6ZSIsImRlc3Ryb3kiLCJhc3luYyIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImVycm9yIiwidXBkYXRlVGltZSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJvbkNoYW5nZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==