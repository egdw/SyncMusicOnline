webpackJsonp([1],{"991W":function(e,t){},LB6Z:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),t("router-view")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"nav"}},[t("div",{staticClass:"nav_title"},[this._v("音乐同步播放"),t("span",{staticClass:"nav_desc"},[this._v("by:恶搞大王(吾爱破解首发)")])])])}]};var a=i("VU/8")({name:"App"},n,!1,function(e){i("baGB")},null,null).exports,l=i("/ocq"),r=i("aozt"),o=i.n(r),d=i("e7x4"),_=i.n(d),u={data:function(){return{songlistid:""}},methods:{openroom:function(){""==this.songlistid?_()({title:"错误！",text:"不能为空!",type:"error",confirmButtonText:"重新输入"}):this.songlistid.length<=6?_()({title:"错误！",text:"不符合规范!",type:"error",confirmButtonText:"重新输入"}):this.createJson()},createJson:function(){var e=this;if(-1!=e.songlistid.indexOf("playlist/")){var t=new RegExp("playlist/\\d*").exec(e.songlistid)[0].replace("playlist/","");e.songlistid=t}if(-1!=e.songlistid.indexOf("id=")){var i=e.songlistid.substr(e.songlistid.indexOf("id=")+3);console.log(i);t=new RegExp("(id=)\\d*").exec(e.songlistid)[0].replace("id=","");e.songlistid=t}if(-1!=e.songlistid.indexOf("Music")){var s=e.songlistid.lastIndexOf("/")+1,n=e.songlistid.substr(s);e.$router.push("/Music/"+n+"/1")}else o.a.post("https://api.myjson.com/bins",{params:{data:'{"sync":{"listid":"'+e.songlistid+'","time":"0","index":"-1","mode":"none","status":"true","updatetime":"'+(new Date).getTime()+'"}}'}}).then(function(t){if(null!=t.data&&null!=t.data.uri){var i=t.data.uri,s=i.lastIndexOf("/");-1!=s?(i=i.substr(s+1),e.$router.push("/Music/"+i+"/1")):_()({title:"创建房间失败！",text:"请稍后再试!",type:"error",confirmButtonText:"了解"})}}).catch(function(e){console.log(e),_()({title:"创建房间失败！",text:e,type:"error",confirmButtonText:"了解"})})}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"search"}},[i("div",{attrs:{id:"search_input_div"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.songlistid,expression:"songlistid"}],attrs:{type:"text",placeholder:"歌单id或邀请链接"},domProps:{value:e.songlistid},on:{input:function(t){t.target.composing||(e.songlistid=t.target.value)}}}),i("button",{on:{click:e.openroom}},[e._v("开始")])]),e._v(" "),i("div",{attrs:{id:"search_tips"}},[i("center",[i("a",{attrs:{href:"https://github.com/egdw/SyncMusic/blob/master/books/use.md"}},[e._v("如何使用?软件错误?提意见?软件失效?点击这里.")])])],1)])},staticRenderFns:[]};var p=i("VU/8")(u,c,!1,function(e){i("SAQq")},"data-v-9103366a",null).exports,m=i("VJls"),f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isGetDataComplete?i("aplayer",{ref:"musicplayer",class:{hidden_controller:!e.isRoomOwner},attrs:{music:e.music,preload:"auto",list:e.musiclist}}):e._e(),e._v(" "),e.firstopen?i("div",{attrs:{id:"HelloDiv"}},[i("div",{attrs:{id:"agereeButton"},on:{click:e.agree}},[i("span",[e._v("开始使用")])])]):e._e(),e._v(" "),i("audio",{attrs:{id:"emitaudio",src:"static/audio/emit.mp3"}})],1)},staticRenderFns:[]};var h=function(e){i("LB6Z")},v=i("VU/8")(m.a,f,!1,h,null,null).exports;s.default.use(l.a);var g=new l.a({routes:[{path:"/",name:"Station",component:p},{path:"/Music/:configid/:admin",name:"Music",component:v},{path:"/Music/:configid/",name:"Music",component:v}]});i("991W");s.default.config.productionTip=!1,new s.default({el:"#app",router:g,components:{App:a},template:"<App/>"})},SAQq:function(e,t){},VJls:function(module,__webpack_exports__,__webpack_require__){"use strict";(function($){var __WEBPACK_IMPORTED_MODULE_0_vue_aplayer__=__webpack_require__("Ixwk"),__WEBPACK_IMPORTED_MODULE_0_vue_aplayer___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_aplayer__),__WEBPACK_IMPORTED_MODULE_1_axios__=__webpack_require__("aozt"),__WEBPACK_IMPORTED_MODULE_1_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__),__WEBPACK_IMPORTED_MODULE_2_sweetalert2__=__webpack_require__("e7x4"),__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);__WEBPACK_IMPORTED_MODULE_0_vue_aplayer___default.a.disableVersionBadge=!0,__webpack_exports__.a={components:{Aplayer:__WEBPACK_IMPORTED_MODULE_0_vue_aplayer___default.a},methods:{setEventListener:function(){var e=document.getElementsByTagName("audio")[0];e.addEventListener("seekd",this.seekfunction),e.addEventListener("pause",this.sendJson),e.addEventListener("canplay",this.setplay),e.addEventListener("play",this.sendJson),e.addEventListener("ended",this.enddealy)},cancleEventListener:function(){var e=document.getElementsByTagName("audio")[0];e.removeEventListener("seekd",this.sendJson),e.removeEventListener("pause",this.sendJson),e.removeEventListener("canplay",this.setplay),e.removeEventListener("play",this.sendJson),e.addEventListener("ended",this.enddealy)},initData:function initData(){var self=this;__WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(this.configurl,{}).then(function(response){var data=response.data;data=eval("("+data.params.data+")").sync,self.songid=data.listid,void 0!=data.listid&&""!=data.listid?$.getJSON("https://163.fczbl.vip/playlist/detail",{id:data.listid},function(e,t,i){console.log(e);var s=0;if("200"==e.code){var n=e.playlist.tracks,a=new Array;if(console.log(n),n.forEach(function(e){var t=e.name,i=e.id,n="未知";null!=e.ar[0]&&null!=e.ar[0].name&&(n=e.ar[0].name);var l="";null!=e.al&&null!=e.al.picUrl&&(l=e.al.picUrl);var r="https://api.paugram.com/netease/?play=true&id="+i;e.copyright;a[s]={title:t,artist:n,src:r,pic:l},s++}),self.music=a[0],self.musiclist=a,self.isGetDataComplete=!0,document.removeEventListener("touchstart",self.touchendVoice),self.isRoomOwner){var l=window.location.host,r=window.location.href;r=r.substr(0,r.length-2),l=l+"/Music/"+self.$route.params.configid;var o="复制下面的邀请链接发送给好友打开即可开始一起欣赏美妙的音乐";-1==r.indexOf("localhost")&&-1==r.indexOf("0.0.0.0")&&-1==r.indexOf("127.0.0.1")||(o="复制下面的链接给好友输入到主页即可连接"),__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({type:"success",title:o,text:r,confirmButtonText:"复制完成"})}self.startInterval()}else __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({type:"error",html:"歌单不存在"}),self.$route.push("/")}):(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({type:"error",html:"获取数据失败"}),self.isGetDataComplete=!1)})},enddealy:function(){this.isEnd=!0},startInterval:function(){var e=this;this.firstopen=!1,this.intervalObj=setInterval(function(){0==e.isEnd?e.getJson():setTimeout(function(){e.isEnd=!1,e.sendJson()},4e3)},4e3),setTimeout(function(){null!=e.$refs.musicplayer&&void 0!=e.$refs.musicplayer?(e.player=e.$refs.musicplayer.$children,e.setEventListener()):console.log("没有找到musicplayer")},500)},setplay:function(){this.$refs.musicplayer.play(),this.sendJson()},setpause:function(){this.$refs.musicplayer.pause(),this.sendJson()},setPlayTime:function(e){document.getElementsByTagName("audio")[0].currentTime=e},setPlayIndex:function(e){this.$refs.musicplayer.onSelectSong(this.musiclist[e])},getPlayIndex:function(){return this.player[2]._props.playIndex},getPlayTime:function(){var e=new Array;return e[0]=this.player[1]._props.stat.duration,e[1]=this.player[1]._props.stat.loadedTime,e[2]=this.player[1]._props.stat.playedTime,e},getPlayStatus:function(){return String(this.$refs.musicplayer.isPlaying)},getPlayRandom:function(){var e=this.$refs.musicplayer.internalShuffle;return console.log(e),e},agree:function(){var e=this.$route.params.configid;"1"==this.$route.params.admin&&(this.isRoomOwner=!0),void 0!=e&&""!=e&&null!=e||this.$route.push("/"),this.configurl="https://api.myjson.com/bins/"+e,this.initData()},getJson:function getJson(){var self=this;null!=self.musiclist&&null!=self.music&&(self.isRoomOwner||(__WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(self.configurl,{}).then(function(response){var data=response.data;if(data=eval("("+data.params.data+")").sync,void 0!=data.updatetime){var othertime=parseFloat(data.time),totaltime=self.getPlayTime()[0],nowtime=self.getPlayTime()[2],updatetime=parseFloat(data.updatetime),ctime=(new Date).getTime(),usingsecond=((new Date).getTime()-updatetime)/1e3,realtime=othertime+usingsecond;if(0==data.index&&-1==self.getPlayIndex()||-1==data.index&&0==self.getPlayIndex()||data.index==self.getPlayIndex())self.getPlayStatus()!=data.status?(console.log(data.status),"true"==data.status?(console.log("播放"),self.setplay(),Math.abs(realtime-nowtime)>=3&&self.setPlayTime(realtime)):(console.log("暂停"),self.setpause())):Math.abs(realtime-nowtime)>=3&&"false"!=self.getPlayStatus()&&self.setPlayTime(realtime);else if(null==self.preSwitchTime||""==self.preSwitchTime)self.preSwitchTime=(new Date).getTime();else{var second=((new Date).getTime()-self.preSwitchTime)/1e3;second>3&&(self.preSwitchTime=(new Date).getTime(),self.setPlayIndex(data.index))}}}).catch(function(e){__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({title:"请求异常",text:e,type:"error"})}),self.sendJson()))},sendJson:function(){if(""!=this.songid&&void 0!=this.songid&&null!=this.songid){if(this.isRoomOwner){var e=(new Date).getTime();if(null==this.presendtime)this.presendtime=e;else if((e-this.presendtime)/1e3<=2)return void(this.presendtime=e);this.playtime=this.getPlayTime()[2],this.playindex=this.getPlayIndex(),this.playstatus=this.getPlayStatus(),__WEBPACK_IMPORTED_MODULE_1_axios___default.a.put(this.configurl,{params:{data:'{"sync":{"listid":"'+this.songid+'","time":"'+this.getPlayTime()[2]+'","index":"'+this.getPlayIndex()+'","mode":"none","status":"'+this.getPlayStatus()+'","updatetime":"'+e+'"}}'}}).then(function(e){}).catch(function(e){})}}else console.log("发现歌单id不存在!")},sendCurrentJson:function(){this.getJson()},touchendVoice:function(){document.getElementById("emitaudio").play()}},data:function(){return{songid:"",musiclist:null,music:null,isGetDataComplete:!1,controllerstyle:"hidden-controller",firstopen:!0,configurl:"",playtime:"",playindex:"",playmode:"",playstatus:"",random:"123",pre_event_time:0,intervalObj:null,isEnd:!1,presendtime:null,isRoomOwner:!1}},mounted:function(){document.addEventListener("touchend",this.touchendVoice)},beforeDestroy:function(){this.cancleEventListener(),clearInterval(this.intervalObj)}}}).call(__webpack_exports__,__webpack_require__("7t+N"))},baGB:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.68c0fdd3d466894b6288.js.map