(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{637:function(module,exports,__webpack_require__){"use strict";var _core=__webpack_require__(25);function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}exports.__esModule=!0,exports.default=exports.PREVIEW_VALUE=void 0;exports.PREVIEW_VALUE=12345.432;var NumberFormatter=function(a){function b(b){var c;_defineProperty(_assertThisInitialized(_assertThisInitialized(c=a.call(this,function(a){return c.format(a)})||this)),"id",void 0),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"label",void 0),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"description",void 0),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"formatFunc",void 0),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"isInvalid",void 0);var d=b.id,e=void 0===d?(0,_core.isRequired)("config.id"):d,f=b.label,g=b.description,h=void 0===g?"":g,i=b.formatFunc,j=void 0===i?(0,_core.isRequired)("config.formatFunc"):i,k=b.isInvalid;return c.id=e,c.label=f||e,c.description=h,c.formatFunc=j,c.isInvalid=void 0!==k&&k,c}!function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a);var c=b.prototype;return c.format=function(a){var b=Number.NEGATIVE_INFINITY,c=Number.POSITIVE_INFINITY,d=Number.isNaN;return null==a||d(a)?""+a:a===c?"∞":a===b?"-∞":this.formatFunc(a)},c.preview=function(a){return void 0===a&&(a=12345.432),a+" => "+this.format(a)},b}(_core.ExtensibleFunction);exports.default=NumberFormatter},641:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _default={DOLLAR:"$,.2f",DOLLAR_CHANGE:"+$,.2f",DOLLAR_ROUND:"$,d",DOLLAR_ROUND_CHANGE:"+$,d",FLOAT:",.2f",FLOAT_1_POINT:",.1f",FLOAT_2_POINT:",.2f",FLOAT_3_POINT:",.3f",FLOAT_CHANGE:"+,.2f",FLOAT_CHANGE_1_POINT:"+,.1f",FLOAT_CHANGE_2_POINT:"+,.2f",FLOAT_CHANGE_3_POINT:"+,.3f",INTEGER:",d",INTEGER_CHANGE:"+,d",PERCENT:",.2%",PERCENT_1_POINT:",.1%",PERCENT_2_POINT:",.2%",PERCENT_3_POINT:",.3%",PERCENT_CHANGE:"+,.2%",PERCENT_CHANGE_1_POINT:"+,.1%",PERCENT_CHANGE_2_POINT:"+,.2%",PERCENT_CHANGE_3_POINT:"+,.3%",SI:".3s",SI_1_DIGIT:".1s",SI_2_DIGIT:".2s",SI_3_DIGIT:".3s"};exports.default=_default},642:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a){var b,c=a.description,d=a.formatString,e=void 0===d?(0,_core.isRequired)("config.formatString"):d,f=a.label,g=!1;try{b=(0,_d3Format.format)(e)}catch(a){b=function(a){return a+" (Invalid format: "+e+")"},g=!0}return new _NumberFormatter.default({description:c,formatFunc:b,id:e,isInvalid:g,label:f})};var a,_d3Format=__webpack_require__(234),_core=__webpack_require__(25),_NumberFormatter=(a=__webpack_require__(637))&&a.__esModule?a:{default:a}},646:function(module,exports,__webpack_require__){"use strict";var _NumberFormats=_interopRequireDefault(__webpack_require__(641)),_NumberFormatter=_interopRequireWildcard(__webpack_require__(637)),_NumberFormatterRegistrySingleton=_interopRequireWildcard(__webpack_require__(651)),_createD3NumberFormatter=_interopRequireDefault(__webpack_require__(642)),_createSiAtMostNDigitFormatter=_interopRequireDefault(__webpack_require__(653));function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.__esModule=!0,exports.getNumberFormatter=exports.formatNumber=exports.PREVIEW_VALUE=exports.createSiAtMostNDigitFormatter=exports.createD3NumberFormatter=exports.getNumberFormatterRegistry=exports.NumberFormatter=exports.NumberFormats=void 0,exports.NumberFormats=_NumberFormats.default,exports.NumberFormatter=_NumberFormatter.default,exports.PREVIEW_VALUE=_NumberFormatter.PREVIEW_VALUE,exports.getNumberFormatterRegistry=_NumberFormatterRegistrySingleton.default,exports.formatNumber=_NumberFormatterRegistrySingleton.formatNumber,exports.getNumberFormatter=_NumberFormatterRegistrySingleton.getNumberFormatter,exports.createD3NumberFormatter=_createD3NumberFormatter.default,exports.createSiAtMostNDigitFormatter=_createSiAtMostNDigitFormatter.default},651:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.getNumberFormatter=function(a){return getInstance().get(a)},exports.formatNumber=function(a,b){return getInstance().format(a,b)},exports.default=void 0;var a,_core=__webpack_require__(25),_NumberFormatterRegistry=(a=__webpack_require__(652))&&a.__esModule?a:{default:a};var getInstance=(0,_core.makeSingleton)(_NumberFormatterRegistry.default),_default=getInstance;exports.default=_default},652:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=void 0;var _core=__webpack_require__(25),_createD3NumberFormatter=_interopRequireDefault(__webpack_require__(642)),_NumberFormats=_interopRequireDefault(__webpack_require__(641));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var NumberFormatterRegistry=function(a){function b(){return a.call(this,{initialDefaultKey:_NumberFormats.default.SI,name:"NumberFormatter"})||this}!function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(b,a);var c=b.prototype;return c.get=function(b){var c=(""+(b||this.defaultKey)).trim();if(this.has(c))return a.prototype.get.call(this,c);var d=(0,_createD3NumberFormatter.default)({formatString:c});return this.registerValue(c,d),d},c.format=function(a,b){return this.get(a)(b)},b}(_core.RegistryWithDefaultKey);exports.default=NumberFormatterRegistry},653:function(module,exports,__webpack_require__){"use strict";exports.__esModule=!0,exports.default=function(a){void 0===a&&(a={});var b=a,c=b.description,d=b.n,e=void 0===d?3:d,f=b.id,g=b.label,h=(0,_d3Format.format)("."+e+"s");return new _NumberFormatter.default({description:c,formatFunc:function(a){var b=h(a);return"A">b.slice(-1)?parseFloat(b).toString():b},id:f||"si_at_most_"+e+"_digit",label:g||"SI with at most "+e+" significant digits"})};var a,_d3Format=__webpack_require__(234),_NumberFormatter=(a=__webpack_require__(637))&&a.__esModule?a:{default:a}},679:function(module,exports,__webpack_require__){!function(exports){"use strict";var xhtml="http://www.w3.org/1999/xhtml",namespaces={svg:"http://www.w3.org/2000/svg",xhtml:xhtml,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function namespace(name){var prefix=name+="",i=prefix.indexOf(":");return i>=0&&"xmlns"!==(prefix=name.slice(0,i))&&(name=name.slice(i+1)),namespaces.hasOwnProperty(prefix)?{space:namespaces[prefix],local:name}:name}function creator(name){var fullname=namespace(name);return(fullname.local?function(fullname){return function(){return this.ownerDocument.createElementNS(fullname.space,fullname.local)}}:function(name){return function(){var document=this.ownerDocument,uri=this.namespaceURI;return uri===xhtml&&document.documentElement.namespaceURI===xhtml?document.createElement(name):document.createElementNS(uri,name)}})(fullname)}function none(){}function selector(selector){return null==selector?none:function(){return this.querySelector(selector)}}function empty(){return[]}function selectorAll(selector){return null==selector?empty:function(){return this.querySelectorAll(selector)}}function matcher(selector){return function(){return this.matches(selector)}}function sparse(update){return new Array(update.length)}function EnterNode(parent,datum){this.ownerDocument=parent.ownerDocument,this.namespaceURI=parent.namespaceURI,this._next=null,this._parent=parent,this.__data__=datum}EnterNode.prototype={constructor:EnterNode,appendChild:function(child){return this._parent.insertBefore(child,this._next)},insertBefore:function(child,next){return this._parent.insertBefore(child,next)},querySelector:function(selector){return this._parent.querySelector(selector)},querySelectorAll:function(selector){return this._parent.querySelectorAll(selector)}};var keyPrefix="$";function bindIndex(parent,group,enter,update,exit,data){for(var node,i=0,groupLength=group.length,dataLength=data.length;i<dataLength;++i)(node=group[i])?(node.__data__=data[i],update[i]=node):enter[i]=new EnterNode(parent,data[i]);for(;i<groupLength;++i)(node=group[i])&&(exit[i]=node)}function bindKey(parent,group,enter,update,exit,data,key){var i,node,keyValue,nodeByKeyValue={},groupLength=group.length,dataLength=data.length,keyValues=new Array(groupLength);for(i=0;i<groupLength;++i)(node=group[i])&&(keyValues[i]=keyValue=keyPrefix+key.call(node,node.__data__,i,group),keyValue in nodeByKeyValue?exit[i]=node:nodeByKeyValue[keyValue]=node);for(i=0;i<dataLength;++i)keyValue=keyPrefix+key.call(parent,data[i],i,data),(node=nodeByKeyValue[keyValue])?(update[i]=node,node.__data__=data[i],nodeByKeyValue[keyValue]=null):enter[i]=new EnterNode(parent,data[i]);for(i=0;i<groupLength;++i)(node=group[i])&&nodeByKeyValue[keyValues[i]]===node&&(exit[i]=node)}function ascending(a,b){return a<b?-1:a>b?1:a>=b?0:NaN}function defaultView(node){return node.ownerDocument&&node.ownerDocument.defaultView||node.document&&node||node.defaultView}function styleValue(node,name){return node.style.getPropertyValue(name)||defaultView(node).getComputedStyle(node,null).getPropertyValue(name)}function classArray(string){return string.trim().split(/^|\s+/)}function classList(node){return node.classList||new ClassList(node)}function ClassList(node){this._node=node,this._names=classArray(node.getAttribute("class")||"")}function classedAdd(node,names){for(var list=classList(node),i=-1,n=names.length;++i<n;)list.add(names[i])}function classedRemove(node,names){for(var list=classList(node),i=-1,n=names.length;++i<n;)list.remove(names[i])}function textRemove(){this.textContent=""}function htmlRemove(){this.innerHTML=""}function raise(){this.nextSibling&&this.parentNode.appendChild(this)}function lower(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function constantNull(){return null}function remove(){var parent=this.parentNode;parent&&parent.removeChild(this)}function selection_cloneShallow(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function selection_cloneDeep(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}ClassList.prototype={add:function(name){var i=this._names.indexOf(name);i<0&&(this._names.push(name),this._node.setAttribute("class",this._names.join(" ")))},remove:function(name){var i=this._names.indexOf(name);i>=0&&(this._names.splice(i,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(name){return this._names.indexOf(name)>=0}};var filterEvents={};if(exports.event=null,"undefined"!=typeof document){var element=document.documentElement;"onmouseenter"in element||(filterEvents={mouseenter:"mouseover",mouseleave:"mouseout"})}function filterContextListener(listener,index,group){return listener=contextListener(listener,index,group),function(event){var related=event.relatedTarget;related&&(related===this||8&related.compareDocumentPosition(this))||listener.call(this,event)}}function contextListener(listener,index,group){return function(event1){var event0=exports.event;exports.event=event1;try{listener.call(this,this.__data__,index,group)}finally{exports.event=event0}}}function onRemove(typename){return function(){var on=this.__on;if(on){for(var o,j=0,i=-1,m=on.length;j<m;++j)o=on[j],typename.type&&o.type!==typename.type||o.name!==typename.name?on[++i]=o:this.removeEventListener(o.type,o.listener,o.capture);++i?on.length=i:delete this.__on}}}function onAdd(typename,value,capture){var wrap=filterEvents.hasOwnProperty(typename.type)?filterContextListener:contextListener;return function(d,i,group){var o,on=this.__on,listener=wrap(value,i,group);if(on)for(var j=0,m=on.length;j<m;++j)if((o=on[j]).type===typename.type&&o.name===typename.name)return this.removeEventListener(o.type,o.listener,o.capture),this.addEventListener(o.type,o.listener=listener,o.capture=capture),void(o.value=value);this.addEventListener(typename.type,listener,capture),o={type:typename.type,name:typename.name,value:value,listener:listener,capture:capture},on?on.push(o):this.__on=[o]}}function dispatchEvent(node,type,params){var window=defaultView(node),event=window.CustomEvent;"function"==typeof event?event=new event(type,params):(event=window.document.createEvent("Event"),params?(event.initEvent(type,params.bubbles,params.cancelable),event.detail=params.detail):event.initEvent(type,!1,!1)),node.dispatchEvent(event)}var root=[null];function Selection(groups,parents){this._groups=groups,this._parents=parents}function selection(){return new Selection([[document.documentElement]],root)}function select(selector){return"string"==typeof selector?new Selection([[document.querySelector(selector)]],[document.documentElement]):new Selection([[selector]],root)}Selection.prototype=selection.prototype={constructor:Selection,select:function(select){"function"!=typeof select&&(select=selector(select));for(var groups=this._groups,m=groups.length,subgroups=new Array(m),j=0;j<m;++j)for(var node,subnode,group=groups[j],n=group.length,subgroup=subgroups[j]=new Array(n),i=0;i<n;++i)(node=group[i])&&(subnode=select.call(node,node.__data__,i,group))&&("__data__"in node&&(subnode.__data__=node.__data__),subgroup[i]=subnode);return new Selection(subgroups,this._parents)},selectAll:function(select){"function"!=typeof select&&(select=selectorAll(select));for(var groups=this._groups,m=groups.length,subgroups=[],parents=[],j=0;j<m;++j)for(var node,group=groups[j],n=group.length,i=0;i<n;++i)(node=group[i])&&(subgroups.push(select.call(node,node.__data__,i,group)),parents.push(node));return new Selection(subgroups,parents)},filter:function(match){"function"!=typeof match&&(match=matcher(match));for(var groups=this._groups,m=groups.length,subgroups=new Array(m),j=0;j<m;++j)for(var node,group=groups[j],n=group.length,subgroup=subgroups[j]=[],i=0;i<n;++i)(node=group[i])&&match.call(node,node.__data__,i,group)&&subgroup.push(node);return new Selection(subgroups,this._parents)},data:function(value,key){if(!value)return data=new Array(this.size()),j=-1,this.each(function(d){data[++j]=d}),data;var x,bind=key?bindKey:bindIndex,parents=this._parents,groups=this._groups;"function"!=typeof value&&(x=value,value=function(){return x});for(var m=groups.length,update=new Array(m),enter=new Array(m),exit=new Array(m),j=0;j<m;++j){var parent=parents[j],group=groups[j],groupLength=group.length,data=value.call(parent,parent&&parent.__data__,j,parents),dataLength=data.length,enterGroup=enter[j]=new Array(dataLength),updateGroup=update[j]=new Array(dataLength),exitGroup=exit[j]=new Array(groupLength);bind(parent,group,enterGroup,updateGroup,exitGroup,data,key);for(var previous,next,i0=0,i1=0;i0<dataLength;++i0)if(previous=enterGroup[i0]){for(i0>=i1&&(i1=i0+1);!(next=updateGroup[i1])&&++i1<dataLength;);previous._next=next||null}}return(update=new Selection(update,parents))._enter=enter,update._exit=exit,update},enter:function(){return new Selection(this._enter||this._groups.map(sparse),this._parents)},exit:function(){return new Selection(this._exit||this._groups.map(sparse),this._parents)},join:function(onenter,onupdate,onexit){var enter=this.enter(),update=this,exit=this.exit();return enter="function"==typeof onenter?onenter(enter):enter.append(onenter+""),null!=onupdate&&(update=onupdate(update)),null==onexit?exit.remove():onexit(exit),enter&&update?enter.merge(update).order():update},merge:function(selection$$1){for(var groups0=this._groups,groups1=selection$$1._groups,m0=groups0.length,m1=groups1.length,m=Math.min(m0,m1),merges=new Array(m0),j=0;j<m;++j)for(var node,group0=groups0[j],group1=groups1[j],n=group0.length,merge=merges[j]=new Array(n),i=0;i<n;++i)(node=group0[i]||group1[i])&&(merge[i]=node);for(;j<m0;++j)merges[j]=groups0[j];return new Selection(merges,this._parents)},order:function(){for(var groups=this._groups,j=-1,m=groups.length;++j<m;)for(var node,group=groups[j],i=group.length-1,next=group[i];--i>=0;)(node=group[i])&&(next&&4^node.compareDocumentPosition(next)&&next.parentNode.insertBefore(node,next),next=node);return this},sort:function(compare){function compareNode(a,b){return a&&b?compare(a.__data__,b.__data__):!a-!b}compare||(compare=ascending);for(var groups=this._groups,m=groups.length,sortgroups=new Array(m),j=0;j<m;++j){for(var node,group=groups[j],n=group.length,sortgroup=sortgroups[j]=new Array(n),i=0;i<n;++i)(node=group[i])&&(sortgroup[i]=node);sortgroup.sort(compareNode)}return new Selection(sortgroups,this._parents).order()},call:function(){var callback=arguments[0];return arguments[0]=this,callback.apply(null,arguments),this},nodes:function(){var nodes=new Array(this.size()),i=-1;return this.each(function(){nodes[++i]=this}),nodes},node:function(){for(var groups=this._groups,j=0,m=groups.length;j<m;++j)for(var group=groups[j],i=0,n=group.length;i<n;++i){var node=group[i];if(node)return node}return null},size:function(){var size=0;return this.each(function(){++size}),size},empty:function(){return!this.node()},each:function(callback){for(var groups=this._groups,j=0,m=groups.length;j<m;++j)for(var node,group=groups[j],i=0,n=group.length;i<n;++i)(node=group[i])&&callback.call(node,node.__data__,i,group);return this},attr:function(name,value){var fullname=namespace(name);if(arguments.length<2){var node=this.node();return fullname.local?node.getAttributeNS(fullname.space,fullname.local):node.getAttribute(fullname)}return this.each((null==value?fullname.local?function(fullname){return function(){this.removeAttributeNS(fullname.space,fullname.local)}}:function(name){return function(){this.removeAttribute(name)}}:"function"==typeof value?fullname.local?function(fullname,value){return function(){var v=value.apply(this,arguments);null==v?this.removeAttributeNS(fullname.space,fullname.local):this.setAttributeNS(fullname.space,fullname.local,v)}}:function(name,value){return function(){var v=value.apply(this,arguments);null==v?this.removeAttribute(name):this.setAttribute(name,v)}}:fullname.local?function(fullname,value){return function(){this.setAttributeNS(fullname.space,fullname.local,value)}}:function(name,value){return function(){this.setAttribute(name,value)}})(fullname,value))},style:function(name,value,priority){return arguments.length>1?this.each((null==value?function(name){return function(){this.style.removeProperty(name)}}:"function"==typeof value?function(name,value,priority){return function(){var v=value.apply(this,arguments);null==v?this.style.removeProperty(name):this.style.setProperty(name,v,priority)}}:function(name,value,priority){return function(){this.style.setProperty(name,value,priority)}})(name,value,null==priority?"":priority)):styleValue(this.node(),name)},property:function(name,value){return arguments.length>1?this.each((null==value?function(name){return function(){delete this[name]}}:"function"==typeof value?function(name,value){return function(){var v=value.apply(this,arguments);null==v?delete this[name]:this[name]=v}}:function(name,value){return function(){this[name]=value}})(name,value)):this.node()[name]},classed:function(name,value){var names=classArray(name+"");if(arguments.length<2){for(var list=classList(this.node()),i=-1,n=names.length;++i<n;)if(!list.contains(names[i]))return!1;return!0}return this.each(("function"==typeof value?function(names,value){return function(){(value.apply(this,arguments)?classedAdd:classedRemove)(this,names)}}:value?function(names){return function(){classedAdd(this,names)}}:function(names){return function(){classedRemove(this,names)}})(names,value))},text:function(value){return arguments.length?this.each(null==value?textRemove:("function"==typeof value?function(value){return function(){var v=value.apply(this,arguments);this.textContent=null==v?"":v}}:function(value){return function(){this.textContent=value}})(value)):this.node().textContent},html:function(value){return arguments.length?this.each(null==value?htmlRemove:("function"==typeof value?function(value){return function(){var v=value.apply(this,arguments);this.innerHTML=null==v?"":v}}:function(value){return function(){this.innerHTML=value}})(value)):this.node().innerHTML},raise:function(){return this.each(raise)},lower:function(){return this.each(lower)},append:function(name){var create="function"==typeof name?name:creator(name);return this.select(function(){return this.appendChild(create.apply(this,arguments))})},insert:function(name,before){var create="function"==typeof name?name:creator(name),select=null==before?constantNull:"function"==typeof before?before:selector(before);return this.select(function(){return this.insertBefore(create.apply(this,arguments),select.apply(this,arguments)||null)})},remove:function(){return this.each(remove)},clone:function(deep){return this.select(deep?selection_cloneDeep:selection_cloneShallow)},datum:function(value){return arguments.length?this.property("__data__",value):this.node().__data__},on:function(typename,value,capture){var i,t,typenames=function(typenames){return typenames.trim().split(/^|\s+/).map(function(t){var name="",i=t.indexOf(".");return i>=0&&(name=t.slice(i+1),t=t.slice(0,i)),{type:t,name:name}})}(typename+""),n=typenames.length;if(!(arguments.length<2)){for(on=value?onAdd:onRemove,null==capture&&(capture=!1),i=0;i<n;++i)this.each(on(typenames[i],value,capture));return this}var on=this.node().__on;if(on)for(var o,j=0,m=on.length;j<m;++j)for(i=0,o=on[j];i<n;++i)if((t=typenames[i]).type===o.type&&t.name===o.name)return o.value},dispatch:function(type,params){return this.each(("function"==typeof params?function(type,params){return function(){return dispatchEvent(this,type,params.apply(this,arguments))}}:function(type,params){return function(){return dispatchEvent(this,type,params)}})(type,params))}};var nextId=0;function local(){return new Local}function Local(){this._="@"+(++nextId).toString(36)}function sourceEvent(){for(var source,current=exports.event;source=current.sourceEvent;)current=source;return current}function point(node,event){var svg=node.ownerSVGElement||node;if(svg.createSVGPoint){var point=svg.createSVGPoint();return point.x=event.clientX,point.y=event.clientY,[(point=point.matrixTransform(node.getScreenCTM().inverse())).x,point.y]}var rect=node.getBoundingClientRect();return[event.clientX-rect.left-node.clientLeft,event.clientY-rect.top-node.clientTop]}Local.prototype=local.prototype={constructor:Local,get:function(node){for(var id=this._;!(id in node);)if(!(node=node.parentNode))return;return node[id]},set:function(node,value){return node[this._]=value},remove:function(node){return this._ in node&&delete node[this._]},toString:function(){return this._}},exports.create=function(name){return select(creator(name).call(document.documentElement))},exports.creator=creator,exports.local=local,exports.matcher=matcher,exports.mouse=function(node){var event=sourceEvent();return event.changedTouches&&(event=event.changedTouches[0]),point(node,event)},exports.namespace=namespace,exports.namespaces=namespaces,exports.clientPoint=point,exports.select=select,exports.selectAll=function(selector){return"string"==typeof selector?new Selection([document.querySelectorAll(selector)],[document.documentElement]):new Selection([null==selector?[]:selector],root)},exports.selection=selection,exports.selector=selector,exports.selectorAll=selectorAll,exports.style=styleValue,exports.touch=function(node,touches,identifier){arguments.length<3&&(identifier=touches,touches=sourceEvent().changedTouches);for(var touch,i=0,n=touches?touches.length:0;i<n;++i)if((touch=touches[i]).identifier===identifier)return point(node,touch);return null},exports.touches=function(node,touches){null==touches&&(touches=sourceEvent().touches);for(var i=0,n=touches?touches.length:0,points=new Array(n);i<n;++i)points[i]=point(node,touches[i]);return points},exports.window=defaultView,exports.customEvent=function(event1,listener,that,args){var event0=exports.event;event1.sourceEvent=exports.event,exports.event=event1;try{return listener.apply(that,args)}finally{exports.event=event0}},Object.defineProperty(exports,"__esModule",{value:!0})}(exports)}}]);
//# sourceMappingURL=1.0466b02d160b3962a880.bundle.js.map