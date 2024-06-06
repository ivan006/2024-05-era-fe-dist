import{_ as J,o as w,c as H,F as A,i as I,w as T,b as pe,t as fe,j as ge,a as l,k as G,r as te,l as q,m as oe,n as se,q as j,u as z,s as Se,v as we,x as ke,y as _e,z as ae,A as U,B as Ve,C as Te,D as Ce,E as Me,G as Be,H as B,I as g,J as Ee,d as Ie,K as F,L as O,M as Ue,N as K,O as Ye,P as $,Q as le,R as ie,S as Pe,T as Re,U as W,W as He,X as $e,Y,Z as Le,$ as je,e as Z,a0 as ze,a1 as Xe,a2 as Fe,a3 as Ze,a4 as Qe,a5 as Je,a6 as Ke,a7 as et,a8 as Q,V as tt,a9 as at,aa as nt,ab as ot,ac as he,ad as st,h as ee}from"./index-ClkTfUt1.js";import{V as ne,a as lt,m as it,u as rt,b as ut,c as ct,d as dt,e as vt}from"./VList-Ddz5drts.js";import{V as mt}from"./VContainer-B0QWcQrB.js";/* empty css              */const ft={name:"MenuSystemItem",props:{link:{type:Object,default(){return{}}}}};function gt(e,o,a,v,t,n){return w(),H("div",null,[a.link.isHeading?(w(),H(A,{key:0},[a.link.subLinks?ge("",!0):(w(),I(ne,{key:0,class:"pl-2 pr-2",style:{"padding-inline-start":"8px !important"}},{default:T(()=>[pe("b",null,fe(a.link.text),1)]),_:1}))],64)):(w(),H(A,{key:1},[a.link.subLinks?ge("",!0):(w(),I(ne,{key:0,to:a.link.to,class:"pl-2 pr-2",style:{"padding-inline-start":"8px !important"}},{default:T(()=>[l(lt,{textContent:fe(a.link.text)},null,8,["textContent"])]),_:1},8,["to"]))],64))])}const Ae=J(ft,[["render",gt]]),ht={name:"MyProversAndCustomerAsMenuList",components:{MenuSystemItem:Ae},computed:{providerGroupsMenuSection(){let e=[];for(const o of this.providerGroupsAssociatedWithUser)e.push({icon:"",text:o.name,to:`/lists/providers/${o.id}`});return e},customerGroupsMenuSection(){let e=[];for(const o of this.customerGroupsAssociatedWithUser)e.push({icon:"",text:o.name,to:`/lists/customers/${o.id}`});return e},links(){return[{icon:"",text:"Provider Groups",isHeading:!0},...this.providerGroupsMenuSection.length?this.providerGroupsMenuSection:[{icon:"",text:"No data",to:""}],{icon:"",text:"Customer Groups",isHeading:!0},...this.customerGroupsMenuSection.length?this.customerGroupsMenuSection:[{icon:"",text:"No data",to:""}]]}}};function yt(e,o,a,v,t,n){const s=G("MenuSystemItem");return w(),H("div",null,[(w(!0),H(A,null,te(n.links,r=>(w(),I(s,{key:r.text,link:r},null,8,["link"]))),128))])}const bt=J(ht,[["render",yt]]),xt=q({text:String,...oe(),...se()},"VToolbarTitle"),pt=j()({name:"VToolbarTitle",props:xt(),setup(e,o){let{slots:a}=o;return z(()=>{const v=!!(a.default||a.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var t;return[v&&l("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]}})}),{}}}),St=[null,"prominent","default","comfortable","compact"],Ne=q({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>St.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Se(),...oe(),...we(),...ke(),...se({tag:"header"}),..._e()},"VToolbar"),ye=j()({name:"VToolbar",props:Ne(),setup(e,o){var c;let{slots:a}=o;const{backgroundColorClasses:v,backgroundColorStyles:t}=ae(U(e,"color")),{borderClasses:n}=Ve(e),{elevationClasses:s}=Te(e),{roundedClasses:r}=Ce(e),{themeClasses:u}=Me(e),{rtlClasses:b}=Be(),i=B(!!(e.extended||(c=a.extension)!=null&&c.call(a))),h=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=g(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ee({VBtn:{variant:"text"}}),z(()=>{var R;const p=!!(e.title||a.title),k=!!(a.image||e.image),P=(R=a.extension)==null?void 0:R.call(a);return i.value=!!(e.extended||P),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},v.value,n.value,s.value,r.value,u.value,b.value,e.class],style:[t.value,e.style]},{default:()=>[k&&l("div",{key:"image",class:"v-toolbar__image"},[a.image?l(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):l(Ie,{key:"image-img",cover:!0,src:e.image},null)]),l(F,{defaults:{VTabs:{height:O(h.value)}}},{default:()=>{var E,f,M;return[l("div",{class:"v-toolbar__content",style:{height:O(h.value)}},[a.prepend&&l("div",{class:"v-toolbar__prepend"},[(E=a.prepend)==null?void 0:E.call(a)]),p&&l(pt,{key:"title",text:e.title},{text:a.title}),(f=a.default)==null?void 0:f.call(a),a.append&&l("div",{class:"v-toolbar__append"},[(M=a.append)==null?void 0:M.call(a)])])]}}),l(F,{defaults:{VTabs:{height:O(m.value)}}},{default:()=>[l(Ue,null,{default:()=>[i.value&&l("div",{class:"v-toolbar__extension",style:{height:O(m.value)}},[P])]})]})]})}),{contentHeight:h,extensionHeight:m}}}),wt=q({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function kt(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=o;let v=0;const t=K(null),n=B(0),s=B(0),r=B(0),u=B(!1),b=B(!1),i=g(()=>Number(e.scrollThreshold)),h=g(()=>Ye((i.value-n.value)/i.value||0)),m=()=>{const c=t.value;!c||a&&!a.value||(v=n.value,n.value="window"in c?c.pageYOffset:c.scrollTop,b.value=n.value<v,r.value=Math.abs(n.value-i.value))};return $(b,()=>{s.value=s.value||n.value}),$(u,()=>{s.value=0}),le(()=>{$(()=>e.scrollTarget,c=>{var k;const p=c?document.querySelector(c):window;p&&p!==t.value&&((k=t.value)==null||k.removeEventListener("scroll",m),t.value=p,t.value.addEventListener("scroll",m,{passive:!0}))},{immediate:!0})}),ie(()=>{var c;(c=t.value)==null||c.removeEventListener("scroll",m)}),a&&$(a,m,{immediate:!0}),{scrollThreshold:i,currentScroll:n,currentThreshold:r,isScrollActive:u,scrollRatio:h,isScrollingUp:b,savedScroll:s}}const _t=q({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ne(),...Pe(),...wt(),height:{type:[Number,String],default:64}},"VAppBar"),Vt=j()({name:"VAppBar",props:_t(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const v=K(),t=Re(e,"modelValue"),n=g(()=>{var M;const f=new Set(((M=e.scrollBehavior)==null?void 0:M.split(" "))??[]);return{hide:f.has("hide"),fullyHide:f.has("fully-hide"),inverted:f.has("inverted"),collapse:f.has("collapse"),elevate:f.has("elevate"),fadeImage:f.has("fade-image")}}),s=g(()=>{const f=n.value;return f.hide||f.fullyHide||f.inverted||f.collapse||f.elevate||f.fadeImage||!t.value}),{currentScroll:r,scrollThreshold:u,isScrollingUp:b,scrollRatio:i}=kt(e,{canScroll:s}),h=g(()=>n.value.hide||n.value.fullyHide),m=g(()=>e.collapse||n.value.collapse&&(n.value.inverted?i.value>0:i.value===0)),c=g(()=>e.flat||n.value.fullyHide&&!t.value||n.value.elevate&&(n.value.inverted?r.value>0:r.value===0)),p=g(()=>n.value.fadeImage?n.value.inverted?1-i.value:i.value:void 0),k=g(()=>{var L,d;const f=Number(((L=v.value)==null?void 0:L.contentHeight)??e.height),M=Number(((d=v.value)==null?void 0:d.extensionHeight)??0);return h.value?r.value<u.value||n.value.fullyHide?f+M:f:f+M});W(g(()=>!!e.scrollBehavior),()=>{Le(()=>{h.value?n.value.inverted?t.value=r.value>u.value:t.value=b.value||r.value<u.value:t.value=!0})});const{ssrBootStyles:P}=He(),{layoutItemStyles:R,layoutIsReady:E}=$e({id:e.name,order:g(()=>parseInt(e.order,10)),position:U(e,"location"),layoutSize:k,elementSize:B(void 0),active:t,absolute:U(e,"absolute")});return z(()=>{const f=ye.filterProps(e);return l(ye,Y({ref:v,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...R.value,"--v-toolbar-image-opacity":p.value,height:void 0,...P.value},e.style]},f,{collapse:m.value,flat:c.value}),a)}),E}}),Tt=q({...je({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ct=j()({name:"VAppBarNavIcon",props:Tt(),setup(e,o){let{slots:a}=o;return z(()=>l(Z,Y(e,{class:["v-app-bar-nav-icon"]}),a)),{}}});function Mt(e){let{rootEl:o,isSticky:a,layoutItemStyles:v}=e;const t=B(!1),n=B(0),s=g(()=>{const b=typeof t.value=="boolean"?"top":t.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[b]:O(n.value)}:{top:v.value.top}]});le(()=>{$(a,b=>{b?window.addEventListener("scroll",u,{passive:!0}):window.removeEventListener("scroll",u)},{immediate:!0})}),ie(()=>{window.removeEventListener("scroll",u)});let r=0;function u(){const b=r>window.scrollY?"up":"down",i=o.value.getBoundingClientRect(),h=parseFloat(v.value.top??0),m=window.scrollY-Math.max(0,n.value-h),c=i.height+Math.max(n.value,h)-window.scrollY-window.innerHeight,p=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;i.height<window.innerHeight-h?(t.value="top",n.value=h):b==="up"&&t.value==="bottom"||b==="down"&&t.value==="top"?(n.value=window.scrollY+i.top-p,t.value=!0):b==="down"&&c<=0?(n.value=0,t.value="bottom"):b==="up"&&m<=0&&(p?t.value!=="top"&&(n.value=-m+p+h,t.value="top"):(n.value=i.top+m,t.value="top")),r=window.scrollY}return{isStuck:t,stickyStyles:s}}const Bt=100,Et=20;function be(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function xe(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const v=be(o),t=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);o+=(t-v)*Math.abs(t),a===e.length-1&&(o*=.5)}return be(o)*1e3}function It(){const e={};function o(t){Array.from(t.changedTouches).forEach(n=>{(e[n.identifier]??(e[n.identifier]=new ze(Et))).push([t.timeStamp,n])})}function a(t){Array.from(t.changedTouches).forEach(n=>{delete e[n.identifier]})}function v(t){var b;const n=(b=e[t])==null?void 0:b.values().reverse();if(!n)throw new Error(`No samples for touch id ${t}`);const s=n[0],r=[],u=[];for(const i of n){if(s[0]-i[0]>Bt)break;r.push({t:i[0],d:i[1].clientX}),u.push({t:i[0],d:i[1].clientY})}return{x:xe(r),y:xe(u),get direction(){const{x:i,y:h}=this,[m,c]=[Math.abs(i),Math.abs(h)];return m>c&&i>=0?"right":m>c&&i<=0?"left":c>m&&h>=0?"down":c>m&&h<=0?"up":Pt()}}}return{addMovement:o,endTouch:a,getVelocity:v}}function Pt(){throw new Error}function Rt(e){let{el:o,isActive:a,isTemporary:v,width:t,touchless:n,position:s}=e;le(()=>{window.addEventListener("touchstart",E,{passive:!0}),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),ie(()=>{window.removeEventListener("touchstart",E),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",M)});const r=g(()=>["left","right"].includes(s.value)),{addMovement:u,endTouch:b,getVelocity:i}=It();let h=!1;const m=B(!1),c=B(0),p=B(0);let k;function P(d,y){return(s.value==="left"?d:s.value==="right"?document.documentElement.clientWidth-d:s.value==="top"?d:s.value==="bottom"?document.documentElement.clientHeight-d:D())-(y?t.value:0)}function R(d){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const x=s.value==="left"?(d-p.value)/t.value:s.value==="right"?(document.documentElement.clientWidth-d-p.value)/t.value:s.value==="top"?(d-p.value)/t.value:s.value==="bottom"?(document.documentElement.clientHeight-d-p.value)/t.value:D();return y?Math.max(0,Math.min(1,x)):x}function E(d){if(n.value)return;const y=d.changedTouches[0].clientX,x=d.changedTouches[0].clientY,S=25,V=s.value==="left"?y<S:s.value==="right"?y>document.documentElement.clientWidth-S:s.value==="top"?x<S:s.value==="bottom"?x>document.documentElement.clientHeight-S:D(),_=a.value&&(s.value==="left"?y<t.value:s.value==="right"?y>document.documentElement.clientWidth-t.value:s.value==="top"?x<t.value:s.value==="bottom"?x>document.documentElement.clientHeight-t.value:D());(V||_||a.value&&v.value)&&(k=[y,x],p.value=P(r.value?y:x,a.value),c.value=R(r.value?y:x),h=p.value>-20&&p.value<80,b(d),u(d))}function f(d){const y=d.changedTouches[0].clientX,x=d.changedTouches[0].clientY;if(h){if(!d.cancelable){h=!1;return}const V=Math.abs(y-k[0]),_=Math.abs(x-k[1]);(r.value?V>_&&V>3:_>V&&_>3)?(m.value=!0,h=!1):(r.value?_:V)>3&&(h=!1)}if(!m.value)return;d.preventDefault(),u(d);const S=R(r.value?y:x,!1);c.value=Math.max(0,Math.min(1,S)),S>1?p.value=P(r.value?y:x,!0):S<0&&(p.value=P(r.value?y:x,!1))}function M(d){if(h=!1,!m.value)return;u(d),m.value=!1;const y=i(d.changedTouches[0].identifier),x=Math.abs(y.x),S=Math.abs(y.y);(r.value?x>S&&x>400:S>x&&S>3)?a.value=y.direction===({left:"right",right:"left",top:"down",bottom:"up"}[s.value]||D()):a.value=c.value>.5}const L=g(()=>m.value?{transform:s.value==="left"?`translateX(calc(-100% + ${c.value*t.value}px))`:s.value==="right"?`translateX(calc(100% - ${c.value*t.value}px))`:s.value==="top"?`translateY(calc(-100% + ${c.value*t.value}px))`:s.value==="bottom"?`translateY(calc(100% - ${c.value*t.value}px))`:D(),transition:"none"}:void 0);return W(m,()=>{var x,S;const d=((x=o.value)==null?void 0:x.style.transform)??null,y=((S=o.value)==null?void 0:S.style.transition)??null;Le(()=>{var V,_,N,X;(_=o.value)==null||_.style.setProperty("transform",((V=L.value)==null?void 0:V.transform)||"none"),(X=o.value)==null||X.style.setProperty("transition",((N=L.value)==null?void 0:N.transition)||null)}),Xe(()=>{var V,_;(V=o.value)==null||V.style.setProperty("transform",d),(_=o.value)==null||_.style.setProperty("transition",y)})}),{isDragging:m,dragProgress:c,dragStyles:L}}function D(){throw new Error}const Ht=["start","end","left","right","top","bottom"],$t=q({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ht.includes(e)},sticky:Boolean,...Se(),...oe(),...it(),...Fe({mobile:null}),...we(),...Pe(),...ke(),...se({tag:"nav"}),..._e()},"VNavigationDrawer"),Lt=j()({name:"VNavigationDrawer",props:$t(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:a,emit:v,slots:t}=o;const{isRtl:n}=Be(),{themeClasses:s}=Me(e),{borderClasses:r}=Ve(e),{backgroundColorClasses:u,backgroundColorStyles:b}=ae(U(e,"color")),{elevationClasses:i}=Te(e),{displayClasses:h,mobile:m}=Ze(e),{roundedClasses:c}=Ce(e),p=Qe(),k=Re(e,"modelValue",null,C=>!!C),{ssrBootStyles:P}=He(),{scopeId:R}=rt(),E=K(),f=B(!1),{runOpenDelay:M,runCloseDelay:L}=ut(e,C=>{f.value=C}),d=g(()=>e.rail&&e.expandOnHover&&f.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),y=g(()=>Je(e.location,n.value)),x=g(()=>e.persistent),S=g(()=>!e.permanent&&(m.value||e.temporary)),V=g(()=>e.sticky&&!S.value&&y.value!=="bottom");W(()=>e.expandOnHover&&e.rail!=null,()=>{$(f,C=>v("update:rail",!C))}),W(()=>!e.disableResizeWatcher,()=>{$(S,C=>!e.permanent&&et(()=>k.value=!C))}),W(()=>!e.disableRouteWatcher&&!!p,()=>{$(p.currentRoute,()=>S.value&&(k.value=!1))}),$(()=>e.permanent,C=>{C&&(k.value=!0)}),e.modelValue==null&&!S.value&&(k.value=e.permanent||!m.value);const{isDragging:_,dragProgress:N}=Rt({el:E,isActive:k,isTemporary:S,width:d,touchless:U(e,"touchless"),position:y}),X=g(()=>{const C=S.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):d.value;return _.value?C*N.value:C}),De=g(()=>["top","bottom"].includes(e.location)?0:d.value),{layoutItemStyles:re,layoutItemScrimStyles:qe,layoutIsReady:Oe}=$e({id:e.name,order:g(()=>parseInt(e.order,10)),position:y,layoutSize:X,elementSize:De,active:g(()=>k.value||_.value),disableTransitions:g(()=>_.value),absolute:g(()=>e.absolute||V.value&&typeof ue.value!="string")}),{isStuck:ue,stickyStyles:We}=Mt({rootEl:E,isSticky:V,layoutItemStyles:re}),ce=ae(g(()=>typeof e.scrim=="string"?e.scrim:null)),Ge=g(()=>({..._.value?{opacity:N.value*.2,transition:"none"}:void 0,...qe.value}));return Ee({VList:{bgColor:"transparent"}}),z(()=>{const C=t.image||e.image;return l(A,null,[l(e.tag,Y({ref:E,onMouseenter:M,onMouseleave:L,class:["v-navigation-drawer",`v-navigation-drawer--${y.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":f.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":S.value,"v-navigation-drawer--persistent":x.value,"v-navigation-drawer--active":k.value,"v-navigation-drawer--sticky":V.value},s.value,u.value,r.value,h.value,i.value,c.value,e.class],style:[b.value,re.value,P.value,We.value,e.style,["top","bottom"].includes(y.value)?{height:"auto"}:{}]},R,a),{default:()=>{var de,ve,me;return[C&&l("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?l(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):l(Ie,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&l("div",{class:"v-navigation-drawer__prepend"},[(de=t.prepend)==null?void 0:de.call(t)]),l("div",{class:"v-navigation-drawer__content"},[(ve=t.default)==null?void 0:ve.call(t)]),t.append&&l("div",{class:"v-navigation-drawer__append"},[(me=t.append)==null?void 0:me.call(t)])]}}),l(Ke,{name:"fade-transition"},{default:()=>[S.value&&(_.value||k.value)&&!!e.scrim&&l("div",Y({class:["v-navigation-drawer__scrim",ce.backgroundColorClasses.value],style:[Ge.value,ce.backgroundColorStyles.value],onClick:()=>{x.value||(k.value=!1)}},R),null)]})])}),Oe.then(()=>({isStuck:ue}))}}),At={data:()=>({drawer:null})},Nt=Object.assign(At,{__name:"baselineLayout",setup(e){const o=K(null);return(a,v)=>(w(),I(at,null,{default:T(()=>[l(Lt,{modelValue:o.value,"onUpdate:modelValue":v[0]||(v[0]=t=>o.value=t)},{default:T(()=>[Q(a.$slots,"sidebar")]),_:3},8,["modelValue"]),l(Vt,null,{default:T(()=>[l(Ct,{onClick:v[1]||(v[1]=t=>o.value=!o.value)}),Q(a.$slots,"header")]),_:3}),l(tt,{style:{"background-color":"whitesmoke","min-height":"100vh"}},{default:T(()=>[l(mt,null,{default:T(()=>[Q(a.$slots,"main")]),_:3})]),_:3})]),_:3}))}}),Dt={name:"MenuSystem",components:{BaselineLayout:Nt,MyProversAndCustomerAsMenuList:bt,MenuSystemItem:Ae},data(){return{drawer:!1,appTitle:"Insert title here"}},methods:{$store(){return nt},logout(){ot.remove("VITE_AUTH"),he.deleteAll()}},computed:{loginSession(){return he.query().withAllRecursive().first()},links(){return[{icon:"",text:"Home",to:"/"},{icon:"",text:"These ones tho",subLinks:[{icon:"",text:"Entity Goods (Deps. Items)",to:"/lists/entity-goods"},{icon:"",text:"Entity Good Approvals (Deps.)",to:"/lists/entity-good-approvals"},{icon:"",text:"Goods (Waste Types)",to:"/lists/goods"},{icon:"",text:"Service Requests (Withd. Contracts)",to:"/lists/service-requests"},{icon:"",text:"Service Request Frequencies",to:"/lists/service-request-frequencies"},{icon:"",text:"Service Request Reports (Withd.)",to:"/lists/service-request-reports"},{icon:"",text:"Queries",to:"/lists/queries"},{icon:"",text:"Query Headers",to:"/lists/query-headers"},{icon:"",text:"Treatment Details (Withd. Items)",to:"/lists/treatment-details"}]},{icon:"",text:"Lists",subLinks:[{icon:"",text:"Addresses",to:"/lists/addresses"},{icon:"",text:"Attachments",to:"/lists/attachments"},{icon:"",text:"Audits",to:"/lists/audits"},{icon:"",text:"Banks",to:"/lists/banks"},{icon:"",text:"Communications",to:"/lists/communications"},{icon:"",text:"Contact Numbers",to:"/lists/contact-numbers"},{icon:"",text:"Crms",to:"/lists/crms"},{icon:"",text:"Documents",to:"/lists/documents"},{icon:"",text:"Document Details",to:"/lists/document-details"},{icon:"",text:"Domain Users",to:"/lists/domain-users"},{icon:"",text:"Dummies",to:"/lists/dummies"},{icon:"",text:"Emails",to:"/lists/emails"},{icon:"",text:"Entities",to:"/lists/entities"},{icon:"",text:"Entity Audits",to:"/lists/entity-audits"},{icon:"",text:"Entity Events",to:"/lists/entity-events"},{icon:"",text:"Entity Relationships",to:"/lists/entity-relationships"},{icon:"",text:"External Producers",to:"/lists/external-producers"},{icon:"",text:"Instance Nos",to:"/lists/instance-nos"},{icon:"",text:"Migration S",to:"/lists/migration-s"},{icon:"",text:"Objects",to:"/lists/objects"},{icon:"",text:"Object Traits",to:"/lists/object-traits"},{icon:"",text:"Object Values",to:"/lists/object-values"},{icon:"",text:"Password Hashes",to:"/lists/password-hashes"},{icon:"",text:"Product Providers",to:"/lists/product-providers"},{icon:"",text:"Relatives",to:"/lists/relatives"},{icon:"",text:"Requirements",to:"/lists/requirements"},{icon:"",text:"Requirement Details",to:"/lists/requirement-details"},{icon:"",text:"Rules",to:"/lists/rules"},{icon:"",text:"Rule Actions",to:"/lists/rule-actions"},{icon:"",text:"Rule Action Datas",to:"/lists/rule-action-datas"},{icon:"",text:"Rule Configs",to:"/lists/rule-configs"},{icon:"",text:"Rule Entity Roles",to:"/lists/rule-entity-roles"},{icon:"",text:"System Actions",to:"/lists/system-actions"},{icon:"",text:"System Codes",to:"/lists/system-codes"},{icon:"",text:"System Configurations",to:"/lists/system-configurations"},{icon:"",text:"System Logs",to:"/lists/system-logs"},{icon:"",text:"System Users",to:"/lists/system-users"},{icon:"",text:"Transactions",to:"/lists/transactions"},{icon:"",text:"User Accesses",to:"/lists/user-accesses"},{icon:"",text:"User Configurations",to:"/lists/user-configurations"},{icon:"",text:"User Devices",to:"/lists/user-devices"},{icon:"",text:"User Roles",to:"/lists/user-roles"},{icon:"",text:"User Role Accesses",to:"/lists/user-role-accesses"},{icon:"",text:"Website Producer Registrations",to:"/lists/website-producer-registrations"}]}]}},watch:{drawer(e){this.$emit("drawer",e)}},mounted(){}},qt={class:"ml-2 pl-2",style:{"border-left":"solid 1px Gainsboro"}};function Ot(e,o,a,v,t,n){const s=G("MenuSystemItem"),r=G("baseline-layout");return w(),H("div",null,[l(r,null,{sidebar:T(()=>[l(ct,{nav:"",density:"compact"},{default:T(()=>[(w(!0),H(A,null,te(n.links,(u,b)=>(w(),H("div",{key:b},[u.subLinks?(w(),I(dt,{key:u.text,"no-action":"","prepend-icon":u.icon,value:!1},{activator:T(({props:i,isOpen:h})=>[(w(),I(ne,Y({ref_for:!0},i,{key:u.text,title:u.text}),null,16,["title"]))]),default:T(()=>[pe("div",qt,[typeof u.subLinks=="string"?(w(),I(st(u.subLinks),{key:0})):(w(!0),H(A,{key:1},te(u.subLinks,i=>(w(),I(s,{key:i.text,link:i},null,8,["link"]))),128))])]),_:2},1032,["prepend-icon"])):(w(),I(s,{key:0,link:u},null,8,["link"]))]))),128))]),_:1})]),header:T(()=>[l(vt),n.loginSession?(w(),I(Z,{key:0,onClick:o[0]||(o[0]=u=>n.logout())},{default:T(()=>[ee(" Sign Out ")]),_:1})):(w(),H(A,{key:1},[l(Z,{onClick:o[1]||(o[1]=u=>e.$router.push("/sign-in")),style:{"margin-right":"1em"}},{default:T(()=>[ee(" Sign In ")]),_:1}),l(Z,{onClick:o[2]||(o[2]=u=>e.$router.push("/join"))},{default:T(()=>[ee(" Join ")]),_:1})],64))]),main:T(()=>[Q(e.$slots,"main")]),_:3})])}const Wt=J(Dt,[["render",Ot]]),Gt={name:"MenuView",components:{MenuSystem:Wt}};function Ut(e,o,a,v,t,n){const s=G("router-view"),r=G("MenuSystem");return w(),I(r,null,{main:T(()=>[l(s)]),_:1})}const Ft=J(Gt,[["render",Ut]]);export{Ft as default};
