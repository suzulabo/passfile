System.register(["./p-c883b40a.system.js","./p-803059fb.system.js","./p-72a1e20e.system.js","./p-2d5d376b.system.js","./p-f1645a56.system.js"],(function(t){"use strict";var e,i,n,r,s,o,a,c;return{setters:[function(t){e=t.r;i=t.h;n=t.H;r=t.c},function(t){s=t.n},function(t){o=t.A},function(t){a=t.m},function(t){c=t.d}],execute:function(){var u='textarea,input,:host{font-family:sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:"liga";font-feature-settings:"liga"}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}a{color:inherit;text-decoration:none}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:10px;font-size:32px;font-weight:bold;border-bottom:1px solid black}';var l=t("a_header",function(){function t(t){e(this,t)}t.prototype.render=function(){return i(n,null,i("stencil-route-link",{url:s("/"),exact:true},i("span",null,"Passfile")))};return t}());l.style=u;var h=function(t,e){if(t.charAt(0)=="/"&&e.charAt(e.length-1)=="/"){return e.slice(0,e.length-1)+t}return e+t};var f=t("stencil_route_link",function(){function t(t){e(this,t);this.unsubscribe=function(){return};this.activeClass="link-active";this.exact=false;this.strict=true;this.custom="a";this.match=null}t.prototype.componentWillLoad=function(){this.computeMatch()};t.prototype.computeMatch=function(){if(this.location){this.match=a(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict})}};t.prototype.handleClick=function(t){if(c(t)||!this.history||!this.url||!this.root){return}t.preventDefault();return this.history.push(h(this.url,this.root))};t.prototype.render=function(){var t;var e={class:(t={},t[this.activeClass]=this.match!==null,t),onClick:this.handleClick.bind(this)};if(this.anchorClass){e.class[this.anchorClass]=true}if(this.custom==="a"){e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})}return i(this.custom,Object.assign({},e),i("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());o.injectProps(f,["history","location","root"]);var p=t("stencil_route_title",function(){function t(t){e(this,t);this.titleSuffix="";this.pageTitle=""}t.prototype.updateDocumentTitle=function(){var t=this.el;if(t.ownerDocument){t.ownerDocument.title=""+this.pageTitle+(this.titleSuffix||"")}};t.prototype.componentWillLoad=function(){this.updateDocumentTitle()};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{pageTitle:["updateDocumentTitle"]}},enumerable:true,configurable:true});return t}());o.injectProps(p,["titleSuffix"])}}}));