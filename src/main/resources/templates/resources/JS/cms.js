/**
 * POSCMS 通用js文件
 * 成都天睿信息技术有限公司版权所有
 * */

/*!
 * artDialog 4.1.6
 */
(function($,window,undefined){$.noop=$.noop||function(){};var _box,_thisScript,_skin,_path,_count=0,_$window=$(window),_$document=$(document),_$html=$("html"),_elem=document.documentElement,_isIE6=window.VBArray&&!window.XMLHttpRequest,_isMobile="createTouch" in document&&!("onmousemove" in _elem)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),_expando="artDialog"+ +new Date;var artDialog=function(config,ok,cancel){config=config||{};if(typeof config==="string"||config.nodeType===1){config={content:config,fixed:!_isMobile}}var api,defaults=artDialog.defaults,elem=config.follow=this.nodeType===1&&this||config.follow;for(var i in defaults){if(config[i]===undefined){config[i]=defaults[i]}}$.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},function(i,o){config[i]=config[i]!==undefined?config[i]:config[o]});if(typeof elem==="string"){elem=$(elem)[0]}config.id=elem&&elem[_expando+"follow"]||config.id||_expando+_count;api=artDialog.list[config.id];if(elem&&api){return api.follow(elem).zIndex().focus()}if(api){return api.zIndex().focus()}if(_isMobile){config.fixed=false}if(!$.isArray(config.button)){config.button=config.button?[config.button]:[]}if(ok!==undefined){config.ok=ok}if(cancel!==undefined){config.cancel=cancel}config.ok&&config.button.push({name:config.okVal,callback:config.ok,focus:true});config.cancel&&config.button.push({name:config.cancelVal,callback:config.cancel});artDialog.defaults.zIndex=config.zIndex;_count++;return artDialog.list[config.id]=_box?_box._init(config):new artDialog.fn._init(config)};artDialog.fn=artDialog.prototype={version:"4.1.6",closed:true,_init:function(config){var that=this,DOM,icon=config.icon,iconBg=icon&&(_isIE6?{png:"icons/"+icon+".png"}:{backgroundImage:"url('"+config.path+"/skins/icons/"+icon+".png')"});that.closed=false;that.config=config;that.DOM=DOM=that.DOM||that._getDOM();DOM.wrap.addClass(config.skin);DOM.close[config.cancel===false?"hide":"show"]();DOM.icon[0].style.display=icon?"":"none";DOM.iconBg.css(iconBg||{background:"none"});DOM.se.css("cursor",config.resize?"se-resize":"auto");DOM.title.css("cursor",config.drag?"move":"auto");DOM.content.css("padding",config.padding);that[config.show?"show":"hide"](true);that.button(config.button).title(config.title).content(config.content,true).size(config.width,config.height).time(config.time);config.follow?that.follow(config.follow):that.position(config.left,config.top);that.zIndex().focus();config.lock&&that.lock();that._addEvent();that._ie6PngFix();_box=null;if(config.id=="Tips"){DOM.wrap.addClass("dr_tips")}config.init&&config.init.call(that,window);return that},content:function(msg){var prev,next,parent,display,that=this,DOM=that.DOM,wrap=DOM.wrap[0],width=wrap.offsetWidth,height=wrap.offsetHeight,left=parseInt(wrap.style.left),top=parseInt(wrap.style.top),cssWidth=wrap.style.width,$content=DOM.content,content=$content[0];that._elemBack&&that._elemBack();wrap.style.width="auto";if(msg===undefined){return content}if(typeof msg==="string"){$content.html(msg)}else{if(msg&&msg.nodeType===1){display=msg.style.display;prev=msg.previousSibling;next=msg.nextSibling;parent=msg.parentNode;that._elemBack=function(){if(prev&&prev.parentNode){prev.parentNode.insertBefore(msg,prev.nextSibling)}else{if(next&&next.parentNode){next.parentNode.insertBefore(msg,next)}else{if(parent){parent.appendChild(msg)}}}msg.style.display=display;that._elemBack=null};$content.html("");content.appendChild(msg);msg.style.display="block"}}if(!arguments[1]){if(that.config.follow){that.follow(that.config.follow)}else{width=wrap.offsetWidth-width;height=wrap.offsetHeight-height;left=left-width/2;top=top-height/2;wrap.style.left=Math.max(left,0)+"px";wrap.style.top=Math.max(top,0)+"px"}if(cssWidth&&cssWidth!=="auto"){wrap.style.width=wrap.offsetWidth+"px"}that._autoPositionType()}that._ie6SelectFix();that._runScript(content);return that},title:function(text){var DOM=this.DOM,wrap=DOM.wrap,title=DOM.title,className="aui_state_noTitle";if(text===undefined){return title[0]}if(text===false){title.hide().html("");wrap.addClass(className)}else{title.show().html(text||"");wrap.removeClass(className)}return this},position:function(left,top){var that=this,config=that.config,wrap=that.DOM.wrap[0],isFixed=_isIE6?false:config.fixed,ie6Fixed=_isIE6&&that.config.fixed,docLeft=_$document.scrollLeft(),docTop=_$document.scrollTop(),dl=isFixed?0:docLeft,dt=isFixed?0:docTop,ww=_$window.width(),wh=_$window.height(),ow=wrap.offsetWidth,oh=wrap.offsetHeight,style=wrap.style;if(left||left===0){that._left=left.toString().indexOf("%")!==-1?left:null;left=that._toNumber(left,ww-ow);if(typeof left==="number"){left=ie6Fixed?(left+=docLeft):left+dl;style.left=Math.max(left,dl)+"px"
}else{if(typeof left==="string"){style.left=left}}}if(top||top===0){that._top=top.toString().indexOf("%")!==-1?top:null;top=that._toNumber(top,wh-oh);if(typeof top==="number"){top=ie6Fixed?(top+=docTop):top+dt;style.top=Math.max(top,dt)+"px"}else{if(typeof top==="string"){style.top=top}}}if(left!==undefined&&top!==undefined){that._follow=null;that._autoPositionType()}return that},size:function(width,height){var maxWidth,maxHeight,scaleWidth,scaleHeight,that=this,config=that.config,DOM=that.DOM,wrap=DOM.wrap,main=DOM.main,wrapStyle=wrap[0].style,style=main[0].style;if(width){that._width=width.toString().indexOf("%")!==-1?width:null;maxWidth=_$window.width()-wrap[0].offsetWidth+main[0].offsetWidth;scaleWidth=that._toNumber(width,maxWidth);width=scaleWidth;if(typeof width==="number"){wrapStyle.width="auto";style.width=Math.max(that.config.minWidth,width)+"px";wrapStyle.width=wrap[0].offsetWidth+"px"}else{if(typeof width==="string"){style.width=width;width==="auto"&&wrap.css("width","auto")}}}if(height){that._height=height.toString().indexOf("%")!==-1?height:null;maxHeight=_$window.height()-wrap[0].offsetHeight+main[0].offsetHeight;scaleHeight=that._toNumber(height,maxHeight);height=scaleHeight;if(typeof height==="number"){style.height=Math.max(that.config.minHeight,height)+"px"}else{if(typeof height==="string"){style.height=height}}}that._ie6SelectFix();return that},follow:function(elem){var $elem,that=this,config=that.config;if(typeof elem==="string"||elem&&elem.nodeType===1){$elem=$(elem);elem=$elem[0]}if(!elem||!elem.offsetWidth&&!elem.offsetHeight){return that.position(that._left,that._top)}var expando=_expando+"follow",winWidth=_$window.width(),winHeight=_$window.height(),docLeft=_$document.scrollLeft(),docTop=_$document.scrollTop(),offset=$elem.offset(),width=elem.offsetWidth,height=elem.offsetHeight,isFixed=_isIE6?false:config.fixed,left=isFixed?offset.left-docLeft:offset.left,top=isFixed?offset.top-docTop:offset.top,wrap=that.DOM.wrap[0],style=wrap.style,wrapWidth=wrap.offsetWidth,wrapHeight=wrap.offsetHeight,setLeft=left-(wrapWidth-width)/2,setTop=top+height,dl=isFixed?0:docLeft,dt=isFixed?0:docTop;setLeft=setLeft<dl?left:(setLeft+wrapWidth>winWidth)&&(left-wrapWidth>dl)?left-wrapWidth+width:setLeft;setTop=(setTop+wrapHeight>winHeight+dt)&&(top-wrapHeight>dt)?top-wrapHeight:setTop;style.left=setLeft+"px";style.top=setTop+"px";that._follow&&that._follow.removeAttribute(expando);that._follow=elem;elem[expando]=config.id;that._autoPositionType();return that},button:function(){var that=this,ags=arguments,DOM=that.DOM,buttons=DOM.buttons,elem=buttons[0],strongButton="aui_state_highlight",listeners=that._listeners=that._listeners||{},list=$.isArray(ags[0])?ags[0]:[].slice.call(ags);$(".aui_icon").css("padding-bottom","0");$(".aui_main").css("padding-bottom","0");if(ags[0]===undefined){return elem}$.each(list,function(i,val){var name=val.name,isNewButton=!listeners[name],button=!isNewButton?listeners[name].elem:document.createElement("button");if(!listeners[name]){listeners[name]={}}if(val.callback){listeners[name].callback=val.callback}if(val.className){button.className=val.className}if(val.focus){that._focus&&that._focus.removeClass(strongButton);that._focus=$(button).addClass(strongButton);that.focus()}button.setAttribute("type","button");button[_expando+"callback"]=name;button.disabled=!!val.disabled;if(isNewButton){button.innerHTML=name;listeners[name].elem=button;elem.appendChild(button)}});buttons[0].style.display=list.length?"":"none";that._ie6SelectFix();return that},show:function(){this.DOM.wrap.show();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.show();return this},hide:function(){this.DOM.wrap.hide();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.hide();return this},close:function(){if(this.closed){return this}var that=this,DOM=that.DOM,wrap=DOM.wrap,list=artDialog.list,fn=that.config.close,follow=that.config.follow;that.time();if(typeof fn==="function"&&fn.call(that,window)===false){return that}that.unlock();that._elemBack&&that._elemBack();wrap[0].className=wrap[0].style.cssText="";DOM.title.html("");DOM.content.html("");DOM.buttons.html("");if(artDialog.focus===that){artDialog.focus=null}if(follow){follow.removeAttribute(_expando+"follow")}delete list[that.config.id];that._removeEvent();that.hide(true)._setAbsolute();for(var i in that){if(that.hasOwnProperty(i)&&i!=="DOM"){delete that[i]}}_box?wrap.remove():_box=that;return that},time:function(second){var that=this,cancel=that.config.cancelVal,timer=that._timer;timer&&clearTimeout(timer);if(second){that._timer=setTimeout(function(){that._click(cancel)},1000*second)}return that},focus:function(){try{var elem=this._focus&&this._focus[0]||this.DOM.close[0];elem&&elem.focus()}catch(e){}return this},zIndex:function(){var that=this,DOM=that.DOM,wrap=DOM.wrap,top=artDialog.focus,index=artDialog.defaults.zIndex++;wrap.css("zIndex",index);that._lockMask&&that._lockMask.css("zIndex",index-1);top&&top.DOM.wrap.removeClass("aui_state_focus");
    artDialog.focus=that;wrap.addClass("aui_state_focus");return that},lock:function(){if(this._lock){return this}var that=this,index=artDialog.defaults.zIndex-1,wrap=that.DOM.wrap,config=that.config,docWidth=_$document.width(),docHeight=_$document.height(),lockMaskWrap=that._lockMaskWrap||$(document.body.appendChild(document.createElement("div"))),lockMask=that._lockMask||$(lockMaskWrap[0].appendChild(document.createElement("div"))),domTxt="(document).documentElement",sizeCss=_isMobile?"width:"+docWidth+"px;height:"+docHeight+"px":"width:100%;height:100%",ie6Css=_isIE6?"position:absolute;left:expression("+domTxt+".scrollLeft);top:expression("+domTxt+".scrollTop);width:expression("+domTxt+".clientWidth);height:expression("+domTxt+".clientHeight)":"";that.zIndex();wrap.addClass("aui_state_lock");lockMaskWrap[0].style.cssText=sizeCss+";position:fixed;z-index:"+index+";top:0;left:0;overflow:hidden;"+ie6Css;lockMask[0].style.cssText="height:100%;background:"+config.background+";filter:alpha(opacity=0);opacity:0";if(_isIE6){lockMask.html('<iframe src="about:blank" style="width:100%;height:100%;position:absolute;'+'top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>')}lockMask.stop();lockMask.bind("click",function(){that._reset()}).bind("dblclick",function(){that._click(that.config.cancelVal)});if(config.duration===0){lockMask.css({opacity:config.opacity})}else{lockMask.animate({opacity:config.opacity},config.duration)}that._lockMaskWrap=lockMaskWrap;that._lockMask=lockMask;that._lock=true;return that},unlock:function(){var that=this,lockMaskWrap=that._lockMaskWrap,lockMask=that._lockMask;if(!that._lock){return that}var style=lockMaskWrap[0].style;var un=function(){if(_isIE6){style.removeExpression("width");style.removeExpression("height");style.removeExpression("left");style.removeExpression("top")}style.cssText="display:none";_box&&lockMaskWrap.remove()};lockMask.stop().unbind();that.DOM.wrap.removeClass("aui_state_lock");if(!that.config.duration){un()}else{lockMask.animate({opacity:0},that.config.duration,un)}that._lock=false;return that},_getDOM:function(){var wrap=document.createElement("div"),body=document.body;wrap.style.cssText="position:absolute;left:0;top:0";wrap.innerHTML=artDialog._templates;body.insertBefore(wrap,body.firstChild);var name,i=0,DOM={wrap:$(wrap)},els=wrap.getElementsByTagName("*"),elsLen=els.length;for(;i<elsLen;i++){name=els[i].className.split("aui_")[1];if(name){DOM[name]=$(els[i])}}return DOM},_toNumber:function(thisValue,maxValue){if(!thisValue&&thisValue!==0||typeof thisValue==="number"){return thisValue}var last=thisValue.length-1;if(thisValue.lastIndexOf("px")===last){thisValue=parseInt(thisValue)}else{if(thisValue.lastIndexOf("%")===last){thisValue=parseInt(maxValue*thisValue.split("%")[0]/100)}}return thisValue},_ie6PngFix:_isIE6?function(){var i=0,elem,png,pngPath,runtimeStyle,path=artDialog.defaults.path+"/skins/",list=this.DOM.wrap[0].getElementsByTagName("*");for(;i<list.length;i++){elem=list[i];png=elem.currentStyle["png"];if(png){pngPath=path+png;runtimeStyle=elem.runtimeStyle;runtimeStyle.backgroundImage="none";runtimeStyle.filter="progid:DXImageTransform.Microsoft."+"AlphaImageLoader(src='"+pngPath+"',sizingMethod='crop')"}}}:$.noop,_ie6SelectFix:_isIE6?function(){var $wrap=this.DOM.wrap,wrap=$wrap[0],expando=_expando+"iframeMask",iframe=$wrap[expando],width=wrap.offsetWidth,height=wrap.offsetHeight;width=width+"px";height=height+"px";if(iframe){iframe.style.width=width;iframe.style.height=height}else{iframe=wrap.appendChild(document.createElement("iframe"));$wrap[expando]=iframe;iframe.src="about:blank";iframe.style.cssText="position:absolute;z-index:-1;left:0;top:0;"+"filter:alpha(opacity=0);width:"+width+";height:"+height}}:$.noop,_runScript:function(elem){var fun,i=0,n=0,tags=elem.getElementsByTagName("script"),length=tags.length,script=[];for(;i<length;i++){if(tags[i].type==="text/dialog"){script[n]=tags[i].innerHTML;n++}}if(script.length){script=script.join("");fun=new Function(script);fun.call(this)}},_autoPositionType:function(){this[this.config.fixed?"_setFixed":"_setAbsolute"]()},_setFixed:(function(){_isIE6&&$(function(){var bg="backgroundAttachment";if(_$html.css(bg)!=="fixed"&&$("body").css(bg)!=="fixed"){_$html.css({zoom:1,backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"})}});return function(){var $elem=this.DOM.wrap,style=$elem[0].style;if(_isIE6){var left=parseInt($elem.css("left")),top=parseInt($elem.css("top")),sLeft=_$document.scrollLeft(),sTop=_$document.scrollTop(),txt="(document.documentElement)";this._setAbsolute();style.setExpression("left","eval("+txt+".scrollLeft + "+(left-sLeft)+') + "px"');style.setExpression("top","eval("+txt+".scrollTop + "+(top-sTop)+') + "px"')}else{style.position="fixed"}}}()),_setAbsolute:function(){var style=this.DOM.wrap[0].style;if(_isIE6){style.removeExpression("left");style.removeExpression("top")}style.position="absolute"},_click:function(name){var that=this,fn=that._listeners[name]&&that._listeners[name].callback;
    return typeof fn!=="function"||fn.call(that,window)!==false?that.close():that},_reset:function(test){var newSize,that=this,oldSize=that._winSize||_$window.width()*_$window.height(),elem=that._follow,width=that._width,height=that._height,left=that._left,top=that._top;if(test){newSize=that._winSize=_$window.width()*_$window.height();if(oldSize===newSize){return}}if(width||height){that.size(width,height)}if(elem){that.follow(elem)}else{if(left||top){that.position(left,top)}}},_addEvent:function(){var resizeTimer,that=this,config=that.config,isIE="CollectGarbage" in window,DOM=that.DOM;that._winResize=function(){resizeTimer&&clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){that._reset(isIE)},40)};_$window.bind("resize",that._winResize);DOM.wrap.bind("click",function(event){var target=event.target,callbackID;if(target.disabled){return false}if(target===DOM.close[0]){that._click(config.cancelVal);return false}else{callbackID=target[_expando+"callback"];callbackID&&that._click(callbackID)}that._ie6SelectFix()}).bind("mousedown",function(){that.zIndex()})},_removeEvent:function(){var that=this,DOM=that.DOM;DOM.wrap.unbind();_$window.unbind("resize",that._winResize)}};artDialog.fn._init.prototype=artDialog.fn;$.fn.dialog=$.fn.artDialog=function(){var config=arguments;this[this.live?"live":"bind"]("click",function(){artDialog.apply(this,config);return false});return this};artDialog.focus=null;artDialog.get=function(id){return id===undefined?artDialog.list:artDialog.list[id]};artDialog.list={};_$document.bind("keydown",function(event){var target=event.target,nodeName=target.nodeName,rinput=/^INPUT|TEXTAREA$/,api=artDialog.focus,keyCode=event.keyCode;if(!api||!api.config.esc||rinput.test(nodeName)){return}keyCode===27&&api._click(api.config.cancelVal)});_path=window["_artDialog_path"]||(function(script,i,me){for(i in script){if(script[i].src&&script[i].src.indexOf("artDialog")!==-1){me=script[i]}}_thisScript=me||script[script.length-1];me=_thisScript.src.replace(/\\/g,"/");return me.lastIndexOf("/")<0?".":me.substring(0,me.lastIndexOf("/"))}(document.getElementsByTagName("script")));_skin=_thisScript.src.split("skin=")[1];if(_skin){var link=document.createElement("link");link.rel="stylesheet";link.href=_path+"/skins/"+_skin+".css?"+artDialog.fn.version;_thisScript.parentNode.insertBefore(link,_thisScript)}_$window.bind("load",function(){setTimeout(function(){if(_count){return}artDialog({left:"-9999em",time:9,fixed:false,lock:false,focus:false})},150)});try{document.execCommand("BackgroundImageCache",false,true)}catch(e){}artDialog._templates='<div class="aui_outer">'+'<table class="aui_border">'+"<tbody>"+"<tr>"+'<td class="aui_nw"></td>'+'<td class="aui_n"></td>'+'<td class="aui_ne"></td>'+"</tr>"+"<tr>"+'<td class="aui_w"></td>'+'<td class="aui_c">'+'<div class="aui_inner">'+'<table class="aui_dialog">'+"<tbody>"+"<tr>"+'<td colspan="2" class="aui_header">'+'<div class="aui_titleBar">'+'<div class="aui_title"></div>'+'<a class="aui_close" href="javascript:void(0);">'+"\xd7"+"</a>"+"</div>"+"</td>"+"</tr>"+"<tr>"+'<td class="aui_icon">'+'<div class="aui_iconBg"></div>'+"</td>"+'<td class="aui_main">'+'<div class="aui_content"></div>'+"</td>"+"</tr>"+"<tr>"+'<td colspan="2" class="aui_footer">'+'<div class="aui_buttons"></div>'+"</td>"+"</tr>"+"</tbody>"+"</table>"+"</div>"+"</td>"+'<td class="aui_e"></td>'+"</tr>"+"<tr>"+'<td class="aui_sw"></td>'+'<td class="aui_s"></td>'+'<td class="aui_se"></td>'+"</tr>"+"</tbody>"+"</table>"+"</div>";artDialog.defaults={content:'<div class="aui_loading"><span>loading..</span></div>',title:"",button:null,ok:null,cancel:null,init:null,close:null,okVal:"\u786E\u5B9A",cancelVal:"\u53D6\u6D88",width:"auto",height:"auto",minWidth:96,minHeight:32,padding:"10px 15px",skin:"",icon:null,time:null,esc:true,focus:true,show:true,follow:null,path:_path,lock:false,background:"#000",opacity:0.7,duration:300,fixed:false,left:"50%",top:"38.2%",zIndex:1987,resize:true,drag:true};window.artDialog=$.dialog=$.artDialog=artDialog}(this.art||this.jQuery&&(this.art=jQuery),this));(function($){var _dragEvent,_use,_$window=$(window),_$document=$(document),_elem=document.documentElement,_isIE6=!("minWidth" in _elem.style),_isLosecapture="onlosecapture" in _elem,_isSetCapture="setCapture" in _elem;artDialog.dragEvent=function(){var that=this,proxy=function(name){var fn=that[name];that[name]=function(){return fn.apply(that,arguments)}};proxy("start");proxy("move");proxy("end")};artDialog.dragEvent.prototype={onstart:$.noop,start:function(event){_$document.bind("mousemove",this.move).bind("mouseup",this.end);this._sClientX=event.clientX;this._sClientY=event.clientY;this.onstart(event.clientX,event.clientY);return false},onmove:$.noop,move:function(event){this._mClientX=event.clientX;this._mClientY=event.clientY;this.onmove(event.clientX-this._sClientX,event.clientY-this._sClientY);return false},onend:$.noop,end:function(event){_$document.unbind("mousemove",this.move).unbind("mouseup",this.end);this.onend(event.clientX,event.clientY);
    return false}};_use=function(event){var limit,startWidth,startHeight,startLeft,startTop,isResize,api=artDialog.focus,DOM=api.DOM,wrap=DOM.wrap,title=DOM.title,main=DOM.main;var clsSelect="getSelection" in window?function(){window.getSelection().removeAllRanges()}:function(){try{document.selection.empty()}catch(e){}};_dragEvent.onstart=function(x,y){if(isResize){startWidth=main[0].offsetWidth;startHeight=main[0].offsetHeight}else{startLeft=wrap[0].offsetLeft;startTop=wrap[0].offsetTop}_$document.bind("dblclick",_dragEvent.end);!_isIE6&&_isLosecapture?title.bind("losecapture",_dragEvent.end):_$window.bind("blur",_dragEvent.end);_isSetCapture&&title[0].setCapture();wrap.addClass("aui_state_drag");api.focus()};_dragEvent.onmove=function(x,y){if(isResize){var wrapStyle=wrap[0].style,style=main[0].style,width=x+startWidth,height=y+startHeight;wrapStyle.width="auto";style.width=Math.max(0,width)+"px";wrapStyle.width=wrap[0].offsetWidth+"px";style.height=Math.max(0,height)+"px"}else{var style=wrap[0].style,left=Math.max(limit.minX,Math.min(limit.maxX,x+startLeft)),top=Math.max(limit.minY,Math.min(limit.maxY,y+startTop));style.left=left+"px";style.top=top+"px"}clsSelect();api._ie6SelectFix()};_dragEvent.onend=function(x,y){_$document.unbind("dblclick",_dragEvent.end);!_isIE6&&_isLosecapture?title.unbind("losecapture",_dragEvent.end):_$window.unbind("blur",_dragEvent.end);_isSetCapture&&title[0].releaseCapture();_isIE6&&!api.closed&&api._autoPositionType();wrap.removeClass("aui_state_drag")};isResize=event.target===DOM.se[0]?true:false;limit=(function(){var maxX,maxY,wrap=api.DOM.wrap[0],fixed=wrap.style.position==="fixed",ow=wrap.offsetWidth,oh=wrap.offsetHeight,ww=_$window.width(),wh=_$window.height(),dl=fixed?0:_$document.scrollLeft(),dt=fixed?0:_$document.scrollTop(),maxX=ww-ow+dl;maxY=wh-oh+dt;return{minX:dl,minY:dt,maxX:maxX,maxY:maxY}})();_dragEvent.start(event)};_$document.bind("mousedown",function(event){var api=artDialog.focus;if(!api){return}var target=event.target,config=api.config,DOM=api.DOM;if(config.drag!==false&&target===DOM.title[0]||config.resize!==false&&target===DOM.se[0]){_dragEvent=_dragEvent||new artDialog.dragEvent();_use(event);return false}})})(this.art||this.jQuery&&(this.art=jQuery));
/*!
 * artDialog iframeTools
 */
(function($,window,artDialog,undefined){var _topDialog,_proxyDialog,_zIndex,_data="@ARTDIALOG.DATA",_open="@ARTDIALOG.OPEN",_opener="@ARTDIALOG.OPENER",_winName=window.name=window.name||"@ARTDIALOG.WINNAME"+ +new Date,_isIE6=window.VBArray&&!window.XMLHttpRequest;$(function(){!window.jQuery&&document.compatMode==="BackCompat"&&alert('artDialog Error: document.compatMode === "BackCompat"')});var _top=artDialog.top=function(){var top=window,test=function(name){try{var doc=window[name].document;doc.getElementsByTagName}catch(e){return false}return window[name].artDialog&&doc.getElementsByTagName("frameset").length===0};if(test("top")){top=window.top}else{if(test("parent")){top=window.parent}}return top}();artDialog.parent=_top;_topDialog=_top.artDialog;_zIndex=function(){return _topDialog.defaults.zIndex};artDialog.data=function(name,value){var top=artDialog.top,cache=top[_data]||{};top[_data]=cache;if(value!==undefined){cache[name]=value}else{return cache[name]}return cache};artDialog.removeData=function(name){var cache=artDialog.top[_data];if(cache&&cache[name]){delete cache[name]}};artDialog.through=_proxyDialog=function(){var api=_topDialog.apply(this,arguments);if(_top!==window){artDialog.list[api.config.id]=api}return api};_top!==window&&$(window).bind("unload",function(){var list=artDialog.list,config;for(var i in list){if(list[i]){config=list[i].config;if(config){config.duration=0}list[i].close()}}});artDialog.open=function(url,options,cache){options=options||{};var api,DOM,$content,$main,iframe,$iframe,$idoc,iwin,ibody,top=artDialog.top,initCss="position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent",loadCss="width:100%;height:100%;border:none 0";if(cache===false){var ts=+new Date,ret=url.replace(/([?&])_=[^&]*/,"$1_="+ts);url=ret+((ret===url)?(/\?/.test(url)?"&":"?")+"_="+ts:"")}var load=function(){var iWidth,iHeight,loading=DOM.content.find(".aui_loading"),aConfig=api.config;$content.addClass("aui_state_full");loading&&loading.hide();try{iwin=iframe.contentWindow;$idoc=$(iwin.document);ibody=iwin.document.body}catch(e){iframe.style.cssText=loadCss;aConfig.follow?api.follow(aConfig.follow):api.position(aConfig.left,aConfig.top);options.init&&options.init.call(api,iwin,top);options.init=null;return}iWidth=aConfig.width==="auto"?$idoc.width()+(_isIE6?0:parseInt($(ibody).css("marginLeft"))):aConfig.width;iHeight=aConfig.height==="auto"?$idoc.height():aConfig.height;setTimeout(function(){iframe.style.cssText=loadCss
},0);api.size(iWidth,iHeight);aConfig.follow?api.follow(aConfig.follow):api.position(aConfig.left,aConfig.top);options.init&&options.init.call(api,iwin,top);options.init=null};var config={zIndex:_zIndex(),init:function(){api=this;DOM=api.DOM;$main=DOM.main;$content=DOM.content;iframe=api.iframe=top.document.createElement("iframe");iframe.src=url;iframe.name="Open"+api.config.id;iframe.style.cssText=initCss;iframe.setAttribute("frameborder",0,0);iframe.setAttribute("allowTransparency",true);$iframe=$(iframe);api.content().appendChild(iframe);iwin=iframe.contentWindow;try{iwin.name=iframe.name;artDialog.data(iframe.name+_open,api);artDialog.data(iframe.name+_opener,window)}catch(e){}$iframe.bind("load",load)},close:function(){$iframe.css("display","none").unbind("load",load);if(options.close&&options.close.call(this,iframe.contentWindow,top)===false){return false}$content.removeClass("aui_state_full");$iframe[0].src="about:blank";$iframe.remove();try{artDialog.removeData(iframe.name+_open);artDialog.removeData(iframe.name+_opener)}catch(e){}}};if(typeof options.ok==="function"){config.ok=function(){return options.ok.call(api,iframe.contentWindow,top)}}if(typeof options.cancel==="function"){config.cancel=function(){return options.cancel.call(api,iframe.contentWindow,top)}}delete options.content;for(var i in options){if(config[i]===undefined){config[i]=options[i]}}return _proxyDialog(config)};artDialog.open.api=artDialog.data(_winName+_open);artDialog.opener=artDialog.data(_winName+_opener)||window;artDialog.open.origin=artDialog.opener;artDialog.close=function(){var api=artDialog.data(_winName+_open);api&&api.close();return false};_top!=window&&$(document).bind("mousedown",function(){var api=artDialog.open.api;api&&api.zIndex()});artDialog.load=function(url,options,cache){cache=cache||false;var opt=options||{};var config={zIndex:_zIndex(),init:function(here){var api=this,aConfig=api.config;$.ajax({url:url,success:function(content){api.content(content);opt.init&&opt.init.call(api,here)},cache:cache})}};delete options.content;for(var i in opt){if(config[i]===undefined){config[i]=opt[i]}}return _proxyDialog(config)};artDialog.alert=function(content,callback){return _proxyDialog({id:"Alert",zIndex:_zIndex(),icon:"warning",fixed:true,lock:true,content:content,ok:true,close:callback})};artDialog.confirm=function(content,yes,no){return _proxyDialog({id:"Confirm",zIndex:_zIndex(),icon:"question",fixed:true,lock:true,opacity:0.1,content:content,ok:function(here){return yes.call(this,here)},cancel:function(here){return no&&no.call(this,here)}})};artDialog.prompt=function(content,yes,value){value=value||"";var input;return _proxyDialog({id:"Prompt",zIndex:_zIndex(),icon:"question",fixed:true,lock:true,opacity:0.1,content:['<div style="margin-bottom:5px;font-size:12px">',content,"</div>","<div>",'<input value="',value,'" style="width:18em;padding:6px 4px" />',"</div>"].join(""),init:function(){input=this.DOM.content.find("input")[0];input.select();input.focus()},ok:function(here){return yes&&yes.call(this,input.value,here)},cancel:true})};artDialog.tips=function(content,time,mark){if(mark==1){return _proxyDialog({id:"Tips",zIndex:_zIndex(),title:false,cancel:false,padding:"",fixed:true,lock:false}).content('<div class="dr_tipbox tip-success"><div class="tip-l"></div><div class="tip-c" style="font-size:14px">'+content+'</div><div class="tip-r"></div></div>').time(time||1.5)}else{if(mark==2){return _proxyDialog({id:"Tips",zIndex:_zIndex(),title:false,cancel:false,padding:"",fixed:true,lock:false}).content('<div class="dr_tipbox tip-alert"><div class="tip-l"></div><div class="tip-c" style="font-size:14px">'+content+'</div><div class="tip-r"></div></div>').time(time||1.5)}else{return _proxyDialog({id:"Tips",zIndex:_zIndex(),title:false,padding:"",cancel:false,fixed:true,lock:false}).content('<div class="dr_tipbox tip-error"><div class="tip-l"></div><div class="tip-c" style="font-size:14px;color:red;">'+content+'</div><div class="tip-r"></div></div>').time(time||1.5)}}};$(function(){var event=artDialog.dragEvent;if(!event){return}var $window=$(window),$document=$(document),positionType=_isIE6?"absolute":"fixed",dragEvent=event.prototype,mask=document.createElement("div"),style=mask.style;style.cssText="display:none;position:"+positionType+";left:0;top:0;width:100%;height:100%;"+"cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF";document.body.appendChild(mask);dragEvent._start=dragEvent.start;dragEvent._end=dragEvent.end;dragEvent.start=function(){var DOM=artDialog.focus.DOM,main=DOM.main[0],iframe=DOM.content[0].getElementsByTagName("iframe")[0];dragEvent._start.apply(this,arguments);style.display="block";style.zIndex=artDialog.defaults.zIndex+3;if(positionType==="absolute"){style.width=$window.width()+"px";style.height=$window.height()+"px";style.left=$document.scrollLeft()+"px";style.top=$document.scrollTop()+"px"}if(iframe&&main.offsetWidth*main.offsetHeight>307200){main.style.visibility="hidden"}};dragEvent.end=function(){var dialog=artDialog.focus;
    dragEvent._end.apply(this,arguments);style.display="none";if(dialog){dialog.DOM.main[0].style.visibility="visible"}}})})(this.art||this.jQuery,this,this.artDialog);artDialog.notice=function(options){var opt=options||{},api,aConfig,hide,wrap,top,duration=800;var config={id:"dr_notice",left:"95%",top:"100%",lock:false,init:function(here){api=this;aConfig=api.config;wrap=api.DOM.wrap;top=parseInt(wrap[0].style.top)-70;hide=top+wrap[0].offsetHeight;wrap.css("top",hide+"px").animate({top:top+"px"},duration,function(){opt.init&&opt.init.call(api,here)})},close:function(here){wrap.animate({top:hide+"px"},duration,function(){opt.close&&opt.close.call(this,here);aConfig.close=$.noop;api.close()});return false}};for(var i in opt){if(config[i]===undefined){config[i]=opt[i]}}return artDialog(config)};


!(function(){var __modules__={};function require(id){var mod=__modules__[id];var exports='exports';if(typeof mod==='object'){return mod}if(!mod[exports]){mod[exports]={};mod[exports]=mod.call(mod[exports],require,mod[exports],mod)||mod[exports]}return mod[exports]}function define(path,fn){__modules__[path]=fn}define("jquery",function(){return jQuery});define("popup",function(require){var $=require("jquery");var _count=0;var _isIE6=!('minWidth'in $('html')[0].style);var _isFixed=!_isIE6;function Popup(){this.destroyed=false;this.__popup=$('<div />').css({display:'none',position:'absolute',outline:0}).attr('tabindex','-1').html(this.innerHTML).appendTo('body');this.__backdrop=this.__mask=$('<div />').css({opacity:.7,background:'#000'});this.node=this.__popup[0];this.backdrop=this.__backdrop[0];_count++}$.extend(Popup.prototype,{node:null,backdrop:null,fixed:false,destroyed:true,open:false,returnValue:'',autofocus:true,align:'bottom left',innerHTML:'',className:'ui-popup',show:function(anchor){if(this.destroyed){return this}var that=this;var popup=this.__popup;var backdrop=this.__backdrop;this.__activeElement=this.__getActive();this.open=true;this.follow=anchor||this.follow;if(!this.__ready){popup.addClass(this.className).attr('role',this.modal?'alertdialog':'dialog').css('position',this.fixed?'fixed':'absolute');popup.addClass(this.modal?'myalertdialog':'mydialog');if(!_isIE6){$(window).on('resize',$.proxy(this.reset,this))}if(this.modal){var backdropCss={position:'fixed',left:0,top:0,width:'100%',height:'100%',overflow:'hidden',userSelect:'none',zIndex:this.zIndex||Popup.zIndex};popup.addClass(this.className+'-modal');if(!_isFixed){$.extend(backdropCss,{position:'absolute',width:$(window).width()+'px',height:$(document).height()+'px'})}backdrop.css(backdropCss).attr({tabindex:'0'}).on('focus',$.proxy(this.focus,this));this.__mask=backdrop.clone(true).attr('style','').insertAfter(popup);backdrop.addClass(this.className+'-backdrop').insertBefore(popup);this.__ready=true}if(!popup.html()){popup.html(this.innerHTML)}}popup.addClass(this.className+'-show').show();backdrop.show();this.reset().focus();this.__dispatchEvent('show');return this},showModal:function(){this.modal=true;return this.show.apply(this,arguments)},close:function(result){if(!this.destroyed&&this.open){if(result!==undefined){this.returnValue=result}this.__popup.hide().removeClass(this.className+'-show');this.__backdrop.hide();this.open=false;this.__dispatchEvent('close')}return this},remove:function(){if(this.destroyed){return this}this.__dispatchEvent('beforeremove');if(Popup.current===this){Popup.current=null}this.__popup.remove();this.__backdrop.remove();this.__mask.remove();if(!_isIE6){$(window).off('resize',this.reset)}this.__dispatchEvent('remove');for(var i in this){delete this[i]}return this},reset:function(){var elem=this.follow;if(elem){this.__follow(elem)}else{this.__center()}this.__dispatchEvent('reset');return this},focus:function(){var node=this.node;var popup=this.__popup;var current=Popup.current;var index=this.zIndex=Popup.zIndex++;if(current&&current!==this){current.blur(false)}if(!$.contains(node,this.__getActive())){var autofocus=popup.find('[autofocus]')[0];if(!this._autofocus&&autofocus){this._autofocus=true}else{autofocus=node}this.__focus(autofocus)}popup.css('zIndex',index);Popup.current=this;popup.addClass(this.className+'-focus');this.__dispatchEvent('focus');return this},blur:function(){var activeElement=this.__activeElement;var isBlur=arguments[0];if(isBlur!==false){this.__focus(activeElement)}this._autofocus=false;this.__popup.removeClass(this.className+'-focus');this.__dispatchEvent('blur');return this},addEventListener:function(type,callback){this.__getEventListener(type).push(callback);return this},removeEventListener:function(type,callback){var listeners=this.__getEventListener(type);for(var i=0;i<listeners.length;i++){if(callback===listeners[i]){listeners.splice(i--,1)}}return this},__getEventListener:function(type){var listener=this.__listener;if(!listener){listener=this.__listener={}}if(!listener[type]){listener[type]=[]}return listener[type]},__dispatchEvent:function(type){var listeners=this.__getEventListener(type);if(this['on'+type]){this['on'+type]()}for(var i=0;i<listeners.length;i++){listeners[i].call(this)}},__focus:function(elem){try{if(this.autofocus&&!/^iframe$/i.test(elem.nodeName)){elem.focus()}}catch(e){}},__getActive:function(){try{var activeElement=document.activeElement;var contentDocument=activeElement.contentDocument;var elem=contentDocument&&contentDocument.activeElement||activeElement;return elem}catch(e){}},__center:function(){var popup=this.__popup;var $window=$(window);var $document=$(document);var fixed=this.fixed;var dl=fixed?0:$document.scrollLeft();var dt=fixed?0:$document.scrollTop();var ww=$window.width();var wh=$window.height();var ow=popup.width();var oh=popup.height();var left=(ww-ow)/2+dl;var top=(wh-oh)*382/1000+dt;var style=popup[0].style;style.left=Math.max(parseInt(left),dl)+'px';style.top=Math.max(parseInt(top),dt)+'px'},__follow:function(anchor){var $elem=anchor.parentNode&&$(anchor);var popup=this.__popup;if(this.__followSkin){popup.removeClass(this.__followSkin)}if($elem){var o=$elem.offset();if(o.left*o.top<0){return this.__center()}}var that=this;var fixed=this.fixed;var $window=$(window);var $document=$(document);var winWidth=$window.width();var winHeight=$window.height();var docLeft=$document.scrollLeft();var docTop=$document.scrollTop();var popupWidth=popup.width();var popupHeight=popup.height();var width=$elem?$elem.outerWidth():0;var height=$elem?$elem.outerHeight():0;var offset=this.__offset(anchor);var x=offset.left;var y=offset.top;var left=fixed?x-docLeft:x;var top=fixed?y-docTop:y;var minLeft=fixed?0:docLeft;var minTop=fixed?0:docTop;var maxLeft=minLeft+winWidth-popupWidth;var maxTop=minTop+winHeight-popupHeight;var css={};var align=this.align.split(' ');var className=this.className+'-';var reverse={top:'bottom',bottom:'top',left:'right',right:'left'};var name={top:'top',bottom:'top',left:'left',right:'left'};var temp=[{top:top-popupHeight,bottom:top+height,left:left-popupWidth,right:left+width},{top:top,bottom:top-popupHeight+height,left:left,right:left-popupWidth+width}];var center={left:left+width/2-popupWidth/2,top:top+height/2-popupHeight/2};var range={left:[minLeft,maxLeft],top:[minTop,maxTop]};$.each(align,function(i,val){if(temp[i][val]>range[name[val]][1]){val=align[i]=reverse[val]}if(temp[i][val]<range[name[val]][0]){align[i]=reverse[val]}});if(!align[1]){name[align[1]]=name[align[0]]==='left'?'top':'left';temp[1][align[1]]=center[name[align[1]]]}className+=align.join('-')+' '+this.className+'-follow';that.__followSkin=className;if($elem){popup.addClass(className)}css[name[align[0]]]=parseInt(temp[0][align[0]]);css[name[align[1]]]=parseInt(temp[1][align[1]]);popup.css(css)},__offset:function(anchor){var isNode=anchor.parentNode;var offset=isNode?$(anchor).offset():{left:anchor.pageX,top:anchor.pageY};anchor=isNode?anchor:anchor.target;var ownerDocument=anchor.ownerDocument;var defaultView=ownerDocument.defaultView||ownerDocument.parentWindow;if(defaultView==window){return offset}var frameElement=defaultView.frameElement;var $ownerDocument=$(ownerDocument);var docLeft=$ownerDocument.scrollLeft();var docTop=$ownerDocument.scrollTop();var frameOffset=$(frameElement).offset();var frameLeft=frameOffset.left;var frameTop=frameOffset.top;return{left:offset.left+frameLeft-docLeft,top:offset.top+frameTop-docTop}}});Popup.zIndex=1024;Popup.current=null;return Popup});define("dialog-config",{backdropBackground:'#000',backdropOpacity:0.7,content:'<span class="ui-dialog-loading">Loading..</span>',title:'',statusbar:'',button:null,ok:null,cancel:null,okValue:'ok',cancelValue:'cancel',cancelDisplay:true,width:'',height:'',padding:'',skin:'',quickClose:false,cssUri:'../css/ui-dialog.css',innerHTML:'<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>'});define("dialog",function(require){var $=require("jquery");var Popup=require("popup");var defaults=require("dialog-config");var css=defaults.cssUri;if(css){var fn=require[require.toUrl?'toUrl':'resolve'];if(fn){css=fn(css);css='<link rel="stylesheet" href="'+css+'" />';if($('base')[0]){$('base').before(css)}else{$('head').append(css)}}}var _count=0;var _expando=new Date()-0;var _isIE6=!('minWidth'in $('html')[0].style);var _isMobile='createTouch'in document&&!('onmousemove'in document)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent);var _isFixed=!_isIE6&&!_isMobile;var artDialog=function(options,ok,cancel){var originalOptions=options=options||{};if(typeof options==='string'||options.nodeType===1){options={content:options,fixed:!_isMobile}}options=$.extend(true,{},artDialog.defaults,options);options.original=originalOptions;var id=options.id=options.id||_expando+_count;var api=artDialog.get(id);if(api){return api.focus()}if(!_isFixed){options.fixed=false}if(options.quickClose){options.modal=true;options.backdropOpacity=0}if(!$.isArray(options.button)){options.button=[]}if(cancel!==undefined){options.cancel=cancel}if(options.cancel){options.button.push({id:'cancel',value:options.cancelValue,callback:options.cancel,display:options.cancelDisplay})}if(ok!==undefined){options.ok=ok}if(options.ok){options.button.push({id:'ok',value:options.okValue,callback:options.ok,autofocus:true})}return artDialog.list[id]=new artDialog.create(options)};var popup=function(){};popup.prototype=Popup.prototype;var prototype=artDialog.prototype=new popup();artDialog.create=function(options){var that=this;$.extend(this,new Popup());var originalOptions=options.original;var $popup=$(this.node).html(options.innerHTML);var $backdrop=$(this.backdrop);this.options=options;this._popup=$popup;$.each(options,function(name,value){if(typeof that[name]==='function'){that[name](value)}else{that[name]=value}});if(options.zIndex){Popup.zIndex=options.zIndex}$popup.attr({'aria-labelledby':this._$('title').attr('id','title:'+this.id).attr('id'),'aria-describedby':this._$('content').attr('id','content:'+this.id).attr('id')});this._$('close').css('display',this.cancel===false?'none':'').attr('title',this.cancelValue).on('click',function(event){that._trigger('cancel');event.preventDefault()});this._$('dialog').addClass(this.skin);this._$('body').css('padding',this.padding);if(options.quickClose){$backdrop.on('onmousedown'in document?'mousedown':'click',function(){that._trigger('cancel');return false})}this.addEventListener('show',function(){$backdrop.css({opacity:0,background:options.backdropBackground}).animate({opacity:options.backdropOpacity},150)});this._esc=function(event){var target=event.target;var nodeName=target.nodeName;var rinput=/^input|textarea$/i;var isTop=Popup.current===that;var keyCode=event.keyCode;if(!isTop||rinput.test(nodeName)&&target.type!=='button'){return}if(keyCode===27){that._trigger('cancel')}};$(document).on('keydown',this._esc);this.addEventListener('remove',function(){$(document).off('keydown',this._esc);delete artDialog.list[this.id]});_count++;artDialog.oncreate(this);return this};artDialog.create.prototype=prototype;$.extend(prototype,{content:function(html){var $content=this._$('content');if(typeof html==='object'){html=$(html);$content.empty('').append(html.show());this.addEventListener('beforeremove',function(){$('body').append(html.hide())})}else{$content.html(html)}return this.reset()},title:function(text){this._$('title').text(text);this._$('header')[text?'show':'hide']();return this},width:function(value){this._$('content').css('width',value);return this.reset()},height:function(value){this._$('content').css('height',value);return this.reset()},button:function(args){args=args||[];var that=this;var html='';var number=0;this.callbacks={};if(typeof args==='string'){html=args;number++}else{$.each(args,function(i,val){var id=val.id=val.id||val.value;var style='';that.callbacks[id]=val.callback;if(val.display===false){style=' style="display:none"'}else{number++}html+='<button type="button" i-id="'+id+'"'+style+(val.disabled?' disabled':'')+(val.autofocus?' autofocus class="ui-dialog-autofocus"':'')+'>'+val.value+'</button>';that._$('button').on('click','[i-id='+id+']',function(event){var $this=$(this);if(!$this.attr('disabled')){that._trigger(id)}event.preventDefault()})})}this._$('button').html(html);this._$('footer')[number?'show':'hide']();return this},statusbar:function(html){this._$('statusbar').html(html)[html?'show':'hide']();return this},_$:function(i){return this._popup.find('[i='+i+']')},_trigger:function(id){var fn=this.callbacks[id];return typeof fn!=='function'||fn.call(this)!==false?this.close().remove():this}});artDialog.oncreate=$.noop;artDialog.getCurrent=function(){return Popup.current};artDialog.get=function(id){return id===undefined?artDialog.list:artDialog.list[id]};artDialog.list={};artDialog.defaults=defaults;return artDialog});define("drag",function(require){var $=require("jquery");var $window=$(window);var $document=$(document);var isTouch='createTouch'in document;var html=document.documentElement;var isIE6=!('minWidth'in html.style);var isLosecapture=!isIE6&&'onlosecapture'in html;var isSetCapture='setCapture'in html;var types={start:isTouch?'touchstart':'mousedown',over:isTouch?'touchmove':'mousemove',end:isTouch?'touchend':'mouseup'};var getEvent=isTouch?function(event){if(!event.touches){event=event.originalEvent.touches.item(0)}return event}:function(event){return event};var DragEvent=function(){this.start=$.proxy(this.start,this);this.over=$.proxy(this.over,this);this.end=$.proxy(this.end,this);this.onstart=this.onover=this.onend=$.noop};DragEvent.types=types;DragEvent.prototype={start:function(event){event=this.startFix(event);$document.on(types.over,this.over).on(types.end,this.end);this.onstart(event);return false},over:function(event){event=this.overFix(event);this.onover(event);return false},end:function(event){event=this.endFix(event);$document.off(types.over,this.over).off(types.end,this.end);this.onend(event);return false},startFix:function(event){event=getEvent(event);this.target=$(event.target);this.selectstart=function(){return false};$document.on('selectstart',this.selectstart).on('dblclick',this.end);if(isLosecapture){this.target.on('losecapture',this.end)}else{$window.on('blur',this.end)}if(isSetCapture){this.target[0].setCapture()}return event},overFix:function(event){event=getEvent(event);return event},endFix:function(event){event=getEvent(event);$document.off('selectstart',this.selectstart).off('dblclick',this.end);if(isLosecapture){this.target.off('losecapture',this.end)}else{$window.off('blur',this.end)}if(isSetCapture){this.target[0].releaseCapture()}return event}};DragEvent.create=function(elem,event){var $elem=$(elem);var dragEvent=new DragEvent();var startType=DragEvent.types.start;var noop=function(){};var className=elem.className.replace(/^\s|\s.*/g,'')+'-drag-start';var minX;var minY;var maxX;var maxY;var api={onstart:noop,onover:noop,onend:noop,off:function(){$elem.off(startType,dragEvent.start)}};dragEvent.onstart=function(event){var isFixed=$elem.css('position')==='fixed';var dl=$document.scrollLeft();var dt=$document.scrollTop();var w=$elem.width();var h=$elem.height();minX=0;minY=0;maxX=isFixed?$window.width()-w+minX:$document.width()-w;maxY=isFixed?$window.height()-h+minY:$document.height()-h;var offset=$elem.offset();var left=this.startLeft=isFixed?offset.left-dl:offset.left;var top=this.startTop=isFixed?offset.top-dt:offset.top;this.clientX=event.clientX;this.clientY=event.clientY;$elem.addClass(className);api.onstart.call(elem,event,left,top)};dragEvent.onover=function(event){var left=event.clientX-this.clientX+this.startLeft;var top=event.clientY-this.clientY+this.startTop;var style=$elem[0].style;left=Math.max(minX,Math.min(maxX,left));top=Math.max(minY,Math.min(maxY,top));style.left=left+'px';style.top=top+'px';api.onover.call(elem,event,left,top)};dragEvent.onend=function(event){var position=$elem.position();var left=position.left;var top=position.top;$elem.removeClass(className);api.onend.call(elem,event,left,top)};dragEvent.off=function(){$elem.off(startType,dragEvent.start)};if(event){dragEvent.start(event)}else{$elem.on(startType,dragEvent.start)}return api};return DragEvent});define("dialog-plus",function(require){var $=require("jquery");var dialog=require("dialog");var drag=require("drag");dialog.oncreate=function(api){var options=api.options;var originalOptions=options.original;var url=options.url;var oniframeload=options.oniframeload;var $iframe;if(url){this.padding=options.padding=0;$iframe=$('<iframe />');$iframe.attr({src:url,name:api.id,width:'100%',height:'100%',allowtransparency:'yes',frameborder:'no',scrolling:'no'}).on('load',function(){var test;try{test=$iframe[0].contentWindow.frameElement}catch(e){}if(test){if(!options.width){api.width($iframe.contents().width())}if(!options.height){api.height($iframe.contents().height())}}if(oniframeload){oniframeload.call(api)}});api.addEventListener('beforeremove',function(){$iframe.attr('src','about:blank').remove()},false);api.content($iframe[0]);api.iframeNode=$iframe[0]}if(!(originalOptions instanceof Object)){var un=function(){api.close().remove()};for(var i=0;i<frames.length;i++){try{if(originalOptions instanceof frames[i].Object){$(frames[i]).one('unload',un);break}}catch(e){}}}$(api.node).on(drag.types.start,'[i=title]',function(event){if(!api.follow){api.focus();drag.create(api.node,event)}})};dialog.get=function(id){if(id&&id.frameElement){var iframe=id.frameElement;var list=dialog.list;var api;for(var i in list){api=list[i];if(api.node.getElementsByTagName('iframe')[0]===iframe){return api}}}else if(id){return dialog.list[id]}};return dialog});window.dialog=require("dialog-plus")})();


function dr_notify(msg, time) {
    layer.msg(msg);
}
function dr_alert(msg) {
    layer.msg(msg);
}
function dr_diy_type(t) {
    $("#dr_diy_type_0").hide();
    $("#dr_diy_type_1").hide();
    $("#dr_diy_type_" + t).show()
}
function dr_member_rule(id, url, title) {

    $.ajax({
        type: "GET",
        url: url,
        dataType: "text",
        success: function(text) {
            var d = top.dialog({
                title: title,
                content: text,
                okValue: lang['ok'],
                ok: function () {
                    var that = this;
                    that.title(''+lang['ing']);
                    top.$("#mark").val("0");
                    if (top.dr_form_check()) {
                        var _data = top.$("#myform").serialize();
                        $.ajax({
                            type: "POST",
                            dataType: "text",
                            url: url,
                            data: _data,
                            success: function(data) {
                                d.close().remove();
                                $("#dr_status_" + id).html(" <i class='fa fa-check-square'></i>");
                                dr_tips(fc_lang[37], 2, 1);
                            },
                            error: function(HttpRequest, ajaxOptions, thrownError) {

                            }
                        })
                    }

                    return false;
                },
                cancelValue: lang['cancel'],
                cancel: function () {
                    return true;
                }
            });
            d.show();
        },
        error: function(HttpRequest, ajaxOptions, thrownError) {
            dr_alert(HttpRequest.responseText)
        }
    });

}
function dr_install(text, url) {

    var d = top.dialog({
        title: fc_lang["33"],
        content: "<div style='width:500px;line-height:23px;font-size:13px;padding-bottom:10px'>" + text + "</div>",
        okValue: fc_lang["34"],
        ok: function () {
            var that = this;
            that.title(''+lang['ing']);
            dr_tips(lang["waiting"], 99, 1);
            dr_goto_url(url);

            return false;
        },
        cancelValue: fc_lang["35"],
        cancel: function () {
            return true;
        }
    });
    d.show();
}
function dr_install_share(text, url) {

    var d = top.dialog({
        title: "安装",
        content: "<div style='width:500px;line-height:23px;font-size:13px;padding-bottom:10px'>" + text + "</div>",
        button: [
            {
                value: lang["module-1"],
                callback: function () {
                    dr_tips(lang["waiting"], 99, 1);
                    dr_goto_url(url+'&share=1');
                    return false;
                },
                focus: true
            },
            {
                value: lang["module-2"],
                callback: function () {
                    dr_tips(lang["waiting"], 99, 1);
                    dr_goto_url(url);
                    return false;
                }
            },
        ]
    });
    d.show();

}
function dr_dialog_member(id) {
    if (id == "author") {
        id = $("#dr_author").val()
    }
    top.dialog({
        zIndex:99,
        quickClose: true,
        url: siteurl + "?c=api&m=member&uid=" + id,
        title: lang["smember"]
    }).show();
}
function dr_dialog_ip(id) {
    var name = $("#dr_" + id).val();
    if (name) {
        top.dialog({
            quickClose: true,
            url: "http://www.baidu.com/baidu?wd=" + name,
            title: "IP",
            width: 700,
            height: 400
        }).show();
    } else {
        dr_tips("[" + id + "] " + lang["iperror"], 3)
    }
}
/*
 (function(config) {
 config["lock"] = true;
 config["fixed"] = true;
 config["drag"] = true;
 config["esc"] = true;
 config["resize"] = false;
 config["opacity"] = 0.1;
 config["padding"] = "5px 10px 5px 10px"
 })(art.dialog.defaults);
 */
function dr_page_rule() {
    var body = '<style>.table-list2 tbody td, .table-list2 .btn {padding-bottom:1px;padding-top:1px;}</style><table border="0" cellpadding="1" cellspacing="0" class="table-list table-list2">';
    body += "<tr><td>{id}</td><td>Id</td></tr><tr>";
    body += "<tr><td>{page}</td><td>" + lang["page"] + "</td></tr>";
    body += "<tr><td>{dirname}</td><td>" + lang["dirname"] + "</td></tr>";
    body += "<tr><td>{pdirname}</td><td>" + lang["pdirname"] + "</td></tr>";
    body += "</table>&nbsp;";
    layer.open({
        type: 1,
        fix:true,
        scrollbar: false,
        shadeClose: true,
        shade: 0,
        content: body
    });
}
function dr_url_rule() {
    var body = '<style>.table-list2 tbody td, .table-list2 .btn {padding-bottom:1px;padding-top:1px;}</style><table border="0" cellpadding="1" cellspacing="0" class="table-list table-list2">';
    body += '<tr><td width="15%">' + lang["tag"] + '</td><td width="85%">&nbsp;</td></tr>';
    body += "<tr><td>{id}</td><td>Id</td></tr><tr>";
    body += "<tr><td>{page}</td><td>" + lang["page"] + "</td></tr>";
    body += "<tr><td>{modname}</td><td>" + lang["modname"] + "</td></tr>";
    body += "<tr><td>{dirname}</td><td>" + lang["dirname"] + "</td></tr>";
    body += "<tr><td>{pdirname}</td><td>" + lang["pdirname"] + "</td></tr>";
    body += "<tr><td>&nbsp;</td><td>" + lang["tagvalue"] + "</td></tr>";
    body += "<tr><td>" + lang["function"] + "</td><td>&nbsp;</td></tr>";
    body += "<tr><td>{md5({id})}</td><td>" + lang["funcvalue1"] + "</td></tr>";
    body += "<tr><td>{test($data)}</td><td>" + lang["funcvalue2"] + "</td></tr>";
    body += "<tr><td>&nbsp;</td><td>" + lang["tagmore"] + "</td></tr>";
    body += "</table>";
    layer.open({
        type: 1,
        fix:true,
        scrollbar: false,
        shadeClose: true,
        shade: 0,
        content: body
    });
}
function dr_seo_rule() {
    var body = '<style>.table-list tbody td, .table-list .btn {height:25px;line-height:25px;padding-bottom:1px;padding-top:1px;}</style><table border="0" cellpadding="1" cellspacing="0" class="table-list">';
    body += '<tr><td width="15%">' + lang["tag"] + '</td><td width="85%">&nbsp;</td></tr>';
    body += "<tr><td>{join}</td><td>" + lang["seojoin"] + "</td></tr><tr>";
    body += "<tr><td>{modulename}</td><td>" + lang["seoname"] + "</td></tr><tr>";
    body += "<tr><td>{catname}</td><td>栏目名称</td></tr><tr>";
    body += "<tr><td>{catpname}</td><td>栏目上下级名称</td></tr><tr>";
    body += "<tr><td>[{page}]</td><td>" + lang["seopage"] + "</td></tr>";
    body += "<tr><td>{SITE_NAME}</td><td>" + lang["seositename"] + "</td></tr>";
    body += "<tr><td>&nbsp;</td><td>" + lang["seovalue1"] + "</td></tr>";
    body += "<tr><td>&nbsp;</td><td>" + lang["seovalue2"] + "</td></tr>";
    body += "<tr><td>" + lang["function"] + "</td><td>&nbsp;</td></tr>";
    body += "<tr><td>{test($data)}</td><td>" + lang["seofuncvalue"] + "</td></tr>";
    body += "<tr><td>&nbsp;</td><td>" + lang["seodiy"] + "</td></tr>";
    body += "<tr><td>&nbsp;</td><td>" + lang["tagmore"] + "</td></tr>";
    body += "</table>";
    layer.open({
        type: 1,
        fix:true,
        scrollbar: false,
        shadeClose: true,
        shade: 0,
        content: body
    });
}
function set_frontop(v) {
    if (v == 1) {
        $(".tabBut li:gt(1)").show()
    } else {
        $(".tabBut li:gt(1)").hide()
    }
}
function set_urlmode(v) {
    if (v == 1) {
        $("#urlmode").show()
    } else {
        $("#urlmode").hide()
    }
}
function set_sitemode(v) {
    if (v == 1) {
        $("#sitemode").show()
    } else {
        $("#sitemode").hide()
    }
}
function set_urltohtml(v) {
    if (v == 1) {
        $("#html").show()
    } else {
        $("#html").hide()
    }
}
function SwapTab(id) {
    $("#myform .tabBut").children("li").removeClass("on");
    $(".tabBut li:eq(" + id + ")").attr("class", "on");
    $("#myform .dr_hide").hide();
    $("#cnt_" + id).show();
    $("#myform #page").val(id)
}
function dr_form_tips(name, status, code) {
    var obj = $("#dr_" + name + "_tips");
    obj.html("");
    if (status) {
        obj.attr("class", "");
        dr_tips(code, 3, 1)
    } else {
        obj.attr("class", "");
        dr_tips(code)
    }
}
function dr_selected() {
    if ($("#dr_select").prop("checked")) {
        $(".dr_select").prop("checked", true);
    } else {
        $(".dr_select").prop("checked", false);
    }
}
function dr_selected_by(id) {
    if ($("#" + id).prop("checked")) {
        $("." + id).prop("checked", true);
    } else {
        $("." + id).prop("checked", false);
    }
}
function dr_goto_url(url) {
    window.location.href = url;
}
function dr_waiting() {
    dr_tips(lang["waiting"], 3, 1);
}
function dr_dialog_show(title, url) {
    $.ajax({
        type: "POST",
        dataType: "text",
        url: url,
        data: {},
        success: function(data) {
            top.dialog({
                quickClose: true,
                content: data,
                title: title
            }).show();
        },
        error: function(HttpRequest, ajaxOptions, thrownError) {}
    })


}
function dr_dialog_set(text, url) {

    var d = top.dialog({
        title: lang['tips'],
        fixed: true,
        content: '<img src="/statics/js/skins/icons/question.png"> '+text,
        okValue: lang['ok'],
        ok: function () {
            this.title(''+lang['ing']);
            $.ajax({
                type: "POST",
                dataType: "json",
                url: url,
                data: {},
                success: function(data) {
                    if (data.status == 1) {
                        d.close().remove();
                        dr_tips(data.code, 2, 1);
                        setTimeout("window.location.reload(true)", 2000)
                    } else {
                        dr_tips(data.code, 2, 1);
                        top.$(".page-loading").remove()
                    }
                },
                error: function(HttpRequest, ajaxOptions, thrownError) {}
            })
        },
        cancelValue: lang['cancel'],
        cancel: function () {}
    });
    d.show();
}
function dr_confirm_set_all(title, del) {

    var d = top.dialog({
        title: lang['tips'],
        fixed: true,
        content: '<img src="/statics/js/skins/icons/question.png"> '+title,
        okValue: lang['ok'],
        ok: function () {
            this.title(''+lang['ing']);
            var _data = $("#myform").serialize();
            var _url = window.location.href;
            if ((_data.split("ids")).length - 1 <= 0) {
                d.close().remove();
                dr_tips(lang["select_null"]);
                return false;
            }
            $.ajax({
                type: "POST",
                dataType: "json",
                url: _url,
                data: _data,
                success: function(data) {
                    if (data.status == 1) {
                        dr_tips(data.code, 3, 1);
                        if (del == 1) {
                            $(".dr_select").each(function() {
                                if ($(this).attr("checked")) {
                                    $("#dr_row_" + $(this).val()).remove()
                                }
                            })
                        } else {
                            setTimeout("window.location.reload(true)", 3000)
                        }
                    } else {
                        dr_tips(data.code, 3, 2);
                        top.$(".page-loading").remove();
                        return true
                    }
                },
                error: function(HttpRequest, ajaxOptions, thrownError) {}
            });
        },
        cancelValue: lang['cancel'],
        cancel: function () {}
    });
    d.show();
}
function dr_dialog_del(text, url) {

    var d = top.dialog({
        title: lang["del"],
        fixed: true,
        content: '<img src="/statics/js/skins/icons/question.png"> '+text,
        okValue: lang['ok'],
        ok: function () {
            this.title(''+lang['ing']);

            $.ajax({
                type: "POST",
                dataType: "json",
                url: url,
                data: {},
                success: function(data) {
                    if (data.status == 1) {
                        d.close().remove();
                        dr_tips(data.code, 3, 1);
                        setTimeout("window.location.reload(true)", 2000)
                    } else {
                        dr_tips(data.code, 2, 2);
                        top.$(".page-loading").remove()
                    }
                },
                error: function(HttpRequest, ajaxOptions, thrownError) {}
            })
        },
        cancelValue: lang['cancel'],
        cancel: function () {}
    });
    d.show();

}
function dr_confirm_del_all() {

    var d = top.dialog({
        title: lang["tips"],
        fixed: true,
        content: '<img src="/statics/js/skins/icons/question.png"> '+lang["confirm"],
        okValue: lang['ok'],
        ok: function () {
            this.title(''+lang['ing']);
            var _data = $("#myform").serialize();
            var _url = window.location.href;
            if ((_data.split("ids")).length - 1 <= 0) {
                d.close().remove();
                dr_tips(lang["select_null"], 2);
                return true
            }
            $.ajax({
                type: "POST",
                dataType: "json",
                url: _url,
                data: _data,
                success: function(data) {
                    if (data.status == 1) {
                        d.close().remove();
                        dr_tips(data.code, 2, 1);
                        setTimeout("window.location.reload(true)", 2000)
                    } else {
                        dr_tips(data.code, 2, 2);
                        top.$(".page-loading").remove();
                        return true
                    }
                },
                error: function(HttpRequest, ajaxOptions, thrownError) {}
            });
            return true
        },
        cancelValue: lang['cancel'],
        cancel: function () {}
    });
    d.show();
}
function dr_dialog(url, func) {
    switch (func) {
        case "add":
            var _title = lang["add"];
            break;
        case "edit":
            var _title = lang["edit"];
            break;
        default:
            return false;
            break
    }
    $.ajax({
        type: "GET",
        url: url,
        dataType: "text",
        success: function(text) {
            var d = top.dialog({
                title: _title,
                content: text,
                okValue: lang['ok'],
                ok: function () {
                    var that = this;
                    that.title(''+lang['ing']);
                    top.$("#mark").val("0");
                    if (top.dr_form_check()) {
                        var _data = top.$("#myform").serialize();
                        $.ajax({
                            type: "POST",
                            dataType: "json",
                            url: url,
                            data: _data,
                            success: function(data) {
                                if (data.status == 1) {
                                    d.close().remove();
                                    dr_tips(data.code, 2, 1);
                                    setTimeout("window.location.reload(true)", 3000)
                                } else {
                                    that.title(_title);
                                    top.d_tips(data.id, false, data.code);
                                    top.$(".page-loading").remove();
                                    return false
                                }
                            },
                            error: function(HttpRequest, ajaxOptions, thrownError) {}
                        })
                    }

                    return false;
                },
                cancelValue: lang['cancel'],
                cancel: function () {
                    return true;
                }
            });
            d.show();
        },
        error: function(HttpRequest, ajaxOptions, thrownError) {
            dr_alert(HttpRequest.responseText)
        }
    });
}
function dr_upload_files2(url) {
    top.dialog({
        title: lang["upload"],
        quickClose: true,
        url: url,
        width: 550,
        height: 400,
        okValue: lang['ok'],
        ok: function() {
            window.location.reload(true)
        }
    }).show();
};


$(function() {
    $('#bs_confirmation_delete').on('confirmed.bs.confirmation', function () {
        $('#action').val('del');
        var _data = $("#myform").serialize();
        var _url = window.location.href;
        if ((_data.split("ids")).length - 1 <= 0) {
            dr_tips(lang["select_null"], 2);
            return true
        }
        $.ajax({
            type: "POST",
            dataType: "json",
            url: _url,
            data: _data,
            success: function(data) {
                if (data.status == 1) {
                    dr_tips(data.code, 2, 1);
                    setTimeout("window.location.reload(true)", 2000)
                } else {
                    dr_tips(data.code, 3, 2);
                    top.$(".page-loading").remove();
                    return true
                }
            },
            error: function(HttpRequest, ajaxOptions, thrownError) {}
        });
        return true
    });
    $('#dr_confirm_set_all').on('confirmed.bs.confirmation', function () {
        $('#action').val('del');
        var _data = $("#myform").serialize();
        var _url = window.location.href;
        if ((_data.split("ids")).length - 1 <= 0) {
            dr_tips(lang["select_null"], 2);
            return true
        }
        $.ajax({
            type: "POST",
            dataType: "json",
            url: _url,
            data: _data,
            success: function(data) {
                if (data.status == 1) {
                    dr_tips(data.code, 3, 1);
                    setTimeout("window.location.reload(true)", 3000)
                } else {
                    dr_tips(data.code, 3, 2);
                    top.$(".page-loading").remove();
                    return true
                }
            },
            error: function(HttpRequest, ajaxOptions, thrownError) {}
        });
        return true
    });
    $('#dr_confirm_order').on('confirmed.bs.confirmation', function () {
        $('#action').val('order');
        var _data = $("#myform").serialize();
        var _url = window.location.href;
        if ((_data.split("ids")).length - 1 <= 0) {
            dr_tips(lang["select_null"], 2);
            return true
        }
        $.ajax({
            type: "POST",
            dataType: "json",
            url: _url,
            data: _data,
            success: function(data) {
                if (data.status == 1) {
                    dr_tips(data.code, 3, 1);
                    setTimeout("window.location.reload(true)", 3000)
                } else {
                    dr_tips(data.code, 3, 2);
                    top.$(".page-loading").remove();
                    return true
                }
            },
            error: function(HttpRequest, ajaxOptions, thrownError) {}
        });
        return true
    });
    $('#dr_confirm_verify').on('confirmed.bs.confirmation', function () {
        $('#action').val('verify');
        var _data = $("#myform").serialize();
        var _url = window.location.href;
        if ((_data.split("ids")).length - 1 <= 0) {
            dr_tips(lang["select_null"], 2);
            return true
        }
        $.ajax({
            type: "POST",
            dataType: "json",
            url: _url,
            data: _data,
            success: function(data) {
                if (data.status == 1) {
                    dr_tips(data.code, 3, 1);
                    setTimeout("window.location.reload(true)", 3000)
                } else {
                    dr_tips(data.code, 3, 2);
                    top.$(".page-loading").remove();
                    return true
                }
            },
            error: function(HttpRequest, ajaxOptions, thrownError) {}
        });
        return true
    });
});


// 打开预览文件
function dr_show_file_code(title, url) {

    top.dialog({
        quickClose: true,
        url: url,
        title: title,
        width: 700,
        height: 400
    }).show();

}

/**
* POSCMS 通用js文件
 * 成都天睿信息技术有限公司版权所有
* */
function dr_loginout(msg) {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/index.php?s=member&c=login&m=out",
        success: function(data) {
            dr_tips(msg, 3, 1);
            setTimeout('window.location.href="' + data.backurl + '"', 2000);
            var sync_url = data.syncurl;
            for (var i in sync_url) {
                $.ajax({
                    type: "GET",
                    async: false,
                    url: sync_url[i],
                    dataType: "jsonp",
                    success: function(json) {},
                    error: function() {}
                })
            }
        },
        error: function(HttpRequest, ajaxOptions, thrownError) {
            alert(HttpRequest.responseText);
        }
    })
}
function dr_tips(msg, time, mark) {
    if (!msg || msg == '' || msg == '&nbsp;') {
        return
    }
    var mymsg;
    msg = msg.stripHTML();
    if (mark == 1) {
        mymsg = '<div class="mytips" ><i class="fa fa-check-circle"></i> ' + msg + '</div>'
    } else if (mark == 2) {
        mymsg = '<div class="mytips">' + msg + '</div>'
    } else {
        mymsg = '<div class="mytips"><i class="fa fa-times-circle"></i> ' + msg + '</div>'
    }
    if (!time) {
        time = 3
    }

    if (self != top) {
        var dmsg = top.dialog({
            zIndex: 9999999999,
            content: mymsg,
            quickClose: true
        });
        dmsg.show();
        setTimeout(function() {
                dmsg.close().remove()
            },
            time * 1000);
        return dmsg
    } else {
        layer.msg(mymsg);
    }
}

function dr_cmf_tips(code, msg, time) {

    var tip = '<i class="fa fa-info-circle"></i>';
    if (code == 1) {
        tip = '<i class="fa fa-check-circle"></i>';
    } else if (code == 0) {
        tip = '<i class="fa fa-times-circle"></i>';
    }
    layer.msg(tip+'&nbsp;&nbsp;'+msg);
}

String.prototype.stripHTML = function() {
    var reTag = /<(?:.|\s)*?>/g;
    return this.replace(reTag,"");
}

function dr_confirm_url(title, url) {
    var d = top.dialog({
        title: lang["tips"],
        fixed: true,
        content: title,
        okValue: lang['ok'],
        ok: function() {
            dr_tips(lang["waiting"], 3, 1);
            window.location.href = url;
            return true
        },
        cancelValue: lang['cancel'],
        cancel: function() {}
    });
    d.show()
}
function dr_dialog_msg(msg) {
    dialog({
        quickClose: true,
        content: msg,
        title: lang["tips"]
    }).show()
}
function dr_add_favorite(url, title) {
    try {
        window.external.addFavorite(url, title)
    } catch(e) {
        try {
            window.sidebar.addPanel(title, url, "")
        } catch(e) {
            dr_dialog_msg(fc_lang[28])
        }
    }
}
function dr_set_homepage(url) {
    if ($.browser.msie) {
        document.body.style.behavior = "url(#default#homepage)";
        document.body.setHomePage(url)
    } else {
        dr_tips(fc_lang[29], 3)
    }
}
function dr_remove_file(name, id) {
    var d = top.dialog({
        title: lang["tips"],
        fixed: true,
        content: lang["confirm"],
        okValue: lang['ok'],
        ok: function() {
            var fileid = $("#fileid_" + name + "_" + id).val();
            var value = $("#dr_" + name + "_del").val();
            $("#files_" + name + "_" + id).remove();
            $("#dr_" + name + "_del").val(value + "|" + fileid);
            return true
        },
        cancelValue: lang['cancel'],
        cancel: function() {}
    });
    d.show()
}
function dr_edit_file(url, name, id) {
    art.dialog.open(url, {
        title: lang["upload"],
        opacity: 0.1,
        width: 550,
        height: 400,
        ok: function() {
            var iframe = this.iframe.contentWindow;
            if (!iframe.document.body) {
                dr_tips("iframe loading");
                return false
            }
            var value = iframe.document.getElementById("att-status").innerHTML;
            if (value == "" || value == undefined) {
                dr_tips(lang["notselectfile"]);
                return false
            } else {
                var file = value.split("|");
                var info = file[1].split(",");
                $("#fileid_" + name + "_" + id).val(info[0]);
                $("#span_" + name + "_" + id).html('<a href="javascript:;" class="btn btn-sm blue" onclick="dr_show_file_info(\'' + info[0] + '\')"><i class="fa fa-search"></i></a>');
                return true
            }
        },
        cancel: true
    })
}
function dr_input_files(name, count) {
    var size = $("#" + name + "-sort-items li").size();
    var total = count - size;
    if (total <= 0) {
        dr_tips(fc_lang[42]);
        return
    }
    var id = size + 1;
    var url = '/index.php?s=member&c=api&&m=upload_input';
    $.ajax({
        type: "GET",
        url: url,
        dataType: "text",
        success: function(text) {
            var d = top.dialog({
                title: lang["input"],
                content: text,
                okValue: lang['ok'],
                ok: function() {
                    var title = top.$('#dr_title').val();
                    var furl = top.$('#dr_url').val();
                    if (!title || !furl) {
                        dr_tips(fc_lang[43]);
                        return false
                    }
                    var c = "";
                    c += '<li id="files_' + name + "_" + id + '" list="' + id + '" style="cursor:move;">';
                    c += '<input type="hidden" value="' + furl + '" name="data[' + name + '][file][]" id="fileid_' + name + "_" + id + '" />';
                    c += '<label><input type="text" class="form-control" style="width:300px;height:30px;" value="' + title + '" name="data[' + name + '][title][]" /></label>\t';
                    c += '<label><a href="javascript:;" class="btn btn-sm red" onclick="dr_remove_file(\'' + name + "','" + id + "')\">";
                    c += '<i class="fa fa-trash"></i></a></label>\t';
                    c += '<label id="span_' + name + '_' + id + '"><a href="javascript:;" class="btn btn-sm blue" onclick="dr_show_file_info(\'' + furl + "')\">";
                    c += '<i class="fa fa-search"></i></a></label>\t';
                    c += "</li>";
                    $("#" + name + "-sort-items").append(c);
                    return true
                },
                cancelValue: lang['cancel'],
                cancel: function() {
                    return true
                }
            });
            d.show()
        },
        error: function(HttpRequest, ajaxOptions, thrownError) {
            dr_alert(HttpRequest.responseText)
        }
    })
}
function dr_edit_input_file(file2, title2, name, id) {
    var url = '/index.php?s=member&c=api&m=upload_input&file=' + file2 + '&title=' + title2;
    $.ajax({
        type: "GET",
        url: url,
        dataType: "text",
        success: function(text) {
            var d = top.dialog({
                title: lang["input"],
                content: text,
                okValue: lang['ok'],
                ok: function() {
                    var title = top.$('#dr_title').val();
                    var furl = top.$('#dr_url').val();
                    if (!title || !furl) {
                        dr_tips(fc_lang[43]);
                        return false
                    }
                    var c = "";
                    c += '<input type="hidden" value="' + furl + '" name="data[' + name + '][file][]" id="fileid_' + name + "_" + id + '" />';
                    c += '<label><input type="text" class="form-control" style="width:300px;height:30px;" value="' + title + '" name="data[' + name + '][title][]" /></label>\t';
                    c += '<label><a href="javascript:;" class="btn btn-sm red" onclick="dr_remove_file(\'' + name + "','" + id + "')\">";
                    c += '<i class="fa fa-trash"></i></a></label>\t';
                    c += '<label><a href="javascript:;" class="btn btn-sm green" onclick="dr_edit_input_file(\'' + furl + "', '" + title + "', '" + name + "','" + id + "')\">";
                    c += '<i class="fa fa-edit"></i></a></label>\t';
                    c += '<label id="span_' + name + '_' + id + '"><a href="javascript:;" class="btn btn-sm blue" onclick="dr_show_file_info(\'' + furl + "')\">";
                    c += '<i class="fa fa-search"></i></a></label>\t';
                    $('#files_' + name + "_" + id + '').html(c);
                    return true
                },
                cancelValue: lang['cancel'],
                cancel: function() {
                    return true
                }
            });
            d.show()
        },
        error: function(HttpRequest, ajaxOptions, thrownError) {
            dr_alert(HttpRequest.responseText)
        }
    })
}
function dr_upload_files(name, url, pan, count) {
    var size = $("#" + name + "-sort-items li").size();
    var total = count - size;
    art.dialog.open(url + "&count=" + total, {
        title: lang["upload"],
        opacity: 0.1,
        width: 550,
        height: 400,
        ok: function() {
            var iframe = this.iframe.contentWindow;
            if (!iframe.document.body) {
                dr_tips("iframe loading");
                return false
            }
            var value = iframe.document.getElementById("att-status").innerHTML;
            if (value == "" || value == undefined) {
                return false
            } else {
                var file = value.split("|");
                for (var i in file) {
                    var filepath = file[i];
                    var id = parseInt(size) + parseInt(i);
                    if (filepath) {
                        var info = filepath.split(",");
                        if ($("#" + name + '-sort-items [value="' + info[0] + '"]').length > 0) {
                            dr_tips(fc_lang[27]);
                            return false
                        }
                        if (!info[0] || info[0] == undefined) {
                            info[0] = ''
                        }
                        if (!info[3] || info[3] == undefined) {
                            info[3] = info[0]
                        }
                        info[3] = dr_remove_ext(info[3]);
                        var c = "";
                        c += '<li id="files_' + name + "_" + id + '" list="' + id + '" style="cursor:move;">';
                        c += '<input type="hidden" value="' + info[0] + '" name="data[' + name + '][file][]" id="fileid_' + name + "_" + id + '" />';
                        c += '<label><input type="text" class="form-control" style="width:300px;height:30px;" value="' + info[3] + '" name="data[' + name + '][title][]" /></label>\t';
                        c += '<label><a href="javascript:;" class="btn btn-sm red" onclick="dr_remove_file(\'' + name + "','" + id + "')\">";
                        c += '<i class="fa fa-trash"></i></a></label>\t';
                        c += '<label id="span_' + name + '_' + id + '"><a href="javascript:;" class="btn btn-sm blue" onclick="dr_show_file_info(\'' + info[0] + "')\">";
                        c += '<i class="fa fa-search"></i></a></label>\t';
                        c += "</li>";
                        $("#" + name + "-sort-items").append(c)
                    }
                }
                return true
            }
        },
        cancel: true
    })
}
function dr_new_upload_file(name, url) {
    $.ajax({
        type: "GET",
        url: url + '&' + Math.random(),
        dataType: "text",
        success: function(text) {
            var d = top.dialog({
                title: fc_lang[3],
                content: text,
                okValue: lang['ok'],
                ok: function() {
                    var title = top.$('#dr_title').val();
                    var furl = top.$('#dr_url').val();
                    if (!title || !furl) {
                        dr_tips(fc_lang[43]);
                        return false
                    }
                    return true
                },
                cancelValue: lang['cancel'],
                cancel: function() {
                    return true
                }
            });
            d.show()
        },
        error: function(HttpRequest, ajaxOptions, thrownError) {
            dr_alert(HttpRequest.responseText);
        }
    })
}
function dr_upload_file(name, url) {
    art.dialog.open(url + "&df=1", {
        title: lang["upload"],
        opacity: 0.1,
        width: 550,
        height: 400,
        ok: function() {
            var iframe = this.iframe.contentWindow;
            if (!iframe.document.body) {
                dr_tips("iframe loading");
                return false
            }
            var value = iframe.document.getElementById("att-status").innerHTML;
            if (value == "" || value == undefined) {
                dr_tips(lang["notselectfile"]);
                return false
            } else {
                $("#file_info_" + name).remove();
                var file = value.split("|");
                var info = file[1].split(",");
                if (iframe.$("#is_down").attr("checked")) {
                    var url2 = memberpath + "index.php?s=member&c=api&m=down_file";
                    $("#show_" + name).html("&nbsp;&nbsp;远程文件下载中...");
                    $.ajax({
                        type: "POST",
                        url: url2,
                        data: {
                            url: url,
                            file: info[0]
                        },
                        dataType: "json",
                        success: function(text) {
                            $("#show_" + name).html("");
                            if (text.status == 0) {
                                dr_tips(text.code);
                                return false
                            } else {
                                info[0] = text.id;
                                info[1] = text.name;
                                $("#dr_" + name).val(text.id);
                                $("#fileid_" + name).val(text.id);
                                $("#dr_my_" + name + "_list").html("<button type=\"button\" style=\"cursor:pointer;\" class=\"btn green btn-sm file_info_" + name + "\" onclick=\"dr_show_file_info('" + info[0] + "')\"> <i class=\"fa fa-search\"></i> " + info[1] + "</button> <button type=\"button\" style=\"cursor:pointer;\" class=\"btn red btn-sm file_info_" + name + "\" onclick=\"dr_delete_file_js('" + name + "')\"> <i class=\"fa fa-trash\"></i> " + lang['del'] + "</button> ")
                            }
                        }
                    })
                } else {
                    info[3] = '预览';
                    $("#dr_" + name).val(info[0]);
                    $("#fileid_" + name).val(info[0]);
                    $("#dr_my_" + name + "_list").html("<button type=\"button\" style=\"cursor:pointer;\" class=\"btn green btn-sm file_info_" + name + "\" onclick=\"dr_show_file_info('" + info[0] + "')\"> <i class=\"fa fa-search\"></i> " + info[3] + "</button> <button type=\"button\" style=\"cursor:pointer;\" class=\"btn red btn-sm file_info_" + name + "\" onclick=\"dr_delete_file_js('" + name + "')\"> <i class=\"fa fa-trash\"></i> " + lang['del'] + "</button> ");
                    return true
                }
            }
        },
        cancel: true
    })
}
function dr_login() {
    window.location.href = memberpath + "index.php?s=member&c=login";
}


//
function dr_iframe(type, url, width, height, nogo) {

    var title = '';
    if (type == 'add') {
        title = '<i class="fa fa-plus"></i> '+lang['add'];
    } else if (type == 'edit') {
        title = '<i class="fa fa-edit"></i> '+lang['edit'];
    } else if (type == 'send') {
        title = '<i class="fa fa-send"></i> '+lang['send'];
    } else if (type == 'save') {
        title = '<i class="fa fa-save"></i> '+lang['save'];
    } else {
        title = type;
    }
    if (!width) {
        width = '60%';
    }
    if (!height) {
        height = '70%';
    }

    layer.open({
        type: 2,
        title: title,
        fix:true,
        scrollbar: false,
        shadeClose: true,
        shade: 0,
        area: [width, height],
        btn: [lang['ok'], lang['esc']],
        yes: function(index, layero){
            var body = layer.getChildFrame('body', index);
            $(body).find('.form-group').removeClass('has-error');
            // 延迟加载
            var loading = layer.load(2, {
                shade: [0.3,'#fff'], //0.1透明度的白色背景
                time: 100000000
            });
            $.ajax({type: "POST",dataType:"json", url: url, data: $(body).find('#myform').serialize(),
                success: function(json) {
                    layer.close(loading);
                    if (json.code == 1) {
                        layer.close(index);
                        if (json.data.tourl) {
                            setTimeout("window.location.href = '"+json.data.tourl+"'", 2000);
                        } else {
                            if (nogo == 'nogo') {

                            } else {
                                setTimeout("window.location.reload(true)", 2000);
                            }

                        }
                        dr_tips(1, json.msg);
                    } else {
                        $(body).find('#dr_row_'+json.data.field).addClass('has-error');
                        dr_tips(0, json.msg);
                    }
                    return false;
                },
                error: function(HttpRequest, ajaxOptions, thrownError) {
                    layer.closeAll('loading');
                    dr_tips(0, lang['error']);
                }
            });
            return false;
        },
        success: function(layero, index){
            // 主要用于后台权限验证

        },
        content: url+'&is_ajax=1'
    });
}
// ajax 显示内容
function dr_iframe_show(type, url, width, height) {

    var title = '';
    if (type == 'show') {
        title = '<i class="fa fa-search"></i> '+lang['show'];
    } else if (type == 'edit') {
        title = '<i class="fa fa-edit"></i> '+lang['edit'];
    } else if (type == 'code') {
        title = '<i class="fa fa-code"></i> '+lang['code'];
    } else if (type == 'cart') {
        title = '<i class="fa fa-shopping-cart"></i> '+lang['paylog'];
    } else {
        title = type;
    }
    if (!width) {
        width = '60%';
    }
    if (!height) {
        height = '70%';
    }

    layer.open({
        type: 2,
        title: title,
        fix:true,
        scrollbar: false,
        shadeClose: true,
        shade: 0,
        area: [width, height],
        success: function(layero, index){
            // 主要用于后台权限验证
        },
        content: url+'&is_ajax=1'
    });
}

function dr_chat(_this) {
    var uid = $(_this).attr("uid");
    var online = $(_this).attr("online");
    var username = $(_this).attr("username");
    if (online == -1) {
        var title = "正在与" + username + "聊天中..."
    } else {
        if (online == 1) {
            var title = "正在与" + username + "聊天中... [在线]"
        } else {
            var title = "正在与" + username + "聊天中... [离线]"
        }
    }
    var throughBox = $.dialog.through;
    var dr_dialog = throughBox({
        id: "dr_webchat",
        title: title,
        padding: 0,
        width: 420,
        height: 480
    });
    var url = memberpath + "index.php?s=member&c=api&m=webchat&username=" + username + "&uid=" + uid + "&online=" + online + "&" + Math.random();
    $.ajax({
        type: "GET",
        url: url,
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        success: function(text) {
            dr_dialog.content(text.html)
        },
        error: function(HttpRequest, ajaxOptions, thrownError) {
            dr_dialog.close();
            dr_login()
        }
    })
}
function dr_delete_file_js(name) {
    $("#dr_" + name).val("");
    $(".file_info_" + name).remove()
}
function dr_delete_file(name) {
    var d = top.dialog({
        title: lang["tips"],
        fixed: true,
        content: lang["confirm"],
        okValue: lang['ok'],
        ok: function() {
            $("#dr_" + name).val("");
            $("#fileid_" + name).val("");
            $(".file_info_" + name).remove();
            return true
        },
        cancelValue: lang['cancel'],
        cancel: function() {}
    });
    d.show()
}
function dr_delete_file2(name) {
    var d = top.dialog({
        title: lang["tips"],
        fixed: true,
        content:  lang["confirm"],
        okValue: lang['ok'],
        ok: function() {
            $("#fileid_" + name).val("");
            $("#dr_my_" + name + "_list").html("");
            return true
        },
        cancelValue: lang['cancel'],
        cancel: function() {}
    });
    d.show()
}
function dr_show_file_info(name) {
    var url = memberpath + "index.php?s=member&c=api&m=fileinfo&name=" + name + "&rand=" + Math.random();
    layer.open({
        type: 2,
        shade: 0,
        fix:true,
        scrollbar: false,
        shadeClose: true,
        title: lang["fileinfo"],
        area: ['50%', '50%'],
        content: url+'&is_ajax=1'
    });
}
function dr_upload(name, ext, size, count) {
    alert("此函数已废弃");
    return
}
function dr_remove_ext(str) {
    var reg = /\.\w+$/;
    return str.replace(reg, "")
}
function dr_clear_date(name) {
    $("#dr_" + name).val("0");
    $("#calendar_" + name).val("")
}
function dr_clear_color(name) {
    $("#input_colorId" + name).val("");
    $("#background_colorId" + name).css("background-color", "");
    $("#dr_" + name).val("");
    $(".sp-preview-inner").attr("style", "background-color:rgb(0, 0, 0);");
    $("#dr_color_value_" + name).attr("style", "background:none");
    dr_closeBox(name)
}
function dr_set_color(name) {
    var v = $("#input_colorId" + name).val();
    $("#dr_" + name).val(v);
    $("#dr_color_value_" + name).attr("style", "background:" + v);
    dr_closeBox(name)
}
var ColorHex = new Array("00", "33", "66", "99", "CC", "FF");
var SpColorHex = new Array("FF0000", "00FF00", "0000FF", "FFFF00", "00FFFF", "FF00FF");
var current = null;
var colorTable = "";
function dr_color(name) {
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 6; j++) {
            colorTable = colorTable + "<tr height=12>";
            colorTable = colorTable + "<td width=11 onmouseover=\"dr_onmouseover_color('" + name + "', '000')\" onclick=\"dr_select_color('" + name + "','000')\" style=\"background-color:#000\">";
            if (i == 0) {
                colorTable = colorTable + "<td width=11 onmouseover=\"dr_onmouseover_color('" + name + "', '" + ColorHex[j] + ColorHex[j] + ColorHex[j] + "')\" onclick=\"dr_select_color('" + name + "','" + ColorHex[j] + ColorHex[j] + ColorHex[j] + '\')" style="background-color:#' + ColorHex[j] + ColorHex[j] + ColorHex[j] + '">'
            } else {
                colorTable = colorTable + "<td width=11 onmouseover=\"dr_onmouseover_color('" + name + "', '" + SpColorHex[j] + "')\" onclick=\"dr_select_color('" + name + "','" + SpColorHex[j] + '\')" style="background-color:#' + SpColorHex[j] + '">'
            }
            colorTable = colorTable + "<td width=11 onmouseover=\"dr_onmouseover_color('" + name + "', '000')\" onclick=\"dr_select_color('" + name + "','000')\" style=\"background-color:#000\">";
            for (k = 0; k < 3; k++) {
                for (l = 0; l < 6; l++) {
                    colorTable = colorTable + "<td width=11 onmouseover=\"dr_onmouseover_color('" + name + "', '" + ColorHex[k + i * 3] + ColorHex[l] + ColorHex[j] + "')\" onclick=\"dr_select_color('" + name + "','" + ColorHex[k + i * 3] + ColorHex[l] + ColorHex[j] + '\')"  style="background-color:#' + ColorHex[k + i * 3] + ColorHex[l] + ColorHex[j] + '">'
                }
            }
        }
    }
    colorTable = '<div class="dr_color" style="position:relative;width:253px; height:176px"><a href="javascript:;" onclick="dr_closeBox(\'' + name + '\');" class="close-own">X</a><table width=253 border="0" cellspacing="0" cellpadding="0" style="border:1px #000 solid;border-bottom:none;border-collapse: collapse" bordercolor="000000">' + "<tr height=30><td colspan=21 bgcolor=#eeeeee>" + '<table cellpadding="0" cellspacing="1" border="0" style="border-collapse: collapse"><tr><td width="3"><td><input type="text" name="DisColor" size="6" id="background_colorId' + name + '" disabled style="border:solid 1px #000000;background-color:#ffff00"></td><td width="3"><td><input type="text" name="HexColor" size="7" id="input_colorId' + name + '" style="border:inset 1px;font-family:Arial;" value="#000000"></td><td><a href="javascript:;" onclick="dr_set_color(\'' + name + '\');"> ok</a>&nbsp;&nbsp;<a href="javascript:;" onclick="dr_clear_color(\'' + name + "');\"> clear</a></td></tr></table></td></table>" + '<table width=253  border="1" cellspacing="0" cellpadding="0" style="border-collapse: collapse" bordercolor="000000" style="cursor:hand;">' + colorTable + "</table></div>";
    $("#dr_color_" + name).html(colorTable);
    colorTable = ""
}
function dr_onmouseover_color(name, color) {
    var color = "#" + color;
    $("#background_colorId" + name).css("background-color", color);
    $("#input_colorId" + name).val(color)
}
function dr_select_color(name, color) {
    var color = "#" + color;
    $("#dr_color_" + name).html(" ");
    $("#dr_color_value_" + name).attr("style", "background:" + color);
    $("#dr_" + name).val(color)
}
function dr_closeBox(name) {
    $("#dr_color_" + name).html(" ")
};
function dr_null_call(a, b) {
    setTimeout("window.location.reload(true)", 2000)
}

/**
 * POSCMS 通用js文件
 * 成都天睿信息技术有限公司版权所有
 * */
function d_tips(name, status, code) {
    var obj = $("#dr_" + name + "_tips");
    var value = obj.html();
    if (!value) {
        obj.html("")
    }
    if (status) {
        if (code) {
            dr_tips(code, 3, 1)
        }
    } else {
        $("#dr_" + name).focus();
        if (code) {
            dr_tips(code)
        }
    }
    top.$(".page-loading").remove()
}
function check_title(t) {
    var val = $("#dr_title").val();
    var mod = $("#dr_module").val();
    var id = $("#dr_id").val();
    $.get(memberpath + "index.php?s=member&c=api&m=checktitle&title=" + val + "&module=" + mod + "&id=" + id + "&rand=" + Math.random(),
        function(data) {
            if (data) {
                if (t == "1") {
                    dr_tips(data)
                } else {
                    $("#dr_title_tips").html(data)
                }
            } else {
                if (t == "1") {
                    dr_tips('', 3, 1)
                } else {
                    $("#dr_title_tips").html("")
                }
            }
        })
}
function get_keywords(to) {
    var title = $("#dr_title").val();
    if ($("#dr_" + to).val()) {
        return false
    }
    $.get(memberpath + "index.php?s=member&c=api&m=getkeywords&title=" + title + "&rand=" + Math.random(),
        function(data) {
            $("#dr_" + to).val(data);
            $("#dr_" + to).tagsinput('add', data)
        })
}
function d_topinyin(name, from, letter) {
    var val = $("#dr_" + from).val();
    if ($("#dr_" + name).val()) {
        return false
    }
    $.get(memberpath + "index.php?s=member&c=api&m=pinyin&name=" + val + "&rand=" + Math.random(),
        function(data) {
            $("#dr_" + name).val(data);
            if (letter) {
                $("#dr_letter").val(data.substr(0, 1))
            }
        })
}
function d_required(name) {
    if ($("#dr_" + name).val() == "") {
        d_tips(name, false);
        return true
    } else {
        d_tips(name, true);
        return false
    }
}
function d_isemail(name) {
    var val = $("#dr_" + name).val();
    var reg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
    if (reg.test(val)) {
        d_tips(name, true);
        return false
    } else {
        d_tips(name, false);
        return true
    }
}
function d_isurl(name) {
    var val = $("#dr_" + name).val();
    var reg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var Exp = new RegExp(reg);
    if (Exp.test(val) == true) {
        d_tips(name, true);
        return false
    } else {
        d_tips(name, false);
        return true
    }
}
function d_isdomain(name) {
    var val = $("#dr_" + name).val();
    if (val.indexOf("/") > 0) {
        d_tips(name, false);
        return true
    } else {
        d_tips(name, true);
        return false
    }
};