import{j as M,c as l,h as S,k as ae,l as ge,m as P,p as oe,r as _,w as h,e as ye,q as Ge,Q as he,g as N,u as Ke,t as Xe,v as Je,x as Ye,y as Ze,z as et,A as tt,B as de,n as Se,C as K,b as De,f as at,D as qe,E as ot,F as Re,G as it,H as lt,I as nt,J as st,K as rt,L as ut,M as ct,N as dt,O as fe,a as X,P as ft,R as vt,_ as mt,V as ke,S as J,U as ht,W as O,X as U,Y as T,Z as p,$ as Y,a0 as Z,a1 as Te,a2 as ve,a3 as gt,a4 as ee,a5 as te,a6 as Ce,a7 as me,a8 as Le,a9 as _e,aa as $e,ab as yt}from"./index.ad7ad742.js";var bt=M({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:g}){const n=l(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:n.value},ae(g.default))}}),xt=M({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:g}){const n=l(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:n.value,role:"toolbar"},ae(g.default))}}),wt=M({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:g,emit:n}){const{proxy:{$q:s}}=N(),o=ge(oe,P);if(o===P)return console.error("QHeader needs to be child of QLayout"),P;const u=_(parseInt(e.heightHint,10)),y=_(!0),m=l(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||s.platform.is.ios&&o.isContainer.value===!0),w=l(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return y.value===!0?u.value:0;const i=u.value-o.scroll.value.position;return i>0?i:0}),b=l(()=>e.modelValue!==!0||m.value===!0&&y.value!==!0),a=l(()=>e.modelValue===!0&&b.value===!0&&e.reveal===!0),z=l(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(b.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=l(()=>{const i=o.rows.value.top,C={};return i[0]==="l"&&o.left.space===!0&&(C[s.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),i[2]==="r"&&o.right.space===!0&&(C[s.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),C});function d(i,C){o.update("header",i,C)}function f(i,C){i.value!==C&&(i.value=C)}function D({height:i}){f(u,i),d("size",i)}function k(i){a.value===!0&&f(y,!0),n("focusin",i)}h(()=>e.modelValue,i=>{d("space",i),f(y,!0),o.animate()}),h(w,i=>{d("offset",i)}),h(()=>e.reveal,i=>{i===!1&&f(y,e.modelValue)}),h(y,i=>{o.animate(),n("reveal",i)}),h(o.scroll,i=>{e.reveal===!0&&f(y,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const v={};return o.instances.header=v,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",w.value),ye(()=>{o.instances.header===v&&(o.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const i=Ge(g.default,[]);return e.elevated===!0&&i.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(S(he,{debounce:0,onResize:D})),S("header",{class:z.value,style:q.value,onFocusin:k},i)}}});const ze=150;var pt=M({name:"QDrawer",inheritAttrs:!1,props:{...Ke,...Xe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Je,"onLayout","miniState"],setup(e,{slots:g,emit:n,attrs:s}){const o=N(),{proxy:{$q:u}}=o,y=Ye(e,u),{preventBodyScroll:m}=ot(),{registerTimeout:w,removeTimeout:b}=Ze(),a=ge(oe,P);if(a===P)return console.error("QDrawer needs to be child of QLayout"),P;let z,q=null,d;const f=_(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),D=l(()=>e.mini===!0&&f.value!==!0),k=l(()=>D.value===!0?e.miniWidth:e.width),v=_(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),i=l(()=>e.persistent!==!0&&(f.value===!0||Oe.value===!0));function C(t,r){if(V(),t!==!1&&a.animate(),B(0),f.value===!0){const L=a.instances[j.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),Q(1),a.isContainer.value!==!0&&m(!0)}else Q(0),t!==!1&&re(!1);w(()=>{t!==!1&&re(!0),r!==!0&&n("show",t)},ze)}function c(t,r){I(),t!==!1&&a.animate(),Q(0),B(W.value*k.value),ue(),r!==!0?w(()=>{n("hide",t)},ze):b()}const{show:x,hide:$}=et({showing:v,hideOnRouteChange:i,handleShow:C,handleHide:c}),{addToHistory:V,removeFromHistory:I}=tt(v,$,i),H={belowBreakpoint:f,hide:$},R=l(()=>e.side==="right"),W=l(()=>(u.lang.rtl===!0?-1:1)*(R.value===!0?1:-1)),be=_(0),E=_(!1),ie=_(!1),xe=_(k.value*W.value),j=l(()=>R.value===!0?"left":"right"),le=l(()=>v.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),ne=l(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(R.value?"R":"L")!==-1||u.platform.is.ios===!0&&a.isContainer.value===!0),F=l(()=>e.overlay===!1&&v.value===!0&&f.value===!1),Oe=l(()=>e.overlay===!0&&v.value===!0&&f.value===!1),Pe=l(()=>"fullscreen q-drawer__backdrop"+(v.value===!1&&E.value===!1?" hidden":"")),Qe=l(()=>({backgroundColor:`rgba(0,0,0,${be.value*.4})`})),we=l(()=>R.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Ae=l(()=>R.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Ve=l(()=>{const t={};return a.header.space===!0&&we.value===!1&&(ne.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&Ae.value===!1&&(ne.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),He=l(()=>{const t={width:`${k.value}px`,transform:`translateX(${xe.value}px)`};return f.value===!0?t:Object.assign(t,Ve.value)}),Me=l(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),We=l(()=>`q-drawer q-drawer--${e.side}`+(ie.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(y.value===!0?" q-drawer--dark q-dark":"")+(E.value===!0?" no-transition":v.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${D.value===!0?"mini":"standard"}`+(ne.value===!0||F.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(we.value===!0?" q-drawer--top-padding":""))),Ee=l(()=>{const t=u.lang.rtl===!0?e.side:j.value;return[[de,Ne,void 0,{[t]:!0,mouse:!0}]]}),Ie=l(()=>{const t=u.lang.rtl===!0?j.value:e.side;return[[de,pe,void 0,{[t]:!0,mouse:!0}]]}),Fe=l(()=>{const t=u.lang.rtl===!0?j.value:e.side;return[[de,pe,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function se(){je(f,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}h(f,t=>{t===!0?(z=v.value,v.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(v.value===!0?(B(0),Q(0),ue()):x(!1))}),h(()=>e.side,(t,r)=>{a.instances[r]===H&&(a.instances[r]=void 0,a[r].space=!1,a[r].offset=0),a.instances[t]=H,a[t].size=k.value,a[t].space=F.value,a[t].offset=le.value}),h(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&se()}),h(()=>e.behavior+e.breakpoint,se),h(a.isContainer,t=>{v.value===!0&&m(t!==!0),t===!0&&se()}),h(a.scrollbarWidth,()=>{B(v.value===!0?0:void 0)}),h(le,t=>{A("offset",t)}),h(F,t=>{n("onLayout",t),A("space",t)}),h(R,()=>{B()}),h(k,t=>{B(),ce(e.miniToOverlay,t)}),h(()=>e.miniToOverlay,t=>{ce(t,k.value)}),h(()=>u.lang.rtl,()=>{B()}),h(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ue(),a.animate())}),h(D,t=>{n("miniState",t)});function B(t){t===void 0?Se(()=>{t=v.value===!0?0:k.value,B(W.value*t)}):(a.isContainer.value===!0&&R.value===!0&&(f.value===!0||Math.abs(t)===k.value)&&(t+=W.value*a.scrollbarWidth.value),xe.value=t)}function Q(t){be.value=t}function re(t){const r=t===!0?"remove":a.isContainer.value!==!0?"add":"";r!==""&&document.body.classList[r]("q-body--drawer-toggle")}function Ue(){q!==null&&clearTimeout(q),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),ie.value=!0,q=setTimeout(()=>{q=null,ie.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ne(t){if(v.value!==!1)return;const r=k.value,L=K(t.distance.x,0,r);if(t.isFinal===!0){L>=Math.min(75,r)===!0?x():(a.animate(),Q(0),B(W.value*r)),E.value=!1;return}B((u.lang.rtl===!0?R.value!==!0:R.value)?Math.max(r-L,0):Math.min(0,L-r)),Q(K(L/r,0,1)),t.isFirst===!0&&(E.value=!0)}function pe(t){if(v.value!==!0)return;const r=k.value,L=t.direction===e.side,G=(u.lang.rtl===!0?L!==!0:L)?K(t.distance.x,0,r):0;if(t.isFinal===!0){Math.abs(G)<Math.min(75,r)===!0?(a.animate(),Q(1),B(0)):$(),E.value=!1;return}B(W.value*G),Q(K(1-G/r,0,1)),t.isFirst===!0&&(E.value=!0)}function ue(){m(!1),re(!0)}function A(t,r){a.update(e.side,t,r)}function je(t,r){t.value!==r&&(t.value=r)}function ce(t,r){A("size",t===!0?e.miniWidth:r)}return a.instances[e.side]=H,ce(e.miniToOverlay,k.value),A("space",F.value),A("offset",le.value),e.showIfAbove===!0&&e.modelValue!==!0&&v.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),De(()=>{n("onLayout",F.value),n("miniState",D.value),z=e.showIfAbove===!0;const t=()=>{(v.value===!0?C:c)(!1,!0)};if(a.totalWidth.value!==0){Se(t);return}d=h(a.totalWidth,()=>{d(),d=void 0,v.value===!1&&e.showIfAbove===!0&&f.value===!1?x(!1):t()})}),ye(()=>{d!==void 0&&d(),q!==null&&(clearTimeout(q),q=null),v.value===!0&&ue(),a.instances[e.side]===H&&(a.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const t=[];f.value===!0&&(e.noSwipeOpen===!1&&t.push(at(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ee.value)),t.push(qe("div",{ref:"backdrop",class:Pe.value,style:Qe.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&v.value===!0,()=>Fe.value)));const r=D.value===!0&&g.mini!==void 0,L=[S("div",{...s,key:""+r,class:[Me.value,s.class]},r===!0?g.mini():ae(g.default))];return e.elevated===!0&&v.value===!0&&L.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(qe("aside",{ref:"content",class:We.value,style:He.value},L,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>Ie.value)),S("div",{class:"q-drawer-container"},t)}}}),St=M({name:"QPageContainer",setup(e,{slots:g}){const{proxy:{$q:n}}=N(),s=ge(oe,P);if(s===P)return console.error("QPageContainer needs to be child of QLayout"),P;Re(it,!0);const o=l(()=>{const u={};return s.header.space===!0&&(u.paddingTop=`${s.header.size}px`),s.right.space===!0&&(u[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(u.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(u[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),u});return()=>S("div",{class:"q-page-container",style:o.value},ae(g.default))}});const{passive:Be}=rt,qt=["both","horizontal","vertical"];var kt=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>qt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:lt},emits:["scroll"],setup(e,{emit:g}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,o,u;h(()=>e.scrollTarget,()=>{w(),m()});function y(){s!==null&&s();const z=Math.max(0,ut(o)),q=ct(o),d={top:z-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const f=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:z,left:q},n.directionChanged=n.direction!==f,n.delta=d,n.directionChanged===!0&&(n.direction=f,n.inflectionPoint=n.position),g("scroll",{...n})}function m(){o=nt(u,e.scrollTarget),o.addEventListener("scroll",b,Be),b(!0)}function w(){o!==void 0&&(o.removeEventListener("scroll",b,Be),o=void 0)}function b(z){if(z===!0||e.debounce===0||e.debounce==="0")y();else if(s===null){const[q,d]=e.debounce?[setTimeout(y,e.debounce),clearTimeout]:[requestAnimationFrame(y),cancelAnimationFrame];s=()=>{d(q),s=null}}}const{proxy:a}=N();return h(()=>a.$q.lang.rtl,y),De(()=>{u=a.$el.parentNode,m()}),ye(()=>{s!==null&&s(),w()}),Object.assign(a,{trigger:b,getPosition:()=>n}),st}}),Tt=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:g,emit:n}){const{proxy:{$q:s}}=N(),o=_(null),u=_(s.screen.height),y=_(e.container===!0?0:s.screen.width),m=_({position:0,direction:"down",inflectionPoint:0}),w=_(0),b=_(dt.value===!0?0:fe()),a=l(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=l(()=>e.container===!1?{minHeight:s.screen.height+"px"}:null),q=l(()=>b.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${b.value}px`}:null),d=l(()=>b.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${b.value}px`,width:`calc(100% + ${b.value}px)`}:null);function f(c){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:c.position.top,direction:c.direction,directionChanged:c.directionChanged,inflectionPoint:c.inflectionPoint.top,delta:c.delta.top};m.value=x,e.onScroll!==void 0&&n("scroll",x)}}function D(c){const{height:x,width:$}=c;let V=!1;u.value!==x&&(V=!0,u.value=x,e.onScrollHeight!==void 0&&n("scrollHeight",x),v()),y.value!==$&&(V=!0,y.value=$),V===!0&&e.onResize!==void 0&&n("resize",c)}function k({height:c}){w.value!==c&&(w.value=c,v())}function v(){if(e.container===!0){const c=u.value>w.value?fe():0;b.value!==c&&(b.value=c)}}let i=null;const C={instances:{},view:l(()=>e.view),isContainer:l(()=>e.container),rootRef:o,height:u,containerHeight:w,scrollbarWidth:b,totalWidth:l(()=>y.value+b.value),rows:l(()=>{const c=e.view.toLowerCase().split(" ");return{top:c[0].split(""),middle:c[1].split(""),bottom:c[2].split("")}}),header:X({size:0,offset:0,space:!1}),right:X({size:300,offset:0,space:!1}),footer:X({size:0,offset:0,space:!1}),left:X({size:300,offset:0,space:!1}),scroll:m,animate(){i!==null?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{i=null,document.body.classList.remove("q-body--layout-animate")},155)},update(c,x,$){C[c][x]=$}};if(Re(oe,C),fe()>0){let $=function(){c=null,x.classList.remove("hide-scrollbar")},V=function(){if(c===null){if(x.scrollHeight>s.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(c);c=setTimeout($,300)},I=function(H){c!==null&&H==="remove"&&(clearTimeout(c),$()),window[`${H}EventListener`]("resize",V)},c=null;const x=document.body;h(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),ft(()=>{I("remove")})}return()=>{const c=vt(g.default,[S(kt,{onScroll:f}),S(he,{onResize:D})]),x=S("div",{class:a.value,style:z.value,ref:e.container===!0?void 0:o,tabindex:-1},c);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:o},[S(he,{onResize:k}),S("div",{class:"absolute-full",style:q.value},[S("div",{class:"scroll",style:d.value},[x])])]):x}}});const Ct=[{icon:"",text:"Home",to:"/"},{icon:"",text:"List 1",subLinks:[{icon:"",text:"Entity Goods (Deps. Items)",to:"/lists/entity-goods"},{icon:"",text:"Entity Good Approvals (Deps.)",to:"/lists/entity-good-approvals"},{icon:"",text:"Goods (Waste Types)",to:"/lists/goods"},{icon:"",text:"Service Requests (Withd. Contracts)",to:"/lists/service-requests"},{icon:"",text:"Service Request Frequencies",to:"/lists/service-request-frequencies"},{icon:"",text:"Service Request Reports (Withd.)",to:"/lists/service-request-reports"},{icon:"",text:"Queries",to:"/lists/queries"},{icon:"",text:"Query Headers",to:"/lists/query-headers"},{icon:"",text:"Treatment Details (Withd. Items)",to:"/lists/treatment-details"}]},{icon:"",text:"List 2",subLinks:[{icon:"",text:"Addresses",to:"/lists/addresses"},{icon:"",text:"Attachments",to:"/lists/attachments"},{icon:"",text:"Audits",to:"/lists/audits"},{icon:"",text:"Banks",to:"/lists/banks"},{icon:"",text:"Communications",to:"/lists/communications"},{icon:"",text:"Contact Numbers",to:"/lists/contact-numbers"},{icon:"",text:"Crms",to:"/lists/crms"},{icon:"",text:"Documents",to:"/lists/documents"},{icon:"",text:"Document Details",to:"/lists/document-details"},{icon:"",text:"Domain Users",to:"/lists/domain-users"},{icon:"",text:"Dummies",to:"/lists/dummies"},{icon:"",text:"Emails",to:"/lists/emails"},{icon:"",text:"Entities",to:"/lists/entities"},{icon:"",text:"Entity Audits",to:"/lists/entity-audits"},{icon:"",text:"Entity Events",to:"/lists/entity-events"},{icon:"",text:"Entity Relationships",to:"/lists/entity-relationships"},{icon:"",text:"External Producers",to:"/lists/external-producers"},{icon:"",text:"Instance Nos",to:"/lists/instance-nos"},{icon:"",text:"Migration S",to:"/lists/migration-s"},{icon:"",text:"Objects",to:"/lists/objects"},{icon:"",text:"Object Traits",to:"/lists/object-traits"},{icon:"",text:"Object Values",to:"/lists/object-values"},{icon:"",text:"Password Hashes",to:"/lists/password-hashes"},{icon:"",text:"Product Providers",to:"/lists/product-providers"},{icon:"",text:"Relatives",to:"/lists/relatives"},{icon:"",text:"Requirements",to:"/lists/requirements"},{icon:"",text:"Requirement Details",to:"/lists/requirement-details"},{icon:"",text:"Rules",to:"/lists/rules"},{icon:"",text:"Rule Actions",to:"/lists/rule-actions"},{icon:"",text:"Rule Action Datas",to:"/lists/rule-action-datas"},{icon:"",text:"Rule Configs",to:"/lists/rule-configs"},{icon:"",text:"Rule Entity Roles",to:"/lists/rule-entity-roles"},{icon:"",text:"System Actions",to:"/lists/system-actions"},{icon:"",text:"System Codes",to:"/lists/system-codes"},{icon:"",text:"System Configurations",to:"/lists/system-configurations"},{icon:"",text:"System Logs",to:"/lists/system-logs"},{icon:"",text:"System Users",to:"/lists/system-users"},{icon:"",text:"Transactions",to:"/lists/transactions"},{icon:"",text:"User Accesses",to:"/lists/user-accesses"},{icon:"",text:"User Configurations",to:"/lists/user-configurations"},{icon:"",text:"User Devices",to:"/lists/user-devices"},{icon:"",text:"User Roles",to:"/lists/user-roles"},{icon:"",text:"User Role Accesses",to:"/lists/user-role-accesses"},{icon:"",text:"Website Producer Registrations",to:"/lists/website-producer-registrations"}]}];const Lt={name:"MainLayout",data(){return{leftDrawerOpen:!1,links:Ct}},methods:{toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen},logout(){ke.remove("VITE_AUTH"),J.deleteAll()}},computed:{loginSession(){return J.query().withAllRecursive().first()}},mounted(){const e=ke.get("VITE_AUTH");e&&(J.deleteAll(),J.insert({data:e}))}},_t={class:"q-pa-md container-md"};function $t(e,g,n,s,o,u){const y=ht("router-view");return O(),U(Tt,{view:"lHh Lpr lFf"},{default:T(()=>[p(wt,{elevated:""},{default:T(()=>[p(xt,null,{default:T(()=>[p(Y,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:u.toggleLeftDrawer},null,8,["onClick"]),p(bt,null,{default:T(()=>[Z("Quasar App")]),_:1}),Te("div",null,"Quasar v"+ve(e.$q.version),1),p(gt),u.loginSession?(O(),U(Y,{key:0,flat:"",label:"Sign Out",onClick:u.logout},null,8,["onClick"])):(O(),ee(te,{key:1},[p(Y,{flat:"",label:"Login",onClick:g[0]||(g[0]=m=>e.$router.push("/sign-in"))}),p(Y,{flat:"",label:"Register",onClick:g[1]||(g[1]=m=>e.$router.push("/join"))})],64))]),_:1})]),_:1}),p(pt,{modelValue:o.leftDrawerOpen,"onUpdate:modelValue":g[2]||(g[2]=m=>o.leftDrawerOpen=m),"show-if-above":"",bordered:""},{default:T(()=>[p(Ce,null,{default:T(()=>[p(me,{header:""},{default:T(()=>[Z("Menu")]),_:1}),(O(!0),ee(te,null,Le(o.links,m=>(O(),ee(te,{key:m.text},[m.subLinks?(O(),U(yt,{key:1,label:m.text},{default:T(()=>[p(Ce,{style:{"padding-left":"16px"}},{default:T(()=>[(O(!0),ee(te,null,Le(m.subLinks,w=>(O(),U(_e,{key:w.text,to:w.to,clickable:""},{default:T(()=>[p($e,null,{default:T(()=>[p(me,null,{default:T(()=>[Z(ve(w.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024)]),_:2},1032,["label"])):(O(),U(_e,{key:0,to:m.to,clickable:""},{default:T(()=>[p($e,null,{default:T(()=>[p(me,null,{default:T(()=>[Z(ve(m.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))],64))),128))]),_:1})]),_:1},8,["modelValue"]),p(St,null,{default:T(()=>[Te("div",_t,[p(y)])]),_:1})]),_:1})}var Dt=mt(Lt,[["render",$t]]);export{Dt as default};
