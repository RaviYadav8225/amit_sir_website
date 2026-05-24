module.exports=[70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},21874,e=>{"use strict";var t=e.i(47909),r=e.i(74017),a=e.i(96250),n=e.i(59756),i=e.i(61916),o=e.i(14444),s=e.i(37092),l=e.i(69741),d=e.i(16795),p=e.i(87718),u=e.i(95169),c=e.i(47587),x=e.i(66012),h=e.i(70101),g=e.i(26937),m=e.i(10372),v=e.i(93695);e.i(52474);var f=e.i(220),b=e.i(89171),y=e.i(29508);async function R(e){try{let{name:t,email:r}=await e.json(),a=y.default.createTransport({service:"gmail",auth:{user:process.env.NEXT_PUBLIC_ADMIN_EMAIL||"litcindore@gmail.com",pass:(process.env.GMAIL_APP_PASSWORD||"uqtswthkutaxskmg").replace(/\s/g,"")}}),n=process.env.NEXT_PUBLIC_ADMIN_EMAIL||"litcindore@gmail.com",i={from:n,to:n,subject:`🤖 New ChatBot Enquiry from ${t}`,html:`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #667eea; }
            .label { font-weight: bold; color: #667eea; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 12px; }
            .badge { display: inline-block; background: #4CAF50; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🤖 LITC Siri ChatBot</h1>
              <p style="margin: 10px 0 0 0;">New Student Enquiry Received!</p>
            </div>
            
            <div class="content">
              <div style="text-align: center; margin-bottom: 20px;">
                <span class="badge">NEW LEAD</span>
              </div>
              
              <div class="info-box">
                <p><span class="label">👤 Student Name:</span><br/>${t}</p>
              </div>
              
              <div class="info-box">
                <p><span class="label">📧 Email Address:</span><br/>${r}</p>
              </div>
              
              <div class="info-box">
                <p><span class="label">🕐 Enquiry Time:</span><br/>${new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}</p>
              </div>
              
              <div class="info-box">
                <p><span class="label">📱 Source:</span><br/>LITC Siri ChatBot - Website</p>
              </div>
              
              <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #ffc107;">
                <p style="margin: 0;"><strong>⚡ Action Required:</strong></p>
                <p style="margin: 5px 0 0 0;">Please follow up with this student as soon as possible via email or phone call.</p>
              </div>
            </div>
            
            <div class="footer">
              <p><strong>LITC INFOTECH</strong></p>
              <p>Ground Floor, Metro Tower, Near Mangal City, Indore, MP</p>
              <p>📞 +91-9522220892 | ✉️ info@litcindore.com</p>
            </div>
          </div>
        </body>
        </html>
      `};await a.sendMail(i);let o={from:n,to:r,subject:"👋 Welcome to LITC INFOTECH - Your Career Journey Starts Here!",html:`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin: 10px 0; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Welcome to LITC INFOTECH!</h1>
            </div>
            
            <div class="content">
              <h2>Hi ${t}! 👋</h2>
              
              <p>Thank you for connecting with us through LITC Siri! We're excited to help you transform your career with our industry-leading IT training programs.</p>
              
              <h3>🚀 What's Next?</h3>
              <ul>
                <li>Our team will contact you within 24 hours</li>
                <li>We'll understand your career goals</li>
                <li>Recommend the best courses for you</li>
                <li>Provide detailed information about certifications</li>
              </ul>
              
              <h3>📚 Popular Courses:</h3>
              <ul>
                <li>RHCSA/RHCE (Red Hat Linux)</li>
                <li>AWS Cloud Computing</li>
                <li>Docker & Kubernetes</li>
                <li>Python Full Stack Development</li>
                <li>CCNA Networking</li>
                <li>DevOps with Ansible</li>
              </ul>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://litcindore.com/explore-courses" class="button">Explore All Courses</a>
              </div>
              
              <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 0;"><strong>📞 Need Immediate Help?</strong></p>
                <p style="margin: 5px 0 0 0;">Call us at: +91-9522220892</p>
                <p style="margin: 5px 0 0 0;">WhatsApp: +91-9522220892</p>
              </div>
            </div>
            
            <div class="footer">
              <p><strong>LITC INFOTECH</strong></p>
              <p>Ground Floor, Metro Tower, Near Mangal City, Indore, MP</p>
              <p>📞 +91-9522220892 | ✉️ info@litcindore.com</p>
              <p style="margin-top: 15px; color: #999;">
                This is an automated email. Please do not reply directly to this email.
              </p>
            </div>
          </div>
        </body>
        </html>
      `};return await a.sendMail(o),b.NextResponse.json({success:!0,message:"Enquiry submitted successfully"})}catch(e){return b.NextResponse.json({success:!1,error:"Failed to submit enquiry",details:e instanceof Error?e.message:"Unknown error"},{status:500})}}e.s(["POST",()=>R],5485);var w=e.i(5485);let C=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/chatbot-enquiry/route",pathname:"/api/chatbot-enquiry",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/chatbot-enquiry/route.ts",nextConfigOutput:"standalone",userland:w}),{workAsyncStorage:E,workUnitAsyncStorage:A,serverHooks:T}=C;function N(){return(0,a.patchFetch)({workAsyncStorage:E,workUnitAsyncStorage:A})}async function k(e,t,a){C.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/chatbot-enquiry/route";b=b.replace(/\/index$/,"")||"/";let y=await C.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:R,params:w,nextConfig:E,parsedUrl:A,isDraftMode:T,prerenderManifest:N,routerServerContext:k,isOnDemandRevalidate:I,revalidateOnlyGenerated:P,resolvedPathname:S,clientReferenceManifest:q,serverActionsManifest:O}=y,M=(0,l.normalizeAppPath)(b),_=!!(N.dynamicRoutes[M]||N.routes[S]),H=async()=>((null==k?void 0:k.render404)?await k.render404(e,t,A,!1):t.end("This page could not be found"),null);if(_&&!T){let e=!!N.routes[S],t=N.dynamicRoutes[M];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await H();throw new v.NoFallbackError}}let D=null;!_||C.isDev||T||(D="/index"===(D=S)?"/":D);let j=!0===C.isDev||!_,L=_&&!j;O&&q&&(0,o.setReferenceManifestsSingleton)({page:b,clientReferenceManifest:q,serverActionsManifest:O,serverModuleMap:(0,s.createServerModuleMap)({serverActionsManifest:O})});let U=e.method||"GET",F=(0,i.getTracer)(),$=F.getActiveScopeSpan(),W={params:w,prerenderManifest:N,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:j,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>C.onRequestError(e,t,a,k)},sharedContext:{buildId:R}},B=new d.NodeNextRequest(e),K=new d.NodeNextResponse(t),G=p.NextRequestAdapter.fromNodeNextRequest(B,(0,p.signalFromNodeResponse)(t));try{let o=async e=>C.handle(G,W).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=F.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${U} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${b}`)}),s=!!(0,n.getRequestMeta)(e,"minimalMode"),l=async n=>{var i,l;let d=async({previousCacheEntry:r})=>{try{if(!s&&I&&P&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await o(n);e.fetchMetrics=W.renderOpts.fetchMetrics;let l=W.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let d=W.renderOpts.collectedTags;if(!_)return await (0,x.sendResponse)(B,K,i,W.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(i.headers);d&&(t[m.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==W.renderOpts.collectedRevalidate&&!(W.renderOpts.collectedRevalidate>=m.INFINITE_CACHE)&&W.renderOpts.collectedRevalidate,a=void 0===W.renderOpts.collectedExpire||W.renderOpts.collectedExpire>=m.INFINITE_CACHE?void 0:W.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await C.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:L,isOnDemandRevalidate:I})},k),t}},p=await C.handleResponse({req:e,nextConfig:E,cacheKey:D,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:N,isRoutePPREnabled:!1,isOnDemandRevalidate:I,revalidateOnlyGenerated:P,responseGenerator:d,waitUntil:a.waitUntil,isMinimalMode:s});if(!_)return null;if((null==p||null==(i=p.value)?void 0:i.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",I?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),T&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let u=(0,h.fromNodeOutgoingHttpHeaders)(p.value.headers);return s&&_||u.delete(m.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||u.get("Cache-Control")||u.set("Cache-Control",(0,g.getCacheControlHeader)(p.cacheControl)),await (0,x.sendResponse)(B,K,new Response(p.value.body,{headers:u,status:p.value.status||200})),null};$?await l($):await F.withPropagatedContext(e.headers,()=>F.trace(u.BaseServerSpan.handleRequest,{spanName:`${U} ${b}`,kind:i.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof v.NoFallbackError||await C.onRequestError(e,t,{routerKind:"App Router",routePath:M,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:L,isOnDemandRevalidate:I})}),_)throw t;return await (0,x.sendResponse)(B,K,new Response(null,{status:500})),null}}e.s(["handler",()=>k,"patchFetch",()=>N,"routeModule",()=>C,"serverHooks",()=>T,"workAsyncStorage",()=>E,"workUnitAsyncStorage",()=>A],21874)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__bae4d4e4._.js.map