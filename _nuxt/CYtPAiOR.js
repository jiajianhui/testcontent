import{a as n,G as o,N as c,P as a,af as h,k as p,y as l,ad as u,s as d,q as m}from"./C31csa0S.js";const f="img",S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=l(u(d().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return m(e,t.src)}return t.src});return(s,e)=>(p(),c(h(a(f)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
