import{U as B,u as P,V as d,c as D,W as O,X as j,D as H,Y as M,e as R,H as V,Z as g,$ as E,a0 as N,P as S}from"./C31csa0S.js";const z=s=>s==="defer"||s===!1;function U(...s){var p;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[e,f,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=P(),w=f,C=()=>d.value,b=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server=a.server??!0,a.default=a.default??C,a.getCachedData=a.getCachedData??b,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??d.deep,a.dedupe=a.dedupe??"cancel";const u=a.getCachedData(e,t),h=u!=null;if(!t._asyncData[e]||!a.immediate){(p=t.payload._errors)[e]??(p[e]=d.errorValue);const i=a.deep?D:O;t._asyncData[e]={data:i(h?u:a.default()),pending:D(!h),error:j(t.payload._errors,e),status:D("idle"),_default:a.default}}const n={...t._asyncData[e]};delete n._default,n.refresh=n.execute=(i={})=>{if(t._asyncDataPromises[e]){if(z(i.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if(i._initial||t.isHydrating&&i._initial!==!1){const c=i._initial?u:a.getCachedData(e,t);if(c!=null)return Promise.resolve(c)}n.pending.value=!0,n.status.value="pending";const l=new Promise((c,o)=>{try{c(w(t))}catch(y){o(y)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[e];let o=c;a.transform&&(o=await a.transform(c)),a.pick&&(o=K(o,a.pick)),t.payload.data[e]=o,n.data.value=o,n.error.value=d.errorValue,n.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[e];n.error.value=N(c),n.data.value=S(a.default()),n.status.value="error"}).finally(()=>{l.cancelled||(n.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},n.clear=()=>x(t,e);const _=()=>n.refresh({_initial:!0}),m=a.server!==!1&&t.payload.serverRendered;{const i=H();if(i&&m&&a.immediate&&!i.sp&&(i.sp=[]),i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const o=i._nuxtOnBeforeMountCbs;M(()=>{o.forEach(y=>{y()}),o.splice(0,o.length)}),R(()=>o.splice(0,o.length))}m&&t.isHydrating&&(n.error.value||u!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):i&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(_):a.immediate&&_();const l=E();if(a.watch){const o=V(a.watch,()=>n.refresh());l&&g(o)}const c=t.hook("app:data:refresh",async o=>{(!o||o.includes(e))&&await n.refresh()});l&&g(c)}const v=Promise.resolve(t._asyncDataPromises[e]).then(()=>n);return Object.assign(v,n),v}async function Z(s){await new Promise(e=>B(e)),await P().hooks.callHookParallel("app:data:refresh",void 0)}function x(s,r){r in s.payload.data&&(s.payload.data[r]=void 0),r in s.payload._errors&&(s.payload._errors[r]=d.errorValue),s._asyncData[r]&&(s._asyncData[r].data.value=void 0,s._asyncData[r].error.value=d.errorValue,s._asyncData[r].pending.value=!1,s._asyncData[r].status.value="idle"),r in s._asyncDataPromises&&(s._asyncDataPromises[r]&&(s._asyncDataPromises[r].cancelled=!0),s._asyncDataPromises[r]=void 0)}function K(s,r){const e={};for(const f of r)e[f]=s[f];return e}const F={content:"2s2eBBawOZ"},I={content:"_content_content",info:"_content_info"},W={content:{fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},info:{fields:{}}};export{W as a,F as c,Z as r,I as t,U as u};
