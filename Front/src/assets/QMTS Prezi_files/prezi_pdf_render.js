;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_pdf_render";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.geometry":dependencies[0],"prezi_logger":dependencies[1],"prezi_pdf_js":dependencies[2]}};})());};})(arguments);var moduleImpl=(function(){return module(function(e){var n=e.dependencies.prezi_logger,f=e.dependencies.prezi_pdf_js,g={};Object.defineProperty(g,"__esModule",{value:!0});g.K=class{constructor(a){this.j=a}getWidth(){return this.D()?this.w():this.B()}getHeight(){return this.D()?this.B():this.w()}B(){return f.PdfJsModule.pageView(this.j)[2]-f.PdfJsModule.pageView(this.j)[0]}w(){return f.PdfJsModule.pageView(this.j)[3]-f.PdfJsModule.pageView(this.j)[1]}D(){return null!=this.j.F&&(90===this.j.F.rotate||270===this.j.F.rotate)}};var k=
{};Object.defineProperty(k,"__esModule",{value:!0});k.I=class{constructor(a){this.document=a}getNumberOfPages(){return this.document.numPages}loadPage(a,b,h){this.document.getPage(a).then((a)=>{b(new g.K(a))}).catch(function(a){h(a)})}};var m={};Object.defineProperty(m,"__esModule",{value:!0});m.J=class{loadFromBytes(b,l,h){a.f.L((a)=>{a.getDocument({data:b}).promise.then((a)=>{l(new k.I(a))}).catch(function(a){h(a)})})}};var b={};Object.defineProperty(b,"__esModule",{value:!0});b.i=class{constructor(a){this.M=
a;this.logger=n.LoggerModule.getLoggerManager().createLogger("PdfRenderer")}render(a,l,h,e,f,g){const d=this.M.j;var c=d.getViewport({scale:e});const k=f.getContext("2d");c.transform[4]+=l;c.transform[5]+=h;c={canvasContext:k,viewport:c,background:"rgba(255, 255, 255, 0)"};if(b.i.o){let d,c;d={start:()=>{c=this.render(a,l,h,e,f,g)},cancel:()=>{c()}};c=()=>{b.i.m.splice(b.i.m.indexOf(d),1)};b.i.m.push(d);return d.cancel}{const a=d.render(c);b.i.o=!0;a.promise.then(()=>{b.i.o=!1;b.i.G();g()}).catch((a)=>
{"cancelled"!==a&&this.logger.error({action:"pdfrender",object:"pdf",trigger:"render-task"})});return()=>{a.cancel();b.i.o=!1;b.i.G()}}}static G(){0!==b.i.m.length&&b.i.m.shift().start()}};b.i.o=!1;b.i.m=[];var a={};Object.defineProperty(a,"__esModule",{value:!0});a.f=class{static createPdfRender(d){a.f.H();return new b.i(d)}static createPdfLoader(){a.f.H();null==a.f.u&&(a.f.u=new m.J);return a.f.u}static H(){a.f.C||(a.f.C=!0,f.PdfJsModule.load((b)=>{a.f.v=b;a.f.A.forEach((a)=>a(b))}))}static L(b){a.f.v?
b(a.f.v):a.f.A.push(b)}};a.f.N=null;a.f.u=null;a.f.v=null;a.f.C=!1;a.f.A=[];e={createPdfLoader:function(){return a.f.createPdfLoader()},createPdfRender:function(b){return a.f.createPdfRender(b)}};Object.defineProperty(e,"__esModule",{value:!0});return e});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_pdf_render",["require","prezi.geometry","prezi_logger","prezi_pdf_js"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_pdf_render.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.geometry"),require("prezi_logger"),require("prezi_pdf_js"));}else{this["prezi_pdf_render"]=__factory(this["prezi.geometry"],this["prezi_logger"],this["prezi_pdf_js"]);}}).call(this);