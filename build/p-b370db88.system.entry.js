System.register(["./p-c883b40a.system.js","./p-803059fb.system.js"],(function(e){"use strict";var n,t,i,o;return{setters:[function(e){n=e.r;t=e.h;i=e.H},function(e){o=e.n}],execute:function(){var l='textarea,input,:host{font-family:sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:"liga";font-feature-settings:"liga"}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}a{color:inherit;text-decoration:none}:host{display:block}.link-box{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.link-box stencil-route-link{margin-top:30px}.link-box a-button{min-width:315px;padding:20px 0;font-size:24px;font-weight:bold;border:1px solid black;border-radius:10px}.link-box a-button .label{margin:0 5px}';var r=e("app_home",function(){function e(e){n(this,e)}e.prototype.render=function(){return t(i,null,t("stencil-route-title",{pageTitle:"Home"}),t("a-header",null),t("div",{class:"link-box"},t("stencil-route-link",{url:o("/gencode/"),exact:true},t("a-button",null,t("ion-icon",{name:"barcode-sharp"}),t("span",{class:"label"},"Code Generation"),t("ion-icon",{name:"barcode-sharp"}))),t("stencil-route-link",{url:o("/encrypt/"),exact:true},t("a-button",null,t("ion-icon",{name:"key-outline"}),t("span",{class:"label"},"Encryption"),t("ion-icon",{name:"key-outline"}))),t("stencil-route-link",{url:o("/decrypt/"),exact:true},t("a-button",null,t("ion-icon",{name:"lock-open"}),t("span",{class:"label"},"Decryption"),t("ion-icon",{name:"lock-open"})))))};return e}());r.style=l}}}));