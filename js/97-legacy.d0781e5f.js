(self["webpackChunkvue_demo"]=self["webpackChunkvue_demo"]||[]).push([[97],{3285:function(t,e,n){var o=n(7565),i=n(9046),r=n(7711),a=n(6687),s=n(6395),m=n(3636);o({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,o=a(t),i=s.f,l=r(o),c={},p=0;while(l.length>p)n=i(o,e=l[p++]),void 0!==n&&m(c,e,n);return c}})},1537:function(t,e,n){n(4181);var o={Input:{type:"text",placeholder:"请输入",value:"",debounce:300,prepend:{type:"string",value:""},append:{type:"string",value:""}},Select:{value:"",placeholder:"请选择"}},i={Sector:[{title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{tooltip:{trigger:"item"},legend:{top:"5%",left:"center"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}],Histogram:[{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]},{title:{text:"Waterfall Chart",subtext:"Living Expenses in Shenzhen"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e=t[1];return e.name+"<br/>"+e.seriesName+" : "+e.value}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},data:["Total","Rent","Utilities","Transportation","Meals","Other"]},yAxis:{type:"value"},series:[{name:"Placeholder",type:"bar",stack:"Total",itemStyle:{borderColor:"transparent",color:"transparent"},emphasis:{itemStyle:{borderColor:"transparent",color:"transparent"}},data:[0,1700,1400,1200,300,0]},{name:"Life Cost",type:"bar",stack:"Total",label:{show:!0,position:"inside"},data:[2900,1200,300,200,900,300]}]}]};t.exports={formSetting:o,chartSetting:i}},6097:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return O}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"df"},[n("LeftTool",{ref:"left",on:{setting:t.getSetting}}),n("div",{staticClass:"rightTool"},[t.settingItem&&"form"==t.settingItem.im.type?n("el-form",{attrs:{model:t.settingItem.im.option}},t._l(t.options,(function(e){return n("el-form-item",{key:e.key,attrs:{label:e.title}},[n("Auto"+e.type,{tag:"component",on:{blur:t.blur},model:{value:e.option,callback:function(n){t.$set(e,"option",n)},expression:"im.option"}})],1)})),1):t._e(),t.settingItem&&"chart"===t.settingItem.im.type?n("el-form",{attrs:{model:t.settingItem.im.option}},[n("el-form-item",[n("ChartSetting",{on:{update:t.update},model:{value:t.settingItem.im.option,callback:function(e){t.$set(t.settingItem.im,"option",e)},expression:"settingItem.im.option"}})],1)],1):t._e()],1)],1)},i=[];n(6022),n(8960),n(6783),n(4379),n(2138),n(7564),n(3285);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(7909);var m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"df main"},[n("div",{staticClass:"w200"},[n("h2",[t._v("表单组件")]),t._l(t.formTools,(function(e){return n("div",{key:e.componentName,staticClass:"model",attrs:{draggable:""},on:{dragstart:function(n){return t.drag(e.componentName,"1")}}},[t._v(" "+t._s(e.componentName)+" ")])})),n("h2",[t._v("图形组件")]),t._l(t.chartTools,(function(e){return n("div",{key:e.componentName,staticClass:"model",attrs:{draggable:""},on:{dragstart:function(n){return t.drag(e.componentName,"2")}}},[t._v(" "+t._s(e.componentName)+" ")])}))],2),n("div",{staticClass:"view",on:{drop:t.drop,dragover:function(t){t.preventDefault()}}},[n("Row",{attrs:{gutter:20}},t._l(t.form,(function(e,o){return n("Col",{key:e.key,attrs:{span:Number(e.option.span)}},[n("div",{staticClass:"formItem",attrs:{draggable:""},on:{dragstart:function(n){return t.drag(e.componentName,"0",o)},click:function(n){return t.settingOption(e,o)}}},[n(t.computedName(e.name),{tag:"component",on:{blur:function(n){return t.settingOption(e,o)}},model:{value:e.option,callback:function(n){t.$set(e,"option",n)},expression:"im.option"}})],1)])})),1)],1)])},l=[],c=(n(4181),n(6356),n(4939),n(1882)),p=n(1537),u=n(8927),f={name:"leftPage",props:{},data:function(){return{formTools:[{componentName:"Input",componentIcon:""},{componentName:"Select",componentIcon:""}],chartTools:[{componentName:"Sector",componentIcon:""},{componentName:"Histogram",componentIcon:""}],moveItem:null,form:[]}},components:{Row:u.Row,Col:u.Col},methods:{debounceFun:function(t,e){(0,c.debounce)(t,e)},throttleFun:function(t,e){(0,c.throttle)(t,e)},drag:function(t,e,n){this.moveItem={name:t,type:e,index:n}},computedName:function(t){return this.chartTools.some((function(e){return e.componentName===t}))?"AutoSector":"Auto"+t},drop:function(t){var e,n,o,i,r=t.pageY,a=t.pageX;if("1"===(null===(e=this.moveItem)||void 0===e?void 0:e.type)||"2"===(null===(n=this.moveItem)||void 0===n?void 0:n.type)){var m,l=this.moveItem,c=l.type,u=l.name;i="1"===c?p.formSetting:p.chartSetting,document.querySelectorAll(".formItem").forEach((function(t,e){var n=t.offsetTop,o=t.clientHeight,i=t.offsetLeft,s=t.clientWidth;n<=r&&n+o>r&&a>=i&&a<i+s?(n<=r&&r<n+.5*o&&(m=e),n+o>r&&r>=n+.5*o&&(m=e+1)):n<=r&&n+o>r&&a>=i+s&&(m=e+1)})),m>=0?this.form.splice(m,0,{name:u,type:"1"===c?"form":"chart",option:this.deepClone(s(s({},Array.isArray(i[this.moveItem.name])?i[this.moveItem.name][0]:i[this.moveItem.name]),{},{span:"1"===c?24:12})),key:(new Date).getTime()+m+""}):this.form.push({name:u,type:"1"===c?"form":"chart",option:this.deepClone(s(s({},Array.isArray(i[this.moveItem.name])?i[this.moveItem.name][0]:i[this.moveItem.name]),{},{span:"1"===c?24:12})),key:(new Date).getTime()+"-1"})}if("0"===(null===(o=this.moveItem)||void 0===o?void 0:o.type)){var f,d=0;document.querySelectorAll(".formItem").forEach((function(t,e){var n=t.offsetTop,o=t.clientHeight,i=t.offsetLeft,s=t.clientWidth;d++,n<=r&&r<n+o&&a>=i&&a<i+s?f=e:n<=r&&n+o>r&&a>=i+s&&(f=e+1)})),f=f>=0?f:d;var h=this.form[this.moveItem.index];this.form.splice(this.moveItem.index,1),this.moveItem.index>=f?this.form.splice(f,0,h):this.form.splice(f-1,0,h)}this.moveItem=null},settingOption:function(t,e){this.$emit("setting",{im:t,ix:e})},deepClone:function(t){return JSON.parse(JSON.stringify(t))},changeOption:function(t){this.form[t.ix]=t.im}},mounted:function(){},computed:{},watch:{}},d=f,h=n(5471),g=(0,h.Z)(d,m,l,!1,null,"68667e72",null),v=g.exports,b=function(t){var e;switch(t){case"span":e={type:"Input",title:"宽度"};break;case"placeholder":e={type:"Input",title:"提示语"};break;case"title":e={type:"Input",title:"标题"};break;case"value":e={type:"Input",title:"值"};break;default:break}return e?s(s({},e),{},{key:t}):e},y={name:"autoForm",props:{},data:function(){return{settingItem:null,options:[],chart:["row"]}},components:{LeftTool:v},methods:{getSetting:function(t){var e=this;this.options=[],this.settingItem=t,Object.keys(t.im.option).map((function(n){var o=b(n);o&&e.options.push(s(s({},o),{},{option:{value:t.im.option[n]}}))}))},blur:function(){var t=this.settingItem,e=this.options;e.map((function(e){var n=e.option,o=e.key;t.im.option[o]=n.value})),this.$refs.left.changeOption(t)},update:function(t){this.settingItem.im.option=t,this.$refs.left.changeOption(this.settingItem)}},mounted:function(){},computed:{},watch:{}},I=y,w=(0,h.Z)(I,o,i,!1,null,"44b4777b",null),O=w.exports}}]);
//# sourceMappingURL=97-legacy.d0781e5f.js.map