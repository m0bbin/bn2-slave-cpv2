(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],_=0,l=[];_<i.length;_++)s=i[_],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&l.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},o={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-08fce908":"42e220fe","chunk-2d0e95df":"14d049a6","chunk-2d22d746":"c998100a","chunk-4841a406":"3e70d125","chunk-305f047e":"a92399dc","chunk-e95933b0":"878cf32b","chunk-5d25ff31":"6d043084","chunk-26c7197c":"8e5ebff4","chunk-3335c8e4":"61a55736","chunk-7e4abc00":"05fed795","chunk-1c173e9c":"d2338834","chunk-279a3fae":"84b9c942","chunk-2d0bfef1":"dd849060","chunk-63949810":"d224cf98","chunk-2d0e5373":"c759f856","chunk-a5946836":"772ce7ce","chunk-e44837ea":"01b2118a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-4841a406":1,"chunk-305f047e":1,"chunk-e95933b0":1,"chunk-5d25ff31":1,"chunk-26c7197c":1,"chunk-7e4abc00":1,"chunk-1c173e9c":1,"chunk-279a3fae":1,"chunk-63949810":1,"chunk-a5946836":1,"chunk-e44837ea":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-08fce908":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-4841a406":"2e284e91","chunk-305f047e":"d5abf3c9","chunk-e95933b0":"d5abf3c9","chunk-5d25ff31":"b8086ac6","chunk-26c7197c":"9b538fdf","chunk-3335c8e4":"31d6cfe0","chunk-7e4abc00":"b3bc01b0","chunk-1c173e9c":"6aaf85e5","chunk-279a3fae":"4123dba2","chunk-2d0bfef1":"31d6cfe0","chunk-63949810":"8283d849","chunk-2d0e5373":"31d6cfe0","chunk-a5946836":"81d119fc","chunk-e44837ea":"fe005a0b"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],_=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(_===r||_===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],_=u.getAttribute("data-href");if(_===r||_===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete s[e],f.parentNode.removeChild(f),n(a)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){s[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var u,_=document.createElement("script");_.charset="utf-8",_.timeout=120,c.nc&&_.setAttribute("nonce",c.nc),_.src=i(e);var l=new Error;u=function(t){_.onerror=_.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:_})}),12e4);_.onerror=_.onload=u,document.head.appendChild(_)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],_=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=_;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a5d":function(e,t,n){var r={"./404.vue":["8cdb","chunk-2d0e95df"],"./About.vue":["f820","chunk-2d22d746"],"./Alerts.vue":["9413","chunk-5d25ff31","chunk-7e4abc00","chunk-2d0e5373"],"./Bots.vue":["28ed","chunk-5d25ff31","chunk-4841a406","chunk-7e4abc00","chunk-1c173e9c","chunk-279a3fae"],"./Home.vue":["bb51","chunk-4841a406","chunk-e95933b0"],"./Jobs.vue":["ee68","chunk-5d25ff31","chunk-4841a406","chunk-7e4abc00","chunk-1c173e9c","chunk-63949810"],"./Login.vue":["a55b","chunk-5d25ff31","chunk-4841a406","chunk-3335c8e4"],"./Reports.vue":["c11b","chunk-4841a406","chunk-305f047e"],"./Settings.vue":["26d3","chunk-08fce908"],"./Warehouse.vue":["4043","chunk-5d25ff31","chunk-4841a406","chunk-7e4abc00","chunk-1c173e9c","chunk-2d0bfef1"],"./loading.vue":["7a6b","chunk-e44837ea"],"./overview.vue":["54b1","chunk-5d25ff31","chunk-26c7197c"],"./panini_app.vue":["d24b","chunk-5d25ff31","chunk-a5946836"]};function s(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(r)},s.id="1a5d",e.exports=s},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-system-bar",{attrs:{dark:"",app:"",window:"","lights-out":""}},[n("h2",{staticStyle:{color:"#00ff00"},on:{click:function(t){return e.$router.push("/")}}},[e._v("cPanel -- BN2")]),n("v-spacer"),e.$store.getters["session/socket_connected"]?n("h5",[e._v(" "+e._s(e.$store.getters["bot/resp_time_master_forward"]+e.$store.getters["bot/resp_time_master_back"])+"ms ")]):e._e(),n("v-spacer"),e.$store.getters["session/authenticated"]?[n("v-btn",{attrs:{icon:"",href:"https://discord.gg/btpaWH5"}},[n("v-icon",{attrs:{color:"#00ff00"}},[e._v("mdi-discord")])],1),n("v-btn",{attrs:{dark:"",icon:""},on:{click:e.reloadBtn}},[n("v-icon",{attrs:{color:"#00ff00"}},[e._v("mdi-reload")])],1),n("v-btn",{attrs:{dark:"",icon:"",to:"/logout"},on:{click:e.logoutBtn}},[n("v-icon",{attrs:{color:"#00ff00"}},[e._v("mdi-logout")])],1)]:e._e()],2),n("div",{attrs:{id:"app"}},[n("socket_funcs",{directives:[{name:"show",rawName:"v-show",value:e.$store.getters["session/authenticated"],expression:'$store.getters["session/authenticated"]'}],ref:"socket_comp"}),n("v-content",[n("router-view")],1),e.$store.getters["session/socket_connected"]?n("portal_nav"):e._e()],1)],1)},o=[],a=(n("ac1f"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"socket_funcs"}})}),i=[],c={computed:{is_auth:function(){return this.$store.getters["session/authenticated"]}},watch:{is_auth:function(e,t){e||t&&(this.$socket.close(),this.$store.commit("session/SET_SOCKET_CONNECTED",!1),console.log("CLOSING SOCKET"))}},data:function(){return{init:null,stored_sockets:null}},created:function(){if(this.init=!1,this.sockets.subscribe("updateStream/session/is_connected_master",this.IS_CONNECTED_MASTER),this.$store.getters["session/socket_connected"])for(var e=["connect","disconnect","updateStream","updateStream/session/is_connected_master"],t=0;t<e.length;t++)this.sockets.unsubcribe(e[t])},mounted:function(){},methods:{IS_CONNECTED_MASTER:function(e){this.$store.commit("session/SET_IS_ONLINE_MASTER",e["is_connected_master"])}},sockets:{connect:function(e){this.init||(this.init=!0),this.$store.commit("alert/RESET_ALERT_STORE"),this.$store.commit("job/RESET_JOB_STORE"),this.$store.commit("bot/RESET_BOT_STORE"),this.$store.commit("session/RESET_SESSION_STORE"),console.log("SOCKET CONNECTED!"),this.$store.commit("session/SET_IS_ONLINE_CPV2",!0),this.$socket.emit("past",{})},disconnect:function(){this.$store.commit("session/SET_IS_ONLINE_CPV2",!1),this.$store.commit("session/SET_IS_ONLINE_MASTER",!1),console.log("SOCKET DISCON")},updateStream:function(e){console.log("US-> ["+e["type"]+"/"+e["delete"]+"] = "+e["objs"].length);var t="";switch(e["delete"]?t+="_DELETE":t+="_SET",e["type"]){case"task":return 1;case"tasks":this.$store.dispatch("job/TASKS"+t,e["objs"]);break;case"jobs":this.$store.dispatch("job/JOBS"+t,e["objs"]),this.$store.commit("job/SET_INIT",!0);break;case"job_reports":this.$store.dispatch("job/JOB_REPORTS"+t,e["objs"]);break;case"slaves":this.$store.dispatch("bot/SLAVES"+t,e["objs"]),this.$store.commit("bot/SET_INIT",!0);break;case"slave_types":this.$store.dispatch("bot/SLAVE_TYPES"+t,e["objs"]);break;case"schedulers":this.$store.dispatch("job/SCHEDULERS"+t,e["objs"]);break;case"scheduler_groups":this.$store.dispatch("job/SCHEDULER_GROUPS"+t,e["objs"]);break;case"alerts":this.$store.dispatch("alert/ALERTS"+t,e["objs"]),this.$store.commit("alert/SET_INIT",!0);break;case"usage":this.$store.dispatch("bot/USAGE_SET",e["objs"]);break;case"resp_times":this.$store.dispatch("bot/RESP_TIMES_SET",e["objs"]);break;case"master_configs":this.$store.commit("bot/SET_MASTER_CONFIGS",e["objs"]);break;case"warehouse/table/rows":this.$store.commit("session/SET_WAREHOUSE_TABLE_ROWS",e["objs"]["rows"]),this.$store.commit("session/SET_WAREHOUSE_TABLE_HEADERS",e["objs"]["headers"]),this.$store.commit("session/SET_WAREHOUSE_TABLE_NAME",e["objs"]["table_name"]);break}}}},u=c,_=n("2877"),l=Object(_["a"])(u,a,i,!1,null,null,null),f=l.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("alert_comp"),n("v-snackbar",{attrs:{value:!e.$store.getters["session/is_online_CPV2"]||!e.$store.getters["session/is_online_master"],timeout:0,bottom:"",color:"error"}},[n("v-alert",{staticClass:"pb-0",attrs:{prominent:"",icon:"mdi-lan-disconnect",color:"error",dense:""}},[e._v(" "+e._s(e.disconnected_from)+" ")])],1),n("v-card",[n("v-bottom-navigation",{attrs:{color:e.color,mandatory:"",app:"",fixed:"",dark:"","hide-overlay":""},model:{value:e.bottomNav,callback:function(t){e.bottomNav=t},expression:"bottomNav"}},[n("v-btn",{attrs:{dark:"",to:"/"}},[n("span",[e._v("Overview")]),n("v-badge",{attrs:{left:"",value:e.$store.getters["alert/unviewed_alerts"].length||!e.$store.getters["alert/init"],color:"orange darken-1"},scopedSlots:e._u([{key:"badge",fn:function(){return[e.$store.getters["alert/init"]?n("span",[e._v(e._s(e.$store.getters["alert/unviewed_alerts"].length))]):n("v-icon",{staticClass:"mdi-spin"},[e._v("mdi-loading")])]},proxy:!0}])},[n("v-icon",{attrs:{medium:""}},[e._v("mdi-view-dashboard")])],1)],1),n("v-btn",{attrs:{dark:"",to:"/jobs?tk=recent"}},[n("span",[e._v("Jobs")]),n("v-badge",{attrs:{left:"",value:e.$store.getters["job/inprogress"].length||e.$store.getters["job/queued"].length||!e.$store.getters["job/init"],color:"primary lighten-1"},scopedSlots:e._u([{key:"badge",fn:function(){return[e.$store.getters["job/init"]?n("span",[e._v(e._s(e.$store.getters["job/inprogress"].length+e.$store.getters["job/queued"].length))]):n("v-icon",{staticClass:"mdi-spin"},[e._v("mdi-loading")])]},proxy:!0}])},[n("v-icon",{attrs:{medium:""}},[e._v("mdi-briefcase")])],1)],1),n("v-btn",{attrs:{dark:"",to:"/warehouse"}},[n("span",[e._v("Warehouse")]),n("v-icon",{attrs:{medium:""}},[e._v("mdi-warehouse")])],1),n("v-btn",{attrs:{dark:"",to:"/bots?tk=recent-slaves"}},[n("span",[e._v("Bots")]),n("v-badge",{attrs:{left:"",color:"indigo",value:e.$store.getters["bot/slaves_active"].length||!e.$store.getters["bot/init"]},scopedSlots:e._u([{key:"badge",fn:function(){return[e.$store.getters["bot/init"]?n("span",[e._v(e._s(e.$store.getters["bot/slaves_active"].length))]):n("v-icon",{staticClass:"mdi-spin"},[e._v("mdi-loading")])]},proxy:!0}])},[n("v-icon",{attrs:{medium:""}},[e._v("mdi-robot")])],1)],1)],1)],1)],1)},m=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-snackbar",{attrs:{top:"",rounded:"pill",color:e.alert_color},model:{value:e.is_active,callback:function(t){e.is_active=t},expression:"is_active"}},[e.alert_redirect_resp?n("v-avatar",{staticClass:"mr-3",attrs:{size:"36",color:"white"}},[n("v-icon",{attrs:{color:"success"}},[e._v("mdi-email-check")])],1):n("v-avatar",{staticClass:"mr-3",attrs:{size:"36",color:"white"}},[n("v-icon",{attrs:{color:"grey"}},[e._v("mdi-email-send")])],1),e._v(" "+e._s(e.display_msg)+" "),n("v-btn",{attrs:{outlined:""},on:{click:function(t){e.is_active=!1}}},[e._v(" Hide All ")])],1)],1)},E=[],h=(n("d3b7"),n("25f0"),{computed:{display_msg:function(){var e=this.$store.getters["alert/unprompted_alerts"].length;return e?this.alert_msg+" (+"+e.toString()+" more alerts)":this.alert_msg}},methods:{addAlert:function(){var e="success";this.tmp_id%2==0&&(e="primary");var t={id:this.tmp_id,msg:"fuck u: "+this.tmp_id.toString(),go_to:"/jobs",viewed:!1,color:e};console.log("ADDING ALERT"),this.$store.dispatch("alert/ALERT_SET",t),this.tmp_id=this.tmp_id+1},displayAlert:function(){if(!this.is_running){var e=this.$store.getters["alert/unprompted_alerts"];if(console.log(JSON.stringify(e)),e.length){var t=e[0],n=this;this.is_running||(n.$store.state.alert.alert_map[t["id"].toString()]["prompted"]=!0,n.is_running=!0,n.alert_msg=t["msg"],n.is_active=!0,n.alert_go_to=t["go_to"],n.alert_color=t["color"],n.alert_redirect_resp=t["redirect_resp"],setTimeout((function(){n.is_running=!1,n.$store.getters["alert/unprompted_alerts"]?n.displayAlert():n.is_active=!1}),this.alert_timeout))}}}},watch:{"$store.state.alert.alert_map":function(){return this.displayAlert(),!0}},data:function(){return{is_running:!1,alert_timeout:1e3,is_active:!1,alert_redirect_resp:!1,alert_msg:"test msg",alert_color:"success",alert_go_to:"",tmp_id:1}}}),v=h,S=n("6544"),g=n.n(S),b=n("8212"),T=n("8336"),k=n("132d"),O=n("2db4"),j=Object(_["a"])(v,p,E,!1,null,null,null),R=j.exports;g()(j,{VAvatar:b["a"],VBtn:T["a"],VIcon:k["a"],VSnackbar:O["a"]});var L={components:{alert_comp:R},data:function(){return{bottomNav:0}},methods:{},computed:{disconnected_from:function(){var e=this.$store.getters["session/is_online_CPV2"],t=this.$store.getters["session/is_online_master"];return e?t?"":"Disconnected from Master":"Disconnected from CPV2"},alert_active:{get:function(){return this.$store.getters.alert_active},set:function(e){1==e&&this.$store.dispatch("SET_ALERT_ON"),this.$store.commit("SET_ALERT_ACTIVE",e)}},recentAlertLink:{get:function(){return this.$store.getters.unviewed_alerts.length?"alerts#alert_"+this.$store.getters.unviewed_alerts[0]["id"]:"alerts"}},color:function(){switch(this.bottomNav){case 0:return"blue lighten-3";case 1:return"green darken-1";case 2:return"orange darken-1";case 3:return"purple lighten-1";case 4:return"yellow darken-2"}return"black"}}},y=L,w=n("0798"),A=n("4ca6"),C=n("b81c"),$=n("b0af"),D=Object(_["a"])(y,d,m,!1,null,null,null),N=D.exports;g()(D,{VAlert:w["a"],VBadge:A["a"],VBottomNavigation:C["a"],VBtn:T["a"],VCard:$["a"],VIcon:k["a"],VSnackbar:O["a"]});var P=n("5132"),U=n.n(P),I={name:"App",watch:{$route:{immediate:!0,handler:function(e){this.$store.getters["session/authenticated"]||(console.log(e.path),"/login"!=e.path&&"/loading"!=e.path&&this.$router.replace("/login")),document.title=e.meta.title||"CPv2"}}},components:{socket_funcs:f,portal_nav:N},data:function(){return{}},created:function(){if(this.$store.getters["session/authenticated"]){var e=window.location.origin,t=e+"?token="+this.$store.getters["session/socket_token"];r["a"].use(new U.a({debug:!1,connection:t})),this.$store.commit("session/SET_SOCKET_CONNECTED",!0)}else this.$router.replace("/login")},methods:{logoutBtn:function(){this.reloadBtn(!1),this.$store.commit("session/SET_AUTHENTICATED",!1),this.$store.commit("session/SET_SOCKET_TOKEN",null),this.$router.push("/loading?delay=true&to=/login&h=Logging out...")},reloadBtn:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$store.commit("alert/RESET_ALERT_STORE"),this.$store.commit("job/RESET_JOB_STORE"),this.$store.commit("bot/RESET_BOT_STORE"),this.$store.commit("session/RESET_SESSION_STORE"),this.$store.commit("session/SET_IS_ONLINE_CPV2",!0),e&&this.$socket.emit("past",{})}}},B=I,V=n("7496"),H=n("a75b"),J=n("2fa4"),M=n("afd9"),q=Object(_["a"])(B,s,o,!1,null,null,null),x=q.exports;g()(q,{VApp:V["a"],VBtn:T["a"],VContent:H["a"],VIcon:k["a"],VSpacer:J["a"],VSystemBar:M["a"]});n("d81d");var G=n("5530"),K=n("8c4f");r["a"].use(K["a"]);var W=[{path:"/",view:"overview",meta:{title:"Home |CP"}},{path:"/loading",view:"loading",meta:{title:"Loading... |CP"}},{path:"/jobs",view:"Jobs",meta:{title:"Jobs |CP"}},{path:"/bots",view:"Bots",meta:{title:"Bots |CP"}},{path:"/login",view:"Login",meta:{title:"Login |CP"}},{path:"/settings",view:"Settings",meta:{title:"Settings |CP"}},{path:"/alerts",view:"Alerts",meta:{title:"Alerts |CP"}},{path:"/reports",view:"Reports",meta:{title:"Reports |CP"}},{path:"/app/chaturbate",view:"panini_app",meta:{title:"Chaturbate Viewer"}},{path:"/warehouse",view:"Warehouse",meta:{title:"Warehouse |CP"}},{path:"*",view:"404"}],F=W.map((function(e){return Object(G["a"])({},e,{component:function(){return n("1a5d")("./".concat(e.view,".vue"))}})})),Y=new K["a"]({mode:"history",base:"/",routes:F}),z=n("2f62");n("4de4"),n("caad"),n("b0c0"),n("b64b"),n("2532");function Q(e,t,n){for(var r=0;r<n.length;r++)e.commit(t,n[r])}var X={init:!1,job_filter:null,task_map:{},job_map:{},job_report_map:{},scheduler_map:{},scheduler_group_map:{},cjob_id:null,cjob_tasks:[]},Z={init:function(e){return e.init},cjob_id:function(e){return e.cjob_id},cjob_report_id:function(e){var t=e.cjob_id;return t?e.job_map[t.toString()]["job_report_id"]:null},cjob_report_type:function(e,t){var n=t.cjob_report_id;if(n){n=n.toString();var r=e.job_report_map[n];return r?r["type"]:null}return null},cjob_report_content:function(e,t){var n=t.cjob_report_id;if(n){n=n.toString();var r=e.job_report_map[n];return r?"json"==r["type"]?r["data"]:r["content"]:null}return null},cjob_tasks:function(e,t){return t.tasks.filter((function(t){if(t["job_id"]==e.cjob_id)return!(t["task_group_id"]&&!t["id"].toString().includes("tg"))}))},filtered_jobs:function(e,t){return-1==e.job_filter?t.queued:0==e.job_filter?t.inprogress:1==e.job_filter?t.completed:2==e.job_filter?t.errors:t.jobs},queued:function(e,t){return t.jobs.filter((function(e){if("Queued"==e["stage"])return!0}))},errors:function(e,t){return t.jobs.filter((function(e){if(2==e["status"])return!0}))},completed:function(e,t){return t.jobs.filter((function(e){if(1==e["status"])return!0}))},inprogress:function(e,t){return t.jobs.filter((function(e){if(0==e["status"]&&"Queued"!=e["stage"])return!0}))},task_errors:function(e,t){return t.tasks.filter((function(e){if(2==e["status"])return!0}))},task_completed:function(e,t){return t.tasks.filter((function(e){if(1==e["status"])return!0}))},task_inprogress:function(e,t){return t.tasks.filter((function(e){if(0==e["status"])return!0}))},jobs:function(e){return Object.keys(e.job_map).map((function(t){return e.job_map[t]}))},tasks:function(e){return Object.keys(e.task_map).map((function(t){return e.task_map[t]}))},task_map:function(e){return e.task_map},job_map:function(e){return e.job_map},scheduler_map:function(e){return e.scheduler_map},scheduler_group_map:function(e){return e.scheduler_group_map},schedules:function(e,t){var n=t.scheduler_groups,r=t.schedulers,s=[];if(!n||!r)return s;for(var o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=0;a<n.length;a++){for(var i={cnt:0,repeat:!1},c="",u="",_="",l=null,f=0;f<r.length;f++)if(r[f].scheduler_group_id==n[a].id){var d=new Date(Date.parse(r[f].run_time+" UTC"));i["cnt"]+=1,r[f].frequency_min?(i["repeat"]=!0,i["frequency"]=r[f].frequency_min,u+=o[d.getDay()]+", "):(i["repeat"]=!1,i["frequency"]="Non repeating");var m=new Date;l?d-m>=0&&d-m<l-m&&(l=d):l=d}if(i["cnt"]>0){c=o[l.getDay()];var p=l.getMilliseconds()-6e4*l.getTimezoneOffset();l.setMilliseconds(p);var E=l.getHours().toString(),h=l.getMinutes().toString();if(1==h.length&&(h="0"+h),1==E.length&&(E="0"+E),_=E+":"+h,i["run_time"]=c+"@"+_,i["repeat"])if(1==i["cnt"]){var v=i["frequency"],S="minutes";i["frequency"]="Every "+v+" "+S}else i["cnt"]>1&&(i["frequency"]=u.substr(0,u.length-2));i["group_id"]=n[a].id,i["name"]=n[a].name,s.push(i)}}return s},schedulers:function(e){return Object.keys(e.scheduler_map).map((function(t){return e.scheduler_map[t]}))},scheduler_groups:function(e){return Object.keys(e.scheduler_group_map).map((function(t){return e.scheduler_group_map[t]}))}},ee={SCHEDULER_GROUP_SET:function(e,t){e.commit("SCHEDULER_GROUP_SET",t)},SCHEDULER_GROUPS_SET:function(e,t){Q(e,"SCHEDULER_GROUP_SET",t)},SCHEDULER_GROUPS_DELETE:function(e,t){Q(e,"SCHEDULER_GROUP_DELETE",t)},SCHEDULER_GROUP_DELETE:function(e,t){e.commit("SCHEDULER_GROUP_DELETE",t)},SCHEDULER_SET:function(e,t){e.commit("SCHEDULER_SET",t)},SCHEDULERS_SET:function(e,t){Q(e,"SCHEDULER_SET",t)},SCHEDULER_DELETE:function(e,t){e.commit("SCHEDULER_DELETE",t)},SCHEDULERS_DELETE:function(e,t){Q(e,"SCHEDULER_DELETE",t)},JOB_SET:function(e,t){e.commit("JOB_SET",t)},JOBS_SET:function(e,t){Q(e,"JOB_SET",t)},JOB_DELETE:function(e,t){e.commit("JOB_DELETE",t)},JOB_REPORT_SET:function(e,t){e.commit("JOB_REPORT_SET",t)},JOB_REPORTS_SET:function(e,t){Q(e,"JOB_REPORT_SET",t)},TASK_SET:function(e,t){e.commit("TASK_SET",t)},TASKS_SET:function(e,t){console.log("Tasks LENGTH: "+t.length),Q(e,"TASK_SET",t)},TASK_DELETE:function(e,t){e.commit("TASK_DELETE",t)}},te={RESET_JOB_STORE:function(e){e.init=!1,e.job_filter=null,e.task_map={},e.job_map={},e.job_report_map={},e.scheduler_map={},e.scheduler_group_map={},e.cjob_id=null,e.cjob_tasks=[]},SET_INIT:function(e,t){e.init=t},SET_CJOB_ID:function(e,t){e.cjob_id=t},SET_JOB_FILTER:function(e,t){e.job_filter=t},JOB_SET:function(e,t){for(var n={},s=Object.keys(t),o=0;o<s.length;o++){var a=s[o];n[a]=t[a]}1==t["error"]?n["status"]=2:n["status"]=n["completed"]?1:0,r["a"].set(e.job_map,n["id"].toString(),n)},JOB_DELETE:function(e,t){r["a"].delete(e.job_map,t["id"].toString())},JOB_REPORT_SET:function(e,t){for(var n={},s=Object.keys(t),o=0;o<s.length;o++){var a=s[o];n[a]=t[a]}r["a"].set(e.job_report_map,t["id"].toString(),n)},JOB_REPORT_DELETE:function(e,t){r["a"].delete(e.job_report_map,t["id"].toString())},TASK_DELETE:function(e,t){r["a"].delete(e.task_map,t["id"].toString())},TASK_SET:function(e,t){for(var n=Object.keys(t),s={},o=0;o<n.length;o++){var a=n[o];s[a]=t[a]}1==s["error"]?(s["status"]=2,s["completed"]&&(s["status"]=3)):s["assigned_slave_id"]?s["status"]=s["completed"]?1:0:s["status"]=4,r["a"].set(e.task_map,s["id"].toString(),s)},SCHEDULER_SET:function(e,t){r["a"].set(e.scheduler_map,t["id"].toString(),t)},SCHEDULER_GROUP_SET:function(e,t){r["a"].set(e.scheduler_group_map,t["id"].toString(),t)},SCHEDULER_DELETE:function(e,t){r["a"].delete(e.scheduler_map,t["id"].toString())},SCHEDULER_GROUP_DELETE:function(e,t){r["a"].delete(e.scheduler_group_map,t["id"].toString())}},ne={state:X,namespaced:!0,getters:Z,mutations:te,actions:ee},re={username:null,socket_token:null,socket_connected:!1,authenticated:!1,is_online_CPV2:!1,is_online_master:!1,warehouse_table_rows:[],warehouse_table_headers:[],warehouse_table_name:null},se={username:function(e){return e.username},authenticated:function(e){return e.authenticated},socket_token:function(e){return e.socket_token},socket_connected:function(e){return e.socket_connected},is_online_CPV2:function(e){return e.is_online_CPV2},is_online_master:function(e){return e.is_online_master},warehouse_table_rows:function(e){return e.warehouse_table_rows},warehouse_table_headers:function(e){return e.warehouse_table_headers},warehouse_table_name:function(e){return e.warehouse_table_name}},oe={RESET_SESSION_STORE:function(e){e.is_online_CPV2=!1,e.is_online_master=!1},SET_USERNAME:function(e,t){e.username=t},SET_AUTHENTICATED:function(e,t){e.authenticated=t},SET_SOCKET_CONNECTED:function(e,t){e.socket_connected=t},SET_SOCKET_TOKEN:function(e,t){e.socket_token=t},SET_IS_ONLINE_CPV2:function(e,t){e.is_online_CPV2=t},SET_IS_ONLINE_MASTER:function(e,t){e.is_online_master=t},SET_WAREHOUSE_TABLE_ROWS:function(e,t){e.warehouse_table_rows=t},SET_WAREHOUSE_TABLE_HEADERS:function(e,t){e.warehouse_table_headers=t},SET_WAREHOUSE_TABLE_NAME:function(e,t){e.warehouse_table_name=t}},ae={},ie={state:re,namespaced:!0,getters:se,mutations:oe,actions:ae};n("b680");function ce(e,t,n){for(var r=0;r<n.length;r++)e.commit(t,n[r])}var ue={init:!1,master_configs:[],slave_map:{},slave_type_map:{},cslave_id:null,usage_map:{},cpu_freq:null,resp_times:{master:[],slaves:{}}},_e={master_configs:function(e){return e.master_configs},cslave_id:function(e){return e.cslave_id},cslave_resp_times:function(e,t){var n=t.cslave_id;if(!n)return[];var r=t.slave_map[n.toString()];if(r){var s=t.resp_times_slaves[r.uuid];return s||[]}return[]},init:function(e){return e.init},cpu_freq:function(e){return e.cpu_freq},cpu_freq_ghz:function(e){return e.cpu_freq?(e.cpu_freq/1e3).toFixed(2):null},slaves_active:function(e,t){return t.slaves.filter((function(e){return e["active"]}))},slave_type_map:function(e){return e.slave_type_map},slave_map:function(e){return e.slave_map},slaves:function(e){return Object.keys(e.slave_map).map((function(t){return e.slave_map[t]}))},slave_types:function(e){return Object.keys(e.slave_type_map).map((function(t){return e.slave_type_map[t]}))},usage_map:function(e){return e.usage_map},resp_times:function(e){return e.resp_times},resp_times_slaves:function(e){return e.resp_times["slaves"]},resp_times_master:function(e){return e.resp_times["master"]},resp_time_master_forward:function(e){var t=e.resp_times["master"][e.resp_times["master"].length-1];return t?t["forward"]:null},resp_time_master_back:function(e){var t=e.resp_times["master"][e.resp_times["master"].length-1];return t?t["back"]:null},usage:function(e){return Object.keys(e.usage_map).map((function(t){return e.usage_map[t]}))},pid_usage:function(e,t){for(var n=[],r=0;r<t.usage.length;r++){for(var s=t.usage[r],o={info:[]},a=0;a<s.length;a++)0==a&&(o["name"]=s[a]["name"],o["pid"]=s[a]["pid"]),o["info"].push(s[a]);n.push(o)}return n},cpu_percentages:function(e,t){for(var n=[],r=0;r<t.usage.length;r++){for(var s=t.usage[r],o={cpu_pcts:[]},a=0;a<s.length;a++)0==a&&(o["name"]=s[a]["name"],o["pid"]=s[a]["pid"]),o["cpu_pcts"].push(s[a]);n.push(o)}return n}},le={RESET_BOT_STORE:function(e){e.init=!1,e.slave_map={},e.slave_type_map={},e.usage_map={},e.cpu_freq=null,e.cslave_id=null,e.resp_times={master:[],slaves:{}},e.master_configs=[]},SET_MASTER_CONFIGS:function(e,t){e.master_configs=t},SET_INIT:function(e,t){e.init=t},SET_CSLAVE_ID:function(e,t){e.cslave_id=t},USAGE_SET:function(e,t){var n=t["pid"].toString();Object.keys(t).includes("cpu_freq")&&(e.cpu_freq=t["cpu_freq"]),Object.keys(e.usage_map).includes(n)||r["a"].set(e.usage_map,n,[]),e.usage_map[n].push(t);var s=e.usage_map[n];while(s.length>45)s.shift();r["a"].set(e.usage_map,n,s)},SLAVE_TYPE_DELETE:function(e,t){r["a"].delete(e.slave_type_map,t["id"].toString())},SLAVE_TYPE_SET:function(e,t){r["a"].set(e.slave_type_map,t["id"].toString(),t)},SLAVE_DELETE:function(e,t){r["a"].delete(e.slave_map,t["id"].toString())},SLAVE_SET:function(e,t){for(var n=Object.keys(t),s={},o=0;o<n.length;o++){var a=n[o];s[a]=t[a]}var i=s["slave_type_id"].toString();try{s["slave_type"]=e.slave_type_map[i]["name"]}catch(c){s["slave_type"]="Slave Type ["+i+"]"}r["a"].set(e.slave_map,s["id"].toString(),s)},RESP_TIMES_SET:function(e,t){for(var n=Object.keys(t["slaves"]),s=0;s<n.length;s++){var o=t["slaves"][n[s]];Object.keys(e.resp_times["slaves"]).includes(n[s])||(e.resp_times["slaves"][n[s]]=[]);for(var a=e.resp_times["slaves"][n[s]],i=0;i<o.length;i++)a.push(o[i]);while(a.length>45)a.shift();r["a"].set(e.resp_times["slaves"],n[s],a)}var c=e.resp_times["master"],u={total:t["resp_total"],forward:t["resp_forward"],back:t["resp_back"]};c.push(u);while(c.length>45)c.shift();r["a"].set(e.resp_times,"master",c),r["a"].set(e.resp_times["master"][0],"forward",e.resp_times["master"][0]["forward"]),r["a"].set(e.resp_times["master"][0],"back",e.resp_times["master"][0]["back"])}},fe={RESP_TIMES_SET:function(e,t){e.commit("RESP_TIMES_SET",t)},USAGE_SET:function(e,t){ce(e,"USAGE_SET",t)},SLAVE_SET:function(e,t){e.commit("SLAVE_SET",t)},SLAVES_SET:function(e,t){ce(e,"SLAVE_SET",t)},SLAVE_TYPE_SET:function(e,t){e.commit("SLAVE_TYPE_SET",t)},SLAVE_TYPES_SET:function(e,t){ce(e,"SLAVE_TYPE_SET",t)}},de={state:ue,namespaced:!0,getters:_e,mutations:le,actions:fe};function me(e,t,n){for(var r=0;r<n.length;r++)e.commit(t,n[r])}var pe={init:!1,alert_map:{}},Ee={init:function(e){return e.init},alert_map:function(e){return e.alert_map},false_redirect_resps:function(e,t){return t.alerts.filter((function(e){if(0==e["redirect_resp"])return!0}))},unviewed_alerts:function(e,t){return t.alerts.sort((function(e,t){return e.obj_time>t.obj_time?1:-1})).filter((function(e){return!!e["redirect_resp"]}))},unprompted_alerts:function(e,t){return t.alerts.filter((function(e){if(0==e["prompted"]&&0==e["viewed"])return!0}))},alerts:function(e){return Object.keys(e.alert_map).map((function(t){return e.alert_map[t]}))}},he={RESET_ALERT_STORE:function(e){e.alert_map={},e.init=!1},SET_INIT:function(e,t){e.init=t},ALERT_DELETE:function(e,t){r["a"].delete(e.alert_map,t["id"].toString())},ALERT_SET:function(e,t){for(var n={prompted:!1},s=Object.keys(t),o=0;o<s.length;o++){var a=s[o];n[a]=t[a]}var i=new Date(Date.parse(n["time"]+" UTC"));n["time_obj"]=i,r["a"].set(e.alert_map,n["id"].toString(),n)}},ve={ALERT_SET:function(e,t){e.commit("ALERT_SET",t)},ALERTS_SET:function(e,t){me(e,"ALERT_SET",t)},ALERT_DELETE:function(e,t){e.commit("ALERT_DELETE",t)},ALERTS_DELETE:function(e,t){me(e,"ALERTS_DELETE",t)}},Se={state:pe,namespaced:!0,getters:Ee,mutations:he,actions:ve},ge=n("52f5"),be=n.n(ge);r["a"].use(z["a"]);var Te=new z["a"].Store({modules:{job:ne,session:ie,bot:de,alert:Se},plugins:[be()()]}),ke=n("f309");r["a"].use(ke["a"]);var Oe=new ke["a"]({theme:{dark:!0}}),je=(n("bf40"),n("bc3a")),Re=n.n(je),Le=n("1390"),ye=n.n(Le),we=n("ecee"),Ae=n("c074"),Ce=n("ad3d");r["a"].prototype.$http=Re.a,we["c"].add(Ae["a"]),r["a"].component("font-awesome-icon",Ce["a"]),r["a"].use(ye.a),r["a"].config.productionTip=!1,new r["a"]({router:Y,store:Te,vuetify:Oe,render:function(e){return e(x)}}).$mount("#app")}});