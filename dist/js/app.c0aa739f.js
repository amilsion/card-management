(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9a59f013"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0158":function(t,e,a){},"0cae":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"noTasks"},[a("div",{staticClass:"animate__animated animate__fadeInUp"},[a("v-icon",{attrs:{size:"100",color:"primary"}},[t._v(" mdi-check-circle ")]),a("div",{staticClass:"text-h5 primary--text"},[t._v(" No Tasks ")])],1)])},r=[],i={},o=i,s=(a("69e2"),a("2877")),c=a("6544"),l=a.n(c),u=a("132d"),d=Object(s["a"])(o,n,r,!1,null,"bf139c2a",null);e["default"]=d.exports;l()(d,{VIcon:u["a"]})},"12d7":function(t,e,a){},"19a5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{ref:"dialog",attrs:{value:!0,"return-value":t.date,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.$store.dispatch("setDateTask",{id:t.task.id,date:t.date}),t.$emit("close")}}},[t._v(" OK ")])],1)],1)},r=[],i={props:["task"],data:function(){return{date:null}},mounted:function(){if(console.log(this.task),this.task.date){var t=this.task.date.getFullYear()+"-"+(this.task.date.getMonth()+1)+"-"+this.task.date.getDate();this.date=t}}},o=i,s=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),d=a("2e4b"),f=a("169a"),v=a("2fa4"),p=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=p.exports;l()(p,{VBtn:u["a"],VDatePicker:d["a"],VDialog:f["a"],VSpacer:v["a"]})},2184:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{staticClass:"pa-2",attrs:{outlined:"",label:"Cadastar novo cartão","append-icon":"mdi-plus","hide-details":"",clearable:""},on:{"click:append":t.addTask,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)}},model:{value:t.newTaskTitle,callback:function(e){t.newTaskTitle=e},expression:"newTaskTitle"}})},r=[],i={name:"InputTask",data:function(){return{newTaskTitle:""}},methods:{addTask:function(){this.$store.dispatch("addTask",this.newTaskTitle),this.newTaskTitle=""}}},o=i,s=a("2877"),c=a("6544"),l=a.n(c),u=a("8654"),d=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=d.exports;l()(d,{VTextField:u["a"]})},2665:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{color:"",text:""},on:{click:function(e){return t.$store.commit("hiddeSnackBar")}}},"v-btn",n,!1),[t._v(" Fechar ")])]}}]),model:{value:t.$store.state.SnackBar.show,callback:function(e){t.$set(t.$store.state.SnackBar,"show",e)},expression:"$store.state.SnackBar.show"}},[t._v(" "+t._s(t.$store.state.SnackBar.text)+" ")])},r=[],i={},o=i,s=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),d=a("2db4"),f=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=f.exports;l()(f,{VBtn:u["a"],VSnackbar:d["a"]})},"436b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list",{staticClass:"pa-0",attrs:{flat:""}},[a("v-list-item-group",{attrs:{"active-class":""}},[a("draggable",{attrs:{list:t.tasks,handle:".handle"}},t._l(t.tasks,(function(t){return a("Task",{key:t.id,attrs:{task:t}})})),1)],1)],1)},r=[],i=a("b76a"),o=a.n(i),s={name:"List",components:{Task:a("58a7").default,draggable:o.a},computed:{tasks:{get:function(){return this.$store.getters.taskFiltered},set:function(t){console.log("salvouORdem"),this.$store.commit("setNewOrderTasks",t)}}}},c=s,l=a("2877"),u=a("6544"),d=a.n(u),f=a("8860"),v=a("1baa"),p=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=p.exports;d()(p,{VList:f["a"],VListItemGroup:v["a"]})},4426:function(t,e,a){},"45ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{staticClass:"expanding-search mt-1",class:{close:!t.showSearch&&!t.$store.state.search},attrs:{value:t.$store.state.search,placeholder:"Buscar","prepend-inner-icon":"mdi-magnify",filled:"",dense:"",clearable:""},on:{focus:function(e){t.showSearch=!t.showSearch},blur:function(e){return t.hiddeSearch()},input:function(e){return t.$store.commit("search",e)}}})},r=[],i={name:"Search",data:function(){return{showSearch:!1,textSearch:""}},methods:{hiddeSearch:function(){this.showSearch=!this.showSearch,this.textSearch=""}}},o=i,s=(a("fa60"),a("2877")),c=a("6544"),l=a.n(c),u=a("8654"),d=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=d.exports;l()(d,{VTextField:u["a"]})},"478c":function(t,e,a){},"4cb2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[t.$store.state.sorting?a("v-btn",{staticClass:"handle",attrs:{icon:"",color:"primary"}},[a("v-icon",[t._v("mdi-drag-horizontal-variant")])],1):a("v-btn",t._g(t._b({attrs:{icon:"",color:"primary"}},"v-btn",r,!1),n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",t._l(t.items,(function(e,n){return a("v-list-item",{key:n,on:{click:function(e){return t.handleClick(n)}}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1),t.dialog.edit?a("DialogEdit",{attrs:{task:t.task},on:{close:function(e){t.dialog.edit=!1}}}):t._e(),t.dialog.date?a("DialogDate",{attrs:{task:t.task},on:{close:function(e){t.dialog.date=!1}}}):t._e(),t.dialog.delete?a("DialogDelete",{attrs:{task:t.task},on:{close:function(e){t.dialog.delete=!1}}}):t._e()],1)},r=[],i={name:"TaskMenu",props:["task"],components:{DialogEdit:a("91db").default,DialogDate:a("19a5").default,DialogDelete:a("ee45").default},data:function(){return{dialog:{edit:!1,date:!1,delete:!1},items:[{title:"Editar",icon:"mdi-pencil",click:function(){this.dialog.edit=!0}},{title:"Data",icon:"mdi-calendar",click:function(){this.dialog.date=!0}},{title:"Excluir",icon:"mdi-delete",click:function(){this.dialog.delete=!0}},{title:"Mover",icon:"mdi-drag-horizontal-variant",click:function(){this.$store.commit("sortTask")}}]}},methods:{handleClick:function(t){this.items[t].click.call(this)}}},o=i,s=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),d=a("132d"),f=a("8860"),v=a("da13"),p=a("34c3"),k=a("5d23"),m=a("e449"),h=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=h.exports;l()(h,{VBtn:u["a"],VIcon:d["a"],VList:f["a"],VListItem:v["a"],VListItemIcon:p["a"],VListItemTitle:k["c"],VMenu:m["a"]})},"4e3d":function(t,e,a){"use strict";a("0158")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-img",{staticClass:"px-6 pt-2",attrs:{src:a("aa82"),height:"180",gradient:"to top right, rgba(19,04,122,.5), rgba(128,104,199,.8)"}},[n("center",[n("v-avatar",{attrs:{size:"130"}},[n("img",{attrs:{src:a("ba33"),alt:"TodoList"}})]),n("div",{staticClass:"white--text text-subtitle-1 font-weight-bold mt-2"},[t._v(" Lista de Cartões ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",src:a("aa82"),prominent:"",height:"180px"},scopedSlots:t._u([{key:"img",fn:function(e){var a=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(19,04,122,.5), rgba(128,104,199,.8)"}},"v-img",a,!1))]}}])},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-app-bar-title",[n("div",{staticClass:"text-h5"},[t._v(" Cadastro de cartões ")]),n("div",[n("InputTask",{staticStyle:{padding:"0 !important","margin-top":"5%"},attrs:{width:"100%",id:"createTaskInput"}})],1)]),n("v-spacer"),n("Search")],1),n("v-main",[n("router-view"),n("SnackBar")],1)],1)},i=[],o={components:{Search:a("45ab").default,SnackBar:a("2665").default,InputTask:a("2184").default},data:function(){return{drawer:null,items:[{title:"Cartões",icon:"mdi-format-list-checks",to:"/"},{title:"Sobre",icon:"mdi-help-box",to:"/about"}],right:null}},mounted:function(){this.$store.dispatch("getTasks")}},s=o,c=(a("afc8"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),f=a("40dc"),v=a("5bc1"),p=a("bb78"),k=a("8212"),m=a("ce7e"),h=a("132d"),g=a("adda"),b=a("8860"),T=a("da13"),w=a("5d23"),_=a("34c3"),x=a("f6c4"),V=a("f774"),y=a("2fa4"),S=Object(c["a"])(s,r,i,!1,null,"2faae824",null),C=S.exports;u()(S,{VApp:d["a"],VAppBar:f["a"],VAppBarNavIcon:v["a"],VAppBarTitle:p["a"],VAvatar:k["a"],VDivider:m["a"],VIcon:h["a"],VImg:g["a"],VList:b["a"],VListItem:T["a"],VListItemContent:w["b"],VListItemIcon:_["a"],VListItemTitle:w["c"],VMain:x["a"],VNavigationDrawer:V["a"],VSpacer:y["a"]});a("d3b7"),a("3ca3"),a("ddb0");var $=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Home"},[t.$store.state.tasks.length?a("div",[a("ListTasks")],1):a("div",{staticClass:"noTasks"},[a("NoTasks")],1),a("div",[t.$store.state.sorting?a("BtnDrag"):t._e()],1)])},B=[],O={name:"Todo",components:{ListTasks:a("436b").default,NoTasks:a("0cae").default,BtnDrag:a("c241").default}},L=O,j=Object(c["a"])(L,D,B,!1,null,"4100ad53",null),I=j.exports;n["a"].use($["a"]);var E=[{path:"/",name:"Todo",component:I},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],A=new $["a"]({routes:E,mode:"history"}),F=A,M=(a("ac1f"),a("841c"),a("4de4"),a("caad"),a("2532"),a("2f62")),P=a("af0d"),N=new P["a"]("db");n["a"].use(M["a"]);var z=new M["a"].Store({state:{search:null,tasks:[],SnackBar:{show:!1,text:""},sorting:!1},mutations:{search:function(t,e){t.search=e},addTask:function(t,e){t.tasks.push(e)},updateTask:function(t,e){if(e.newTitle){var a=t.tasks.filter((function(t){return t.id===e.id}))[0];console.log(a),a.title=e.newTitle}},doneTask:function(t,e){var a=t.tasks.filter((function(t){return t.id===e}))[0];a.done=!a.done},deleteTask:function(t,e){t.tasks=t.tasks.filter((function(t){return t.id!==e}))},setDateTask:function(t,e){var a=t.tasks.filter((function(t){return t.id===e.id}))[0];a.date=e.date.toLocaleString()},showSnackBar:function(t,e){var a=0;t.SnackBar.show&&(t.SnackBar.show=!1,a=300),setTimeout((function(){t.SnackBar.show=!0,t.SnackBar.text=e}),a)},hiddeSnackBar:function(t){t.SnackBar.show=!1},setTasks:function(t,e){t.tasks=e},sortTask:function(t){t.sorting=!t.sorting}},actions:{addTask:function(t,e){var a=t.commit;if(e){var n={id:Date.now(),title:e,done:!1,date:Date.now()};N.collection("tasks").add(n).then((function(){a("addTask",n),a("showSnackBar","Cartão adicionado com sucesso!")}))}},doneTask:function(t,e){var a=t.commit,n=t.state;a("doneTask",e);var r=n.tasks.filter((function(t){return t.id==e}))[0];N.collection("tasks").doc({id:e}).update({done:r.done})},updateTask:function(t,e){var a=t.commit;e.newTitle&&(a("updateTask",e),N.collection("tasks").doc({id:e.id}).update({title:e.newTitle}),a("showSnackBar","Cartão atualizado com sucesso!"))},deleteTask:function(t,e){var a=t.commit;a("deleteTask",e),N.collection("tasks").doc({id:e}).delete(),a("showSnackBar","Cartão apagado do sistema!")},getTasks:function(t){var e=t.commit;N.collection("tasks").get().then((function(t){e("setTasks",t)}))},setDateTask:function(t,e){var a=t.commit;console.log(e),e.date&&(a("setDateTask",e),N.collection("tasks").doc({id:e.id}).update({date:e.date}))}},getters:{taskFiltered:function(t){return t.search?t.tasks.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())})):t.tasks}},modules:{}}),q=a("f309");n["a"].use(q["a"]);var J=new q["a"]({}),Y=a("9483");Object(Y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({router:F,store:z,vuetify:J,render:function(t){return t(C)}}).$mount("#app")},"58a7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list-item",{staticClass:"white",class:{"blue lighten-5":t.task.done},attrs:{ripple:!1},on:{click:function(e){return t.$store.dispatch("doneTask",t.task.id)}},scopedSlots:t._u([{key:"default",fn:function(){return[a("v-list-item-action",[a("v-checkbox",{attrs:{"input-value":t.task.done,color:"primary"}})],1),a("v-list-item-content",[a("v-list-item-title",{class:{"text-decoration-line-through":t.task.done}},[a("v-btn",{class:{error:!t.task.done}},[t._v(" "+t._s(t.task.id)+" ")]),t._v(" "+t._s(t.task.title)+" ")],1)],1),a("v-list-item-action",[t.task.date?a("v-list-item-action-text",[a("v-icon",{attrs:{small:""}},[t._v(" mdi-calendar ")]),t._v(" "+t._s(t._f("dataAtualFormatada")(t.task.date))+" ")],1):t._e()],1),a("TaskMenu",{attrs:{task:t.task}})]},proxy:!0}])}),a("v-divider")],1)},r=[],i=(a("d3b7"),a("25f0"),{name:"Task",props:["task"],components:{TaskMenu:a("4cb2").default},filters:{dataAtualFormatada:function(t){var e=new Date(new Date(t).getTime()+864e5),a=e.getDate(new Date).toString(),n=1==a.length?"0"+a:a,r=(e.getMonth()+1).toString(),i=1==r.length?"0"+r:r,o=e.getFullYear();return n+"/"+i+"/"+o}}}),o=i,s=(a("caca"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=a("ac7c"),f=a("ce7e"),v=a("132d"),p=a("da13"),k=a("1800"),m=a("5d23"),h=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=h.exports;l()(h,{VBtn:u["a"],VCheckbox:d["a"],VDivider:f["a"],VIcon:v["a"],VListItem:p["a"],VListItemAction:k["a"],VListItemActionText:m["a"],VListItemContent:m["b"],VListItemTitle:m["c"]})},"69e2":function(t,e,a){"use strict";a("4426")},9022:function(t,e,a){},"91db":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:!0,persistent:"","max-width":"290"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" Editar Cartão? ")]),a("v-card-text",[t._v(" Dados co cartão "),a("v-text-field",{staticClass:"bg-color-input",on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$store.dispatch("updateTask",{id:t.task.id,newTitle:t.newTitle}),t.$emit("close")}},model:{value:t.newTitle,callback:function(e){t.newTitle=e},expression:"newTitle"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancelar ")]),a("v-btn",{attrs:{color:"red darken-3",text:"",disabled:!t.newTitle||t.newTitle.toLowerCase()===t.task.title.toLowerCase()},on:{click:function(e){t.$store.dispatch("updateTask",{id:t.task.id,newTitle:t.newTitle}),t.$emit("close")}}},[t._v(" Salvar ")])],1)],1)],1)},r=[],i={name:"DialogDelete",props:["task"],data:function(){return{newTitle:this.task.title}}},o=i,s=(a("4e3d"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=a("b0af"),f=a("99d9"),v=a("169a"),p=a("2fa4"),k=a("8654"),m=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=m.exports;l()(m,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VDialog:v["a"],VSpacer:p["a"],VTextField:k["a"]})},"99ec":function(t,e,a){},aa82:function(t,e,a){t.exports=a.p+"img/cartoes-caixa-capa.00ead8ba.png"},afc8:function(t,e,a){"use strict";a("12d7")},ba33:function(t,e,a){t.exports=a.p+"img/card.cc4f7fe0.png"},c241:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{id:"btnDrag",elevation:"8",color:"primary"},on:{click:function(e){return t.$store.commit("sortTask")}}},[t._v(" Ok ")])},r=[],i={name:"BtnDrag"},o=i,s=(a("c517"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=d.exports;l()(d,{VBtn:u["a"]})},c517:function(t,e,a){"use strict";a("9022")},caca:function(t,e,a){"use strict";a("99ec")},ee45:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:!0,persistent:"","max-width":"290"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" Excluir esse cartão? ")]),a("v-card-text",[t._v("Tem certeza de excluir este cartão e não reutilizado.")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("close")}}},[t._v(" Cancelar ")]),a("v-btn",{attrs:{color:"red darken-3",text:""},on:{click:function(e){return t.$store.dispatch("deleteTask",t.task.id)}}},[t._v(" Sim ")])],1)],1)],1)},r=[],i={name:"DialogDelete",props:["task"]},o=i,s=a("2877"),c=a("6544"),l=a.n(c),u=a("8336"),d=a("b0af"),f=a("99d9"),v=a("169a"),p=a("2fa4"),k=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=k.exports;l()(k,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VDialog:v["a"],VSpacer:p["a"]})},fa60:function(t,e,a){"use strict";a("478c")}});
//# sourceMappingURL=app.c0aa739f.js.map