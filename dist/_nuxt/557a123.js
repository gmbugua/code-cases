(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{105:function(n,t,e){"use strict";e.r(t);var o={data:function(){return{isFlipped:!1}}},r=(e(243),e(15)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"footer"},[e("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:""}},[n._v(" RSS ")]),n._v(" "),e("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/george-mwicigi-mbugua/"}},[n._v("\n    LinkedIn\n  ")]),n._v(" "),e("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/gmbugua"}},[n._v("\n    GitHub\n  ")])])}],!1,null,"dcc4f2b2",null);t.default=component.exports},106:function(n,t,e){"use strict";e.r(t);e(34),e(26),e(33),e(47),e(27),e(48);var o=e(19),r=e(43);function l(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}function d(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}var m={methods:d(d({},Object(r.b)(["toggleDarkMode"])),{},{handleTestClick:function(n){this.toggleDarkMode(),document.documentElement.classList.toggle("dark")}})},c=(e(245),e(15)),component=Object(c.a)(m,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("label",{staticClass:"switch"},[e("input",{attrs:{type:"checkbox"},domProps:{checked:this.$store.state.isDarkMode},on:{change:n.handleTestClick}}),n._v(" "),e("span",{staticClass:"slider round"})])}),[],!1,null,"7aa93e7b",null);t.default=component.exports},167:function(n,t,e){var content=e(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("f07c9b16",content,!0,{sourceMap:!1})},168:function(n,t,e){var content=e(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("f95a52f0",content,!0,{sourceMap:!1})},169:function(n,t,e){var content=e(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("5d3881ea",content,!0,{sourceMap:!1})},187:function(n,t,e){"use strict";var o=e(105),r={components:{DarkModeToggle:e(106).default,Footer:o.default}},l=(e(247),e(15)),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{attrs:{id:"post-header"}},[e("a",{staticClass:"hvr-bounce-to-top",attrs:{id:"back-btn"},on:{click:function(t){return n.$router.go(-1)}}},[n._v("← Back")]),n._v(" "),e("DarkModeToggle")],1),n._v(" "),e("div",{staticClass:"main post-content"},[e("Nuxt"),n._v(" "),e("Footer")],1)])}),[],!1,null,"1893f809",null);t.a=component.exports;installComponents(component,{DarkModeToggle:e(106).default,Footer:e(105).default})},188:function(n,t,e){"use strict";var o=e(15),component=Object(o.a)({},(function(){var n=this.$createElement;return(this._self._c||n)("Nuxt")}),[],!1,null,null,null);t.a=component.exports},195:function(n,t,e){e(196),n.exports=e(197)},239:function(n,t,e){var content=e(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("382a115c",content,!0,{sourceMap:!1})},240:function(n,t,e){var o=e(38)((function(i){return i[1]}));o.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap);"]),o.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&display=swap);"]),o.push([n.i,'/*! tailwindcss v2.2.17 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t\'Segoe UI\',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t\'Apple Color Emoji\',\n\t\t\'Segoe UI Emoji\';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd \'em\' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t\'Liberation Mono\',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent \'sub\' and \'sup\' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type=\'button\'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional \':invalid\' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out \'fieldset\' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \'inherit\' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user\'s configured `sans` font-family (with Tailwind\'s default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind\'s default "normal" line-height so the user isn\'t forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: Fira Sans, sans-serif; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it\'s border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don\'t inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured \'mono\' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * \'mono\' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that\'s\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.prose{\n  color:#374151;\n  max-width:65ch;\n}\n\n.prose [class~="lead"]{\n  color:#4b5563;\n  font-size:1.25em;\n  line-height:1.6;\n  margin-top:1.2em;\n  margin-bottom:1.2em;\n}\n\n.prose a{\n  color:#111827;\n  text-decoration:underline;\n  font-weight:500;\n}\n\n.prose strong{\n  color:#111827;\n  font-weight:600;\n}\n\n.prose ol[type="a"]{\n  --list-counter-style:lower-alpha;\n}\n\n.prose ol[type="a" s]{\n  --list-counter-style:lower-alpha;\n}\n\n.prose ol[type="i"]{\n  --list-counter-style:lower-roman;\n}\n\n.prose ol[type="i" s]{\n  --list-counter-style:lower-roman;\n}\n\n.prose ol[type="1"]{\n  --list-counter-style:decimal;\n}\n\n.prose ol > li{\n  position:relative;\n  padding-left:1.75em;\n}\n\n.prose ol > li::before{\n  content:counter(list-item, var(--list-counter-style, decimal)) ".";\n  position:absolute;\n  font-weight:400;\n  color:#6b7280;\n  left:0;\n}\n\n.prose ul > li{\n  position:relative;\n  padding-left:1.75em;\n}\n\n.prose ul > li::before{\n  content:"";\n  position:absolute;\n  background-color:#d1d5db;\n  border-radius:50%;\n  width:0.375em;\n  height:0.375em;\n  top:calc(0.875em - 0.1875em);\n  left:0.25em;\n}\n\n.prose hr{\n  border-color:#e5e7eb;\n  border-top-width:1px;\n  margin-top:3em;\n  margin-bottom:3em;\n}\n\n.prose blockquote{\n  font-weight:500;\n  font-style:italic;\n  color:#111827;\n  border-left-width:0.25rem;\n  border-left-color:#e5e7eb;\n  quotes:"\\201C""\\201D""\\2018""\\2019";\n  margin-top:1.6em;\n  margin-bottom:1.6em;\n  padding-left:1em;\n}\n\n.prose blockquote p:first-of-type::before{\n  content:open-quote;\n}\n\n.prose blockquote p:last-of-type::after{\n  content:close-quote;\n}\n\n.prose h1{\n  color:#111827;\n  font-weight:800;\n  font-size:2.25em;\n  margin-top:0;\n  margin-bottom:0.8888889em;\n  line-height:1.1111111;\n}\n\n.prose h2{\n  color:#111827;\n  font-weight:700;\n  font-size:1.5em;\n  margin-top:2em;\n  margin-bottom:1em;\n  line-height:1.3333333;\n}\n\n.prose h3{\n  color:#111827;\n  font-weight:600;\n  font-size:1.25em;\n  margin-top:1.6em;\n  margin-bottom:0.6em;\n  line-height:1.6;\n}\n\n.prose h4{\n  color:#111827;\n  font-weight:600;\n  margin-top:1.5em;\n  margin-bottom:0.5em;\n  line-height:1.5;\n}\n\n.prose figure figcaption{\n  color:#6b7280;\n  font-size:0.875em;\n  line-height:1.4285714;\n  margin-top:0.8571429em;\n}\n\n.prose code{\n  color:#111827;\n  font-weight:600;\n  font-size:0.875em;\n}\n\n.prose code::before{\n  content:"`";\n}\n\n.prose code::after{\n  content:"`";\n}\n\n.prose a code{\n  color:#111827;\n}\n\n.prose pre{\n  color:#e5e7eb;\n  background-color:#1f2937;\n  overflow-x:auto;\n  font-size:0.875em;\n  line-height:1.7142857;\n  margin-top:1.7142857em;\n  margin-bottom:1.7142857em;\n  border-radius:0.375rem;\n  padding-top:0.8571429em;\n  padding-right:1.1428571em;\n  padding-bottom:0.8571429em;\n  padding-left:1.1428571em;\n}\n\n.prose pre code{\n  background-color:transparent;\n  border-width:0;\n  border-radius:0;\n  padding:0;\n  font-weight:400;\n  color:inherit;\n  font-size:inherit;\n  font-family:inherit;\n  line-height:inherit;\n}\n\n.prose pre code::before{\n  content:none;\n}\n\n.prose pre code::after{\n  content:none;\n}\n\n.prose table{\n  width:100%;\n  table-layout:auto;\n  text-align:left;\n  margin-top:2em;\n  margin-bottom:2em;\n  font-size:0.875em;\n  line-height:1.7142857;\n}\n\n.prose thead{\n  color:#111827;\n  font-weight:600;\n  border-bottom-width:1px;\n  border-bottom-color:#d1d5db;\n}\n\n.prose thead th{\n  vertical-align:bottom;\n  padding-right:0.5714286em;\n  padding-bottom:0.5714286em;\n  padding-left:0.5714286em;\n}\n\n.prose tbody tr{\n  border-bottom-width:1px;\n  border-bottom-color:#e5e7eb;\n}\n\n.prose tbody tr:last-child{\n  border-bottom-width:0;\n}\n\n.prose tbody td{\n  vertical-align:top;\n  padding-top:0.5714286em;\n  padding-right:0.5714286em;\n  padding-bottom:0.5714286em;\n  padding-left:0.5714286em;\n}\n\n.prose{\n  font-size:1rem;\n  line-height:1.75;\n}\n\n.prose p{\n  margin-top:1.25em;\n  margin-bottom:1.25em;\n}\n\n.prose img{\n  margin-top:2em;\n  margin-bottom:2em;\n}\n\n.prose video{\n  margin-top:2em;\n  margin-bottom:2em;\n}\n\n.prose figure{\n  margin-top:2em;\n  margin-bottom:2em;\n}\n\n.prose figure > *{\n  margin-top:0;\n  margin-bottom:0;\n}\n\n.prose h2 code{\n  font-size:0.875em;\n}\n\n.prose h3 code{\n  font-size:0.9em;\n}\n\n.prose ol{\n  margin-top:1.25em;\n  margin-bottom:1.25em;\n}\n\n.prose ul{\n  margin-top:1.25em;\n  margin-bottom:1.25em;\n}\n\n.prose li{\n  margin-top:0.5em;\n  margin-bottom:0.5em;\n}\n\n.prose > ul > li p{\n  margin-top:0.75em;\n  margin-bottom:0.75em;\n}\n\n.prose > ul > li > *:first-child{\n  margin-top:1.25em;\n}\n\n.prose > ul > li > *:last-child{\n  margin-bottom:1.25em;\n}\n\n.prose > ol > li > *:first-child{\n  margin-top:1.25em;\n}\n\n.prose > ol > li > *:last-child{\n  margin-bottom:1.25em;\n}\n\n.prose ul ul, .prose ul ol, .prose ol ul, .prose ol ol{\n  margin-top:0.75em;\n  margin-bottom:0.75em;\n}\n\n.prose hr + *{\n  margin-top:0;\n}\n\n.prose h2 + *{\n  margin-top:0;\n}\n\n.prose h3 + *{\n  margin-top:0;\n}\n\n.prose h4 + *{\n  margin-top:0;\n}\n\n.prose thead th:first-child{\n  padding-left:0;\n}\n\n.prose thead th:last-child{\n  padding-right:0;\n}\n\n.prose tbody td:first-child{\n  padding-left:0;\n}\n\n.prose tbody td:last-child{\n  padding-right:0;\n}\n\n.prose > :first-child{\n  margin-top:0;\n}\n\n.prose > :last-child{\n  margin-bottom:0;\n}\n\n.prose-sm{\n  font-size:0.875rem;\n  line-height:1.7142857;\n}\n\n.prose-sm p{\n  margin-top:1.1428571em;\n  margin-bottom:1.1428571em;\n}\n\n.prose-sm [class~="lead"]{\n  font-size:1.2857143em;\n  line-height:1.5555556;\n  margin-top:0.8888889em;\n  margin-bottom:0.8888889em;\n}\n\n.prose-sm blockquote{\n  margin-top:1.3333333em;\n  margin-bottom:1.3333333em;\n  padding-left:1.1111111em;\n}\n\n.prose-sm h1{\n  font-size:2.1428571em;\n  margin-top:0;\n  margin-bottom:0.8em;\n  line-height:1.2;\n}\n\n.prose-sm h2{\n  font-size:1.4285714em;\n  margin-top:1.6em;\n  margin-bottom:0.8em;\n  line-height:1.4;\n}\n\n.prose-sm h3{\n  font-size:1.2857143em;\n  margin-top:1.5555556em;\n  margin-bottom:0.4444444em;\n  line-height:1.5555556;\n}\n\n.prose-sm h4{\n  margin-top:1.4285714em;\n  margin-bottom:0.5714286em;\n  line-height:1.4285714;\n}\n\n.prose-sm img{\n  margin-top:1.7142857em;\n  margin-bottom:1.7142857em;\n}\n\n.prose-sm video{\n  margin-top:1.7142857em;\n  margin-bottom:1.7142857em;\n}\n\n.prose-sm figure{\n  margin-top:1.7142857em;\n  margin-bottom:1.7142857em;\n}\n\n.prose-sm figure > *{\n  margin-top:0;\n  margin-bottom:0;\n}\n\n.prose-sm figure figcaption{\n  font-size:0.8571429em;\n  line-height:1.3333333;\n  margin-top:0.6666667em;\n}\n\n.prose-sm code{\n  font-size:0.8571429em;\n}\n\n.prose-sm h2 code{\n  font-size:0.9em;\n}\n\n.prose-sm h3 code{\n  font-size:0.8888889em;\n}\n\n.prose-sm pre{\n  font-size:0.8571429em;\n  line-height:1.6666667;\n  margin-top:1.6666667em;\n  margin-bottom:1.6666667em;\n  border-radius:0.25rem;\n  padding-top:0.6666667em;\n  padding-right:1em;\n  padding-bottom:0.6666667em;\n  padding-left:1em;\n}\n\n.prose-sm ol{\n  margin-top:1.1428571em;\n  margin-bottom:1.1428571em;\n}\n\n.prose-sm ul{\n  margin-top:1.1428571em;\n  margin-bottom:1.1428571em;\n}\n\n.prose-sm li{\n  margin-top:0.2857143em;\n  margin-bottom:0.2857143em;\n}\n\n.prose-sm ol > li{\n  padding-left:1.5714286em;\n}\n\n.prose-sm ol > li::before{\n  left:0;\n}\n\n.prose-sm ul > li{\n  padding-left:1.5714286em;\n}\n\n.prose-sm ul > li::before{\n  height:0.3571429em;\n  width:0.3571429em;\n  top:calc(0.8571429em - 0.1785714em);\n  left:0.2142857em;\n}\n\n.prose-sm > ul > li p{\n  margin-top:0.5714286em;\n  margin-bottom:0.5714286em;\n}\n\n.prose-sm > ul > li > *:first-child{\n  margin-top:1.1428571em;\n}\n\n.prose-sm > ul > li > *:last-child{\n  margin-bottom:1.1428571em;\n}\n\n.prose-sm > ol > li > *:first-child{\n  margin-top:1.1428571em;\n}\n\n.prose-sm > ol > li > *:last-child{\n  margin-bottom:1.1428571em;\n}\n\n.prose-sm ul ul, .prose-sm ul ol, .prose-sm ol ul, .prose-sm ol ol{\n  margin-top:0.5714286em;\n  margin-bottom:0.5714286em;\n}\n\n.prose-sm hr{\n  margin-top:2.8571429em;\n  margin-bottom:2.8571429em;\n}\n\n.prose-sm hr + *{\n  margin-top:0;\n}\n\n.prose-sm h2 + *{\n  margin-top:0;\n}\n\n.prose-sm h3 + *{\n  margin-top:0;\n}\n\n.prose-sm h4 + *{\n  margin-top:0;\n}\n\n.prose-sm table{\n  font-size:0.8571429em;\n  line-height:1.5;\n}\n\n.prose-sm thead th{\n  padding-right:1em;\n  padding-bottom:0.6666667em;\n  padding-left:1em;\n}\n\n.prose-sm thead th:first-child{\n  padding-left:0;\n}\n\n.prose-sm thead th:last-child{\n  padding-right:0;\n}\n\n.prose-sm tbody td{\n  padding-top:0.6666667em;\n  padding-right:1em;\n  padding-bottom:0.6666667em;\n  padding-left:1em;\n}\n\n.prose-sm tbody td:first-child{\n  padding-left:0;\n}\n\n.prose-sm tbody td:last-child{\n  padding-right:0;\n}\n\n.prose-sm > :first-child{\n  margin-top:0;\n}\n\n.prose-sm > :last-child{\n  margin-bottom:0;\n}\n\n.static{\n  position:static;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.top-0{\n  top:0px;\n}\n\n.right-0{\n  right:0px;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n.bottom-1{\n  bottom:0.25rem;\n}\n\n.left-0{\n  left:0px;\n}\n\n.left-1{\n  left:0.25rem;\n}\n\n.mx-10{\n  margin-left:2.5rem;\n  margin-right:2.5rem;\n}\n\n.mr-0{\n  margin-right:0px;\n}\n\n.mr-2{\n  margin-right:0.5rem;\n}\n\n.mr-3{\n  margin-right:0.75rem;\n}\n\n.mb-3{\n  margin-bottom:0.75rem;\n}\n\n.inline-block{\n  display:inline-block;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-7{\n  height:1.75rem;\n}\n\n.h-24{\n  height:6rem;\n}\n\n.w-0{\n  width:0px;\n}\n\n.w-7{\n  width:1.75rem;\n}\n\n.w-16{\n  width:4rem;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.cursor-pointer{\n  cursor:pointer;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-col-reverse{\n  flex-direction:column-reverse;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.self-center{\n  align-self:center;\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border-2{\n  border-width:2px;\n}\n\n.border-b-4{\n  border-bottom-width:4px;\n}\n\n.border-navy-lighter{\n  --tw-border-opacity:1;\n  border-color:rgba(57, 79, 107, var(--tw-border-opacity));\n}\n\n.border-ocean-lighter{\n  --tw-border-opacity:1;\n  border-color:rgba(232, 250, 249, var(--tw-border-opacity));\n}\n\n.border-ocean-lightest{\n  --tw-border-opacity:1;\n  border-color:rgba(181, 255, 253, var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-navy-lighter{\n  --tw-border-opacity:1;\n  border-color:rgba(57, 79, 107, var(--tw-border-opacity));\n}\n\n.bg-navy-default{\n  --tw-bg-opacity:1;\n  background-color:rgba(42, 57, 80, var(--tw-bg-opacity));\n}\n\n.p-5{\n  padding:1.25rem;\n}\n\n.px-5{\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.pr-2{\n  padding-right:0.5rem;\n}\n\n.pb-2{\n  padding-bottom:0.5rem;\n}\n\n.pl-0{\n  padding-left:0px;\n}\n\n.font-sans{\n  font-family:Fira Sans, sans-serif;\n}\n\n.font-serif{\n  font-family:Roboto Slab, serif;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.font-light{\n  font-weight:300;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.leading-tight{\n  line-height:1.25;\n}\n\n.text-navy-default{\n  --tw-text-opacity:1;\n  color:rgba(42, 57, 80, var(--tw-text-opacity));\n}\n\n.text-navy-lighter{\n  --tw-text-opacity:1;\n  color:rgba(57, 79, 107, var(--tw-text-opacity));\n}\n\n.text-coral-darker{\n  --tw-text-opacity:1;\n  color:rgba(217, 124, 113, var(--tw-text-opacity));\n}\n\n.text-ocean-lighter{\n  --tw-text-opacity:1;\n  color:rgba(232, 250, 249, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-navy-default{\n  --tw-text-opacity:1;\n  color:rgba(42, 57, 80, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-navy-lighter{\n  --tw-text-opacity:1;\n  color:rgba(57, 79, 107, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-coral-default{\n  --tw-text-opacity:1;\n  color:rgba(255, 179, 171, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-ocean-default{\n  --tw-text-opacity:1;\n  color:rgba(180, 217, 224, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-ocean-lightest{\n  --tw-text-opacity:1;\n  color:rgba(181, 255, 253, var(--tw-text-opacity));\n}\n\n.opacity-0{\n  opacity:0;\n}\n\n.opacity-100{\n  opacity:1;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.dark .dark\\:shadow-xl{\n  --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.transition-colors{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.ease-linear{\n  transition-timing-function:linear;\n}\n\n.ease-in{\n  transition-timing-function:cubic-bezier(0.4, 0, 1, 1);\n}\n\nbody{\n  --tw-bg-opacity:1;\n  background-color:rgba(180, 217, 224, var(--tw-bg-opacity))\n}\n\n.dark body{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 38, 51, var(--tw-bg-opacity));\n}\n\nbody{\n  transition:background-color .8s cubic-bezier(.165,.84,.44,1);\n}\n\n.main{\n  margin-top:2.5rem;\n  margin-right:auto;\n  margin-left:auto;\n  display:flex;\n  max-width:48rem;\n  flex-direction:column;\n  padding-left:2.75rem;\n  padding-right:2.75rem;\n  padding-bottom:2.75rem\n}\n\n@media (min-width: 640px){\n  .sm\\:relative{\n    position:relative;\n  }\n\n  .sm\\:top-2{\n    top:0.5rem;\n  }\n\n  .sm\\:mr-0{\n    margin-right:0px;\n  }\n\n  .sm\\:mr-5{\n    margin-right:1.25rem;\n  }\n\n  .sm\\:mb-0{\n    margin-bottom:0px;\n  }\n\n  .sm\\:block{\n    display:block;\n  }\n\n  .sm\\:flex-row{\n    flex-direction:row;\n  }\n\n  .sm\\:flex-col{\n    flex-direction:column;\n  }\n\n  .sm\\:items-start{\n    align-items:flex-start;\n  }\n\n  .sm\\:items-center{\n    align-items:center;\n  }\n\n  .sm\\:justify-between{\n    justify-content:space-between;\n  }\n\n  .sm\\:self-start{\n    align-self:flex-start;\n  }\n\n  .sm\\:pb-7{\n    padding-bottom:1.75rem;\n  }\n\n  .sm\\:text-2xl{\n    font-size:1.5rem;\n    line-height:2rem;\n  }\n\n  .sm\\:text-3xl{\n    font-size:1.875rem;\n    line-height:2.25rem;\n  }\n\n  .sm\\:text-4xl{\n    font-size:2.25rem;\n    line-height:2.5rem;\n  }\n\n  .sm\\:text-5xl{\n    font-size:3rem;\n    line-height:1;\n  }\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}',""]),o.locals={},n.exports=o},243:function(n,t,e){"use strict";e(167)},244:function(n,t,e){var o=e(38)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\na[data-v-dcc4f2b2]{\n  margin-right:0.75rem;\n  border-bottom-width:4px;\n  --tw-border-opacity:1;\n  border-color:rgba(232, 250, 249, var(--tw-border-opacity))\n}\n.dark a[data-v-dcc4f2b2]{\n  --tw-border-opacity:1;\n  border-color:rgba(57, 79, 107, var(--tw-border-opacity))\n}\na[data-v-dcc4f2b2]{\n  font-size:0.875rem;\n  line-height:1.25rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(57, 79, 107, var(--tw-text-opacity))\n}\n.dark a[data-v-dcc4f2b2]{\n  --tw-text-opacity:1;\n  color:rgba(180, 217, 224, var(--tw-text-opacity))\n}\na[data-v-dcc4f2b2]{\n  text-decoration:none\n}\na[data-v-dcc4f2b2]:hover{\n  --tw-border-opacity:1;\n  border-color:rgba(181, 255, 253, var(--tw-border-opacity));\n  --tw-text-opacity:1;\n  color:rgba(42, 57, 80, var(--tw-text-opacity))\n}\n.dark a[data-v-dcc4f2b2]:hover{\n  --tw-text-opacity:1;\n  color:rgba(181, 255, 253, var(--tw-text-opacity))\n}\na[data-v-dcc4f2b2]:hover{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n  transition-timing-function:linear\n}\n.footer[data-v-dcc4f2b2]{\n  display:flex\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},245:function(n,t,e){"use strict";e(168)},246:function(n,t,e){var o=e(38)((function(i){return i[1]}));o.push([n.i,'/*purgecss start ignore*/\n.switch[data-v-7aa93e7b]{\n  position:relative;\n  display:inline-block;\n  height:2.25rem;\n  width:4rem\n}\n.switch input[data-v-7aa93e7b]{\n  height:0px;\n  width:0px;\n  opacity:0\n}\n.slider[data-v-7aa93e7b]{\n  position:absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n  cursor:pointer;\n  --tw-bg-opacity:1;\n  background-color:rgba(42, 57, 80, var(--tw-bg-opacity));\n  --webkit-transtion:0.4s;\n  transition:.4s\n}\n.slider[data-v-7aa93e7b]:before{\n  position:absolute;\n  bottom:0.25rem;\n  left:0.25rem;\n  height:1.75rem;\n  width:1.75rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(232, 250, 249, var(--tw-bg-opacity));\n  content:"";\n  transition:.4s\n}\ninput:checked+.slider[data-v-7aa93e7b]{\n  --tw-bg-opacity:1;\n  background-color:rgba(42, 57, 80, var(--tw-bg-opacity))\n}\ninput:focus+.slider[data-v-7aa93e7b]{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\ninput:checked+.slider[data-v-7aa93e7b]:before{\n  transform:translateX(26px)\n}\n.slider.round[data-v-7aa93e7b]{\n  border-radius:32px\n}\n.slider.round[data-v-7aa93e7b]:before{\n  border-radius:50%\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},247:function(n,t,e){"use strict";e(169)},248:function(n,t,e){var o=e(38)((function(i){return i[1]}));o.push([n.i,'/*purgecss start ignore*/\n#post-header[data-v-1893f809]{\n  margin-left:2.5rem;\n  margin-right:2.5rem;\n  margin-top:1.5rem;\n  display:flex;\n  align-items:center;\n  justify-content:space-between\n}\n.post-content[data-v-1893f809]{\n  max-width:56rem\n}\n#back-btn[data-v-1893f809]{\n  display:flex;\n  cursor:pointer;\n  border-radius:9999px;\n  border-width:2px;\n  --tw-border-opacity:1;\n  border-color:rgba(232, 250, 249, var(--tw-border-opacity))\n}\n.dark #back-btn[data-v-1893f809]{\n  --tw-border-opacity:1;\n  border-color:rgba(57, 79, 107, var(--tw-border-opacity))\n}\n#back-btn[data-v-1893f809]{\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(232, 250, 249, var(--tw-text-opacity))\n}\n.dark #back-btn[data-v-1893f809]{\n  --tw-text-opacity:1;\n  color:rgba(57, 79, 107, var(--tw-text-opacity))\n}\n#back-btn[data-v-1893f809]{\n  opacity:1\n}\n#back-btn[data-v-1893f809]:hover{\n  --tw-border-opacity:1;\n  border-color:rgba(57, 79, 107, var(--tw-border-opacity))\n}\n.dark #back-btn[data-v-1893f809]:hover{\n  --tw-border-opacity:1;\n  border-color:rgba(255, 179, 171, var(--tw-border-opacity))\n}\n#back-btn[data-v-1893f809]:hover{\n  --tw-text-opacity:1;\n  color:rgba(57, 79, 107, var(--tw-text-opacity))\n}\n.dark #back-btn[data-v-1893f809]:hover{\n  --tw-text-opacity:1;\n  color:rgba(42, 57, 80, var(--tw-text-opacity))\n}\n.hvr-bounce-to-top[data-v-1893f809]{\n  display:inline-block;\n  vertical-align:middle;\n  transform:perspective(1px) translateZ(0);\n  box-shadow:0 0 1px transparent;\n  position:relative;\n  transition-property:color;\n  transition-duration:.5s;\n  overflow:hidden\n}\n.hvr-bounce-to-top[data-v-1893f809]:before{\n  position:absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 179, 171, var(--tw-bg-opacity));\n  content:"";\n  z-index:-1;\n  -webkit-transform:scaleY(0);\n  -webkit-transform-origin:50% 100%;\n  -webkit-transition-property:transform;\n  -webkit-transition-duration:.5s;\n  -webkit-transition-timing-function:ease-out;\n  transform:scaleY(0);\n  transform-origin:50% 100%;\n  transition-property:transform;\n  transition-duration:.5s;\n  transition-timing-function:ease-out\n}\n.hvr-bounce-to-top[data-v-1893f809]:active, .hvr-bounce-to-top[data-v-1893f809]:focus, .hvr-bounce-to-top[data-v-1893f809]:hover{\n  --tw-text-opacity:1;\n  color:rgba(232, 250, 249, var(--tw-text-opacity))\n}\n.hvr-bounce-to-top[data-v-1893f809]:active:before,.hvr-bounce-to-top[data-v-1893f809]:focus:before,.hvr-bounce-to-top[data-v-1893f809]:hover:before{\n  -webkit-transform:scaleY(1);\n  -webkit-transition-timing-function:cubic-bezier(.52,1.64,.37,.66);\n  transform:scaleY(1);\n  transition-timing-function:cubic-bezier(.52,1.64,.37,.66)\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},249:function(n,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return o})),e.d(t,"mutations",(function(){return r}));var o=function(){return{isDarkMode:!1}},r={toggleDarkMode:function(n){n.isDarkMode=!n.isDarkMode}}}},[[195,8,2,9]]]);