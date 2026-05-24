module.exports=[18622,(e,t,n)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,n)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,n)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},13496,e=>{"use strict";var t=e.i(47909),n=e.i(74017),r=e.i(96250),a=e.i(59756),o=e.i(61916),i=e.i(14444),s=e.i(37092),l=e.i(69741),d=e.i(16795),c=e.i(87718),u=e.i(95169),p=e.i(47587),m=e.i(66012),h=e.i(70101),E=e.i(26937),f=e.i(10372),y=e.i(93695);e.i(52474);var g=e.i(220),x=e.i(89171);async function R(e){try{let t=await e.json(),n=parseInt(t.course?.price.replace(/[^0-9]/g,"")||"0"),r="full"===t.paymentPlan?.05*n:0,a=n-r,o=`
Dear ${t.name},

Thank you for enrolling with LITC Institute! 🎓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENROLLMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Enrollment ID: ${t.enrollmentId}
Course: ${t.course?.name}
Course Code: ${t.course?.code}
Duration: ${t.course?.duration}
Level: ${t.course?.level}
Batch Timing: ${t.batchTiming}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAYMENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total Amount: ₹${a.toLocaleString("en-IN")}
${"full"===t.paymentPlan?"(5% discount applied for full payment)":""}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
UPI PAYMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

UPI ID: yravi8804@axl
Bank Name: Union Bank Of India
Account: 0942

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAYMENT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Open any UPI app (Paytm/PhonePe/Google Pay)
2. Select "Send Money to UPI ID"
3. Enter UPI ID: yravi8804@axl
4. Enter Amount: ₹${a.toLocaleString("en-IN")}
5. Add Remark: ${t.enrollmentId}
6. Complete payment
7. Take screenshot of payment confirmation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEND PAYMENT PROOF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After payment, send screenshot to:

📱 WhatsApp: +91-9522220892
   (Click to send: https://wa.me/919522220892)

📧 Email: litcindore@gmail.com

⚠️ IMPORTANT:
- Send payment proof within 24 hours
- Include Enrollment ID: ${t.enrollmentId}
- You will receive confirmation within 2 hours

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEED HELP?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 Call: +91-9425094250
📱 WhatsApp: +91-9522220892
📧 Email: litcindore@gmail.com

Thank you for choosing LITC Institute!
We look forward to your learning journey with us.

Best Regards,
LITC Institute Team
    `.trim(),i=`
NEW ENROLLMENT ALERT! 🚨

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STUDENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${t.name}
Email: ${t.email}
Phone: ${t.phone}
Education: ${t.education}
Experience: ${t.experience}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENROLLMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Enrollment ID: ${t.enrollmentId}
Course: ${t.course?.name}
Course Code: ${t.course?.code}
Duration: ${t.course?.duration}
Batch Timing: ${t.batchTiming}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAYMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Amount: ₹${a.toLocaleString("en-IN")}
Payment Plan: ${t.paymentPlan}
Referral Source: ${t.referralSource}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTION REQUIRED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Wait for payment screenshot from student
2. Verify payment in UPI (yravi8804@axl)
3. Send enrollment confirmation email
4. Add student to WhatsApp group
5. Provide course access credentials

Payment will be received via:
- WhatsApp: +91-9522220892
- Email: litcindore@gmail.com

Submitted at: ${new Date(t.submittedAt).toLocaleString("en-IN")}
    `.trim(),s={student:!1,admin:!1,method:"none"};try{(await fetch("https://formspree.io/f/xanyqvbp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,subject:`Payment Required - ${t.course?.name} | Enrollment ID: ${t.enrollmentId}`,message:o,_replyto:"litcindore@gmail.com",enrollmentId:t.enrollmentId})})).ok&&(s.student=!0,s.method="Formspree"),(await fetch("https://formspree.io/f/xanyqvbp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"litcindore@gmail.com",subject:`🚨 New Enrollment: ${t.name} | ${t.enrollmentId}`,message:i,enrollmentId:t.enrollmentId})})).ok&&(s.admin=!0)}catch(e){}if(!s.admin)try{(await fetch("https://formsubmit.co/ajax/litcindore@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`🚨 New Enrollment: ${t.name}`,_template:"box",_captcha:"false",message:i,studentEmail:t.email,enrollmentId:t.enrollmentId})})).ok&&(s.admin=!0)}catch(e){}return x.NextResponse.json({success:!0,emailSent:{student:s.student,admin:s.admin,method:s.method},enrollmentId:t.enrollmentId,message:s.student?"Payment instructions sent to your email!":"Enrollment received! Check your email or contact us directly.",paymentInfo:{upiId:"yravi8804@axl",bank:"Union Bank Of India - 0942",amount:`₹${a.toLocaleString("en-IN")}`,whatsapp:"+91-9522220892",email:"litcindore@gmail.com",phone:"+91-9425094250"}})}catch(e){return x.NextResponse.json({success:!1,error:"Email sending failed",message:"Please contact us directly",contact:{phone:"+91-9425094250",whatsapp:"+91-9522220892",email:"litcindore@gmail.com"}},{status:500})}}e.s(["POST",()=>R],53063);var I=e.i(53063);let v=new t.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/send-enrollment-email/route",pathname:"/api/send-enrollment-email",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/send-enrollment-email/route.ts",nextConfigOutput:"standalone",userland:I}),{workAsyncStorage:T,workUnitAsyncStorage:N,serverHooks:w}=v;function P(){return(0,r.patchFetch)({workAsyncStorage:T,workUnitAsyncStorage:N})}async function A(e,t,r){v.isDev&&(0,a.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let x="/api/send-enrollment-email/route";x=x.replace(/\/index$/,"")||"/";let R=await v.prepare(e,t,{srcPage:x,multiZoneDraftMode:!1});if(!R)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:I,params:T,nextConfig:N,parsedUrl:w,isDraftMode:P,prerenderManifest:A,routerServerContext:C,isOnDemandRevalidate:S,revalidateOnlyGenerated:b,resolvedPathname:O,clientReferenceManifest:$,serverActionsManifest:k}=R,D=(0,l.normalizeAppPath)(x),j=!!(A.dynamicRoutes[D]||A.routes[O]),M=async()=>((null==C?void 0:C.render404)?await C.render404(e,t,w,!1):t.end("This page could not be found"),null);if(j&&!P){let e=!!A.routes[O],t=A.dynamicRoutes[D];if(t&&!1===t.fallback&&!e){if(N.experimental.adapterPath)return await M();throw new y.NoFallbackError}}let L=null;!j||v.isDev||P||(L="/index"===(L=O)?"/":L);let U=!0===v.isDev||!j,_=j&&!U;k&&$&&(0,i.setReferenceManifestsSingleton)({page:x,clientReferenceManifest:$,serverActionsManifest:k,serverModuleMap:(0,s.createServerModuleMap)({serverActionsManifest:k})});let q=e.method||"GET",H=(0,o.getTracer)(),F=H.getActiveScopeSpan(),B={params:T,prerenderManifest:A,renderOpts:{experimental:{authInterrupts:!!N.experimental.authInterrupts},cacheComponents:!!N.cacheComponents,supportsDynamicResponse:U,incrementalCache:(0,a.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:N.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,n,r)=>v.onRequestError(e,t,r,C)},sharedContext:{buildId:I}},W=new d.NodeNextRequest(e),K=new d.NodeNextResponse(t),Y=c.NextRequestAdapter.fromNodeNextRequest(W,(0,c.signalFromNodeResponse)(t));try{let i=async e=>v.handle(Y,B).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let n=H.getRootSpanAttributes();if(!n)return;if(n.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${n.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=n.get("next.route");if(r){let t=`${q} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t)}else e.updateName(`${q} ${x}`)}),s=!!(0,a.getRequestMeta)(e,"minimalMode"),l=async a=>{var o,l;let d=async({previousCacheEntry:n})=>{try{if(!s&&S&&b&&!n)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=await i(a);e.fetchMetrics=B.renderOpts.fetchMetrics;let l=B.renderOpts.pendingWaitUntil;l&&r.waitUntil&&(r.waitUntil(l),l=void 0);let d=B.renderOpts.collectedTags;if(!j)return await (0,m.sendResponse)(W,K,o,B.renderOpts.pendingWaitUntil),null;{let e=await o.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(o.headers);d&&(t[f.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let n=void 0!==B.renderOpts.collectedRevalidate&&!(B.renderOpts.collectedRevalidate>=f.INFINITE_CACHE)&&B.renderOpts.collectedRevalidate,r=void 0===B.renderOpts.collectedExpire||B.renderOpts.collectedExpire>=f.INFINITE_CACHE?void 0:B.renderOpts.collectedExpire;return{value:{kind:g.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:n,expire:r}}}}catch(t){throw(null==n?void 0:n.isStale)&&await v.onRequestError(e,t,{routerKind:"App Router",routePath:x,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:_,isOnDemandRevalidate:S})},C),t}},c=await v.handleResponse({req:e,nextConfig:N,cacheKey:L,routeKind:n.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:S,revalidateOnlyGenerated:b,responseGenerator:d,waitUntil:r.waitUntil,isMinimalMode:s});if(!j)return null;if((null==c||null==(o=c.value)?void 0:o.kind)!==g.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",S?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),P&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let u=(0,h.fromNodeOutgoingHttpHeaders)(c.value.headers);return s&&j||u.delete(f.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||u.get("Cache-Control")||u.set("Cache-Control",(0,E.getCacheControlHeader)(c.cacheControl)),await (0,m.sendResponse)(W,K,new Response(c.value.body,{headers:u,status:c.value.status||200})),null};F?await l(F):await H.withPropagatedContext(e.headers,()=>H.trace(u.BaseServerSpan.handleRequest,{spanName:`${q} ${x}`,kind:o.SpanKind.SERVER,attributes:{"http.method":q,"http.target":e.url}},l))}catch(t){if(t instanceof y.NoFallbackError||await v.onRequestError(e,t,{routerKind:"App Router",routePath:D,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:_,isOnDemandRevalidate:S})}),j)throw t;return await (0,m.sendResponse)(W,K,new Response(null,{status:500})),null}}e.s(["handler",()=>A,"patchFetch",()=>P,"routeModule",()=>v,"serverHooks",()=>w,"workAsyncStorage",()=>T,"workUnitAsyncStorage",()=>N],13496)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__2dea261e._.js.map