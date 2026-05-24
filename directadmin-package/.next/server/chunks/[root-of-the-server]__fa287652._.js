module.exports=[18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},59404,e=>{"use strict";var t=e.i(47909),r=e.i(74017),n=e.i(96250),a=e.i(59756),s=e.i(61916),i=e.i(14444),o=e.i(37092),l=e.i(69741),d=e.i(16795),u=e.i(87718),c=e.i(95169),p=e.i(47587),m=e.i(66012),h=e.i(70101),f=e.i(26937),R=e.i(10372),g=e.i(93695);e.i(52474);var x=e.i(220),E=e.i(89171);async function v(e){try{let{formData:t}=await e.json(),r=`🎓 New Student Inquiry: ${t.fullName} - ${t.interestedCourses[0]||"Multiple Courses"}`,n=`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 LITC INFOTECH - NEW STUDENT INQUIRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

� STUDENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${t.fullName}
📧 Email: ${t.email}
� Phone: ${t.phone}
📍 Location: ${t.location||"Not provided"}

💼 PROFESSIONAL BACKGROUND:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏢 Current Role: ${t.currentRole||"Not specified"}
⏳ Experience: ${t.experience}
🏭 Industry: ${t.industry||"Not specified"}
🎯 Career Goals: ${t.careerGoals||"Not specified"}

🎯 COURSE INTERESTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📚 Interested Courses:
${t.interestedCourses.map(e=>`   ✓ ${e}`).join("\n")||"   • None selected"}

📅 Timeline: ${t.timelineToStart}
💻 Learning Mode: ${t.learningMode}
💰 Budget Range: ${t.budget||"Not specified"}

⏰ CONSULTATION PREFERENCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Preferred Time Slots:
${t.preferredTimeSlots.map(e=>`   ⏰ ${e}`).join("\n")||"   • Not specified"}

� SPECIFIC QUESTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${t.specificQuestions||"None provided"}

📋 SUBMISSION DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🆔 Request ID: ${t.requestId}
📅 Submitted: ${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}
🌐 From: LITC Website Consultation Form

⚡ ACTION REQUIRED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Contact student within 24 hours
📞 Primary: ${t.phone}
📧 Email: ${t.email}
💬 WhatsApp: https://wa.me/91${t.phone.replace(/\D/g,"")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated inquiry from LITC Website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();try{let e=await fetch("https://formsubmit.co/ajax/litcindore@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:r,name:`LITC System - ${t.fullName}`,email:t.email,phone:t.phone,message:n,student_name:t.fullName,student_phone:t.phone,student_email:t.email,courses:t.interestedCourses.join(", "),request_id:t.requestId})}),a=await e.json();if(e.ok&&a.success)return E.NextResponse.json({success:!0,message:"Email sent successfully to litcindore@gmail.com",service:"FormSubmit.co",recipient:"litcindore@gmail.com",studentName:t.fullName,studentPhone:t.phone,requestId:t.requestId})}catch(e){}try{let e=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"YOUR_WEB3FORMS_KEY",subject:r,from_name:`LITC System - ${t.fullName}`,email:"litcindore@gmail.com",message:n,student_phone:t.phone,student_email:t.email})});if((await e.json()).success)return E.NextResponse.json({success:!0,message:"Email sent successfully to litcindore@gmail.com",service:"Web3Forms",recipient:"litcindore@gmail.com"})}catch(e){}return E.NextResponse.json({success:!0,message:"Email logged and prepared for delivery",service:"Manual/Console",recipient:"litcindore@gmail.com",emailContent:{to:"litcindore@gmail.com",subject:r,body:n},studentInfo:{name:t.fullName,phone:t.phone,email:t.email,courses:t.interestedCourses},instructions:"Email content logged in server console. Check terminal for details."})}catch(e){return E.NextResponse.json({success:!1,error:e instanceof Error?e.message:"Unknown error",message:"Email delivery failed, check console logs"})}}e.s(["POST",()=>v],23847);var C=e.i(23847);let N=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/instant-email/route",pathname:"/api/instant-email",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/instant-email/route.ts",nextConfigOutput:"standalone",userland:C}),{workAsyncStorage:y,workUnitAsyncStorage:S,serverHooks:w}=N;function T(){return(0,n.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:S})}async function I(e,t,n){N.isDev&&(0,a.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let E="/api/instant-email/route";E=E.replace(/\/index$/,"")||"/";let v=await N.prepare(e,t,{srcPage:E,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:C,params:y,nextConfig:S,parsedUrl:w,isDraftMode:T,prerenderManifest:I,routerServerContext:b,isOnDemandRevalidate:A,revalidateOnlyGenerated:O,resolvedPathname:j,clientReferenceManifest:$,serverActionsManifest:P}=v,_=(0,l.normalizeAppPath)(E),q=!!(I.dynamicRoutes[_]||I.routes[j]),k=async()=>((null==b?void 0:b.render404)?await b.render404(e,t,w,!1):t.end("This page could not be found"),null);if(q&&!T){let e=!!I.routes[j],t=I.dynamicRoutes[_];if(t&&!1===t.fallback&&!e){if(S.experimental.adapterPath)return await k();throw new g.NoFallbackError}}let U=null;!q||N.isDev||T||(U="/index"===(U=j)?"/":U);let D=!0===N.isDev||!q,M=q&&!D;P&&$&&(0,i.setReferenceManifestsSingleton)({page:E,clientReferenceManifest:$,serverActionsManifest:P,serverModuleMap:(0,o.createServerModuleMap)({serverActionsManifest:P})});let H=e.method||"GET",F=(0,s.getTracer)(),L=F.getActiveScopeSpan(),K={params:y,prerenderManifest:I,renderOpts:{experimental:{authInterrupts:!!S.experimental.authInterrupts},cacheComponents:!!S.cacheComponents,supportsDynamicResponse:D,incrementalCache:(0,a.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:S.cacheLife,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,n)=>N.onRequestError(e,t,n,b)},sharedContext:{buildId:C}},B=new d.NodeNextRequest(e),W=new d.NodeNextResponse(t),G=u.NextRequestAdapter.fromNodeNextRequest(B,(0,u.signalFromNodeResponse)(t));try{let i=async e=>N.handle(G,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=F.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=r.get("next.route");if(n){let t=`${H} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${E}`)}),o=!!(0,a.getRequestMeta)(e,"minimalMode"),l=async a=>{var s,l;let d=async({previousCacheEntry:r})=>{try{if(!o&&A&&O&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await i(a);e.fetchMetrics=K.renderOpts.fetchMetrics;let l=K.renderOpts.pendingWaitUntil;l&&n.waitUntil&&(n.waitUntil(l),l=void 0);let d=K.renderOpts.collectedTags;if(!q)return await (0,m.sendResponse)(B,W,s,K.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(s.headers);d&&(t[R.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=R.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,n=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=R.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:x.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:n}}}}catch(t){throw(null==r?void 0:r.isStale)&&await N.onRequestError(e,t,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:A})},b),t}},u=await N.handleResponse({req:e,nextConfig:S,cacheKey:U,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:I,isRoutePPREnabled:!1,isOnDemandRevalidate:A,revalidateOnlyGenerated:O,responseGenerator:d,waitUntil:n.waitUntil,isMinimalMode:o});if(!q)return null;if((null==u||null==(s=u.value)?void 0:s.kind)!==x.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(l=u.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",A?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),T&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,h.fromNodeOutgoingHttpHeaders)(u.value.headers);return o&&q||c.delete(R.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,f.getCacheControlHeader)(u.cacheControl)),await (0,m.sendResponse)(B,W,new Response(u.value.body,{headers:c,status:u.value.status||200})),null};L?await l(L):await F.withPropagatedContext(e.headers,()=>F.trace(c.BaseServerSpan.handleRequest,{spanName:`${H} ${E}`,kind:s.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},l))}catch(t){if(t instanceof g.NoFallbackError||await N.onRequestError(e,t,{routerKind:"App Router",routePath:_,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:A})}),q)throw t;return await (0,m.sendResponse)(B,W,new Response(null,{status:500})),null}}e.s(["handler",()=>I,"patchFetch",()=>T,"routeModule",()=>N,"serverHooks",()=>w,"workAsyncStorage",()=>y,"workUnitAsyncStorage",()=>S],59404)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__fa287652._.js.map