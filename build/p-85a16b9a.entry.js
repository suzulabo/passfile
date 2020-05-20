import{r as t,h as e,H as o}from"./p-58418274.js";import{g as i}from"./p-899300dc.js";import{h as a}from"./p-27e84de4.js";const n=t=>{if(!t)return;const e=t.split(".");return e.length<=1?t:e.slice(0,-1).join(".")},r=class{constructor(e){t(this,e),this.app=i(),this.files=[]}componentDidUnload(){this.clearDownloadURL()}clearDownloadURL(){this.downloadURL&&(URL.revokeObjectURL(this.downloadURL),this.downloadURL=null)}addFiles(t){const e=[...this.files];for(let o=0;o<t.length;o++){const i=t.item(o);e.push(i)}this.files=e}async eyncryptFiles(){if(!this.showOverlay){this.clearDownloadURL(),this.showOverlay=!0;try{const[t]=await Promise.all([this.app.encryptFiles(this.files,this.publicCode,(t,e)=>{switch(t){case"read":const t=this.files.indexOf(e);this.overlayState={icon:"document-outline",msg:`${e.name} (${t+1}/${this.files.length})`};break;case"encrypt_begin":this.overlayState={icon:"key-outline",msg:"Encrypting"}}}),new Promise(t=>{setTimeout(t,1e3)})]);this.downloadURL=URL.createObjectURL(t)}catch(t){throw this.showOverlay=!1,t}}}render(){const t=this.files.reduce((t,e)=>t+e.size,0);return e(o,null,e("div",{class:"title"},e("ion-icon",{name:"key-outline"}),e("span",{class:"label"},"Encryption"),e("ion-icon",{name:"key-outline"})),e("fieldset",{class:"code-box"},e("legend",null,"Public Code"),e("a-input",{placeholder:"Paste Public Code",type:"textarea",pattern:"^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{0,52}$",onInput:t=>{var e;const o=t.target;this.publicCode=52==(null===(e=o.value)||void 0===e?void 0:e.length)?o.value:null}})),e("a-file-input",{icon:"documents-outline",label:"Browse files",multiple:!0,onSelectFile:t=>{this.addFiles(t.detail)}}),e("div",{class:"files-box"},(()=>this.files.map(t=>e("div",{class:"file"},e("span",{class:"name"},t.name),e("span",{class:"size"},"(",a(t.size),")"),e("a-button",{icon:"close",onClick:()=>{this.files=this.files.filter(e=>e!=t)}}))))()),e("div",{class:{"total-box":!0,hide:0==this.files.length}},"Total: ",a(t)),e("a-button",{class:{encrypt:!0,hide:0==this.files.length},label:"Encrypt",disabled:!this.publicCode,onClick:()=>{this.eyncryptFiles()}}),(()=>{var t,o,i;if(this.showOverlay)return this.downloadURL?e("div",{class:"overlay dark"},e("a",{class:"download-box",href:this.downloadURL,download:n(null===(t=this.files[0])||void 0===t?void 0:t.name)+".passfile"},e("a-button",{class:"download",icon:"download-outline"})),e("a-button",{class:"close",icon:"close-circle-outline",onClick:()=>{this.clearDownloadURL(),this.showOverlay=!1}})):e("div",{class:"overlay progress"},e("ion-icon",{name:null===(o=this.overlayState)||void 0===o?void 0:o.icon}),e("span",{class:"msg"},null===(i=this.overlayState)||void 0===i?void 0:i.msg))})())}};r.style='textarea,input,:host{font-family:sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:"liga";font-feature-settings:"liga"}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}a{color:inherit;text-decoration:none}:host{display:block;max-width:500px;margin:0 auto;padding:0 5px 50px}.title{margin-top:30px;font-size:28px;font-weight:bold;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.title .label{margin:0 10px}.code-box{margin-top:50px;border:1px solid black;border-radius:5px;padding:10px}.code-box legend{font-size:18px;padding:0 5px}a-file-input{max-width:400px;margin:30px auto 0}.files-box{margin-top:30px}.files-box .file{padding:5px;border-bottom:1px dashed black;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.files-box .file .size{margin:0 5px;font-size:15px;-ms-flex-positive:1;flex-grow:1;white-space:nowrap}.files-box .file:last-of-type{border-bottom-width:0}.files-box .file:hover .name{text-decoration:underline}.total-box{margin-top:30px;border-top:1px solid black;padding-top:10px;text-align:right;font-size:18px}.total-box.hide{display:none}a-button.encrypt{margin:30px auto 0;width:-webkit-min-content;width:-moz-min-content;width:min-content}a-button.encrypt.hide{display:none}.overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(255, 255, 255, 0.95);z-index:999;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.overlay.progress ion-icon{font-size:36px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.overlay.progress .msg{margin-top:5px;-webkit-animation:blink 1s linear infinite;animation:blink 1s linear infinite}.overlay.progress .msg::after{position:absolute;margin-left:2px;content:"..."}.overlay.dark{background:rgba(0, 0, 0, 0.5)}.overlay .download-box{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:white;padding:30px;border-radius:50%}.overlay .download-box a-button.download{font-size:80px}.overlay a-button.close{background-color:white;border-radius:50%;margin-top:30px;font-size:50px}@-webkit-keyframes spin{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}20%{-webkit-transform:rotateX(-180deg) rotateY(0deg);transform:rotateX(-180deg) rotateY(0deg)}40%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}50%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}70%{-webkit-transform:rotateX(0deg) rotateY(-180deg);transform:rotateX(0deg) rotateY(-180deg)}90%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@keyframes spin{0%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}20%{-webkit-transform:rotateX(-180deg) rotateY(0deg);transform:rotateX(-180deg) rotateY(0deg)}40%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}50%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}70%{-webkit-transform:rotateX(0deg) rotateY(-180deg);transform:rotateX(0deg) rotateY(-180deg)}90%{-webkit-transform:rotateX(0deg) rotateY(0deg);transform:rotateX(0deg) rotateY(0deg)}}@-webkit-keyframes blink{25%{color:rgba(0, 0, 0, 0.3)}50%{color:black}}@keyframes blink{25%{color:rgba(0, 0, 0, 0.3)}50%{color:black}}';export{r as ap_encrypt_form}