module.exports=[18622,(e,t,n)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,n)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,n)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},66970,e=>{"use strict";var t=e.i(47909),n=e.i(74017),a=e.i(96250),r=e.i(59756),o=e.i(61916),i=e.i(14444),s=e.i(37092),l=e.i(69741),d=e.i(16795),c=e.i(87718),u=e.i(95169),p=e.i(47587),m=e.i(66012),h=e.i(70101),E=e.i(26937),x=e.i(10372),v=e.i(93695);e.i(52474);var R=e.i(220),g=e.i(89171);async function f(e){try{let t=await e.json(),n=parseInt(t.course?.price.replace(/[^0-9]/g,"")||"0"),a="full"===t.paymentPlan?.05*n:0,r=n-a,o=`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚨 NEW ENROLLMENT - ACTION REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ENROLLMENT ID: ${t.enrollmentId}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STUDENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${t.name}
Email: ${t.email}
Phone: ${t.phone}
Education: ${t.education}
Experience: ${t.experience}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COURSE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Course: ${t.course?.name}
Code: ${t.course?.code}
Duration: ${t.course?.duration}
Level: ${t.course?.level}
Batch: ${t.batchTiming}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAYMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Amount: ₹${r.toLocaleString("en-IN")}
Payment Plan: ${t.paymentPlan}
Referral: ${t.referralSource}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ IMPORTANT - NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SEND PAYMENT EMAIL TO STUDENT
   Email: ${t.email}
   
2. Include these payment details:
   UPI ID: yravi8804@axl
   Bank: Union Bank Of India - 0942
   Amount: ₹${r.toLocaleString("en-IN")}
   Enrollment ID: ${t.enrollmentId}

3. Ask student to send payment screenshot to:
   WhatsApp: +91-9522220892
   Email: litcindore@gmail.com

4. After payment verification:
   - Send confirmation email
   - Add to WhatsApp group
   - Provide course access

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PAYMENT EMAIL TEMPLATE FOR STUDENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Subject: Payment Required - ${t.course?.name}

Dear ${t.name},

Thank you for enrolling in ${t.course?.name}!

Enrollment ID: ${t.enrollmentId}

PAYMENT DETAILS:
Amount: ₹${r.toLocaleString("en-IN")}
UPI ID: yravi8804@axl
Bank: Union Bank Of India - 0942

STEPS:
1. Open UPI app (Paytm/PhonePe/GPay)
2. Send money to: yravi8804@axl
3. Amount: ₹${r.toLocaleString("en-IN")}
4. Add remark: ${t.enrollmentId}
5. Take screenshot after payment

SEND PAYMENT PROOF:
WhatsApp: +91-9522220892
Email: litcindore@gmail.com

You will receive confirmation within 2 hours.

For queries: +91-9425094250

Best Regards,
LITC Institute

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted at: ${new Date(t.submittedAt).toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}
    `.trim(),i=await fetch("https://formsubmit.co/ajax/litcindore@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`🚨 New Enrollment: ${t.name} - ${t.enrollmentId}`,_template:"box",_captcha:"false",Enrollment_ID:t.enrollmentId,Student_Name:t.name,Student_Email:t.email,Student_Phone:t.phone,Course:t.course?.name,Amount:`₹${r.toLocaleString("en-IN")}`,Batch:t.batchTiming,Message:o})}),s=!1;try{await i.text(),s=i.ok}catch(e){s=i.ok}return g.NextResponse.json({success:!0,enrollmentId:t.enrollmentId,message:"Enrollment received successfully!",emailStatus:{admin:s,student:"pending_manual",note:"Admin has been notified to send payment email to student"},nextSteps:["Our team has received your enrollment","You will receive payment details via email within 30 minutes","Check your email: "+t.email,"For immediate assistance, contact:","  WhatsApp: +91-9522220892","  Phone: +91-9425094250","  Email: litcindore@gmail.com"],paymentInfo:{upiId:"yravi8804@axl",bank:"Union Bank Of India - 0942",amount:`₹${r.toLocaleString("en-IN")}`,enrollmentId:t.enrollmentId},contact:{whatsapp:"+91-9522220892",phone:"+91-9425094250",email:"litcindore@gmail.com"}})}catch(e){return g.NextResponse.json({success:!1,error:"Processing failed",message:"Please contact us directly to complete enrollment",contact:{phone:"+91-9425094250",whatsapp:"+91-9522220892",email:"litcindore@gmail.com"}},{status:500})}}e.s(["POST",()=>f],10063);var y=e.i(10063);let A=new t.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/course-enrollment-v3/route",pathname:"/api/course-enrollment-v3",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/course-enrollment-v3/route.ts",nextConfigOutput:"standalone",userland:y}),{workAsyncStorage:I,workUnitAsyncStorage:T,serverHooks:N}=A;function S(){return(0,a.patchFetch)({workAsyncStorage:I,workUnitAsyncStorage:T})}async function P(e,t,a){A.isDev&&(0,r.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let g="/api/course-enrollment-v3/route";g=g.replace(/\/index$/,"")||"/";let f=await A.prepare(e,t,{srcPage:g,multiZoneDraftMode:!1});if(!f)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:y,params:I,nextConfig:T,parsedUrl:N,isDraftMode:S,prerenderManifest:P,routerServerContext:w,isOnDemandRevalidate:C,revalidateOnlyGenerated:b,resolvedPathname:O,clientReferenceManifest:$,serverActionsManifest:k}=f,D=(0,l.normalizeAppPath)(g),M=!!(P.dynamicRoutes[D]||P.routes[O]),_=async()=>((null==w?void 0:w.render404)?await w.render404(e,t,N,!1):t.end("This page could not be found"),null);if(M&&!S){let e=!!P.routes[O],t=P.dynamicRoutes[D];if(t&&!1===t.fallback&&!e){if(T.experimental.adapterPath)return await _();throw new v.NoFallbackError}}let U=null;!M||A.isDev||S||(U="/index"===(U=O)?"/":U);let j=!0===A.isDev||!M,L=M&&!j;k&&$&&(0,i.setReferenceManifestsSingleton)({page:g,clientReferenceManifest:$,serverActionsManifest:k,serverModuleMap:(0,s.createServerModuleMap)({serverActionsManifest:k})});let q=e.method||"GET",H=(0,o.getTracer)(),B=H.getActiveScopeSpan(),F={params:I,prerenderManifest:P,renderOpts:{experimental:{authInterrupts:!!T.experimental.authInterrupts},cacheComponents:!!T.cacheComponents,supportsDynamicResponse:j,incrementalCache:(0,r.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:T.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,n,a)=>A.onRequestError(e,t,a,w)},sharedContext:{buildId:y}},K=new d.NodeNextRequest(e),W=new d.NodeNextResponse(t),Y=c.NextRequestAdapter.fromNodeNextRequest(K,(0,c.signalFromNodeResponse)(t));try{let i=async e=>A.handle(Y,F).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let n=H.getRootSpanAttributes();if(!n)return;if(n.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${n.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=n.get("next.route");if(a){let t=`${q} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${q} ${g}`)}),s=!!(0,r.getRequestMeta)(e,"minimalMode"),l=async r=>{var o,l;let d=async({previousCacheEntry:n})=>{try{if(!s&&C&&b&&!n)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=await i(r);e.fetchMetrics=F.renderOpts.fetchMetrics;let l=F.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let d=F.renderOpts.collectedTags;if(!M)return await (0,m.sendResponse)(K,W,o,F.renderOpts.pendingWaitUntil),null;{let e=await o.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(o.headers);d&&(t[x.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let n=void 0!==F.renderOpts.collectedRevalidate&&!(F.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&F.renderOpts.collectedRevalidate,a=void 0===F.renderOpts.collectedExpire||F.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:F.renderOpts.collectedExpire;return{value:{kind:R.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:n,expire:a}}}}catch(t){throw(null==n?void 0:n.isStale)&&await A.onRequestError(e,t,{routerKind:"App Router",routePath:g,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:L,isOnDemandRevalidate:C})},w),t}},c=await A.handleResponse({req:e,nextConfig:T,cacheKey:U,routeKind:n.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:P,isRoutePPREnabled:!1,isOnDemandRevalidate:C,revalidateOnlyGenerated:b,responseGenerator:d,waitUntil:a.waitUntil,isMinimalMode:s});if(!M)return null;if((null==c||null==(o=c.value)?void 0:o.kind)!==R.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",C?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),S&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let u=(0,h.fromNodeOutgoingHttpHeaders)(c.value.headers);return s&&M||u.delete(x.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||u.get("Cache-Control")||u.set("Cache-Control",(0,E.getCacheControlHeader)(c.cacheControl)),await (0,m.sendResponse)(K,W,new Response(c.value.body,{headers:u,status:c.value.status||200})),null};B?await l(B):await H.withPropagatedContext(e.headers,()=>H.trace(u.BaseServerSpan.handleRequest,{spanName:`${q} ${g}`,kind:o.SpanKind.SERVER,attributes:{"http.method":q,"http.target":e.url}},l))}catch(t){if(t instanceof v.NoFallbackError||await A.onRequestError(e,t,{routerKind:"App Router",routePath:D,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:L,isOnDemandRevalidate:C})}),M)throw t;return await (0,m.sendResponse)(K,W,new Response(null,{status:500})),null}}e.s(["handler",()=>P,"patchFetch",()=>S,"routeModule",()=>A,"serverHooks",()=>N,"workAsyncStorage",()=>I,"workUnitAsyncStorage",()=>T],66970)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__397ff9a8._.js.map