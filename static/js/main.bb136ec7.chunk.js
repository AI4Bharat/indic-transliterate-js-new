(this["webpackJsonpreact-transliterate-example"]=this["webpackJsonpreact-transliterate-example"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);n(9);var a=n(0),r=n(5),o=n.n(r),s=n(1),i=n(6),c=n.n(i);const l={KEY_RETURN:"Enter",KEY_ENTER:"Enter",KEY_TAB:"Tab",KEY_SPACE:" "},u=async()=>{if(sessionStorage.getItem("indic_transliterate__supported_languages"))return JSON.parse(sessionStorage.getItem("indic_transliterate__supported_languages")||"");{const t="".concat("https://xlit-api.ai4bharat.org/","languages");(new Headers).append("Content-Type","application/json");const n={method:"GET"};try{const e=await fetch(t,n),a=await e.json();return sessionStorage.setItem("indic_transliterate__supported_languages",JSON.stringify(a)),a}catch(e){return console.error("There was an error with transliteration",e),[]}}},d=e=>{let{renderComponent:t=(e=>Object(s.jsx)("input",{...e})),lang:n="hi",offsetX:r=0,offsetY:o=10,onChange:i,onChangeText:d,onBlur:g,value:h,onKeyDown:p,containerClassName:f="",containerStyles:b={},activeItemStyles:j={},maxOptions:m=5,hideSuggestionBoxOnMobileDevices:x=!1,hideSuggestionBoxBreakpoint:v=450,triggerKeys:O=[l.KEY_SPACE,l.KEY_ENTER,l.KEY_RETURN,l.KEY_TAB],insertCurrentSelectionOnBlur:w=!0,showCurrentWordAsLastSuggestion:S=!0,enabled:y=!0,...C}=e;const[E,k]=Object(a.useState)([]),[T,_]=Object(a.useState)(0),[I,N]=Object(a.useState)(0),[A,K]=Object(a.useState)(0),[R,B]=Object(a.useState)(-1),[L,D]=Object(a.useState)(-1),F=Object(a.useRef)(null),[W,Y]=Object(a.useState)({width:0,height:0}),[U,z]=Object(a.useState)("ltr"),[M,J]=Object(a.useState)(null),G=Object(a.useMemo)((()=>!x||W.width>v),[W,v,x]),H=()=>{K(0),k([])},P=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";var n;const a=h;console.log(e);const r=a.substring(0,R)+E[e]+" "+a.substring(L+1,a.length);setTimeout((()=>{var n,a;n=F.current,a="Enter"===t?R+E[e].length:R+E[e].length+1,n&&(n.selectionStart?(n.focus(),n.setSelectionRange(a,a)):n.focus())}),1);const o={target:{value:r}};return d(r),i&&i(o),H(),null===(n=F.current)||void 0===n?void 0:n.focus()},Q=async e=>{if(!G)return;const t=S?m-1:m,a=await(async(e,t)=>{const{showCurrentWordAsLastSuggestion:n,lang:a}=t||{numOptions:5,showCurrentWordAsLastSuggestion:!0,lang:"hi"};"."!=e&&".."!=e||(e=" "+e);const r={input:[{source:e=encodeURIComponent(e)}],config:{serviceId:"ai4bharat/indicxlit--gpu-t4",language:{sourceLanguage:"en",sourceScriptCode:"",targetLanguage:a,targetScriptCode:""},isSentence:!1,numSuggestions:5},controlConfig:{dataTracking:!0}};try{const t=await fetch("https://api.dhruva.ekstep.ai/services/inference/transliteration",{method:"post",body:JSON.stringify(r),mode:"cors",headers:new Headers({"Content-Type":"application/json",Authorization:"uOQOvZAkdKQpaeZa5-K03k9SIXOtZFEIkdj995-lTz_bozcijCNgVye2jEGIRFQG"})}).then((e=>e.json()));console.log("library data",t);const a=t.output[0];return a&&a.target.length>0?n?[...a.target,e]:a.target:n?[e]:[]}catch(o){return console.error("There was an error with transliteration",o),[]}})(e,{numOptions:t,showCurrentWordAsLastSuggestion:S,lang:n});k(null!==a&&void 0!==a?a:[])},Z=()=>{const e=window.innerWidth,t=window.innerHeight;Y({width:e,height:t})};return Object(a.useEffect)((()=>{window.addEventListener("resize",Z);const e=window.innerWidth,t=window.innerHeight;return Y({width:e,height:t}),()=>{window.removeEventListener("resize",Z)}}),[]),Object(a.useEffect)((()=>{(async e=>{const t=await u(),n=null===t||void 0===t?void 0:t.find((t=>t.LangCode===e));var a;return[null!==(a=null===n||void 0===n?void 0:n.Direction)&&void 0!==a?a:"ltr",null===n||void 0===n?void 0:n.GoogleFont,null===n||void 0===n?void 0:n.FallbackFont]})(n).then((e=>{let[t,n,a]=e;if(z(t),n){if(!document.getElementById("font-".concat(n))){const e=document.createElement("link");e.id="font-".concat(n),e.href="https://fonts.googleapis.com/css?family=".concat(n),e.rel="stylesheet",document.head.appendChild(e)}J("".concat(n,", ").concat(null!==a&&void 0!==a?a:"sans-serif"))}else J(null)}))}),[n]),Object(s.jsxs)("div",{style:{...b,position:"relative"},className:f,children:[t({onChange:e=>{const t=e.currentTarget.value;if(i&&i(e),d(t),!G)return;const n=(a=e.target,a&&"number"===typeof a.selectionStart&&"number"===typeof a.selectionEnd?{start:a.selectionStart,end:a.selectionEnd}:{start:0,end:0}).end;var a;const r=F.current;if(!r)return;const o=c()(r,n),s=t.lastIndexOf(" ",n-1)<t.lastIndexOf("\n",n-1)?t.lastIndexOf("\n",n-1):t.lastIndexOf(" ",n-1);B(s+1),D(n-1);const l=t.slice(s+1,n);if(l&&y){Q(l);const e=r.getBoundingClientRect(),t=Math.min(o.left,e.width-50),n=Math.min(o.top+10,e.height);N(n),_(t)}else H()},onKeyDown:e=>{if(E.length>0)if(O.includes(e.key))e.preventDefault(),P(A,e.key);else switch(e.key){case"Escape":e.preventDefault(),H();break;case"ArrowUp":e.preventDefault(),K((E.length+A-1)%E.length);break;case"ArrowDown":e.preventDefault(),K((A+1)%E.length);break;default:p&&p(e)}else p&&p(e)},onBlur:e=>{"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||(w&&E[A]?P(A):H()),g&&g(e)},ref:F,value:h,"data-testid":"rt-input-component",lang:n,style:{direction:U,...M&&{fontFamily:M}},...C}),G&&E.length>0&&Object(s.jsx)("ul",{style:{backgroundClip:"padding-box",backgroundColor:"#fff",border:"1px solid rgba(0, 0, 0, 0.15)",boxShadow:"0 6px 12px rgba(0, 0, 0, 0.175)",display:"block",fontSize:"14px",listStyle:"none",padding:"1px",textAlign:"left",zIndex:2e4,left:"".concat(T+r,"px"),top:"".concat(I+o,"px"),position:"absolute",width:"auto",...M&&{fontFamily:M}},"data-testid":"rt-suggestions-list",lang:n,children:Array.from(new Set(E)).map(((e,t)=>Object(s.jsx)("li",{style:t===A?{cursor:"pointer",padding:"10px",minWidth:"100px",backgroundColor:"#65c3d7",color:"#fff"}:{cursor:"pointer",padding:"10px",minWidth:"100px",backgroundColor:"#fff"},onMouseEnter:()=>{K(t)},onClick:()=>P(t),children:e},e)))})]})};var g=n(33);var h=()=>{const[e,t]=Object(a.useState)(""),[n,r]=Object(a.useState)(),[o,i]=Object(a.useState)("hi");return Object(a.useEffect)((()=>{u().then((e=>r(e)))}),[]),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{children:"Indic transliterate"}),Object(s.jsx)("select",{className:"language-dropdown",value:o,onChange:e=>i(e.target.value),children:null===n||void 0===n?void 0:n.map((e=>Object(s.jsx)("option",{value:e.LangCode,children:e.DisplayName},e.LangCode)))}),Object(s.jsx)("div",{className:"spacer"}),Object(s.jsx)("label",{htmlFor:"react-transliterate-input",children:"Using input"}),Object(s.jsx)(d,{value:e,onChangeText:e=>{t(e)},lang:o,placeholder:"Start typing here...",id:"react-transliterate-input"}),Object(s.jsx)("div",{className:"spacer"}),Object(s.jsx)("label",{htmlFor:"react-transliterate-textarea",children:"Using textarea"}),Object(s.jsx)(d,{renderComponent:e=>Object(s.jsx)("textarea",{...e}),value:e,onChangeText:e=>{t(e)},lang:o,placeholder:"Start typing here...",id:"react-transliterate-textarea"}),Object(s.jsx)("div",{className:"spacer"}),Object(s.jsx)("label",{htmlFor:"react-transliterate-material-ui-input",children:"Using Material UI input"}),Object(s.jsx)(d,{renderComponent:e=>{const t=e.ref;return delete e.ref,Object(s.jsx)(g.a,{fullWidth:!0,...e,inputRef:t})},value:e,onChangeText:e=>{t(e)},lang:o,placeholder:"Start typing here...",id:"react-transliterate-material-ui-input"})]})};o.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))},9:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.bb136ec7.chunk.js.map