var __awaiter=this&&this.__awaiter||function(e,t,o,n){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function a(e){try{s(n.next(e))}catch(t){i(t)}}function l(e){try{s(n["throw"](e))}catch(t){i(t)}}function s(e){e.done?o(e.value):r(e.value).then(a,l)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(e){return function(t){return s([e,t])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=a[0]&2?r["return"]:a[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;if(r=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;r=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}if(i[2])o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(l){a=[6,l];r=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;for(var n=Array(e),r=0,t=0;t<o;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,r++)n[r]=i[a];return n};System.register(["./p-c883b40a.system.js","./p-2e25f10d.system.js","./p-81871812.system.js"],(function(e){"use strict";var t,o,n,r,i;return{setters:[function(e){t=e.r;o=e.h;n=e.H},function(e){r=e.g},function(e){i=e.h}],execute:function(){var a='textarea,input,:host{font-family:sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:"liga";font-feature-settings:"liga"}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}a{color:inherit;text-decoration:none}:host{display:block;max-width:500px;margin:0 auto;padding:0 5px 50px}.title{margin-top:30px;font-size:28px;font-weight:bold;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.title .label{margin:0 10px}.code-box{margin-top:50px;border:1px solid black;border-radius:5px;padding:10px}.code-box legend{font-size:18px;padding:0 5px}a-file-input{max-width:400px;margin:30px auto 0}.files-box{margin-top:30px}.files-box .file{padding:5px;border-bottom:1px dashed black;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.files-box .file .size{margin:0 5px;font-size:15px;-ms-flex-positive:1;flex-grow:1;white-space:nowrap}.files-box .file:last-of-type{border-bottom-width:0}.files-box .file:hover .name{text-decoration:underline}.total-box{margin-top:30px;border-top:1px solid black;padding-top:10px;text-align:right;font-size:18px}.total-box.hide{display:none}a-button.encrypt{margin:30px auto 0;width:-webkit-min-content;width:-moz-min-content;width:min-content}a-button.encrypt.hide{display:none}.overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(255, 255, 255, 0.95);z-index:999;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.overlay.progress ion-icon{font-size:36px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.overlay.progress .msg{margin-top:5px;-webkit-animation:blink 1s linear infinite;animation:blink 1s linear infinite}.overlay.progress .msg::after{position:absolute;margin-left:2px;content:"..."}.overlay.dark{background:rgba(0, 0, 0, 0.5)}.overlay .download-box{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:white;padding:30px;border-radius:50%}.overlay .download-box a-button.download{font-size:80px}.overlay a-button.close{background-color:white;border-radius:50%;margin-top:30px;font-size:50px}@-webkit-keyframes spin{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}20%{-webkit-transform:rotateX(-180deg) rotateY(0deg);transform:rotateX(-180deg) rotateY(0deg)}40%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}50%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}70%{-webkit-transform:rotateX(0deg) rotateY(-180deg);transform:rotateX(0deg) rotateY(-180deg)}90%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@keyframes spin{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}20%{-webkit-transform:rotateX(-180deg) rotateY(0deg);transform:rotateX(-180deg) rotateY(0deg)}40%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}50%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}70%{-webkit-transform:rotateX(0deg) rotateY(-180deg);transform:rotateX(0deg) rotateY(-180deg)}90%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@-webkit-keyframes blink{25%{color:rgba(0, 0, 0, 0.3)}50%{color:black}}@keyframes blink{25%{color:rgba(0, 0, 0, 0.3)}50%{color:black}}';var l=function(e){if(!e){return}var t=e.split(".");if(t.length<=1){return e}else{return t.slice(0,-1).join(".")}};var s=e("ap_encrypt_form",function(){function e(e){t(this,e);this.app=r();this.files=[]}e.prototype.componentDidUnload=function(){this.clearDownloadURL()};e.prototype.clearDownloadURL=function(){if(this.downloadURL){URL.revokeObjectURL(this.downloadURL);this.downloadURL=null}};e.prototype.addFiles=function(e){var t=__spreadArrays(this.files);for(var o=0;o<e.length;o++){var n=e.item(o);t.push(n)}this.files=t};e.prototype.eyncryptFiles=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;var o=this;return __generator(this,(function(n){switch(n.label){case 0:if(this.showOverlay){return[2]}this.clearDownloadURL();this.showOverlay=true;n.label=1;case 1:n.trys.push([1,3,,4]);return[4,Promise.all([this.app.encryptFiles(this.files,this.publicCode,(function(e,t,n){switch(e){case"read":var r=o.files.indexOf(t);o.overlayState={icon:"document-outline",msg:t.name+" ("+(r+1)+"/"+o.files.length+")"};break;case"encrypt_begin":o.overlayState={icon:"key-outline",msg:"Encrypting"}}})),new Promise((function(e){setTimeout(e,1e3)}))])];case 2:e=n.sent()[0];this.downloadURL=URL.createObjectURL(e);return[3,4];case 3:t=n.sent();this.showOverlay=false;throw t;case 4:return[2]}}))}))};e.prototype.render=function(){var e=this;var t=this.files.reduce((function(e,t){return e+t.size}),0);var r=function(){return e.files.map((function(t){return o("div",{class:"file"},o("span",{class:"name"},t.name),o("span",{class:"size"},"(",i(t.size),")"),o("a-button",{icon:"close",onClick:function(){e.files=e.files.filter((function(e){return e!=t}))}}))}))};var a=function(){var t,n,r;if(!e.showOverlay){return}if(e.downloadURL){return o("div",{class:"overlay dark"},o("a",{class:"download-box",href:e.downloadURL,download:l((t=e.files[0])===null||t===void 0?void 0:t.name)+".passfile"},o("a-button",{class:"download",icon:"download-outline"})),o("a-button",{class:"close",icon:"close-circle-outline",onClick:function(){e.clearDownloadURL();e.showOverlay=false}}))}return o("div",{class:"overlay progress"},o("ion-icon",{name:(n=e.overlayState)===null||n===void 0?void 0:n.icon}),o("span",{class:"msg"},(r=e.overlayState)===null||r===void 0?void 0:r.msg))};return o(n,null,o("div",{class:"title"},o("ion-icon",{name:"key-outline"}),o("span",{class:"label"},"Encryption"),o("ion-icon",{name:"key-outline"})),o("fieldset",{class:"code-box"},o("legend",null,"Public Code"),o("a-input",{placeholder:"Paste Public Code",type:"textarea",pattern:"^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{0,52}$",onInput:function(t){var o;var n=t.target;if(((o=n.value)===null||o===void 0?void 0:o.length)==52){e.publicCode=n.value}else{e.publicCode=null}}})),o("a-file-input",{icon:"documents-outline",label:"Browse files",multiple:true,onSelectFile:function(t){e.addFiles(t.detail)}}),o("div",{class:"files-box"},r()),o("div",{class:{"total-box":true,hide:this.files.length==0}},"Total: ",i(t)),o("a-button",{class:{encrypt:true,hide:this.files.length==0},label:"Encrypt",disabled:!this.publicCode,onClick:function(){void e.eyncryptFiles()}}),a())};return e}());s.style=a}}}));