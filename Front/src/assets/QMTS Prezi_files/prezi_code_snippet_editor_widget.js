;(function(){var baseUrl;var __factory=function(){var React=arguments[0];var ReactDOM=arguments[1];var ReactTransitionGroup=arguments[2];var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_code_snippet_editor_widget";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_koi_widgets":dependencies[3],"prezi_logger":dependencies[4],"prezi_plugin_api_docs":dependencies[5],"prezi_code_snippet_editor":dependencies[6]}};})(),React,ReactDOM,ReactTransitionGroup);};})(arguments);var moduleImpl=(function(){return module(function(d,f,r,m){var w=d.dependencies.prezi_code_snippet_editor,x=d.dependencies.prezi_koi_widgets,t=d.dependencies.prezi_logger,y=d.dependencies.prezi_plugin_api_docs,e={},u=this&&e.__awaiter||function(a,b,g,c){function l(a){return a instanceof g?a:new g(function(b){b(a)})}return new (g||(g=Promise))(function(g,h){function d(a){try{f(c.next(a))}catch(k){h(k)}}function e(a){try{f(c["throw"](a))}catch(k){h(k)}}function f(a){a.done?g(a.value):l(a.value).then(d,e)}f((c=c.apply(a,b||[])).next())})};
Object.defineProperty(e,"__esModule",{value:!0});class p{constructor(){let a=this.getStoreState();null==a?this.saveStoreState({currentKey:null,allKeys:[],currentPluginKey:null,allPluginKeys:[]}):null==a.allPluginKeys&&this.saveStoreState({currentPluginKey:null,allPluginKeys:[]})}getStoreState(){const a=localStorage.getItem(p.stateKey);return null==a?null:JSON.parse(a)}saveStoreState(a){a=Object.assign(Object.assign({},this.getStoreState()),a);localStorage.setItem(p.stateKey,JSON.stringify(a));return a}}
p.stateKey="CODESNIPPET_state";class v{constructor(a,b){this.storage=a;this.localStoragePrefix=b}get currentName(){return this.storage.currentKey}set currentName(a){this.storage.currentKey=a}get currentContent(){return this.readSnippet(this.currentName)}set currentContent(a){localStorage.setItem(this.localStoragePrefix+this.currentName,a)}get all(){return this.storage.allKeys}create(a,b){this.storage.allKeys=0>this.all.indexOf(a)?[...this.all,a]:this.all;this.currentName=a;this.currentContent=null!=
b?b:this.newScriptScr}init(a){return u(this,void 0,void 0,function*(){const b=yield a;this.newScriptScr=b.newDoc.src;for(let a of b.samples)null==this.readSnippet(a.name)&&this.create(a.name,a.src);null!=this.storage.currentKey&&(this.currentName=this.storage.currentKey)})}readSnippet(a){return 0<=this.all.indexOf(a)?localStorage.getItem(this.localStoragePrefix+a):null}}e.Store=class{constructor(){const a=new p;this._snippet=new v({get currentKey(){return a.getStoreState().currentKey},set currentKey(b){a.saveStoreState({currentKey:b})},
get allKeys(){return a.getStoreState().allKeys},set allKeys(b){a.saveStoreState({allKeys:b})}},e.Store.localStorageSnippetPrefix);this._plugin=new v({get currentKey(){return a.getStoreState().currentPluginKey},set currentKey(b){a.saveStoreState({currentPluginKey:b})},get allKeys(){return a.getStoreState().allPluginKeys},set allKeys(b){a.saveStoreState({allPluginKeys:b})}},e.Store.localStoragePluginPrefix)}init(a){return u(this,void 0,void 0,function*(){yield this._snippet.init(a.getSnippets());yield this._plugin.init(a.getPlugins())})}get snippet(){return this._snippet}get plugin(){return this._plugin}};
e.Store.localStorageSnippetPrefix="CODESNIPPET_";e.Store.localStoragePluginPrefix="CODEPLUGIN_";d={};var n=this&&d.__awaiter||function(a,b,c,h){function g(a){return a instanceof c?a:new c(function(b){b(a)})}return new (c||(c=Promise))(function(c,d){function f(a){try{e(h.next(a))}catch(k){d(k)}}function l(a){try{e(h["throw"](a))}catch(k){d(k)}}function e(a){a.done?c(a.value):g(a.value).then(f,l)}e((h=h.apply(a,b||[])).next())})};Object.defineProperty(d,"__esModule",{value:!0});var q;(function(a){a.loading=
"loading";a.loaded="loaded"})(q||(q={}));var c;(function(a){a.snippet="snippet";a.plugin="plugin"})(c||(c={}));d.CodeSnippetEditorWidget=class extends f.Component{constructor(a){super(a);this.widgets=x.KoiWidgetsModule.getWidgetFactory();this.logger=t.LoggerModule.getLoggerManager().createLogger("prezi_koi_sidebar.CodeSnippetEditorComponent");this.state={output:"",snippetsLoaded:!1,isLoadPopupOpen:!1,isModePopupOpen:!1,isNewPopupOpen:!1,newSnippetName:"",componentState:q.loading,codeEditMode:c.plugin};
this.store=new e.Store}reload(){null!=this.codeSnippetEditor&&this.codeSnippetEditor.setText(this.getCurrentFileName(),this.getContentFromStore())}getContentFromStore(){return this.state.codeEditMode===c.snippet?this.store.snippet.currentContent:this.store.plugin.currentContent}getCurrentFileName(){var a=this.state.codeEditMode===c.snippet?this.store.snippet.currentName:this.store.plugin.currentName;if(null==a)return null;a=a.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,
"-").replace(/^-+/,"").replace(/-+$/,"");return this.state.codeEditMode===c.snippet?`${a}-snippet.ts`:`${a}-plugin.ts`}componentWillMount(){this.init()}componentWillUnmount(){null!=this.unsubscribeFromFocusSteam&&this.unsubscribeFromFocusSteam()}log(a,b=!1){const c=this.getFormattedTime(new Date)+" "+("string"===typeof a?a:a instanceof Error?a.message:JSON.stringify(a,null,"  "));this.setState((a)=>Object.assign(Object.assign({},a),{output:b||""===a.output?c:a.output+"\n"+c}))}getFormattedTime(a){return this.pad(a.getHours(),
2)+":"+this.pad(a.getMinutes(),2)+":"+this.pad(a.getSeconds(),2)+","+this.pad(a.getMilliseconds(),3)}pad(a,b){for(a+="";a.length<b;)a="0"+a;return a}new(a){this.state.codeEditMode===c.snippet?this.store.snippet.create(a):this.store.plugin.create(a);this.reload();this.forceUpdate()}init(){return n(this,void 0,void 0,function*(){try{const a=yield w();this.initSnippets(a);this.initEditor(a)}catch(a){t.LoggerModule.logException(this.logger,"CodeSnippetEditor","ensureState",a)}})}initSnippets(a){return n(this,
void 0,void 0,function*(){yield this.store.init(a);this.setState({snippetsLoaded:!0})})}initEditor(a){return n(this,void 0,void 0,function*(){try{this.codeSnippetEditor=yield a.createEditor(this.getCurrentFileName(),this.getContentFromStore(),this.props.callbacks.exec,this.props.callbacks.execPlugin,(a)=>this.log(a,!1),(a)=>this.state.codeEditMode===c.snippet?this.store.snippet.currentContent=a:this.store.plugin.currentContent=a,()=>this.props.callbacks.onClose())}catch(l){window.alert("Could not open code snippet editor: "+
l);this.props.callbacks.onClose();return}const b=[];for(var d=0;d<document.styleSheets.length;d++)try{b.push.apply(b,document.styleSheets.item(d).cssRules)}catch(l){}this.unsubscribeFromFocusSteam=this.props.focusRequestStream.onValue(()=>{this.codeSnippetEditor.getEditorWindow().focus()});d=this.codeSnippetEditor.getEditorWindow().document;const e=d.createElement("style");e.innerText=b.map((a)=>a.cssText).join("\n");d.head.appendChild(e);this.setState({componentState:q.loaded});this.render()})}createInformation(){return f.createElement("div",
{"data-prezi-input":"",style:{width:"95%",height:"95%"}},this.widgets.textArea({value:this.state.output,style:{width:"100%",height:"100%",fontFamily:["Menlo","Monaco","Courier New","monospace"],fontSize:12,resize:"none"}}))}createControls(){return this.state.snippetsLoaded?f.createElement("div",{style:{display:"flex"}},[f.createElement("div",{style:{width:"130px",paddingLeft:"20px"}},[this.widgets.menuButton({className:"normal regular",button:{className:"normal regular",rightIcon:"icon-arrow-down",
text:this.state.codeEditMode===c.snippet?"Snippets":"Plugins",active:this.state.isModePopupOpen,lookupId:"type-selector",onClick:()=>{this.setState({isModePopupOpen:!this.state.isModePopupOpen})}},menu:{className:"topic-menu",visible:this.state.isModePopupOpen,content:this.widgets.buttonGroup({alignment:"vertical",items:[{text:"Snippets",lookupId:"snippets",className:"normal "+(this.state.codeEditMode===c.snippet?"active":"inactive"),leftIcon:this.state.codeEditMode===c.snippet?"icon-checkmark":null,
onClick:()=>{this.setState({codeEditMode:c.snippet,isModePopupOpen:!this.state.isModePopupOpen},()=>this.reload())}},{text:"Plugins",lookupId:"plugins",className:"normal "+(this.state.codeEditMode===c.plugin?"active":"inactive"),leftIcon:this.state.codeEditMode===c.plugin?"icon-checkmark":null,onClick:()=>{this.setState({codeEditMode:c.plugin,isModePopupOpen:!this.state.isModePopupOpen},()=>this.reload())}}]})}})]),this.state.codeEditMode===c.snippet?this.createEditControls({runLabel:"Run code snippet",
lookupPrefix:"snippet",runCmd:()=>n(this,void 0,void 0,function*(){const a=this.store.snippet.currentName;this.log(`Starting "${a}":`,!0);try{null!=this.codeSnippetEditor&&(yield this.codeSnippetEditor.run())}catch(b){this.log("ERROR"),this.log(b)}this.log(`"${a}" done.`)}),codeParts:this.store.snippet.all,currentCodePart:this.store.snippet.currentName,codePartSelectCmd:(a)=>{this.store.snippet.currentName=a;this.reload()}}):this.createEditControls({runLabel:"Register plugin",lookupPrefix:"plugin",
runCmd:()=>n(this,void 0,void 0,function*(){const a=this.store.plugin.currentName;this.log(`Registering "${a}":`,!0);try{null!=this.codeSnippetEditor&&(yield this.codeSnippetEditor.registerPlugin(a))}catch(b){this.log("ERROR"),this.log(b)}this.log(`"Registering ${a}" done.`)}),codeParts:this.store.plugin.all,currentCodePart:this.store.plugin.currentName,codePartSelectCmd:(a)=>{this.store.plugin.currentName=a;this.reload()}}),this.widgets.button({text:"Docs",className:"normal regular",onClick:()=>
{window.open(y.getAppRootUrl(),"docs","width=1040; height=780")}})]):null}createEditControls(a){return[this.widgets.button({text:a.runLabel,className:"normal regular",lookupId:a.lookupPrefix+"-run",leftIcon:"icon-play",onClick:a.runCmd}),f.createElement("div",{style:{flexGrow:1}}),this.widgets.menuButton({className:"normal regular",button:{className:"normal regular",rightIcon:"icon-arrow-down",text:a.currentCodePart,lookupId:a.lookupPrefix+"-select",active:this.state.isLoadPopupOpen,onClick:()=>{this.setState({isLoadPopupOpen:!this.state.isLoadPopupOpen})}},
menu:{className:"topic-menu",visible:this.state.isLoadPopupOpen,content:this.widgets.buttonGroup({alignment:"vertical",items:a.codeParts.map((b)=>({text:b,lookupId:a.lookupPrefix+"-item-"+b,className:"normal "+(a.currentCodePart===b?"active":"inactive"),leftIcon:a.currentCodePart===b?"icon-checkmark":null,onClick:()=>{a.codePartSelectCmd(b);this.setState({isLoadPopupOpen:!this.state.isLoadPopupOpen})}}))})}}),f.createElement("div",{style:{flexGrow:1}}),this.widgets.menuButton({className:"normal regular",
button:{className:"normal regular",text:"Create new",active:this.state.isNewPopupOpen,onClick:()=>{this.setState({isNewPopupOpen:!this.state.isNewPopupOpen})}},menu:{className:"topic-menu",pointerPosition:1,visible:this.state.isNewPopupOpen,content:this.widgets.inputGroup({children:[this.widgets.inputText({placeholder:"Name...",onChange:(a)=>{this.setState({newSnippetName:a.target.value})},selectOnFocus:!0,onEnterKey:()=>{this.new(this.state.newSnippetName);this.setState({isNewPopupOpen:!1})}}),this.widgets.button({text:"Create",
className:"regular normal",onClick:()=>{this.new(this.state.newSnippetName);this.setState({isNewPopupOpen:!1})}})]})}})]}render(){this.codeSnippetEditor&&setTimeout(()=>{r.render(this.createControls(),this.codeSnippetEditor.getTopElement());r.render(this.createInformation(),this.codeSnippetEditor.getBottomElement())},0);return f.createElement("div",{"data-state":this.state.componentState,"data-lookup":"code-snippet-editor"})}};d.CodeSnippetEditorWidget.displayName="CodeSnippetEditorWidget";m={};Object.defineProperty(m,
"__esModule",{value:!0});(m.Widget||(m.Widget={})).CodeSnippetEditorComponent=d.CodeSnippetEditorWidget;return m});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_code_snippet_editor_widget",["require","react","react-dom","react-transition-group","prezi_koi_widgets","prezi_logger","prezi_plugin_api_docs"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_code_snippet_editor_widget.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1).concat([function(){return new Promise(function(resolve,reject){require(["prezi_code_snippet_editor"],function(m){resolve(m.lazyModule);},function(err){reject(err);});});}]));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("react"),require("react-dom"),require("react-transition-group"),require("prezi_koi_widgets"),require("prezi_logger"),require("prezi_plugin_api_docs"),function(){return Promise.resolve(require("prezi_code_snippet_editor").lazyModule);});}else{this["prezi_code_snippet_editor_widget"]=__factory(React,ReactDOM,ReactTransitionGroup,this["prezi_koi_widgets"],this["prezi_logger"],this["prezi_plugin_api_docs"],function(){return Promise.resolve(this["prezi_code_snippet_editor"].lazyModule);});}}).call(this);