module.exports=[18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},65892,e=>{"use strict";var t=e.i(47909),r=e.i(74017),a=e.i(96250),n=e.i(59756),i=e.i(61916),s=e.i(14444),o=e.i(37092),d=e.i(69741),l=e.i(16795),p=e.i(87718),u=e.i(95169),c=e.i(47587),x=e.i(66012),g=e.i(70101),h=e.i(26937),m=e.i(10372),f=e.i(93695);e.i(52474);var y=e.i(220),v=e.i(89171),b=e.i(46245);let w=process.env.RESEND_API_KEY?new b.Resend(process.env.RESEND_API_KEY):null;async function R(e){try{if(!w)return v.NextResponse.json({success:!1,error:"RESEND_API_KEY is not configured"},{status:503});let{name:t,email:r,phone:a,message:n,course:i,courseDuration:s,coursePrice:o}=await e.json(),d=`
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 15px 15px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .course-card { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-left: 4px solid #667eea; }
            .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
            .label { font-weight: bold; color: #667eea; }
            .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 15px 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">🎓 New Course Enquiry</h1>
              <p style="margin: 10px 0 0 0;">Student interested in ${i}</p>
            </div>
            
            <div class="content">
              <h2 style="color: #667eea; margin-top: 0;">Student Details</h2>
              
              <div class="course-card">
                <div class="detail-row">
                  <span class="label">👤 Student Name:</span><br/>
                  <strong style="font-size: 18px;">${t}</strong>
                </div>
                
                <div class="detail-row">
                  <span class="label">📧 Email:</span><br/>
                  <a href="mailto:${r}" style="color: #667eea;">${r}</a>
                </div>
                
                <div class="detail-row">
                  <span class="label">📱 Phone:</span><br/>
                  <a href="tel:${a}" style="color: #667eea; font-size: 18px; font-weight: bold;">${a}</a>
                </div>
                
                ${n?`
                <div class="detail-row">
                  <span class="label">💬 Message:</span><br/>
                  <p style="margin: 5px 0; padding: 10px; background: #f0f0f0; border-radius: 5px;">${n}</p>
                </div>
                `:""}
              </div>

              <h3 style="color: #667eea;">Course Information</h3>
              <div class="course-card">
                <div class="detail-row">
                  <span class="label">📚 Course:</span><br/>
                  <strong style="font-size: 16px; color: #764ba2;">${i}</strong>
                </div>
                
                <div class="detail-row">
                  <span class="label">⏱️ Duration:</span><br/>
                  ${s}
                </div>
              </div>

              <div style="background: #fff3cd; padding: 20px; border-radius: 10px; text-align: center; margin-top: 20px;">
                <strong>📞 Action Required:</strong> Contact student within 24 hours for best conversion!
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
                <p style="margin: 0;"><strong>🕐 Enquiry Time:</strong> ${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}</p>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 5px 0; font-size: 18px; font-weight: bold;">LITC - Learners IT Consultancy</p>
              <p style="margin: 5px 0; font-size: 14px;">Leading IT Training & Certification Institute</p>
              <p style="margin: 5px 0; font-size: 12px;">📞 +91-9522220892 | 📧 litcindore@gmail.com</p>
            </div>
          </div>
        </body>
      </html>
    `,l=`
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 15px 15px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 15px 15px; }
            .button { background: #4CAF50; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">✅ Enquiry Received!</h1>
              <p style="margin: 10px 0 0 0;">Thank you for your interest</p>
            </div>
            
            <div class="content">
              <h2 style="color: #667eea;">Dear ${t},</h2>
              
              <p>Thank you for showing interest in our <strong>${i}</strong> course!</p>
              
              <p>We have received your enquiry and our admission team will contact you within <strong>24 hours</strong> to discuss:</p>
              
              <ul style="background: white; padding: 20px 20px 20px 40px; border-radius: 10px; margin: 20px 0;">
                <li>Course details and curriculum</li>
                <li>Batch timings and schedule</li>
                <li>Course fee and payment options</li>
                <li>Certification and placement assistance</li>
              </ul>

              <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #667eea;">Your Enquiry Details</h3>
                <p style="margin: 5px 0;"><strong>Course:</strong> ${i}</p>
                <p style="margin: 5px 0;"><strong>Duration:</strong> ${s}</p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="tel:+919522220892" class="button">📞 Call Us: +91-9522220892</a>
              </div>

              <p style="color: #666; font-size: 14px; margin-top: 20px;">
                <strong>Note:</strong> If you have any immediate questions, feel free to reach out to us at +91-9522220892 or reply to this email.
              </p>
            </div>
            
            <div class="footer">
              <p style="margin: 5px 0; font-size: 18px; font-weight: bold;">LITC - Learners IT Consultancy</p>
              <p style="margin: 5px 0; font-size: 14px;">Your Gateway to IT Excellence Since 2010</p>
              <p style="margin: 5px 0; font-size: 12px;">📍 Indore, Madhya Pradesh</p>
              <p style="margin: 5px 0; font-size: 12px;">📞 +91-9522220892 | 📧 litcindore@gmail.com</p>
            </div>
          </div>
        </body>
      </html>
    `,p=await w.emails.send({from:"LITC Institute <onboarding@resend.dev>",to:process.env.NEXT_PUBLIC_ADMIN_EMAIL||"litcindore@gmail.com",subject:`🎓 New Course Enquiry: ${i} - ${t}`,html:d}),u=await w.emails.send({from:"LITC Institute <onboarding@resend.dev>",to:r,subject:`Thank you for your interest in ${i}`,html:l});return v.NextResponse.json({success:!0,message:"Enquiry submitted successfully",adminEmailId:p.data?.id,studentEmailId:u.data?.id})}catch(e){return v.NextResponse.json({success:!1,error:"Failed to submit enquiry",details:e instanceof Error?e.message:"Unknown error"},{status:500})}}e.s(["POST",()=>R],39749);var E=e.i(39749);let C=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/course-enquiry/route",pathname:"/api/course-enquiry",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/course-enquiry/route.ts",nextConfigOutput:"standalone",userland:E}),{workAsyncStorage:T,workUnitAsyncStorage:k,serverHooks:A}=C;function I(){return(0,a.patchFetch)({workAsyncStorage:T,workUnitAsyncStorage:k})}async function N(e,t,a){C.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api/course-enquiry/route";v=v.replace(/\/index$/,"")||"/";let b=await C.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!b)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:w,params:R,nextConfig:E,parsedUrl:T,isDraftMode:k,prerenderManifest:A,routerServerContext:I,isOnDemandRevalidate:N,revalidateOnlyGenerated:q,resolvedPathname:P,clientReferenceManifest:S,serverActionsManifest:_}=b,$=(0,d.normalizeAppPath)(v),D=!!(A.dynamicRoutes[$]||A.routes[P]),O=async()=>((null==I?void 0:I.render404)?await I.render404(e,t,T,!1):t.end("This page could not be found"),null);if(D&&!k){let e=!!A.routes[P],t=A.dynamicRoutes[$];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await O();throw new f.NoFallbackError}}let j=null;!D||C.isDev||k||(j="/index"===(j=P)?"/":j);let M=!0===C.isDev||!D,U=D&&!M;_&&S&&(0,s.setReferenceManifestsSingleton)({page:v,clientReferenceManifest:S,serverActionsManifest:_,serverModuleMap:(0,o.createServerModuleMap)({serverActionsManifest:_})});let H=e.method||"GET",L=(0,i.getTracer)(),z=L.getActiveScopeSpan(),K={params:R,prerenderManifest:A,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:M,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>C.onRequestError(e,t,a,I)},sharedContext:{buildId:w}},F=new l.NodeNextRequest(e),B=new l.NodeNextResponse(t),Y=p.NextRequestAdapter.fromNodeNextRequest(F,(0,p.signalFromNodeResponse)(t));try{let s=async e=>C.handle(Y,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=L.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${H} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${v}`)}),o=!!(0,n.getRequestMeta)(e,"minimalMode"),d=async n=>{var i,d;let l=async({previousCacheEntry:r})=>{try{if(!o&&N&&q&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await s(n);e.fetchMetrics=K.renderOpts.fetchMetrics;let d=K.renderOpts.pendingWaitUntil;d&&a.waitUntil&&(a.waitUntil(d),d=void 0);let l=K.renderOpts.collectedTags;if(!D)return await (0,x.sendResponse)(F,B,i,K.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,g.toNodeOutgoingHttpHeaders)(i.headers);l&&(t[m.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=m.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,a=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=m.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:y.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await C.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:N})},I),t}},p=await C.handleResponse({req:e,nextConfig:E,cacheKey:j,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:N,revalidateOnlyGenerated:q,responseGenerator:l,waitUntil:a.waitUntil,isMinimalMode:o});if(!D)return null;if((null==p||null==(i=p.value)?void 0:i.kind)!==y.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(d=p.value)?void 0:d.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",N?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),k&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let u=(0,g.fromNodeOutgoingHttpHeaders)(p.value.headers);return o&&D||u.delete(m.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||u.get("Cache-Control")||u.set("Cache-Control",(0,h.getCacheControlHeader)(p.cacheControl)),await (0,x.sendResponse)(F,B,new Response(p.value.body,{headers:u,status:p.value.status||200})),null};z?await d(z):await L.withPropagatedContext(e.headers,()=>L.trace(u.BaseServerSpan.handleRequest,{spanName:`${H} ${v}`,kind:i.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},d))}catch(t){if(t instanceof f.NoFallbackError||await C.onRequestError(e,t,{routerKind:"App Router",routePath:$,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:N})}),D)throw t;return await (0,x.sendResponse)(F,B,new Response(null,{status:500})),null}}e.s(["handler",()=>N,"patchFetch",()=>I,"routeModule",()=>C,"serverHooks",()=>A,"workAsyncStorage",()=>T,"workUnitAsyncStorage",()=>k],65892)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__b016f3cb._.js.map