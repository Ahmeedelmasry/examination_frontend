;(function(){var baseUrl;var __factory=function(){var React=arguments[0];var ReactDOM=arguments[1];var ReactTransitionGroup=arguments[2];var StyledComponents=arguments[3];var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_presenterviewui";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_bacon":dependencies[4],"prezi_externalserviceprovider":dependencies[5],"prezi_koi_navigation":dependencies[6],"prezi_presenter_communication":dependencies[7],"prezi_utils":dependencies[8]}};})(),React,ReactDOM,ReactTransitionGroup,StyledComponents);};})(arguments);var moduleImpl=(function(){return module(function(k,b,C,f,g){var u=k.dependencies.prezi_utils,n=k.dependencies.prezi_presenter_communication,D=k.dependencies.prezi_bacon,E=k.dependencies.prezi_externalserviceprovider,B=k.dependencies.prezi_koi_navigation,v={};Object.defineProperty(v,"__esModule",{value:!0});var {default:k}=g;const F=k.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 3%;
	padding-right: 3%;

	font-family: RalewayRegular;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.5px;
`;v.Clock=class extends b.Component{constructor(){super(...arguments);this.state={formattedTime:""}}componentWillMount(){this.createFormattedTime();setInterval(()=>{this.createFormattedTime()},1E3)}createFormattedTime(){this.setState({formattedTime:(new Date).toLocaleTimeString(this.props.language||"en",{hour:"2-digit",minute:"2-digit"})})}render(){return b.createElement(F,null,b.createElement("div",null,this.state.formattedTime))}};k={};Object.defineProperty(k,"__esModule",{value:!0});var {default:f}=
g;k.Button=f.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.24);
	border-radius: 4px;
	user-select: none;
	&:hover {
		background-color: rgba(255, 255, 255, 0.4);
		cursor: pointer;
	}
`;var w={};Object.defineProperty(w,"__esModule",{value:!0});var {default:f}=g;const G=f.div`
	display: flex;
	flex-direction: row;
`,H=f.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-family: monospace;
	font-style: normal;
	font-weight: bold;
	font-size: 22px;
	line-height: 22px;
`,I=f.div`
	margin-right: 8px;
`,J=f(k.Button)`
	min-width: 55px;
	height: 24px;
	margin-left: 16px;
`,K=f.div`
`;w.Timer=class extends b.Component{constructor(a){super(a);this.timer=null;this.handleButtonClick=()=>{if(this.state.paused){this.props.sendGlassboxEvent("StartPresenterViewTimer");this.props.sendLog("play","timer","click");var a=Object.assign(Object.assign({},this.state),{lastTick:Date.now(),paused:!this.state.paused});this.setState(a);this.startTimer()}else this.props.sendGlassboxEvent("PausePresenterViewTimer"),this.props.sendLog("pause","timer","click"),a=Object.assign(Object.assign({},this.getCurrentTimeState()),
{paused:!this.state.paused}),this.setState(a),this.stopTimer()};this.state={currentMS:0,paused:!1,lastTick:Date.now()};a.sendGlassboxEvent("LoadedPresenterView");this.startTimer()}getCurrentTimeState(){const a=Date.now();return{currentMS:this.state.currentMS+(a-this.state.lastTick),lastTick:a}}startTimer(){null==this.timer&&(this.timer=setInterval(()=>this.setState(this.getCurrentTimeState()),100))}stopTimer(){null!=this.timer&&(clearInterval(this.timer),this.timer=null)}resetTimer(){this.setState({currentMS:0,
lastTick:Date.now()})}getFormattedTime(a){var e=this.state.currentMS,d=Math.floor(e/36E5),b=a?Math.floor(e%36E5/6E4):Math.floor(e/6E4);d=(10>d?"0":"")+d;b=(10>b?"0":"")+b;e=("00"+Math.floor(e%6E4/1E3)).slice(-2);return(a?d+":":"")+b+":"+e}render(){return b.createElement(G,null,b.createElement(H,null,b.createElement(I,{onClick:this.handleButtonClick},b.createElement("span",{className:this.state.paused?"icon-play":"icon-controller-paus"})),b.createElement(K,null,b.createElement("span",null,this.getFormattedTime(!0)))),
b.createElement(J,{onClick:()=>this.resetTimer()},this.props.resetText))}};var x={};Object.defineProperty(x,"__esModule",{value:!0});var {default:f}=g;const L=f.div`
	height: 100%;
	border: 1px solid rgba(255,255,255,0.24);
	border-radius: 4px;
	width: ${({is4By3:a})=>a?"56.12%":"39.5%"}
`,M=f.div`
	display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 16px;
    padding-top: 8px;
    height: 32px;
`,N=f(k.Button)`
	width: 40px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: solid 1px rgba(255,255,255,0.24);
`,O=f(k.Button)`
	width: 40px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
`,P=f.div`
	padding-top: 8px;
    padding-left: 16px;
    padding-right: 16px;
    height: 88.44%;

    font-family: RalewayRegular;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
	letter-spacing: 0.25px;
`,Q=f.textarea`
	height: 95%;
    width: 100%;
    border: none;
    background-color: inherit;
    resize: none;
    outline: none;
    line-height: normal;
	font-size: ${({fontSize:a})=>a+"px"}
`;x.NarrationArea=class extends b.Component{constructor(a){super(a);this.state={fontSize:a.initialFontSize,narrationText:a.narrationText,textAreaHasFocus:!1}}handleTextAreaChange(a){this.setState({narrationText:a.target.value});this.props.onChange(a.target.value);a.stopPropagation()}componentDidUpdate(){this.state.textAreaHasFocus||this.state.narrationText===this.props.narrationText||this.setState({narrationText:this.props.narrationText})}handleFocus(){this.setState({textAreaHasFocus:!0})}handleBlur(){this.setState({textAreaHasFocus:!1})}render(){return b.createElement(L,
{is4By3:this.props.is4by3},b.createElement(M,null,b.createElement(N,{onClick:()=>this.setState({fontSize:this.state.fontSize-2})},"A-"),b.createElement(O,{onClick:()=>this.setState({fontSize:this.state.fontSize+2})},"A+")),b.createElement(P,null,b.createElement(Q,{id:"narrative-text-area",onChange:(a)=>this.handleTextAreaChange(a),placeholder:this.props.placeholderText,value:this.state.narrationText,disabled:!this.props.editEnabled,onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur(),fontSize:this.state.fontSize})))}};
var t={};Object.defineProperty(t,"__esModule",{value:!0});t.MusicNote=class extends b.Component{constructor(a){super(a)}render(){return b.createElement("div",{"data-lookup":"music-note"},b.createElement("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19.7917 3L8.33335 5V6V9V16.1423C8.00754 16.0501 7.65693 16 7.29169 16C5.5658 16 4.16669 17.1193 4.16669 18.5C4.16669 19.8807 5.5658 21 7.29169 21C9.01758 21 10.4167 19.8807 10.4167 18.5V8.63636L17.7084 7.36364V14.1423C17.3825 14.0501 17.0319 14 16.6667 14C14.9408 14 13.5417 15.1193 13.5417 16.5C13.5417 17.8807 14.9408 19 16.6667 19C18.3926 19 19.7917 17.8807 19.7917 16.5L19.7917 7L19.7917 4L19.7917 3Z",
fill:"white"})))}};var y={};Object.defineProperty(y,"__esModule",{value:!0});var {default:f}=g;const R=f.div`
	width: 120%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`,S=f.div`
	height: 100%;
	margin-right: 16px;
	border-radius: 4px;
	display: flex;
`,T=f.img`
	height: 100%;
	max-height: 100%;
	border-radius: 4px;
`;y.ThumbnailList=class extends b.Component{constructor(a){super(a);this.state={}}render(){const a=this.props.thumbnails.slice(0,this.props.is4by3?6:5).filter((a)=>null!=a).map((a,d)=>b.createElement(S,{"data-lookup":"thumbnail-container",onClick:()=>this.props.onClick(d)},b.createElement(T,{src:a.src}),a.hasAudio?b.createElement(t.MusicNote,null):null));return b.createElement(R,null,a)}};var z={};Object.defineProperty(z,"__esModule",{value:!0});var {default:g}=g;class A{constructor(){this.path=
[];this.elementThumbnailMap=new Map;this.elementsWithAudio=new Set;this.elementsShowInProgressbar=new Set}getIndex(a){return this.path.indexOf(a)}getByIndex(a){return 0>a||a>=this.path.length?A.defaultPathInfo:this.getByPathElementId(this.path[a])}getByPathElementId(a){return{hasAudio:this.elementsWithAudio.has(a),showInProgressbar:this.elementsShowInProgressbar.has(a),thumbnail:this.elementThumbnailMap.get(a),pathElementId:a}}setElementsShowInProgressbar(a){this.elementsShowInProgressbar=new Set(a)}setElementsWithAudio(a){this.elementsWithAudio=
new Set(a)}updateThumbnail(a,b){this.elementThumbnailMap.set(a,b)}filterPositions(a){const b=[];this.path.forEach((d,e)=>{d=this.getByPathElementId(d);a(d)&&b.push(e)});return b}indexToPathElementId(a){return this.path[a]}getAllStepsNum(){return this.path.length}}A.defaultPathInfo={hasAudio:!1,showInProgressbar:!1,thumbnail:null,pathElementId:null};const U=g.div`
	height: 100%;
	background-color: #152235;
	color: white;
`;var l;(function(a){a.Gap24="Gap24";a.Gap16="Gap16";a.Gap14="Gap14";a.Gap8="Gap8"})(l||(l={}));const p=g.div`
	height: ${({value:a})=>{switch(a){case l.Gap24:return"4.4%";case l.Gap16:return"3%";case l.Gap14:return"2.6%";case l.Gap8:return"1.5%";default:u.Utils.assertNever(a)}}}
`,V=g.div`
	width: 19.8%;
`,W=g.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding-right: 3%;
`,X=g(k.Button)`
	width: 103px;
	height: 24px;
`,Y=g.div`
	width: 103px;
	height: 24px;
`,Z=g.div`
	height: 3%;
	padding-left: 3%;
`,aa=g.div`
	height: 43.64%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-left: 3%;
	padding-right: 3%;
`,ba=g.div`
	height: 100%;
	border-radius: 4px;
	width: ${({is4by3:a})=>a?"39.5%":"56.12%"}
`,ca=g.img`
	max-width:100%;
	max-height:100%;
	border-radius: 4px;
`,da=g.div`
	height: 3%;
	padding-left: 3%;
`,ea=g.div`
	height: 17.7%;
	padding-left: 3%;
`;z.PresenterView=class extends b.Component{constructor(a){var b;super(a);this.navigationTargetByIndex=(a)=>{var b;a=this.state.pathInfos.getByIndex(a);return null!=a.pathElementId?{kind:n.NavigationTargetKind.pathElementId,pathElementId:a.pathElementId}:{kind:n.NavigationTargetKind.pathElementId,pathElementId:null===(b=this.state.pathInfos.getByIndex(0))||void 0===b?void 0:b.pathElementId}};this.handleNavigatePath=(a)=>{this.channel.postMessage({kind:"desiredDirection",value:a})};this.handleShuffleButtonClicked=
()=>{this.sendGlassboxEvent("SwitchPresenterViewScreen");this.channel.postMessage({kind:"shuffleScreen",value:null})};this.handleAudioClicked=()=>{const a=this.state.audioMuted;this.channel.postMessage({kind:"audioMuted",value:!a});this.setState({audioMuted:!a})};this.sendLog=(a,b,c,e)=>{a=$.extend({},{action:a,object:b,trigger:c,category:"presenter_view_structured"},e);this.channel.postMessage({kind:"logEvent",value:a})};this.sendGlassboxEvent=(a,b={})=>{a=Object.assign({eventSchemaName:a},b);this.channel.postMessage({kind:"glassboxEvent",
value:a})};this.oid=null!==(b=window.preziOid)&&void 0!==b?b:window.location.pathname.split("/")[2];a=E.ExternalServiceProviderModule.initFullscreenProviderForPresenterView();a.onFullscreenChange(()=>this.handleFullscreenChange());this.channel=n.PresenterViewCommunicationModule.createPresenterViewCommunicationChannel(this.oid,window.forceLocalStorage);this.state={oid:"",currentPathIndex:0,startPathIndex:0,nextPathIndex:0,currentNarrative:"",currentNavbarThumbnail:null,title:"",language:"en",pathInfos:new A,
fullscreenProvider:a,userCanEdit:!1,presenterNotesPlaceholder:"",presenterNotesWarning:"",editorVisibility:"",detachOverlayText:"",shuffleScreenAvailable:!1,shuffleScreenDescription:"",isFullscreen:a.isInFullscreen(),audioMuted:!1,nextThumbnailRect:null,v2UIStrings:{clickToAddPresenterNotes:"",nextSteps:"",reset:"",switchScreens:""},is4by3:!1,startAtIndexZero:!1}}componentWillMount(){this.setOid();this.addNavigationEventListeners();this.listenToMessages()}componentDidMount(){this.channel.postMessage({kind:"presenterViewOpened",
value:this.oid})}componentWillUnmount(){this.sendGlassboxEvent("ClosePresenterView")}getBoundingClientRectWithoutSoundNote(a){return a.querySelector("img").getBoundingClientRect()}distanceBetween(a,b){a=a.getBoundingClientRect();return b.getBoundingClientRect().left-a.left}animateNextSteps(a,b,d){return null==a||null==b?null:a.animate([{transform:"translateX(0px)"},{transform:`translateX(${b}px)`}],d)}animateCurrentStepAndMusicNote(a,b,d,r){if(null!=b){const a=new DOMRect(d.right,d.top,25,24);this.animateToRect(b,
a,r)}return this.animateToRect(a,d,r)}animateToRect(a,b,d){if(null==b||null==a)return null;var e=b.left+b.width/2,c=b.top+b.height/2;const m=a.getBoundingClientRect();return a.animate([{transform:"translate(0px, 0px) scale(1)"},{transform:`translate(${e-(m.left+m.width/2)}px, ${c-(m.top+m.height/2)}px) scale(${b.height/m.height})`}],d)}animateNewElementAppear(a,b,d){var e;const c=document.createElement("img");c.style.position="fixed";c.style.top=a.top.toString()+"px";c.style.left=a.left.toString()+
"px";c.style.width=a.width.toString()+"px";c.style.height=a.height.toString()+"px";c.src=null===(e=this.state.pathInfos.getByIndex(b))||void 0===e?void 0:e.thumbnail;document.body.appendChild(c);a=c.animate([{opacity:0},{opacity:1}],d);a.addEventListener("finish",()=>document.body.removeChild(c));return a}animateToNextFrame(a,b,d){var e={duration:500},c=document.querySelectorAll('[data-lookup="thumbnail-container"]');this.setState({nextPathIndex:b,nextThumbnailRect:0<c.length?c[0].getBoundingClientRect():
this.state.nextThumbnailRect});const m=document.querySelector('[data-lookup="current-step"] img');switch(a){case "next":if(1<c.length){var h=this.distanceBetween(c[1],c[0]);for(a=1;a<c.length;++a)this.animateNextSteps(c[a],h,e)}h=c[0].querySelector("img");c=c[0].querySelector("svg");this.animateCurrentStepAndMusicNote(h,c,m.getBoundingClientRect(),e);h=m.animate([{opacity:1},{opacity:0}],e);break;case "prev":if(0<c.length)for(h=this.state.pathInfos.getByIndex(this.state.currentPathIndex).hasAudio?
25:0,h=this.getBoundingClientRectWithoutSoundNote(c[0]).width+h+16,a=0;a<c.length;++a)this.animateNextSteps(c[a],h,e);c=0<c.length?this.getBoundingClientRectWithoutSoundNote(c[0]):this.state.nextThumbnailRect;m.style.zIndex="1";const d=document.querySelector('[data-lookup="music-note"] svg');null!=d&&(d.style.zIndex="2");h=this.animateCurrentStepAndMusicNote(m,d,c,e);c=()=>{m.style.zIndex="unset";null!=d&&(d.style.zIndex="unset")};null!=h?h.addEventListener("finish",c):c();e=this.animateNewElementAppear(m.getBoundingClientRect(),
b,e);null==h&&(h=e);break;default:u.Utils.assertNever(a)}null!=h&&h.addEventListener("finish",()=>this.setState({currentPathIndex:b,currentNarrative:d}))}setOid(){this.setState({oid:this.oid})}updatePathState(a){const b=this.state.pathInfos;b.path=a.path;b.setElementsShowInProgressbar(a.pathElementsShownInProgressbar);b.setElementsWithAudio(a.pathElementsWithAudio);this.setState({pathInfos:b})}listenToMessages(){const a=(a,b)=>{this.setState({[a]:b})},b=(a)=>{const b=this.state.pathInfos;let c;u.Utils.createIndexedStorage(q.IndexedDbId).then((b)=>
{c=b;return b.read(a)}).then((d)=>{b.updateThumbnail(a,d.value);this.setState({pathInfos:b});this.channel.set({kind:"loaded",index:a});c.delete(a)})},d=(a)=>{document.title=a+" | Prezi";this.setState({title:a})},r=(a)=>{if(null!=a){var b=this.state.pathInfos.getIndex(a.pathElementId),c=b-this.state.currentPathIndex;1===Math.abs(c)&&-1!==this.state.currentPathIndex?this.animateToNextFrame(0<c?"next":"prev",b,a.text):this.setState({currentPathIndex:b,nextPathIndex:b,currentNarrative:a.text})}};this.channel.onMessage((c)=>
{if("thumbnails.preview"===c.kind||"thumbnails.navigator"===c.kind)b(c.index);else if("path"===c.kind)this.updatePathState(c.value);else if("title"===c.kind)d(c.value);else if("currentPathElementWithNarrative"===c.kind)r(c.value);else if("editorVisibility"===c.kind){var e=c.value;"hidden"!==e&&a(c.kind,e)}else"audioInfos"!==c.kind&&"shuffleScreen"!==c.kind&&"presenterViewClosed"!==c.kind&&"presenterViewOpened"!==c.kind&&"loaded"!==c.kind&&("startAtIndexZero"===c.kind?this.setState({startAtIndexZero:c.value}):
a(c.kind,c.value))})}addNavigationEventListeners(){$(window).on("beforeunload",()=>{this.channel.postMessage({kind:"presenterViewClosed",value:null});this.sendLog("close","presenter_view","button")});window.document.addEventListener("keydown",(a)=>{if(document.activeElement!==document.getElementById("narrative-text-area"))switch(a.key){case "ArrowLeft":case "PageUp":this.sendLog("previous_step","presenter_view","keyboard");this.handleNavigatePath({kind:n.NavigationTargetKind.prev});break;case "ArrowRight":case "PageDown":this.sendLog("next_step",
"presenter_view","keyboard");this.handleNavigatePath({kind:n.NavigationTargetKind.next});break;case "Home":this.sendLog("home_step","presenter_view","keyboard");this.handleNavigatePath({kind:n.NavigationTargetKind.home});break;case "End":this.sendLog("end_step","presenter_view","keyboard"),this.handleNavigatePath({kind:n.NavigationTargetKind.end})}})}handleNarrativeWritten(a){const b=this.state.pathInfos.getByIndex(this.state.currentPathIndex);null!=b.pathElementId&&(this.sendLog("write","presenter_view",
"user",{object_id:b.pathElementId}),this.channel.postMessage({kind:"desiredNarrative",value:{text:a,pathElementId:b.pathElementId}}))}toggleFullscreen(){this.state.fullscreenProvider.toggleFullscreen(document.getElementById("presenterviewpage"))}handleFullscreenChange(){const a=this.state.fullscreenProvider.isInFullscreen();a?(this.sendGlassboxEvent("PresentInFullScreen"),this.sendLog("fullscreen_enter","presenter_view","button")):(this.sendGlassboxEvent("LeaveFullScreen"),this.sendLog("fullscreen_exit",
"presenter_view","button"));this.setState({isFullscreen:a})}render(){const a=B.NavigationModule.getNavigationComponent(),e=this.getNavBarDefaultProps(),d=this.state.currentPathIndex;return b.createElement(U,{"data-lookup":"player"},b.createElement(p,{value:l.Gap16}),b.createElement(v.Clock,{language:this.state.language}),b.createElement(p,{value:l.Gap14}),b.createElement(W,null,b.createElement(w.Timer,{sendLog:this.sendLog,sendGlassboxEvent:this.sendGlassboxEvent,resetText:this.state.v2UIStrings.reset}),
b.createElement(V,null),this.state.shuffleScreenAvailable?b.createElement(X,{onClick:this.handleShuffleButtonClicked},this.state.v2UIStrings.switchScreens):b.createElement(Y,null)),b.createElement(p,{value:l.Gap8}),b.createElement(Z,null,b.createElement("span",{"data-lookup":"step-counter"},(this.state.startAtIndexZero?this.state.currentPathIndex:this.state.currentPathIndex+1)+"/"+(this.state.startAtIndexZero?this.state.pathInfos.getAllStepsNum()-1:this.state.pathInfos.getAllStepsNum()))),b.createElement(p,
{value:l.Gap8}),b.createElement(aa,null,b.createElement(ba,{is4by3:this.state.is4by3,"data-lookup":"current-step"},b.createElement(ca,{src:this.state.pathInfos.getByIndex(this.state.currentPathIndex).thumbnail})),this.state.pathInfos.getByIndex(this.state.currentPathIndex).hasAudio?b.createElement(t.MusicNote,null):null,b.createElement(x.NarrationArea,{initialFontSize:20,narrationText:this.state.currentNarrative||"",onChange:(a)=>this.handleNarrativeWritten(a),editEnabled:this.state.userCanEdit,placeholderText:this.state.v2UIStrings.clickToAddPresenterNotes,
is4by3:this.state.is4by3})),b.createElement(p,{value:l.Gap24}),b.createElement(da,null,b.createElement("span",null,this.state.v2UIStrings.nextSteps+":")),b.createElement(p,{value:l.Gap8}),b.createElement(ea,null,b.createElement(y.ThumbnailList,{thumbnails:[1,2,3,4,5,6].map((a)=>{a=this.state.pathInfos.getByIndex(d+a);return null!=a&&null!=a.thumbnail?{src:a.thumbnail,hasAudio:a.hasAudio}:null}),onClick:(a)=>this.handleNavigatePath(this.navigationTargetByIndex(d+a+1)),is4by3:this.state.is4by3})),b.createElement("div",
{className:"pv-navbar-container"},b.createElement(a,Object.assign({},e))))}getNavBarDefaultProps(){const a=this.state.pathInfos.getByIndex(this.state.currentPathIndex),b=this.state.pathInfos.getByIndex(this.state.startPathIndex);return{isTextZoomOutButton:!1,visibility:B.NavbarVisibility.VISIBLE,hideZoomButtons:!0,pathElementIdsAll:this.state.pathInfos.path,pathElementIdsWithThumbnail:this.state.pathInfos.filterPositions((a)=>a.showInProgressbar).map((a)=>this.state.pathInfos.getByIndex(a).pathElementId),
pathElementIdsWithVoiceOver:this.state.pathInfos.filterPositions((a)=>a.hasAudio).map((a)=>this.state.pathInfos.getByIndex(a).pathElementId),currentPathElementId:null!=a.pathElementId?a.pathElementId:this.state.pathInfos.getByIndex(0).pathElementId,startPathElementId:null!=b.pathElementId?b.pathElementId:this.state.pathInfos.getByIndex(0).pathElementId,hasNext:this.state.currentPathIndex<this.state.pathInfos.getAllStepsNum()-1,hasPrev:0<this.state.currentPathIndex,isPathProgressBarVisible:!0,canHaveFocus:!0,
thumbnail:this.state.currentNavbarThumbnail,isFullScreenVisible:!0,isFullscreen:this.state.isFullscreen,mobileClickerProvider:{openPreziRemote:()=>{},disconnectPreziRemote:()=>{}},mobileClickerStatusStream:D.Bacon.newBus(),isMobileClickerPopupVisible:!1,isMuted:this.state.audioMuted,isZoomInLimitReached:!1,isZoomOutLimitReached:!1,isPresentMode:!1,isEditMode:!0,startAtIndexZero:this.state.startAtIndexZero,callbacks:{navBarVisibilityChanged:()=>!0,movePrev:()=>{this.sendLog("previous_step","presenter_view",
"button");this.handleNavigatePath({kind:n.NavigationTargetKind.prev})},moveNext:()=>{this.sendLog("next_step","presenter_view","button");this.handleNavigatePath({kind:n.NavigationTargetKind.next})},fullscreen:()=>{this.toggleFullscreen()},updateThumbnail:(a)=>{const b=document.createElement("canvas"),c=new Image;b.width=180;b.height=101;const d=b.getContext("2d");c.onload=()=>{d.drawImage(c,0,0,180,101);this.setState({currentNavbarThumbnail:b})};c.src=this.state.pathInfos.getByPathElementId(a).thumbnail},
moveTo:(a)=>{this.sendLog("go_to_path","progress_bar","drag");this.handleNavigatePath({kind:n.NavigationTargetKind.pathElementId,pathElementId:a})},play:()=>{},pause:()=>{},toggleMuted:()=>{this.handleAudioClicked()},restart:()=>{},setAutoplay:()=>{},goHome:()=>{},zoomIn:()=>{},zoomOut:()=>{},addComment:()=>{},info:()=>{},nextForcedDots:()=>{},openPresenterView:()=>{},openMobileClickerPopup:()=>{}}}}};var q={cleanupLocalStorage:function(a){a=n.getPrefix(a);const b=[];for(let d=0;d<window.localStorage.length;++d){const e=
window.localStorage.key(d);e.startsWith(a)&&b.push(e)}b.forEach((a)=>window.localStorage.removeItem(a))}};Object.defineProperty(q,"__esModule",{value:!0});q.IndexedDbId="presenterViewThumbnails";(function(a){a.createPresenterViewUI=function(a,d){(a=window.document.getElementById(a))&&C.render(b.createElement(z.PresenterView,{isDesktop:d}),a)}})(q.PresenterViewUIModule||(q.PresenterViewUIModule={}));return q});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_presenterviewui",["require","react","react-dom","react-transition-group","styled-components","prezi_bacon","prezi_externalserviceprovider","prezi_koi_navigation","prezi_presenter_communication","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_presenterviewui.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("react"),require("react-dom"),require("react-transition-group"),require("styled-components"),require("prezi_bacon"),require("prezi_externalserviceprovider"),require("prezi_koi_navigation"),require("prezi_presenter_communication"),require("prezi_utils"));}else{this["prezi_presenterviewui"]=__factory(React,ReactDOM,ReactTransitionGroup,StyledComponents,this["prezi_bacon"],this["prezi_externalserviceprovider"],this["prezi_koi_navigation"],this["prezi_presenter_communication"],this["prezi_utils"]);}}).call(this);