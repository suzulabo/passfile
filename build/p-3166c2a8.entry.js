import{r as e,h as o,H as t,c as i}from"./p-58418274.js";import{g as a}from"./p-899300dc.js";const n=class{constructor(o){e(this,o),this.app=a()}render(){var e,i;const a=(e,t)=>o("fieldset",{class:{"code-box":!0,public:e,secret:!e,hide:!t}},o("legend",null,e?"Public Code":"Secret Code"),o("div",{class:"inner"},o("span",{class:"code"},t),o("a-button",{icon:"copy-outline",disabled:!navigator.clipboard,onClick:e=>{if(!navigator.clipboard)return;navigator.clipboard.writeText(t);const o=e.target.closest(".code-box").querySelector(".code");o.classList.remove("copied"),isNaN(o.offsetWidth)||o.classList.add("copied")}})));return o(t,null,o("div",{class:"title"},o("ion-icon",{name:"barcode-sharp"}),o("span",{class:"label"},"Code Generation"),o("ion-icon",{name:"barcode-sharp"})),o("a-input",{class:"passphrase",placeholder:"Input Passphrase",type:"password",value:this.passPhrase,onInput:e=>{this.passPhrase=e.target.value,this.codes=null}}),o("a-button",{class:"make",label:"Make",onClick:()=>{this.codes=this.app.generateCodes(this.passPhrase)}}),a(!1,null===(e=this.codes)||void 0===e?void 0:e.secret),a(!0,null===(i=this.codes)||void 0===i?void 0:i.public))}get el(){return i(this)}};n.style='textarea,input,:host{font-family:sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:"liga";font-feature-settings:"liga"}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}a{color:inherit;text-decoration:none}:host{display:block;max-width:500px;margin:0 auto;padding:0 5px}.title{margin-top:30px;font-size:28px;font-weight:bold;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.title .label{margin:0 10px}a-input.passphrase{margin:50px auto 0;max-width:300px;text-align:center}a-button.make{margin:30px auto 0;width:-webkit-min-content;width:-moz-min-content;width:min-content}.code-box{margin-top:30px;border:1px solid black;border-radius:5px;padding:10px}.code-box legend{font-size:18px;padding:5px 10px 0;border-radius:5px}.code-box .inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.code-box .inner .code{word-break:break-all;-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all;margin-right:5px}.code-box .inner a-button{font-size:26px}.code-box.secret{background-color:black;color:white}.code-box.secret legend{background-color:black}.code-box.secret .code::-moz-selection{background-color:rgba(255, 255, 255, 0.996);color:black}.code-box.secret .code::selection{background-color:rgba(255, 255, 255, 0.996);color:black}.code-box.hide{display:none}.copied{-webkit-animation:copied 0.1s 1;animation:copied 0.1s 1}@-webkit-keyframes copied{50%{opacity:0.5}100%{opacity:1}}@keyframes copied{50%{opacity:0.5}100%{opacity:1}}';export{n as ap_gencode_form}