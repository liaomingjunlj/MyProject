webpackJsonp([0],{138:function(t,e,n){var o=n(52)(n(153),n(175),null,null);t.exports=o.exports},139:function(t,e,n){"use strict";e.__esModule=!0;var o=n(140),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},140:function(t,e,n){t.exports={default:n(141),__esModule:!0}},141:function(t,e,n){n(145),t.exports=n(3).Object.assign},142:function(t,e,n){"use strict";var o=n(55),i=n(143),s=n(144),r=n(56),a=n(54),c=Object.assign;t.exports=!c||n(23)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o})?function(t,e){for(var n=r(t),c=arguments.length,u=1,l=i.f,f=s.f;c>u;)for(var p,d=a(arguments[u++]),h=l?o(d).concat(l(d)):o(d),A=h.length,m=0;A>m;)f.call(d,p=h[m++])&&(n[p]=d[p]);return n}:c},143:function(t,e){e.f=Object.getOwnPropertySymbols},144:function(t,e){e.f={}.propertyIsEnumerable},145:function(t,e,n){var o=n(14);o(o.S+o.F,"Object",{assign:n(142)})},146:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(139),i=n.n(o),s=n(53);e.default={data:function(){return{isSelected:"chat"}},computed:i()({},n.i(s.b)(["newMessage"]),{routeName:function(){return this.$route.fullPath.split("index/")[1].split("/")[0]}}),created:function(){},mounted:function(){this.isSelected=this.routeName},methods:i()({},n.i(s.c)(["UPDATE_NEWMESSAGE","UPDATE_CURRENTPAGE"]),{router:function(t){this.isSelected=t,this.$route.name!==t&&("income"===t?this.$router.push({name:"income",params:{type:0}}):this.$router.push({name:t}),this.$router.push({name:t}))}}),watch:{routeName:function(t){this.isSelected=this.routeName,this.UPDATE_CURRENTPAGE(this.routeName),"chat"===this.routeName&&this.UPDATE_NEWMESSAGE(0)}}}},147:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(139),i=n.n(o),s=n(53);e.default={name:"Header",data:function(){return{showLeft:!0}},computed:i()({},n.i(s.b)(["title"]),{name:function(){return this.$route.name}}),methods:{save:function(){alert(this.title)},back:function(){this.$router.go(-1)},checkIsTop:function(){var t=["login","contactBook","activity","account"],e=this.$route.name;t.indexOf(e)>=0?this.showLeft=!1:this.showLeft=!0}},mounted:function(){this.checkIsTop()},watch:{name:function(){this.checkIsTop()}}}},153:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(139),i=n.n(o),s=n(170),r=n.n(s),a=n(169),c=n.n(a),u=n(53);e.default={components:{topHead:r.a,foot:c.a},created:function(){console.log(1);var t=localStorage.getItem("userInfo");t&&(t=JSON.parse(localStorage.getItem("userInfo")),this.LOGIN_SUCCESS(t),this.$socket.emit("join",{userId:t.id,nickname:t.nickname}))},mounted:function(){console.log(2),this.isLogin||this.$router.push({name:"login"})},computed:i()({},n.i(u.b)(["isLogin"])),methods:i()({},n.i(u.c)(["LOGIN_SUCCESS"]))}},159:function(t,e,n){e=t.exports=n(131)(!0),e.push([t.i,".iconfont{font-size:20px!important;display:block;margin-bottom:5px}.is-selected{background-color:#fafafa!important;border-top:1px solid #eaeaea}.chat{position:relative}.chat .circle{position:absolute;top:-5px;width:16px;height:16px;line-height:18px;border-radius:50%;background:red;margin-left:20px;font-size:12px;color:#fff}","",{version:3,sources:["/Users/yif/Desktop/yif-chat/src/components/footer/index.vue"],names:[],mappings:"AACA,UAAW,yBAA2B,cAAe,iBAAmB,CACvE,AACD,aAAc,mCAAoC,4BAA8B,CAC/E,AACD,MAAO,iBAAmB,CACzB,AACD,cACE,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb",file:"index.vue",sourcesContent:["\n.iconfont {font-size: 20px !important;display: block;margin-bottom: 5px;\n}\n.is-selected {background-color: #fafafa!important;border-top: 1px solid #eaeaea;\n}\n.chat {position: relative;\n}\n.chat .circle {\n  position: absolute;\n  top: -5px;\n  width: 16px;\n  height: 16px;\n  line-height: 18px;\n  border-radius: 50%;\n  background: red;\n  margin-left: 20px;\n  font-size: 12px;\n  color: #FFF;\n}\n"],sourceRoot:""}])},166:function(t,e,n){var o=n(159);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(132)("185a11bc",o,!0)},169:function(t,e,n){n(166);var o=n(52)(n(146),n(176),null,null);t.exports=o.exports},170:function(t,e,n){var o=n(52)(n(147),n(173),null,null);t.exports=o.exports},173:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{title:t.title}})],1)},staticRenderFns:[]}},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainIndex"},[n("top-head"),t._v(" "),n("router-view"),t._v(" "),n("foot")],1)},staticRenderFns:[]}},176:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-tabbar",[n("mt-tab-item",{class:{"is-selected":"chat"===t.isSelected},attrs:{id:"tab1"},nativeOn:{click:function(e){t.router("chat")}}},[n("i",{staticClass:"icon iconfont chat"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.newMessage,expression:"newMessage"}],staticClass:"circle"},[t._v(t._s(t.newMessage<99?t.newMessage:"..."))]),t._v("")]),t._v("\n        聊天室\n    ")]),t._v(" "),n("mt-tab-item",{class:{"is-selected":"me"===t.isSelected},attrs:{id:"tab4"},nativeOn:{click:function(e){t.router("me")}}},[n("i",{staticClass:"icon iconfont"},[t._v("")]),t._v("\n        ???\n    ")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.6b92ba72874e44ecb24d.js.map