;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_editor_store_object";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.engine.dom":dependencies[0],"prezi.geometry":dependencies[1],"prezi_bacon":dependencies[2],"prezi_cet_model_editor":dependencies[3]}};})());};})(arguments);var moduleImpl=(function(){return module(function(){var c={emptySelectionInfo:function(){return{groupIds:[],nonGroupedEntityIds:[],allEntityIds:[]}}};Object.defineProperty(c,"__esModule",{value:!0});(function(a){a[a.CANVAS=0]="CANVAS";a[a.STORYLINE=1]="STORYLINE";a[a.ANIMATION_SIDEBAR=2]="ANIMATION_SIDEBAR"})(c.SelectActionSource||(c.SelectActionSource={}));var b;(function(a){a.DEFAULT="default";a.CROSSHAIR="crosshair";a.MOVE="move";a.TEXT="text";a.TOPLEFT_BOTTOMRIGHT_RESIZE="nwse-resize";a.TOPRIGHT_BOTTOMLEFT_RESIZE="nesw-resize";
a.COL_RESIZE="col-resize";a.ROW_RESIZE="row-resize";a.ZOOM_IN="zoom-in";a.ZOOM_OUT="zoom-out";a.GRAB="grab";a.GRABBING="grabbing";a.TOPLEFT_ROTATE="custom-topleft-rotate";a.TOPRIGHT_ROTATE="custom-topright-rotate";a.BOTTOMRIGHT_ROTATE="custom-bottomright-rotate";a.BOTTOMLEFT_ROTATE="custom-bottomleft-rotate";a.POINTER="pointer";a.ROTATE_0DEG="custom-0deg-rotate";a.ROTATE_10DEG="custom-10deg-rotate";a.ROTATE_20DEG="custom-20deg-rotate";a.ROTATE_30DEG="custom-30deg-rotate";a.ROTATE_40DEG="custom-40deg-rotate";
a.ROTATE_50DEG="custom-50deg-rotate";a.ROTATE_60DEG="custom-60deg-rotate";a.ROTATE_70DEG="custom-70deg-rotate";a.ROTATE_80DEG="custom-80deg-rotate";a.ROTATE_90DEG="custom-90deg-rotate";a.ROTATE_100DEG="custom-100deg-rotate";a.ROTATE_110DEG="custom-110deg-rotate";a.ROTATE_120DEG="custom-120deg-rotate";a.ROTATE_130DEG="custom-130deg-rotate";a.ROTATE_140DEG="custom-140deg-rotate";a.ROTATE_150DEG="custom-150deg-rotate";a.ROTATE_160DEG="custom-160deg-rotate";a.ROTATE_170DEG="custom-170deg-rotate";a.ROTATE_180DEG=
"custom-180deg-rotate";a.ROTATE_190DEG="custom-190deg-rotate";a.ROTATE_200DEG="custom-200deg-rotate";a.ROTATE_210DEG="custom-210deg-rotate";a.ROTATE_220DEG="custom-220deg-rotate";a.ROTATE_230DEG="custom-230deg-rotate";a.ROTATE_240DEG="custom-240deg-rotate";a.ROTATE_250DEG="custom-250deg-rotate";a.ROTATE_260DEG="custom-260deg-rotate";a.ROTATE_270DEG="custom-270deg-rotate";a.ROTATE_280DEG="custom-280deg-rotate";a.ROTATE_290DEG="custom-290deg-rotate";a.ROTATE_300DEG="custom-300deg-rotate";a.ROTATE_310DEG=
"custom-310deg-rotate";a.ROTATE_320DEG="custom-320deg-rotate";a.ROTATE_330DEG="custom-330deg-rotate";a.ROTATE_340DEG="custom-340deg-rotate";a.ROTATE_350DEG="custom-350deg-rotate"})(b=c.MouseCursorShapes||(c.MouseCursorShapes={}));c.getRotateCursorShapes=function(){return[b.ROTATE_0DEG,b.ROTATE_10DEG,b.ROTATE_20DEG,b.ROTATE_30DEG,b.ROTATE_40DEG,b.ROTATE_50DEG,b.ROTATE_60DEG,b.ROTATE_70DEG,b.ROTATE_80DEG,b.ROTATE_90DEG,b.ROTATE_100DEG,b.ROTATE_110DEG,b.ROTATE_120DEG,b.ROTATE_130DEG,b.ROTATE_140DEG,
b.ROTATE_150DEG,b.ROTATE_160DEG,b.ROTATE_170DEG,b.ROTATE_180DEG,b.ROTATE_190DEG,b.ROTATE_200DEG,b.ROTATE_210DEG,b.ROTATE_220DEG,b.ROTATE_230DEG,b.ROTATE_240DEG,b.ROTATE_250DEG,b.ROTATE_260DEG,b.ROTATE_270DEG,b.ROTATE_280DEG,b.ROTATE_290DEG,b.ROTATE_300DEG,b.ROTATE_310DEG,b.ROTATE_320DEG,b.ROTATE_330DEG,b.ROTATE_340DEG,b.ROTATE_350DEG]};(function(a){a[a.add=0]="add";a[a.replace=1]="replace";a[a.remove=2]="remove";a[a.toggle=3]="toggle"})(c.SelectActionType||(c.SelectActionType={}));(function(a){a[a.Overview=
0]="Overview";a[a.Topic=1]="Topic";a[a.Line=2]="Line";a[a.Image=3]="Image";a[a.Pdf=4]="Pdf";a[a.ChartPdf=5]="ChartPdf"})(c.PropsKind||(c.PropsKind={}));(function(a){a[a.Chain=0]="Chain";a[a.Linear=1]="Linear"})(c.StructureType||(c.StructureType={}));(c.ObjectStoreModule||(c.ObjectStoreModule={})).forceModuleGeneration=null;return c});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_editor_store_object",["require","prezi.engine.dom","prezi.geometry","prezi_bacon","prezi_cet_model_editor"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_editor_store_object.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.engine.dom"),require("prezi.geometry"),require("prezi_bacon"),require("prezi_cet_model_editor"));}else{this["prezi_editor_store_object"]=__factory(this["prezi.engine.dom"],this["prezi.geometry"],this["prezi_bacon"],this["prezi_cet_model_editor"]);}}).call(this);