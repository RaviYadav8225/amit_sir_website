module.exports=[18622,(e,t,n)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,n)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,n)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,n)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},26750,e=>{"use strict";var t=e.i(47909),n=e.i(74017),r=e.i(96250),a=e.i(59756),o=e.i(61916),s=e.i(14444),i=e.i(37092),l=e.i(69741),u=e.i(16795),c=e.i(87718),p=e.i(95169),d=e.i(47587),h=e.i(66012),m=e.i(70101),g=e.i(26937),x=e.i(10372),f=e.i(93695);e.i(52474);var R=e.i(220),v=e.i(89171);async function w(e){try{let t,n,r=await e.json(),a=`
<h1>🎓 Enrollment Confirmation - ${r.course?.name}</h1>

<h2>Hello ${r.name}!</h2>
<p>Welcome to LITC Institute! Your enrollment has been received successfully.</p>

<h3>📚 Course Details:</h3>
<ul>
  <li><strong>Course:</strong> ${r.course?.name}</li>
  <li><strong>Code:</strong> ${r.course?.code}</li>
  <li><strong>Duration:</strong> ${r.course?.duration}</li>
  <li><strong>Level:</strong> ${r.course?.level}</li>
  <li><strong>Batch:</strong> ${r.batchTiming}</li>
</ul>

<p><strong>Enrollment ID:</strong> ${r.enrollmentId}</p>

<hr>

<h2>📞 Next Steps</h2>
<p>Our team will contact you within 24 hours to discuss:</p>
<ul>
  <li>Course fee and payment options</li>
  <li>Batch start date and schedule</li>
  <li>Course materials and resources</li>
  <li>Any questions you may have</li>
</ul>

<hr>

<h3>📞 Need Help?</h3>
<p>Call: <strong>+91-9425094250</strong></p>
<p>WhatsApp: <strong>+91-9522220892</strong></p>
<p>Email: <strong>litcindore@gmail.com</strong></p>

<p>Thank you for choosing LITC Institute! 🚀</p>
    `,o=await fetch("https://formsubmit.co/ajax/"+r.email,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`Enrollment Confirmation - ${r.course?.name}`,_template:"box",_captcha:"false",message:a,enrollmentId:r.enrollmentId,studentName:r.name,course:r.course?.name})});try{let e=await o.text();t=e?JSON.parse(e):{success:!0}}catch(e){t={success:!0,note:"Email sent via FormSubmit"}}let s=`
<h1>🚨 NEW ENROLLMENT ALERT</h1>

<h2>Student Details:</h2>
<ul>
  <li><strong>Name:</strong> ${r.name}</li>
  <li><strong>Email:</strong> ${r.email}</li>
  <li><strong>Phone:</strong> ${r.phone}</li>
  <li><strong>Enrollment ID:</strong> ${r.enrollmentId}</li>
</ul>

<h2>Course:</h2>
<ul>
  <li><strong>Course:</strong> ${r.course?.name}</li>
  <li><strong>Code:</strong> ${r.course?.code}</li>
  <li><strong>Batch:</strong> ${r.batchTiming}</li>
  <li><strong>Payment Plan:</strong> ${r.paymentPlan}</li>
</ul>

<h2>Action Required:</h2>
<p>✅ Contact student within 24 hours</p>
<p>📞 Discuss course fee and payment options</p>
<p>✉️ Send confirmation email after enrollment finalized</p>

<h3>Quick Actions:</h3>
<p>📞 Call: <a href="tel:${r.phone}">${r.phone}</a></p>
<p>💬 WhatsApp: <a href="https://wa.me/${r.phone.replace(/[^0-9]/g,"")}">Send Message</a></p>
    `,i=await fetch("https://formsubmit.co/ajax/litcindore@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({_subject:`🚨 New Enrollment: ${r.name} - ${r.course?.name}`,_template:"box",_captcha:"false",message:s,enrollmentId:r.enrollmentId,studentName:r.name,studentEmail:r.email,studentPhone:r.phone,course:r.course?.name})});try{let e=await i.text();n=e?JSON.parse(e):{success:!0}}catch(e){n={success:!0,note:"Email sent via FormSubmit"}}return v.NextResponse.json({success:!0,message:"Enrollment completed! Our team will contact you shortly.",enrollmentId:r.enrollmentId,emails:{student:t,admin:n},contact:{whatsapp:"+91-9522220892",email:"litcindore@gmail.com",phone:"+91-9425094250"}})}catch(e){return v.NextResponse.json({success:!1,error:"Enrollment failed",details:e instanceof Error?e.message:"Unknown error",contact:{phone:"+91-9425094250",whatsapp:"+91-9522220892",email:"litcindore@gmail.com"}},{status:500})}}e.s(["POST",()=>w],63114);var E=e.i(63114);let y=new t.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/course-enrollment-new/route",pathname:"/api/course-enrollment-new",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/course-enrollment-new/route.ts",nextConfigOutput:"standalone",userland:E}),{workAsyncStorage:C,workUnitAsyncStorage:b,serverHooks:N}=y;function A(){return(0,r.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:b})}async function T(e,t,r){y.isDev&&(0,a.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api/course-enrollment-new/route";v=v.replace(/\/index$/,"")||"/";let w=await y.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!w)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:E,params:C,nextConfig:b,parsedUrl:N,isDraftMode:A,prerenderManifest:T,routerServerContext:S,isOnDemandRevalidate:O,revalidateOnlyGenerated:P,resolvedPathname:$,clientReferenceManifest:I,serverActionsManifest:j}=w,_=(0,l.normalizeAppPath)(v),k=!!(T.dynamicRoutes[_]||T.routes[$]),q=async()=>((null==S?void 0:S.render404)?await S.render404(e,t,N,!1):t.end("This page could not be found"),null);if(k&&!A){let e=!!T.routes[$],t=T.dynamicRoutes[_];if(t&&!1===t.fallback&&!e){if(b.experimental.adapterPath)return await q();throw new f.NoFallbackError}}let D=null;!k||y.isDev||A||(D="/index"===(D=$)?"/":D);let H=!0===y.isDev||!k,M=k&&!H;j&&I&&(0,s.setReferenceManifestsSingleton)({page:v,clientReferenceManifest:I,serverActionsManifest:j,serverModuleMap:(0,i.createServerModuleMap)({serverActionsManifest:j})});let U=e.method||"GET",L=(0,o.getTracer)(),F=L.getActiveScopeSpan(),B={params:C,prerenderManifest:T,renderOpts:{experimental:{authInterrupts:!!b.experimental.authInterrupts},cacheComponents:!!b.cacheComponents,supportsDynamicResponse:H,incrementalCache:(0,a.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:b.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,n,r)=>y.onRequestError(e,t,r,S)},sharedContext:{buildId:E}},K=new u.NodeNextRequest(e),W=new u.NodeNextResponse(t),J=c.NextRequestAdapter.fromNodeNextRequest(K,(0,c.signalFromNodeResponse)(t));try{let s=async e=>y.handle(J,B).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let n=L.getRootSpanAttributes();if(!n)return;if(n.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${n.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=n.get("next.route");if(r){let t=`${U} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t)}else e.updateName(`${U} ${v}`)}),i=!!(0,a.getRequestMeta)(e,"minimalMode"),l=async a=>{var o,l;let u=async({previousCacheEntry:n})=>{try{if(!i&&O&&P&&!n)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=await s(a);e.fetchMetrics=B.renderOpts.fetchMetrics;let l=B.renderOpts.pendingWaitUntil;l&&r.waitUntil&&(r.waitUntil(l),l=void 0);let u=B.renderOpts.collectedTags;if(!k)return await (0,h.sendResponse)(K,W,o,B.renderOpts.pendingWaitUntil),null;{let e=await o.blob(),t=(0,m.toNodeOutgoingHttpHeaders)(o.headers);u&&(t[x.NEXT_CACHE_TAGS_HEADER]=u),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let n=void 0!==B.renderOpts.collectedRevalidate&&!(B.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&B.renderOpts.collectedRevalidate,r=void 0===B.renderOpts.collectedExpire||B.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:B.renderOpts.collectedExpire;return{value:{kind:R.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:n,expire:r}}}}catch(t){throw(null==n?void 0:n.isStale)&&await y.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:O})},S),t}},c=await y.handleResponse({req:e,nextConfig:b,cacheKey:D,routeKind:n.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:T,isRoutePPREnabled:!1,isOnDemandRevalidate:O,revalidateOnlyGenerated:P,responseGenerator:u,waitUntil:r.waitUntil,isMinimalMode:i});if(!k)return null;if((null==c||null==(o=c.value)?void 0:o.kind)!==R.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",O?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),A&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,m.fromNodeOutgoingHttpHeaders)(c.value.headers);return i&&k||p.delete(x.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,g.getCacheControlHeader)(c.cacheControl)),await (0,h.sendResponse)(K,W,new Response(c.value.body,{headers:p,status:c.value.status||200})),null};F?await l(F):await L.withPropagatedContext(e.headers,()=>L.trace(p.BaseServerSpan.handleRequest,{spanName:`${U} ${v}`,kind:o.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},l))}catch(t){if(t instanceof f.NoFallbackError||await y.onRequestError(e,t,{routerKind:"App Router",routePath:_,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isStaticGeneration:M,isOnDemandRevalidate:O})}),k)throw t;return await (0,h.sendResponse)(K,W,new Response(null,{status:500})),null}}e.s(["handler",()=>T,"patchFetch",()=>A,"routeModule",()=>y,"serverHooks",()=>N,"workAsyncStorage",()=>C,"workUnitAsyncStorage",()=>b],26750)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__f620c6f8._.js.map