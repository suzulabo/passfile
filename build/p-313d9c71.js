import{g as n}from"./p-58418274.js";let r;const i=n=>{let r=s(n.src);if(r)return r;if(r=t(n.name,n.icon,n.mode,n.ios,n.md),r)return e(r);if(n.icon){if(r=s(n.icon),r)return r;if(r=s(n.icon[n.mode]),r)return r}return null},e=i=>(()=>{if("undefined"==typeof window)return new Map;if(!r){const n=window;n.Ionicons=n.Ionicons||{},r=n.Ionicons.map=n.Ionicons.map||new Map}return r})().get(i)||n(`svg/${i}.svg`),t=(n,r,i,e,t)=>(i="ios"===(i&&f(i))?"ios":"md",e&&"ios"===i?n=f(e):t&&"md"===i?n=f(t):(n||!r||o(r)||(n=r),u(n)&&(n=f(n))),u(n)&&""!==n.trim()?""!==n.replace(/[a-z]|-|\d/gi,"")?null:n:null),s=n=>u(n)&&(n=n.trim(),o(n))?n:null,o=n=>n.length>0&&/(\/|\.)/.test(n),u=n=>"string"==typeof n,f=n=>n.toLowerCase();export{t as a,i as g,u as i}