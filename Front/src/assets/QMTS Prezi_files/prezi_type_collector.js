;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_type_collector";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_plugin_api":dependencies[0]}};})());};})(arguments);var moduleImpl=(function(){return module(function(Spaghetti) {
var prezi_type_collector=null;
var prezi_plugin_api=Spaghetti["dependencies"]["prezi_plugin_api"];
var module$TypeCollectorImpl$default = {};
var __awaiter$$module$TypeCollectorImpl = this && module$TypeCollectorImpl$default.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(module$TypeCollectorImpl$default, "__esModule", {value:true});
module$TypeCollectorImpl$default.TypeCollectorImpl = class {
  loadAllLibs() {
    return __awaiter$$module$TypeCollectorImpl(this, void 0, void 0, function*() {
      const libs = JSON.parse(yield this.getContent("types/plugin_api_typelist.json"));
      return Promise.all(libs.map((lib) => __awaiter$$module$TypeCollectorImpl(this, void 0, void 0, function*() {
        const content = yield this.getContent("types/" + lib);
        return {name:lib, content};
      })));
    });
  }
  getContent(reasourceUrl) {
    return __awaiter$$module$TypeCollectorImpl(this, void 0, void 0, function*() {
      const res = yield fetch(Spaghetti.getResourceUrl(reasourceUrl));
      return res.text();
    });
  }
};
var module$api$TypeCollector_module$default = {};
Object.defineProperty(module$api$TypeCollector_module$default, "__esModule", {value:true});
module$api$TypeCollector_module$default.TypeCollector = new module$TypeCollectorImpl$default.TypeCollectorImpl;
prezi_type_collector = module$api$TypeCollector_module$default;


return prezi_type_collector;

})

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_type_collector",["require","prezi_plugin_api"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_type_collector.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_plugin_api"));}else{this["prezi_type_collector"]=__factory(this["prezi_plugin_api"]);}}).call(this);