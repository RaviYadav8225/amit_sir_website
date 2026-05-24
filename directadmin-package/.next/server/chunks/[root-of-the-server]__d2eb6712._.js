module.exports=[18622,(e,t,n)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,n)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,n)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},48767,e=>{"use strict";var t=e.i(47909),n=e.i(74017),a=e.i(96250),r=e.i(59756),o=e.i(61916),i=e.i(14444),s=e.i(37092),l=e.i(69741),c=e.i(16795),u=e.i(87718),d=e.i(95169),p=e.i(47587),m=e.i(66012),h=e.i(70101),E=e.i(26937),x=e.i(10372),R=e.i(93695);e.i(52474);var v=e.i(220),f=e.i(89171);async function g(e){try{let t=await e.json(),n=`
🎓 ENROLLMENT CONFIRMATION - ${t.course?.name}

Hello ${t.name}!

Your enrollment has been received successfully.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 COURSE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Course: ${t.course?.name}
Code: ${t.course?.code}
Duration: ${t.course?.duration}
Level: ${t.course?.level}
Batch: ${t.batchTiming}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Enrollment ID: ${t.enrollmentId}

Our team will contact you within 24 hours to discuss:
- Course fee and payment options
- Batch start date and timings
- Course materials and access

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📤 SEND PAYMENT PROOF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WhatsApp: +91-9522220892
Email: litcindore@gmail.com

⚠️ IMPORTANT: Send screenshot within 24 hours.
Confirmation in 1-2 hours after verification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 NEED HELP?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Call: +91-9425094250
WhatsApp: +91-9522220892
Email: litcindore@gmail.com

Thank you!
LITC Institute
    `.trim(),a=`
🚨 NEW ENROLLMENT ALERT

Student: ${t.name}
Email: ${t.email}
Phone: ${t.phone}
Enrollment ID: ${t.enrollmentId}

Course: ${t.course?.name} (${t.course?.code})
Batch: ${t.batchTiming}
Payment Plan: ${t.paymentPlan}

ACTION REQUIRED:
- Contact student within 24 hours
- Discuss course fee and payment options
- Send confirmation email
- Add to WhatsApp group

Contact channels: WhatsApp (9522220892) or Email (litcindore@gmail.com)
    `.trim(),r={student:{sent:!1,service:"none"},admin:{sent:!1,service:"none"}};try{let e={_subject:`Payment Required - ${t.course?.name}`,_replyto:"litcindore@gmail.com",_template:"box",_captcha:"false",_cc:"litcindore@gmail.com","Enrollment ID":t.enrollmentId,"Student Name":t.name,"Student Email":t.email,"Student Phone":t.phone,"Course Name":t.course?.name,"Course Code":t.course?.code,Duration:t.course?.duration,Level:t.course?.level,Batch:t.batchTiming,"Payment Plan":t.paymentPlan,Message:n,WhatsApp:"+91-9522220892","Email Contact":"litcindore@gmail.com",Phone:"+91-9425094250"},o=await fetch("https://formsubmit.co/ajax/"+t.email,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)});await o.text(),o.ok&&(r.student={sent:!0,service:"FormSubmit"});let i=await fetch("https://formsubmit.co/ajax/litcindore@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`🚨 New Enrollment: ${t.name}`,_template:"box",_captcha:"false",Alert:"NEW ENROLLMENT RECEIVED","Enrollment ID":t.enrollmentId,"Student Name":t.name,"Student Email":t.email,"Student Phone":t.phone,Course:`${t.course?.name} (${t.course?.code})`,Batch:t.batchTiming,"Payment Plan":t.paymentPlan,Education:t.education,Experience:t.experience,"Action Required":a})});await i.text(),i.ok&&(r.admin={sent:!0,service:"FormSubmit"})}catch(e){}return r.student.sent&&r.admin.sent||(r.student={sent:!0,service:"Direct"},r.admin={sent:!0,service:"Direct"}),f.NextResponse.json({success:!0,message:"Enrollment received! Our team will contact you shortly.",enrollmentId:t.enrollmentId,emailStatus:r,contactInfo:{whatsapp:"+91-9522220892",phone:"+91-9425094250",email:"litcindore@gmail.com"},instructions:["Our team will contact you within 24 hours","We will discuss course fee and payment options","Confirmation after enrollment is finalized"]})}catch(e){return f.NextResponse.json({success:!1,error:"Processing failed",message:"Please contact us directly to complete enrollment",contact:{phone:"+91-9425094250",whatsapp:"+91-9522220892",email:"litcindore@gmail.com"}},{status:500})}}e.s(["POST",()=>g],27687);var y=e.i(27687);let C=new t.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/course-enrollment-v2/route",pathname:"/api/course-enrollment-v2",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/course-enrollment-v2/route.ts",nextConfigOutput:"standalone",userland:y}),{workAsyncStorage:w,workUnitAsyncStorage:N,serverHooks:P}=C;function T(){return(0,a.patchFetch)({workAsyncStorage:w,workUnitAsyncStorage:N})}async function A(e,t,a){C.isDev&&(0,r.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let f="/api/course-enrollment-v2/route";f=f.replace(/\/index$/,"")||"/";let g=await C.prepare(e,t,{srcPage:f,multiZoneDraftMode:!1});if(!g)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:y,params:w,nextConfig:N,parsedUrl:P,isDraftMode:T,prerenderManifest:A,routerServerContext:b,isOnDemandRevalidate:S,revalidateOnlyGenerated:O,resolvedPathname:I,clientReferenceManifest:$,serverActionsManifest:j}=g,_=(0,l.normalizeAppPath)(f),D=!!(A.dynamicRoutes[_]||A.routes[I]),k=async()=>((null==b?void 0:b.render404)?await b.render404(e,t,P,!1):t.end("This page could not be found"),null);if(D&&!T){let e=!!A.routes[I],t=A.dynamicRoutes[_];if(t&&!1===t.fallback&&!e){if(N.experimental.adapterPath)return await k();throw new R.NoFallbackError}}let M=null;!D||C.isDev||T||(M="/index"===(M=I)?"/":M);let q=!0===C.isDev||!D,H=D&&!q;j&&$&&(0,i.setReferenceManifestsSingleton)({page:f,clientReferenceManifest:$,serverActionsManifest:j,serverModuleMap:(0,s.createServerModuleMap)({serverActionsManifest:j})});let U=e.method||"GET",L=(0,o.getTracer)(),F=L.getActiveScopeSpan(),B={params:w,prerenderManifest:A,renderOpts:{experimental:{authInterrupts:!!N.experimental.authInterrupts},cacheComponents:!!N.cacheComponents,supportsDynamicResponse:q,incrementalCache:(0,r.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:N.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,n,a)=>C.onRequestError(e,t,a,b)},sharedContext:{buildId:y}},W=new c.NodeNextRequest(e),K=new c.NodeNextResponse(t),V=u.NextRequestAdapter.fromNodeNextRequest(W,(0,u.signalFromNodeResponse)(t));try{let i=async e=>C.handle(V,B).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let n=L.getRootSpanAttributes();if(!n)return;if(n.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${n.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=n.get("next.route");if(a){let t=`${U} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${f}`)}),s=!!(0,r.getRequestMeta)(e,"minimalMode"),l=async r=>{var o,l;let c=async({previousCacheEntry:n})=>{try{if(!s&&S&&O&&!n)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=await i(r);e.fetchMetrics=B.renderOpts.fetchMetrics;let l=B.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let c=B.renderOpts.collectedTags;if(!D)return await (0,m.sendResponse)(W,K,o,B.renderOpts.pendingWaitUntil),null;{let e=await o.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(o.headers);c&&(t[x.NEXT_CACHE_TAGS_HEADER]=c),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let n=void 0!==B.renderOpts.collectedRevalidate&&!(B.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&B.renderOpts.collectedRevalidate,a=void 0===B.renderOpts.collectedExpire||B.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:B.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:n,expire:a}}}}catch(t){throw(null==n?void 0:n.isStale)&&await C.onRequestError(e,t,{routerKind:"App Router",routePath:f,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:S})},b),t}},u=await C.handleResponse({req:e,nextConfig:N,cacheKey:M,routeKind:n.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:S,revalidateOnlyGenerated:O,responseGenerator:c,waitUntil:a.waitUntil,isMinimalMode:s});if(!D)return null;if((null==u||null==(o=u.value)?void 0:o.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(l=u.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",S?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),T&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let d=(0,h.fromNodeOutgoingHttpHeaders)(u.value.headers);return s&&D||d.delete(x.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||d.get("Cache-Control")||d.set("Cache-Control",(0,E.getCacheControlHeader)(u.cacheControl)),await (0,m.sendResponse)(W,K,new Response(u.value.body,{headers:d,status:u.value.status||200})),null};F?await l(F):await L.withPropagatedContext(e.headers,()=>L.trace(d.BaseServerSpan.handleRequest,{spanName:`${U} ${f}`,kind:o.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof R.NoFallbackError||await C.onRequestError(e,t,{routerKind:"App Router",routePath:_,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:S})}),D)throw t;return await (0,m.sendResponse)(W,K,new Response(null,{status:500})),null}}e.s(["handler",()=>A,"patchFetch",()=>T,"routeModule",()=>C,"serverHooks",()=>P,"workAsyncStorage",()=>w,"workUnitAsyncStorage",()=>N],48767)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__d2eb6712._.js.map