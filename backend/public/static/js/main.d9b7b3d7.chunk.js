(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{65:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),a=e(21),i=e(37),c=e(4),d=e(13);var s=e(6),u=function(n,t){var e=Object(o.createContext)(),a=Object(o.createContext)();return[function(i){var c=i.children,s=Object(o.useReducer)(n,t),u=Object(d.a)(s,2),l=u[0],p=u[1],b=Object(o.useMemo)((function(){return[l,p]}),[l,p]);return Object(r.jsx)(a.Provider,{value:b[1],children:Object(r.jsx)(e.Provider,{value:b[0],children:c})})},function(){return Object(o.useContext)(e)},function(){return Object(o.useContext)(a)}]}((function(n,t){switch(t.type){case"GET_TODOS_SUCCESSED":return Object(s.a)(Object(s.a)({},n),{},{todos:t.todos,active:t.active_todos,done:t.done_todos,isLoading:!1});case"GET_TODOS_FAILED":return Object(s.a)(Object(s.a)({},n),{},{error:t.error,isLoading:!1});case"POST_TODO_SUCCESSED":return Object(s.a)(Object(s.a)({},n),{},{todos:t.todos,isLoading:!1,active:t.active_todos,done:t.done_todos,input:""});case"POST_TODO_FAILED":return Object(s.a)(Object(s.a)({},n),{},{error:t.error,isLoading:!1});case"UPDATE_TODO_SUCCESSED":return Object(s.a)(Object(s.a)({},n),{},{todos:t.todos,active:t.active_todos,done:t.done_todos,isLoading:!1});case"UPDATE_TODO_FAILED":return Object(s.a)(Object(s.a)({},n),{},{error:t.error,isLoading:!1});case"SWITCH_TODOS":return Object(s.a)(Object(s.a)({},n),{},{show:t.set});case"CHANGE_VALUE":return Object(s.a)(Object(s.a)({},n),{},{input:t.data});case"LOADING":return Object(s.a)(Object(s.a)({},n),{},{isLoading:t.loading});default:return n}}),{input:"",error:"",todos:[],active:[],done:[],show:"all",isLoading:!1}),l=Object(d.a)(u,3),p=l[0],b=l[1],h=l[2],f=e(2),g=e(3),x=e(11),m=e.n(x),v=e(17),j=e(18),O=e.n(j),y="http://localhost/api/todo",w=function(n){return n.filter((function(n){return 0===n.is_done}))},k=function(n){return n.filter((function(n){return 1===n.is_done}))},_=function(){return function(){var n=Object(v.a)(m.a.mark((function n(t){var e,r,o;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"LOADING",loading:!0}),n.prev=1,n.next=4,O.a.get(y);case 4:return e=n.sent,r=w(e.data),o=k(e.data),n.abrupt("return",t({type:"GET_TODOS_SUCCESSED",todos:e.data,active_todos:r,done_todos:o}));case 10:return n.prev=10,n.t0=n.catch(1),n.abrupt("return",t({type:"GET_TODOS_FAILED",error:n.t0}));case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t){return n.apply(this,arguments)}}()};function E(){var n=Object(f.a)(['\n  html,\n  body,\n  div,\n  span,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  abbr,\n  address,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  samp,\n  small,\n  strong,\n  sub,\n  sup,\n  var,\n  b,\n  i,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n    background: transparent;\n  }\n\n  body {\n    line-height: 1;\n  }\n\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n\n  nav ul {\n    list-style: none;\n  }\n\n  blockquote,\n  q {\n    quotes: none;\n  }\n\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n\n  a {\n    margin: 0;\n    padding: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n    background: transparent;\n  }\n\n  /* change colours to suit your needs */\n\n  ins {\n    background-color: #ff9;\n    color: #000;\n    text-decoration: none;\n  }\n\n  /* change colours to suit your needs */\n\n  mark {\n    background-color: #ff9;\n    color: #000;\n    font-style: italic;\n    font-weight: bold;\n  }\n\n  del {\n    text-decoration: line-through;\n  }\n\n  abbr[title],\n  dfn[title] {\n    border-bottom: 1px dotted;\n    cursor: help;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #cccccc;\n    margin: 1em 0;\n    padding: 0;\n  }\n\n  input,\n  select {\n    vertical-align: middle;\n  }\n\n  *,\n  *:before,\n  *:after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    max-width: 100%;\n  }\n']);return E=function(){return n},n}var C=Object(g.b)(E());function S(){var n=Object(f.a)(["\n  ","\n  ","\n  ","\n  body {\n    ","\n    font-size: 15px;\n    line-height: 1.5;\n    padding: 0;\n    margin: 0;\n    min-height: 100vh;\n    position: relative;\n    background: var(--background);\n    a {\n      color: var(--text);\n    }\n  }\n  * {\n    box-sizing: boreder-box;\n    margin: 0;\n    padding: 0;\n\n  }\n  h1, h2, h3, h4, h5, h6 {\n    font-weight: 600;\n  }\n  *:before, *:after {\n    box-sizing: border-box;\n  }\n  input, button, textarea, button, select {\n    ","\n    border: none;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: none;\n    outline: none;\n    background: none;\n    line-height: 1.5;\n    font-size: 15px;\n    &:focus {\n      outline: none;\n    }\n    ::placeholder {\n      color: ",";\n    }\n  }\n  .flex {\n    display: flex;\n    &.center {\n      align-items: center;\n      justify-content: center;\n    }\n    &.row {\n      flex-direction: row;\n    }\n    &.column {\n      flex-direction: column;\n    }\n    &.space {\n      justify-content: space-between;\n    }\n  }\n  .mt-auto {\n    margin-top: auto;\n  }\n  .mr-auto {\n    margin-left: auto;\n  }\n  .mb-auto {\n    margin-bottom: auto;\n  }\n  .ml-auto {\n    margin-left: auto;\n  }\n  .fade-in {\n    opacity: 0;\n    visibility: hidden;\n    animation: "," 0.4s ease-in-out forwards;\n  }\n  /* ===============================================\n  # smart phone\n  =============================================== */\n  @media screen and (max-width: 480px) {\n    .pc {\n      display: none !important;\n    }\n  }\n\n  /* ===============================================\n  # pc\n  =============================================== */\n  @media screen and (min-width: 480px) {\n    .sp {\n      display: none !important;\n    }\n  }\n"]);return S=function(){return n},n}function D(){var n=Object(f.a)(['\n  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",\n    "Hiragino Sans", Meiryo, sans-serif;\n  word-wrap: break-word;\n  word-break: break-all;\n  -webkit-font-kerning: normal;\n  font-kerning: normal;\n  -moz-font-feature-settings: "palt" 1;\n  -webkit-font-feature-settings: "palt" 1;\n  font-feature-settings: "palt" 1;\n  font-variant-ligatures: no-common-ligatures;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: unset;\n  text-rendering: auto;\n  -webkit-text-stroke: 1px transparent;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  letter-spacing: 0.08em;\n  font-weight: 400;\n  color: var(--text);\n  @media only screen and (-webkit-min-device-pixel-ratio: 2),\n    (min-resolution: 2dppx) {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n']);return D=function(){return n},n}function L(){var n=Object(f.a)(["\n  0% {\n    opacity: 1;\n    visibility: visible;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(-10px);\n  }\n"]);return L=function(){return n},n}function N(){var n=Object(f.a)(["\n  0% {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    visibility: visible;\n    transform: translateY(0);\n  }\n"]);return N=function(){return n},n}function T(){var n=Object(f.a)(["\n    :root {\n      ","\n    }\n  "]);return T=function(){return n},n}function A(){var n=Object(f.a)(["\n    ","\n  "]);return A=function(){return n},n}var z={};function G(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=n.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i),r=null;return e&&(r=e.slice(1,4).map((function(n){return parseInt(n,16)}))),(e=n.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i))&&(r=e.slice(1,4).map((function(n){return 17*parseInt(n,16)}))),r?"rgba(".concat(r[0],", ").concat(r[1],", ").concat(r[2],", ").concat(t,")"):null}z.background="#fffeff",z.text="#617e8c",z.paleGray="#f9f9f9",z.lightGray="#ddd",z.gray="#a9b8bc",z.primary="#feaa2e",z.primaryLight=G("#feaa2e",.15),z.primaryPale=G("#feaa2e",.07),z.secondary="#FFB238",z.danger="#FF5C55",z.success="#4FCE7A",z.warn="#feaa2e",z.info="#2490eb";var F=Object(g.d)(N()),P=(Object(g.d)(L()),Object(g.b)(D())),I=Object(g.a)(S(),C,(function(){var n="";for(var t in z)n+="--".concat(t,": ").concat(z[t],";");return Object(g.b)(T(),n)}),(function(){for(var n="",t=1;t<=10;t++)n+="\n      .mt-".concat(5*t," {\n        margin-top: ").concat(5*t,"px;\n      }\n      .mr-").concat(5*t," {\n        margin-right: ").concat(5*t,"px;\n      }\n      .mb-").concat(5*t," {\n        margin-bottom: ").concat(5*t,"px;\n      }\n      .ml-").concat(5*t," {\n        margin-left: ").concat(5*t,"px;\n      }\n      .pt-").concat(5*t," {\n        padding-top: ").concat(5*t,"px;\n      }\n      .pr-").concat(5*t," {\n        padding-right: ").concat(5*t,"px;\n      }\n      .pb-").concat(5*t," {\n        padding-bottom: ").concat(5*t,"px;\n      }\n      .pl-").concat(5*t," {\n        padding-left: ").concat(5*t,"px;\n      }\n      .w").concat(10*t,"p {\n        width: ").concat(10*t,"%;\n      }\n      .w").concat(100*t," {\n        width: 100px * $i;\n      }\n    ");return Object(g.b)(A(),n)}),P,P,z.gray,F);function U(){var n=Object(f.a)(["\n  .md-btn {\n    display: -webkit-flex;\n    display: -ms-flex;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    background: ",";\n    width: ",";\n    height: ",";\n    font-size: ",";\n    text-decoration: none;\n    padding: ",";\n    line-height: 1;\n    padding-top: 0;\n    color: #fff;\n    border-radius: ",";\n    box-shadow: 0 2px 3px 0px\n      ",";\n    border: none;\n    transition: box-shadow 0.2s ease-in-out;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    user-select: none;\n    font-weight: 600;\n    letter-spacing: 0.05rem;\n    &:hover {\n      background: ",";\n      box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.15),\n        0 4px 12px -3px ",";\n    }\n    i {\n      padding: 0px 3px;\n      line-height: 1;\n      font-size: 1rem;\n    }\n    span {\n      padding: 0px 3px;\n      font-weight: 600;\n      letter-spacing: 0.05rem;\n    }\n    .ink {\n      display: block;\n      position: absolute;\n      background: rgba(255, 255, 255, 0.5);\n      border-radius: 100%;\n      will-change: transform;\n      transform: scale(0);\n      &.is-animating {\n        animation: "," 0.4s linear;\n      }\n    }\n  }\n  .circle {\n    width: ",";\n    height: ",";\n    padding: 0;\n    border-radius: 50%;\n    i {\n      font-size: ",";\n      padding: 0px;\n      margin: 0px;\n      padding-top: 1px;\n      line-height: 1;\n    }\n  }\n  .transparent {\n    padding: ",";\n    background: none;\n    color: ",";\n    box-shadow: none;\n    letter-spacing: 0.05rem;\n    &:hover {\n      box-shadow: none;\n      background: ",";\n    }\n    .ink {\n      background: ",";\n    }\n  }\n  .border {\n    border: 1px solid ",";\n    padding: ",";\n    background: none;\n    color: ",";\n    box-shadow: none;\n    letter-spacing: 0.05rem;\n    &:hover {\n      box-shadow: none;\n      background: ",";\n    }\n    .ink {\n      background: ",";\n    }\n  }\n  &.transparent,\n  &.border {\n    background: none;\n    color: #999;\n    box-shadow: none;\n    &:hover {\n      box-shadow: none;\n      background: none;\n    }\n    .ink {\n      display: block;\n      background: rgba(55, 55, 55, 0.2);\n    }\n  }\n  .disabled {\n    background: #bbb;\n    color: #fff;\n    cursor: not-allowed !important;\n    box-shadow: 0 2px 2px -1px rgba(88, 88, 88, 0.1),\n      0 2px 8px 0px rgba(0, 0, 0, 0.1);\n    .ink {\n      display: none;\n    }\n    &:hover {\n      background: #bbb;\n      box-shadow: 0 2px 2px -1px rgba(55, 55, 55, 0.1),\n        0 2px 8px 0px rgba(0, 0, 0, 0.1);\n    }\n  }\n"]);return U=function(){return n},n}function q(){var n=Object(f.a)(["\n  0% {\n    opacity: 0.8;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(2.5);\n  }\n"]);return q=function(){return n},n}var H=Object(g.d)(q()),B=g.c.div(U(),(function(n){return n.color||z.primary}),(function(n){return n.width||"auto"}),(function(n){return n.height||"40px"}),(function(n){return n.fontSize||".85rem"}),(function(n){return n.width?"0px 5px":"0px 30px"}),(function(n){return n.round?"50px":"5px"}),(function(n){return n.color40||G(z.primary,.4)}),(function(n){return n.color||z.primary}),(function(n){return n.color50||G(z.primary,.5)}),H,(function(n){return n.width||"40px"}),(function(n){return n.height||"40px"}),(function(n){return n.fontSize||"1rem"}),(function(n){return n.width?"0px 5px":"0px 10px"}),(function(n){return n.color||z.primary}),(function(n){return n.color10||G(z.primary,.1)}),(function(n){return n.color20||G(z.primary,.2)}),(function(n){return n.color||z.primary}),(function(n){return n.width?"0px 5px":"0px 15px"}),(function(n){return n.color||z.primary}),(function(n){return n.color10||G(z.primary,.1)}),(function(n){return n.color20||G(z.primary,.2)}));var Y=function(n){var t,e=n.target,r=e.querySelector(".ink");e.classList.contains("md-btn")||(e=n.target.parentNode),r?t=r.clientWidth:((r=document.createElement("i")).classList.add("ink"),t=Math.max(e.clientWidth,e.clientHeight),r.style.width="".concat(t,"px"),r.style.height="".concat(t,"px"),["animationend","webkitAnimationEnd","oAnimationEnd","MSAnimationEnd"].forEach((function(n){r.addEventListener(n,(function(){r.parentNode.removeChild(r)}))})),e.insertBefore(r,e.firstChild));var o=n.pageX,a=n.pageY,i=e.getBoundingClientRect(),c=o-(i.left+window.pageXOffset),d=a-(i.top+window.pageYOffset);r.style.top="".concat(d-t/2,"px"),r.style.left="".concat(c-t/2,"px"),r.classList.remove("is-animating"),r.width="".concat(r.clientWidth,"px"),r.classList.add("is-animating")};function M(n){var t=n.id,e=n.name,o=n.type,a=n.className,i=n.children,c=n.onClick,d=n.href,s=n.width,u=n.height,l=n.fontSize,p=n.round,b=n.circle,h=n.border,f=n.transparent,g=n.disabled,x=n.color;"primary"===x?x=z.primary:"warn"===x?x=z.warn:"success"===x?x=z.success:"danger"===x?x=z.danger:"secondary"===x?x=z.secondary:"info"===x&&(x=z.info);var m=G(x,.1),v=G(x,.2),j=G(x,.3),O=G(x,.4),y=G(x,.5),w="md-btn ";return w+=b?"circle ":"",w+=h?"border ":"",w+=f?"transparent ":"",w+=g?"disabled ":"",Object(r.jsx)(B,{className:a,width:s,height:u,fontSize:l,round:p,circle:b,color:x,color10:m,color20:v,color30:j,color40:O,color50:y,children:Object(r.jsx)("button",{type:o,id:t,name:e,className:w,onClick:function(n){Y(n),c&&c(n),d&&(window.location.href=d)},disabled:g,children:i})})}M.defaultProps={type:"button",width:"",height:"",fontSize:"",color:"",round:!1,border:!1,circle:!1,transparent:!1,disabled:!1,children:"",onClick:function(){},href:""};var W=M;function R(){var n=Object(f.a)(["\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n  align-items: center;\n  position: relative;\n  line-height: 1.5;\n  .label_checkbox {\n    width: ",";\n    height: ",';\n    display: block;\n    border: 2px solid var(--lightGray);\n    position: absolute;\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    margin: auto;\n  }\n  .label_val {\n    padding: 0;\n    margin: 0;\n    display: -webkit-flex;\n    display: -ms-flex;\n    display: flex;\n    align-items: center;\n    padding-left: 1.5rem;\n    cursor: pointer;\n  }\n  input[type="checkbox"] {\n    display: none;\n    &:checked ~ .label_checkbox {\n      transform: rotate(-45deg);\n      height: 0.5rem;\n      top: -0.5rem;\n      bottom: 0;\n      margin: auto;\n      border-color: var(--primary);\n      border-top-style: none;\n      border-right-style: none;\n    }\n  }\n']);return R=function(){return n},n}var V=g.c.div(R(),(function(n){return n.width}),(function(n){return n.height}));function $(n){var t=n.id,e=n.name,o=n.value,a=n.label,i=n.checked,c=n.onChange,d=n.width,s=n.height,u=n.className;return Object(r.jsxs)(V,{width:d,height:s,className:u,children:[Object(r.jsx)("input",{type:"checkbox",id:t,name:e,className:"check",checked:i,onChange:function(){var n=document.getElementsByName(e),r=[];n.forEach((function(n){!0===n.checked&&r.push(n.value)})),0===r.length&&(r=!1),c&&c({id:t,name:e,value:r})},value:o}),Object(r.jsx)("label",{id:"labelFor_".concat(o),className:"label label_val",htmlFor:t,children:a}),Object(r.jsx)("label",{id:"checkboxFor_".concat(o),className:"label_checkbox",htmlFor:t})]})}$.defaultProps={width:"15px",height:"15px",checked:!1,label:"",onChange:function(){}};var J=$;function X(){var n=Object(f.a)(["\n  width: ",";\n  height: ",";\n  background: var(--paleGray);\n  border: 1px solid var(--lightGray);\n  border-radius: 5px;\n  overflow: hidden;\n  input {\n    width: 100%;\n    height: 100%;\n    padding: 7px 10px;\n  }\n  &.focus {\n    border: 1px solid var(--gray);\n  }\n"]);return X=function(){return n},n}var K=g.c.div(X(),(function(n){return n.width}),(function(n){return n.height})),Q=function(n){var t=Object(o.useState)(!1),e=Object(d.a)(t,2),a=e[0],i=e[1],c=n.id,s=n.name,u=n.type,l=n.width,p=n.height,b=n.className;return Object(r.jsx)(K,{width:l,height:p,className:"".concat(a?"focus":""," ").concat(b),children:Object(r.jsx)("input",{id:c,name:s,type:u,value:n.value,onChange:function(t){return function(t){n.onChange&&n.onChange(t)}(t)},onFocus:function(t){return n.onFocus&&n.onFocus(),void i(!0)},onBlur:function(t){return n.onBlur&&n.onBlur(),void i(!1)},placeholder:n.placeholder})})};Q.defaultProps={width:"300px",height:"35px",type:"text"};var Z=Q;function nn(){var n=Object(f.a)(["\n  .loading-icon {\n    border-bottom: 5px solid rgba(0, 0, 0, 0.15);\n    border-left: 5px solid rgba(0, 0, 0, 0.15);\n    border-right: 5px solid rgba(0, 0, 0, 0.15);\n    border-top: 5px solid ",";\n    border-radius: 100%;\n    width: ",";\n    height: ",";\n    animation: "," 0.6s linear infinite;\n  }\n"]);return nn=function(){return n},n}function tn(){var n=Object(f.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n"]);return tn=function(){return n},n}var en=Object(g.d)(tn()),rn=g.c.div(nn(),(function(n){return n.color}),(function(n){return n.width}),(function(n){return n.height}),en),on=function(n){return Object(r.jsx)(rn,{id:n.id,name:n.name,width:n.width,height:n.height,isLoading:n.isLoading,color:n.color,children:Object(r.jsx)("div",{className:"loading-icon"})})};on.defaultProps={width:"60px",height:"60px",isLoading:!0,color:"#999"};var an=on;function cn(){var n=Object(f.a)(["\n  background-color: rgba(0, 0, 0, 0.1);\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  min-height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  z-index: 999999999;\n"]);return cn=function(){return n},n}var dn=g.c.div(cn()),sn=function(n){var t=n.isLoading;return Object(r.jsx)(r.Fragment,{children:t?Object(r.jsx)(dn,{className:"loading-wrapper",children:Object(r.jsx)(an,{})}):""})};function un(){var n=Object(f.a)(["\n  list-style: none;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  border-bottom: 1px dashed var(--lightGray);\n  padding: 8px 5px;\n  .todo_checkbox {\n    width: calc(100% - 100px);\n    .label {\n      cursor: pointer;\n      padding-left: 30px;\n      text-align: left;\n      font-size: 0.95em;\n      line-height: 1.5;\n      width: 100%;\n    }\n  }\n  &:last-child {\n    border-bottom: 0;\n  }\n  &.done {\n    label {\n      text-decoration: line-through;\n      color: var(--gray);\n    }\n  }\n"]);return un=function(){return n},n}var ln=g.c.li(un()),pn=function(n){var t=b(),e=h(),o=function(){var n=Object(v.a)(m.a.mark((function n(t,e,r){var o,a,i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"LOADING",loading:!0}),n.prev=1,n.next=4,O.a.put("".concat(y,"/").concat(r));case 4:return o=n.sent,a=w(o.data),i=k(o.data),n.abrupt("return",e({type:"UPDATE_TODO_SUCCESSED",todos:o.data,active_todos:a,done_todos:i}));case 10:return n.prev=10,n.t0=n.catch(1),n.abrupt("return",e({type:"UPDATE_TODO_FAILED",error:n.t0}));case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t,e,r){return n.apply(this,arguments)}}(),a=function(){var n=Object(v.a)(m.a.mark((function n(t,e,r){var o,a,i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"LOADING",loading:!0}),n.prev=1,n.next=4,O.a.delete("".concat(y,"/").concat(r));case 4:return o=n.sent,a=w(o.data),i=k(o.data),n.abrupt("return",e({type:"UPDATE_TODO_SUCCESSED",todos:o.data,active_todos:a,done_todos:i}));case 10:return n.prev=10,n.t0=n.catch(1),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t,e,r){return n.apply(this,arguments)}}(),i=n.e,c=i.id,d=i.is_done,s=i.body;return Object(r.jsxs)(ln,{id:c,className:d?"done":"",children:[Object(r.jsx)(J,{id:"checkbox_for_".concat(c),name:c,value:c,label:s,width:"13px",height:"13px",checked:!!d,onChange:function(n){o(t,e,c)},className:"todo_checkbox"}),Object(r.jsx)(W,{width:"85px",height:"35px",onClick:function(){return a(t,e,c)},transparent:!0,children:"REMOVE"})]},c)};function bn(){var n=Object(f.a)(["\n  width: 500px;\n"]);return bn=function(){return n},n}var hn=g.c.ul(bn()),fn=function(n){return Object(r.jsx)(hn,{children:n.todos.map((function(n){return Object(r.jsx)(pn,{e:n},n.id)}))})};function gn(){var n=Object(f.a)(['\n  h1 {\n    font-weight: 600;\n    padding: 20px 0;\n    font-size: 1.7em;\n    span {\n      color: var(--lightGray);\n      padding-right: 5px;\n    }\n  }\n  form {\n    display: flex;\n    padding: 20px 0;\n  }\n  .tabs {\n    width: 100%;\n    border-bottom: 1px solid var(--lightGray);\n    margin-bottom: 10px;\n    .tab {\n      position: relative;\n      &:before {\n        content: "";\n        width: 0;\n        height: 2px;\n        background-color: var(--primary);\n        position: absolute;\n        bottom: -1px;\n        left: 0;\n        right: 0;\n        margin: auto;\n        transition: 0.4s ease;\n      }\n      &.active {\n        &:before {\n          width: 100%;\n        }\n      }\n    }\n  }\n']);return gn=function(){return n},n}var xn=g.c.div(gn()),mn=function(){var n=b(),t=h(),e=function(){var n=Object(v.a)(m.a.mark((function n(t,e){var r,o,a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"LOADING",loading:!0}),n.prev=1,n.next=4,O.a.post(y,{body:t.input});case 4:return r=n.sent,o=w(r.data),a=k(r.data),n.abrupt("return",e({type:"POST_TODO_SUCCESSED",todos:r.data,active_todos:o,done_todos:a}));case 10:return n.prev=10,n.t0=n.catch(1),n.abrupt("return",e({type:"POST_TODO_FAILED",error:n.t0}));case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t,e){return n.apply(this,arguments)}}(),a=_();Object(o.useEffect)((function(){a(t)}),[]);var i=function(n){t({type:"SWITCH_TODOS",set:n})};return Object(r.jsxs)(xn,{children:[Object(r.jsx)(sn,{isLoading:n.isLoading}),Object(r.jsxs)("h1",{children:[Object(r.jsx)("span",{children:"#"}),"TODOS"]}),Object(r.jsxs)("form",{onSubmit:function(r){return function(r){r.preventDefault(),""!==n.input&&!1===n.isLoading&&e(n,t)}(r)},children:[Object(r.jsx)(Z,{value:n.input,width:"calc(100% - 110px)",height:"40px",className:"mr-10",onChange:function(n){return t({type:"CHANGE_VALUE",data:n.target.value})},placeholder:"TYPE HERE ..."}),Object(r.jsx)(W,{type:"submit",width:"100px",children:"+ ADD"})]}),Object(r.jsxs)("div",{className:"flex center tabs",children:[Object(r.jsx)(W,{className:"tab ".concat("all"===n.show?"active":""),width:"100px",onClick:function(){return i("all")},transparent:!0,children:"ALL"}),Object(r.jsx)(W,{className:"tab ".concat("active"===n.show?"active":""),width:"100px",onClick:function(){return i("active")},transparent:!0,children:"ACTIVE"}),Object(r.jsx)(W,{className:"tab ".concat("done"===n.show?"active":""),width:"100px",onClick:function(){return i("done")},transparent:!0,children:"DONE"})]}),"active"===n.show?Object(r.jsx)(fn,{todos:n.active}):"","done"===n.show?Object(r.jsx)(fn,{todos:n.done}):"","all"===n.show?Object(r.jsx)(fn,{todos:n.todos}):""]})},vn=function(){var n=b(),t=h(),e=_();return Object(o.useEffect)((function(){e(t)}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(sn,{isLoading:n.isLoading}),Object(r.jsx)("h1",{children:"welcome to second page!"}),Object(r.jsx)(fn,{todos:n.todos})]})};function jn(){var n=Object(f.a)(["\n  padding: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  .navigation {\n    padding: 20px 0 30px 0;\n    a {\n      margin: 0 10px;\n    }\n  }\n"]);return jn=function(){return n},n}var On=g.c.div(jn()),yn=function(){return Object(r.jsxs)(On,{className:"wrapper",children:[Object(r.jsx)(i.a,{children:Object(r.jsx)(p,{children:Object(r.jsxs)(c.b,{children:[Object(r.jsx)(mn,{exact:!0,path:"/"}),Object(r.jsx)(vn,{path:"/single"})]})})}),Object(r.jsx)(I,{})]})},wn=document.getElementById("root");wn.hasChildNodes()?Object(a.hydrate)(Object(r.jsx)(yn,{}),wn):Object(a.render)(Object(r.jsx)(yn,{}),wn)}},[[65,1,2]]]);
//# sourceMappingURL=main.d9b7b3d7.chunk.js.map