(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ab9c11a"],{"0219":function(t,e,n){"use strict";var a=n("3f4a");e["a"]={Approve:function(t){return Object(a["a"])().get("/admin/"+t+"/approve")},Reject:function(t){return Object(a["a"])().get("/admin/"+t+"/reject")}}},"0403":function(t,e,n){},"148c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",tile:""}},[n("v-toolbar",{attrs:{color:"orange darken-1",dark:""}},[n("v-toolbar-title",[t._v("การยืนยัน Video ")])],1),n("v-container",{attrs:{fluid:"","grid-list-md":"",grey:"","lighten-4":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("center",[n("h1",[t._v("การยืนยัน Video ของท่าน")])]),n("center",[n("h2",[n("div",{staticClass:"colorh2"},[t._v(t._s(t.dataview.message))])])]),n("center",[n("h3",[t._v("ยินดีต้อนรับเข้าสู่ Education Community KMITL")])])],1)],1)],1)],1)},r=[],o=n("a34a"),c=n.n(o),i=n("0219");function u(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var o=t.apply(e,n);function c(t,e){try{var n=o[t](e),c=n.value}catch(t){return void r(t)}n.done?a(c):Promise.resolve(c).then(i,u)}function i(t){c("next",t)}function u(t){c("throw",t)}i()})}}var s={data:function(){return{dataview:null}},mounted:function(){var t=u(c.a.mark(function t(){var e,n;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.route.params.tokens,t.prev=1,t.next=4,i["a"].Approve(e).then(function(t){return t});case 4:n=t.sent,console.log(n.data),this.dataview=n.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(){return t.apply(this,arguments)}}()},l=s,v=(n("852c"),n("2877")),f=n("6544"),d=n.n(f),p=n("b0af"),h=n("a523"),w=n("0e8f"),b=n("a722"),m=n("71d9"),g=n("2a7f"),_=Object(v["a"])(l,a,r,!1,null,null,null);_.options.__file="approvevdo.vue";e["default"]=_.exports;d()(_,{VCard:p["a"],VContainer:h["a"],VFlex:w["a"],VLayout:b["a"],VToolbar:m["a"],VToolbarTitle:g["b"]})},"852c":function(t,e,n){"use strict";var a=n("0403"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-6ab9c11a.941a5a36.js.map