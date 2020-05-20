System.register(["./p-c883b40a.system.js","./p-a0a1f5f7.system.js"],(function(e){"use strict";var o,t,i,n,r,s,a;return{setters:[function(e){o=e.r;t=e.h;i=e.H;n=e.c},function(e){r=e.i;s=e.g;a=e.a}],execute:function(){var c='textarea,input,:host{font-family:sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:"liga";font-feature-settings:"liga"}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}a{color:inherit;text-decoration:none}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;font-size:20px}:host(.label){border-radius:5px;border:2px solid black;padding:10px 20px}:host([disabled]){opacity:0.5;cursor:default}:host(:active:not([disabled])){position:relative;top:1px;left:1px}';var l=e("a_button",function(){function e(e){o(this,e)}e.prototype.render=function(){if(this.icon){return t(i,{class:"icon"},t("ion-icon",{name:this.icon}))}return t(i,{class:"label"},this.label,t("slot",null))};return e}());l.style=c;var f=function(e){if(e&&typeof document!=="undefined"){var o=document.createElement("div");o.innerHTML=e;for(var t=o.childNodes.length-1;t>=0;t--){if(o.childNodes[t].nodeName.toLowerCase()!=="svg"){o.removeChild(o.childNodes[t])}}var i=o.firstElementChild;if(i&&i.nodeName.toLowerCase()==="svg"){var n=i.getAttribute("class")||"";i.setAttribute("class",(n+" s-ion-icon").trim());if(u(i)){return o.innerHTML}}}return""};var u=function(e){if(e.nodeType===1){if(e.nodeName.toLowerCase()==="script"){return false}for(var o=0;o<e.attributes.length;o++){var t=e.attributes[o].value;if(r(t)&&t.toLowerCase().indexOf("on")===0){return false}}for(var o=0;o<e.childNodes.length;o++){if(!u(e.childNodes[o])){return false}}}return true};var d=new Map;var h=new Map;var b=function(e){var o=h.get(e);if(!o){if(typeof fetch!=="undefined"){o=fetch(e).then((function(o){if(o.ok){return o.text().then((function(o){d.set(e,f(o))}))}d.set(e,"")}));h.set(e,o)}else{d.set(e,"");return Promise.resolve()}}return o};var p=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";var v=e("ion_icon",function(){function e(e){o(this,e);this.isVisible=false;this.mode=m();this.lazy=false}e.prototype.connectedCallback=function(){var e=this;this.waitUntilVisible(this.el,"50px",(function(){e.isVisible=true;e.loadIcon()}))};e.prototype.disconnectedCallback=function(){if(this.io){this.io.disconnect();this.io=undefined}};e.prototype.waitUntilVisible=function(e,o,t){var i=this;if(this.lazy&&typeof window!=="undefined"&&window.IntersectionObserver){var n=this.io=new window.IntersectionObserver((function(e){if(e[0].isIntersecting){n.disconnect();i.io=undefined;t()}}),{rootMargin:o});n.observe(e)}else{t()}};e.prototype.loadIcon=function(){var e=this;if(this.isVisible){var o=s(this);if(o){if(d.has(o)){this.svgContent=d.get(o)}else{b(o).then((function(){return e.svgContent=d.get(o)}))}}}if(!this.ariaLabel){var t=a(this.name,this.icon,this.mode,this.ios,this.md);if(t){this.ariaLabel=t.replace(/\-/g," ")}}};e.prototype.render=function(){var e,o;var n=this.mode||"md";var r=this.flipRtl||this.ariaLabel&&(this.ariaLabel.indexOf("arrow")>-1||this.ariaLabel.indexOf("chevron")>-1)&&this.flipRtl!==false;return t(i,{role:"img",class:Object.assign(Object.assign((e={},e[n]=true,e),g(this.color)),(o={},o["icon-"+this.size]=!!this.size,o["flip-rtl"]=!!r&&this.el.ownerDocument.dir==="rtl",o))},this.svgContent?t("div",{class:"icon-inner",innerHTML:this.svgContent}):t("div",{class:"icon-inner"}))};Object.defineProperty(e,"assetsDirs",{get:function(){return["svg"]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:true,configurable:true});return e}());var m=function(){return typeof document!=="undefined"&&document.documentElement.getAttribute("mode")||"md"};var g=function(e){var o;return e?(o={"ion-color":true},o["ion-color-"+e]=true,o):null};v.style=p}}}));