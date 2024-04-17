;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_typescript_compiler";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_plugin_api":dependencies[0]}};})());};})(arguments);var moduleImpl=(function(){return module(function(Spaghetti) {
var prezi_typescript_compiler=null;
var prezi_plugin_api=Spaghetti["dependencies"]["prezi_plugin_api"];
var module$TypescriptCompilerImpl$default = {};
var __awaiter$$module$TypescriptCompilerImpl = this && module$TypescriptCompilerImpl$default.__awaiter || function(thisArg, _arguments, P, generator) {
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
Object.defineProperty(module$TypescriptCompilerImpl$default, "__esModule", {value:true});
module$TypescriptCompilerImpl$default.TypescriptCompilerImpl = class {
  compile(libs, files) {
    return __awaiter$$module$TypescriptCompilerImpl(this, void 0, void 0, function*() {
      const allLibPaths = {};
      libs.forEach((lib) => {
        allLibPaths[lib.name.substr(0, lib.name.length - ".d.ts".length)] = [`types/${lib.name}`];
      });
      return new Promise((resolve, reject) => {
        require([Spaghetti.getResourceUrl("typescript.min.js"), Spaghetti.getResourceUrl("vfs.globals.min.js")], () => {
          const compilerOptions = {"alwaysStrict":true, "incremental":true, "noImplicitReturns":true, "noFallthroughCasesInSwitch":true, "noEmitOnError":true, "keyofStringsOnly":true, "moduleResolution":ts.ModuleResolutionKind.NodeJs, "strictFunctionTypes":true, "skipLibCheck":true, "module":ts.ModuleKind.AMD, "noImplicitAny":true, "sourceMap":true, "target":ts.ScriptTarget.ES2015, "jsx":ts.JsxEmit.React, "lib":["es6", "es5", "dom"], "baseUrl":".", "paths":allLibPaths, "outFile":"build/out.js"};
          require([Spaghetti.getResourceUrl("lz-string.min.js")], (lzstring) => __awaiter$$module$TypescriptCompilerImpl(this, void 0, void 0, function*() {
            const fsMap = yield tsvfs.createDefaultMapFromCDN(compilerOptions, ts.version, true, ts, lzstring);
            libs.forEach((lib) => {
              fsMap.set(`types/${lib.name}`, lib.content);
            });
            files.forEach((file) => {
              fsMap.set(file.path, file.content);
            });
            const system = tsvfs.createSystem(fsMap);
            const host = tsvfs.createVirtualCompilerHost(system, compilerOptions, ts);
            const program = ts.createProgram({rootNames:[...fsMap.keys()], options:compilerOptions, host:host.compilerHost});
            const emitResult = program.emit();
            if (emitResult.emitSkipped) {
              reject({reason:"Typescript compilation failed", errors:this.getErrorDiagnostics(emitResult.diagnostics), emitResult});
            } else {
              resolve({compiled:fsMap.get("build/out.js"), mapping:fsMap.get("build/out.js.map")});
            }
          }));
        });
      });
    });
  }
  getErrorDiagnostics(diagnostics) {
    return diagnostics.map((diagnostic) => {
      if ("start" in diagnostic && "length" in diagnostic && diagnostic.file) {
        let {line, character} = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        return `  Error ${diagnostic.file.fileName} (${line + 1},${character + 1}): ${diagnostic.messageText}`;
      } else {
        return `  Error: ${diagnostic.messageText}`;
      }
    }).join("\n");
  }
};
var module$api$TypescriptCompiler_module$default = {};
Object.defineProperty(module$api$TypescriptCompiler_module$default, "__esModule", {value:true});
module$api$TypescriptCompiler_module$default.TypescriptCompiler = new module$TypescriptCompilerImpl$default.TypescriptCompilerImpl;
prezi_typescript_compiler = module$api$TypescriptCompiler_module$default;


return prezi_typescript_compiler;

})

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_typescript_compiler",["require","prezi_plugin_api"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_typescript_compiler.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_plugin_api"));}else{this["prezi_typescript_compiler"]=__factory(this["prezi_plugin_api"]);}}).call(this);