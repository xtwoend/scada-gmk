import{a as b,v as x,b as e,c as f,m as y,D as v,C as V,h as w,s as k,d as D,e as N,H as C}from"./vendor.3bd57d60.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();window.axios=b;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const h=(n,t)=>{const s=n.__vccOpts||n;for(const[r,o]of t)s[r]=o;return s},E={props:{options:Array,type:{type:String,default:"select"},default:{type:Array,default:()=>[]}},data(){return{show:!1,selected:this.default}},methods:{showDropdown(){this.show=!this.show},hide(){this.show=!1},groupBy(n,t){return n.reduce((s,r,o)=>{var a;return(s[a=t(r,o,n)]||(s[a]=[])).push(r),s},{})}},computed:{groups(){return this.options[0].hasOwnProperty("group")?this.groupBy(this.options,n=>n.group):this.options}},watch:{selected(n){this.$emit("checked",n)}},directives:{clickOutside:x.directive}},S={class:"dd"},A={id:"list1",class:"dropdown-check-list",tabindex:"100"},L=e.createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-horizontal" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M4 6l8 0"></path><path d="M16 6l4 0"></path><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M4 12l2 0"></path><path d="M10 12l10 0"></path><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M4 18l11 0"></path><path d="M19 18l1 0"></path></svg>',1),B=[L],q={key:2,class:"items"},I={key:0},O=["id","value"],$=["for"],P={key:1},T=["id","value"],U=["for"];function F(n,t,s,r,o,a){const l=e.resolveDirective("click-outside");return e.withDirectives((e.openBlock(),e.createElementBlock("div",S,[e.createElementVNode("div",A,[s.type=="select"?(e.openBlock(),e.createElementBlock("span",{key:0,class:"anchor form-control",onClick:t[0]||(t[0]=(...i)=>a.showDropdown&&a.showDropdown(...i))}," Select Parameter ")):e.createCommentVNode("",!0),s.type=="icon"?(e.openBlock(),e.createElementBlock("span",{key:1,class:"icon",onClick:t[1]||(t[1]=(...i)=>a.showDropdown&&a.showDropdown(...i))},B)):e.createCommentVNode("",!0),o.show?(e.openBlock(),e.createElementBlock("ul",q,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.groups,(i,c)=>(e.openBlock(),e.createElementBlock("li",{key:c},[Array.isArray(i)?(e.openBlock(),e.createElementBlock("div",I,[e.createElementVNode("span",null,e.toDisplayString(c),1),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(i,(d,m)=>(e.openBlock(),e.createElementBlock("div",{key:m},[e.withDirectives(e.createElementVNode("input",{type:"checkbox",id:m,value:d,"onUpdate:modelValue":t[2]||(t[2]=g=>o.selected=g)},null,8,O),[[e.vModelCheckbox,o.selected]]),e.createElementVNode("label",{for:m},e.toDisplayString(n.$filters.textFormat(d.text)),9,$)]))),128))])):e.createCommentVNode("",!0),Array.isArray(i)?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",P,[e.withDirectives(e.createElementVNode("input",{type:"checkbox",id:c,value:i,"onUpdate:modelValue":t[3]||(t[3]=d=>o.selected=d)},null,8,T),[[e.vModelCheckbox,o.selected]]),e.createElementVNode("label",{for:c},e.toDisplayString(n.$filters.textFormat(i.text)),9,U)]))]))),128))])):e.createCommentVNode("",!0)])])),[[l,a.hide]])}const u=h(E,[["render",F]]);const _=["#2f7ed8","#8bbc21","#910000","#1aadce","#492970","#f28f43","#77a1e5","#c42525","#a6c96a","#7cb5ec","#434348","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#2b908f","#f45b5b","#91e8e1","#0d233a"];const M={props:{url:String,title:String,defaultData:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},components:{Datepicker:f,Dropdown:u},data(){return{items:this.defaultData,params:{from:new Date,to:new Date,interval:3600,limit:1e3,select:[]},data:[],realtime:{},fetchReady:!1,colors:_,options:{chart:{type:"line",zoomType:"x",height:600},time:{useUTC:!0},title:{text:this.title,style:{fontSize:"24px",fontWeight:"bold"}},xAxis:{type:"datetime",title:{text:""}},yAxis:[],tooltip:{pointFormat:"{series.name}: <b>{point.y:.2f}</b><br/>",crosshairs:!0,shared:!0},legend:{enabled:!0},series:[]}}},mounted(){this.fetchData()},methods:{interval(n){this.params.interval=n,this.fetchData()},selected(n){this.items=n,this.fetchData()},async fetchData(){this.$refs.chart.chart.showLoading();let n=[],t=[],s=[];this.items.forEach((r,o)=>{let a=this.colors[o];t[o]={title:{text:this.textFormat(r.text),style:{color:a,fontSize:"16px"}},lineColor:a,labels:{style:{color:a},align:"left",x:14},lineWidth:1,opposite:!0},r.range&&(t[o].min=r.range[0],t[o].max=r.range[1]);let l=null,i=r.data.match(/\[(.*?)\]/);i&&(l=parseInt(i[1])),n[o]={id:r.data.split("[",1)[0],colIndex:l,yAxis:o,type:r.type?r.type:"spline",name:this.textFormat(r.text),color:a,lineWidth:1,data:[]},s[o]=r.data}),this.options.series=n,this.options.yAxis=t,this.params.select=s,await axios.get(this.url,{params:this.params}).then(r=>{r.data.data.forEach(a=>{let l=a.unix_time;for(const i in a){let c=this.options.series.findIndex(d=>d.id===i);if(c>=0){let d=this.options.series[c].colIndex;d?this.options.series[c].data.push([l,a[i][d]]):this.options.series[c].data.push([l,a[i]])}}})}),this.$refs.chart.chart.hideLoading()},textFormat(n){let t=n.trim().toLowerCase().split(" ");for(let s=0;s<t.length;s++)t[s]=t[s][0].toUpperCase()+t[s].substr(1);return t.join(" ")}}},z={class:"report"},j={class:"table-wrapper"},W={class:"toolbox"},R={class:"date-selected"},H=e.createStaticVNode('<option value="10">10s</option><option value="60">1m</option><option value="900">15m</option><option value="1800">30m</option><option value="3600">1h</option><option value="7200">2h</option><option value="10800">3h</option><option value="18000">5h</option><option value="36000">10h</option><option value="86400">24h</option>',10),Y=[H],J={class:"chart"};function K(n,t,s,r,o,a){const l=e.resolveComponent("dropdown"),i=e.resolveComponent("datepicker"),c=e.resolveComponent("highcharts");return e.openBlock(),e.createElementBlock("div",z,[e.createElementVNode("div",j,[e.createElementVNode("div",W,[e.createVNode(l,{options:s.columns,onChecked:a.selected,default:s.defaultData},null,8,["options","onChecked","default"]),e.createElementVNode("div",R,[e.createVNode(i,{class:"mr-2",type:"datetime",modelValue:o.params.from,"onUpdate:modelValue":t[0]||(t[0]=d=>o.params.from=d),name:"from",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"from"},null,8,["modelValue"]),e.createVNode(i,{class:"mr-2",type:"datetime",modelValue:o.params.to,"onUpdate:modelValue":t[1]||(t[1]=d=>o.params.to=d),name:"to",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"to"},null,8,["modelValue"]),e.withDirectives(e.createElementVNode("select",{"onUpdate:modelValue":t[2]||(t[2]=d=>o.params.interval=d),class:"form-control wd-80 mr-2"},Y,512),[[e.vModelSelect,o.params.interval]]),e.createElementVNode("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=(...d)=>a.fetchData&&a.fetchData(...d))},"Show")])]),e.createElementVNode("div",J,[e.createVNode(c,{ref:"chart",class:"hc","constructor-type":"stockChart",options:o.options},null,8,["options"])])])])}const X=h(M,[["render",K]]),Q={props:{url:String,title:String,mqtt:{type:Object,default(n){return{url:null,username:null,password:null,topic:null,timefield:"_terminalTime"}}},defaultData:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},components:{Dropdown:u},data(){return{items:this.defaultData,mqttConnection:null,colors:_,params:{last:30},options:{chart:{type:"line",zoomType:"x",height:600},time:{useUTC:!1},title:{text:this.title,style:{fontSize:"24px",fontWeight:"bold"}},xAxis:{type:"datetime",title:{text:""}},yAxis:[],tooltip:{pointFormat:"{series.name}: <b>{point.y:.2f}</b><br/>",crosshairs:!0,shared:!0},legend:{enabled:!0},series:[]}}},created(){this.mqttConnection=y.exports.connect(this.mqtt.url,{username:this.mqtt.username,password:this.mqtt.password})},mounted(){this.fetchData(),this.listen()},methods:{listen(){if(this.mqttConnection){let n=this;this.mqttConnection.on("connect",function(){n.mqttConnection.subscribe(n.mqtt.topic,function(t){t||console.log("connected")})}),this.mqttConnection.on("message",this.received)}},received(n,t){let s=JSON.parse(t.toString()),r=this.mqtt.timefield?this.mqtt.timefield:"_terminalTime",o=Date.parse(s[r]);for(const a in s){let l=this.options.series.findIndex(i=>i.id===a);if(l>=0){this.options.series[l].data.shift();let i=this.options.series[l].colIndex;if(i!==null){let c=s[a][i];isNaN(s[a][i])||(c=s[a][i]?1:0),this.options.series[l].data.push([o,c])}else this.options.series[l].data.push([o,parseFloat(s[a])])}}},selected(n){this.items=n,this.fetchData()},async fetchData(){this.$refs.chart.chart.showLoading();let n=[],t=[];this.mqttI&&this.mqttI.end(),this.items.forEach((s,r)=>{let o=this.colors[r];t[r]={title:{text:this.textFormat(s.text),style:{color:o,fontSize:"14px"}},lineColor:o,labels:{style:{color:o},align:"left",x:14},lineWidth:2,opposite:!0},s.range&&(t[r].min=s.range[0],t[r].max=s.range[1]);let a=null,l=s.data.match(/\[(.*?)\]/);l&&(a=parseInt(l[1])),n[r]={id:s.data.split("[",1)[0],colIndex:a,yAxis:r,type:s.type?s.type:"spline",name:this.textFormat(s.text),color:o,lineWidth:1,data:[]}}),this.options.series=n,this.options.yAxis=t,await axios.get(this.url,{params:this.params}).then(s=>{s.data.data.forEach(o=>{let a=Date.parse(o.terminal_time),l=JSON.parse(o.data);for(const i in l){let c=this.options.series.findIndex(d=>d.id===i);if(c>=0){let d=this.options.series[c].colIndex;if(d){let m=l[i][d];isNaN(l[i][d])||(m=l[i][d]?1:0),this.options.series[c].data.push([a,m])}else this.options.series[c].data.push([a,parseFloat(l[i])])}}})}),this.$refs.chart.chart.hideLoading()},textFormat(n){let t=n.trim().toLowerCase().split(" ");for(let s=0;s<t.length;s++)t[s]=t[s][0].toUpperCase()+t[s].substr(1);return t.join(" ")}}},G={class:"report"},Z={class:"table-wrapper"},ee={class:"toolbox"},te={class:"chart"};function oe(n,t,s,r,o,a){const l=e.resolveComponent("dropdown"),i=e.resolveComponent("highcharts");return e.openBlock(),e.createElementBlock("div",G,[e.createElementVNode("div",Z,[e.createElementVNode("div",ee,[e.createVNode(l,{options:s.columns,onChecked:a.selected,default:s.defaultData},null,8,["options","onChecked","default"])]),e.createElementVNode("div",te,[e.createVNode(i,{ref:"chart","constructor-type":"stockChart",class:"hc",options:o.options},null,8,["options"])])])])}const se=h(Q,[["render",oe]]);const ne={props:{url:String,export:String,headers:Array,title:String},components:{Vue3EasyDataTable:v,Datepicker:f},data(){return{options:{page:1,rowsPerPage:25},params:{from:new Date,to:new Date,interval:60},dataLength:0,isLoading:!1,items:[]}},mounted(){this.fetchData()},watch:{options:{handler(n){this.fetchData()},deep:!0}},methods:{async fetchData(){let n=Object.assign(this.params,this.options);this.isLoading=!0,this.items=[];let t=await axios.get(this.url,{params:n}).then(s=>s.data);this.items=t.data,this.dataLength=t.meta.total,this.options.page=t.meta.current_page,this.options.rowsPerPage=t.meta.per_page,this.isLoading=!1},download(){let n=this.export.split("?");const t=new URLSearchParams(n[1]);t.append("interval",this.params.interval),t.append("from",this.params.from.toISOString()),t.append("to",this.params.to.toISOString()),window.open(n[0]+"?"+t.toString(),"_blank")}}},ae={class:"report"},re={class:"table-wrapper"},ie={class:"toolbox"},le={class:"title"},ce={class:"date-selected"},de=e.createStaticVNode('<option value="10">10s</option><option value="60">1m</option><option value="900">15m</option><option value="1800">30m</option><option value="3600">1h</option><option value="7200">2h</option><option value="10800">3h</option><option value="18000">5h</option><option value="36000">10h</option><option value="86400">24h</option>',10),pe=[de],me={class:"table-content"};function he(n,t,s,r,o,a){const l=e.resolveComponent("datepicker"),i=e.resolveComponent("Vue3EasyDataTable");return e.openBlock(),e.createElementBlock("div",ae,[e.createElementVNode("div",re,[e.createElementVNode("div",ie,[e.createElementVNode("h2",le,e.toDisplayString(s.title),1),e.createElementVNode("div",ce,[e.createVNode(l,{class:"mr-2",modelValue:o.params.from,"onUpdate:modelValue":t[0]||(t[0]=c=>o.params.from=c),name:"from",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"from"},null,8,["modelValue"]),e.createVNode(l,{class:"mr-2",modelValue:o.params.to,"onUpdate:modelValue":t[1]||(t[1]=c=>o.params.to=c),name:"to",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"to"},null,8,["modelValue"]),e.withDirectives(e.createElementVNode("select",{"onUpdate:modelValue":t[2]||(t[2]=c=>o.params.interval=c),class:"form-control wd-80 mr-2"},pe,512),[[e.vModelSelect,o.params.interval]]),e.createElementVNode("button",{class:"btn btn-primary mr-2",onClick:t[3]||(t[3]=(...c)=>a.fetchData&&a.fetchData(...c))},"Show"),e.createElementVNode("button",{class:"btn btn-success",onClick:t[4]||(t[4]=(...c)=>a.download&&a.download(...c))},"Download")])]),e.createElementVNode("div",me,[e.createVNode(i,{"show-index":"","buttons-pagination":"","table-class-name":"customize-table","server-options":o.options,"onUpdate:server-options":t[5]||(t[5]=c=>o.options=c),"server-items-length":o.dataLength,loading:o.isLoading,headers:s.headers,items:o.items,ref:"vtable"},e.createSlots({_:2},[e.renderList(n.$slots,(c,d)=>({name:d,fn:e.withCtx(m=>[e.renderSlot(n.$slots,d,e.normalizeProps(e.guardReactiveProps(m||{})))])}))]),1032,["server-options","server-items-length","loading","headers","items"])])])])}const ue=h(ne,[["render",he]]);const fe={props:{url:String,headers:Array,title:String},components:{Vue3EasyDataTable:v},data(){return{options:{page:1,rowsPerPage:25},dataLength:0,isLoading:!1,items:[]}},mounted(){this.fetchData()},watch:{options:{handler(n){this.fetchData()},deep:!0}},methods:{async fetchData(){this.isLoading=!0,this.items=[];let n=await axios.get(this.url,{params:this.options}).then(t=>t.data);this.items=n.data,this.dataLength=n.meta.total,this.options.page=n.meta.current_page,this.options.rowsPerPage=n.meta.per_page,this.isLoading=!1}}},_e={class:"report"},ge={class:"table-wrapper"},ye={class:"toolbox"},ve={class:"title"},be=e.createElementVNode("div",{class:"date-selected"},null,-1),xe={class:"table-content"};function Ve(n,t,s,r,o,a){const l=e.resolveComponent("Vue3EasyDataTable");return e.openBlock(),e.createElementBlock("div",_e,[e.createElementVNode("div",ge,[e.createElementVNode("div",ye,[e.createElementVNode("h2",ve,e.toDisplayString(s.title),1),be]),e.createElementVNode("div",xe,[e.createVNode(l,{"show-index":"","buttons-pagination":"","table-class-name":"customize-table","server-options":o.options,"onUpdate:server-options":t[0]||(t[0]=i=>o.options=i),"server-items-length":o.dataLength,loading:o.isLoading,headers:s.headers,items:o.items,ref:"vtable"},e.createSlots({_:2},[e.renderList(n.$slots,(i,c)=>({name:c,fn:e.withCtx(d=>[e.renderSlot(n.$slots,c,e.normalizeProps(e.guardReactiveProps(d||{})))])}))]),1032,["server-options","server-items-length","loading","headers","items"])])])])}const we=h(fe,[["render",Ve]]),ke={props:{topic:String},data(){return{message:null,options:{}}},created(){this.listen()},methods:{listen(){let n=y.exports.connect("ws://192.168.170.87:9001",this.options),t=this;n.on("connect",function(){n.subscribe(t.topic,function(s){s||(console.log("connected"),n.publish(t.topic,"Hello mqtt"))})}),n.on("message",function(s,r){console.log("topic",s),console.log(r.toString()),t.message=r})}}};function De(n,t,s,r,o,a){return e.openBlock(),e.createElementBlock("div",null,e.toDisplayString(o.message),1)}const Ne=h(ke,[["render",De]]);const Ce={props:{title:String,station:String,defaultData:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},mqtt:{type:Object,default(){return{url:null,username:null,password:null,topic:null}}}},components:{CircleProgress:V,Dropdown:u},data(){return{items:this.defaultData,mqttConnection:null,score:0,total:0}},created(){this.mqttConnection=y.exports.connect(this.mqtt.url,{username:this.mqtt.username,password:this.mqtt.password})},mounted(){this.listen()},methods:{selected(n){this.items=n},listen(){if(this.mqttConnection){let n=this;this.mqttConnection.on("connect",function(){n.mqttConnection.subscribe(n.mqtt.topic,function(t){t||console.log("connected")})}),this.mqttConnection.on("message",this.received)}},received(n,t){let s=JSON.parse(t.toString());if(s.group==this.station){let r=this.items.length;this.total=s.data.count_record*r;let o=s.data,a=0;this.items.forEach(l=>{a=a+parseInt(o[l.data])}),this.score=parseInt(a/this.total*100)}}}},Ee={class:"card"},Se={class:"card-title"},Ae={class:"card-body"},Le={class:"total"};function Be(n,t,s,r,o,a){const l=e.resolveComponent("dropdown"),i=e.resolveComponent("circle-progress");return e.openBlock(),e.createElementBlock("div",Ee,[e.createElementVNode("div",Se,[e.createVNode(l,{type:"icon",class:"opsi",options:s.columns,onChecked:a.selected,default:s.defaultData},null,8,["options","onChecked","default"]),e.createTextVNode(" "+e.toDisplayString(s.title),1)]),e.createElementVNode("div",Ae,[e.createVNode(i,{percent:o.score,"show-percent":""},null,8,["percent"]),e.createElementVNode("div",Le,[e.createTextVNode("Total Record "),e.createElementVNode("b",null,e.toDisplayString(o.total.toLocaleString()),1)])])])}const qe=h(Ce,[["render",Be]]),Ie={props:{url:String,title:String,defaultData:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},components:{Datepicker:f,Dropdown:u},data(){return{items:this.defaultData,params:{from:new Date,to:new Date},data:[],realtime:{},fetchReady:!1,colors:_,options:{chart:{type:"line",zoomType:"x",height:600},time:{useUTC:!0},title:{text:this.title,style:{fontSize:"24px",fontWeight:"bold"}},xAxis:{type:"datetime",title:{text:""}},yAxis:[],tooltip:{pointFormat:"{series.name}: <b>{point.y:.2f} KWh</b><br/>",crosshairs:!0,shared:!0},legend:{enabled:!0},series:[]}}},mounted(){this.fetchData()},methods:{selected(n){this.items=n,this.fetchData()},async fetchData(){this.$refs.chart.chart.showLoading();let n=[],t=[],s=[];this.items.forEach((r,o)=>{let a=this.colors[o];t[o]={title:{text:this.textFormat(r.text),style:{color:a,fontSize:"16px"}},lineColor:a,labels:{style:{color:a},align:"left",x:14},lineWidth:1,opposite:!0},r.range&&(t[o].min=r.range[0],t[o].max=r.range[1]),n[o]={id:r.data,yAxis:o,type:r.type?r.type:"spline",name:this.textFormat(r.text),color:a,lineWidth:1,data:[]},s[o]=r.data}),this.options.series=n,this.options.yAxis=t,this.params.select=s,await axios.get(this.url,{params:this.params}).then(r=>{let o=r.data.data;for(const[a,l]of Object.entries(o)){let i=this.options.series.findIndex(c=>c.id==a);i>=0&&l.forEach(c=>{this.options.series[i].data.push([c.time*1e3,c.total/1e3])})}}),this.$refs.chart.chart.hideLoading()},textFormat(n){let t=n.toLowerCase().split(" ");for(let s=0;s<t.length;s++)t[s]=t[s][0].toUpperCase()+t[s].substr(1);return t.join(" ")}}},Oe={class:"report"},$e={class:"table-wrapper"},Pe={class:"toolbox"},Te={class:"date-selected"},Ue={class:"chart"};function Fe(n,t,s,r,o,a){const l=e.resolveComponent("dropdown"),i=e.resolveComponent("datepicker"),c=e.resolveComponent("highcharts");return e.openBlock(),e.createElementBlock("div",Oe,[e.createElementVNode("div",$e,[e.createElementVNode("div",Pe,[e.createVNode(l,{options:s.columns,onChecked:a.selected,default:s.defaultData},null,8,["options","onChecked","default"]),e.createElementVNode("div",Te,[e.createVNode(i,{class:"mr-2","enable-time-picker":!1,modelValue:o.params.from,"onUpdate:modelValue":t[0]||(t[0]=d=>o.params.from=d),name:"from",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"from"},null,8,["modelValue"]),e.createVNode(i,{class:"mr-2","enable-time-picker":!1,modelValue:o.params.to,"onUpdate:modelValue":t[1]||(t[1]=d=>o.params.to=d),name:"to",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"to"},null,8,["modelValue"]),e.createElementVNode("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=(...d)=>a.fetchData&&a.fetchData(...d))},"Show")])]),e.createElementVNode("div",Ue,[e.createVNode(c,{ref:"chart",class:"hc",options:o.options},null,8,["options"])])])])}const Me=h(Ie,[["render",Fe]]),ze={props:{url:String,title:String,defaultData:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]}},components:{Datepicker:f,Dropdown:u},data(){return{items:this.defaultData,params:{from:new Date,to:new Date},data:[],realtime:{},fetchReady:!1,colors:_,options:{chart:{type:"column"},time:{useUTC:!0},title:{text:this.title,style:{fontSize:"24px",fontWeight:"bold"}},tooltip:{pointFormat:"{series.name}: <b>{point.y} %</b><br/>",crosshairs:!0},legend:{enabled:!0},xAxis:{crosshair:!0},yAxis:{min:0,max:100,title:{text:"Score Conformance (%)"}},series:[]}}},mounted(){this.fetchData()},methods:{selected(n){this.items=n,this.fetchData()},async fetchData(){this.$refs.chart.chart.showLoading();let n=[],t=[],s=this;await axios.get(this.url,{params:this.params}).then(r=>{let o=r.data.data,a=s.items.length;o.forEach(l=>{let i=w(l.date,"YYYY-MM-DD");n.push(i.format("ll"));let c=l.count_record*a,d=0;s.items.forEach(g=>{d=d+parseInt(l[g.data])});let m=parseInt(d/c*100);t.push(m)})}),this.options.xAxis.categories=n,this.options.series=[{name:this.title,data:t}],this.$refs.chart.chart.hideLoading()},textFormat(n){let t=n.toLowerCase().split(" ");for(let s=0;s<t.length;s++)t[s]=t[s][0].toUpperCase()+t[s].substr(1);return t.join(" ")}}},je={class:"report"},We={class:"table-wrapper"},Re={class:"toolbox"},He={class:"date-selected"},Ye={class:"chart"};function Je(n,t,s,r,o,a){const l=e.resolveComponent("dropdown"),i=e.resolveComponent("datepicker"),c=e.resolveComponent("highcharts");return e.openBlock(),e.createElementBlock("div",je,[e.createElementVNode("div",We,[e.createElementVNode("div",Re,[e.createVNode(l,{options:s.columns,onChecked:a.selected,default:s.defaultData},null,8,["options","onChecked","default"]),e.createElementVNode("div",He,[e.createVNode(i,{class:"mr-2","enable-time-picker":!1,modelValue:o.params.from,"onUpdate:modelValue":t[0]||(t[0]=d=>o.params.from=d),name:"from",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"from"},null,8,["modelValue"]),e.createVNode(i,{class:"mr-2","enable-time-picker":!1,modelValue:o.params.to,"onUpdate:modelValue":t[1]||(t[1]=d=>o.params.to=d),name:"to",textInput:"",autoApply:"",closeOnAutoApply:!1,placeholder:"to"},null,8,["modelValue"]),e.createElementVNode("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=(...d)=>a.fetchData&&a.fetchData(...d))},"Show")])]),e.createElementVNode("div",Ye,[e.createVNode(c,{ref:"chart",class:"hc",options:o.options},null,8,["options"])])])])}const Ke=h(ze,[["render",Je]]);k(D);const p=N({mounted(){},data(){return{active:null}}});p.use(C);Object.defineProperty(String.prototype,"capitalize",{value:function(){let n=this.split(" ");for(let t=0;t<n.length;t++){const s=typeof(n==null?void 0:n[t][0])=="string"?n[t][0].toUpperCase():"";n[t]=s+n[t].substr(1)}return n.join(" ")},enumerable:!1});p.config.globalProperties.$filters={textFormat(n){return n.toLowerCase().capitalize()}};p.component("trend-view",X);p.component("trend-live",se);p.component("log-table",ue);p.component("v-table",we);p.component("v-mqtt",Ne);p.component("pie",qe);p.component("pwr-trend",Me);p.component("score-bar",Ke);p.mount("#app");
