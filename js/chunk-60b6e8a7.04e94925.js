(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60b6e8a7"],{bdbd:function(t,e,a){},c3aa:function(t,e,a){"use strict";a("bdbd")},cc0f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"participate-pledge"},[a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number",placeholder:t.$t("participatePledge.text1")},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),a("van-button",{on:{click:t.allIn}},[t._v(t._s(t.$t("participatePledge.text2")))])],1),a("div",{staticClass:"balance"},[a("span",[t._v(t._s(t.$t("participatePledge.text3"))+" "),a("span",[t._v(t._s(t.balances.toFixed(4)))])]),a("router-link",{directives:[{name:"show",rawName:"v-show",value:"BoardofDirectors"!==this.showPopup,expression:"this.showPopup !== 'BoardofDirectors'"}],attrs:{to:""}},[t._v(t._s(t.$t("participatePledge.text4")))])],1),a("van-button",{directives:[{name:"show",rawName:"v-show",value:"none"===t.transactionState,expression:"transactionState === 'none'"}],staticClass:"double-button",on:{click:t.deposit}},[t._v(t._s(t.btnText))]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:"none"!==t.transactionState,expression:"transactionState !== 'none'"}],staticClass:"double-button",attrs:{loading:"","loading-text":t.btnText}})],1)},s=[],o=(a("b0c0"),a("b680"),a("e7e5"),a("d399")),i=(a("96cf"),a("1da1")),r=a("5530"),c=a("ade3"),d=(a("66b9"),a("b650")),l=a("2f62"),u={components:Object(c["a"])({},d["a"].name,d["a"]),data:function(){return{amount:"",balance:0,allowance:"0".toBN(),transactionState:"none",id:null,lpbalance:0,bodbalance:0,lpallowance:"0".toBN(),bodallowance:"0".toBN()}},computed:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["showPopup"])),{},{btnText:function(){if(this.allowance.lt(this.amount))return this.$t("participatePledge.text5");switch(this.transactionState){case"approving":return this.$t("participatePledge.text6");case"trading":return this.$t("participatePledge.text7");default:return this.$t("participatePledge.text8")}},balances:function(){return"BoardofDirectors"==this.showPopup?this.balance=this.bodbalance:this.balance=this.lpbalance}}),created:function(){this.init()},methods:{allIn:function(){return"BoardofDirectors"==this.showPopup?this.amount=this.bodbalance:this.amount=this.lpbalance},approve:function(){var t=this,e="BoardofDirectors"==this.showPopup?this.$contracts.DAOToken:this.$contracts.Pair;e.methods.approve(this.$contracts.TokenBiggings._address,this.amount.toBN().times(100).toFixed().toWei()).send({from:this.$address}).on("transactionHash",(function(e){t.transactionState="approving"})).on("receipt",function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(n){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.methods.allowance(t.$address,t.$contracts.TokenBiggings._address).call({from:t.$address});case 2:t.allowance=a.sent.fromWei().toBN(),o["a"].success(t.$t("participatePledge.text9")),t.transactionState="none";case 5:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).on("error",(function(e){t.transactionState="none",console.log(e)}))},deposit:function(){var t=this;if(console.log(this.showPopup),"BoardofDirectors"==this.showPopup?this.id=2:this.id=0,this.amount<=0)return o["a"].fail(this.$t("participatePledge.text10"));if(this.balance.toBN().lt(this.amount))return o["a"].fail(this.$t("participatePledge.text11"));if(this.allowance.lt(this.amount))return this.approve();var e=this.$contracts.TokenBiggings.methods.deposit(this.id,this.amount.toWei(),this.$address);e.call({from:this.$address},(function(a,n){a||e.send({from:t.$address}).on("transactionHash",(function(e){t.transactionState="trading"})).on("receipt",(function(e){t.init(),t.$emit("reload"),o["a"].success(t.$t("participatePledge.text12")),t.amount="",t.transactionState="none"})).on("error",(function(e){t.transactionState="none",console.log(e)}))}))},init:function(){var t=this,e=new this.$web3.BatchRequest;e.add(this.$contracts.DAOToken.methods.allowance(this.$address,this.$contracts.TokenBiggings._address).call.request({from:this.$address})),e.add(this.$contracts.DAOToken.methods.balanceOf(this.$address).call.request({from:this.$address})),e.add(this.$contracts.Pair.methods.allowance(this.$address,this.$contracts.TokenBiggings._address).call.request({from:this.$address})),e.add(this.$contracts.Pair.methods.balanceOf(this.$address).call.request({from:this.$address})),e.requestManager.sendBatch(e.requests,(function(e,a){e||(t.bodallowance=a[0].result.decode(["uint256"]).fromWei().toBN(),t.bodbalance=a[1].result.decode(["uint256"]).fromWei(),t.lpallowance=a[2].result.decode(["uint256"]).fromWei().toBN(),t.lpbalance=a[3].result.decode(["uint256"]).fromWei())}))}}},h=u,p=h,f=(a("c3aa"),a("2877")),m=Object(f["a"])(p,n,s,!1,null,"2c630092",null);e["default"]=m.exports}}]);