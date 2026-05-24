module.exports=[18622,(e,t,a)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,a)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},67029,e=>{"use strict";var t=e.i(47909),a=e.i(74017),n=e.i(96250),s=e.i(59756),r=e.i(61916),o=e.i(14444),i=e.i(37092),l=e.i(69741),p=e.i(16795),d=e.i(87718),c=e.i(95169),u=e.i(47587),m=e.i(66012),h=e.i(70101),g=e.i(26937),f=e.i(10372),x=e.i(93695);e.i(52474);var v=e.i(220),R=e.i(89171);let b=new(e.i(46245)).Resend(process.env.RESEND_API_KEY||"re_123456789");async function y(e){try{let{formData:t}=await e.json(),a=`
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 800px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .section { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #667eea; }
    .label { font-weight: bold; color: #667eea; display: inline-block; width: 180px; }
    .value { color: #333; }
    .urgent { background: #ff6b6b; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🎓 New Student Consultation Request</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">LITC Infotech - Immediate Action Required</p>
    </div>
    
    <div class="content">
      <div class="urgent">
        <strong>⚡ URGENT:</strong> New student inquiry received. Contact within 24 hours for best conversion!
      </div>

      <div class="section">
        <h2 style="color: #667eea; margin-top: 0;">📌 Student Contact Information</h2>
        <p><span class="label">👤 Full Name:</span> <span class="value">${t.fullName}</span></p>
        <p><span class="label">📱 Phone:</span> <span class="value"><strong>${t.phone}</strong></span></p>
        <p><span class="label">📧 Email:</span> <span class="value">${t.email}</span></p>
        <p><span class="label">📍 Location:</span> <span class="value">${t.location||"Not provided"}</span></p>
      </div>

      <div class="section">
        <h2 style="color: #667eea; margin-top: 0;">💼 Professional Background</h2>
        <p><span class="label">🏢 Current Role:</span> <span class="value">${t.currentRole||"Not specified"}</span></p>
        <p><span class="label">⏳ Experience:</span> <span class="value">${t.experience}</span></p>
        <p><span class="label">🏭 Industry:</span> <span class="value">${t.industry||"Not specified"}</span></p>
        <p><span class="label">🎯 Career Goals:</span> <span class="value">${t.careerGoals||"Not specified"}</span></p>
      </div>

      <div class="section">
        <h2 style="color: #667eea; margin-top: 0;">🎓 Course Interests</h2>
        <p><strong>Interested Courses:</strong></p>
        <ul style="background: #f0f0f0; padding: 15px 30px; border-radius: 5px;">
          ${t.interestedCourses.map(e=>`<li style="margin: 8px 0;"><strong>✓</strong> ${e}</li>`).join("")||"<li>No courses selected</li>"}
        </ul>
        <p><span class="label">📅 Timeline:</span> <span class="value">${t.timelineToStart}</span></p>
        <p><span class="label">💻 Learning Mode:</span> <span class="value">${t.learningMode}</span></p>
        <p><span class="label">💰 Budget:</span> <span class="value">${t.budget||"Not specified"}</span></p>
      </div>

      <div class="section">
        <h2 style="color: #667eea; margin-top: 0;">⏰ Consultation Preferences</h2>
        <p><strong>Preferred Time Slots:</strong></p>
        <ul style="background: #f0f0f0; padding: 15px 30px; border-radius: 5px;">
          ${t.preferredTimeSlots.map(e=>`<li style="margin: 8px 0;">⏰ ${e}</li>`).join("")||"<li>Not specified</li>"}
        </ul>
      </div>

      ${t.specificQuestions?`
      <div class="section">
        <h2 style="color: #667eea; margin-top: 0;">💬 Questions/Requirements</h2>
        <p style="background: #f0f0f0; padding: 15px; border-radius: 5px;">${t.specificQuestions}</p>
      </div>
      `:""}

      <div class="section" style="background: #e8f5e9; border-left-color: #4caf50;">
        <h2 style="color: #4caf50; margin-top: 0;">⚡ Quick Action Links</h2>
        <p style="margin: 10px 0;">
          📞 <a href="tel:${t.phone}" style="color: #4caf50; text-decoration: none; font-weight: bold;">Call ${t.phone}</a>
        </p>
        <p style="margin: 10px 0;">
          📧 <a href="mailto:${t.email}" style="color: #4caf50; text-decoration: none; font-weight: bold;">Email ${t.email}</a>
        </p>
        <p style="margin: 10px 0;">
          💬 <a href="https://wa.me/91${t.phone.replace(/\D/g,"")}" style="color: #4caf50; text-decoration: none; font-weight: bold;">WhatsApp Message</a>
        </p>
      </div>

      <div class="section">
        <p><span class="label">🆔 Request ID:</span> <span class="value">${t.requestId}</span></p>
        <p><span class="label">📅 Submitted:</span> <span class="value">${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}</span></p>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 5px 0;">Automated notification from LITC Infotech Website</p>
      <p style="margin: 5px 0; opacity: 0.8;">📧 litcindore@gmail.com | 📱 +919522220892</p>
    </div>
  </div>
</body>
</html>
    `,n=`
🎓 NEW STUDENT CONSULTATION REQUEST - LITC INFOTECH

⚡ URGENT: Contact student within 24 hours!

📌 STUDENT CONTACT:
👤 Name: ${t.fullName}
📱 Phone: ${t.phone}
📧 Email: ${t.email}
📍 Location: ${t.location||"Not provided"}

💼 PROFESSIONAL BACKGROUND:
🏢 Role: ${t.currentRole||"Not specified"}
⏳ Experience: ${t.experience}
🏭 Industry: ${t.industry||"Not specified"}

🎓 COURSE INTERESTS:
${t.interestedCourses.map(e=>`✓ ${e}`).join("\n")||"• No courses selected"}

📅 Timeline: ${t.timelineToStart}
💻 Mode: ${t.learningMode}
💰 Budget: ${t.budget||"Not specified"}

⏰ PREFERRED TIME SLOTS:
${t.preferredTimeSlots.map(e=>`⏰ ${e}`).join("\n")||"• Not specified"}

💬 QUESTIONS: ${t.specificQuestions||"None"}

📋 SUBMISSION INFO:
🆔 Request ID: ${t.requestId}
📅 Submitted: ${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}

⚡ QUICK ACTIONS:
📞 Call: ${t.phone}
📧 Email: ${t.email}
💬 WhatsApp: https://wa.me/91${t.phone.replace(/\D/g,"")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Automated notification from LITC Infotech Website
    `;try{let e=await b.emails.send({from:"LITC Infotech <onboarding@resend.dev>",to:["litcindore@gmail.com"],subject:`🎓 New Inquiry: ${t.fullName} - ${t.interestedCourses[0]||"Course Interest"}`,html:a,text:n});return R.NextResponse.json({success:!0,message:"Email sent successfully to litcindore@gmail.com",service:"Resend",emailData:e,recipient:"litcindore@gmail.com",studentInfo:{name:t.fullName,phone:t.phone,email:t.email,courses:t.interestedCourses}})}catch(e){return R.NextResponse.json({success:!1,error:"Resend API error: "+e.message,fallback:"Email content logged to console",studentInfo:{name:t.fullName,phone:t.phone,email:t.email}})}}catch(e){return R.NextResponse.json({success:!1,error:e instanceof Error?e.message:"Unknown error"})}}e.s(["POST",()=>y],35055);var E=e.i(35055);let N=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/resend-email/route",pathname:"/api/resend-email",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/resend-email/route.ts",nextConfigOutput:"standalone",userland:E}),{workAsyncStorage:C,workUnitAsyncStorage:w,serverHooks:T}=N;function $(){return(0,n.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:w})}async function I(e,t,n){N.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let R="/api/resend-email/route";R=R.replace(/\/index$/,"")||"/";let b=await N.prepare(e,t,{srcPage:R,multiZoneDraftMode:!1});if(!b)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:y,params:E,nextConfig:C,parsedUrl:w,isDraftMode:T,prerenderManifest:$,routerServerContext:I,isOnDemandRevalidate:S,revalidateOnlyGenerated:A,resolvedPathname:k,clientReferenceManifest:O,serverActionsManifest:P}=b,q=(0,l.normalizeAppPath)(R),U=!!($.dynamicRoutes[q]||$.routes[k]),j=async()=>((null==I?void 0:I.render404)?await I.render404(e,t,w,!1):t.end("This page could not be found"),null);if(U&&!T){let e=!!$.routes[k],t=$.dynamicRoutes[q];if(t&&!1===t.fallback&&!e){if(C.experimental.adapterPath)return await j();throw new x.NoFallbackError}}let D=null;!U||N.isDev||T||(D="/index"===(D=k)?"/":D);let M=!0===N.isDev||!U,_=U&&!M;P&&O&&(0,o.setReferenceManifestsSingleton)({page:R,clientReferenceManifest:O,serverActionsManifest:P,serverModuleMap:(0,i.createServerModuleMap)({serverActionsManifest:P})});let L=e.method||"GET",H=(0,r.getTracer)(),F=H.getActiveScopeSpan(),K={params:E,prerenderManifest:$,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:M,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:C.cacheLife,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,n)=>N.onRequestError(e,t,n,I)},sharedContext:{buildId:y}},B=new p.NodeNextRequest(e),G=new p.NodeNextResponse(t),Q=d.NextRequestAdapter.fromNodeNextRequest(B,(0,d.signalFromNodeResponse)(t));try{let o=async e=>N.handle(Q,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=H.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=a.get("next.route");if(n){let t=`${L} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${L} ${R}`)}),i=!!(0,s.getRequestMeta)(e,"minimalMode"),l=async s=>{var r,l;let p=async({previousCacheEntry:a})=>{try{if(!i&&S&&A&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let r=await o(s);e.fetchMetrics=K.renderOpts.fetchMetrics;let l=K.renderOpts.pendingWaitUntil;l&&n.waitUntil&&(n.waitUntil(l),l=void 0);let p=K.renderOpts.collectedTags;if(!U)return await (0,m.sendResponse)(B,G,r,K.renderOpts.pendingWaitUntil),null;{let e=await r.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(r.headers);p&&(t[f.NEXT_CACHE_TAGS_HEADER]=p),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=f.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,n=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=f.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:r.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:n}}}}catch(t){throw(null==a?void 0:a.isStale)&&await N.onRequestError(e,t,{routerKind:"App Router",routePath:R,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:_,isOnDemandRevalidate:S})},I),t}},d=await N.handleResponse({req:e,nextConfig:C,cacheKey:D,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:$,isRoutePPREnabled:!1,isOnDemandRevalidate:S,revalidateOnlyGenerated:A,responseGenerator:p,waitUntil:n.waitUntil,isMinimalMode:i});if(!U)return null;if((null==d||null==(r=d.value)?void 0:r.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(l=d.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",S?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),T&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,h.fromNodeOutgoingHttpHeaders)(d.value.headers);return i&&U||c.delete(f.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,g.getCacheControlHeader)(d.cacheControl)),await (0,m.sendResponse)(B,G,new Response(d.value.body,{headers:c,status:d.value.status||200})),null};F?await l(F):await H.withPropagatedContext(e.headers,()=>H.trace(c.BaseServerSpan.handleRequest,{spanName:`${L} ${R}`,kind:r.SpanKind.SERVER,attributes:{"http.method":L,"http.target":e.url}},l))}catch(t){if(t instanceof x.NoFallbackError||await N.onRequestError(e,t,{routerKind:"App Router",routePath:q,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:_,isOnDemandRevalidate:S})}),U)throw t;return await (0,m.sendResponse)(B,G,new Response(null,{status:500})),null}}e.s(["handler",()=>I,"patchFetch",()=>$,"routeModule",()=>N,"serverHooks",()=>T,"workAsyncStorage",()=>C,"workUnitAsyncStorage",()=>w],67029)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__8b95b599._.js.map