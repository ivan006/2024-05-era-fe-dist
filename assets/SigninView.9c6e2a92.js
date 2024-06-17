import{_ as f,S as n,V as g,W as r,X as S,Y as m,Z as s,ad as V,ae as w,af as b,a4 as d,a5 as u,ag as p,$ as _,a0 as h,a1 as c,a2 as x,ac as y}from"./index.ad7ad742.js";const k={name:"SigninView",data(){return{form:{email:"",password:""},loading:!1,emailRule:l=>!!l||"Email is required"}},computed:{loginSession(){return n.query().withAllRecursive().first()}},methods:{submit(){n.deleteAll(),this.loading=!0,n.signIn(this.form).then(l=>{const e=l.response.data,o=new Date;o.setDate(o.getDate()+7),e.expireDate=o.toISOString(),g.set("VITE_AUTH",e,"7d"),this.loading=!1}).catch(()=>{this.loading=!1})}},mounted(){}},D=c("div",{class:"text-h6"},"Sign In",-1);function B(l,e,o,I,a,t){return r(),S(y,null,{default:m(()=>[s(V,{class:"q-pa-md"},{default:m(()=>[s(w,{onSubmit:b(t.submit,["prevent"])},{default:m(()=>[D,t.loginSession?(r(),d(u,{key:1},[h(" Welcome "),c("b",null,x(t.loginSession.user.email),1)],64)):(r(),d(u,{key:0},[s(p,{modelValue:a.form.email,"onUpdate:modelValue":e[0]||(e[0]=i=>a.form.email=i),label:"Email",type:"email",outlined:"",dense:"",rules:[a.emailRule],autocomplete:"email",name:"email"},null,8,["modelValue","rules"]),s(p,{modelValue:a.form.password,"onUpdate:modelValue":e[1]||(e[1]=i=>a.form.password=i),label:"Password",type:"password",outlined:"",dense:"",autocomplete:"password",name:"password"},null,8,["modelValue"]),s(_,{type:"submit",block:"",class:"q-mt-md",loading:a.loading,label:"Submit",color:"primary"},null,8,["loading"])],64))]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var q=f(k,[["render",B]]);export{q as default};
