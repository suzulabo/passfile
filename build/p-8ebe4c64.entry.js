import{r as t,h as e,H as o}from"./p-58418274.js";import{g as i}from"./p-899300dc.js";import{h as r}from"./p-27e84de4.js";const a=class{constructor(e){t(this,e),this.app=i()}derivePublicCode(){this.decryptedFiles=null,this.publicCode=this.secretCode?this.app.derivePublicCode(this.secretCode,this.passPhrase):null}async decryptFile(){if(this.filePublicCode&&this.filePublicCode==this.publicCode){this.overlayState={icon:"document-outline",msg:"Reading"};try{[this.decryptedFiles]=await Promise.all([this.app.decryptFile(this.file,this.secretCode,this.passPhrase,t=>{"decrypt_begin"==t&&(this.overlayState={icon:"lock-open-outline",msg:"Decrypting"})}),new Promise(t=>{setTimeout(t,1e3)})])}finally{this.overlayState=null}}}render(){var t;const i=this.file&&!this.filePublicCode;return e(o,null,e("div",{class:"title"},e("ion-icon",{name:"lock-open"}),e("span",{class:"label"},"Decryption"),e("ion-icon",{name:"lock-open"})),e("fieldset",{class:"code-box"},e("legend",null,"Secret Code"),e("a-input",{placeholder:"Paste Secret Code",type:"textarea",pattern:"^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{0,52}$",onInput:t=>{var e;const o=t.target;this.secretCode=52==(null===(e=o.value)||void 0===e?void 0:e.length)?o.value:null,this.derivePublicCode()}})),e("a-input",{class:"passphrase",placeholder:"Input Passphrase",type:"password",value:this.passPhrase,onInput:t=>{this.passPhrase=t.target.value,this.derivePublicCode()}}),e("a-file-input",{class:{error:i},icon:"document-outline",label:(null===(t=this.file)||void 0===t?void 0:t.name)||"Browse passfile",onSelectFile:async t=>{const e=t.detail[0];e&&(this.filePublicCode=await this.app.checkHeader(e),this.file=e,this.decryptedFiles=null)}}),e("a-button",{class:{decrypt:!0,hide:!this.file||!!this.decryptedFiles},label:"Decrypt",disabled:!this.filePublicCode||this.filePublicCode!=this.publicCode,onClick:()=>{this.decryptFile()}}),e("div",{class:"files-box"},(()=>{if(this.decryptedFiles)return this.decryptedFiles.map(t=>e("a-download-link",{blob:new File([t.data],t.filename),filename:t.filename},e("div",{class:"file"},e("span",{class:"name"},t.filename),e("span",{class:"size"},"(",r(t.data.byteLength),")"),e("a-button",{icon:"download-outline"}))))})()),(()=>{var t,o;if(this.overlayState)return e("div",{class:"overlay progress"},e("ion-icon",{name:null===(t=this.overlayState)||void 0===t?void 0:t.icon}),e("span",{class:"msg"},null===(o=this.overlayState)||void 0===o?void 0:o.msg))})())}};a.style='textarea,input,:host{font-family:sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:"liga";font-feature-settings:"liga"}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}a{color:inherit;text-decoration:none}:host{display:block;max-width:500px;margin:0 auto;padding:0 5px 50px}.title{margin-top:30px;font-size:28px;font-weight:bold;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.title .label{margin:0 10px}.code-box{margin-top:50px;border:none;border-radius:5px;padding:10px;color:white;background-color:black}.code-box legend{border-radius:5px;background-color:black;font-size:18px;padding:5px 10px 0}.code-box a-input{--placeholder-color:rgba(255, 255, 255, 0.9)}a-input.passphrase{margin:30px auto 0;max-width:300px;text-align:center}a-file-input{max-width:400px;margin:30px auto 0}a-file-input.error{--label-color:red}a-button.decrypt{margin:30px auto 0;width:-webkit-min-content;width:-moz-min-content;width:min-content}a-button.decrypt.hide{display:none}a-button.decrypt:not([disabled]){-webkit-animation:0.3s spinX linear 1;animation:0.3s spinX linear 1}.files-box{margin-top:30px}.files-box .file{padding:10px;border:1px solid black;border-radius:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:10px}.files-box .file .size{margin:0 5px;font-size:15px;white-space:nowrap;-ms-flex-positive:1;flex-grow:1}.files-box .file:hover .name{text-decoration:underline}.overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(255, 255, 255, 0.95);z-index:999;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.overlay.progress ion-icon{font-size:36px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.overlay.progress .msg{margin-top:5px;-webkit-animation:blink 1s linear infinite;animation:blink 1s linear infinite}.overlay.progress .msg::after{position:absolute;margin-left:2px;content:"..."}@-webkit-keyframes spin{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}20%{-webkit-transform:rotateX(-180deg) rotateY(0deg);transform:rotateX(-180deg) rotateY(0deg)}40%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}50%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}70%{-webkit-transform:rotateX(0deg) rotateY(-180deg);transform:rotateX(0deg) rotateY(-180deg)}90%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@keyframes spin{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}20%{-webkit-transform:rotateX(-180deg) rotateY(0deg);transform:rotateX(-180deg) rotateY(0deg)}40%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}50%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}70%{-webkit-transform:rotateX(0deg) rotateY(-180deg);transform:rotateX(0deg) rotateY(-180deg)}90%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@-webkit-keyframes blink{25%{color:rgba(0, 0, 0, 0.3)}50%{color:black}}@keyframes blink{25%{color:rgba(0, 0, 0, 0.3)}50%{color:black}}@-webkit-keyframes spinX{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}50%{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes spinX{0%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}50%{-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}';export{a as ap_decrypt_form}