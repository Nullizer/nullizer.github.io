System.register([],function(r){return{execute:function(){var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}var c=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(r){return e[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,c){for(var a,i,f=o(r),u=1;u<arguments.length;u++){for(var s in a=Object(arguments[u]))t.call(a,s)&&(f[s]=a[s]);if(e){i=e(a);for(var b=0;b<i.length;b++)n.call(a,i[b])&&(f[i[b]]=a[i[b]])}}return f};r("r",c)}}});