(window.webpackJsonp=window.webpackJsonp||[]).push([[0,4],{243:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},244:function(t,e,r){var n=r(254);t.exports=function(source,t){if(null==source)return{};var e,i,r=n(source,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(source);for(i=0;i<l.length;i++)e=l[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r},t.exports.default=t.exports,t.exports.__esModule=!0},250:function(t,e,r){var content=r(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("ef33b64c",content,!0,{sourceMap:!1})},254:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r},t.exports.default=t.exports,t.exports.__esModule=!0},258:function(t,e,r){"use strict";r(250)},259:function(t,e,r){var n=r(73)((function(i){return i[1]}));n.push([t.i,'/*purgecss start ignore*/\n.switch[data-v-77b058ee]{\n  position:relative;\n  display:inline-block;\n  height:2.25rem;\n  width:4rem\n}\n.switch input[data-v-77b058ee]{\n  height:0px;\n  width:0px;\n  opacity:0\n}\n.slider[data-v-77b058ee]{\n  position:absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n  cursor:pointer;\n  --tw-bg-opacity:1;\n  background-color:rgba(42, 57, 80, var(--tw-bg-opacity));\n  --webkit-transtion:.4s;\n  transition:.4s\n}\n.slider[data-v-77b058ee]:before{\n  position:absolute;\n  bottom:0.25rem;\n  left:0.25rem;\n  height:1.75rem;\n  width:1.75rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(232, 250, 249, var(--tw-bg-opacity));\n  content:"";\n  transition:.4s\n}\ninput:checked+.slider[data-v-77b058ee]{\n  --tw-bg-opacity:1;\n  background-color:rgba(42, 57, 80, var(--tw-bg-opacity))\n}\ninput:focus+.slider[data-v-77b058ee]{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\ninput:checked+.slider[data-v-77b058ee]:before{\n  transform:translateX(26px)\n}\n.slider.round[data-v-77b058ee]{\n  border-radius:32px\n}\n.slider.round[data-v-77b058ee]:before{\n  border-radius:50%\n}\n\n/*purgecss end ignore*/',""]),n.locals={},t.exports=n},262:function(t,e,r){"use strict";r.r(e);r(258);var n=r(40),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"switch"},[r("input",{attrs:{type:"checkbox"},on:{change:function(e){return t.$emit("test-click",e.target.checked)}}}),t._v(" "),r("span",{staticClass:"slider round"})])}),[],!1,null,"77b058ee",null);e.default=component.exports},263:function(t,e,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("25e400b7",content,!0,{sourceMap:!1})},265:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-header-left"},[n("p",{staticClass:"intro-text"},[t._v("blog written by")]),t._v(" "),n("img",{staticClass:"headshot cropped",attrs:{src:r(266),alt:""}}),t._v(" "),n("div",{staticClass:"name"},[n("p",{staticClass:"first-name"},[t._v("George")]),t._v(" "),n("p",{staticClass:"last-name"},[t._v("Mbugua")])])])}],l=r(262),o=r(267),d=r.n(o),c=r(268),f=r.n(c),h={components:{SeatedMan:d.a,SeatedManDark:f.a,DarkModeToggle:l.default},data:function(){return{isDarkMode:!1}},methods:{handleTestClick:function(t){this.isDarkMode=t,!0===this.isDarkMode?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}}},m=(r(269),r(40)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header"},[r("h1",{attrs:{id:"title"}},[t._v("The Code Cases")]),t._v(" "),r("DarkModeToggle",{attrs:{id:"dark-mode-toggle",checked:t.isDarkMode},on:{"test-click":t.handleTestClick}})],1),t._v(" "),r("div",{staticClass:"sub-header"},[t._m(0),t._v(" "),r("div",{staticClass:"sub-header-right"},[this.isDarkMode?t._e():r("SeatedMan",{attrs:{id:"seated-man"}}),t._v(" "),this.isDarkMode?r("SeatedManDark",{attrs:{id:"seated-man"}}):t._e()],1)])])}),n,!1,null,"5c3bcf7e",null);e.default=component.exports;installComponents(component,{DarkModeToggle:r(262).default})},266:function(t,e,r){t.exports=r.p+"img/headshot.cbe18d3.jpeg"},267:function(t,e,r){r(35),r(29),r(34),r(56),r(30),r(57);var n=r(243),l=r(244),o=["class","staticClass","style","staticStyle","attrs"];function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(75),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),c=e.children,f=void 0===c?[]:c,h=data.class,m=data.staticClass,style=data.style,v=data.staticStyle,x=data.attrs,_=void 0===x?{}:x,w=l(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,m],style:[style,v],attrs:Object.assign({width:"225",height:"138",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_)},w),f.concat([r("path",{attrs:{d:"M179.376 53.645a3.946 3.946 0 00-.325-1.599 4.004 4.004 0 00-2.346-2.19 4.072 4.072 0 00-3.217.21 4 4 0 00-2.036 2.477 3.957 3.957 0 00-.109 1.628l-11.596 15.038a5.52 5.52 0 00.76 6.113l.909 1.051 4.174-.827 4.73-4.133-.556-4.684 5.843-9.093-.007-.007a4.05 4.05 0 002.684-1.252 3.972 3.972 0 001.092-2.732zM135.296 126.052l-5.888-4.24 13.714-24.508 8.69 6.258-16.516 22.49z",fill:"#9E7E66"}}),r("path",{attrs:{d:"M132.647 132.785l-18.986-13.672.175-.238a9.15 9.15 0 015.964-3.616 9.204 9.204 0 016.799 1.62h.001l11.596 8.351-5.549 7.555z",fill:"#FFB3AB"}}),r("path",{attrs:{d:"M185.346 91.804L170.529 77.55a7.516 7.516 0 00-4.796-2.083c-1.8-.1-3.576.448-5.001 1.541l-27.976 30.778 2.504 3.858 26.713-17.911 18.086 23.422 17.252-8.542-11.965-16.809z",fill:"#2A3950"}}),r("path",{attrs:{d:"M178.946 94.835l-10.852-.827-7.859-1.886a4.025 4.025 0 00-1.848-1.534 4.073 4.073 0 00-2.401-.217 4.05 4.05 0 00-2.098 1.178 3.965 3.965 0 00-.666 4.51c.366.73.949 1.33 1.67 1.723a4.067 4.067 0 004.578-.473l-.002.006 4.731 1.929 20.312 6.889 2.505-1.929-8.07-9.369zM99.185 127.165l-1.893-6.962 26.215-10.543 2.794 10.275-27.116 7.23z",fill:"#9E7E66"}}),r("path",{attrs:{d:"M92.853 130.757l-6.103-22.448.287-.076a9.212 9.212 0 016.934.896 9.06 9.06 0 014.264 5.488v.001l3.728 13.71-9.11 2.429z",fill:"#FFB3AB"}}),r("g",{attrs:{filter:"url(#filter0_d_602_156)"}},[r("path",{attrs:{d:"M205.102 124.6l-6.122 3.858h-7.234l-33.669-12.4-49.251 8.818-1.391-10.471 45.077-19.564 39.512 12.951 13.078 16.808z",fill:"#394F6B"}})]),r("g",{attrs:{filter:"url(#filter1_d_602_156)"}},[r("path",{attrs:{d:"M220.103 89.795c0 6.486-1.032 12.931-3.058 19.099l-.813 2.474-3.895 17.635-4.174 1.102-3.061-3.857-6.121-4.409-4.452-7.164-3.818-6.299-1.191-1.968-4.174-20.666-15.86-8.818-5.287-.826 1.113-3.031 4.73-6.338 4.73-.551 1.392-1.102 1.113.55 6.135 2.341 19.893-8.322 2.91.47 10.017 8.267a61.148 61.148 0 013.871 21.413z",fill:"#E8FAF9"}})]),r("g",{attrs:{filter:"url(#filter2_d_602_156)"}},[r("path",{attrs:{d:"M195.642 72.516l-8.626 15.706-5.009 5.511-4.452 1.102 11.965 12.951 16.973-15.155 10.574-6.89-21.425-13.225z",fill:"#E8FAF9"}})]),r("path",{attrs:{d:"M192.024 57.636c5.994 0 10.852-4.811 10.852-10.747 0-5.935-4.858-10.746-10.852-10.746-5.993 0-10.852 4.811-10.852 10.746 0 5.936 4.859 10.747 10.852 10.747z",fill:"#9E7E66"}}),r("path",{attrs:{d:"M183.584 38.899l-1.176.448a1.616 1.616 0 01-.439-2.257l.019-.028-2.173-.1a16.372 16.372 0 015.203-4.476 16.556 16.556 0 0113.432-1.072 16.429 16.429 0 015.859 3.592c.099-.337 1.178.32 1.618.985.148-.55 1.159 2.105 1.517 3.981.165-.625.802.384.244 1.351.353-.05.513.844.24 1.343.386-.18.321.89-.098 1.604.551-.05-.047 11.203-8.326 10.383-.576-2.622-.414-2.46-1.093-5.831a14.59 14.59 0 00-1.007-.937l-1.868-1.633c-2.172-1.898-4.148-4.242-7.041-4.951-1.989-.488-3.246-.598-2.162-2.817-.979.405-1.894 1.006-2.881 1.382.013-.31.151-.657.132-.967z",fill:"#1F2633"}}),r("path",{attrs:{d:"M111.239 82.587l2.282 10.517-10.62 2.26-2.282-10.517 10.62-2.26zm1.721 10.158l-2.084-9.602-9.696 2.063 2.083 9.602 9.697-2.063z",fill:"#394F6B"}}),r("path",{attrs:{d:"M117.377 86.782l-8.746 1.861 1.88 8.66 8.745-1.86-1.879-8.66z",fill:"#E8FAF9"}}),r("path",{attrs:{d:"M137.084 48.238l-7.927 7.353-7.426-7.85 7.928-7.353 7.425 7.85zm-7.906 6.692l7.239-6.713-6.78-7.168-7.238 6.714 6.779 7.167z",fill:"#394F6B"}}),r("path",{attrs:{d:"M130.5 49.144l-6.529 6.055 6.115 6.465 6.529-6.055-6.115-6.465z",fill:"#E8FAF9"}}),r("path",{attrs:{d:"M159.875 15.15l10.838.714-.722 10.733-10.838-.715.722-10.733zm10.335 1.15l-9.895-.653-.659 9.8 9.895.652.659-9.8z",fill:"#394F6B"}}),r("path",{attrs:{d:"M165.633 10.456l-.594 8.838 8.925.59.595-8.84-8.926-.588z",fill:"#E8FAF9"}}),r("path",{attrs:{d:"M105.926.033l2.282 10.516-10.62 2.26-2.281-10.517 10.619-2.26zm1.721 10.157L105.564.588l-9.696 2.063 2.083 9.602 9.696-2.063z",fill:"#394F6B"}}),r("path",{attrs:{d:"M112.065 4.227l-8.746 1.861 1.879 8.66 8.746-1.86-1.879-8.66z",fill:"#E8FAF9"}}),r("path",{attrs:{d:"M79.746 45.88l-7.927 7.353-7.425-7.85 7.927-7.353 7.425 7.85zm-7.905 6.692l7.238-6.713-6.78-7.168-7.238 6.714 6.78 7.167z",fill:"#394F6B"}}),r("path",{attrs:{d:"M73.162 46.786l-6.529 6.056 6.115 6.465 6.529-6.056-6.115-6.465z",fill:"#E8FAF9"}}),r("path",{attrs:{d:"M31.984 24.22l10.838.716-.722 10.732-10.838-.715.722-10.732zm10.335 1.151l-9.895-.653-.66 9.8 9.896.652.66-9.799z",fill:"#394F6B"}}),r("path",{attrs:{d:"M37.743 19.528l-.595 8.838 8.926.589.594-8.839-8.925-.588z",fill:"#E8FAF9"}}),r("defs",[r("filter",{attrs:{id:"filter0_d_602_156",x:"97.435",y:"83.841",width:"117.667",height:"53.617",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[r("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),r("feColorMatrix",{attrs:{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),r("feOffset",{attrs:{dy:"-1"}}),r("feGaussianBlur",{attrs:{stdDeviation:"5"}}),r("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}}),r("feBlend",{attrs:{in2:"BackgroundImageFix",result:"effect1_dropShadow_602_156"}}),r("feBlend",{attrs:{in:"SourceGraphic",in2:"effect1_dropShadow_602_156",result:"shape"}})]),r("filter",{attrs:{id:"filter1_d_602_156",x:"161.199",y:"57.645",width:"61.904",height:"76.461",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[r("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),r("feColorMatrix",{attrs:{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),r("feOffset",{attrs:{dy:"1"}}),r("feGaussianBlur",{attrs:{stdDeviation:"1.5"}}),r("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),r("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}}),r("feBlend",{attrs:{in2:"BackgroundImageFix",result:"effect1_dropShadow_602_156"}}),r("feBlend",{attrs:{in:"SourceGraphic",in2:"effect1_dropShadow_602_156",result:"shape"}})]),r("filter",{attrs:{id:"filter2_d_602_156",x:"170.555",y:"68.516",width:"53.512",height:"49.27",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[r("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),r("feColorMatrix",{attrs:{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),r("feOffset",{attrs:{dy:"3"}}),r("feGaussianBlur",{attrs:{stdDeviation:"3.5"}}),r("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),r("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}}),r("feBlend",{attrs:{in2:"BackgroundImageFix",result:"effect1_dropShadow_602_156"}}),r("feBlend",{attrs:{in:"SourceGraphic",in2:"effect1_dropShadow_602_156",result:"shape"}})])])]))}}},268:function(t,e,r){r(35),r(29),r(34),r(56),r(30),r(57);var n=r(243),l=r(244),o=["class","staticClass","style","staticStyle","attrs"];function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(75),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),c=e.children,f=void 0===c?[]:c,h=data.class,m=data.staticClass,style=data.style,v=data.staticStyle,x=data.attrs,_=void 0===x?{}:x,w=l(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,m],style:[style,v],attrs:Object.assign({width:"225",height:"138",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_)},w),f.concat([r("path",{attrs:{d:"M179.376 53.645a3.946 3.946 0 00-.325-1.599 4.004 4.004 0 00-2.346-2.19 4.072 4.072 0 00-3.217.21 4 4 0 00-2.036 2.477 3.957 3.957 0 00-.109 1.628l-11.596 15.038a5.52 5.52 0 00.76 6.113l.909 1.051 4.174-.827 4.73-4.133-.556-4.684 5.843-9.093-.007-.007a4.05 4.05 0 002.684-1.252 3.972 3.972 0 001.092-2.732zM135.296 126.052l-5.888-4.24 13.714-24.508 8.69 6.258-16.516 22.49z",fill:"#9E7E66"}}),r("path",{attrs:{d:"M132.647 132.785l-18.986-13.672.175-.238a9.15 9.15 0 015.964-3.616 9.204 9.204 0 016.799 1.62h.001l11.596 8.351-5.549 7.555z",fill:"#FFB3AB"}}),r("path",{attrs:{d:"M185.346 91.804L170.529 77.55a7.516 7.516 0 00-4.796-2.083c-1.8-.1-3.576.448-5.001 1.541l-27.976 30.778 2.504 3.858 26.713-17.911 18.086 23.422 17.252-8.542-11.965-16.809z",fill:"#B4D9E0"}}),r("path",{attrs:{d:"M178.946 94.835l-10.852-.827-7.859-1.886a4.025 4.025 0 00-1.848-1.534 4.073 4.073 0 00-2.401-.217 4.05 4.05 0 00-2.098 1.178 3.965 3.965 0 00-.666 4.51c.366.73.949 1.33 1.67 1.723a4.067 4.067 0 004.578-.473l-.002.006 4.731 1.929 20.312 6.889 2.505-1.929-8.07-9.369zM99.185 127.165l-1.893-6.962 26.215-10.543 2.794 10.275-27.116 7.23z",fill:"#9E7E66"}}),r("path",{attrs:{d:"M92.853 130.757l-6.103-22.448.287-.076a9.212 9.212 0 016.934.896 9.06 9.06 0 014.264 5.488l3.728 13.711-9.11 2.429z",fill:"#FFB3AB"}}),r("g",{attrs:{filter:"url(#filter0_d_529_167)"}},[r("path",{attrs:{d:"M205.102 124.6l-6.122 3.858h-7.234l-33.669-12.4-49.251 8.818-1.391-10.471 45.077-19.564 39.512 12.951 13.078 16.808z",fill:"#E8FAF9"}})]),r("g",{attrs:{filter:"url(#filter1_d_529_167)"}},[r("path",{attrs:{d:"M220.103 89.795c0 6.486-1.032 12.931-3.058 19.099l-.813 2.474-3.895 17.635-4.174 1.102-3.061-3.857-6.121-4.409-4.452-7.164-3.818-6.299-1.191-1.968-4.174-20.666-15.86-8.818-5.287-.826 1.113-3.031 4.73-6.338 4.73-.551 1.392-1.102 1.113.55 6.135 2.341 19.893-8.322 2.91.47 10.017 8.267a61.148 61.148 0 013.871 21.413z",fill:"#F7ECE1"}})]),r("g",{attrs:{filter:"url(#filter2_d_529_167)"}},[r("path",{attrs:{d:"M195.642 72.516l-8.626 15.706-5.009 5.511-4.452 1.102 11.965 12.951 16.973-15.155 10.574-6.89-21.425-13.225z",fill:"#F7ECE1"}})]),r("path",{attrs:{d:"M192.024 57.636c5.994 0 10.852-4.811 10.852-10.747 0-5.935-4.858-10.746-10.852-10.746-5.993 0-10.852 4.811-10.852 10.746 0 5.936 4.859 10.747 10.852 10.747z",fill:"#9E7E66"}}),r("g",{attrs:{filter:"url(#filter3_d_529_167)"}},[r("path",{attrs:{d:"M183.584 38.899l-1.176.448a1.616 1.616 0 01-.439-2.257l.019-.028-2.173-.1a16.372 16.372 0 015.203-4.476 16.556 16.556 0 0113.432-1.072 16.429 16.429 0 015.859 3.592c.099-.337 1.178.32 1.618.985.148-.55 1.159 2.105 1.517 3.981.165-.625.802.384.244 1.351.353-.05.513.844.24 1.343.386-.18.321.89-.098 1.604.551-.05-.047 11.203-8.326 10.383-.576-2.622-.414-2.46-1.093-5.831a14.59 14.59 0 00-1.007-.937l-1.868-1.633c-2.172-1.898-4.148-4.242-7.041-4.951-1.989-.488-3.246-.598-2.162-2.817-.979.405-1.894 1.006-2.881 1.382.013-.31.151-.657.132-.967z",fill:"#394F6B"}})]),r("path",{attrs:{d:"M111.239 82.587l2.282 10.517-10.62 2.26-2.282-10.517 10.62-2.26zm1.721 10.158l-2.084-9.602-9.696 2.063 2.083 9.602 9.697-2.063z",fill:"#B5FFFD"}}),r("path",{attrs:{d:"M117.377 86.782l-8.746 1.861 1.88 8.66 8.745-1.86-1.879-8.66z",fill:"#F7ECE1"}}),r("path",{attrs:{d:"M137.084 48.238l-7.927 7.353-7.426-7.85 7.928-7.353 7.425 7.85zm-7.906 6.692l7.239-6.713-6.78-7.168-7.238 6.714 6.779 7.167z",fill:"#B5FFFD"}}),r("path",{attrs:{d:"M130.5 49.144l-6.529 6.055 6.115 6.465 6.529-6.055-6.115-6.465z",fill:"#F7ECE1"}}),r("path",{attrs:{d:"M159.875 15.15l10.838.714-.722 10.733-10.838-.715.722-10.733zm10.335 1.15l-9.895-.653-.659 9.8 9.895.652.659-9.8z",fill:"#B5FFFD"}}),r("path",{attrs:{d:"M165.633 10.456l-.594 8.838 8.925.59.595-8.84-8.926-.588z",fill:"#F7ECE1"}}),r("path",{attrs:{d:"M105.926.033l2.282 10.516-10.62 2.26-2.281-10.517 10.619-2.26zm1.721 10.157L105.564.588l-9.696 2.063 2.083 9.602 9.696-2.063z",fill:"#B5FFFD"}}),r("path",{attrs:{d:"M112.065 4.227l-8.746 1.861 1.879 8.66 8.746-1.86-1.879-8.66z",fill:"#F7ECE1"}}),r("path",{attrs:{d:"M79.746 45.88l-7.927 7.353-7.425-7.85 7.927-7.353 7.425 7.85zm-7.905 6.692l7.238-6.713-6.78-7.168-7.238 6.714 6.78 7.167z",fill:"#B5FFFD"}}),r("path",{attrs:{d:"M73.162 46.786l-6.529 6.056 6.115 6.465 6.529-6.056-6.115-6.465z",fill:"#F7ECE1"}}),r("path",{attrs:{d:"M31.984 24.22l10.838.716-.722 10.732-10.838-.715.722-10.732zm10.335 1.151l-9.895-.653-.66 9.8 9.896.652.66-9.799z",fill:"#B5FFFD"}}),r("path",{attrs:{d:"M37.743 19.528l-.595 8.838 8.926.589.594-8.839-8.925-.588z",fill:"#F7ECE1"}}),r("defs",[r("filter",{attrs:{id:"filter0_d_529_167",x:"97.435",y:"83.841",width:"117.667",height:"53.617",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[r("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),r("feColorMatrix",{attrs:{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),r("feOffset",{attrs:{dy:"-1"}}),r("feGaussianBlur",{attrs:{stdDeviation:"5"}}),r("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}}),r("feBlend",{attrs:{in2:"BackgroundImageFix",result:"effect1_dropShadow_529_167"}}),r("feBlend",{attrs:{in:"SourceGraphic",in2:"effect1_dropShadow_529_167",result:"shape"}})]),r("filter",{attrs:{id:"filter1_d_529_167",x:"161.199",y:"57.645",width:"61.904",height:"76.461",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[r("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),r("feColorMatrix",{attrs:{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),r("feOffset",{attrs:{dy:"1"}}),r("feGaussianBlur",{attrs:{stdDeviation:"1.5"}}),r("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),r("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}}),r("feBlend",{attrs:{in2:"BackgroundImageFix",result:"effect1_dropShadow_529_167"}}),r("feBlend",{attrs:{in:"SourceGraphic",in2:"effect1_dropShadow_529_167",result:"shape"}})]),r("filter",{attrs:{id:"filter2_d_529_167",x:"170.555",y:"68.516",width:"53.512",height:"49.27",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[r("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),r("feColorMatrix",{attrs:{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),r("feOffset",{attrs:{dy:"3"}}),r("feGaussianBlur",{attrs:{stdDeviation:"3.5"}}),r("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),r("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}}),r("feBlend",{attrs:{in2:"BackgroundImageFix",result:"effect1_dropShadow_529_167"}}),r("feBlend",{attrs:{in:"SourceGraphic",in2:"effect1_dropShadow_529_167",result:"shape"}})]),r("filter",{attrs:{id:"filter3_d_529_167",x:"175.815",y:"27.469",width:"36.368",height:"32.227",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[r("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),r("feColorMatrix",{attrs:{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),r("feOffset",{attrs:{dy:"1"}}),r("feGaussianBlur",{attrs:{stdDeviation:"2"}}),r("feComposite",{attrs:{in2:"hardAlpha",operator:"out"}}),r("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}}),r("feBlend",{attrs:{in2:"BackgroundImageFix",result:"effect1_dropShadow_529_167"}}),r("feBlend",{attrs:{in:"SourceGraphic",in2:"effect1_dropShadow_529_167",result:"shape"}})])])]))}}},269:function(t,e,r){"use strict";r(263)},270:function(t,e,r){var n=r(73)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.header[data-v-5c3bcf7e]{\n  display:flex;\n  flex-direction:column-reverse;\n  padding-bottom:0.5rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(42, 57, 80, var(--tw-text-opacity))\n}\n.dark .header[data-v-5c3bcf7e]{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n@media (min-width: 640px){\n.header[data-v-5c3bcf7e]{\n    flex-direction:row;\n    align-items:center;\n    justify-content:space-between;\n    padding-bottom:1.75rem\n}\n}\n.sub-header[data-v-5c3bcf7e]{\n  display:flex;\n  flex-direction:column\n}\n@media (min-width: 640px){\n.sub-header[data-v-5c3bcf7e]{\n    flex-direction:row;\n    justify-content:space-between\n}\n}\n.sub-header-left[data-v-5c3bcf7e]{\n  display:flex;\n  flex-direction:column;\n  align-items:center\n}\n@media (min-width: 640px){\n.sub-header-left[data-v-5c3bcf7e]{\n    flex-direction:row;\n    align-items:center\n}\n}\n.intro-text[data-v-5c3bcf7e]{\n  margin-bottom:0.75rem;\n  --tw-text-opacity:1;\n  color:rgba(42, 57, 80, var(--tw-text-opacity))\n}\n.dark .intro-text[data-v-5c3bcf7e]{\n  --tw-text-opacity:1;\n  color:rgba(181, 255, 253, var(--tw-text-opacity))\n}\n@media (min-width: 640px){\n.intro-text[data-v-5c3bcf7e]{\n    margin-right:1.25rem;\n    align-self:flex-start\n}\n}\n.headshot[data-v-5c3bcf7e]{\n  margin-right:0px;\n  margin-bottom:0.75rem\n}\n@media (min-width: 640px){\n.headshot[data-v-5c3bcf7e]{\n    margin-right:1.25rem\n}\n}\n.name[data-v-5c3bcf7e]{\n  display:flex;\n  align-items:center;\n  font-weight:600\n}\n@media (min-width: 640px){\n.name[data-v-5c3bcf7e]{\n    flex-direction:column;\n    align-items:flex-start\n}\n}\n.name .first-name[data-v-5c3bcf7e]{\n  margin-right:0.5rem;\n  font-size:1.5rem;\n  line-height:2rem;\n  --tw-text-opacity:1;\n  color:rgba(57, 79, 107, var(--tw-text-opacity))\n}\n.dark .name .first-name[data-v-5c3bcf7e]{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n@media (min-width: 640px){\n.name .first-name[data-v-5c3bcf7e]{\n    margin-right:0px;\n    font-size:1.5rem;\n    line-height:2rem\n}\n}\n.name .last-name[data-v-5c3bcf7e]{\n  font-size:1.5rem;\n  line-height:2rem;\n  --tw-text-opacity:1;\n  color:rgba(217, 124, 113, var(--tw-text-opacity))\n}\n.dark .name .last-name[data-v-5c3bcf7e]{\n  --tw-text-opacity:1;\n  color:rgba(255, 179, 171, var(--tw-text-opacity))\n}\n@media (min-width: 640px){\n.name .last-name[data-v-5c3bcf7e]{\n    font-size:1.875rem;\n    line-height:2.25rem\n}\n}\n.cropped[data-v-5c3bcf7e]{\n  height:6rem;\n  border-radius:9999px;\n  -o-object-fit:contain;\n     object-fit:contain\n}\n#seated-man[data-v-5c3bcf7e]{\n  display:none\n}\n@media (min-width: 640px){\n#seated-man[data-v-5c3bcf7e]{\n    display:block\n}\n}\n#title[data-v-5c3bcf7e]{\n  align-self:center;\n  font-size:1.875rem;\n  line-height:2.25rem\n}\n@media (min-width: 640px){\n#title[data-v-5c3bcf7e]{\n    font-size:3rem;\n    line-height:1\n}\n}\n#dark-mode-toggle[data-v-5c3bcf7e]{\n  margin-bottom:1.75rem\n}\n@media (min-width: 640px){\n#dark-mode-toggle[data-v-5c3bcf7e]{\n    margin-bottom:0px\n}\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n}}]);