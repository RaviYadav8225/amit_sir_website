module.exports=[70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},61502,e=>{"use strict";var t=e.i(47909),r=e.i(74017),n=e.i(96250),o=e.i(59756),a=e.i(61916),i=e.i(14444),s=e.i(37092),l=e.i(69741),d=e.i(16795),p=e.i(87718),c=e.i(95169),u=e.i(47587),m=e.i(66012),g=e.i(70101),h=e.i(26937),x=e.i(10372),f=e.i(93695);e.i(52474);var v=e.i(220),b=e.i(89171),y=e.i(29508);async function R(e){try{let t=await e.json(),r=y.default.createTransport({service:"gmail",auth:{user:"litcindore@gmail.com",pass:process.env.GMAIL_APP_PASSWORD||"your-app-password-here"}}),n=`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; }
    .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; }
    .section h3 { margin-top: 0; color: #3b82f6; }
    .highlight { background: #fef3c7; padding: 15px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #f59e0b; }
    .payment-box { background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .upi-details { font-size: 18px; font-weight: bold; color: #1e40af; }
    .button { display: inline-block; background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 10px 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .steps { background: #f0f9ff; padding: 15px; border-radius: 6px; }
    .steps li { margin: 8px 0; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎓 Enrollment Successful!</h1>
    <p>Thank you for choosing LITC Institute</p>
  </div>
  
  <div class="content">
    <div class="section">
      <h3>📋 Enrollment Details</h3>
      <p><strong>Enrollment ID:</strong> ${t.enrollmentId}</p>
      <p><strong>Student Name:</strong> ${t.name}</p>
      <p><strong>Course:</strong> ${t.course?.name}</p>
      <p><strong>Course Code:</strong> ${t.course?.code}</p>
      <p><strong>Duration:</strong> ${t.course?.duration}</p>
      <p><strong>Level:</strong> ${t.course?.level}</p>
      <p><strong>Batch Timing:</strong> ${t.batchTiming}</p>
    </div>

    <div class="section">
      <h3>📞 Next Steps</h3>
      <p>Our team will contact you within 24 hours to discuss:</p>
      <ul>
        <li>Course fee and payment options</li>
        <li>Batch start date and schedule</li>
        <li>Course materials and resources</li>
        <li>Any questions you may have</li>
      </ul>
    </div>

    <div class="section">
      <h3>📞 Need Help?</h3>
      <p><strong>Call:</strong> +91-9425094250</p>
      <p><strong>WhatsApp:</strong> +91-9522220892</p>
      <p><strong>Email:</strong> litcindore@gmail.com</p>
    </div>
  </div>

  <div class="footer">
    <p>Thank you for choosing LITC Institute!</p>
    <p>We look forward to your learning journey with us.</p>
    <p style="margin-top: 20px; color: #999;">This is an automated email. Please do not reply to this email.</p>
  </div>
</body>
</html>
    `,o=`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .alert-header { background: #dc2626; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9fafb; }
    .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #3b82f6; border-radius: 4px; }
    .action-required { background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin: 20px 0; }
    h3 { color: #1f2937; margin-top: 0; }
  </style>
</head>
<body>
  <div class="alert-header">
    <h1>🚨 NEW ENROLLMENT ALERT</h1>
  </div>
  
  <div class="content">
    <div class="info-box">
      <h3>📋 Enrollment Information</h3>
      <p><strong>Enrollment ID:</strong> ${t.enrollmentId}</p>
      <p><strong>Submitted:</strong> ${new Date(t.submittedAt).toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}</p>
    </div>

    <div class="info-box">
      <h3>👤 Student Information</h3>
      <p><strong>Name:</strong> ${t.name}</p>
      <p><strong>Email:</strong> ${t.email}</p>
      <p><strong>Phone:</strong> ${t.phone}</p>
      <p><strong>Education:</strong> ${t.education}</p>
      <p><strong>Experience:</strong> ${t.experience}</p>
    </div>

    <div class="info-box">
      <h3>📚 Course Information</h3>
      <p><strong>Course:</strong> ${t.course?.name}</p>
      <p><strong>Code:</strong> ${t.course?.code}</p>
      <p><strong>Duration:</strong> ${t.course?.duration}</p>
      <p><strong>Level:</strong> ${t.course?.level}</p>
      <p><strong>Batch:</strong> ${t.batchTiming}</p>
    </div>

    <div class="info-box">
      <h3>💼 Additional Information</h3>
      <p><strong>Payment Plan:</strong> ${t.paymentPlan}</p>
      <p><strong>Referral Source:</strong> ${t.referralSource}</p>
    </div>

    <div class="action-required">
      <h3>⚠️ ACTION REQUIRED</h3>
      <ol>
        <li>Contact student within 24 hours</li>
        <li>Discuss course fee and payment options</li>
        <li>Send enrollment confirmation email</li>
        <li>Add student to WhatsApp group</li>
        <li>Provide course access credentials</li>
      </ol>
      <p><strong>Payment will be received via:</strong></p>
      <ul>
        <li>WhatsApp: +91-9522220892</li>
        <li>Email: litcindore@gmail.com</li>
      </ul>
    </div>

    <p style="color: #10b981; font-weight: bold;">✅ Payment email has been sent to student: ${t.email}</p>
  </div>
</body>
</html>
    `,a={student:!1,admin:!1,errors:[]};try{await r.sendMail({from:'"LITC Institute" <litcindore@gmail.com>',to:t.email,subject:`Enrollment Confirmation - ${t.course?.name} | ID: ${t.enrollmentId}`,html:n,replyTo:"litcindore@gmail.com"}),a.student=!0}catch(e){a.errors.push("Student email: "+e.message)}try{await r.sendMail({from:'"LITC Enrollment System" <litcindore@gmail.com>',to:"litcindore@gmail.com",subject:`🚨 New Enrollment: ${t.name} | ${t.enrollmentId}`,html:o}),a.admin=!0}catch(e){a.errors.push("Admin email: "+e.message)}return b.NextResponse.json({success:!0,emailSent:{student:a.student,admin:a.admin},enrollmentId:t.enrollmentId,message:a.student?"✅ Enrollment confirmation sent to your email! Our team will contact you shortly.":"⚠️ Email sending in progress. You will receive confirmation details shortly.",errors:a.errors.length>0?a.errors:void 0,contact:{whatsapp:"+91-9522220892",phone:"+91-9425094250",email:"litcindore@gmail.com"}})}catch(e){return b.NextResponse.json({success:!1,error:e.message,message:"Unable to send email. Please contact us directly.",contact:{phone:"+91-9425094250",whatsapp:"+91-9522220892",email:"litcindore@gmail.com"}},{status:500})}}e.s(["POST",()=>R],83937);var w=e.i(83937);let E=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/course-enrollment-final/route",pathname:"/api/course-enrollment-final",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/course-enrollment-final/route.ts",nextConfigOutput:"standalone",userland:w}),{workAsyncStorage:C,workUnitAsyncStorage:A,serverHooks:T}=E;function I(){return(0,n.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:A})}async function P(e,t,n){E.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/course-enrollment-final/route";b=b.replace(/\/index$/,"")||"/";let y=await E.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:R,params:w,nextConfig:C,parsedUrl:A,isDraftMode:T,prerenderManifest:I,routerServerContext:P,isOnDemandRevalidate:k,revalidateOnlyGenerated:N,resolvedPathname:S,clientReferenceManifest:$,serverActionsManifest:O}=y,q=(0,l.normalizeAppPath)(b),D=!!(I.dynamicRoutes[q]||I.routes[S]),j=async()=>((null==P?void 0:P.render404)?await P.render404(e,t,A,!1):t.end("This page could not be found"),null);if(D&&!T){let e=!!I.routes[S],t=I.dynamicRoutes[q];if(t&&!1===t.fallback&&!e){if(C.experimental.adapterPath)return await j();throw new f.NoFallbackError}}let _=null;!D||E.isDev||T||(_="/index"===(_=S)?"/":_);let M=!0===E.isDev||!D,U=D&&!M;O&&$&&(0,i.setReferenceManifestsSingleton)({page:b,clientReferenceManifest:$,serverActionsManifest:O,serverModuleMap:(0,s.createServerModuleMap)({serverActionsManifest:O})});let H=e.method||"GET",L=(0,a.getTracer)(),F=L.getActiveScopeSpan(),K={params:w,prerenderManifest:I,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:M,incrementalCache:(0,o.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:C.cacheLife,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,n)=>E.onRequestError(e,t,n,P)},sharedContext:{buildId:R}},B=new d.NodeNextRequest(e),W=new d.NodeNextResponse(t),G=p.NextRequestAdapter.fromNodeNextRequest(B,(0,p.signalFromNodeResponse)(t));try{let i=async e=>E.handle(G,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=L.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=r.get("next.route");if(n){let t=`${H} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${b}`)}),s=!!(0,o.getRequestMeta)(e,"minimalMode"),l=async o=>{var a,l;let d=async({previousCacheEntry:r})=>{try{if(!s&&k&&N&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await i(o);e.fetchMetrics=K.renderOpts.fetchMetrics;let l=K.renderOpts.pendingWaitUntil;l&&n.waitUntil&&(n.waitUntil(l),l=void 0);let d=K.renderOpts.collectedTags;if(!D)return await (0,m.sendResponse)(B,W,a,K.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,g.toNodeOutgoingHttpHeaders)(a.headers);d&&(t[x.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,n=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:n}}}}catch(t){throw(null==r?void 0:r.isStale)&&await E.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:k})},P),t}},p=await E.handleResponse({req:e,nextConfig:C,cacheKey:_,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:I,isRoutePPREnabled:!1,isOnDemandRevalidate:k,revalidateOnlyGenerated:N,responseGenerator:d,waitUntil:n.waitUntil,isMinimalMode:s});if(!D)return null;if((null==p||null==(a=p.value)?void 0:a.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",k?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),T&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,g.fromNodeOutgoingHttpHeaders)(p.value.headers);return s&&D||c.delete(x.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,h.getCacheControlHeader)(p.cacheControl)),await (0,m.sendResponse)(B,W,new Response(p.value.body,{headers:c,status:p.value.status||200})),null};F?await l(F):await L.withPropagatedContext(e.headers,()=>L.trace(c.BaseServerSpan.handleRequest,{spanName:`${H} ${b}`,kind:a.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},l))}catch(t){if(t instanceof f.NoFallbackError||await E.onRequestError(e,t,{routerKind:"App Router",routePath:q,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:k})}),D)throw t;return await (0,m.sendResponse)(B,W,new Response(null,{status:500})),null}}e.s(["handler",()=>P,"patchFetch",()=>I,"routeModule",()=>E,"serverHooks",()=>T,"workAsyncStorage",()=>C,"workUnitAsyncStorage",()=>A],61502)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__492b27b3._.js.map