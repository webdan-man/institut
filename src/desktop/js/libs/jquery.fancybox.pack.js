!function(a,b,c,d){var e=c("html"),f=c(a),g=c(b),h=c.fancybox=function(){h.open.apply(this,arguments)},i=navigator.userAgent.match(/msie/i),j=null,k=b.createTouch!==d,l=function(a){return a&&a.hasOwnProperty&&a instanceof c},m=function(a){return a&&"string"===c.type(a)},n=function(a){return m(a)&&0<a.indexOf("%")},o=function(a,b){var c=parseInt(a,10)||0;return b&&n(a)&&(c*=h.getViewport()[b]/100),Math.ceil(c)},p=function(a,b){return o(a,b)+"px"};c.extend(h,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!k,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(i?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:c.noop,beforeLoad:c.noop,afterLoad:c.noop,beforeShow:c.noop,afterShow:c.noop,beforeChange:c.noop,beforeClose:c.noop,afterClose:c.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,b){if(a&&(c.isPlainObject(b)||(b={}),!1!==h.close(!0)))return c.isArray(a)||(a=l(a)?c(a).get():[a]),c.each(a,function(e,f){var g,i,j,k,n,o={};"object"===c.type(f)&&(f.nodeType&&(f=c(f)),l(f)?(o={href:f.data("fancybox-href")||f.attr("href"),title:f.data("fancybox-title")||f.attr("title"),isDom:!0,element:f},c.metadata&&c.extend(!0,o,f.metadata())):o=f),g=b.href||o.href||(m(f)?f:null),i=b.title!==d?b.title:o.title||"",k=(j=b.content||o.content)?"html":b.type||o.type,!k&&o.isDom&&(k=f.data("fancybox-type"),k||(k=(k=f.prop("class").match(/fancybox\.(\w+)/))?k[1]:null)),m(g)&&(k||(h.isImage(g)?k="image":h.isSWF(g)?k="swf":"#"===g.charAt(0)?k="inline":m(f)&&(k="html",j=f)),"ajax"===k&&(n=g.split(/\s+/,2),g=n.shift(),n=n.shift())),j||("inline"===k?g?j=c(m(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):o.isDom&&(j=f):"html"===k?j=g:!k&&!g&&o.isDom&&(k="inline",j=f)),c.extend(o,{href:g,type:k,content:j,title:i,selector:n}),a[e]=o}),h.opts=c.extend(!0,{},h.defaults,b),b.keys!==d&&(h.opts.keys=!!b.keys&&c.extend({},h.defaults.keys,b.keys)),h.group=a,h._start(h.opts.index)},cancel:function(){var a=h.coming;a&&!1!==h.trigger("onCancel")&&(h.hideLoading(),h.ajaxLoad&&h.ajaxLoad.abort(),h.ajaxLoad=null,h.imgPreload&&(h.imgPreload.onload=h.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),h.coming=null,h.current||h._afterZoomOut(a))},close:function(a){h.cancel(),!1!==h.trigger("beforeClose")&&(h.unbindEvents(),h.isActive&&(h.isOpen&&!0!==a?(h.isOpen=h.isOpened=!1,h.isClosing=!0,c(".fancybox-item, .fancybox-nav").remove(),h.wrap.stop(!0,!0).removeClass("fancybox-opened"),h.transitions[h.current.closeMethod]()):(c(".fancybox-wrap").stop(!0).trigger("onReset").remove(),h._afterZoomOut())))},play:function(a){var b=function(){clearTimeout(h.player.timer)},c=function(){b(),h.current&&h.player.isActive&&(h.player.timer=setTimeout(h.next,h.current.playSpeed))},d=function(){b(),g.unbind(".player"),h.player.isActive=!1,h.trigger("onPlayEnd")};!0===a||!h.player.isActive&&!1!==a?h.current&&(h.current.loop||h.current.index<h.group.length-1)&&(h.player.isActive=!0,g.bind({"onCancel.player beforeClose.player":d,"onUpdate.player":c,"beforeLoad.player":b}),c(),h.trigger("onPlayStart")):d()},next:function(a){var b=h.current;b&&(m(a)||(a=b.direction.next),h.jumpto(b.index+1,a,"next"))},prev:function(a){var b=h.current;b&&(m(a)||(a=b.direction.prev),h.jumpto(b.index-1,a,"prev"))},jumpto:function(a,b,c){var e=h.current;e&&(a=o(a),h.direction=b||e.direction[a>=e.index?"next":"prev"],h.router=c||"jumpto",e.loop&&(0>a&&(a=e.group.length+a%e.group.length),a%=e.group.length),e.group[a]!==d&&(h.cancel(),h._start(a)))},reposition:function(a,b){var d,e=h.current,f=e?e.wrap:null;f&&(d=h._getPosition(b),a&&"scroll"===a.type?(delete d.position,f.stop(!0,!0).animate(d,200)):(f.css(d),e.pos=c.extend({},e.dim,d)))},update:function(a){var b=a&&a.type,c=!b||"orientationchange"===b;c&&(clearTimeout(j),j=null),h.isOpen&&!j&&(j=setTimeout(function(){var d=h.current;d&&!h.isClosing&&(h.wrap.removeClass("fancybox-tmp"),(c||"load"===b||"resize"===b&&d.autoResize)&&h._setDimension(),"scroll"===b&&d.canShrink||h.reposition(a),h.trigger("onUpdate"),j=null)},c&&!k?0:300))},toggle:function(a){h.isOpen&&(h.current.fitToView="boolean"===c.type(a)?a:!h.current.fitToView,k&&(h.wrap.removeAttr("style").addClass("fancybox-tmp"),h.trigger("onUpdate")),h.update())},hideLoading:function(){g.unbind(".loading"),c("#fancybox-loading").remove()},showLoading:function(){var a,b;h.hideLoading(),a=c('<div id="fancybox-loading"><div></div></div>').click(h.cancel).appendTo("body"),g.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),h.cancel())}),h.defaults.fixed||(b=h.getViewport(),a.css({position:"absolute",top:.5*b.h+b.y,left:.5*b.w+b.x}))},getViewport:function(){var b=h.current&&h.current.locked||!1,c={x:f.scrollLeft(),y:f.scrollTop()};return b?(c.w=b[0].clientWidth,c.h=b[0].clientHeight):(c.w=k&&a.innerWidth?a.innerWidth:f.width(),c.h=k&&a.innerHeight?a.innerHeight:f.height()),c},unbindEvents:function(){h.wrap&&l(h.wrap)&&h.wrap.unbind(".fb"),g.unbind(".fb"),f.unbind(".fb")},bindEvents:function(){var a,b=h.current;b&&(f.bind("orientationchange.fb"+(k?"":" resize.fb")+(b.autoCenter&&!b.locked?" scroll.fb":""),h.update),(a=b.keys)&&g.bind("keydown.fb",function(e){var f=e.which||e.keyCode,g=e.target||e.srcElement;return(27!==f||!h.coming)&&void(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&(!g||!g.type&&!c(g).is("[contenteditable]"))&&c.each(a,function(a,g){return 1<b.group.length&&g[f]!==d?(h[a](g[f]),e.preventDefault(),!1):-1<c.inArray(f,g)?(h[a](),e.preventDefault(),!1):void 0}))}),c.fn.mousewheel&&b.mouseWheel&&h.wrap.bind("mousewheel.fb",function(a,d,e,f){for(var g=c(a.target||null),i=!1;g.length&&!i&&!g.is(".fancybox-skin")&&!g.is(".fancybox-wrap");)i=g[0]&&!(g[0].style.overflow&&"hidden"===g[0].style.overflow)&&(g[0].clientWidth&&g[0].scrollWidth>g[0].clientWidth||g[0].clientHeight&&g[0].scrollHeight>g[0].clientHeight),g=c(g).parent();0!==d&&!i&&1<h.group.length&&!b.canShrink&&(0<f||0<e?h.prev(0<f?"down":"left"):(0>f||0>e)&&h.next(0>f?"up":"right"),a.preventDefault())}))},trigger:function(a,b){var d,e=b||h.coming||h.current;if(e){if(c.isFunction(e[a])&&(d=e[a].apply(e,Array.prototype.slice.call(arguments,1))),!1===d)return!1;e.helpers&&c.each(e.helpers,function(b,d){d&&h.helpers[b]&&c.isFunction(h.helpers[b][a])&&h.helpers[b][a](c.extend(!0,{},h.helpers[b].defaults,d),e)}),g.trigger(a)}},isImage:function(a){return m(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return m(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var b,d,e={};if(a=o(a),b=h.group[a]||null,!b)return!1;if(e=c.extend(!0,{},h.opts,b),b=e.margin,d=e.padding,"number"===c.type(b)&&(e.margin=[b,b,b,b]),"number"===c.type(d)&&(e.padding=[d,d,d,d]),e.modal&&c.extend(!0,e,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),e.autoSize&&(e.autoWidth=e.autoHeight=!0),"auto"===e.width&&(e.autoWidth=!0),"auto"===e.height&&(e.autoHeight=!0),e.group=h.group,e.index=a,h.coming=e,!1===h.trigger("beforeLoad"))h.coming=null;else{if(d=e.type,b=e.href,!d)return h.coming=null,!(!h.current||!h.router||"jumpto"===h.router)&&(h.current.index=a,h[h.router](h.direction));if(h.isActive=!0,"image"!==d&&"swf"!==d||(e.autoHeight=e.autoWidth=!1,e.scrolling="visible"),"image"===d&&(e.aspectRatio=!0),"iframe"===d&&k&&(e.scrolling="scroll"),e.wrap=c(e.tpl.wrap).addClass("fancybox-"+(k?"mobile":"desktop")+" fancybox-type-"+d+" fancybox-tmp "+e.wrapCSS).appendTo(e.parent||"body"),c.extend(e,{skin:c(".fancybox-skin",e.wrap),outer:c(".fancybox-outer",e.wrap),inner:c(".fancybox-inner",e.wrap)}),c.each(["Top","Right","Bottom","Left"],function(a,b){e.skin.css("padding"+b,p(e.padding[a]))}),h.trigger("onReady"),"inline"===d||"html"===d){if(!e.content||!e.content.length)return h._error("content")}else if(!b)return h._error("href");"image"===d?h._loadImage():"ajax"===d?h._loadAjax():"iframe"===d?h._loadIframe():h._afterLoad()}},_error:function(a){c.extend(h.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:h.coming.tpl.error}),h._afterLoad()},_loadImage:function(){var a=h.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null,h.coming.width=this.width/h.opts.pixelRatio,h.coming.height=this.height/h.opts.pixelRatio,h._afterLoad()},a.onerror=function(){this.onload=this.onerror=null,h._error("image")},a.src=h.coming.href,!0!==a.complete&&h.showLoading()},_loadAjax:function(){var a=h.coming;h.showLoading(),h.ajaxLoad=c.ajax(c.extend({},a.ajax,{url:a.href,error:function(a,b){h.coming&&"abort"!==b?h._error("ajax",a):h.hideLoading()},success:function(b,c){"success"===c&&(a.content=b,h._afterLoad())}}))},_loadIframe:function(){var a=h.coming,b=c(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",k?"auto":a.iframe.scrolling).attr("src",a.href);c(a.wrap).bind("onReset",function(){try{c(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}}),a.iframe.preload&&(h.showLoading(),b.one("load",function(){c(this).data("ready",1),k||c(this).bind("load.fb",h.update),c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),h._afterLoad()})),a.content=b.appendTo(a.inner),a.iframe.preload||h._afterLoad()},_preloadImages:function(){var a,b,c=h.group,d=h.current,e=c.length,f=d.preload?Math.min(d.preload,e-1):0;for(b=1;b<=f;b+=1)a=c[(d.index+b)%e],"image"===a.type&&a.href&&((new Image).src=a.href)},_afterLoad:function(){var a,b,d,e,f,g=h.coming,i=h.current;if(h.hideLoading(),g&&!1!==h.isActive)if(!1===h.trigger("afterLoad",g,i))g.wrap.stop(!0).trigger("onReset").remove(),h.coming=null;else{switch(i&&(h.trigger("beforeChange",i),i.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),h.unbindEvents(),a=g.content,b=g.type,d=g.scrolling,c.extend(h,{wrap:g.wrap,skin:g.skin,outer:g.outer,inner:g.inner,current:g,previous:i}),e=g.href,b){case"inline":case"ajax":case"html":g.selector?a=c("<div>").html(a).find(g.selector):l(a)&&(a.data("fancybox-placeholder")||a.data("fancybox-placeholder",c('<div class="fancybox-placeholder"></div>').insertAfter(a).hide()),a=a.show().detach(),g.wrap.bind("onReset",function(){c(this).find(a).length&&a.hide().replaceAll(a.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":a=g.tpl.image.replace("{href}",e);break;case"swf":a='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+e+'"></param>',f="",c.each(g.swf,function(b,c){a+='<param name="'+b+'" value="'+c+'"></param>',f+=" "+b+'="'+c+'"'}),a+='<embed src="'+e+'" type="application/x-shockwave-flash" width="100%" height="100%"'+f+"></embed></object>"}(!l(a)||!a.parent().is(g.inner))&&g.inner.append(a),h.trigger("beforeShow"),g.inner.css("overflow","yes"===d?"scroll":"no"===d?"hidden":d),h._setDimension(),h.reposition(),h.isOpen=!1,h.coming=null,h.bindEvents(),h.isOpened?i.prevMethod&&h.transitions[i.prevMethod]():c(".fancybox-wrap").not(g.wrap).stop(!0).trigger("onReset").remove(),h.transitions[h.isOpened?g.nextMethod:g.openMethod](),h._preloadImages()}},_setDimension:function(){var a,b,d,e,f,g,i,j,k,l=h.getViewport(),m=0,q=!1,r=!1,q=h.wrap,s=h.skin,t=h.inner,u=h.current,r=u.width,v=u.height,w=u.minWidth,x=u.minHeight,y=u.maxWidth,z=u.maxHeight,A=u.scrolling,B=u.scrollOutside?u.scrollbarWidth:0,C=u.margin,D=o(C[1]+C[3]),E=o(C[0]+C[2]);if(q.add(s).add(t).width("auto").height("auto").removeClass("fancybox-tmp"),C=o(s.outerWidth(!0)-s.width()),a=o(s.outerHeight(!0)-s.height()),b=D+C,d=E+a,e=n(r)?(l.w-b)*o(r)/100:r,f=n(v)?(l.h-d)*o(v)/100:v,"iframe"===u.type){if(k=u.content,u.autoHeight&&1===k.data("ready"))try{k[0].contentWindow.document.location&&(t.width(e).height(9999),g=k.contents().find("body"),B&&g.css("overflow-x","hidden"),f=g.outerHeight(!0))}catch(F){}}else(u.autoWidth||u.autoHeight)&&(t.addClass("fancybox-tmp"),u.autoWidth||t.width(e),u.autoHeight||t.height(f),u.autoWidth&&(e=t.width()),u.autoHeight&&(f=t.height()),t.removeClass("fancybox-tmp"));if(r=o(e),v=o(f),j=e/f,w=o(n(w)?o(w,"w")-b:w),y=o(n(y)?o(y,"w")-b:y),x=o(n(x)?o(x,"h")-d:x),z=o(n(z)?o(z,"h")-d:z),g=y,i=z,u.fitToView&&(y=Math.min(l.w-b,y),z=Math.min(l.h-d,z)),b=l.w-D,E=l.h-E,u.aspectRatio?(r>y&&(r=y,v=o(r/j)),v>z&&(v=z,r=o(v*j)),r<w&&(r=w,v=o(r/j)),v<x&&(v=x,r=o(v*j))):(r=Math.max(w,Math.min(r,y)),u.autoHeight&&"iframe"!==u.type&&(t.width(r),v=t.height()),v=Math.max(x,Math.min(v,z))),u.fitToView)if(t.width(r).height(v),q.width(r+C),l=q.width(),D=q.height(),u.aspectRatio)for(;(l>b||D>E)&&r>w&&v>x&&!(19<m++);)v=Math.max(x,Math.min(z,v-10)),r=o(v*j),r<w&&(r=w,v=o(r/j)),r>y&&(r=y,v=o(r/j)),t.width(r).height(v),q.width(r+C),l=q.width(),D=q.height();else r=Math.max(w,Math.min(r,r-(l-b))),v=Math.max(x,Math.min(v,v-(D-E)));B&&"auto"===A&&v<f&&r+C+B<b&&(r+=B),t.width(r).height(v),q.width(r+C),l=q.width(),D=q.height(),q=(l>b||D>E)&&r>w&&v>x,r=u.aspectRatio?r<g&&v<i&&r<e&&v<f:(r<g||v<i)&&(r<e||v<f),c.extend(u,{dim:{width:p(l),height:p(D)},origWidth:e,origHeight:f,canShrink:q,canExpand:r,wPadding:C,hPadding:a,wrapSpace:D-s.outerHeight(!0),skinSpace:s.height()-v}),!k&&u.autoHeight&&v>x&&v<z&&!r&&t.height("auto")},_getPosition:function(a){var b=h.current,c=h.getViewport(),d=b.margin,e=h.wrap.width()+d[1]+d[3],f=h.wrap.height()+d[0]+d[2],d={position:"absolute",top:d[0],left:d[3]};return b.autoCenter&&b.fixed&&!a&&f<=c.h&&e<=c.w?d.position="fixed":b.locked||(d.top+=c.y,d.left+=c.x),d.top=p(Math.max(d.top,d.top+(c.h-f)*b.topRatio)),d.left=p(Math.max(d.left,d.left+(c.w-e)*b.leftRatio)),d},_afterZoomIn:function(){var a=h.current;a&&(h.isOpen=h.isOpened=!0,h.wrap.css("overflow","visible").addClass("fancybox-opened"),h.update(),(a.closeClick||a.nextClick&&1<h.group.length)&&h.inner.css("cursor","pointer").bind("click.fb",function(b){!c(b.target).is("a")&&!c(b.target).parent().is("a")&&(b.preventDefault(),h[a.closeClick?"close":"next"]())}),a.closeBtn&&c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb",function(a){a.preventDefault(),h.close()}),a.arrows&&1<h.group.length&&((a.loop||0<a.index)&&c(a.tpl.prev).appendTo(h.outer).bind("click.fb",h.prev),(a.loop||a.index<h.group.length-1)&&c(a.tpl.next).appendTo(h.outer).bind("click.fb",h.next)),h.trigger("afterShow"),a.loop||a.index!==a.group.length-1?h.opts.autoPlay&&!h.player.isActive&&(h.opts.autoPlay=!1,h.play()):h.play(!1))},_afterZoomOut:function(a){a=a||h.current,c(".fancybox-wrap").trigger("onReset").remove(),c.extend(h,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),h.trigger("afterClose",a)}}),h.transitions={getOrigPosition:function(){var a=h.current,b=a.element,c=a.orig,d={},e=50,f=50,g=a.hPadding,i=a.wPadding,j=h.getViewport();return!c&&a.isDom&&b.is(":visible")&&(c=b.find("img:first"),c.length||(c=b)),l(c)?(d=c.offset(),c.is("img")&&(e=c.outerWidth(),f=c.outerHeight())):(d.top=j.y+(j.h-f)*a.topRatio,d.left=j.x+(j.w-e)*a.leftRatio),("fixed"===h.wrap.css("position")||a.locked)&&(d.top-=j.y,d.left-=j.x),d={top:p(d.top-g*a.topRatio),left:p(d.left-i*a.leftRatio),width:p(e+i),height:p(f+g)}},step:function(a,b){var c,d,e=b.prop;d=h.current;var f=d.wrapSpace,g=d.skinSpace;"width"!==e&&"height"!==e||(c=b.end===b.start?1:(a-b.start)/(b.end-b.start),h.isClosing&&(c=1-c),d="width"===e?d.wPadding:d.hPadding,d=a-d,h.skin[e](o("width"===e?d:d-f*c)),h.inner[e](o("width"===e?d:d-f*c-g*c)))},zoomIn:function(){var a=h.current,b=a.pos,d=a.openEffect,e="elastic"===d,f=c.extend({opacity:1},b);delete f.position,e?(b=this.getOrigPosition(),a.openOpacity&&(b.opacity=.1)):"fade"===d&&(b.opacity=.1),h.wrap.css(b).animate(f,{duration:"none"===d?0:a.openSpeed,easing:a.openEasing,step:e?this.step:null,complete:h._afterZoomIn})},zoomOut:function(){var a=h.current,b=a.closeEffect,c="elastic"===b,d={opacity:.1};c&&(d=this.getOrigPosition(),a.closeOpacity&&(d.opacity=.1)),h.wrap.animate(d,{duration:"none"===b?0:a.closeSpeed,easing:a.closeEasing,step:c?this.step:null,complete:h._afterZoomOut})},changeIn:function(){var a,b=h.current,c=b.nextEffect,d=b.pos,e={opacity:1},f=h.direction;d.opacity=.1,"elastic"===c&&(a="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(d[a]=p(o(d[a])-200),e[a]="+=200px"):(d[a]=p(o(d[a])+200),e[a]="-=200px")),"none"===c?h._afterZoomIn():h.wrap.css(d).animate(e,{duration:b.nextSpeed,easing:b.nextEasing,complete:h._afterZoomIn})},changeOut:function(){var a=h.previous,b=a.prevEffect,d={opacity:.1},e=h.direction;"elastic"===b&&(d["down"===e||"up"===e?"top":"left"]=("up"===e||"left"===e?"-":"+")+"=200px"),a.wrap.animate(d,{duration:"none"===b?0:a.prevSpeed,easing:a.prevEasing,complete:function(){c(this).trigger("onReset").remove()}})}},h.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!k,fixed:!0},overlay:null,fixed:!1,el:c("html"),create:function(a){a=c.extend({},this.defaults,a),this.overlay&&this.close(),this.overlay=c('<div class="fancybox-overlay"></div>').appendTo(h.coming?h.coming.parent:a.parent),this.fixed=!1,a.fixed&&h.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var b=this;a=c.extend({},this.defaults,a),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a),this.fixed||(f.bind("resize.overlay",c.proxy(this.update,this)),this.update()),a.closeClick&&this.overlay.bind("click.overlay",function(a){if(c(a.target).hasClass("fancybox-overlay"))return h.isActive?h.close():b.close(),!1}),this.overlay.css(a.css).show()},close:function(){var a,b;f.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(c(".fancybox-margin").removeClass("fancybox-margin"),a=f.scrollTop(),b=f.scrollLeft(),this.el.removeClass("fancybox-lock"),f.scrollTop(a).scrollLeft(b)),c(".fancybox-overlay").remove().hide(),c.extend(this,{overlay:null,fixed:!1})},update:function(){var a,c="100%";this.overlay.width(c).height("100%"),i?(a=Math.max(b.documentElement.offsetWidth,b.body.offsetWidth),g.width()>a&&(c=g.width())):g.width()>f.width()&&(c=g.width()),this.overlay.width(c).height(g.height())},onReady:function(a,b){var d=this.overlay;c(".fancybox-overlay").stop(!0,!0),d||this.create(a),a.locked&&this.fixed&&b.fixed&&(d||(this.margin=g.height()>f.height()&&c("html").css("margin-right").replace("px","")),b.locked=this.overlay.append(b.wrap),b.fixed=!1),!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var d,e;b.locked&&(!1!==this.margin&&(c("*").filter(function(){return"fixed"===c(this).css("position")&&!c(this).hasClass("fancybox-overlay")&&!c(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),d=f.scrollTop(),e=f.scrollLeft(),this.el.addClass("fancybox-lock"),f.scrollTop(d).scrollLeft(e)),this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!h.coming&&this.overlay.fadeOut(a.speedOut,c.proxy(this.close,this))}},h.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var b=h.current,d=b.title,e=a.type;if(c.isFunction(d)&&(d=d.call(b.element,b)),m(d)&&""!==c.trim(d)){switch(b=c('<div class="fancybox-title fancybox-title-'+e+'-wrap">'+d+"</div>"),e){case"inside":e=h.skin;break;case"outside":e=h.wrap;break;case"over":e=h.inner;break;default:e=h.skin,b.appendTo("body"),i&&b.width(b.width()),b.wrapInner('<span class="child"></span>'),h.current.margin[2]+=Math.abs(o(b.css("margin-bottom")))}b["top"===a.position?"prependTo":"appendTo"](e)}}},c.fn.fancybox=function(a){var b,d=c(this),e=this.selector||"",f=function(f){var g,i,j=c(this).blur(),k=b;!f.ctrlKey&&!f.altKey&&!f.shiftKey&&!f.metaKey&&!j.is(".fancybox-wrap")&&(g=a.groupAttr||"data-fancybox-group",i=j.attr(g),i||(g="rel",i=j.get(0)[g]),i&&""!==i&&"nofollow"!==i&&(j=e.length?c(e):d,j=j.filter("["+g+'="'+i+'"]'),k=j.index(this)),a.index=k,!1!==h.open(j,a)&&f.preventDefault())};return a=a||{},b=a.index||0,e&&!1!==a.live?g.undelegate(e,"click.fb-start").delegate(e+":not('.fancybox-item, .fancybox-nav')","click.fb-start",f):d.unbind("click.fb-start").bind("click.fb-start",f),this.filter("[data-fancybox-start=1]").trigger("click"),this},g.ready(function(){var b,f;if(c.scrollbarWidth===d&&(c.scrollbarWidth=function(){var a=c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();return a.remove(),b}),c.support.fixedPosition===d){b=c.support,f=c('<div style="position:fixed;top:20px;"></div>').appendTo("body");var g=20===f[0].offsetTop||15===f[0].offsetTop;f.remove(),b.fixedPosition=g}c.extend(h.defaults,{scrollbarWidth:c.scrollbarWidth(),fixed:c.support.fixedPosition,parent:c("body")}),b=c(a).width(),e.addClass("fancybox-lock-test"),f=c(a).width(),e.removeClass("fancybox-lock-test"),c("<style type='text/css'>.fancybox-margin{margin-right:"+(f-b)+"px;}</style>").appendTo("head")})}(window,document,jQuery);