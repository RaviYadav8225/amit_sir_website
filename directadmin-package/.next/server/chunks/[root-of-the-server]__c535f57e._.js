module.exports=[18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},90917,e=>{"use strict";var t=e.i(47909),r=e.i(74017),n=e.i(96250),a=e.i(59756),s=e.i(61916),o=e.i(14444),i=e.i(37092),l=e.i(69741),d=e.i(16795),c=e.i(87718),u=e.i(95169),p=e.i(47587),g=e.i(66012),m=e.i(70101),h=e.i(26937),x=e.i(10372),f=e.i(93695);e.i(52474);var v=e.i(220),R=e.i(89171);async function E(e){try{let{formData:t}=await e.json(),r={to:"litcindore@gmail.com",subject:`🎓 URGENT: New Consultation Request from ${t.fullName}`,html:`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .header { background: #4F46E5; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .section { margin: 20px 0; padding: 15px; border-left: 4px solid #4F46E5; background: #f8f9fa; }
                .highlight { background: #fef3c7; padding: 2px 5px; }
                .urgent { color: #dc2626; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🎓 New Consultation Request</h1>
                <p>LITC Infotech - Immediate Action Required</p>
            </div>
            
            <div class="content">
                <p class="urgent">⚡ URGENT: Please contact this student within 24 hours!</p>
                
                <div class="section">
                    <h3>👤 Student Information</h3>
                    <p><strong>Name:</strong> ${t.fullName}</p>
                    <p><strong>Phone:</strong> <span class="highlight">${t.phone}</span></p>
                    <p><strong>Email:</strong> ${t.email}</p>
                    <p><strong>Location:</strong> ${t.location}</p>
                </div>
                
                <div class="section">
                    <h3>💼 Professional Background</h3>
                    <p><strong>Current Role:</strong> ${t.currentRole}</p>
                    <p><strong>Experience:</strong> ${t.experience}</p>
                    <p><strong>Industry:</strong> ${t.industry}</p>
                </div>
                
                <div class="section">
                    <h3>🎯 Learning Goals</h3>
                    <p><strong>Interested Courses:</strong> <span class="highlight">${t.interestedCourses.join(", ")}</span></p>
                    <p><strong>Timeline:</strong> ${t.timelineToStart}</p>
                    <p><strong>Learning Mode:</strong> ${t.learningMode}</p>
                    <p><strong>Preferred Slots:</strong> ${t.preferredTimeSlots.join(", ")}</p>
                </div>
                
                <div class="section">
                    <h3>💰 Budget & Questions</h3>
                    <p><strong>Budget Range:</strong> ${t.budget}</p>
                    <p><strong>Questions:</strong> ${t.specificQuestions||"None"}</p>
                </div>
                
                <div class="section">
                    <h3>📅 Submission Details</h3>
                    <p><strong>Submitted At:</strong> ${new Date(t.submittedAt).toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}</p>
                    <p><strong>Request ID:</strong> ${t.requestId}</p>
                </div>
                
                <div style="background: #dc2626; color: white; padding: 15px; text-align: center; margin: 20px 0;">
                    <h3>⚡ IMMEDIATE ACTION REQUIRED</h3>
                    <p>📞 Call: ${t.phone} | 📧 Email: ${t.email}</p>
                </div>
            </div>
        </body>
        </html>
      `,text:`
🎓 New Consultation Request from ${t.fullName}

URGENT: Please contact within 24 hours!

Student Details:
- Name: ${t.fullName}
- Phone: ${t.phone}
- Email: ${t.email}
- Location: ${t.location}

Professional Background:
- Role: ${t.currentRole}
- Experience: ${t.experience}
- Industry: ${t.industry}

Learning Goals:
- Courses: ${t.interestedCourses.join(", ")}
- Timeline: ${t.timelineToStart}
- Mode: ${t.learningMode}
- Slots: ${t.preferredTimeSlots.join(", ")}

Budget: ${t.budget}
Questions: ${t.specificQuestions||"None"}

Submitted: ${new Date(t.submittedAt).toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}
Request ID: ${t.requestId}

Contact: ${t.phone} | ${t.email}
      `};for(let e of[async()=>{let e=await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:"service_zx5h5aj",template_id:"template_9h1qkmi",user_id:"user_4JaIFWG8s1K6eYtP2PfQH",template_params:{to_email:"litcindore@gmail.com",from_name:t.fullName,message:r.html,subject:r.subject}})});return{success:e.ok,service:"EmailJS",status:e.status}},async()=>{let e=new FormData;e.append("email","litcindore@gmail.com"),e.append("subject",r.subject),e.append("message",r.text);let t=await fetch("https://formsubmit.co/litcindore@gmail.com",{method:"POST",body:e});return{success:t.ok,service:"FormSubmit",status:t.status}}])try{let t=await e();if(t.success)return R.NextResponse.json({success:!0,service:t.service,message:"Email sent successfully",recipient:"litcindore@gmail.com"})}catch(e){continue}return R.NextResponse.json({success:!1,message:"All email services failed, content logged for manual processing",recipient:"litcindore@gmail.com",manualProcessing:!0})}catch(e){return R.NextResponse.json({success:!1,error:e instanceof Error?e.message:"Unknown error",service:"backup"})}}e.s(["POST",()=>E],89116);var b=e.i(89116);let w=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/backup-email/route",pathname:"/api/backup-email",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/backup-email/route.ts",nextConfigOutput:"standalone",userland:b}),{workAsyncStorage:y,workUnitAsyncStorage:C,serverHooks:N}=w;function $(){return(0,n.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:C})}async function T(e,t,n){w.isDev&&(0,a.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let R="/api/backup-email/route";R=R.replace(/\/index$/,"")||"/";let E=await w.prepare(e,t,{srcPage:R,multiZoneDraftMode:!1});if(!E)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:b,params:y,nextConfig:C,parsedUrl:N,isDraftMode:$,prerenderManifest:T,routerServerContext:A,isOnDemandRevalidate:S,revalidateOnlyGenerated:k,resolvedPathname:P,clientReferenceManifest:j,serverActionsManifest:I}=E,q=(0,l.normalizeAppPath)(R),_=!!(T.dynamicRoutes[q]||T.routes[P]),O=async()=>((null==A?void 0:A.render404)?await A.render404(e,t,N,!1):t.end("This page could not be found"),null);if(_&&!$){let e=!!T.routes[P],t=T.dynamicRoutes[q];if(t&&!1===t.fallback&&!e){if(C.experimental.adapterPath)return await O();throw new f.NoFallbackError}}let D=null;!_||w.isDev||$||(D="/index"===(D=P)?"/":D);let M=!0===w.isDev||!_,U=_&&!M;I&&j&&(0,o.setReferenceManifestsSingleton)({page:R,clientReferenceManifest:j,serverActionsManifest:I,serverModuleMap:(0,i.createServerModuleMap)({serverActionsManifest:I})});let H=e.method||"GET",F=(0,s.getTracer)(),L=F.getActiveScopeSpan(),K={params:y,prerenderManifest:T,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:M,incrementalCache:(0,a.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:C.cacheLife,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,n)=>w.onRequestError(e,t,n,A)},sharedContext:{buildId:b}},B=new d.NodeNextRequest(e),G=new d.NodeNextResponse(t),Q=c.NextRequestAdapter.fromNodeNextRequest(B,(0,c.signalFromNodeResponse)(t));try{let o=async e=>w.handle(Q,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=F.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==u.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=r.get("next.route");if(n){let t=`${H} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${R}`)}),i=!!(0,a.getRequestMeta)(e,"minimalMode"),l=async a=>{var s,l;let d=async({previousCacheEntry:r})=>{try{if(!i&&S&&k&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await o(a);e.fetchMetrics=K.renderOpts.fetchMetrics;let l=K.renderOpts.pendingWaitUntil;l&&n.waitUntil&&(n.waitUntil(l),l=void 0);let d=K.renderOpts.collectedTags;if(!_)return await (0,g.sendResponse)(B,G,s,K.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,m.toNodeOutgoingHttpHeaders)(s.headers);d&&(t[x.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,n=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:n}}}}catch(t){throw(null==r?void 0:r.isStale)&&await w.onRequestError(e,t,{routerKind:"App Router",routePath:R,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:S})},A),t}},c=await w.handleResponse({req:e,nextConfig:C,cacheKey:D,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:T,isRoutePPREnabled:!1,isOnDemandRevalidate:S,revalidateOnlyGenerated:k,responseGenerator:d,waitUntil:n.waitUntil,isMinimalMode:i});if(!_)return null;if((null==c||null==(s=c.value)?void 0:s.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",S?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),$&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let u=(0,m.fromNodeOutgoingHttpHeaders)(c.value.headers);return i&&_||u.delete(x.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||u.get("Cache-Control")||u.set("Cache-Control",(0,h.getCacheControlHeader)(c.cacheControl)),await (0,g.sendResponse)(B,G,new Response(c.value.body,{headers:u,status:c.value.status||200})),null};L?await l(L):await F.withPropagatedContext(e.headers,()=>F.trace(u.BaseServerSpan.handleRequest,{spanName:`${H} ${R}`,kind:s.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},l))}catch(t){if(t instanceof f.NoFallbackError||await w.onRequestError(e,t,{routerKind:"App Router",routePath:q,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:S})}),_)throw t;return await (0,g.sendResponse)(B,G,new Response(null,{status:500})),null}}e.s(["handler",()=>T,"patchFetch",()=>$,"routeModule",()=>w,"serverHooks",()=>N,"workAsyncStorage",()=>y,"workUnitAsyncStorage",()=>C],90917)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__c535f57e._.js.map