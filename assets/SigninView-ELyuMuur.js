import{_ as f,ac as l,ab as p,o as i,c as d,a as s,w as o,f as V,i as g,e as h,h as m,ae as b,F as w,b as c,t as S}from"./index-d1aiMcR6.js";import{V as _}from"./VCard-DPScKTh4.js";import{V as u,a as x}from"./VForm-DM7EXgbe.js";const k={name:"SigninView",components:{},data(){return{form:{email:"",password:""},loading:!1}},methods:{submit(){l.deleteAll(),this.loading=!0,l.signIn(this.form).then(n=>{p.set("VITE_AUTH",n.response.data,"2h"),this.loading=!1}).catch(()=>{this.loading=!1})}},computed:{loginSession(){return l.query().withAllRecursive().first()}},mounted(){}},y=c("h1",{class:"text-center"},"Sign In",-1);function v(n,a,B,F,e,r){return i(),d("div",null,[s(_,{class:"pa-2"},{default:o(()=>[s(V,{width:"300",class:"mx-auto"},{default:o(()=>[y,r.loginSession?(i(),d(w,{key:1},[m(" Welcome "),c("b",null,S(this.loginSession.user.email),1)],64)):(i(),g(x,{key:0,onSubmit:b(r.submit,["prevent"])},{default:o(()=>[s(u,{required:"",modelValue:e.form.email,"onUpdate:modelValue":a[0]||(a[0]=t=>e.form.email=t),label:"Email",type:"email",variant:"underlined"},null,8,["modelValue"]),s(u,{modelValue:e.form.password,"onUpdate:modelValue":a[1]||(a[1]=t=>e.form.password=t),label:"Password",type:"password",variant:"underlined"},null,8,["modelValue"]),s(h,{type:"submit",block:"",class:"mt-2",loading:e.loading},{default:o(()=>[m("Submit ")]),_:1},8,["loading"])]),_:1},8,["onSubmit"]))]),_:1})]),_:1})])}const E=f(k,[["render",v]]);export{E as default};
