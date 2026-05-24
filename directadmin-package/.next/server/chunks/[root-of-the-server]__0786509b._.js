module.exports=[18622,(e,t,a)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,a)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},73685,e=>{"use strict";var t=e.i(47909),a=e.i(74017),r=e.i(96250),n=e.i(59756),s=e.i(61916),o=e.i(14444),i=e.i(37092),l=e.i(69741),p=e.i(16795),d=e.i(87718),c=e.i(95169),u=e.i(47587),g=e.i(66012),h=e.i(70101),m=e.i(26937),x=e.i(10372),v=e.i(93695);e.i(52474);var b=e.i(220),f=e.i(89171),R=e.i(46245);let y=process.env.RESEND_API_KEY?new R.Resend(process.env.RESEND_API_KEY):null;async function E(e){try{if(!y)return f.NextResponse.json({success:!1,error:"RESEND_API_KEY is not configured"},{status:503});let t=await e.json(),a=`
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 800px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0891b2 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .section { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #0891b2; }
    .label { font-weight: bold; color: #0891b2; display: inline-block; width: 150px; }
    .value { color: #333; }
    .message-box { background: #f0f9ff; padding: 20px; border-radius: 8px; border: 1px solid #0891b2; margin: 20px 0; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
    .badge { background: #0891b2; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">📧 New Contact Form Message</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">LITC Infotech Website - Contact Us Form</p>
    </div>
    
    <div class="content">
      <div class="section">
        <h2 style="color: #0891b2; margin-top: 0;">
          <span class="badge">${t.service.toUpperCase().replace(/-/g," ")}</span>
        </h2>
        <h3 style="color: #333; margin: 10px 0;">Subject: ${t.subject}</h3>
      </div>

      <div class="section">
        <h2 style="color: #0891b2; margin-top: 0;">📌 Contact Details</h2>
        <p><span class="label">👤 Name:</span> <span class="value"><strong>${t.name}</strong></span></p>
        <p><span class="label">📧 Email:</span> <span class="value">${t.email}</span></p>
        <p><span class="label">📱 Phone:</span> <span class="value"><strong>${t.phone}</strong></span></p>
      </div>

      <div class="section">
        <h2 style="color: #0891b2; margin-top: 0;">💬 Message</h2>
        <div class="message-box">
          ${t.message.replace(/\n/g,"<br>")}
        </div>
      </div>

      <div class="section" style="background: #f0fdf4; border-left-color: #22c55e;">
        <h2 style="color: #22c55e; margin-top: 0;">⚡ Quick Actions</h2>
        <p style="margin: 10px 0;">
          📞 <a href="tel:${t.phone}" style="color: #22c55e; text-decoration: none; font-weight: bold;">Call ${t.phone}</a>
        </p>
        <p style="margin: 10px 0;">
          📧 <a href="mailto:${t.email}" style="color: #22c55e; text-decoration: none; font-weight: bold;">Reply to ${t.email}</a>
        </p>
        <p style="margin: 10px 0;">
          💬 <a href="https://wa.me/91${t.phone.replace(/\D/g,"")}" style="color: #22c55e; text-decoration: none; font-weight: bold;">WhatsApp Message</a>
        </p>
      </div>

      <div class="section">
        <p><span class="label">🆔 Reference ID:</span> <span class="value">${t.requestId}</span></p>
        <p><span class="label">📅 Submitted:</span> <span class="value">${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}</span></p>
        <p><span class="label">📱 Source:</span> <span class="value">Website Contact Form</span></p>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 5px 0;">Automated message from LITC Infotech Website</p>
      <p style="margin: 5px 0; opacity: 0.8;">📧 litcindore@gmail.com | 📱 +919522220892</p>
    </div>
  </div>
</body>
</html>
    `,r=`
📧 NEW CONTACT FORM MESSAGE - LITC INFOTECH

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INQUIRY TYPE: ${t.service.toUpperCase().replace(/-/g," ")}
SUBJECT: ${t.subject}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: ${t.name}
📧 Email: ${t.email}
📱 Phone: ${t.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${t.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ QUICK ACTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 Call: ${t.phone}
📧 Email: ${t.email}
💬 WhatsApp: https://wa.me/91${t.phone.replace(/\D/g,"")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 SUBMISSION INFO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🆔 Reference ID: ${t.requestId}
📅 Submitted: ${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}
🌐 Source: Website Contact Form

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;try{return await y.emails.send({from:"LITC Infotech Contact <onboarding@resend.dev>",to:["litcindore@gmail.com"],subject:`📧 ${t.service.replace(/-/g," ").toUpperCase()}: ${t.subject} - ${t.name}`,html:a,text:r}),f.NextResponse.json({success:!0,message:"Contact message sent successfully",service:"Resend",recipient:"litcindore@gmail.com",requestId:t.requestId})}catch(e){return f.NextResponse.json({success:!1,error:"Email delivery failed: "+e.message,fallback:"Message content logged to console"})}}catch(e){return f.NextResponse.json({success:!1,error:e instanceof Error?e.message:"Unknown error"})}}e.s(["POST",()=>E],87364);var C=e.i(87364);let w=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/contact-message/route",pathname:"/api/contact-message",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/contact-message/route.ts",nextConfigOutput:"standalone",userland:C}),{workAsyncStorage:A,workUnitAsyncStorage:N,serverHooks:I}=w;function S(){return(0,r.patchFetch)({workAsyncStorage:A,workUnitAsyncStorage:N})}async function T(e,t,r){w.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let f="/api/contact-message/route";f=f.replace(/\/index$/,"")||"/";let R=await w.prepare(e,t,{srcPage:f,multiZoneDraftMode:!1});if(!R)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:y,params:E,nextConfig:C,parsedUrl:A,isDraftMode:N,prerenderManifest:I,routerServerContext:S,isOnDemandRevalidate:T,revalidateOnlyGenerated:$,resolvedPathname:k,clientReferenceManifest:P,serverActionsManifest:O}=R,j=(0,l.normalizeAppPath)(f),_=!!(I.dynamicRoutes[j]||I.routes[k]),D=async()=>((null==S?void 0:S.render404)?await S.render404(e,t,A,!1):t.end("This page could not be found"),null);if(_&&!N){let e=!!I.routes[k],t=I.dynamicRoutes[j];if(t&&!1===t.fallback&&!e){if(C.experimental.adapterPath)return await D();throw new v.NoFallbackError}}let U=null;!_||w.isDev||N||(U="/index"===(U=k)?"/":U);let q=!0===w.isDev||!_,M=_&&!q;O&&P&&(0,o.setReferenceManifestsSingleton)({page:f,clientReferenceManifest:P,serverActionsManifest:O,serverModuleMap:(0,i.createServerModuleMap)({serverActionsManifest:O})});let H=e.method||"GET",F=(0,s.getTracer)(),K=F.getActiveScopeSpan(),L={params:E,prerenderManifest:I,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:q,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:C.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r)=>w.onRequestError(e,t,r,S)},sharedContext:{buildId:y}},W=new p.NodeNextRequest(e),B=new p.NodeNextResponse(t),Y=d.NextRequestAdapter.fromNodeNextRequest(W,(0,d.signalFromNodeResponse)(t));try{let o=async e=>w.handle(Y,L).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=F.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=a.get("next.route");if(r){let t=`${H} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${f}`)}),i=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var s,l;let p=async({previousCacheEntry:a})=>{try{if(!i&&T&&$&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await o(n);e.fetchMetrics=L.renderOpts.fetchMetrics;let l=L.renderOpts.pendingWaitUntil;l&&r.waitUntil&&(r.waitUntil(l),l=void 0);let p=L.renderOpts.collectedTags;if(!_)return await (0,g.sendResponse)(W,B,s,L.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(s.headers);p&&(t[x.NEXT_CACHE_TAGS_HEADER]=p),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==L.renderOpts.collectedRevalidate&&!(L.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&L.renderOpts.collectedRevalidate,r=void 0===L.renderOpts.collectedExpire||L.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:L.renderOpts.collectedExpire;return{value:{kind:b.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:r}}}}catch(t){throw(null==a?void 0:a.isStale)&&await w.onRequestError(e,t,{routerKind:"App Router",routePath:f,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:T})},S),t}},d=await w.handleResponse({req:e,nextConfig:C,cacheKey:U,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:I,isRoutePPREnabled:!1,isOnDemandRevalidate:T,revalidateOnlyGenerated:$,responseGenerator:p,waitUntil:r.waitUntil,isMinimalMode:i});if(!_)return null;if((null==d||null==(s=d.value)?void 0:s.kind)!==b.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(l=d.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",T?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),N&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,h.fromNodeOutgoingHttpHeaders)(d.value.headers);return i&&_||c.delete(x.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,m.getCacheControlHeader)(d.cacheControl)),await (0,g.sendResponse)(W,B,new Response(d.value.body,{headers:c,status:d.value.status||200})),null};K?await l(K):await F.withPropagatedContext(e.headers,()=>F.trace(c.BaseServerSpan.handleRequest,{spanName:`${H} ${f}`,kind:s.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},l))}catch(t){if(t instanceof v.NoFallbackError||await w.onRequestError(e,t,{routerKind:"App Router",routePath:j,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:T})}),_)throw t;return await (0,g.sendResponse)(W,B,new Response(null,{status:500})),null}}e.s(["handler",()=>T,"patchFetch",()=>S,"routeModule",()=>w,"serverHooks",()=>I,"workAsyncStorage",()=>A,"workUnitAsyncStorage",()=>N],73685)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0786509b._.js.map