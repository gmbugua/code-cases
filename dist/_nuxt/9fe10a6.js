(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{258:function(t,e,r){var content=r(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("57e68472",content,!0,{sourceMap:!1})},259:function(t,e,r){"use strict";r.r(e);r(189);var n={name:"ReadTime",props:["timeToRead"],methods:{coffees:function(time){return"☕".repeat(time<=5?1:time>5&&time<30?2:3)}}},o=(r(260),r(15)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v(" "+t._s(t.timeToRead)+" min "+t._s(t.coffees(t.timeToRead)))])}),[],!1,null,"3d101cec",null);e.default=component.exports},260:function(t,e,r){"use strict";r(258)},261:function(t,e,r){var n=r(39)((function(i){return i[1]}));n.push([t.i,"p[data-v-3d101cec]{font-size:0.875rem;line-height:1.25rem}",""]),n.locals={},t.exports=n},262:function(t,e,r){"use strict";r(263),r(26),r(132);e.a={methods:{formatDate:function(t){var e,r=new Date,n=new Date(t);return e=Number(t.split("-")[0])===r.getFullYear()?{month:"short",day:"numeric"}:{year:"numeric",month:"short",day:"numeric"},n.toLocaleDateString("en",e)}}}},263:function(t,e,r){"use strict";var n=r(12),o=r(2),c=r(100),l=r(17),f=r(14),d=r(191),m=r(99),h=r(190),v=r(3),_=r(76).f,y=r(35).f,w=r(16).f,x=r(264),N=r(192).trim,I="Number",T=o.Number,E=T.prototype,R=function(t){var e=h(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,n,o,c,l,f,code,d=h(t,"number");if(m(d))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(43===(e=(d=N(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(I,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var S,F=function(t){var e=arguments.length<1?0:T(R(t)),r=this;return r instanceof F&&v((function(){x(r)}))?d(Object(e),r,F):e},M=n?_(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;M.length>k;k++)f(T,S=M[k])&&!f(F,S)&&w(F,S,y(T,S));F.prototype=E,E.constructor=F,l(o,I,F)}},264:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},271:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("a8ab4b4c",content,!0,{sourceMap:!1})},277:function(t,e,r){"use strict";r(271)},278:function(t,e,r){var n=r(39)((function(i){return i[1]}));n.push([t.i,"article[data-v-481ce0de]{padding:0;margin:0 auto}h1[data-v-481ce0de]{font-family:Fira Sans, sans-serif;font-size:1.5rem;font-weight:700;line-height:1.25;--tw-text-opacity:1;color:rgb(42 57 80 / var(--tw-text-opacity))}.dark h1[data-v-481ce0de]{--tw-text-opacity:1;color:rgb(232 250 249 / var(--tw-text-opacity))}@media (min-width: 640px){h1[data-v-481ce0de]{font-size:2.25rem;line-height:2.5rem}}.horiz-container[data-v-481ce0de]{margin-bottom:1.25rem;display:flex;align-items:center;justify-content:space-between}.sub-heading[data-v-481ce0de]{justify-content:flex-start}.sub-heading p[data-v-481ce0de]{margin-right:0.75rem;font-size:1.125rem;line-height:1.75rem;font-weight:300;--tw-text-opacity:1;color:rgb(42 57 80 / var(--tw-text-opacity))}.dark .sub-heading p[data-v-481ce0de]{--tw-text-opacity:1;color:rgb(232 250 249 / var(--tw-text-opacity))}",""]),n.locals={},t.exports=n},301:function(t,e,r){"use strict";r.r(e);var n=r(7),o=(r(45),r(262)),c=r(259),l={layout:"post",mixins:[o.a],components:{ReadTime:c.default},mounted:function(){},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}},f=(r(277),r(15)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("article",[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"horiz-container sub-heading"},[r("p",[t._v(t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),r("p",[t._v("•")]),t._v(" "),r("ReadTime",{attrs:{timeToRead:t.article.timeToRead}})],1),t._v(" "),r("nuxt-content",{attrs:{document:t.article}})],1)])}),[],!1,null,"481ce0de",null);e.default=component.exports;installComponents(component,{ReadTime:r(259).default})}}]);