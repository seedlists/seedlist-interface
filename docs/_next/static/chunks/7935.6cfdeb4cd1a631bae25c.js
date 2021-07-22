(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7935],{57204:function(e,t,r){"use strict";var n=r(48764).Buffer;t.Z=void 0;var s=r(76358);function i(e){const t=n.alloc(2);return t.writeUInt16BE(e,0),t}const o={data:n.alloc(0),dataLength:0,sequence:0};var a=(e,t)=>({makeBlocks(r){let s=n.concat([i(r.length),r]);const o=t-5,a=Math.ceil(s.length/o);s=n.concat([s,n.alloc(a*o-s.length+1).fill(0)]);const l=[];for(let t=0;t<a;t++){const r=n.alloc(5);r.writeUInt16BE(e,0),r.writeUInt8(5,2),r.writeUInt16BE(t,3);const i=s.slice(t*o,(t+1)*o);l.push(n.concat([r,i]))}return l},reduceResponse(t,r){let{data:i,dataLength:a,sequence:l}=t||o;if(r.readUInt16BE(0)!==e)throw new s.TransportError("Invalid channel","InvalidChannel");if(5!==r.readUInt8(2))throw new s.TransportError("Invalid tag","InvalidTag");if(r.readUInt16BE(3)!==l)throw new s.TransportError("Invalid sequence","InvalidSequence");t||(a=r.readUInt16BE(5)),l++;const h=r.slice(t?5:7);return i=n.concat([i,h]),i.length>a&&(i=i.slice(0,a)),{data:i,dataLength:a,sequence:l}},getReducedResult(e){if(e&&e.dataLength===e.data.length)return e.data}});t.Z=a},35104:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(27590),s=r(57204),i=r(81249),o=r.n(i);const a={blue:{id:"blue",productName:"Ledger\xa0Blue",productIdMM:0,legacyUsbProductId:0,usbOnly:!0,memorySize:491520,blockSize:4096,getBlockSize:e=>4096},nanoS:{id:"nanoS",productName:"Ledger\xa0Nano\xa0S",productIdMM:16,legacyUsbProductId:1,usbOnly:!0,memorySize:327680,blockSize:4096,getBlockSize:e=>o().lt(o().coerce(e),"2.0.0")?4096:2048},nanoX:{id:"nanoX",productName:"Ledger\xa0Nano\xa0X",productIdMM:64,legacyUsbProductId:4,usbOnly:!1,memorySize:2097152,blockSize:4096,getBlockSize:e=>4096,bluetoothSpec:[{serviceUuid:"d973f2e0-b19e-11e2-9e96-0800200c9a66",notifyUuid:"d973f2e1-b19e-11e2-9e96-0800200c9a66",writeUuid:"d973f2e2-b19e-11e2-9e96-0800200c9a66"},{serviceUuid:"13d63400-2c97-0004-0000-4c6564676572",notifyUuid:"13d63400-2c97-0004-0001-4c6564676572",writeUuid:"13d63400-2c97-0004-0002-4c6564676572"}]}},l=Object.values(a),h=e=>{const t=l.find((t=>t.legacyUsbProductId===e));if(t)return t;const r=e>>8;return l.find((e=>e.productIdMM===r))},c=[],u={};for(let I in a){const e=a[I],{bluetoothSpec:t}=e;if(t)for(let r=0;r<t.length;r++){const n=t[r];c.push(n.serviceUuid),u[n.serviceUuid]=u[n.serviceUuid.replace(/-/g,"")]={deviceModel:e,...n}}}var p=r(28716),f=r(76358);const E=[{vendorId:11415}];async function m(){return await navigator.usb.requestDevice({filters:E})}async function v(){return(await navigator.usb.getDevices()).filter((e=>11415===e.vendorId))}var d=r(48764).Buffer;class g extends n.ZP{constructor(e,t){super(),this.device=void 0,this.deviceModel=void 0,this.channel=Math.floor(65535*Math.random()),this.packetSize=64,this.interfaceNumber=void 0,this._disconnectEmitted=!1,this._emitDisconnect=e=>{this._disconnectEmitted||(this._disconnectEmitted=!0,this.emit("disconnect",e))},this.exchange=e=>this.exchangeAtomicImpl((async()=>{const{channel:t,packetSize:r}=this;(0,p.c)("apdu","=> "+e.toString("hex"));const n=(0,s.Z)(t,r),i=n.makeBlocks(e);for(let e=0;e<i.length;e++)await this.device.transferOut(3,i[e]);let o,a;for(;!(o=n.getReducedResult(a));){const e=await this.device.transferIn(3,r),t=d.from(e.data.buffer);a=n.reduceResponse(a,t)}return(0,p.c)("apdu","<= "+o.toString("hex")),o})).catch((e=>{if(e&&e.message&&e.message.includes("disconnected"))throw this._emitDisconnect(e),new f.DisconnectedDeviceDuringOperation(e.message);throw e})),this.device=e,this.interfaceNumber=t,this.deviceModel=h(e.productId)}static async request(){const e=await m();return g.open(e)}static async openConnected(){const e=await v();return 0===e.length?null:g.open(e[0])}static async open(e){await e.open(),null===e.configuration&&await e.selectConfiguration(1);const t=e.configurations[0].interfaces.find((({alternates:e})=>e.some((e=>255===e.interfaceClass))));if(!t)throw new f.TransportInterfaceNotAvailable("No WebUSB interface found for your Ledger device. Please upgrade firmware or contact techsupport.");const r=t.interfaceNumber;try{await e.claimInterface(r)}catch(i){throw await e.close(),new f.TransportInterfaceNotAvailable(i.message)}const n=new g(e,r),s=t=>{e===t.device&&(navigator.usb.removeEventListener("disconnect",s),n._emitDisconnect(new f.DisconnectedDevice))};return navigator.usb.addEventListener("disconnect",s),n}async close(){await this.exchangeBusyPromise,await this.device.releaseInterface(this.interfaceNumber),await async function(e){try{await e.reset()}catch(t){console.warn(t)}}(this.device),await this.device.close()}setScrambleKey(){}}g.isSupported=()=>Promise.resolve(!!navigator&&!!navigator.usb&&"function"===typeof navigator.usb.getDevices),g.list=v,g.listen=e=>{let t=!1;return async function(){const e=await v();return e.length>0?e[0]:m()}().then((r=>{if(!t){const t=h(r.productId);e.next({type:"add",descriptor:r,deviceModel:t}),e.complete()}}),(t=>{window.DOMException&&t instanceof window.DOMException&&18===t.code?e.error(new f.TransportWebUSBGestureRequired(t.message)):e.error(new f.TransportOpenUserCancelled(t.message))})),{unsubscribe:function(){t=!0}}}},39593:function(e,t,r){"use strict";const n=r(34411),s=Symbol("max"),i=Symbol("length"),o=Symbol("lengthCalculator"),a=Symbol("allowStale"),l=Symbol("maxAge"),h=Symbol("dispose"),c=Symbol("noDisposeOnSet"),u=Symbol("lruList"),p=Symbol("cache"),f=Symbol("updateAgeOnGet"),E=()=>1;const m=(e,t,r)=>{const n=e[p].get(t);if(n){const t=n.value;if(v(e,t)){if(g(e,n),!e[a])return}else r&&(e[f]&&(n.value.now=Date.now()),e[u].unshiftNode(n));return t.value}},v=(e,t)=>{if(!t||!t.maxAge&&!e[l])return!1;const r=Date.now()-t.now;return t.maxAge?r>t.maxAge:e[l]&&r>e[l]},d=e=>{if(e[i]>e[s])for(let t=e[u].tail;e[i]>e[s]&&null!==t;){const r=t.prev;g(e,t),t=r}},g=(e,t)=>{if(t){const r=t.value;e[h]&&e[h](r.key,r.value),e[i]-=r.length,e[p].delete(r.key),e[u].removeNode(t)}};class I{constructor(e,t,r,n,s){this.key=e,this.value=t,this.length=r,this.now=n,this.maxAge=s||0}}const $=(e,t,r,n)=>{let s=r.value;v(e,s)&&(g(e,r),e[a]||(s=void 0)),s&&t.call(n,s.value,s.key,e)};e.exports=class{constructor(e){if("number"===typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!==typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[s]=e.max||1/0;const t=e.length||E;if(this[o]="function"!==typeof t?E:t,this[a]=e.stale||!1,e.maxAge&&"number"!==typeof e.maxAge)throw new TypeError("maxAge must be a number");this[l]=e.maxAge||0,this[h]=e.dispose,this[c]=e.noDisposeOnSet||!1,this[f]=e.updateAgeOnGet||!1,this.reset()}set max(e){if("number"!==typeof e||e<0)throw new TypeError("max must be a non-negative number");this[s]=e||1/0,d(this)}get max(){return this[s]}set allowStale(e){this[a]=!!e}get allowStale(){return this[a]}set maxAge(e){if("number"!==typeof e)throw new TypeError("maxAge must be a non-negative number");this[l]=e,d(this)}get maxAge(){return this[l]}set lengthCalculator(e){"function"!==typeof e&&(e=E),e!==this[o]&&(this[o]=e,this[i]=0,this[u].forEach((e=>{e.length=this[o](e.value,e.key),this[i]+=e.length}))),d(this)}get lengthCalculator(){return this[o]}get length(){return this[i]}get itemCount(){return this[u].length}rforEach(e,t){t=t||this;for(let r=this[u].tail;null!==r;){const n=r.prev;$(this,e,r,t),r=n}}forEach(e,t){t=t||this;for(let r=this[u].head;null!==r;){const n=r.next;$(this,e,r,t),r=n}}keys(){return this[u].toArray().map((e=>e.key))}values(){return this[u].toArray().map((e=>e.value))}reset(){this[h]&&this[u]&&this[u].length&&this[u].forEach((e=>this[h](e.key,e.value))),this[p]=new Map,this[u]=new n,this[i]=0}dump(){return this[u].map((e=>!v(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[u]}set(e,t,r){if((r=r||this[l])&&"number"!==typeof r)throw new TypeError("maxAge must be a number");const n=r?Date.now():0,a=this[o](t,e);if(this[p].has(e)){if(a>this[s])return g(this,this[p].get(e)),!1;const o=this[p].get(e).value;return this[h]&&(this[c]||this[h](e,o.value)),o.now=n,o.maxAge=r,o.value=t,this[i]+=a-o.length,o.length=a,this.get(e),d(this),!0}const f=new I(e,t,a,n,r);return f.length>this[s]?(this[h]&&this[h](e,t),!1):(this[i]+=f.length,this[u].unshift(f),this[p].set(e,this[u].head),d(this),!0)}has(e){if(!this[p].has(e))return!1;const t=this[p].get(e).value;return!v(this,t)}get(e){return m(this,e,!0)}peek(e){return m(this,e,!1)}pop(){const e=this[u].tail;return e?(g(this,e),e.value):null}del(e){g(this,this[p].get(e))}load(e){this.reset();const t=Date.now();for(let r=e.length-1;r>=0;r--){const n=e[r],s=n.e||0;if(0===s)this.set(n.k,n.v);else{const e=s-t;e>0&&this.set(n.k,n.v,e)}}}prune(){this[p].forEach(((e,t)=>m(this,t,!1)))}}},22257:function(e,t,r){const n=Symbol("SemVer ANY");class s{static get ANY(){return n}constructor(e,t){if(t=i(t),e instanceof s){if(e.loose===!!t.loose)return e;e=e.value}h("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===n?this.value="":this.value=this.operator+this.semver.version,h("comp",this)}parse(e){const t=this.options.loose?o[a.COMPARATORLOOSE]:o[a.COMPARATOR],r=e.match(t);if(!r)throw new TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new c(r[2],this.options.loose):this.semver=n}toString(){return this.value}test(e){if(h("Comparator.test",e,this.options.loose),this.semver===n||e===n)return!0;if("string"===typeof e)try{e=new c(e,this.options)}catch(t){return!1}return l(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof s))throw new TypeError("a Comparator is required");if(t&&"object"===typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new u(e.value,t).test(this.value);if(""===e.operator)return""===e.value||new u(this.value,t).test(e.semver);const r=(">="===this.operator||">"===this.operator)&&(">="===e.operator||">"===e.operator),n=("<="===this.operator||"<"===this.operator)&&("<="===e.operator||"<"===e.operator),i=this.semver.version===e.semver.version,o=(">="===this.operator||"<="===this.operator)&&(">="===e.operator||"<="===e.operator),a=l(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),h=l(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return r||n||i&&o||a||h}}e.exports=s;const i=r(12893),{re:o,t:a}=r(55765),l=r(7539),h=r(74225),c=r(26376),u=r(66902)},66902:function(e,t,r){class n{constructor(e,t){if(t=i(t),e instanceof n)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new n(e.raw,t);if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${e}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter((e=>!E(e[0]))),0===this.set.length)this.set=[e];else if(this.set.length>1)for(const t of this.set)if(1===t.length&&m(t[0])){this.set=[t];break}}this.format()}format(){return this.range=this.set.map((e=>e.join(" ").trim())).join("||").trim(),this.range}toString(){return this.range}parseRange(e){e=e.trim();const t=`parseRange:${Object.keys(this.options).join(",")}:${e}`,r=s.get(t);if(r)return r;const n=this.options.loose,i=n?h[c.HYPHENRANGELOOSE]:h[c.HYPHENRANGE];e=e.replace(i,L(this.options.includePrerelease)),a("hyphen replace",e),e=e.replace(h[c.COMPARATORTRIM],u),a("comparator trim",e,h[c.COMPARATORTRIM]),e=(e=(e=e.replace(h[c.TILDETRIM],p)).replace(h[c.CARETTRIM],f)).split(/\s+/).join(" ");const l=n?h[c.COMPARATORLOOSE]:h[c.COMPARATOR],m=e.split(" ").map((e=>d(e,this.options))).join(" ").split(/\s+/).map((e=>A(e,this.options))).filter(this.options.loose?e=>!!e.match(l):()=>!0).map((e=>new o(e,this.options))),v=(m.length,new Map);for(const s of m){if(E(s))return[s];v.set(s.value,s)}v.size>1&&v.has("")&&v.delete("");const g=[...v.values()];return s.set(t,g),g}intersects(e,t){if(!(e instanceof n))throw new TypeError("a Range is required");return this.set.some((r=>v(r,t)&&e.set.some((e=>v(e,t)&&r.every((r=>e.every((e=>r.intersects(e,t)))))))))}test(e){if(!e)return!1;if("string"===typeof e)try{e=new l(e,this.options)}catch(t){return!1}for(let r=0;r<this.set.length;r++)if(T(this.set[r],e,this.options))return!0;return!1}}e.exports=n;const s=new(r(39593))({max:1e3}),i=r(12893),o=r(22257),a=r(74225),l=r(26376),{re:h,t:c,comparatorTrimReplace:u,tildeTrimReplace:p,caretTrimReplace:f}=r(55765),E=e=>"<0.0.0-0"===e.value,m=e=>""===e.value,v=(e,t)=>{let r=!0;const n=e.slice();let s=n.pop();for(;r&&n.length;)r=n.every((e=>s.intersects(e,t))),s=n.pop();return r},d=(e,t)=>(a("comp",e,t),e=R(e,t),a("caret",e),e=I(e,t),a("tildes",e),e=N(e,t),a("xrange",e),e=y(e,t),a("stars",e),e),g=e=>!e||"x"===e.toLowerCase()||"*"===e,I=(e,t)=>e.trim().split(/\s+/).map((e=>$(e,t))).join(" "),$=(e,t)=>{const r=t.loose?h[c.TILDELOOSE]:h[c.TILDE];return e.replace(r,((t,r,n,s,i)=>{let o;return a("tilde",e,t,r,n,s,i),g(r)?o="":g(n)?o=`>=${r}.0.0 <${+r+1}.0.0-0`:g(s)?o=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:i?(a("replaceTilde pr",i),o=`>=${r}.${n}.${s}-${i} <${r}.${+n+1}.0-0`):o=`>=${r}.${n}.${s} <${r}.${+n+1}.0-0`,a("tilde return",o),o}))},R=(e,t)=>e.trim().split(/\s+/).map((e=>w(e,t))).join(" "),w=(e,t)=>{a("caret",e,t);const r=t.loose?h[c.CARETLOOSE]:h[c.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,((t,r,s,i,o)=>{let l;return a("caret",e,t,r,s,i,o),g(r)?l="":g(s)?l=`>=${r}.0.0${n} <${+r+1}.0.0-0`:g(i)?l="0"===r?`>=${r}.${s}.0${n} <${r}.${+s+1}.0-0`:`>=${r}.${s}.0${n} <${+r+1}.0.0-0`:o?(a("replaceCaret pr",o),l="0"===r?"0"===s?`>=${r}.${s}.${i}-${o} <${r}.${s}.${+i+1}-0`:`>=${r}.${s}.${i}-${o} <${r}.${+s+1}.0-0`:`>=${r}.${s}.${i}-${o} <${+r+1}.0.0-0`):(a("no pr"),l="0"===r?"0"===s?`>=${r}.${s}.${i}${n} <${r}.${s}.${+i+1}-0`:`>=${r}.${s}.${i}${n} <${r}.${+s+1}.0-0`:`>=${r}.${s}.${i} <${+r+1}.0.0-0`),a("caret return",l),l}))},N=(e,t)=>(a("replaceXRanges",e,t),e.split(/\s+/).map((e=>O(e,t))).join(" ")),O=(e,t)=>{e=e.trim();const r=t.loose?h[c.XRANGELOOSE]:h[c.XRANGE];return e.replace(r,((r,n,s,i,o,l)=>{a("xRange",e,r,n,s,i,o,l);const h=g(s),c=h||g(i),u=c||g(o),p=u;return"="===n&&p&&(n=""),l=t.includePrerelease?"-0":"",h?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&p?(c&&(i=0),o=0,">"===n?(n=">=",c?(s=+s+1,i=0,o=0):(i=+i+1,o=0)):"<="===n&&(n="<",c?s=+s+1:i=+i+1),"<"===n&&(l="-0"),r=`${n+s}.${i}.${o}${l}`):c?r=`>=${s}.0.0${l} <${+s+1}.0.0-0`:u&&(r=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),a("xRange return",r),r}))},y=(e,t)=>(a("replaceStars",e,t),e.trim().replace(h[c.STAR],"")),A=(e,t)=>(a("replaceGTE0",e,t),e.trim().replace(h[t.includePrerelease?c.GTE0PRE:c.GTE0],"")),L=e=>(t,r,n,s,i,o,a,l,h,c,u,p,f)=>`${r=g(n)?"":g(s)?`>=${n}.0.0${e?"-0":""}`:g(i)?`>=${n}.${s}.0${e?"-0":""}`:o?`>=${r}`:`>=${r}${e?"-0":""}`} ${l=g(h)?"":g(c)?`<${+h+1}.0.0-0`:g(u)?`<${h}.${+c+1}.0-0`:p?`<=${h}.${c}.${u}-${p}`:e?`<${h}.${c}.${+u+1}-0`:`<=${l}`}`.trim(),T=(e,t,r)=>{for(let n=0;n<e.length;n++)if(!e[n].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(a(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){const n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0}},26376:function(e,t,r){const n=r(74225),{MAX_LENGTH:s,MAX_SAFE_INTEGER:i}=r(83295),{re:o,t:a}=r(55765),l=r(12893),{compareIdentifiers:h}=r(86742);class c{constructor(e,t){if(t=l(t),e instanceof c){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!==typeof e)throw new TypeError(`Invalid Version: ${e}`);if(e.length>s)throw new TypeError(`version is longer than ${s} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?o[a.LOOSE]:o[a.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<i)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof c)){if("string"===typeof e&&e===this.version)return 0;e=new c(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof c||(e=new c(e,this.options)),h(this.major,e.major)||h(this.minor,e.minor)||h(this.patch,e.patch)}comparePre(e){if(e instanceof c||(e=new c(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],s=e.prerelease[t];if(n("prerelease compare",t,r,s),void 0===r&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===r)return-1;if(r!==s)return h(r,s)}while(++t)}compareBuild(e){e instanceof c||(e=new c(e,this.options));let t=0;do{const r=this.build[t],s=e.build[t];if(n("prerelease compare",t,r,s),void 0===r&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===r)return-1;if(r!==s)return h(r,s)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"===typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}}e.exports=c},13507:function(e,t,r){const n=r(33959);e.exports=(e,t)=>{const r=n(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},7539:function(e,t,r){const n=r(58718),s=r(81194),i=r(71312),o=r(25903),a=r(21544),l=r(12056);e.exports=(e,t,r,h)=>{switch(t){case"===":return"object"===typeof e&&(e=e.version),"object"===typeof r&&(r=r.version),e===r;case"!==":return"object"===typeof e&&(e=e.version),"object"===typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return n(e,r,h);case"!=":return s(e,r,h);case">":return i(e,r,h);case">=":return o(e,r,h);case"<":return a(e,r,h);case"<=":return l(e,r,h);default:throw new TypeError(`Invalid operator: ${t}`)}}},99038:function(e,t,r){const n=r(26376),s=r(33959),{re:i,t:o}=r(55765);e.exports=(e,t)=>{if(e instanceof n)return e;if("number"===typeof e&&(e=String(e)),"string"!==typeof e)return null;let r=null;if((t=t||{}).rtl){let t;for(;(t=i[o.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&t.index+t[0].length===r.index+r[0].length||(r=t),i[o.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;i[o.COERCERTL].lastIndex=-1}else r=e.match(i[o.COERCE]);return null===r?null:s(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,t)}},88880:function(e,t,r){const n=r(26376);e.exports=(e,t,r)=>{const s=new n(e,r),i=new n(t,r);return s.compare(i)||s.compareBuild(i)}},27880:function(e,t,r){const n=r(46269);e.exports=(e,t)=>n(e,t,!0)},46269:function(e,t,r){const n=r(26376);e.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},62378:function(e,t,r){const n=r(33959),s=r(58718);e.exports=(e,t)=>{if(s(e,t))return null;{const r=n(e),s=n(t),i=r.prerelease.length||s.prerelease.length,o=i?"pre":"",a=i?"prerelease":"";for(const e in r)if(("major"===e||"minor"===e||"patch"===e)&&r[e]!==s[e])return o+e;return a}}},58718:function(e,t,r){const n=r(46269);e.exports=(e,t,r)=>0===n(e,t,r)},71312:function(e,t,r){const n=r(46269);e.exports=(e,t,r)=>n(e,t,r)>0},25903:function(e,t,r){const n=r(46269);e.exports=(e,t,r)=>n(e,t,r)>=0},20253:function(e,t,r){const n=r(26376);e.exports=(e,t,r,s)=>{"string"===typeof r&&(s=r,r=void 0);try{return new n(e,r).inc(t,s).version}catch(i){return null}}},21544:function(e,t,r){const n=r(46269);e.exports=(e,t,r)=>n(e,t,r)<0},12056:function(e,t,r){const n=r(46269);e.exports=(e,t,r)=>n(e,t,r)<=0},38679:function(e,t,r){const n=r(26376);e.exports=(e,t)=>new n(e,t).major},87789:function(e,t,r){const n=r(26376);e.exports=(e,t)=>new n(e,t).minor},81194:function(e,t,r){const n=r(46269);e.exports=(e,t,r)=>0!==n(e,t,r)},33959:function(e,t,r){const{MAX_LENGTH:n}=r(83295),{re:s,t:i}=r(55765),o=r(26376),a=r(12893);e.exports=(e,t)=>{if(t=a(t),e instanceof o)return e;if("string"!==typeof e)return null;if(e.length>n)return null;if(!(t.loose?s[i.LOOSE]:s[i.FULL]).test(e))return null;try{return new o(e,t)}catch(r){return null}}},52358:function(e,t,r){const n=r(26376);e.exports=(e,t)=>new n(e,t).patch},57559:function(e,t,r){const n=r(33959);e.exports=(e,t)=>{const r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}},79795:function(e,t,r){const n=r(46269);e.exports=(e,t,r)=>n(t,e,r)},63657:function(e,t,r){const n=r(88880);e.exports=(e,t)=>e.sort(((e,r)=>n(r,e,t)))},45712:function(e,t,r){const n=r(66902);e.exports=(e,t,r)=>{try{t=new n(t,r)}catch(s){return!1}return t.test(e)}},21100:function(e,t,r){const n=r(88880);e.exports=(e,t)=>e.sort(((e,r)=>n(e,r,t)))},76397:function(e,t,r){const n=r(33959);e.exports=(e,t)=>{const r=n(e,t);return r?r.version:null}},81249:function(e,t,r){const n=r(55765);e.exports={re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:r(83295).SEMVER_SPEC_VERSION,SemVer:r(26376),compareIdentifiers:r(86742).compareIdentifiers,rcompareIdentifiers:r(86742).rcompareIdentifiers,parse:r(33959),valid:r(76397),clean:r(13507),inc:r(20253),diff:r(62378),major:r(38679),minor:r(87789),patch:r(52358),prerelease:r(57559),compare:r(46269),rcompare:r(79795),compareLoose:r(27880),compareBuild:r(88880),sort:r(21100),rsort:r(63657),gt:r(71312),lt:r(21544),eq:r(58718),neq:r(81194),gte:r(25903),lte:r(12056),cmp:r(7539),coerce:r(99038),Comparator:r(22257),Range:r(66902),satisfies:r(45712),toComparators:r(51042),maxSatisfying:r(85775),minSatisfying:r(71657),minVersion:r(95316),validRange:r(89042),outside:r(6826),gtr:r(97606),ltr:r(50032),intersects:r(82937),simplifyRange:r(17908),subset:r(50799)}},83295:function(e){const t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:t,MAX_SAFE_COMPONENT_LENGTH:16}},74225:function(e,t,r){var n=r(34155);const s="object"===typeof n&&n.env&&n.env.NODE_DEBUG&&/\bsemver\b/i.test(n.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=s},86742:function(e){const t=/^[0-9]+$/,r=(e,r)=>{const n=t.test(e),s=t.test(r);return n&&s&&(e=+e,r=+r),e===r?0:n&&!s?-1:s&&!n?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},12893:function(e){const t=["includePrerelease","loose","rtl"];e.exports=e=>e?"object"!==typeof e?{loose:!0}:t.filter((t=>e[t])).reduce(((e,t)=>(e[t]=!0,e)),{}):{}},55765:function(e,t,r){const{MAX_SAFE_COMPONENT_LENGTH:n}=r(83295),s=r(74225),i=(t=e.exports={}).re=[],o=t.src=[],a=t.t={};let l=0;const h=(e,t,r)=>{const n=l++;s(n,t),a[e]=n,o[n]=t,i[n]=new RegExp(t,r?"g":void 0)};h("NUMERICIDENTIFIER","0|[1-9]\\d*"),h("NUMERICIDENTIFIERLOOSE","[0-9]+"),h("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),h("MAINVERSION",`(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})`),h("MAINVERSIONLOOSE",`(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})`),h("PRERELEASEIDENTIFIER",`(?:${o[a.NUMERICIDENTIFIER]}|${o[a.NONNUMERICIDENTIFIER]})`),h("PRERELEASEIDENTIFIERLOOSE",`(?:${o[a.NUMERICIDENTIFIERLOOSE]}|${o[a.NONNUMERICIDENTIFIER]})`),h("PRERELEASE",`(?:-(${o[a.PRERELEASEIDENTIFIER]}(?:\\.${o[a.PRERELEASEIDENTIFIER]})*))`),h("PRERELEASELOOSE",`(?:-?(${o[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[a.PRERELEASEIDENTIFIERLOOSE]})*))`),h("BUILDIDENTIFIER","[0-9A-Za-z-]+"),h("BUILD",`(?:\\+(${o[a.BUILDIDENTIFIER]}(?:\\.${o[a.BUILDIDENTIFIER]})*))`),h("FULLPLAIN",`v?${o[a.MAINVERSION]}${o[a.PRERELEASE]}?${o[a.BUILD]}?`),h("FULL",`^${o[a.FULLPLAIN]}$`),h("LOOSEPLAIN",`[v=\\s]*${o[a.MAINVERSIONLOOSE]}${o[a.PRERELEASELOOSE]}?${o[a.BUILD]}?`),h("LOOSE",`^${o[a.LOOSEPLAIN]}$`),h("GTLT","((?:<|>)?=?)"),h("XRANGEIDENTIFIERLOOSE",`${o[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),h("XRANGEIDENTIFIER",`${o[a.NUMERICIDENTIFIER]}|x|X|\\*`),h("XRANGEPLAIN",`[v=\\s]*(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:${o[a.PRERELEASE]})?${o[a.BUILD]}?)?)?`),h("XRANGEPLAINLOOSE",`[v=\\s]*(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:${o[a.PRERELEASELOOSE]})?${o[a.BUILD]}?)?)?`),h("XRANGE",`^${o[a.GTLT]}\\s*${o[a.XRANGEPLAIN]}$`),h("XRANGELOOSE",`^${o[a.GTLT]}\\s*${o[a.XRANGEPLAINLOOSE]}$`),h("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),h("COERCERTL",o[a.COERCE],!0),h("LONETILDE","(?:~>?)"),h("TILDETRIM",`(\\s*)${o[a.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",h("TILDE",`^${o[a.LONETILDE]}${o[a.XRANGEPLAIN]}$`),h("TILDELOOSE",`^${o[a.LONETILDE]}${o[a.XRANGEPLAINLOOSE]}$`),h("LONECARET","(?:\\^)"),h("CARETTRIM",`(\\s*)${o[a.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",h("CARET",`^${o[a.LONECARET]}${o[a.XRANGEPLAIN]}$`),h("CARETLOOSE",`^${o[a.LONECARET]}${o[a.XRANGEPLAINLOOSE]}$`),h("COMPARATORLOOSE",`^${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]})$|^$`),h("COMPARATOR",`^${o[a.GTLT]}\\s*(${o[a.FULLPLAIN]})$|^$`),h("COMPARATORTRIM",`(\\s*)${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]}|${o[a.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",h("HYPHENRANGE",`^\\s*(${o[a.XRANGEPLAIN]})\\s+-\\s+(${o[a.XRANGEPLAIN]})\\s*$`),h("HYPHENRANGELOOSE",`^\\s*(${o[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[a.XRANGEPLAINLOOSE]})\\s*$`),h("STAR","(<|>)?=?\\s*\\*"),h("GTE0","^\\s*>=\\s*0.0.0\\s*$"),h("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},97606:function(e,t,r){const n=r(6826);e.exports=(e,t,r)=>n(e,t,">",r)},82937:function(e,t,r){const n=r(66902);e.exports=(e,t,r)=>(e=new n(e,r),t=new n(t,r),e.intersects(t))},50032:function(e,t,r){const n=r(6826);e.exports=(e,t,r)=>n(e,t,"<",r)},85775:function(e,t,r){const n=r(26376),s=r(66902);e.exports=(e,t,r)=>{let i=null,o=null,a=null;try{a=new s(t,r)}catch(l){return null}return e.forEach((e=>{a.test(e)&&(i&&-1!==o.compare(e)||(i=e,o=new n(i,r)))})),i}},71657:function(e,t,r){const n=r(26376),s=r(66902);e.exports=(e,t,r)=>{let i=null,o=null,a=null;try{a=new s(t,r)}catch(l){return null}return e.forEach((e=>{a.test(e)&&(i&&1!==o.compare(e)||(i=e,o=new n(i,r)))})),i}},95316:function(e,t,r){const n=r(26376),s=r(66902),i=r(71312);e.exports=(e,t)=>{e=new s(e,t);let r=new n("0.0.0");if(e.test(r))return r;if(r=new n("0.0.0-0"),e.test(r))return r;r=null;for(let s=0;s<e.set.length;++s){const t=e.set[s];let o=null;t.forEach((e=>{const t=new n(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":o&&!i(t,o)||(o=t);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${e.operator}`)}})),!o||r&&!i(r,o)||(r=o)}return r&&e.test(r)?r:null}},6826:function(e,t,r){const n=r(26376),s=r(22257),{ANY:i}=s,o=r(66902),a=r(45712),l=r(71312),h=r(21544),c=r(12056),u=r(25903);e.exports=(e,t,r,p)=>{let f,E,m,v,d;switch(e=new n(e,p),t=new o(t,p),r){case">":f=l,E=c,m=h,v=">",d=">=";break;case"<":f=h,E=u,m=l,v="<",d="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,p))return!1;for(let n=0;n<t.set.length;++n){const r=t.set[n];let o=null,a=null;if(r.forEach((e=>{e.semver===i&&(e=new s(">=0.0.0")),o=o||e,a=a||e,f(e.semver,o.semver,p)?o=e:m(e.semver,a.semver,p)&&(a=e)})),o.operator===v||o.operator===d)return!1;if((!a.operator||a.operator===v)&&E(e,a.semver))return!1;if(a.operator===d&&m(e,a.semver))return!1}return!0}},17908:function(e,t,r){const n=r(45712),s=r(46269);e.exports=(e,t,r)=>{const i=[];let o=null,a=null;const l=e.sort(((e,t)=>s(e,t,r)));for(const s of l){n(s,t,r)?(a=s,o||(o=s)):(a&&i.push([o,a]),a=null,o=null)}o&&i.push([o,null]);const h=[];for(const[n,s]of i)n===s?h.push(n):s||n!==l[0]?s?n===l[0]?h.push(`<=${s}`):h.push(`${n} - ${s}`):h.push(`>=${n}`):h.push("*");const c=h.join(" || "),u="string"===typeof t.raw?t.raw:String(t);return c.length<u.length?c:t}},50799:function(e,t,r){const n=r(66902),s=r(22257),{ANY:i}=s,o=r(45712),a=r(46269),l=(e,t,r)=>{if(e===t)return!0;if(1===e.length&&e[0].semver===i){if(1===t.length&&t[0].semver===i)return!0;e=r.includePrerelease?[new s(">=0.0.0-0")]:[new s(">=0.0.0")]}if(1===t.length&&t[0].semver===i){if(r.includePrerelease)return!0;t=[new s(">=0.0.0")]}const n=new Set;let l,u,p,f,E,m,v;for(const s of e)">"===s.operator||">="===s.operator?l=h(l,s,r):"<"===s.operator||"<="===s.operator?u=c(u,s,r):n.add(s.semver);if(n.size>1)return null;if(l&&u){if(p=a(l.semver,u.semver,r),p>0)return null;if(0===p&&(">="!==l.operator||"<="!==u.operator))return null}for(const s of n){if(l&&!o(s,String(l),r))return null;if(u&&!o(s,String(u),r))return null;for(const e of t)if(!o(s,String(e),r))return!1;return!0}let d=!(!u||r.includePrerelease||!u.semver.prerelease.length)&&u.semver,g=!(!l||r.includePrerelease||!l.semver.prerelease.length)&&l.semver;d&&1===d.prerelease.length&&"<"===u.operator&&0===d.prerelease[0]&&(d=!1);for(const s of t){if(v=v||">"===s.operator||">="===s.operator,m=m||"<"===s.operator||"<="===s.operator,l)if(g&&s.semver.prerelease&&s.semver.prerelease.length&&s.semver.major===g.major&&s.semver.minor===g.minor&&s.semver.patch===g.patch&&(g=!1),">"===s.operator||">="===s.operator){if(f=h(l,s,r),f===s&&f!==l)return!1}else if(">="===l.operator&&!o(l.semver,String(s),r))return!1;if(u)if(d&&s.semver.prerelease&&s.semver.prerelease.length&&s.semver.major===d.major&&s.semver.minor===d.minor&&s.semver.patch===d.patch&&(d=!1),"<"===s.operator||"<="===s.operator){if(E=c(u,s,r),E===s&&E!==u)return!1}else if("<="===u.operator&&!o(u.semver,String(s),r))return!1;if(!s.operator&&(u||l)&&0!==p)return!1}return!(l&&m&&!u&&0!==p)&&(!(u&&v&&!l&&0!==p)&&(!g&&!d))},h=(e,t,r)=>{if(!e)return t;const n=a(e.semver,t.semver,r);return n>0?e:n<0||">"===t.operator&&">="===e.operator?t:e},c=(e,t,r)=>{if(!e)return t;const n=a(e.semver,t.semver,r);return n<0?e:n>0||"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,r={})=>{if(e===t)return!0;e=new n(e,r),t=new n(t,r);let s=!1;e:for(const n of e.set){for(const e of t.set){const t=l(n,e,r);if(s=s||null!==t,t)continue e}if(s)return!1}return!0}},51042:function(e,t,r){const n=r(66902);e.exports=(e,t)=>new n(e,t).set.map((e=>e.map((e=>e.value)).join(" ").trim().split(" ")))},89042:function(e,t,r){const n=r(66902);e.exports=(e,t)=>{try{return new n(e,t).range||"*"}catch(r){return null}}},49602:function(e){"use strict";e.exports=function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}},34411:function(e,t,r){"use strict";function n(e){var t=this;if(t instanceof n||(t=new n),t.tail=null,t.head=null,t.length=0,e&&"function"===typeof e.forEach)e.forEach((function(e){t.push(e)}));else if(arguments.length>0)for(var r=0,s=arguments.length;r<s;r++)t.push(arguments[r]);return t}function s(e,t,r){var n=t===e.head?new a(r,null,t,e):new a(r,t,t.next,e);return null===n.next&&(e.tail=n),null===n.prev&&(e.head=n),e.length++,n}function i(e,t){e.tail=new a(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function o(e,t){e.head=new a(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function a(e,t,r,n){if(!(this instanceof a))return new a(e,t,r,n);this.list=n,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}e.exports=n,n.Node=a,n.create=n,n.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,r=e.prev;return t&&(t.prev=r),r&&(r.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=r),e.list.length--,e.next=null,e.prev=null,e.list=null,t},n.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},n.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},n.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)i(this,arguments[e]);return this.length},n.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)o(this,arguments[e]);return this.length},n.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},n.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},n.prototype.forEach=function(e,t){t=t||this;for(var r=this.head,n=0;null!==r;n++)e.call(t,r.value,n,this),r=r.next},n.prototype.forEachReverse=function(e,t){t=t||this;for(var r=this.tail,n=this.length-1;null!==r;n--)e.call(t,r.value,n,this),r=r.prev},n.prototype.get=function(e){for(var t=0,r=this.head;null!==r&&t<e;t++)r=r.next;if(t===e&&null!==r)return r.value},n.prototype.getReverse=function(e){for(var t=0,r=this.tail;null!==r&&t<e;t++)r=r.prev;if(t===e&&null!==r)return r.value},n.prototype.map=function(e,t){t=t||this;for(var r=new n,s=this.head;null!==s;)r.push(e.call(t,s.value,this)),s=s.next;return r},n.prototype.mapReverse=function(e,t){t=t||this;for(var r=new n,s=this.tail;null!==s;)r.push(e.call(t,s.value,this)),s=s.prev;return r},n.prototype.reduce=function(e,t){var r,n=this.head;if(arguments.length>1)r=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");n=this.head.next,r=this.head.value}for(var s=0;null!==n;s++)r=e(r,n.value,s),n=n.next;return r},n.prototype.reduceReverse=function(e,t){var r,n=this.tail;if(arguments.length>1)r=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");n=this.tail.prev,r=this.tail.value}for(var s=this.length-1;null!==n;s--)r=e(r,n.value,s),n=n.prev;return r},n.prototype.toArray=function(){for(var e=new Array(this.length),t=0,r=this.head;null!==r;t++)e[t]=r.value,r=r.next;return e},n.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,r=this.tail;null!==r;t++)e[t]=r.value,r=r.prev;return e},n.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new n;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var s=0,i=this.head;null!==i&&s<e;s++)i=i.next;for(;null!==i&&s<t;s++,i=i.next)r.push(i.value);return r},n.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new n;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var s=this.length,i=this.tail;null!==i&&s>t;s--)i=i.prev;for(;null!==i&&s>e;s--,i=i.prev)r.push(i.value);return r},n.prototype.splice=function(e,t,...r){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var n=0,i=this.head;null!==i&&n<e;n++)i=i.next;var o=[];for(n=0;i&&n<t;n++)o.push(i.value),i=this.removeNode(i);null===i&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev);for(n=0;n<r.length;n++)i=s(this,i,r[n]);return o},n.prototype.reverse=function(){for(var e=this.head,t=this.tail,r=e;null!==r;r=r.prev){var n=r.prev;r.prev=r.next,r.next=n}return this.head=t,this.tail=e,this};try{r(49602)(n)}catch(l){}}}]);