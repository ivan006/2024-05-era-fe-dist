import{_ as a,af as m,o as d,c as p,a as l,w as n,f as w,e as f,h as u,b as V}from"./index-CW0TCznb.js";import{V as y}from"./VCard-B72eJAMq.js";import{a as h,V as t}from"./VForm-CrmPL6g3.js";const g={name:"JoinView",data(){return{entity:{},person:{},loading:!1,showPassword:!1,showCPassword:!1,errors:{},itemEmpty:{name:"",email:"",password:"",c_password:""}}},methods:{setErrors(o={}){for(const s in this.itemEmpty)o[s]?this.errors[s]=o[s][0]:this.errors[s]=null},join(){this.$refs.form.validate()&&(this.loading=!0,m.Register(this.entity).then(o=>{this.loading=!1}).catch(o=>{o.response&&o.response.data.errors&&this.setErrors(o.response.data.errors),this.loading=!1}))}},mounted(){this.setErrors()}},c=V("h1",{class:"text-center"},"Join",-1);function P(o,s,C,x,e,i){return d(),p("div",null,[l(y,{class:"pa-2"},{default:n(()=>[l(w,{width:"300",class:"mx-auto"},{default:n(()=>[l(h,{ref:"form"},{default:n(()=>[c,l(t,{modelValue:e.entity.name,"onUpdate:modelValue":s[0]||(s[0]=r=>e.entity.name=r),label:"Full Name",error:!!e.errors.name,"error-messages":e.errors.name},null,8,["modelValue","error","error-messages"]),l(t,{modelValue:e.entity.email,"onUpdate:modelValue":s[1]||(s[1]=r=>e.entity.email=r),label:"Email",error:!!e.errors.email,"error-messages":e.errors.email},null,8,["modelValue","error","error-messages"]),l(t,{modelValue:e.entity.password,"onUpdate:modelValue":s[2]||(s[2]=r=>e.entity.password=r),"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password","onClick:append":s[3]||(s[3]=r=>e.showPassword=!e.showPassword),label:"Password",error:!!e.errors.password,"error-messages":e.errors.password},null,8,["modelValue","append-icon","type","error","error-messages"]),l(t,{modelValue:e.entity.c_password,"onUpdate:modelValue":s[4]||(s[4]=r=>e.entity.c_password=r),"append-icon":e.showCPassword?"mdi-eye":"mdi-eye-off",type:e.showCPassword?"text":"password","onClick:append":s[5]||(s[5]=r=>e.showCPassword=!e.showCPassword),label:"Password",error:!!e.errors.c_password,"error-messages":e.errors.c_password},null,8,["modelValue","append-icon","type","error","error-messages"]),l(f,{block:"",class:"mt-2",loading:e.loading,onClick:i.join},{default:n(()=>[u(" Submit ")]),_:1},8,["loading","onClick"])]),_:1},512)]),_:1})]),_:1})])}const E=a(g,[["render",P]]);export{E as default};
