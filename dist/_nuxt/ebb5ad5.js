(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,5,6],{249:function(t,e,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("67e84489",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";n.r(e);n(184);var r={name:"ReadTime",props:["timeToRead"],methods:{coffees:function(time){return"☕".repeat(time<=5?1:time>5&&time<30?2:3)}}},o=(n(252),n(40)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v(" "+t._s(t.timeToRead)+" min "+t._s(t.coffees(t.timeToRead)))])}),[],!1,null,"3d101cec",null);e.default=component.exports},252:function(t,e,n){"use strict";n(249)},253:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\np[data-v-3d101cec]{\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},255:function(t,e,n){"use strict";n(256),n(41),n(130);e.a={methods:{formatDate:function(t){var e,n=new Date,r=new Date(t);return e=Number(t.split("-")[0])===n.getFullYear()?{month:"short",day:"numeric"}:{year:"numeric",month:"short",day:"numeric"},r.toLocaleDateString("en",e)}}}},256:function(t,e,n){"use strict";var r=n(11),o=n(2),c=n(100),l=n(16),d=n(13),f=n(186),m=n(99),v=n(185),h=n(3),w=n(76).f,x=n(31).f,_=n(15).f,y=n(257),I=n(187).trim,C="Number",N=o.Number,k=N.prototype,T=function(t){var e=v(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,n,r,o,c,l,d,code,f=v(t,"number");if(m(f))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(43===(e=(f=I(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(C,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var R,A=function(t){var e=arguments.length<1?0:N(T(t)),n=this;return n instanceof A&&h((function(){y(n)}))?f(Object(e),n,A):e},M=r?w(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;M.length>F;F++)d(N,R=M[F])&&!d(A,R)&&_(A,R,x(N,R));A.prototype=k,k.constructor=A,l(o,C,A)}},257:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},260:function(t,e,n){var content=n(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("80b79646",content,!0,{sourceMap:!1})},261:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("0bd035a8",content,!0,{sourceMap:!1})},263:function(t,e,n){"use strict";n(260)},264:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.item[data-v-6e0cb686]{\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(232, 250, 249, var(--tw-bg-opacity));\n  padding:1.25rem;\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.dark .item[data-v-6e0cb686]{\n  --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.item:hover .item-read-time[data-v-6e0cb686]{\n  opacity:1;\n  transition:opacity .6s linear\n}\n.item-title-date p[data-v-6e0cb686], h1[data-v-6e0cb686]{\n  display:inline-block;\n  padding-right:0.5rem\n}\n.item-title[data-v-6e0cb686]{\n  font-size:1.125rem;\n  line-height:1.75rem\n}\n.item-date[data-v-6e0cb686], .item-description[data-v-6e0cb686]{\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.item-read-time[data-v-6e0cb686]{\n  opacity:0;\n  transition:opacity .4s ease-in\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},265:function(t,e,n){"use strict";n(261)},266:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\na[data-v-704b5272]{\n  margin-right:0.75rem;\n  border-bottom-width:4px;\n  --tw-border-opacity:1;\n  border-color:rgba(232, 250, 249, var(--tw-border-opacity))\n}\n.dark a[data-v-704b5272]{\n  --tw-border-opacity:1;\n  border-color:rgba(57, 79, 107, var(--tw-border-opacity))\n}\na[data-v-704b5272]{\n  font-size:0.875rem;\n  line-height:1.25rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(57, 79, 107, var(--tw-text-opacity))\n}\n.dark a[data-v-704b5272]{\n  --tw-text-opacity:1;\n  color:rgba(180, 217, 224, var(--tw-text-opacity))\n}\na[data-v-704b5272]{\n  text-decoration:none\n}\na[data-v-704b5272]:hover{\n  --tw-border-opacity:1;\n  border-color:rgba(181, 255, 253, var(--tw-border-opacity));\n  --tw-text-opacity:1;\n  color:rgba(42, 57, 80, var(--tw-text-opacity))\n}\n.dark a[data-v-704b5272]:hover{\n  --tw-text-opacity:1;\n  color:rgba(181, 255, 253, var(--tw-text-opacity))\n}\na[data-v-704b5272]:hover{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-timing-function:linear\n}\n.footer[data-v-704b5272]{\n  display:flex;\n  justify-content:space-evenly\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},267:function(t,e,n){"use strict";n.r(e);var r=n(255),o={name:"BlogItem",props:["title","lastUpdated","description","timeToRead"],components:{ReadTime:n(250).default},mixins:[r.a]},c=(n(263),n(40)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("section",{staticClass:"item-left"},[n("div",{staticClass:"item-title-date"},[n("h1",{staticClass:"item-title"},[t._v(t._s(t.title.toLowerCase()))]),t._v(" "),n("p",{staticClass:"item-date"},[t._v(t._s(t.formatDate(t.lastUpdated).toLowerCase())+" ")])]),t._v(" "),n("p",{staticClass:"item-description"},[t._v(t._s(t.description))])]),t._v(" "),n("section",{staticClass:"item-right"},[n("ReadTime",{staticClass:"item-read-time ",attrs:{timeToRead:t.timeToRead}})],1)])}),[],!1,null,"6e0cb686",null);e.default=component.exports;installComponents(component,{ReadTime:n(250).default})},268:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{isFlipped:!1}}},o=(n(265),n(40)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:""}},[t._v(" RSS ")]),t._v(" "),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/george-mwicigi-mbugua/"}},[t._v("\n    LinkedIn\n  ")]),t._v(" "),n("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/gmbugua"}},[t._v("\n    GitHub\n  ")])])}],!1,null,"704b5272",null);e.default=component.exports},272:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("cbf55f20",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n(272)},283:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nul[data-v-69f52c3a]{\n  list-style-type:none;\n  padding-left:0px\n}\n.main[data-v-69f52c3a]{\n  margin-top:2.5rem;\n  margin-right:auto;\n  margin-left:auto;\n  display:flex;\n  max-width:56rem;\n  flex-direction:column;\n  padding-left:2.75rem;\n  padding-right:2.75rem;\n  padding-bottom:2.75rem\n}\n.main-header[data-v-69f52c3a]{\n  margin-bottom:1.25rem\n}\n@media (min-width: 640px){\n.main-header[data-v-69f52c3a]{\n    position:relative;\n    top:0.5rem;\n    margin-bottom:0px\n}\n}\n.blog-item[data-v-69f52c3a]{\n  margin-bottom:1.25rem\n}\n.footer[data-v-69f52c3a]{\n  display:flex\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},296:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(42),n(267)),c=n(268),l=n(273),d={components:{BlogItem:o.default,Footer:c.default,Header:l.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").only(["title","description","timeToRead","updatedAt","slug"]).sortBy("createdAt","asc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()}},f=(n(282),n(40)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{staticClass:"main-header"}),t._v(" "),n("ul",{staticClass:"blog-list"},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"blog-item"},[n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("BlogItem",{attrs:{title:article.title,lastUpdated:article.updatedAt,description:article.description,timeToRead:article.timeToRead}})],1)],1)})),0),t._v(" "),n("div",{staticClass:"footer"},[n("Footer")],1)],1)}),[],!1,null,"69f52c3a",null);e.default=component.exports;installComponents(component,{Header:n(273).default,BlogItem:n(267).default,Footer:n(268).default})}}]);