(this.webpackJsonpreact_gallery_app=this.webpackJsonpreact_gallery_app||[]).push([[0],{35:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a(27),r=a.n(s),o=(a(35),a(8)),i=a(9),h=a(11),l=a(10),u=a(12),j=a(2),p=a(28),d=a.n(p),b=function(e){var t="https://live.staticflickr.com/".concat(e.data.server,"/").concat(e.data.farm,"/").concat(e.data.id,"_").concat(e.data.secret,".jpg");return Object(c.jsx)("li",{className:"photo-container",children:Object(c.jsx)("img",{src:t,alt:"",className:"photo-container"})})},m=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"not-found",children:[Object(c.jsx)("h1",{children:"No Results Found"}),Object(c.jsxs)("p",{children:["Your search for '",this.props.searchQuery,"' returned no results."]})]})}}]),a}(n.Component),O=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).updatePhotosState=function(){var t=e.props.location.search,a=new URLSearchParams(t).get("q");console.log(a),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("5e506bd15f5ff6b73f686a702884a2d1","&tags=").concat(a,"&per_page=24&format=json&nojsoncallback=1")).then((function(t){e.setState({photos:t.data.photos.photo})})).catch((function(e){console.log("Error fetching and parsing data:",e)}))},e.state={photos:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.updatePhotosState()}},{key:"componentDidUpdate",value:function(e,t){e.location.search!==this.props.location.search&&this.updatePhotosState()}},{key:"render",value:function(){var e=this,t=this.props.location.search,a=new URLSearchParams(t).get("q"),n=this.state.photos.map((function(t,a){return Object(c.jsx)(b,{data:e.state.photos[a]},t.id)}));return this.props.location.search?this.state.photos.length<1?Object(c.jsx)(m,{searchQuery:a}):Object(c.jsx)("ul",{className:"photo-container",children:n}):Object(c.jsx)("h2",{children:Object(c.jsx)("i",{children:"Please enter a search term."})})}}]),a}(n.Component),f=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onSearchChange=function(t){var a=t.target.value;e.setState({searchValue:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.history.push({pathname:"/search",search:"?q=".concat(e.state.searchValue)})},e.state={searchValue:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.search,t=new URLSearchParams(e).get("q");this.setState({searchValue:t})}},{key:"componentDidUpdate",value:function(e,t){var a=this.props.location.search,c=new URLSearchParams(a).get("q");e.location.search!==this.props.location.search&&(this.setState({searchValue:c}),console.log(this.state.searchValue))}},{key:"render",value:function(){return Object(c.jsxs)("form",{className:"search-form",onSubmit:this.handleSubmit,children:[Object(c.jsx)("input",{type:"search",onChange:this.onSearchChange,name:"search",value:this.state.searchValue||"",placeholder:"Search..."}),Object(c.jsx)("button",{type:"submit",id:"submit",className:"search-button",children:Object(c.jsx)("i",{className:"fas fa-search"})})]})}}]),a}(n.Component),v=Object(j.f)(f),x=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(c.jsx)("header",{children:Object(c.jsxs)("ul",{className:"main-nav",children:[Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:{pathname:"/search",search:"?q=mountains"},id:"mountains",children:"Mountains"})}),Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:{pathname:"/search",search:"?q=trees"},id:"trees",children:"Trees"})}),Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:{pathname:"/search",search:"?q=stars"},id:"stars",children:"Stars"})})]})})}}]),a}(n.Component),g=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(c.jsxs)(u.a,{basename:"/react_gallery_app",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"main-header",children:Object(c.jsx)("div",{className:"inner",children:Object(c.jsx)("h1",{className:"main-title",children:"Photo Search"})})}),Object(c.jsx)(v,{})]}),Object(c.jsx)("div",{className:"main-nav",children:Object(c.jsx)(x,{})}),Object(c.jsx)("div",{className:"main-content",children:Object(c.jsx)(j.c,{children:Object(c.jsx)(j.a,{path:"/",component:O})})})]})}}]),a}(n.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(c.jsx)(g,{}),document.getElementById("root")),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.31f8f846.chunk.js.map