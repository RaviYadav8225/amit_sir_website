module.exports=[18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},28037,e=>{"use strict";var t=e.i(47909),r=e.i(74017),n=e.i(96250),a=e.i(59756),o=e.i(61916),i=e.i(14444),s=e.i(37092),l=e.i(69741),d=e.i(16795),u=e.i(87718),c=e.i(95169),p=e.i(47587),m=e.i(66012),h=e.i(70101),E=e.i(26937),R=e.i(10372),g=e.i(93695);e.i(52474);var x=e.i(220),f=e.i(89171);async function C(e){try{let{formData:t}=await e.json(),r=`🎓 URGENT: New Student Inquiry - ${t.fullName}`,n=`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 LITC INFOTECH - NEW STUDENT CONSULTATION REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ IMMEDIATE ACTION REQUIRED - CONTACT STUDENT WITHIN 24 HOURS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 STUDENT CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Full Name: ${t.fullName}
📧 Email: ${t.email}
📱 Phone: ${t.phone}
📍 Location: ${t.location||"Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 PROFESSIONAL BACKGROUND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Current Role: ${t.currentRole||"Not specified"}
⏳ Experience Level: ${t.experience}
🏭 Industry: ${t.industry||"Not specified"}
🎯 Career Goals: ${t.careerGoals||"Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 COURSE INTERESTS & PREFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 Interested Courses:
${t.interestedCourses.map((e,t)=>`   ${t+1}. ✓ ${e}`).join("\n")||"   • No courses selected"}

📅 Timeline to Start: ${t.timelineToStart}
💻 Learning Mode: ${t.learningMode}
💰 Budget Range: ${t.budget||"Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ PREFERRED CONSULTATION TIME SLOTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${t.preferredTimeSlots.map(e=>`   ⏰ ${e}`).join("\n")||"   • Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 SPECIFIC QUESTIONS/REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${t.specificQuestions||"No specific questions provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 SUBMISSION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🆔 Request ID: ${t.requestId}
📅 Submitted At: ${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata",dateStyle:"full",timeStyle:"long"})}
🌐 Source: LITC Website Consultation Form

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ IMMEDIATE ACTION ITEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Call student at: ${t.phone}
✅ Send email to: ${t.email}
✅ WhatsApp message: https://wa.me/91${t.phone.replace(/\D/g,"")}
✅ Schedule consultation within preferred time slots
✅ Prepare personalized course recommendations
✅ Send course brochures and pricing details

⏰ Response Target: Within 24 hours (ideally within 2-4 hours)
🎯 Conversion Priority: HIGH - Website Form Lead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated notification from LITC Infotech Website.
For support, contact: +919522220892 | litcindore@gmail.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim(),a=`mailto:litcindore@gmail.com?subject=${encodeURIComponent(r)}&body=${encodeURIComponent(n)}`;return t.fullName.padEnd(47),t.phone.padEnd(49),t.email.padEnd(49),(t.interestedCourses[0]||"Multiple").substring(0,47).padEnd(47),(t.budget||"Not specified").padEnd(47),t.timelineToStart.padEnd(45),f.NextResponse.json({success:!0,message:"Email content generated and logged",service:"Direct/Console Logging",recipient:"litcindore@gmail.com",mailtoLink:a,studentInfo:{name:t.fullName,phone:t.phone,email:t.email,courses:t.interestedCourses,budget:t.budget,requestId:t.requestId},instructions:"Email content logged in server console. Check terminal for complete details.",consoleLogged:!0})}catch(e){return f.NextResponse.json({success:!1,error:e instanceof Error?e.message:"Unknown error"})}}e.s(["POST",()=>C],16922);var N=e.i(16922);let T=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/send-email-direct/route",pathname:"/api/send-email-direct",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/send-email-direct/route.ts",nextConfigOutput:"standalone",userland:N}),{workAsyncStorage:v,workUnitAsyncStorage:S,serverHooks:I}=T;function w(){return(0,n.patchFetch)({workAsyncStorage:v,workUnitAsyncStorage:S})}async function y(e,t,n){T.isDev&&(0,a.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let f="/api/send-email-direct/route";f=f.replace(/\/index$/,"")||"/";let C=await T.prepare(e,t,{srcPage:f,multiZoneDraftMode:!1});if(!C)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:N,params:v,nextConfig:S,parsedUrl:I,isDraftMode:w,prerenderManifest:y,routerServerContext:A,isOnDemandRevalidate:O,revalidateOnlyGenerated:b,resolvedPathname:$,clientReferenceManifest:U,serverActionsManifest:P}=C,M=(0,l.normalizeAppPath)(f),q=!!(y.dynamicRoutes[M]||y.routes[$]),D=async()=>((null==A?void 0:A.render404)?await A.render404(e,t,I,!1):t.end("This page could not be found"),null);if(q&&!w){let e=!!y.routes[$],t=y.dynamicRoutes[M];if(t&&!1===t.fallback&&!e){if(S.experimental.adapterPath)return await D();throw new g.NoFallbackError}}let k=null;!q||T.isDev||w||(k="/index"===(k=$)?"/":k);let j=!0===T.isDev||!q,H=q&&!j;P&&U&&(0,i.setReferenceManifestsSingleton)({page:f,clientReferenceManifest:U,serverActionsManifest:P,serverModuleMap:(0,s.createServerModuleMap)({serverActionsManifest:P})});let L=e.method||"GET",_=(0,o.getTracer)(),F=_.getActiveScopeSpan(),K={params:v,prerenderManifest:y,renderOpts:{experimental:{authInterrupts:!!S.experimental.authInterrupts},cacheComponents:!!S.cacheComponents,supportsDynamicResponse:j,incrementalCache:(0,a.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:S.cacheLife,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,n)=>T.onRequestError(e,t,n,A)},sharedContext:{buildId:N}},W=new d.NodeNextRequest(e),B=new d.NodeNextResponse(t),G=u.NextRequestAdapter.fromNodeNextRequest(W,(0,u.signalFromNodeResponse)(t));try{let i=async e=>T.handle(G,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=_.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=r.get("next.route");if(n){let t=`${L} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${L} ${f}`)}),s=!!(0,a.getRequestMeta)(e,"minimalMode"),l=async a=>{var o,l;let d=async({previousCacheEntry:r})=>{try{if(!s&&O&&b&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=await i(a);e.fetchMetrics=K.renderOpts.fetchMetrics;let l=K.renderOpts.pendingWaitUntil;l&&n.waitUntil&&(n.waitUntil(l),l=void 0);let d=K.renderOpts.collectedTags;if(!q)return await (0,m.sendResponse)(W,B,o,K.renderOpts.pendingWaitUntil),null;{let e=await o.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(o.headers);d&&(t[R.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=R.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,n=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=R.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:x.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:n}}}}catch(t){throw(null==r?void 0:r.isStale)&&await T.onRequestError(e,t,{routerKind:"App Router",routePath:f,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:O})},A),t}},u=await T.handleResponse({req:e,nextConfig:S,cacheKey:k,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:y,isRoutePPREnabled:!1,isOnDemandRevalidate:O,revalidateOnlyGenerated:b,responseGenerator:d,waitUntil:n.waitUntil,isMinimalMode:s});if(!q)return null;if((null==u||null==(o=u.value)?void 0:o.kind)!==x.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(l=u.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",O?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),w&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,h.fromNodeOutgoingHttpHeaders)(u.value.headers);return s&&q||c.delete(R.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,E.getCacheControlHeader)(u.cacheControl)),await (0,m.sendResponse)(W,B,new Response(u.value.body,{headers:c,status:u.value.status||200})),null};F?await l(F):await _.withPropagatedContext(e.headers,()=>_.trace(c.BaseServerSpan.handleRequest,{spanName:`${L} ${f}`,kind:o.SpanKind.SERVER,attributes:{"http.method":L,"http.target":e.url}},l))}catch(t){if(t instanceof g.NoFallbackError||await T.onRequestError(e,t,{routerKind:"App Router",routePath:M,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:O})}),q)throw t;return await (0,m.sendResponse)(W,B,new Response(null,{status:500})),null}}e.s(["handler",()=>y,"patchFetch",()=>w,"routeModule",()=>T,"serverHooks",()=>I,"workAsyncStorage",()=>v,"workUnitAsyncStorage",()=>S],28037)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__d0fee545._.js.map