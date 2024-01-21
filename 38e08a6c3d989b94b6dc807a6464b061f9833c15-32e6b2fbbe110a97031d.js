"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[573],{8970:function(e,t,r){r.d(t,{Z:function(){return J}});var o,n=r(9439),l=r(4942),i=r(3366),a=r(7462),c=r(7294),s=(r(4162),r(5505)),d=r(9236),u=r(3656),f=r(184),v=r(6449),b=r(5152);function p(){if(o)return o;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),o="reverse",e.scrollLeft>0?o="default":(e.scrollLeft=1,0===e.scrollLeft&&(o="negative")),document.body.removeChild(e),o}function h(e,t){var r=e.scrollLeft;if("rtl"!==t)return r;switch(p()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function x(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},l=o.ease,i=void 0===l?m:l,a=o.duration,c=void 0===a?300:a,s=null,d=t[e],u=!1,f=function(){u=!0},v=function o(l){if(u)n(new Error("Animation cancelled"));else{null===s&&(s=l);var a=Math.min(1,(l-s)/c);t[e]=i(a)*(r-d)+d,a>=1?requestAnimationFrame((function(){n(null)})):requestAnimationFrame(o)}};return d===r?(n(new Error("Element already at target position")),f):(requestAnimationFrame(v),f)}var g=r(9217),w=r(5893),Z=["onChange"],y={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var C=r(2067),S=(0,C.Z)((0,w.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),E=(0,C.Z)((0,w.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),M=r(1919),B=r(1351),W=r(9508);function T(e){return(0,B.Z)("MuiTabScrollButton",e)}var R,k,N=(0,W.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),z=["className","direction","orientation","disabled"],P=(0,u.ZP)(M.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.orientation&&t[r.orientation]]}})((function(e){var t=e.ownerState;return(0,a.Z)((0,l.Z)({width:40,flexShrink:0,opacity:.8},"&.".concat(N.disabled),{opacity:0}),"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})})),L=c.forwardRef((function(e,t){var r=(0,f.Z)({props:e,name:"MuiTabScrollButton"}),o=r.className,n=r.direction,l=(0,i.Z)(r,z),c="rtl"===(0,v.Z)().direction,u=(0,a.Z)({isRtl:c},r),b=function(e){var t=e.classes,r={root:["root",e.orientation,e.disabled&&"disabled"]};return(0,d.Z)(r,T,t)}(u);return(0,w.jsx)(P,(0,a.Z)({component:"div",className:(0,s.Z)(b.root,o),ref:t,role:null,ownerState:u,tabIndex:null},l,{children:"left"===n?R||(R=(0,w.jsx)(S,{fontSize:"small"})):k||(k=(0,w.jsx)(E,{fontSize:"small"}))}))})),j=r(955);function F(e){return(0,B.Z)("MuiTabs",e)}var I=(0,W.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),H=r(9072),A=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],O=function(e,t){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild},X=function(e,t){return e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild},D=function(e,t,r){for(var o=!1,n=r(e,t);n;){if(n===e.firstChild){if(o)return;o=!0}var l=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!l)return void n.focus();n=r(e,n)}},Y=(0,u.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,l.Z)({},"& .".concat(I.scrollButtons),t.scrollButtons),(0,l.Z)({},"& .".concat(I.scrollButtons),r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile),t.root,r.vertical&&t.vertical]}})((function(e){var t=e.ownerState,r=e.theme;return(0,a.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&(0,l.Z)({},"& .".concat(I.scrollButtons),(0,l.Z)({},r.breakpoints.down("sm"),{display:"none"})))})),V=(0,u.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:function(e,t){var r=e.ownerState;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})((function(e){var t=e.ownerState;return(0,a.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})})),_=(0,u.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:function(e,t){var r=e.ownerState;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})})),q=(0,u.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:function(e,t){return t.indicator}})((function(e){var t=e.ownerState,r=e.theme;return(0,a.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:r.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(r.vars||r).palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:(r.vars||r).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})})),G=(0,u.ZP)((function(e){var t=e.onChange,r=(0,i.Z)(e,Z),o=c.useRef(),n=c.useRef(null),l=function(){o.current=n.current.offsetHeight-n.current.clientHeight};return c.useEffect((function(){var e=(0,b.Z)((function(){var e=o.current;l(),e!==o.current&&t(o.current)})),r=(0,g.Z)(n.current);return r.addEventListener("resize",e),function(){e.clear(),r.removeEventListener("resize",e)}}),[t]),c.useEffect((function(){l(),t(o.current)}),[t]),(0,w.jsx)("div",(0,a.Z)({style:y,ref:n},r))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),K={},U=c.forwardRef((function(e,t){var r=(0,f.Z)({props:e,name:"MuiTabs"}),o=(0,v.Z)(),u="rtl"===o.direction,m=r["aria-label"],Z=r["aria-labelledby"],y=r.action,C=r.centered,S=void 0!==C&&C,E=r.children,M=r.className,B=r.component,W=void 0===B?"div":B,T=r.allowScrollButtonsMobile,R=void 0!==T&&T,k=r.indicatorColor,N=void 0===k?"primary":k,z=r.onChange,P=r.orientation,I=void 0===P?"horizontal":P,U=r.ScrollButtonComponent,J=void 0===U?L:U,Q=r.scrollButtons,$=void 0===Q?"auto":Q,ee=r.selectionFollowsFocus,te=r.TabIndicatorProps,re=void 0===te?{}:te,oe=r.TabScrollButtonProps,ne=void 0===oe?{}:oe,le=r.textColor,ie=void 0===le?"primary":le,ae=r.value,ce=r.variant,se=void 0===ce?"standard":ce,de=r.visibleScrollbar,ue=void 0!==de&&de,fe=(0,i.Z)(r,A),ve="scrollable"===se,be="vertical"===I,pe=be?"scrollTop":"scrollLeft",he=be?"top":"left",me=be?"bottom":"right",xe=be?"clientHeight":"clientWidth",ge=be?"height":"width",we=(0,a.Z)({},r,{component:W,allowScrollButtonsMobile:R,indicatorColor:N,orientation:I,vertical:be,scrollButtons:$,textColor:ie,variant:se,visibleScrollbar:ue,fixed:!ve,hideScrollbar:ve&&!ue,scrollableX:ve&&!be,scrollableY:ve&&be,centered:S&&!ve,scrollButtonsHideMobile:!R}),Ze=function(e){var t=e.vertical,r=e.fixed,o=e.hideScrollbar,n=e.scrollableX,l=e.scrollableY,i=e.centered,a=e.scrollButtonsHideMobile,c=e.classes,s={root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",o&&"hideScrollbar",n&&"scrollableX",l&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[o&&"hideScrollbar"]};return(0,d.Z)(s,F,c)}(we);var ye=c.useState(!1),Ce=(0,n.Z)(ye,2),Se=Ce[0],Ee=Ce[1],Me=c.useState(K),Be=(0,n.Z)(Me,2),We=Be[0],Te=Be[1],Re=c.useState({start:!1,end:!1}),ke=(0,n.Z)(Re,2),Ne=ke[0],ze=ke[1],Pe=c.useState({overflow:"hidden",scrollbarWidth:0}),Le=(0,n.Z)(Pe,2),je=Le[0],Fe=Le[1],Ie=new Map,He=c.useRef(null),Ae=c.useRef(null),Oe=function(){var e,t,r=He.current;if(r){var n=r.getBoundingClientRect();e={clientWidth:r.clientWidth,scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollLeftNormalized:h(r,o.direction),scrollWidth:r.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}if(r&&!1!==ae){var l=Ae.current.children;if(l.length>0){var i=l[Ie.get(ae)];0,t=i?i.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},Xe=(0,j.Z)((function(){var e,t,r=Oe(),o=r.tabsMeta,n=r.tabMeta,i=0;if(be)t="top",n&&o&&(i=n.top-o.top+o.scrollTop);else if(t=u?"right":"left",n&&o){var a=u?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(u?-1:1)*(n[t]-o[t]+a)}var c=(e={},(0,l.Z)(e,t,i),(0,l.Z)(e,ge,n?n[ge]:0),e);if(isNaN(We[t])||isNaN(We[ge]))Te(c);else{var s=Math.abs(We[t]-c[t]),d=Math.abs(We[ge]-c[ge]);(s>=1||d>=1)&&Te(c)}})),De=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.animation,n=void 0===r||r;n?x(pe,He.current,e,{duration:o.transitions.duration.standard}):He.current[pe]=e},Ye=function(e){var t=He.current[pe];be?t+=e:(t+=e*(u?-1:1),t*=u&&"reverse"===p()?-1:1),De(t)},Ve=function(){var e=He.current[xe],t=0,r=Array.from(Ae.current.children),o=function(e){var t=He.current[xe],r=Math.round(He.current[pe]),o=Math.round(r+t),n=be?"offsetTop":"offsetLeft";return e.find((function(e){var t=e[n]+e[xe]/2;return t>=r&&t<=o}))}(r);if(o&&o[xe]>e)return o[xe];for(var n=0;n<r.length;n+=1){var l=r[n];if(t+l[xe]>e)break;t+=l[xe]}return t},_e=function(){Ye(-1*Ve())},qe=function(){Ye(Ve())},Ge=c.useCallback((function(e){Fe({overflow:null,scrollbarWidth:e})}),[]),Ke=(0,j.Z)((function(e){var t=Oe(),r=t.tabsMeta,o=t.tabMeta;if(o&&r)if(o[he]<r[he]){var n=r[pe]+(o[he]-r[he]);De(n,{animation:e})}else if(o[me]>r[me]){var l=r[pe]+(o[me]-r[me]);De(l,{animation:e})}})),Ue=(0,j.Z)((function(){if(ve&&!1!==$){var e,t,r=He.current,n=r.scrollTop,l=r.scrollHeight,i=r.clientHeight,a=r.scrollWidth,c=r.clientWidth;if(be)e=n>1,t=n<l-i-1;else{var s=h(He.current,o.direction);e=u?s<a-c-1:s>1,t=u?s>1:s<a-c-1}e===Ne.start&&t===Ne.end||ze({start:e,end:t})}}));c.useEffect((function(){var e,t=(0,b.Z)((function(){Xe(),Ue()})),r=(0,g.Z)(He.current);return r.addEventListener("resize",t),"undefined"!=typeof ResizeObserver&&(e=new ResizeObserver(t),Array.from(Ae.current.children).forEach((function(t){e.observe(t)}))),function(){t.clear(),r.removeEventListener("resize",t),e&&e.disconnect()}}),[Xe,Ue]);var Je=c.useMemo((function(){return(0,b.Z)((function(){Ue()}))}),[Ue]);c.useEffect((function(){return function(){Je.clear()}}),[Je]),c.useEffect((function(){Ee(!0)}),[]),c.useEffect((function(){Xe(),Ue()})),c.useEffect((function(){Ke(K!==We)}),[Ke,We]),c.useImperativeHandle(y,(function(){return{updateIndicator:Xe,updateScrollButtons:Ue}}),[Xe,Ue]);var Qe=(0,w.jsx)(q,(0,a.Z)({},re,{className:(0,s.Z)(Ze.indicator,re.className),ownerState:we,style:(0,a.Z)({},We,re.style)})),$e=0,et=c.Children.map(E,(function(e){if(!c.isValidElement(e))return null;var t=void 0===e.props.value?$e:e.props.value;Ie.set(t,$e);var r=t===ae;return $e+=1,c.cloneElement(e,(0,a.Z)({fullWidth:"fullWidth"===se,indicator:r&&!Se&&Qe,selected:r,selectionFollowsFocus:ee,onChange:z,textColor:ie,value:t},1!==$e||!1!==ae||e.props.tabIndex?{}:{tabIndex:0}))})),tt=function(){var e={};e.scrollbarSizeListener=ve?(0,w.jsx)(G,{onChange:Ge,className:(0,s.Z)(Ze.scrollableX,Ze.hideScrollbar)}):null;var t=Ne.start||Ne.end,r=ve&&("auto"===$&&t||!0===$);return e.scrollButtonStart=r?(0,w.jsx)(J,(0,a.Z)({orientation:I,direction:u?"right":"left",onClick:_e,disabled:!Ne.start},ne,{className:(0,s.Z)(Ze.scrollButtons,ne.className)})):null,e.scrollButtonEnd=r?(0,w.jsx)(J,(0,a.Z)({orientation:I,direction:u?"left":"right",onClick:qe,disabled:!Ne.end},ne,{className:(0,s.Z)(Ze.scrollButtons,ne.className)})):null,e}();return(0,w.jsxs)(Y,(0,a.Z)({className:(0,s.Z)(Ze.root,M),ownerState:we,ref:t,as:W},fe,{children:[tt.scrollButtonStart,tt.scrollbarSizeListener,(0,w.jsxs)(V,{className:Ze.scroller,ownerState:we,style:(0,l.Z)({overflow:je.overflow},be?"margin".concat(u?"Left":"Right"):"marginBottom",ue?void 0:-je.scrollbarWidth),ref:He,onScroll:Je,children:[(0,w.jsx)(_,{"aria-label":m,"aria-labelledby":Z,"aria-orientation":"vertical"===I?"vertical":null,className:Ze.flexContainer,ownerState:we,onKeyDown:function(e){var t=Ae.current,r=(0,H.Z)(t).activeElement;if("tab"===r.getAttribute("role")){var o="horizontal"===I?"ArrowLeft":"ArrowUp",n="horizontal"===I?"ArrowRight":"ArrowDown";switch("horizontal"===I&&u&&(o="ArrowRight",n="ArrowLeft"),e.key){case o:e.preventDefault(),D(t,r,X);break;case n:e.preventDefault(),D(t,r,O);break;case"Home":e.preventDefault(),D(t,null,O);break;case"End":e.preventDefault(),D(t,null,X)}}},ref:Ae,role:"tablist",children:et}),Se&&Qe]}),tt.scrollButtonEnd]}))})),J=U},1046:function(e,t,r){r.d(t,{w_:function(){return s}});var o=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(n),i=function(){return i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)},a=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};function c(e){return e&&e.map((function(e,t){return o.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return o.createElement(d,i({attr:i({},e.attr)},t),c(e.child))}}function d(e){var t=function(t){var r,n=e.attr,l=e.size,c=e.title,s=a(e,["attr","size","title"]),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&o.createElement("title",null,c),e.children)};return void 0!==l?o.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},482:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var o=r(7294),n=r(8725),l=r(262),i=r(9211),a=r(581),c=r(1521),s=r(1597),d=r(8970),u=r(4942),f=r(3366),v=r(7462),b=r(5505),p=r(9236),h=r(1919),m=r(9240),x=r(184),g=r(3656),w=r(1351);function Z(e){return(0,w.Z)("MuiTab",e)}var y=(0,r(9508).Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),C=r(5893),S=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],E=(0,g.ZP)(h.Z,{name:"MuiTab",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.label&&r.icon&&t.labelIcon,t["textColor".concat((0,m.Z)(r.textColor))],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped]}})((function(e){var t,r,o,n=e.theme,l=e.ownerState;return(0,v.Z)({},n.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},l.label&&{flexDirection:"top"===l.iconPosition||"bottom"===l.iconPosition?"column":"row"},{lineHeight:1.25},l.icon&&l.label&&(0,u.Z)({minHeight:72,paddingTop:9,paddingBottom:9},"& > .".concat(y.iconWrapper),(0,v.Z)({},"top"===l.iconPosition&&{marginBottom:6},"bottom"===l.iconPosition&&{marginTop:6},"start"===l.iconPosition&&{marginRight:n.spacing(1)},"end"===l.iconPosition&&{marginLeft:n.spacing(1)})),"inherit"===l.textColor&&(t={color:"inherit",opacity:.6},(0,u.Z)(t,"&.".concat(y.selected),{opacity:1}),(0,u.Z)(t,"&.".concat(y.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"primary"===l.textColor&&(r={color:(n.vars||n).palette.text.secondary},(0,u.Z)(r,"&.".concat(y.selected),{color:(n.vars||n).palette.primary.main}),(0,u.Z)(r,"&.".concat(y.disabled),{color:(n.vars||n).palette.text.disabled}),r),"secondary"===l.textColor&&(o={color:(n.vars||n).palette.text.secondary},(0,u.Z)(o,"&.".concat(y.selected),{color:(n.vars||n).palette.secondary.main}),(0,u.Z)(o,"&.".concat(y.disabled),{color:(n.vars||n).palette.text.disabled}),o),l.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},l.wrapped&&{fontSize:n.typography.pxToRem(12)})})),M=o.forwardRef((function(e,t){var r=(0,x.Z)({props:e,name:"MuiTab"}),n=r.className,l=r.disabled,i=void 0!==l&&l,a=r.disableFocusRipple,c=void 0!==a&&a,s=r.fullWidth,d=r.icon,u=r.iconPosition,h=void 0===u?"top":u,g=r.indicator,w=r.label,y=r.onChange,M=r.onClick,B=r.onFocus,W=r.selected,T=r.selectionFollowsFocus,R=r.textColor,k=void 0===R?"inherit":R,N=r.value,z=r.wrapped,P=void 0!==z&&z,L=(0,f.Z)(r,S),j=(0,v.Z)({},r,{disabled:i,disableFocusRipple:c,selected:W,icon:!!d,iconPosition:h,label:!!w,fullWidth:s,textColor:k,wrapped:P}),F=function(e){var t=e.classes,r=e.textColor,o=e.fullWidth,n=e.wrapped,l=e.icon,i=e.label,a=e.selected,c=e.disabled,s={root:["root",l&&i&&"labelIcon","textColor".concat((0,m.Z)(r)),o&&"fullWidth",n&&"wrapped",a&&"selected",c&&"disabled"],iconWrapper:["iconWrapper"]};return(0,p.Z)(s,Z,t)}(j),I=d&&w&&o.isValidElement(d)?o.cloneElement(d,{className:(0,b.Z)(F.iconWrapper,d.props.className)}):d;return(0,C.jsxs)(E,(0,v.Z)({focusRipple:!c,className:(0,b.Z)(F.root,n),ref:t,role:"tab","aria-selected":W,disabled:i,onClick:function(e){!W&&y&&y(e,N),M&&M(e)},onFocus:function(e){T&&!W&&y&&y(e,N),B&&B(e)},ownerState:j,tabIndex:W?0:-1},L,{children:["top"===h||"start"===h?(0,C.jsxs)(o.Fragment,{children:[I,w]}):(0,C.jsxs)(o.Fragment,{children:[w,I]}),g]}))})),B=r(801),W=function(e){var t=e.currentPath,r=e.activeTabIndex,n=e.onTabChange,l=B.rH.w.tabs,a=o.useState(0),c=a[0],u=a[1];o.useEffect((function(){var e=l.findIndex((function(e){return e.path===t}));u(-1!==e?e:0)}),[t,l]),o.useEffect((function(){u(r)}),[r]);var f=function(e,t){u(t),n&&n(l[t].path),(0,s.navigate)(l[t].path)};return o.createElement(i.Z,{sx:{width:"100%",borderBottom:1,borderColor:"divider",align:"center"}},o.createElement(d.Z,{variant:"scrollable",scrollButtons:"auto","aria-label":"nav tabs example",value:c,onChange:f,sx:{"& .MuiTabs-flexContainer":{gap:"1rem",width:"auto"},"& .MuiTabs-indicator":{backgroundColor:"text.primary",height:"1px"}}},l.map((function(e,r){return o.createElement(M,{key:r,label:e.label,onClick:function(){return f(0,r)},sx:{textTransform:"capitalize",fontWeight:400,minWidth:"60px",color:t===e.path?"text.primary":"text.secondary",borderBottom:t===e.path?"2px solid":"none"}})}))))},T=r(339),R=function(e){var t=e.children,r=e.location,s=e.pageTitle,d=e.pageSeo,u=e.tabIndex;return o.createElement(n.Z,{location:r,title:o.createElement(i.Z,{sx:{display:"flex",alignItems:"center",padding:"0.5rem"}},o.createElement(a.Z,{size:"small",sx:{mr:1,backgroundColor:"action.selected",color:"text.primary"}},o.createElement(c.WRS,{fontSize:20})),s)},o.createElement(l.Z,{title:d}),o.createElement(i.Z,{sx:{flexGrow:1,overflow:"hidden"}},"    ",o.createElement(T.Z,{maxWidth:"string",disableGutters:!0,sx:{maxWidth:"692px",display:"flex",flexDirection:"column",gap:"2rem","@media (max-width: 600px)":{gap:"1.5rem",px:"1.5rem"}}},o.createElement(W,{currentPath:r.pathname,activeTabIndex:u,sx:{padding:"1rem"}}),t)))}}}]);
//# sourceMappingURL=38e08a6c3d989b94b6dc807a6464b061f9833c15-32e6b2fbbe110a97031d.js.map