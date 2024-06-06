import{q as i,m as s,J as j,u as c,a as n,l as y,n as V,aw as q,ax as m,ay as x,F as P,az as S,aA as h,K as f,s as z,aB as G,v as Q,aC as U,aD as W,aE as X,x as Y,aF as Z,y as $,aG as ee,aH as ae,E as te,B as ne,aI as de,aJ as le,aK as ie,C as se,aL as ce,aM as re,aN as ue,D as ve,aO as oe,I as p,aP as me,aQ as ye,d as be,aR as ge,aS as ke}from"./index-DmaDzFj-.js";const Ce=i()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return j({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=y({opacity:[Number,String],...s(),...V()},"VCardSubtitle"),Ve=i()({name:"VCardSubtitle",props:fe(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ie=q("v-card-title"),Ae=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),Pe=i()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),g=!!(r||t.append),k=!!(e.title!=null||t.title),C=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(f,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(P,null,[e.prependAvatar&&n(S,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(h,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ie,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),C&&n(Ve,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(f,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(P,null,[e.appendIcon&&n(h,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(S,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=y({opacity:[Number,String],...s(),...V()},"VCardText"),he=i()({name:"VCardText",props:Se(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),pe=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...z(),...s(),...x(),...G(),...Q(),...U(),...W(),...X(),...Y(),...Z(),...V(),...$(),...ee({variant:"elevated"})},"VCard"),Te=i()({name:"VCard",directives:{Ripple:ae},props:pe(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:b}=te(e),{borderClasses:r}=ne(e),{colorClasses:g,colorStyles:k,variantClasses:C}=de(e),{densityClasses:u}=le(e),{dimensionStyles:l}=ie(e),{elevationClasses:T}=se(e),{loaderClasses:B}=ce(e),{locationStyles:D}=re(e),{positionClasses:L}=ue(e),{roundedClasses:N}=ve(e),v=oe(e,t),_=p(()=>e.link!==!1&&v.isLink.value),o=p(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return c(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),M=F||E,O=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),H=!!(a.image||e.image),J=M||w||O,K=!!(a.text||e.text!=null);return me(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":o.value},b.value,r.value,g.value,u.value,T.value,B.value,L.value,N.value,C.value,e.class],style:[k.value,l.value,D.value,e.style],href:v.href.value,onClick:o.value&&v.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[H&&n("div",{key:"image",class:"v-card__image"},[a.image?n(f,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(be,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),J&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),K&&n(he,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ce,null,{default:a.actions}),ke(o.value,"v-card")]}}),[[ye("ripple"),o.value&&e.ripple]])}),{}}});export{Te as V,Ie as a,he as b,Ce as c};
