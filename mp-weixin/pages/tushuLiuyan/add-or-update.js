(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tushuLiuyan/add-or-update"],{"2e4b":function(e,t,n){"use strict";(function(e){n("48e8");r(n("66fd"));var t=r(n("fa11"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"951c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,a,i){try{var o=e[a](i),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function o(e){a(i,r,u,o,c,"next",e)}function c(e){a(i,r,u,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("b7aa"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{cross:"",ro:{tushuId:!1,yonghuId:!1,tushuLiuyanText:!1,insertTime:!1,replyText:!1,updateTime:!1,createTime:!1},ruleForm:{tushuId:"",yonghuId:"",tushuLiuyanText:"",insertTime:"",replyText:"",updateTime:"",createTime:""},user:{}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var t=this;return i(r.default.mark((function n(){var u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.id){n.next=6;break}return t.ruleForm.id=e.id,n.next=4,t.$api.info("tushuLiuyan",t.ruleForm.id);case 4:u=n.sent,t.ruleForm=u.data;case 6:e.tushuId&&(t.ruleForm.tushuId=e.tushuId);case 7:case"end":return n.stop()}}),n)})))()},methods:{insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},updateTimeConfirm:function(e){console.log(e),this.ruleForm.updateTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.ruleForm.tushuLiuyanText){n.next=3;break}return t.$utils.msg("留言内容不能为空"),n.abrupt("return");case 3:if(!t.ruleForm.id){n.next=8;break}return n.next=6,t.$api.update("tushuLiuyan",t.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,t.$api.save("tushuLiuyan",t.ruleForm);case 10:e.setStorageSync("pingluenStateState",!0),t.$utils.msgBack("提交成功");case 12:case"end":return n.stop()}}),n)})))()},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,u=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(n,"-").concat(r,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},a89f:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"b7aa"))}},u=function(){var e=this,t=e.$createElement;e._self._c},a=[]},ce8e:function(e,t,n){"use strict";var r=n("f04e"),u=n.n(r);u.a},e06e:function(e,t,n){"use strict";n.r(t);var r=n("951c"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},f04e:function(e,t,n){},fa11:function(e,t,n){"use strict";n.r(t);var r=n("a89f"),u=n("e06e");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("ce8e");var i,o=n("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"4ba0c700",null,!1,r["a"],i);t["default"]=c.exports}},[["2e4b","common/runtime","common/vendor"]]]);