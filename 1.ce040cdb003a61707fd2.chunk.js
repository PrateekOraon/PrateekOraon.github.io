(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./app/containers/FeaturePage/index.js":function(e,t,o){"use strict";o.r(t);var a,s=o("./node_modules/react/index.js"),r=o.n(s),p=(o("./app/containers/FeaturePage/style.scss"),o("./node_modules/react-router-dom/index.js")),n=o("./node_modules/react-iframe/dist/cjs/iframe.js"),i=o.n(n),l=o("./app/localStorage.js");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,o,s){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,p=arguments.length-3;if(t||0===p||(t={children:void 0}),1===p)t.children=s;else if(p>1){for(var n=new Array(p),i=0;i<p;i++)n[i]=arguments[i+3];t.children=n}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:a,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?j(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var h=Object(l.a)(),v=function(e){function t(){var e,o;u(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return y(j(o=g(this,(e=m(t)).call.apply(e,[this].concat(s)))),"state",{mount:0,added:!1}),o}var a,s,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),a=t,(s=[{key:"componentDidMount",value:function(){h&&h.favorites&&this.setState({added:Object.keys(h.favorites).includes(this.props.data.imdbID)})}},{key:"render",value:function(){var e=this,t=this.props.data;return d("div",{className:"feature-page",onMouseEnter:function(){e.setState({mount:1})},onMouseLeave:function(){e.setState({mount:0})}},void 0,d("div",{className:"poster"},void 0,d("img",{src:o("./app/images/posters sync recursive ^\\.\\/.*$")("./".concat(t.poster)),alt:t.title})),d("div",{className:"back"},void 0,d("h4",{},void 0,t.title),d("div",{},void 0,"(".concat(t.year,")")),d("div",{className:"description"},void 0,t.description)),this.state.mount?d(i.a,{url:"https://www.youtube-nocookie.com/embed/".concat(t.trailer,"?autoplay=1&controls=0&mute=1&enablejsapi=1&loop=1"),width:"100%",height:"100%",id:"myId",className:"play",display:"initial",allowFullScreen:!0,frameborder:"0"}):null,d(p.Link,{className:"link",to:{pathname:"/features/".concat(t.trailer),show:t}},void 0,d("div",{},void 0,t.title)),this.state.added?d("img",{className:"remove_from_list",onClick:function(){e.props.removeFromFav(t),e.setState({added:!1})},src:o("./app/images/minus.png"),alt:"Remove from your list",title:"Remove from your list"}):d("img",{className:"add_to_list",src:o("./app/images/plus.png"),alt:"Add to your List",title:"Add to your List",onClick:function(){e.props.addToFav(t),e.setState({added:!0})}}))}}])&&f(a.prototype,s),r&&f(a,r),t}(r.a.Component);o.d(t,"default",(function(){return v}))},"./app/containers/FeaturePage/style.scss":function(e,t,o){var a=o("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/containers/FeaturePage/style.scss");"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(a,s);a.locals&&(e.exports=a.locals)},"./app/images/minus.png":function(e,t,o){e.exports=o.p+"b07fb29433d5691b07fe57652d82af52.png"},"./app/images/plus.png":function(e,t,o){e.exports=o.p+"7c4c5aec88a405d83f3c2e43b0a2d4df.png"},"./app/images/posters sync recursive ^\\.\\/.*$":function(e,t,o){var a={"./ad.jpg":"./app/images/posters/ad.jpg","./bh.jpg":"./app/images/posters/bh.jpg","./bl.jpg":"./app/images/posters/bl.jpg","./cdc.jpg":"./app/images/posters/cdc.jpg","./dd.jpg":"./app/images/posters/dd.jpg","./f.jpg":"./app/images/posters/f.jpg","./fh.jpg":"./app/images/posters/fh.jpg","./hg.jpg":"./app/images/posters/hg.jpg","./hoc.jpg":"./app/images/posters/hoc.jpg","./jj.jpg":"./app/images/posters/jj.jpg","./l.jpg":"./app/images/posters/l.jpg","./mam.jpg":"./app/images/posters/mam.jpg","./mon.jpg":"./app/images/posters/mon.jpg","./mp.jpg":"./app/images/posters/mp.jpg","./n.jpg":"./app/images/posters/n.jpg","./oitnb.jpg":"./app/images/posters/oitnb.jpg","./s8.jpg":"./app/images/posters/s8.jpg","./tk.jpg":"./app/images/posters/tk.jpg","./uks.jpg":"./app/images/posters/uks.jpg","./wbd.jpg":"./app/images/posters/wbd.jpg","./whas.jpg":"./app/images/posters/whas.jpg"};function s(e){var t=r(e);return o(t)}function r(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="./app/images/posters sync recursive ^\\.\\/.*$"},"./app/images/posters/ad.jpg":function(e,t,o){e.exports=o.p+"6c704f3dc21b7b53b91efdb8f707f67d.jpg"},"./app/images/posters/bh.jpg":function(e,t,o){e.exports=o.p+"9e2e4a294d2d6c9af8970752a783802f.jpg"},"./app/images/posters/bl.jpg":function(e,t,o){e.exports=o.p+"758af35cc4ac3b15926817fdfb53181e.jpg"},"./app/images/posters/cdc.jpg":function(e,t,o){e.exports=o.p+"24771cfecbab0e05d14889523bb17411.jpg"},"./app/images/posters/dd.jpg":function(e,t,o){e.exports=o.p+"d34f78fb7726ce0547986b4b3ddc3758.jpg"},"./app/images/posters/f.jpg":function(e,t,o){e.exports=o.p+"55abac24f9528642cbd49a87c3618038.jpg"},"./app/images/posters/fh.jpg":function(e,t,o){e.exports=o.p+"a63675faaadd71675a528377e5c94d6a.jpg"},"./app/images/posters/hg.jpg":function(e,t,o){e.exports=o.p+"2ae5d4f08b74e258a5bf291ce9c9812f.jpg"},"./app/images/posters/hoc.jpg":function(e,t,o){e.exports=o.p+"cb60715db17a236fd8607455b7d56a3d.jpg"},"./app/images/posters/jj.jpg":function(e,t,o){e.exports=o.p+"d357f9b08dcee233b69e12b61a3d030f.jpg"},"./app/images/posters/l.jpg":function(e,t,o){e.exports=o.p+"4ae66e92c6c0feab1c67fca340161cd2.jpg"},"./app/images/posters/mam.jpg":function(e,t,o){e.exports=o.p+"d4dee153f3dcc8e89bccbfb03ddeaeb5.jpg"},"./app/images/posters/mon.jpg":function(e,t,o){e.exports=o.p+"6f773de666a867e3513e726c79771f97.jpg"},"./app/images/posters/mp.jpg":function(e,t,o){e.exports=o.p+"d7e375415a0709064aaacf0963da5b31.jpg"},"./app/images/posters/n.jpg":function(e,t,o){e.exports=o.p+"e24d50127229f55f44139123add99754.jpg"},"./app/images/posters/oitnb.jpg":function(e,t,o){e.exports=o.p+"f38a702bce858260dbea812b53d460da.jpg"},"./app/images/posters/s8.jpg":function(e,t,o){e.exports=o.p+"011f4f3dbbcf7ac32c567de73da27e35.jpg"},"./app/images/posters/tk.jpg":function(e,t,o){e.exports=o.p+"fa27494f77891e074eea2bc5df0de232.jpg"},"./app/images/posters/uks.jpg":function(e,t,o){e.exports=o.p+"366de183241a455aeb78393c9d87268c.jpg"},"./app/images/posters/wbd.jpg":function(e,t,o){e.exports=o.p+"31bfbf53c696fa6fbd9e9b1aa2ace784.jpg"},"./app/images/posters/whas.jpg":function(e,t,o){e.exports=o.p+"7b3d5ad9e6a07d760c77506755168903.jpg"},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/containers/FeaturePage/style.scss":function(e,t,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".feature-page{position:relative;border-radius:3px;background-color:rgba(0,0,0,0.7);display:grid;overflow:hidden;color:white;grid-template-columns:repeat(2, [col] 1fr);grid-template-rows:repeat(2, min-content);grid-auto-flow:column dense;transition:transform 0.1s ease-in-out;grid-gap:0.5em;padding-right:0.5em;width:100%}.feature-page .poster{grid-row:1/-1;height:313px}.feature-page .poster img{width:100%;min-height:313px}.feature-page .description{font-size:0.8rem}.feature-page:hover{transform:scale(1.05, 1.05);z-index:1}.feature-page:hover .link{opacity:1;background-color:rgba(0,0,0,0)}.feature-page:hover .add_to_list,.feature-page:hover .remove_from_list{opacity:1}.play{position:absolute;left:0;top:-50px;width:100%;height:130%;transition:all 0.1s ease-out;transition-delay:3s}.link{opacity:0;position:absolute;width:100%;height:100%;text-decoration:none;color:white;z-index:11;background-color:#000;font-weight:bold;display:flex;flex-direction:column-reverse;padding:0 0 10px 10px;transition:all 0.2s ease-out;transition-delay:1s}.add_to_list,.remove_from_list{opacity:0;position:absolute;bottom:5px;right:5px;z-index:13;transform:scale(0.7);transition:opacity 0.2s ease-out;transition-delay:1s;cursor:pointer}.add_to_list:hover,.remove_from_list:hover{transform:scale(0.75)}\n",""])},"./node_modules/react-iframe/dist/cjs/iframe.js":function(e,t,o){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,o=1,a=arguments.length;o<a;o++)for(var s in t=arguments[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=s(o("./node_modules/react/index.js")),p=s(o("./node_modules/object-assign/index.js"));t.default=function(e){for(var t=e.url,o=e.allowFullScreen,s=e.position,n=e.display,i=e.height,l=e.width,c=e.overflow,d=e.styles,u=e.onLoad,f=e.onMouseOver,g=e.onMouseOut,m=e.scrolling,j=e.id,b=e.frameBorder,y=e.ariaHidden,h=e.sandbox,v=e.allow,w=e.className,x=e.title,_=e.ariaLabel,k=e.ariaLabelledby,O=e.name,S=e.target,P=e.loading,N=e.importance,F=e.referrerpolicy,M=e.allowpaymentrequest,L=e.src,E=p.default({src:L||t,target:S||null,style:{position:s||null,display:n||"block",overflow:c||null},scrolling:m||null,allowpaymentrequest:M||null,importance:N||null,sandbox:h||null,loading:P||null,styles:d||null,name:O||null,className:w||null,referrerpolicy:F||null,title:x||null,allow:v||null,id:j||null,"aria-labelledby":k||null,"aria-hidden":y||null,"aria-label":_||null,width:l||null,height:i||null,onLoad:u||null,onMouseOver:f||null,onMouseOut:g||null}),C=Object.create(null),D=0,$=Object.keys(E);D<$.length;D++){var z=$[D];null!=E[z]&&(C[z]=E[z])}for(var A=0,T=Object.keys(C.style);A<T.length;A++){var I=T[A];null==C.style[I]&&delete C.style[I]}if(o)if("allow"in C){var R=C.allow.replace("fullscreen","");C.allow=("fullscreen "+R.trim()).trim()}else C.allow="fullscreen";return b>=0&&(C.style.hasOwnProperty("border")||(C.style.border=b)),r.default.createElement("iframe",a({},C))}}}]);