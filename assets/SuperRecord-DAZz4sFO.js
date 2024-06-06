import{m as ye,u as we,a as Te,R as Se,b as Ce,S as Ve,Q as X}from"./SuperTable-B5mT-D4T.js";import{l as B,b6 as ee,$ as xe,q as E,aV as Re,N as O,I as y,u as W,e as H,a as r,F as Y,Y as _,ci as te,m as ae,n as ne,y as Pe,E as ke,G as Ie,ba as _e,b$ as Be,H as L,P as Ee,aX as We,aP as oe,aQ as Fe,aW as se,T as le,bY as Me,bZ as Oe,W as He,b1 as Ye,b0 as Xe,L as z,a7 as Ae,cj as De,ay as $e,aJ as Le,z as ze,A as R,J as Ge,ck as K,cl as je,_ as Ue,k as A,o as P,c as D,w as x,h as N,r as $,i as M,t as qe,c9 as Q,a8 as J,bC as Ke,bD as Ne}from"./index-DmaDzFj-.js";import{f as Qe,c as Je,s as Ze}from"./VForm-DijQrraO.js";import{u as pe}from"./VList-D1i7sB2F.js";const U=Symbol.for("vuetify:v-tabs"),et=B({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ee(xe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),G=E()({name:"VTab",props:et(),setup(e,n){let{slots:a,attrs:t}=n;const{textColorClasses:s,textColorStyles:l}=Re(e,"sliderColor"),o=O(),d=O(),u=y(()=>e.direction==="horizontal"),i=y(()=>{var g,c;return((c=(g=o.value)==null?void 0:g.group)==null?void 0:c.isSelected.value)??!1});function h(g){var m,v;let{value:c}=g;if(c){const w=(v=(m=o.value)==null?void 0:m.$el.parentElement)==null?void 0:v.querySelector(".v-tab--selected .v-tab__slider"),k=d.value;if(!w||!k)return;const F=getComputedStyle(w).color,C=w.getBoundingClientRect(),V=k.getBoundingClientRect(),f=u.value?"x":"y",b=u.value?"X":"Y",T=u.value?"right":"bottom",S=u.value?"width":"height",fe=C[f],me=V[f],I=fe>me?C[T]-V[T]:C[f]-V[f],he=Math.sign(I)>0?u.value?"right":"bottom":Math.sign(I)<0?u.value?"left":"top":"center",be=(Math.abs(I)+(Math.sign(I)<0?C[S]:V[S]))/Math.max(C[S],V[S])||0,ge=C[S]/V[S]||0,q=1.5;Je(k,{backgroundColor:[F,"currentcolor"],transform:[`translate${b}(${I}px) scale${b}(${ge})`,`translate${b}(${I/q}px) scale${b}(${(be-1)/q+1})`,"none"],transformOrigin:Array(3).fill(he)},{duration:225,easing:Ze})}}return W(()=>{const g=H.filterProps(e);return r(H,_({symbol:U,ref:o,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},g,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":h}),{...a,default:()=>{var c;return r(Y,null,[((c=a.default)==null?void 0:c.call(a))??e.text,!e.hideSlider&&r("div",{ref:d,class:["v-tab__slider",s.value],style:l.value},null)])}})}),Qe({},o)}}),tt=e=>{const{touchstartX:n,touchendX:a,touchstartY:t,touchendY:s}=e,l=.5,o=16;e.offsetX=a-n,e.offsetY=s-t,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&a<n-o&&e.left(e),e.right&&a>n+o&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&s<t-o&&e.up(e),e.down&&s>t+o&&e.down(e))};function at(e,n){var t;const a=e.changedTouches[0];n.touchstartX=a.clientX,n.touchstartY=a.clientY,(t=n.start)==null||t.call(n,{originalEvent:e,...n})}function nt(e,n){var t;const a=e.changedTouches[0];n.touchendX=a.clientX,n.touchendY=a.clientY,(t=n.end)==null||t.call(n,{originalEvent:e,...n}),tt(n)}function ot(e,n){var t;const a=e.changedTouches[0];n.touchmoveX=a.clientX,n.touchmoveY=a.clientY,(t=n.move)==null||t.call(n,{originalEvent:e,...n})}function st(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:a=>at(a,n),touchend:a=>nt(a,n),touchmove:a=>ot(a,n)}}function lt(e,n){var d;const a=n.value,t=a!=null&&a.parent?e.parentElement:e,s=(a==null?void 0:a.options)??{passive:!0},l=(d=n.instance)==null?void 0:d.$.uid;if(!t||!l)return;const o=st(n.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[l]=o,te(o).forEach(u=>{t.addEventListener(u,o[u],s)})}function it(e,n){var l,o;const a=(l=n.value)!=null&&l.parent?e.parentElement:e,t=(o=n.instance)==null?void 0:o.$.uid;if(!(a!=null&&a._touchHandlers)||!t)return;const s=a._touchHandlers[t];te(s).forEach(d=>{a.removeEventListener(d,s[d])}),delete a._touchHandlers[t]}const ie={mounted:lt,unmounted:it},rt=ie,re=Symbol.for("vuetify:v-window"),ue=Symbol.for("vuetify:v-window-group"),de=B({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...ae(),...ne(),...Pe()},"VWindow"),Z=E()({name:"VWindow",directives:{Touch:ie},props:de(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:t}=ke(e),{isRtl:s}=Ie(),{t:l}=_e(),o=Be(e,ue),d=O(),u=y(()=>s.value?!e.reverse:e.reverse),i=L(!1),h=y(()=>{const f=e.direction==="vertical"?"y":"x",T=(u.value?!i.value:i.value)?"-reverse":"";return`v-window-${f}${T}-transition`}),g=L(0),c=O(void 0),m=y(()=>o.items.value.findIndex(f=>o.selected.value.includes(f.id)));Ee(m,(f,b)=>{const T=o.items.value.length,S=T-1;T<=2?i.value=f<b:f===S&&b===0?i.value=!0:f===0&&b===S?i.value=!1:i.value=f<b}),We(re,{transition:h,isReversed:i,transitionCount:g,transitionHeight:c,rootRef:d});const v=y(()=>e.continuous||m.value!==0),w=y(()=>e.continuous||m.value!==o.items.value.length-1);function k(){v.value&&o.prev()}function F(){w.value&&o.next()}const C=y(()=>{const f=[],b={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:o.prev,"aria-label":l("$vuetify.carousel.prev")};f.push(v.value?a.prev?a.prev({props:b}):r(H,b,null):r("div",null,null));const T={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:o.next,"aria-label":l("$vuetify.carousel.next")};return f.push(w.value?a.next?a.next({props:T}):r(H,T,null):r("div",null,null)),f}),V=y(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?k():F()},right:()=>{u.value?F():k()},start:b=>{let{originalEvent:T}=b;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return W(()=>oe(r(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var f,b;return[r("div",{class:"v-window__container",style:{height:c.value}},[(f=a.default)==null?void 0:f.call(a,{group:o}),e.showArrows!==!1&&r("div",{class:"v-window__controls"},[C.value])]),(b=a.additional)==null?void 0:b.call(a,{group:o})]}}),[[Fe("touch"),V.value]])),{group:o}}}),ut=B({...ee(de(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),ce=E()({name:"VTabsWindow",props:ut(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=se(U,null),s=le(e,"modelValue"),l=y({get(){var o;return s.value!=null||!t?s.value:(o=t.items.value.find(d=>t.selected.value.includes(d.id)))==null?void 0:o.value},set(o){s.value=o}});return W(()=>{const o=Z.filterProps(e);return r(Z,_({_as:"VTabsWindow"},o,{modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),a)}),{}}}),ve=B({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ae(),...Me(),...ye()},"VWindowItem"),p=E()({name:"VWindowItem",directives:{Touch:rt},props:ve(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:a}=n;const t=se(re),s=Oe(e,ue),{isBooted:l}=He();if(!t||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=L(!1),d=y(()=>l.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function u(){!o.value||!t||(o.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function i(){var v;o.value||!t||(o.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=z((v=t.rootRef.value)==null?void 0:v.clientHeight)),t.transitionCount.value+=1)}function h(){u()}function g(v){o.value&&Ae(()=>{!d.value||!o.value||!t||(t.transitionHeight.value=z(v.clientHeight))})}const c=y(()=>{const v=t.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof v!="string"?t.transition.value:v,onBeforeEnter:i,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:i,onAfterLeave:u,onLeaveCancelled:h,onEnter:g}:!1}),{hasContent:m}=we(e,s.isSelected);return W(()=>r(Xe,{transition:c.value,disabled:!l.value},{default:()=>{var v;return[oe(r("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[m.value&&((v=a.default)==null?void 0:v.call(a))]),[[Ye,s.isSelected.value]])]}})),{groupItem:s}}}),dt=B({...ve()},"VTabsWindowItem"),j=E()({name:"VTabsWindowItem",props:dt(),setup(e,n){let{slots:a}=n;return W(()=>{const t=p.filterProps(e);return r(p,_({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),a)}),{}}});function ct(e){return e?e.map(n=>je(n)?n:{text:n,value:n}):[]}const vt=B({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...De({mandatory:"force",selectedClass:"v-tab-item--selected"}),...$e(),...ne()},"VTabs"),ft=E()({name:"VTabs",props:vt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const s=le(e,"modelValue"),l=y(()=>ct(e.items)),{densityClasses:o}=Le(e),{backgroundColorClasses:d,backgroundColorStyles:u}=ze(R(e,"bgColor")),{scopeId:i}=pe();return Ge({VTab:{color:R(e,"color"),direction:R(e,"direction"),stacked:R(e,"stacked"),fixed:R(e,"fixedTabs"),sliderColor:R(e,"sliderColor"),hideSlider:R(e,"hideSlider")}}),W(()=>{const h=K.filterProps(e),g=!!(t.window||e.items.length>0);return r(Y,null,[r(K,_(h,{modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,d.value,e.class],style:[{"--v-tabs-height":z(e.height)},u.value,e.style],role:"tablist",symbol:U},i,a),{default:()=>{var c;return[((c=t.default)==null?void 0:c.call(t))??l.value.map(m=>{var v;return((v=t.tab)==null?void 0:v.call(t,{item:m}))??r(G,_(m,{key:m.text,value:m.value}),{default:()=>{var w;return(w=t[`tab.${m.value}`])==null?void 0:w.call(t,{item:m})}})})]}}),g&&r(ce,_({modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,key:"tabs-window"},i),{default:()=>{var c;return[l.value.map(m=>{var v;return((v=t.item)==null?void 0:v.call(t,{item:m}))??r(j,{value:m.value},{default:()=>{var w;return(w=t[`item.${m.value}`])==null?void 0:w.call(t,{item:m})}})}),(c=t.window)==null?void 0:c.call(t)]}})])}),{}}}),mt={name:"SuperRecord",components:{SuperTableList:Te,RecordOverviewDynamic:Se,RecordOverview:Ce,SuperTable:Ve},props:{model:{type:[Object,Function],required:!0},id:{type:Number,required:!0},displayMapField:{type:Boolean,default(){return!1}},user:{type:Object,default(){return{}}}},data(){return{activeTab:null}},computed:{rowsAndDataIndicators(){let e={dataIndicators:[],rows:[]};this.model.displayMapFull&&this.model.displayMapFull.rows&&(e.rows=this.model.displayMapFull.rows);for(const n in e.rows)for(const a of e.rows[n].cols)if(a.rows)for(const t of a.rows)for(const s of t.cols)s.dataPoint.data&&e.dataIndicators.push(s.dataPoint.data);else a.dataPoint.data&&e.dataIndicators.push(a.dataPoint.data);return e},canEdit(){return!0},childRelations(){const e=X.computedAttrs(this.model,this.excludedCols),n=[];for(let a in e){const t=e[a];t.usageType.startsWith("relChildren")&&n.push({field:t,currentParentRecord:{item:this.item,model:this.model,relationType:t.usageType,foreignKeyToParentRecord:t.meta.field.foreignKey}})}return n},filteredChildRelations(){let e=[];for(const n of this.childRelations)this.rowsAndDataIndicators.dataIndicators.includes(n.field.name)||e.push(n);return e},headers(){return X.SupaerTableHeaders(this.model,[],this.canEdit,this.displayMapField)},item(){return this.model.query().whereId(this.id).withAll().get()[0]},modelFields(){return X.computedAttrs(this.model,this.excludedCols)}},methods:{getMsg(e){let n="";return Array.isArray(e)?e.length>1&&(n=`To create first set your active ${e[0]} group and  active ${e[1]}  group`):n=`To create first set your active ${e} group`,n},filters(e){let n={};return n[e]=this.id,n},fetchData(){this.model.FetchById(this.id,[],{flags:{},moreHeaders:{},rels:[]}).then(()=>{}).catch(()=>{})}},mounted(){this.fetchData()},watch:{activeTab(e){this.$nextTick(()=>{this.$refs[e]&&this.$refs[e][0].fetchData()})}}};function ht(e,n,a,t,s,l){const o=A("RecordOverviewDynamic"),d=A("RecordOverview"),u=A("SuperTable");return P(),D("div",null,[r(ft,{modelValue:s.activeTab,"onUpdate:modelValue":n[0]||(n[0]=i=>s.activeTab=i)},{default:x(()=>[r(G,{value:"tab"},{default:x(()=>[N(" Overview ")]),_:1}),(P(!0),D(Y,null,$(l.filteredChildRelations,(i,h)=>(P(),M(G,{key:h,value:"tab-"+h},{default:x(()=>[N(qe(i.field.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),r(ce,{modelValue:s.activeTab,"onUpdate:modelValue":n[1]||(n[1]=i=>s.activeTab=i)},{default:x(()=>[r(j,{value:"tab"},{default:x(()=>[a.model.displayMapFull&&a.model.displayMapFull.rows?(P(),M(o,{key:0,item:l.item,childRelations:l.childRelations,filteredChildRelations:l.filteredChildRelations,superOptions:{headers:l.headers,modelFields:l.modelFields,displayMapField:a.displayMapField,model:a.model,canEdit:l.canEdit,currentParentRel:{},user:a.user}},Q({_:2},[$(e.$slots,(i,h)=>({name:h,fn:x(g=>[J(e.$slots,h,Ke(Ne(g)))])}))]),1032,["item","childRelations","filteredChildRelations","superOptions"])):(P(),M(d,{key:1,item:l.item,superOptions:{headers:l.headers,modelFields:l.modelFields,displayMapField:a.displayMapField,model:a.model,canEdit:l.canEdit,currentParentRel:{},user:a.user}},null,8,["item","superOptions"]))]),_:3}),(P(!0),D(Y,null,$(l.filteredChildRelations,(i,h)=>(P(),M(j,{key:h,value:"tab-"+h},{default:x(()=>[r(u,{ref_for:!0,ref:`tab-${h}`,currentParentRel:i,model:i.field.meta.field.related,canEdit:l.canEdit,user:a.user,forcedFilters:l.filters(i.currentParentRecord.foreignKeyToParentRecord)},Q({_:2},[e.$slots[i.field.name]?{name:"create",fn:x(()=>[J(e.$slots,i.field.name)]),key:"0"}:void 0]),1032,["currentParentRel","model","canEdit","user","forcedFilters"])]),_:2},1032,["value"]))),128))]),_:3},8,["modelValue"])])}const St=Ue(mt,[["render",ht]]);export{St as S};
