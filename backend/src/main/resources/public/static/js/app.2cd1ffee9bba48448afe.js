webpackJsonp([1],{"/zNC":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),t("div",{staticClass:"row main-container"},[t("div",{staticClass:"col-md-2 menu"}),this._v(" "),t("router-view",{staticClass:"col-md-10 menu",attrs:{to:{name:"chat"}}})],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("nav",{staticClass:"navbar navbar-dark"},[t("a",{staticClass:"navbar-brand"},[this._v("Sphera Global Health Care")])])}]};var o=s("VU/8")({name:"App",data:function(){return{logged:!1}}},a,!1,function(e){s("OO02")},null,null).exports,i=s("/ocq"),r=s("mvHQ"),c=s.n(r),l=s("O3w4"),u=s.n(l),m=s("r+n+"),d=s.n(m),p={data:function(){return{messages:[],message:"",sessionId:""}},methods:{sendMessage:function(){console.log(this.message),this.stompClient&&this.stompClient.connected&&(console.log("Sending..."),this.stompClient.send("/chat-room/chat",c()({content:this.message}))),this.message=""}},created:function(){var e=this;this.stompClient=d.a.over(new u.a("http://localhost:8088/chat-websocket")),this.stompClient.connect({},function(t){e.sessionId=e.stompClient.ws._transport.url.replace("ws://localhost:8088/chat-websocket","").replace("/websocket","").split("/")[2],console.log("Your current session is: "+e.sessionId),e.stompClient.subscribe("/queue/"+e.sessionId+"/msg-sent",function(t){var s={text:JSON.parse(t.body).content};e.messages.push(s)})},function(t){console.log(t),e.connected=!1})},destroyed:function(){this.stompClient&&this.stompClient.disconnect(),this.connected=!1}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-container"},[s("div",{staticClass:"show-msg-area"},[s("ul",e._l(e.messages,function(t){return s("li",[s("span",[e._v(e._s(t.text)+" ")])])}),0)]),e._v(" "),s("div",{staticClass:"write-msg-area"},[s("form",{staticClass:"form-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"col-md-10",attrs:{type:"text",id:"messageArea"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),s("button",{staticClass:"btn btn-primary col-md-2",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.sendMessage(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)}}},[e._v("Send")])])])])},staticRenderFns:[]};var v=s("VU/8")(p,h,!1,function(e){s("/zNC")},"data-v-44469cf4",null).exports;n.a.use(i.a);var f=new i.a({routes:[{path:"/",component:v,name:"chat"},{path:"*",redirect:{name:"chat"}}],mode:"history"});n.a.config.productionTip=!1,new n.a({el:"#app",router:f,components:{App:o},template:"<App/>"})},OO02:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2cd1ffee9bba48448afe.js.map