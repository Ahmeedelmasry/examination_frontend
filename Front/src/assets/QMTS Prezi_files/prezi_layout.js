;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "14.0-9-g58006c6";},getModuleName:function(){return "prezi_layout";},getModuleVersion:function(){return "release-2023w26-base-4-g4a3c2ed4bcb";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.geometry":dependencies[0],"prezi_cet_model_editor":dependencies[1],"prezi_editor_commander":dependencies[2],"prezi_editor_commander_common":dependencies[3],"prezi_featureswitcher":dependencies[4],"prezi_i18n":dependencies[5],"prezi_logger":dependencies[6],"prezi_plugin_api":dependencies[7],"prezi_plugin_meta":dependencies[8],"prezi_service_data":dependencies[9],"prezi_styleschemeprovider":dependencies[10],"prezi_utils":dependencies[11]}};})());};})(arguments);var moduleImpl=(function(){return module(function(n){function H(a,b,c,d){return a||b?!0:null!=c?(a=d.getPlanetLayoutInfos().find((a)=>a.id===c),null!=a&&2===a.category):!1}function I(a,b,c,d,e,g){const m=a.filter((a)=>0===a.category),q=a.filter((a)=>1===a.category),f=a.filter((a)=>2===a.category);a=a.filter((a)=>3===a.category);const r=[];H(c,d,e,g)?(v.isActive("js-prezi-video")&&r.push({headerText:k.I18n.ts("Video",{context:"Layouts for prezi video"}),infos:f}),r.push({headerText:k.I18n.ts("Other",{context:"when there are recommended and other choices"}),
infos:[...m,...q,...a]})):(r.push(...[{headerText:k.I18n.ts("Recommended",{context:"as in recommended design choices"}),infos:b?m:q},{headerText:k.I18n.ts("Other",{context:"when there are recommended and other choices"}),infos:[...b?q:m,...a]}]),v.isActive("js-prezi-video")&&r.push({headerText:k.I18n.ts("Video",{context:"Layouts for prezi video"}),infos:f}));return r}function K(a,b,c,d,e,g,m){c.hasPlanetLayout(e)&&(a.document.executeApiCommand(b,{name:"changeTopicOverview",run:(a)=>{a.lookup.planetTopic(d).applyLayout(e)}}),
m.some((a)=>a===e)&&g({isPreziVideoPromoted:!0}),B.avro.Avro.createDefaultLogger().logSelectTopicLayout({topic_layout_id:e}))}var p=n.dependencies.prezi_editor_commander_common,y=n.dependencies.prezi_utils,f=n.dependencies.prezi_cet_model_editor,t=n.dependencies.prezi_editor_commander,k=n.dependencies.prezi_i18n,B=n.dependencies.prezi_logger,h=n.dependencies.prezi_plugin_api,v=n.dependencies.prezi_featureswitcher,F={createPlanetLayoutPageContent:function(a,b,c,d,e,g,m,q,f,r,J,l){const x=b.button(h.ButtonSize.Small,
h.ButtonAlign.Center,(b)=>[b.button({id:"overview-layout-test-button",color:h.ButtonColor.Ghost,content:{text:k.I18n.ts("Add test layout")},onClick:()=>{c.setPlanetLayoutFromXml(l,{read:a.document.read,toXml:()=>a.document.preziXml});e({planetLayoutInfo:c.getPlanetLayoutInfos()})}})]),n=(b,g)=>b.image({id:g.id,src:{url:g.thumbnail},onClick:(b)=>K(a,b,c,d,g.id,e,J),dataLookup:"applyLayout"+g.id,title:v.isActive("js-developer-features")?g.id:null}),p=(a,b)=>[a.sectionHeader({content:b.headerText}),
a.simpleList((a)=>({activeId:g.valid?g.id:null,items:b.infos.map((b)=>n(a,b)),itemType:h.ListItemType.large,itemLayout:h.ListItemLayout.fixed}))];return[...I(m,q,f,r,g.id,c).reduce((a,c)=>{a.push(...p(b,c));return a},[]),v.isActive("js-bb-snippet-editing")?x:null]}};Object.defineProperty(F,"__esModule",{value:!0});var u={registerFocusedToContentLayout:function(a,b,c,d){const e=a.registerPlanetLayout(b,{isValid:(a)=>0<a.topicChildren.length?c(a,e):!0,apply:(a,b,c)=>{switch(c.kind){case f.base.TopicLayoutEventKind.adjust:0===
c.parent.topicChildren.length-c.topics.length?d(b,Object.assign(Object.assign({},c),{kind:f.base.TopicLayoutEventKind.reset}),e):0<c.parent.topicChildren.length&&d(b,c,e);break;case f.base.TopicLayoutEventKind.remove:0<c.parent.topicChildren.length-c.toBeRemoved.length?d(b,c,e):u.applyZero(b,c);break;case f.base.TopicLayoutEventKind.reset:0<c.parent.topicChildren.length?d(b,c,e):u.applyZero(b,c);break;default:y.Utils.assertNever(c)}}});return e}};Object.defineProperty(u,"__esModule",{value:!0});u.applyZero=
(a,b)=>{const c=t.EditorCommander.createLayoutQuery();var d=b.parent.simpleChildren(f.base.ChildVisibilityKind.inside).filter((a)=>!c.isTopicShapeObject(a));if(0<d.length){d=L(d).withReferenceFrame(b.parent.parent.referenceFrame);const c=d.size;let g=1,m=1;c.width/c.height>16/9?m=9*c.width/(16*c.height):g=16*c.height/(9*c.width);a.fitZoomArea(b.parent,d.withSize({width:c.width*g,height:c.height*m}))}};const L=(a)=>a.map((a)=>a.layoutBox).reduce((a,c)=>a.union(c));var w={};Object.defineProperty(w,
"__esModule",{value:!0});var G=B.avro.Avro;w.LAYOUT_BUTTON_ID="open-layout-sidebar-button";w.SIDEBAR_ID="layout-topic";const C={titles:0,texts:0,images:0,allTitles:0,allTexts:0,allImages:0};var l;(function(a){a.LayoutRecommended="LayoutRecommended";a.LayoutOthers="LayoutOthers";a.LayoutOthersSecondary="LayoutOthersSecondary";a.LayoutUnavailableButShown="LayoutUnavailableButShown";a.LayoutUnavailable="LayoutUnavailable"})(l||(l={}));w.ContentLayoutPlugin=class{constructor(){this.layoutRepository=t.EditorCommander.getLayoutRepository();
this.recommendations=new Map;this.numShownLayouts=null;this.elementsFromLastLayouting=[]}init(a,b,c){this.session=a;this.layoutCommander=t.EditorCommander.createLayoutCommander(this.layoutRepository,this.session.positionFinder);this.layoutRepository.loadContentLayouts((a)=>{const b=c.registerContentLayout(a,{isValid:(a)=>this.layoutValid(a,b),apply:(a,c)=>{c=a.lookup.base(c.parent.id);(c.is(f.base.ObjectKind.planetTopic)||c.is(f.base.ObjectKind.page))&&this.applyLayout(a,c,b)}});return b})}subscribe(a){this.layoutRepository.subscribe(()=>
{const b=a.getState(),c=b.contentLayoutPluginState,d=this.layoutRepository.getTopicContentLayoutInfos(),e=this.categorizeContentLayouts(c.topicShapeId,c.topicIsPlanet,c.currentTopicOrPage,c.topicContent,d);a.setState(Object.assign(Object.assign({},b),{contentLayoutPluginState:Object.assign(Object.assign({},c),{contentLayoutInfos:d,categorizedLayouts:e})}))})}getInitialState(){const a=this.layoutRepository.getTopicContentLayoutInfos(),b=this.categorizeContentLayouts(null,!1,null,C,a);return{currentTopicOrPage:null,
currentContentLayoutSet:null,contentLayoutEnabled:!1,topicContent:C,topicShapeId:null,topicIsPlanet:!1,contentLayoutApplied:!1,contentLayoutInfos:a,categorizedLayouts:b,selectedLayout:null}}onDocumentChange(a){this.updateTopicContentAndShapeData(a)}onCurrentTopicChange(a,b){this.updateTopicContentAndShapeData(a,b)}updateTopicContentAndShapeData(a,b){null==b&&(b=a.getState().contentLayoutPluginState.currentTopicOrPage);const c=this.session.document.read((a)=>{a=a.lookup.base(b);return null!=a&&(a.is(f.base.ObjectKind.planetTopic)||
a.is(f.base.ObjectKind.page))?a.contentLayout.id:null}),d=this.session.document.read((a)=>this.determineActualLayoutSet(c,b,a)),e=this.session.document.read((a)=>this.getTopicContent(b,a)),g=this.session.document.read((a)=>(a=a.lookup.base(b))&&a.is(f.base.ObjectKind.topic)?a.coverLayoutId:null);var {isOverview:m,topicIsPlanet:q}=this.session.document.read((a)=>{a=a.lookup.base(b);return{isOverview:a&&a.is(f.base.ObjectKind.overview),topicIsPlanet:a&&a.is(f.base.ObjectKind.planetTopic)}});const x=
a.getState(),r=this.categorizeContentLayouts(g,q,b,e,x.contentLayoutPluginState.contentLayoutInfos);a.setState({contentLayoutPluginState:Object.assign(Object.assign({},x.contentLayoutPluginState),{currentTopicOrPage:b,contentLayoutEnabled:null!=b&&!m,topicIsPlanet:q,topicContent:e,topicShapeId:g,currentContentLayoutSet:c,categorizedLayouts:r,selectedLayout:d})})}getTopicContent(a,b){return(a=b.lookup.base(a))&&(a.is(f.base.ObjectKind.planetTopic)||a.is(f.base.ObjectKind.page))?(a=this.layoutCommander.categorizeContentChildren(a.contentChildren),
{titles:a.get(p.ContentLayoutElementKind.titleText).filter((a)=>a.is(f.base.ObjectKind.text)&&!a.isPlaceholder).length,texts:a.get(p.ContentLayoutElementKind.bodyText).filter((a)=>a.is(f.base.ObjectKind.text)&&!a.isPlaceholder).length,images:a.get(p.ContentLayoutElementKind.image).filter((a)=>a.is(f.base.ObjectKind.animatedImage)||a.is(f.base.ObjectKind.image)&&!a.isPlaceholder||a.is(f.base.ObjectKind.slide)).length,allTitles:a.get(p.ContentLayoutElementKind.titleText).length,allTexts:a.get(p.ContentLayoutElementKind.bodyText).length,
allImages:a.get(p.ContentLayoutElementKind.image).length}):C}createFooter(a,b){return a.getState().contentLayoutPluginState.topicIsPlanet?[b.button(h.ButtonSize.Large,h.ButtonAlign.Center,(b)=>[b.button({id:"fit-zoom-area-to-content",color:h.ButtonColor.Ghost,content:{text:k.I18n.ts("Align border to content")},flexibleWidth:!0,onClick:(b)=>this.alignBorderToContent(b,a.getState())})])]:[]}alignBorderToContent(a,b){this.session.document.executeApiCommand(a,{name:"FitOverviewZoomAreaToContent",run:(a)=>
{const c=a.lookup.planetTopic(b.contentLayoutPluginState.currentTopicOrPage);var e=c.zoomLayoutBox;a=a.createDragGroup([...c.simpleChildren(f.base.ChildVisibilityKind.inside),...c.topicChildren],[]).originalDragLayoutBox.withReferenceFrame(e.referenceFrame);e=e.scale(Math.max(a.size.width/e.size.width,a.size.height/e.size.height)).move(e.center,a.center);c.fitZoomAreaIntoLayoutBox(e)}})}createPageContent(a,b){var c=[...a.getState().contentLayoutPluginState.categorizedLayouts];c.sort(this.orderLayouts);
const d=c.filter(({recommend:a})=>a===l.LayoutRecommended);let e=c.filter(({recommend:a})=>a===l.LayoutOthers);0===e.length&&(e=c.filter(({recommend:a})=>a===l.LayoutOthersSecondary));const g=k.I18n.ts("Unfortunately none of our content layouts can be recommended. You have too much content on your topic. Try to remove some of it to use content layouts successfully."),m=c.filter(({recommend:a})=>a===l.LayoutUnavailableButShown);this.logLayoutsLoaded(c,a.getState().contentLayoutPluginState.topicContent,
d.length+e.length);c=a.getState().contentLayoutPluginState.selectedLayout;return[b.sectionHeader({content:k.I18n.ts("Recommended")}),0===d.length?b.label(g):this.createLayoutList(a,b,d,c),b.sectionHeader({content:k.I18n.ts("Others")}),this.createLayoutList(a,b,[...e,...m],c)]}determineActualLayoutSet(a,b,c){if(this.layoutRepository.hasTopicContentLayout(a)){const d=this.layoutRepository.getTopicContentLayout(a);b=c.lookup.base(b);return(b.is(f.base.ObjectKind.planetTopic)||b.is(f.base.ObjectKind.page))&&
this.layoutCommander.isContentLayoutValid(b,d)?a:null}return null}logLayoutsLoaded(a,b,c){if(this.numShownLayouts!==c){const d=a.filter((a)=>a.recommend===l.LayoutRecommended).length;G.createDefaultLogger().logLoadedContentLayoutOptions({nr_content_layouts:c,no_recommended_content_layouts_error:0===d?1:0,nr_of_images_in_topic:b.allImages,nr_of_texts_in_topic:b.allTexts+b.allTitles});this.numShownLayouts=c}this.recommendations=new Map(a.map((a)=>[a.info.id,a.recommend]))}orderLayouts(a,b){var c=(null!=
a.content?1:0)-(null!=b.content?1:0);if(0!==c||null==a.content)return c;c=a.content.titles+a.content.images+a.content.texts-(b.content.titles+b.content.images+b.content.texts);return 0!==c?c:a.content.titles+a.content.texts-(b.content.titles+b.content.texts)}categorizeContentLayouts(a,b,c,d,e){const g=[];let m=this.extractTopicShapeContentData(a,b,c);e.forEach((a)=>g.push(Object.assign({info:a},this.layoutCategory(d,a,m))));return g}extractTopicShapeContentData(a,b,c){b=this.session.document.read((a)=>
(a=a.lookup.base(c))&&(a.is(f.base.ObjectKind.page)||a.is(f.base.ObjectKind.planetTopic))&&(a=this.layoutCommander.calculateContentArea(a),a.scaledDown)?(a=a.referenceArea.size,{type:Math.abs(16/9-a.width/a.height)<Math.abs(1-a.width/a.height)?p.ContentAreaType._16by9:p.ContentAreaType._1by1,complexity:1}):{});return this.layoutRepository.hasTopicShapeLayout(a)?(a=this.layoutRepository.getTopicShapeLayout(a),Object.assign({type:a.variants[0].defaultContentAreaType,complexity:a.complexity},b)):Object.assign({type:p.ContentAreaType._1by1,
complexity:0},b)}layoutCategory(a,b,c){if(!this.layoutRepository.hasTopicContentLayout(b.id))return{recommend:l.LayoutUnavailable};b=this.layoutRepository.getTopicContentLayout(b.id);const d={titles:null==b.title?0:1,texts:b.texts.length,images:b.images.length};if(c.type===p.ContentAreaType._1by1!==.1>1-b.contentArea.size.height/b.contentArea.size.width)return{recommend:l.LayoutUnavailable,content:d};const e=a.texts<=d.texts&&a.images<=d.images;a=3<Math.max(a.texts-d.texts,0)+Math.max(a.images-d.images,
0);return!e&&a?{recommend:l.LayoutUnavailableButShown,content:d}:e?c.complexity===b.complexity?{recommend:l.LayoutOthers,content:d}:{recommend:l.LayoutRecommended,content:d}:{recommend:l.LayoutOthersSecondary,content:d}}createLayoutList(a,b,c,d){return b.simpleList((b)=>({activeId:d,items:c.map((c)=>this.createLayoutItem(a,b,c)),itemType:h.ListItemType.full,itemLayout:h.ListItemLayout.dynamic}))}createLayoutItem(a,b,{info:c,recommend:d}){return b.image({id:c.id,src:{url:c.thumbnail},onClick:(b)=>
{this.session.document.executeApiCommand(b,{name:"apply-content-layout",run:(d)=>{const g=d.lookup.base(a.getState().contentLayoutPluginState.currentTopicOrPage),e=c.id;(g.is(f.base.ObjectKind.planetTopic)||g.is(f.base.ObjectKind.page))&&this.layoutRepository.hasTopicContentLayout(e)&&(this.logLayoutSelected(a,e),g.applyContentLayout(e),this.session.selection.setSelection(b,this.elementsFromLastLayouting.map((a)=>d.lookup.simpleObject(a))))}});const d=a.getState();a.setState({contentLayoutPluginState:Object.assign(Object.assign({},
d.contentLayoutPluginState),{contentLayoutApplied:!0})})},disabled:!a.getState().contentLayoutPluginState.contentLayoutEnabled||d===l.LayoutUnavailableButShown,dataLookup:"applyContentLayout"+c.id,title:v.isActive("js-developer-features")?c.id:null})}applyLayout(a,b,c){this.layoutRepository.hasTopicContentLayout(c)&&(c=this.layoutRepository.getTopicContentLayout(c),this.elementsFromLastLayouting=this.layoutCommander.changeContentLayout(a,b,c).map((a)=>a.id))}layoutValid(a,b){return this.layoutRepository.hasTopicContentLayout(b)?
(b=this.layoutRepository.getTopicContentLayout(b),this.layoutCommander.isContentLayoutValid(a,b)):!1}logLayoutSelected(a,b){const c=this.recommendations.get(b),d=this.layoutRepository.getTopicContentLayout(b),e=.1>1-d.contentArea.size.height/d.contentArea.size.width;a=a.getState().contentLayoutPluginState.topicContent;G.createDefaultLogger().logSelectContentLayoutOption({content_layout_id:b,content_layout_ratio:e?"ONE_ONE":"SIXTEEN_NINE",content_layout_section_name:c===l.LayoutRecommended?"RECOMMENDED":
"OTHER",content_layout_styles:1===d.complexity?"DECORATED":"SIMPLE",nr_of_images_in_topic:a.allImages,nr_of_texts_in_topic:a.allTexts+a.allTitles})}};var D={};Object.defineProperty(D,"__esModule",{value:!0});D.OverviewLayoutPlugin=class{constructor(){this.layoutRepository=t.EditorCommander.getLayoutRepository();this.initialState={onOverview:!0,overviewLayoutSet:null,checkedLayout:null,overviewLayoutInfos:this.layoutRepository.getOverviewLayoutInfos(),templateInfo:null}}init(a,b,c){this.session=b;
this.layoutCommander=t.EditorCommander.createLayoutCommander(this.layoutRepository,this.session.positionFinder);const d=(a,b)=>this.layoutRepository.hasOverviewLayout(b)&&a.is(f.base.ObjectKind.planetTopic)?this.layoutCommander.overviewLayoutIsValid(b,a):!1,e=(a,b,c)=>{const d=t.EditorCommander.createLayoutCommander(this.layoutRepository,this.session.positionFinder);this.layoutRepository.hasOverviewLayout(c)&&d.handleOverviewLayoutEvent(this.layoutRepository.getOverviewLayout(c),a,b)};this.layoutRepository.loadOverviewLayouts((a)=>
{const b=c.registerOverviewLayout(a,{isValid:(a)=>d(a,b),apply:(a,c,d)=>e(c,d,b)});return b});this.layoutRepository.subscribe(()=>{const b=this.layoutRepository.getOverviewLayoutInfos(),c=a.getState();a.setState({overviewLayoutPluginState:Object.assign(Object.assign({},c.overviewLayoutPluginState),{overviewLayoutInfos:b})})})}onDocumentChange(a){const b=this.session.document.read((a)=>{const b=a.overview.layout.id;return{checkedLayout:this.layoutCommander.overviewLayoutIsValid(b,a.overview)?b:null,
overviewLayoutSet:b,templateInfo:a.meta.templateInfo}}),c=a.getState();a.setState({overviewLayoutPluginState:Object.assign(Object.assign({},c.overviewLayoutPluginState),b)})}onCurrentTopicChange(a,b){const c=this.session.document.read((a)=>a.lookup.base(b).is(f.base.ObjectKind.overview)),d=a.getState();a.setState({overviewLayoutPluginState:Object.assign(Object.assign({},d.overviewLayoutPluginState),{onOverview:c})})}createFooter(a,b){return a.getState().overviewLayoutPluginState.onOverview?[b.button(h.ButtonSize.Large,
h.ButtonAlign.Center,(b)=>[b.button({id:"fit-zoom-area-to-content",color:h.ButtonColor.Ghost,content:{text:k.I18n.ts("Align border to content")},flexibleWidth:!0,onClick:(b)=>this.alignBorderToContent(b,a.getState())})])]:[]}alignBorderToContent(a){this.session.document.executeApiCommand(a,{name:"FitOverviewZoomAreaToContent",run:(a)=>{var b=a.overview.zoomLayoutBox;const d=a.createDragGroup([...a.overview.topicChildren,...a.overview.contentChildren],[]).originalDragLayoutBox.withReferenceFrame(b.referenceFrame);
b=b.scale(Math.max(d.size.width/b.size.width,d.size.height/b.size.height)).move(b.center,d.center);a.overview.fitInto(b)}})}createPageContent(a,b){var c;const {overviewLayoutInfos:d,overviewLayoutSet:e,checkedLayout:g,templateInfo:f}=a.getState().overviewLayoutPluginState;a=a.getState().overviewLayoutPluginState.overviewLayoutInfos.find((a)=>a.id===e);const q=null!=a?2===a.category:null===(c=null===f||void 0===f?void 0:f.templateId)||void 0===c?void 0:c.includes("prezi_video");return[b.sectionHeader({content:k.I18n.ts("Recommended")}),
this.createLayoutList(b,d.filter((a)=>2===a.category===q).map((a)=>({info:a,enabled:!0})),g),b.sectionHeader({content:k.I18n.ts("Other")}),this.createLayoutList(b,d.filter((a)=>2===a.category!==q).map((a)=>({info:a,enabled:!0})),g)]}createLayoutList(a,b,c){return a.simpleList((a)=>({activeId:c,items:b.map((b)=>this.createLayoutItem(a,b)),itemType:h.ListItemType.full,itemLayout:h.ListItemLayout.dynamic}))}createLayoutItem(a,{info:b,enabled:c}){return a.image({id:b.id,src:{url:b.thumbnail},onClick:(a)=>
{this.session.document.executeApiCommand(a,{name:"apply-content-layout",run:(a)=>{const c=b.id;this.layoutRepository.hasOverviewLayout(c)&&a.overview.applyLayout(c)}})},disabled:!c,dataLookup:"applyOverviewLayout"+b.id,title:v.isActive("js-developer-features")?b.id:null})}};var E={};Object.defineProperty(E,"__esModule",{value:!0});var z=B.avro.Avro,M=f.base.ObjectKind;const A=w.SIDEBAR_ID;E.LayoutPlugin=class{constructor(){this.layoutRepository=t.EditorCommander.getLayoutRepository();this.contentLayoutPlugin=
new w.ContentLayoutPlugin}init(a){this.overviewLayoutPlugin=(this.overviewLayoutActive=this.session.document.read((a)=>a.meta.isSupportedGeneration(f.base.DocumentGeneration.OverviewAndContentLayout)))?new D.OverviewLayoutPlugin:null;const b=(a,b)=>{const c=t.EditorCommander.createLayoutCommander(this.layoutRepository,this.session.positionFinder);return this.layoutRepository.hasPlanetLayout(b)&&a.is(f.base.ObjectKind.planetTopic)?c.isValid(this.layoutRepository.getPlanetLayout(b),a):!1},c=(a,b,c)=>
{const d=t.EditorCommander.createLayoutCommander(this.layoutRepository,this.session.positionFinder);this.layoutRepository.hasPlanetLayout(c)&&d.handlePlanetLayoutEvent(this.layoutRepository.getPlanetLayout(c),a,b)};this.layoutRepository.loadPlanetLayouts((d,e)=>{if(e)return u.registerFocusedToContentLayout(a,d,b,c);{const e=a.registerPlanetLayout(d,{isValid:(a)=>b(a,e),apply:(a,b,d)=>c(b,d,e)});return e}});const d=a.registerPlanetLayout("test_overview_layout",{isValid:(a)=>b(a,d),apply:(a,b,e)=>c(b,
e,d)});this.layoutRepository.subscribe(()=>this.updateLayoutInfos(this.layoutRepository));this.arVideoLayoutIds=this.layoutRepository.getPlanetLayoutInfos().filter((a)=>2===a.category).map((a)=>a.id);this.contentLayoutPlugin.init(this.session,this.userSettings,a);this.uiRoot=a.declareUI({planetLayout:{topicId:null,id:null,valid:!1},coverLayoutId:null,coverLayoutInfo:this.layoutRepository.getTopicShapeLayoutInfos().filter((a)=>4!==a.category),planetLayoutInfo:this.layoutRepository.getPlanetLayoutInfos(),
currentPage:null,lastContentOrPlanetPage:null,layoutSidebarOpen:!1,isPreziVideoTemplate:!1,isPreziVideoPromoted:!1,contentLayoutPluginState:this.contentLayoutPlugin.getInitialState(),overviewLayoutPluginState:this.overviewLayoutActive?this.overviewLayoutPlugin.initialState:null,selection:[]},({coverLayoutId:a,planetLayout:b,coverLayoutInfo:c,planetLayoutInfo:e,currentPage:f,layoutSidebarOpen:l,isPreziVideoTemplate:n,isPreziVideoPromoted:p,selection:w},u)=>{const g=c.find((b)=>b.id===a);if(this.planetLayoutAvailable()||
this.contentLayoutAvailable()||this.overviewLayoutAvailable()){const a=(a)=>{l?a&&(this.uiRoot.setState({layoutSidebarOpen:!1}),this.uiRoot.sidebar.close(A)):(this.uiRoot.setState({layoutSidebarOpen:!0}),this.uiRoot.sidebar.open(A),a=this.uiRoot.getState().currentPage,z.createDefaultLogger().logOpenLayoutOptions({open_content_layout_trigger:"BUTTON_CLICK",selected_layout_tab:this.mapLayoutPageToLoggingLayoutTab(a)}))};v.isActive("js-frame-only-editor")||u.createTopMenuItem(h.TopMenuId.Style,{id:"topmenu-theme-item-layout",
kind:h.MenuItemKind.largeButton,enabled:!0,weight:4,title:k.I18n.ts("Topic layout"),icon:h.IconSmallId.Nametag,onClick:()=>a(!1)});0!==w.length||this.uiRoot.getState().overviewLayoutPluginState.onOverview&&v.isActive("js-frame-only-editor")||u.createMenuItem({kind:h.MenuItemKind.context,enabled:!0,onClick:()=>{if(l)"SUBTOPIC_LAYOUT"!==this.uiRoot.getState().currentPage&&this.uiRoot.setState({currentPage:"SUBTOPIC_LAYOUT"});else{this.uiRoot.setState({layoutSidebarOpen:!0,currentPage:"SUBTOPIC_LAYOUT"});
this.uiRoot.sidebar.open(A);const a=this.uiRoot.getState().currentPage;z.createDefaultLogger().logOpenLayoutOptions({open_content_layout_trigger:"CONTEXT_MENU",selected_layout_tab:this.mapLayoutPageToLoggingLayoutTab(a)})}},weight:48,id:"subtopic-layout-context-menu-item",title:k.I18n.ts("Subtopic layouts")})}const m=(a)=>{if(null==f)return[];switch(f){case "CONTENT_LAYOUT":return this.contentLayoutPlugin.createPageContent(this.uiRoot,a);case "OVERVIEW_LAYOUT":return this.overviewLayoutPlugin.createPageContent(this.uiRoot,
a);case "SUBTOPIC_LAYOUT":return F.createPlanetLayoutPageContent(this.session,a,this.layoutRepository,b.topicId,(a)=>this.uiRoot.setState(a),b,e,null!=g?0===g.category:!1,n,p,this.arVideoLayoutIds,d);default:y.Utils.assertNever(f)}},r=(a)=>{const b=[this.createTabs(a,f),...m(a)].filter((a)=>null!=a);return 0===b.length?[a.paragraph(k.I18n.ts("Layouts unavailable on overview",{context:"layout cannot be applied on prezi overview (hint for disabled control)"}),[k.I18n.ts("You can only apply layouts at the topic and subtopic level")])]:
b},q=(a)=>{if(null==f)return[];switch(f){case "CONTENT_LAYOUT":return this.contentLayoutPlugin.createFooter(this.uiRoot,a);case "OVERVIEW_LAYOUT":return this.overviewLayoutPlugin.createFooter(this.uiRoot,a);case "SUBTOPIC_LAYOUT":return null;default:y.Utils.assertNever(f)}};u.createSidebar(A,(a)=>({root:{title:k.I18n.ts("Topic layout"),content:r(a),footer:q(a)},onOpen:()=>{const a=null!=this.uiRoot.getState().currentPage?this.uiRoot.getState().currentPage:this.contentLayoutAvailable()?"CONTENT_LAYOUT":
this.planetLayoutAvailable()?"SUBTOPIC_LAYOUT":this.overviewLayoutAvailable?"OVERVIEW_LAYOUT":null;this.uiRoot.setState({layoutSidebarOpen:!0,currentPage:a})},onClose:()=>{this.uiRoot.setState({layoutSidebarOpen:!1});z.createDefaultLogger().logCloseLayoutOptions()}}));u.createMenuItem({kind:h.MenuItemKind.dropdown,parent:h.MenuId.Debug,id:"remove-topic-shape-roles",title:"Remove topic shapes roles",enabled:!0,weight:6,onClick:(a)=>{const b=t.EditorCommander.createTopicShapeRolesManager();this.session.document.executeLegacyCommand(a,
b.cleanTopicShapeRolesCmd_internal())}})});const e=this.session.document.read((a)=>a.meta.templateInfo);this.session.document.progressiveAssetManager.getTemplateCategory(e,"").then((a)=>{this.uiRoot.setState({isPreziVideoTemplate:null!=a&&-1<a.indexOf("Video templates")})});this.contentLayoutPlugin.subscribe(this.uiRoot);this.overviewLayoutActive&&this.overviewLayoutPlugin.init(this.uiRoot,this.session,a);a.onCurrentTopicChange((a)=>{const b=this.getCurrentPlanetLayout(a),c=this.session.document.read((b)=>
{const c=b.lookup.base(a);return(null===c||void 0===c?0:c.is(f.base.ObjectKind.planetTopic))&&this.arVideoLayoutIds.some((a)=>a===c.layout.id)?!0:this.uiRoot.getState().isPreziVideoPromoted});if(this.overviewLayoutActive)this.overviewLayoutPlugin.onCurrentTopicChange(this.uiRoot,a);this.contentLayoutPlugin.onCurrentTopicChange(this.uiRoot,a);this.uiRoot.setState({planetLayout:b,isPreziVideoPromoted:c,currentPage:this.calcCurrentPage(a)})});a.onDocumentChange(()=>{const a=this.getCurrentPlanetLayout(this.uiRoot.getState().planetLayout.topicId);
this.uiRoot.setState({planetLayout:a});this.contentLayoutPlugin.onDocumentChange(this.uiRoot);if(this.overviewLayoutActive)this.overviewLayoutPlugin.onDocumentChange(this.uiRoot)});a.onSelectionChange((a)=>{this.uiRoot.setState({selection:a.allObjects.map((a)=>a.id)})})}mapLayoutPageToLoggingLayoutTab(a){switch(a){case "CONTENT_LAYOUT":return"CONTENT_LAYOUT";case "SUBTOPIC_LAYOUT":return"SUBTOPIC_LAYOUT";case "OVERVIEW_LAYOUT":return"OVERVIEW_LAYOUT";default:y.Utils.assertNever(a)}}calcCurrentPage(a){var {isOverview:b,
isPlanet:c,isPage:d}=this.session.document.read((b)=>{b=b.lookup.base(a);return{isOverview:b.is(f.base.ObjectKind.overview),isPlanet:b.is(f.base.ObjectKind.planetTopic),isPage:b.is(f.base.ObjectKind.page)}});return b?this.overviewLayoutAvailable()?"OVERVIEW_LAYOUT":null:d?this.contentLayoutAvailable()?"CONTENT_LAYOUT":null:c?null!=this.uiRoot.getState().lastContentOrPlanetPage?this.uiRoot.getState().lastContentOrPlanetPage:this.contentLayoutAvailable()?"CONTENT_LAYOUT":this.planetLayoutAvailable()?
"SUBTOPIC_LAYOUT":null:null}createTabs(a,b){const c=[];this.contentLayoutAvailable()&&c.push({kind:h.TabMenuItemKind.title,title:k.I18n.ts("Content",{context:"as in content layout on canvas"}),id:"CONTENT_LAYOUT"});this.planetLayoutAvailable()&&c.push({kind:h.TabMenuItemKind.title,title:k.I18n.ts("Subtopic",{context:"as in topic layout on canvas"}),id:"SUBTOPIC_LAYOUT"});this.overviewLayoutAvailable()&&c.push({kind:h.TabMenuItemKind.title,title:k.I18n.ts("Overview",{context:"as in overview layout on canvas"}),
id:"OVERVIEW_LAYOUT"});return 1<c.length?a.tabMenuButtons({activeId:null!=b?b:"SUBTOPIC_LAYOUT",onChange:(a,b)=>{"OVERVIEW_LAYOUT"!==b&&z.createDefaultLogger().logSelectLayoutOptionTab({selected_layout_tab:b});"CONTENT_LAYOUT"!==b&&"SUBTOPIC_LAYOUT"!==b||this.uiRoot.setState({lastContentOrPlanetPage:b});this.uiRoot.setState({currentPage:b})},options:c}):null}planetLayoutAvailable(){return null!=this.uiRoot.getState().planetLayout.topicId}contentLayoutAvailable(){return this.uiRoot.getState().contentLayoutPluginState.contentLayoutEnabled}overviewLayoutAvailable(){return this.overviewLayoutActive&&
this.uiRoot.getState().overviewLayoutPluginState.onOverview}getCurrentPlanetLayout(a){return this.session.document.read((b)=>{if(null==a)return{id:null,topicId:null,valid:!1};b=b.lookup.base(a);return null==b?{id:null,topicId:null,valid:!1}:b.is(M.planetTopic)?{id:b.layout.id,topicId:a,valid:b.layout.isValid()}:{id:null,topicId:null,valid:!1}})}updateLayoutInfos(a){this.uiRoot.setState({coverLayoutInfo:a.getTopicShapeLayoutInfos(),planetLayoutInfo:a.getPlanetLayoutInfos()})}};n={};Object.defineProperty(n,
"__esModule",{value:!0});n.lazyModule={createPlugin(){return new E.LayoutPlugin}};return n});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_layout",["require","prezi.geometry","prezi_cet_model_editor","prezi_editor_commander","prezi_editor_commander_common","prezi_featureswitcher","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta","prezi_service_data","prezi_styleschemeprovider","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_layout.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.geometry"),require("prezi_cet_model_editor"),require("prezi_editor_commander"),require("prezi_editor_commander_common"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"),require("prezi_service_data"),require("prezi_styleschemeprovider"),require("prezi_utils"));}else{this["prezi_layout"]=__factory(this["prezi.geometry"],this["prezi_cet_model_editor"],this["prezi_editor_commander"],this["prezi_editor_commander_common"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"],this["prezi_service_data"],this["prezi_styleschemeprovider"],this["prezi_utils"]);}}).call(this);