(function(e){function t(t){for(var r,o,s=t[0],u=t[1],i=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1ace":function(e,t,n){"use strict";n("b8e3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("cf05"),a=n.n(c),o=Object(r["d"])("img",{alt:"Vue logo",src:a.a},null,-1);function s(e,t,n,c,a,s){var u=Object(r["i"])("PostComponent");return Object(r["e"])(),Object(r["c"])("div",null,[o,Object(r["d"])(u,{msg:"My Tasks Today"})])}var u=Object(r["m"])("data-v-4d55cfbe");Object(r["g"])("data-v-4d55cfbe");var i={class:"container"},l={class:"display-1"},p={class:"posts-section"},d={class:"add-post"},b={class:"form-group"},f=Object(r["d"])("label",{for:"title",class:"form-label"},"Title",-1),v={class:"form-group"},h=Object(r["d"])("label",{for:"msg",class:"form-label"},"Body",-1),m={class:"title"},j={class:"body"};Object(r["f"])();var O=u((function(e,t,n,c,a,o){return Object(r["e"])(),Object(r["c"])("div",i,[Object(r["d"])("h1",l,Object(r["j"])(n.msg),1),Object(r["d"])("div",p,[Object(r["d"])("div",d,[Object(r["d"])("form",null,[Object(r["d"])("div",b,[f,Object(r["l"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.title=e}),id:"title",class:"form-control"},null,512),[[r["k"],a.title]])]),Object(r["d"])("div",v,[h,Object(r["l"])(Object(r["d"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.body=e}),id:"msg",class:"form-control"},null,512),[[r["k"],a.body]])]),Object(r["d"])("button",{onClick:t[3]||(t[3]=function(){return o.newPost&&o.newPost.apply(o,arguments)}),class:"btn btn-primary"},"Add")])]),(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(a.posts,(function(e){return Object(r["e"])(),Object(r["c"])("div",{class:"post",key:e._id},[Object(r["d"])("h2",m,Object(r["j"])(e.title),1),Object(r["d"])("p",j,Object(r["j"])(e.body),1),Object(r["d"])("button",{onClick:function(t){return o.delPost(e._id)},class:"btn btn-danger"},"Delete",8,["onClick"])])})),128))])])})),g=n("1da1"),y=(n("a434"),n("96cf"),n("5530")),w=(n("d81d"),n("bc3a")),x=n.n(w),k="http://localhost:5000/api/posts",P=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(k);case 3:return t=e.sent,n=t.data,e.abrupt("return",n.map((function(e){return Object(y["a"])(Object(y["a"])({},e),{},{createdAt:new Date(e.createdAt)})})));case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.title,r=t.body,e.prev=1,e.next=4,x.a.post("http://localhost:5000/api/posts/create",{title:n,body:r});case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e["catch"](1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.patch("http://localhost:5000/api/posts/".concat(t),{title:"TEST",body:"TESTING TESTING TESING"});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("http://localhost:5000/api/posts/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),_={name:"PostComponent",props:{msg:String},data:function(){return{posts:[],error:"",title:"",body:""}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P();case 3:e.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{newPost:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R({title:e.title,body:e.body});case 3:n=t.sent,e.posts.push(n.data),e.title="",e.body="",t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},updatePost:function(e){return Object(g["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e);case 3:n=t.sent,console.log("UPDATE:",n.data),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},delPost:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S(e);case 3:r=n.sent,t.posts.splice(r,1),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}};n("5888");_.render=O,_.__scopeId="data-v-4d55cfbe";var C=_,A={name:"App",components:{PostComponent:C}};n("1ace");A.render=s;var E=A;n("7b17"),n("ab8b");Object(r["b"])(E).mount("#app")},5888:function(e,t,n){"use strict";n("9146")},9146:function(e,t,n){},b8e3:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.931bd75c.js.map