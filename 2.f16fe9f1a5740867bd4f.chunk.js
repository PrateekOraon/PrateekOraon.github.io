(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./app/containers/TrailerPage/Trailer.js":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return b}));var o,n=r("./node_modules/react/index.js"),s=r.n(n),i=r("./node_modules/react-iframe/dist/cjs/iframe.js"),a=r.n(i);r("./app/containers/TrailerPage/style.scss");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=n;else if(i>1){for(var a=new Array(i),p=0;p<i;p++)a[p]=arguments[p+3];t.children=a}if(t&&s)for(var l in s)void 0===t[l]&&(t[l]=s[l]);else t||(t=s||{});return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?h(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(t){function o(){var e,t;c(this,o);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return g(h(t=d(this,(e=f(o)).call.apply(e,[this].concat(n)))),"state",{imdb_rating:null}),t}var n,s,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(o,t),n=o,(s=[{key:"componentDidMount",value:function(){var t=this;e("http://www.omdbapi.com/?i=".concat(this.props.location.show.imdbID,"&apikey=15680846")).then((function(e){return e.json()})).then((function(e){return t.setState({imdb_rating:e.imdbRating})})).catch((function(e){return console.log("Error::::",e)}))}},{key:"render",value:function(){var e=this.props.match.params.trailerId,t=this.props.location.show;return l("div",{className:"trailer"},void 0,l("div",{className:"details"},void 0,l("div",{},void 0,l("img",{src:r("./app/images/posters sync recursive ^\\.\\/.*$")("./".concat(t.poster)),alt:t.description})),l("div",{},void 0,l("h4",{},void 0,t.title),l("div",{},void 0,"(".concat(t.year,")")),l("div",{},void 0,"".concat(this.state.imdb_rating,"/10")),l("div",{},void 0,t.description))),l(a.a,{url:"https://www.youtube-nocookie.com/embed/".concat(e),width:"100%",height:"100%",id:"myId",className:"iframe",display:"initial",position:"relative",allowFullScreen:!0}))}}])&&u(n.prototype,s),i&&u(n,i),o}(s.a.Component)}).call(this,r("./node_modules/exports-loader/index.js?self.fetch!./node_modules/whatwg-fetch/dist/fetch.umd.js"))},"./app/containers/TrailerPage/index.js":function(e,t,r){"use strict";r.r(t);var o=r("./app/containers/TrailerPage/Trailer.js");r.d(t,"default",(function(){return o.a}))},"./app/containers/TrailerPage/style.scss":function(e,t,r){var o=r("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/containers/TrailerPage/style.scss");"string"==typeof o&&(o=[[e.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("./node_modules/style-loader/lib/addStyles.js")(o,n);o.locals&&(e.exports=o.locals)},"./app/images/posters sync recursive ^\\.\\/.*$":function(e,t,r){var o={"./ad.jpg":"./app/images/posters/ad.jpg","./bh.jpg":"./app/images/posters/bh.jpg","./bl.jpg":"./app/images/posters/bl.jpg","./cdc.jpg":"./app/images/posters/cdc.jpg","./dd.jpg":"./app/images/posters/dd.jpg","./f.jpg":"./app/images/posters/f.jpg","./fh.jpg":"./app/images/posters/fh.jpg","./hg.jpg":"./app/images/posters/hg.jpg","./hoc.jpg":"./app/images/posters/hoc.jpg","./jj.jpg":"./app/images/posters/jj.jpg","./l.jpg":"./app/images/posters/l.jpg","./mam.jpg":"./app/images/posters/mam.jpg","./mon.jpg":"./app/images/posters/mon.jpg","./mp.jpg":"./app/images/posters/mp.jpg","./n.jpg":"./app/images/posters/n.jpg","./oitnb.jpg":"./app/images/posters/oitnb.jpg","./s8.jpg":"./app/images/posters/s8.jpg","./tk.jpg":"./app/images/posters/tk.jpg","./uks.jpg":"./app/images/posters/uks.jpg","./wbd.jpg":"./app/images/posters/wbd.jpg","./whas.jpg":"./app/images/posters/whas.jpg"};function n(e){var t=s(e);return r(t)}function s(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=s,e.exports=n,n.id="./app/images/posters sync recursive ^\\.\\/.*$"},"./app/images/posters/ad.jpg":function(e,t,r){e.exports=r.p+"6c704f3dc21b7b53b91efdb8f707f67d.jpg"},"./app/images/posters/bh.jpg":function(e,t,r){e.exports=r.p+"9e2e4a294d2d6c9af8970752a783802f.jpg"},"./app/images/posters/bl.jpg":function(e,t,r){e.exports=r.p+"758af35cc4ac3b15926817fdfb53181e.jpg"},"./app/images/posters/cdc.jpg":function(e,t,r){e.exports=r.p+"24771cfecbab0e05d14889523bb17411.jpg"},"./app/images/posters/dd.jpg":function(e,t,r){e.exports=r.p+"d34f78fb7726ce0547986b4b3ddc3758.jpg"},"./app/images/posters/f.jpg":function(e,t,r){e.exports=r.p+"55abac24f9528642cbd49a87c3618038.jpg"},"./app/images/posters/fh.jpg":function(e,t,r){e.exports=r.p+"a63675faaadd71675a528377e5c94d6a.jpg"},"./app/images/posters/hg.jpg":function(e,t,r){e.exports=r.p+"2ae5d4f08b74e258a5bf291ce9c9812f.jpg"},"./app/images/posters/hoc.jpg":function(e,t,r){e.exports=r.p+"cb60715db17a236fd8607455b7d56a3d.jpg"},"./app/images/posters/jj.jpg":function(e,t,r){e.exports=r.p+"d357f9b08dcee233b69e12b61a3d030f.jpg"},"./app/images/posters/l.jpg":function(e,t,r){e.exports=r.p+"4ae66e92c6c0feab1c67fca340161cd2.jpg"},"./app/images/posters/mam.jpg":function(e,t,r){e.exports=r.p+"d4dee153f3dcc8e89bccbfb03ddeaeb5.jpg"},"./app/images/posters/mon.jpg":function(e,t,r){e.exports=r.p+"6f773de666a867e3513e726c79771f97.jpg"},"./app/images/posters/mp.jpg":function(e,t,r){e.exports=r.p+"d7e375415a0709064aaacf0963da5b31.jpg"},"./app/images/posters/n.jpg":function(e,t,r){e.exports=r.p+"e24d50127229f55f44139123add99754.jpg"},"./app/images/posters/oitnb.jpg":function(e,t,r){e.exports=r.p+"f38a702bce858260dbea812b53d460da.jpg"},"./app/images/posters/s8.jpg":function(e,t,r){e.exports=r.p+"011f4f3dbbcf7ac32c567de73da27e35.jpg"},"./app/images/posters/tk.jpg":function(e,t,r){e.exports=r.p+"fa27494f77891e074eea2bc5df0de232.jpg"},"./app/images/posters/uks.jpg":function(e,t,r){e.exports=r.p+"366de183241a455aeb78393c9d87268c.jpg"},"./app/images/posters/wbd.jpg":function(e,t,r){e.exports=r.p+"31bfbf53c696fa6fbd9e9b1aa2ace784.jpg"},"./app/images/posters/whas.jpg":function(e,t,r){e.exports=r.p+"7b3d5ad9e6a07d760c77506755168903.jpg"},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/containers/TrailerPage/style.scss":function(e,t,r){(e.exports=r("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".trailer{background-color:transparent;width:100%;color:white;margin-top:50px;padding:10px}.trailer .details{display:flex;align-items:center;padding:10px}.trailer .details img{width:100px;height:200px;margin-right:20px}.trailer .iframe{height:calc(100vh - 50px)}\n",""])},"./node_modules/exports-loader/index.js?self.fetch!./node_modules/whatwg-fetch/dist/fetch.umd.js":function(e,t,r){!function(e){"use strict";var t="URLSearchParams"in self,r="Symbol"in self&&"iterator"in Symbol,o="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),n="FormData"in self,s="ArrayBuffer"in self;if(s)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};function p(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function c(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function d(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function f(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function h(e){var t=new FileReader,r=f(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(e){var r;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:n&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:t&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s&&o&&(r=e)&&DataView.prototype.isPrototypeOf(r)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(e)||a(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,r,o=d(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=f(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n&&(this.formData=function(){return this.text().then(j)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=p(e),t=l(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},u.prototype.delete=function(e){delete this.map[p(e)]},u.prototype.get=function(e){return e=p(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(p(e))},u.prototype.set=function(e,t){this.map[p(e)]=l(t)},u.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},u.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),c(e)},u.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),c(e)},u.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),c(e)},r&&(u.prototype[Symbol.iterator]=u.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(e,t){var r,o,n=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=(r=t.method||this.method||"GET",o=r.toUpperCase(),b.indexOf(o)>-1?o:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function j(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}})),t}function w(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},g.call(m.prototype),g.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var v=[301,302,303,307,308];w.redirect=function(e,t){if(-1===v.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},e.DOMException=self.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function x(t,r){return new Promise((function(n,s){var i=new m(t,r);if(i.signal&&i.signal.aborted)return s(new e.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function p(){a.abort()}a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new u,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}})),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new w(o,r))},a.onerror=function(){s(new TypeError("Network request failed"))},a.ontimeout=function(){s(new TypeError("Network request failed"))},a.onabort=function(){s(new e.DOMException("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&o&&(a.responseType="blob"),i.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),i.signal&&(i.signal.addEventListener("abort",p),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",p)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=u,self.Request=m,self.Response=w),e.Headers=u,e.Request=m,e.Response=w,e.fetch=x,Object.defineProperty(e,"__esModule",{value:!0})}(t),e.exports=self.fetch},"./node_modules/react-iframe/dist/cjs/iframe.js":function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(r("./node_modules/react/index.js")),i=n(r("./node_modules/object-assign/index.js"));t.default=function(e){for(var t=e.url,r=e.allowFullScreen,n=e.position,a=e.display,p=e.height,l=e.width,c=e.overflow,u=e.styles,d=e.onLoad,f=e.onMouseOver,h=e.onMouseOut,y=e.scrolling,g=e.id,b=e.frameBorder,m=e.ariaHidden,j=e.sandbox,w=e.allow,v=e.className,x=e.title,_=e.ariaLabel,O=e.ariaLabelledby,E=e.name,T=e.target,A=e.loading,P=e.importance,B=e.referrerpolicy,S=e.allowpaymentrequest,D=e.src,k=i.default({src:D||t,target:T||null,style:{position:n||null,display:a||"block",overflow:c||null},scrolling:y||null,allowpaymentrequest:S||null,importance:P||null,sandbox:j||null,loading:A||null,styles:u||null,name:E||null,className:v||null,referrerpolicy:B||null,title:x||null,allow:w||null,id:g||null,"aria-labelledby":O||null,"aria-hidden":m||null,"aria-label":_||null,width:l||null,height:p||null,onLoad:d||null,onMouseOver:f||null,onMouseOut:h||null}),U=Object.create(null),R=0,I=Object.keys(k);R<I.length;R++){var M=I[R];null!=k[M]&&(U[M]=k[M])}for(var F=0,L=Object.keys(U.style);F<L.length;F++){var C=L[F];null==U.style[C]&&delete U.style[C]}if(r)if("allow"in U){var N=U.allow.replace("fullscreen","");U.allow=("fullscreen "+N.trim()).trim()}else U.allow="fullscreen";return b>=0&&(U.style.hasOwnProperty("border")||(U.style.border=b)),s.default.createElement("iframe",o({},U))}}}]);