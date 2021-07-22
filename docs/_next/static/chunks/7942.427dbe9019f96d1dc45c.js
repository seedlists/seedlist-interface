(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7942],{4744:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.binanceDescribePath=void 0;const r=n(97922);t.binanceDescribePath=function(e){let t={verbose:r.addressNListToBIP32(e),coin:"Binance",isKnown:!1};if(5!=e.length)return t;if(2147483692!=e[0])return t;if(e[1]!=2147483648+r.slip44ByCoin("Binance"))return t;if((2147483648&e[2])>>>0!==2147483648)return t;if(0!==e[3]||0!==e[4])return t;let n=2147483647&e[2];return{verbose:`Binance Account #${n}`,accountIdx:n,wholeAccount:!0,coin:"Binance",isKnown:!0,isPrefork:!1}}},78645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.segwitNativeAccount=t.segwitAccount=t.legacyAccount=t.describeUTXOPath=t.unknownUTXOPath=t.BTCOutputAddressType=t.BTCOutputScriptType=t.BTCInputScriptType=void 0;const r=n(97922);var i;function s(e,t,n){return{verbose:r.addressNListToBIP32(e),coin:t,scriptType:n,isKnown:!1}}!function(e){e.CashAddr="cashaddr",e.Bech32="bech32",e.SpendAddress="p2pkh",e.SpendMultisig="p2sh",e.External="external",e.SpendWitness="p2wpkh",e.SpendP2SHWitness="p2sh-p2wpkh"}(i=t.BTCInputScriptType||(t.BTCInputScriptType={})),function(e){e.PayToAddress="p2pkh",e.PayToMultisig="p2sh",e.PayToWitness="p2wpkh",e.PayToP2SHWitness="p2sh-p2wpkh"}(t.BTCOutputScriptType||(t.BTCOutputScriptType={})),function(e){e.Spend="spend",e.Transfer="transfer",e.Change="change",e.Exchange="exchange"}(t.BTCOutputAddressType||(t.BTCOutputAddressType={})),t.unknownUTXOPath=s,t.describeUTXOPath=function(e,t,n){const o=s(e,t,n);if(3!==e.length&&5!==e.length)return o;if((2147483648&e[0])>>>0!==2147483648)return o;let c=2147483647&e[0];if(![44,49,84].includes(c))return o;if(44===c&&n!==i.SpendAddress)return o;if(49===c&&n!==i.SpendP2SHWitness)return o;if(84===c&&n!==i.SpendWitness)return o;let a=3===e.length,u={[i.SpendAddress]:["Legacy"],[i.SpendP2SHWitness]:[],[i.SpendWitness]:["Segwit Native"]}[n],l=!1;const f=r.slip44ByCoin(t);if(void 0===f)return o;if(e[1]!==2147483648+f)switch(t){case"BitcoinCash":case"BitcoinGold":if(e[1]===2147483648+r.slip44ByCoin("Bitcoin")){l=!0;break}return o;case"BitcoinSV":if(e[1]===2147483648+r.slip44ByCoin("Bitcoin")||e[1]===2147483648+r.slip44ByCoin("BitcoinCash")){l=!0;break}return o;default:return o}let p=l?["Prefork"]:[];switch(t){case"Bitcoin":case"Litecoin":case"BitcoinGold":case"Testnet":u&&(p=p.concat(u))}let h=p.length?` (${p.join(", ")})`:"",d=2147483647&e[2];if(a)return{coin:t,verbose:`${t} Account #${d}${h}`,accountIdx:d,wholeAccount:!0,isKnown:!0,scriptType:n,isPrefork:l};{let r=1===e[3]?"Change ":"",i=e[4];return{coin:t,verbose:`${t} Account #${d}, ${r}Address #${i}${h}`,accountIdx:d,addressIdx:i,wholeAccount:!1,isKnown:!0,isChange:1===e[3],scriptType:n,isPrefork:l}}},t.legacyAccount=function(e,t,n){return{coin:e,scriptType:i.SpendAddress,addressNList:[2147483692,2147483648+t,2147483648+n]}},t.segwitAccount=function(e,t,n){return{coin:e,scriptType:i.SpendP2SHWitness,addressNList:[2147483697,2147483648+t,2147483648+n]}},t.segwitNativeAccount=function(e,t,n){return{coin:e,scriptType:i.SpendWitness,addressNList:[2147483732,2147483648+t,2147483648+n]}}},61549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cosmosDescribePath=void 0;const r=n(97922);t.cosmosDescribePath=function(e){let t={verbose:r.addressNListToBIP32(e),coin:"Atom",isKnown:!1};if(5!=e.length)return t;if(2147483692!=e[0])return t;if(e[1]!=2147483648+r.slip44ByCoin("Atom"))return t;if((2147483648&e[2])>>>0!==2147483648)return t;if(0!==e[3]||0!==e[4])return t;let n=2147483647&e[2];return{verbose:`Cosmos Account #${n}`,accountIdx:n,wholeAccount:!0,coin:"Atom",isKnown:!0,isPrefork:!1}}},84821:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},5187:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},79125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.describeETHPath=void 0;const r=n(97922);t.describeETHPath=function(e){let t={verbose:r.addressNListToBIP32(e),coin:"Ethereum",isKnown:!1};if(5!==e.length)return t;if(2147483692!==e[0])return t;if(e[1]!==2147483648+r.slip44ByCoin("Ethereum"))return t;if((2147483648&e[2])>>>0!==2147483648)return t;if(0!==e[3])return t;if(0!==e[4])return t;let n=2147483647&e[2];return{verbose:`Ethereum Account #${n}`,accountIdx:n,wholeAccount:!0,coin:"Ethereum",isKnown:!0,isPrefork:!1}}},32654:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeEvent=t.Events=void 0,function(e){e.BUTTON_REQUEST="BUTTON_REQUEST",e.CANCEL="CANCEL",e.CHARACTER_REQUEST="CHARACTER_REQUEST",e.CONNECT="CONNECT",e.DISCONNECT="DISCONNECT",e.FAILURE="FAILURE",e.PASSPHRASE_REQUEST="PASSPHRASE_REQUEST",e.PIN_REQUEST="PIN_REQUEST",e.SUCCESS="SUCCESS",e.WORD_REQUEST="WORD_REQUEST"}(t.Events||(t.Events={})),t.makeEvent=function(e){return Object.assign({date:Date.now()},e)}},13146:function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.NavigateToDashboard=t.WebUSBCouldNotPair=t.WebUSBCouldNotInitialize=t.WebUSBNotAvailable=t.FirmwareUpdateRequired=t.WrongApp=t.SelectApp=t.ConflictingApp=t.PopupClosedError=t.DeviceLocked=t.DisconnectedDeviceDuringOperation=t.DeviceDisconnected=t.ActionCancelled=t.HDWalletError=t.HDWalletErrorType=void 0,function(e){e.ActionCancelled="ActionCancelled",e.DeviceDisconnected="DeviceDisconnected",e.DisconnectedDeviceDuringOperation="DisconnectedDeviceDuringOperation",e.DeviceLocked="DeviceLocked",e.PopupClosedError="PopupClosedError",e.ConflictingApp="ConflictingApp",e.SelectApp="SelectApp",e.WrongApp="WrongApp",e.FirmwareUpdateRequired="FirmwareUpdateRequired",e.WebUSBNotAvailable="WebUSBNotAvailable",e.WebUSBCouldNotInitialize="WebUSBCouldNotInitialize",e.WebUSBCouldNotPair="WebUSBCouldNotPair",e.NavigateToDashboard="NavigateToDashboard"}(n=t.HDWalletErrorType||(t.HDWalletErrorType={}));class r extends Error{constructor(e,t){super(e),this.name=t,this.type=t,this.message=e,"function"===typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}}t.HDWalletError=r;t.ActionCancelled=class extends r{constructor(){super("Action cancelled",n.ActionCancelled)}};t.DeviceDisconnected=class extends r{constructor(){super("Device disconnected",n.DeviceDisconnected)}};t.DisconnectedDeviceDuringOperation=class extends r{constructor(){super("Ledger device disconnected during operation",n.DisconnectedDeviceDuringOperation)}};t.DeviceLocked=class extends r{constructor(){super("Device locked",n.DeviceLocked)}};t.PopupClosedError=class extends r{constructor(){super("TrezorConnect popup closed",n.PopupClosedError)}};t.ConflictingApp=class extends r{constructor(e){super(`Conflicting Application: Another wallet is trying to connect with your ${e}.`,n.ConflictingApp),this.model=e}};t.SelectApp=class extends r{constructor(e,t){super(`Please open the ${t} app on your ${e}.`,n.SelectApp)}};t.WrongApp=class extends r{constructor(e,t){super(`Wrong app open. Please open the ${t} app on your ${e} and try again.`,n.WrongApp)}};t.FirmwareUpdateRequired=class extends r{constructor(e,t){super(`Firmware ${t} or later is required to use your ${e} with this client. Please update your device.`,n.FirmwareUpdateRequired)}};t.WebUSBNotAvailable=class extends r{constructor(){super("WebUSB is not available in this browser. We recommend trying Chrome.",n.WebUSBNotAvailable)}};t.WebUSBCouldNotInitialize=class extends r{constructor(e,t){super(`Could not initialize ${e}: ${t}`,n.WebUSBCouldNotInitialize)}};t.WebUSBCouldNotPair=class extends r{constructor(e,t){super(`Could not pair ${e}: ${t}`,n.WebUSBCouldNotPair)}};t.NavigateToDashboard=class extends r{constructor(e){super(`Please navigate to the dashboard of your ${e}.`,n.NavigateToDashboard)}}},60348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fioDescribePath=t.FioEncryptionContentType=t.Fio=void 0;const r=n(97922);var i;!function(e){let t;!function(e){e.REQUEST="new_funds_content",e.OBT="record_obt_data_content"}(t=e.ContentType||(e.ContentType={}))}(i=t.Fio||(t.Fio={})),t.FioEncryptionContentType=i.ContentType,t.fioDescribePath=function(e){let t={verbose:r.addressNListToBIP32(e),coin:"Fio",isKnown:!1};if(5!=e.length)return t;if(2147483692!=e[0])return t;if(e[1]!=2147483648+r.slip44ByCoin("Fio"))return t;if((2147483648&e[2])>>>0!==2147483648)return t;if(0!==e[3]||0!==e[4])return t;let n=2147483647&e[2];return{verbose:`Fio Account #${n}`,accountIdx:n,wholeAccount:!0,coin:"Fio",isKnown:!0,isPrefork:!1}}},67942:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(4744),t),i(n(78645),t),i(n(61549),t),i(n(84821),t),i(n(5187),t),i(n(79125),t),i(n(32654),t),i(n(13146),t),i(n(60348),t),i(n(89228),t),i(n(50753),t),i(n(27767),t),i(n(2412),t),i(n(75629),t),i(n(29466),t),i(n(70869),t),i(n(97922),t),i(n(18706),t)},89228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.kavaDescribePath=void 0;const r=n(97922);t.kavaDescribePath=function(e){let t={verbose:r.addressNListToBIP32(e),coin:"Kava",isKnown:!1};if(5!=e.length)return t;if(2147483692!=e[0])return t;if(e[1]!=2147483648+r.slip44ByCoin("Kava"))return t;if((2147483648&e[2])>>>0!==2147483648)return t;if(0!==e[3]||0!==e[4])return t;let n=2147483647&e[2];return{verbose:`Kava Account #${n}`,accountIdx:n,wholeAccount:!0,coin:"Kava",isKnown:!0,isPrefork:!1}}},50753:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{a(r.next(e))}catch(t){s(t)}}function c(e){try{a(r.throw(e))}catch(t){s(t)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}a((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Keyring=void 0;const c=s(n(56387));class a extends c.EventEmitter2{constructor(){super({wildcard:!0}),this.wallets={},this.aliases={}}add(e,t){const n=t||(new Date).toString();return!this.wallets[n]&&(this.wallets[n]=e,e.transport&&this.decorateEvents(n,e.transport),!0)}addAlias(e,t){this.aliases[t]=e}getAlias(e){const t=Object.keys(this.aliases),n=Object.values(this.aliases).indexOf(e);return-1!==n?t[n]:e}exec(e,...t){return o(this,void 0,void 0,(function*(){return Promise.all(Object.values(this.wallets).map((n=>{const r=n[e];if("function"!==typeof r)throw new Error(`can't exec non-existent method ${e}`);return r.call(n,...t)}))).then((e=>e.reduce(((e,t,n)=>(e[Object.keys(this.wallets)[n]]=t,e)),{})))}))}get(e){return e&&this.aliases[e]&&this.wallets[this.aliases[e]]?this.wallets[this.aliases[e]]:e&&this.wallets[e]?this.wallets[e]:Object.keys(this.wallets).length&&!e?Object.values(this.wallets)[0]:null}remove(e){return o(this,void 0,void 0,(function*(){const t=this.get(e);if(t)try{yield t.disconnect()}catch(n){console.error(n)}finally{let t=this.aliases[e];t?(delete this.aliases[e],delete this.wallets[t]):delete this.wallets[e]}}))}removeAll(){return o(this,void 0,void 0,(function*(){yield Promise.all(Object.keys(this.wallets).map(this.remove.bind(this))),this.aliases={}}))}disconnectAll(){return o(this,void 0,void 0,(function*(){const e=Object.values(this.wallets);for(let t=0;t<e.length;t++)yield e[t].disconnect()}))}decorateEvents(e,t){const n=this.get(e);if(!n)return;const r=n.getVendor();t.onAny(((t,...n)=>this.emit([r,e,"string"===typeof t?t:t.join(";")],[e,...n])))}}t.Keyring=a},27767:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},2412:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.secretDescribePath=void 0;const r=n(97922);t.secretDescribePath=function(e){let t={verbose:r.addressNListToBIP32(e),coin:"Secret",isKnown:!1};if(5!=e.length)return t;if(2147483692!=e[0])return t;if(e[1]!=2147483648+r.slip44ByCoin("Secret"))return t;if((2147483648&e[2])>>>0!==2147483648)return t;if(0!==e[3]||0!==e[4])return t;let n=2147483647&e[2];return{verbose:`Secret Account #${n}`,accountIdx:n,wholeAccount:!0,coin:"Secret",isKnown:!0,isPrefork:!1}}},75629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.terraDescribePath=void 0;const r=n(97922);t.terraDescribePath=function(e){let t={verbose:r.addressNListToBIP32(e),coin:"Terra",isKnown:!1};if(5!=e.length)return t;if(2147483692!=e[0])return t;if(e[1]!=2147483648+r.slip44ByCoin("Terra"))return t;if((2147483648&e[2])>>>0!==2147483648)return t;if(0!==e[3]||0!==e[4])return t;let n=2147483647&e[2];return{verbose:`Terra Account #${n}`,accountIdx:n,wholeAccount:!0,coin:"Terra",isKnown:!0,isPrefork:!1}}},29466:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.thorchainDescribePath=void 0;const r=n(97922);t.thorchainDescribePath=function(e){let t={verbose:r.addressNListToBIP32(e),coin:"Rune",isKnown:!1};if(5!=e.length)return t;if(2147483692!=e[0])return t;if(e[1]!=2147483648+r.slip44ByCoin("Rune"))return t;if((2147483648&e[2])>>>0!==2147483648)return t;if(0!==e[3]||0!==e[4])return t;let n=2147483647&e[2];return{verbose:`Thorchain Account #${n}`,accountIdx:n,wholeAccount:!0,coin:"Thorchain",isKnown:!0,isPrefork:!1}}},70869:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{a(r.next(e))}catch(t){s(t)}}function c(e){try{a(r.throw(e))}catch(t){s(t)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}a((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Transport=void 0;const c=s(n(56387));class a extends c.EventEmitter2{constructor(e){super(),this.keyring=e}connect(){return o(this,void 0,void 0,(function*(){}))}disconnect(){return o(this,void 0,void 0,(function*(){}))}}t.Transport=a},97922:function(e,t,n){"use strict";var r=n(48764).Buffer,i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.compatibleBufferConcat=t.checkBufferConcat=t.untouchable=t.mustBeDefined=t.toArrayBuffer=t.relativePath=t.hardenedPath=t.satsFromStr=t.slip44ByCoin=t.base64toHEX=t.stripHexPrefixAndLower=t.stripHexPrefix=t.takeFirstOfManyEvents=t.bip32Like=t.addressNListToBIP32=t.bip32ToAddressNList=t.arrayify=t.toHexString=t.fromHexString=t.isArray=t.LONG_TIMEOUT=t.DEFAULT_TIMEOUT=void 0;const c=o(n(34143)),a=o(n(11717));t.DEFAULT_TIMEOUT=5e3,t.LONG_TIMEOUT=3e5,t.isArray=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};t.fromHexString=e=>{const t=e.match(/.{1,2}/g)||[];return new Uint8Array(t.map((e=>parseInt(e,16))))},t.toHexString=function(e){return Array.prototype.map.call(e,(e=>("00"+e.toString(16)).slice(-2))).join("")},t.arrayify=function(e){if(null===e)throw new Error("cannot convert null value to array");if("string"!==typeof e)throw new Error("can only convert hex strings");let t=e.match(/^(0x)?[0-9a-fA-F]*$/);if(!t)throw new Error("invalid hexadecimal string");if("0x"!==t[1])throw new Error("hex string must have 0x prefix");(e=e.substring(2)).length%2&&(e="0"+e);const n=[];for(let r=0;r<e.length;r+=2)n.push(parseInt(e.substr(r,2),16));return new Uint8Array(n)};const u=2147483648;function l(e){return"m/"==e||/^m(((\/[0-9]+h)+|(\/[0-9]+H)+|(\/[0-9]+')*)((\/[0-9]+)*))$/.test(e)}function f(e){return e.replace("0x","")}t.bip32ToAddressNList=function(e){if(!l(e))throw new Error(`Not a bip32 path: '${e}'`);/^m\//i.test(e)&&(e=e.slice(2));const t=e.split("/");if(1===t.length&&""===t[0])return[];const n=new Array(t.length);for(let r=0;r<t.length;r++){const e=/(\d+)([hH\']?)/.exec(t[r]);if(null===e)throw new Error("Invalid input");if(n[r]=parseInt(e[1],10),n[r]>=u)throw new Error("Invalid child index");if("h"===e[2]||"H"===e[2]||"'"===e[2])n[r]+=u;else if(0!==e[2].length)throw new Error("Invalid modifier")}return n},t.addressNListToBIP32=function(e){return`m/${e.map((e=>e>=u?e-u+"'":e)).join("/")}`},t.bip32Like=l,t.takeFirstOfManyEvents=function(e,t){return c.merge(...t.map((t=>c.fromEvent(e,t)))).pipe(a.first())},t.stripHexPrefix=f,t.stripHexPrefixAndLower=function(e){return f(e).toLowerCase()},t.base64toHEX=function(e){var t=atob(e),n="";for(let i=0;i<t.length;i++){var r=t.charCodeAt(i).toString(16);n+=2==r.length?r:"0"+r}return"0x"+n.toUpperCase()};const p=Object.freeze({Bitcoin:0,Testnet:1,BitcoinCash:145,BitcoinGold:156,Litecoin:2,Dash:5,DigiByte:20,Dogecoin:3,BitcoinSV:236,Ethereum:60,Atom:118,Binance:714,Ripple:144,Eos:194,Fio:235,Thorchain:931,Rune:931,Cardano:1815,Secret:529,Terra:330,Kava:459});let h;function d(){if(void 0===h)try{r.concat([new Uint8Array]),h=!1}catch(e){h=!0}return h}t.slip44ByCoin=function(e){return p[e]},t.satsFromStr=function(e){let t=e.indexOf("."),n=t>0?8-(e.length-t-1):8;return Number(e.replace(/\./g,""))*10**n},t.hardenedPath=function(e){return e.filter((e=>e>=2147483648))},t.relativePath=function(e){return e.filter((e=>e<2147483648))},t.toArrayBuffer=function(e){return e instanceof ArrayBuffer?e:e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)},t.mustBeDefined=function(e){if(null===e||void 0===e)throw new Error("expected a value");return e},t.untouchable=function(e){const t=new Proxy({},new Proxy({},{get:(n,r)=>(n,i)=>{if("get"===r&&"valueOf"===i)return()=>t;throw new Error(`${String(r)}(${String(i)}): ${e}`)}}));return t},t.checkBufferConcat=d,t.compatibleBufferConcat=function(e){return d()?r.concat(e.map((e=>r.isBuffer(e)?e:r.from(e)))):r.concat(e)}},18706:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.supportsDebugLink=t.infoBinance=t.supportsBinance=t.infoRipple=t.supportsRipple=t.infoKava=t.supportsKava=t.infoTerra=t.supportsTerra=t.infoSecret=t.supportsSecret=t.infoFio=t.supportsFio=t.infoEos=t.supportsEos=t.infoThorchain=t.supportsThorchain=t.infoCosmos=t.supportsCosmos=t.infoETH=t.supportsETH=t.infoBTC=t.supportsBTC=void 0;const i=r(n(96486));t.supportsBTC=function(e){return i.default.isObject(e)&&e._supportsBTC},t.infoBTC=function(e){return i.default.isObject(e)&&e._supportsBTCInfo},t.supportsETH=function(e){return i.default.isObject(e)&&e._supportsETH},t.infoETH=function(e){return i.default.isObject(e)&&e._supportsETHInfo},t.supportsCosmos=function(e){return i.default.isObject(e)&&e._supportsCosmos},t.infoCosmos=function(e){return i.default.isObject(e)&&e._supportsCosmosInfo},t.supportsThorchain=function(e){return i.default.isObject(e)&&e._supportsThorchain},t.infoThorchain=function(e){return i.default.isObject(e)&&e._supportsThorchainInfo},t.supportsEos=function(e){return i.default.isObject(e)&&e._supportsEos},t.infoEos=function(e){return i.default.isObject(e)&&e._supportsEosInfo},t.supportsFio=function(e){return i.default.isObject(e)&&e._supportsFio},t.infoFio=function(e){return i.default.isObject(e)&&e._supportsFioInfo},t.supportsSecret=function(e){return i.default.isObject(e)&&e._supportsSecret},t.infoSecret=function(e){return i.default.isObject(e)&&e._supportsSecretInfo},t.supportsTerra=function(e){return i.default.isObject(e)&&e._supportsTerra},t.infoTerra=function(e){return i.default.isObject(e)&&e._supportsTerraInfo},t.supportsKava=function(e){return i.default.isObject(e)&&e._supportsKava},t.infoKava=function(e){return i.default.isObject(e)&&e._supportsKavaInfo},t.supportsRipple=function(e){return i.default.isObject(e)&&e._supportsRipple},t.infoRipple=function(e){return i.default.isObject(e)&&e._supportsRippleInfo},t.supportsBinance=function(e){return i.default.isObject(e)&&e._supportsBinance},t.infoBinance=function(e){return i.default.isObject(e)&&e._supportsBinanceInfo},t.supportsDebugLink=function(e){return i.default.isObject(e)&&e._supportsDebugLink}},56387:function(e,t,n){var r,i=n(34155);!function(s){var o=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};function c(){this._events={},this._conf&&a.call(this,this._conf)}function a(e){e?(this._conf=e,e.delimiter&&(this.delimiter=e.delimiter),this._maxListeners=e.maxListeners!==s?e.maxListeners:10,e.wildcard&&(this.wildcard=e.wildcard),e.newListener&&(this._newListener=e.newListener),e.removeListener&&(this._removeListener=e.removeListener),e.verboseMemoryLeak&&(this.verboseMemoryLeak=e.verboseMemoryLeak),this.wildcard&&(this.listenerTree={})):this._maxListeners=10}function u(e,t){var n="(node) warning: possible EventEmitter memory leak detected. "+e+" listeners added. Use emitter.setMaxListeners() to increase limit.";if(this.verboseMemoryLeak&&(n+=" Event name: "+t+"."),"undefined"!==typeof i&&i.emitWarning){var r=new Error(n);r.name="MaxListenersExceededWarning",r.emitter=this,r.count=e,i.emitWarning(r)}else console.error(n),console.trace&&console.trace()}function l(e){this._events={},this._newListener=!1,this._removeListener=!1,this.verboseMemoryLeak=!1,a.call(this,e)}function f(e,t,n,r){if(!n)return[];var i,s,o,c,a,u,l,p=[],h=t.length,d=t[r],v=t[r+1];if(r===h&&n._listeners){if("function"===typeof n._listeners)return e&&e.push(n._listeners),[n];for(i=0,s=n._listeners.length;i<s;i++)e&&e.push(n._listeners[i]);return[n]}if("*"===d||"**"===d||n[d]){if("*"===d){for(o in n)"_listeners"!==o&&n.hasOwnProperty(o)&&(p=p.concat(f(e,t,n[o],r+1)));return p}if("**"===d){for(o in(l=r+1===h||r+2===h&&"*"===v)&&n._listeners&&(p=p.concat(f(e,t,n,h))),n)"_listeners"!==o&&n.hasOwnProperty(o)&&("*"===o||"**"===o?(n[o]._listeners&&!l&&(p=p.concat(f(e,t,n[o],h))),p=p.concat(f(e,t,n[o],r))):p=o===v?p.concat(f(e,t,n[o],r+2)):p.concat(f(e,t,n[o],r)));return p}p=p.concat(f(e,t,n[d],r+1))}if((c=n["*"])&&f(e,t,c,r+1),a=n["**"])if(r<h)for(o in a._listeners&&f(e,t,a,h),a)"_listeners"!==o&&a.hasOwnProperty(o)&&(o===v?f(e,t,a[o],r+2):o===d?f(e,t,a[o],r+1):((u={})[o]=a[o],f(e,t,{"**":u},r+1)));else a._listeners?f(e,t,a,h):a["*"]&&a["*"]._listeners&&f(e,t,a["*"],h);return p}function p(e,t){for(var n=0,r=(e="string"===typeof e?e.split(this.delimiter):e.slice()).length;n+1<r;n++)if("**"===e[n]&&"**"===e[n+1])return;for(var i=this.listenerTree,o=e.shift();o!==s;){if(i[o]||(i[o]={}),i=i[o],0===e.length)return i._listeners?("function"===typeof i._listeners&&(i._listeners=[i._listeners]),i._listeners.push(t),!i._listeners.warned&&this._maxListeners>0&&i._listeners.length>this._maxListeners&&(i._listeners.warned=!0,u.call(this,i._listeners.length,o))):i._listeners=t,!0;o=e.shift()}return!0}l.EventEmitter2=l,l.prototype.delimiter=".",l.prototype.setMaxListeners=function(e){e!==s&&(this._maxListeners=e,this._conf||(this._conf={}),this._conf.maxListeners=e)},l.prototype.event="",l.prototype.once=function(e,t){return this._once(e,t,!1)},l.prototype.prependOnceListener=function(e,t){return this._once(e,t,!0)},l.prototype._once=function(e,t,n){return this._many(e,1,t,n),this},l.prototype.many=function(e,t,n){return this._many(e,t,n,!1)},l.prototype.prependMany=function(e,t,n){return this._many(e,t,n,!0)},l.prototype._many=function(e,t,n,r){var i=this;if("function"!==typeof n)throw new Error("many only accepts instances of Function");function s(){return 0===--t&&i.off(e,s),n.apply(this,arguments)}return s._origin=n,this._on(e,s,r),i},l.prototype.emit=function(){this._events||c.call(this);var e=arguments[0];if("newListener"===e&&!this._newListener&&!this._events.newListener)return!1;var t,n,r,i,s,o=arguments.length;if(this._all&&this._all.length){if(s=this._all.slice(),o>3)for(t=new Array(o),i=0;i<o;i++)t[i]=arguments[i];for(r=0,n=s.length;r<n;r++)switch(this.event=e,o){case 1:s[r].call(this,e);break;case 2:s[r].call(this,e,arguments[1]);break;case 3:s[r].call(this,e,arguments[1],arguments[2]);break;default:s[r].apply(this,t)}}if(this.wildcard){s=[];var a="string"===typeof e?e.split(this.delimiter):e.slice();f.call(this,s,a,this.listenerTree,0)}else{if("function"===typeof(s=this._events[e])){switch(this.event=e,o){case 1:s.call(this);break;case 2:s.call(this,arguments[1]);break;case 3:s.call(this,arguments[1],arguments[2]);break;default:for(t=new Array(o-1),i=1;i<o;i++)t[i-1]=arguments[i];s.apply(this,t)}return!0}s&&(s=s.slice())}if(s&&s.length){if(o>3)for(t=new Array(o-1),i=1;i<o;i++)t[i-1]=arguments[i];for(r=0,n=s.length;r<n;r++)switch(this.event=e,o){case 1:s[r].call(this);break;case 2:s[r].call(this,arguments[1]);break;case 3:s[r].call(this,arguments[1],arguments[2]);break;default:s[r].apply(this,t)}return!0}if(!this._all&&"error"===e)throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");return!!this._all},l.prototype.emitAsync=function(){this._events||c.call(this);var e=arguments[0];if("newListener"===e&&!this._newListener&&!this._events.newListener)return Promise.resolve([!1]);var t,n,r,i,s,o=[],a=arguments.length;if(this._all){if(a>3)for(t=new Array(a),i=1;i<a;i++)t[i]=arguments[i];for(r=0,n=this._all.length;r<n;r++)switch(this.event=e,a){case 1:o.push(this._all[r].call(this,e));break;case 2:o.push(this._all[r].call(this,e,arguments[1]));break;case 3:o.push(this._all[r].call(this,e,arguments[1],arguments[2]));break;default:o.push(this._all[r].apply(this,t))}}if(this.wildcard){s=[];var u="string"===typeof e?e.split(this.delimiter):e.slice();f.call(this,s,u,this.listenerTree,0)}else s=this._events[e];if("function"===typeof s)switch(this.event=e,a){case 1:o.push(s.call(this));break;case 2:o.push(s.call(this,arguments[1]));break;case 3:o.push(s.call(this,arguments[1],arguments[2]));break;default:for(t=new Array(a-1),i=1;i<a;i++)t[i-1]=arguments[i];o.push(s.apply(this,t))}else if(s&&s.length){if(s=s.slice(),a>3)for(t=new Array(a-1),i=1;i<a;i++)t[i-1]=arguments[i];for(r=0,n=s.length;r<n;r++)switch(this.event=e,a){case 1:o.push(s[r].call(this));break;case 2:o.push(s[r].call(this,arguments[1]));break;case 3:o.push(s[r].call(this,arguments[1],arguments[2]));break;default:o.push(s[r].apply(this,t))}}else if(!this._all&&"error"===e)return arguments[1]instanceof Error?Promise.reject(arguments[1]):Promise.reject("Uncaught, unspecified 'error' event.");return Promise.all(o)},l.prototype.on=function(e,t){return this._on(e,t,!1)},l.prototype.prependListener=function(e,t){return this._on(e,t,!0)},l.prototype.onAny=function(e){return this._onAny(e,!1)},l.prototype.prependAny=function(e){return this._onAny(e,!0)},l.prototype.addListener=l.prototype.on,l.prototype._onAny=function(e,t){if("function"!==typeof e)throw new Error("onAny only accepts instances of Function");return this._all||(this._all=[]),t?this._all.unshift(e):this._all.push(e),this},l.prototype._on=function(e,t,n){if("function"===typeof e)return this._onAny(e,t),this;if("function"!==typeof t)throw new Error("on only accepts instances of Function");return this._events||c.call(this),this._newListener&&this.emit("newListener",e,t),this.wildcard?(p.call(this,e,t),this):(this._events[e]?("function"===typeof this._events[e]&&(this._events[e]=[this._events[e]]),n?this._events[e].unshift(t):this._events[e].push(t),!this._events[e].warned&&this._maxListeners>0&&this._events[e].length>this._maxListeners&&(this._events[e].warned=!0,u.call(this,this._events[e].length,e))):this._events[e]=t,this)},l.prototype.off=function(e,t){if("function"!==typeof t)throw new Error("removeListener only takes instances of Function");var n,r=[];if(this.wildcard){var i="string"===typeof e?e.split(this.delimiter):e.slice();r=f.call(this,null,i,this.listenerTree,0)}else{if(!this._events[e])return this;n=this._events[e],r.push({_listeners:n})}for(var c=0;c<r.length;c++){var a=r[c];if(n=a._listeners,o(n)){for(var u=-1,l=0,p=n.length;l<p;l++)if(n[l]===t||n[l].listener&&n[l].listener===t||n[l]._origin&&n[l]._origin===t){u=l;break}if(u<0)continue;return this.wildcard?a._listeners.splice(u,1):this._events[e].splice(u,1),0===n.length&&(this.wildcard?delete a._listeners:delete this._events[e]),this._removeListener&&this.emit("removeListener",e,t),this}(n===t||n.listener&&n.listener===t||n._origin&&n._origin===t)&&(this.wildcard?delete a._listeners:delete this._events[e],this._removeListener&&this.emit("removeListener",e,t))}return function e(t){if(t!==s){var n=Object.keys(t);for(var r in n){var i=n[r],o=t[i];o instanceof Function||"object"!==typeof o||null===o||(Object.keys(o).length>0&&e(t[i]),0===Object.keys(o).length&&delete t[i])}}}(this.listenerTree),this},l.prototype.offAny=function(e){var t,n=0,r=0;if(e&&this._all&&this._all.length>0){for(n=0,r=(t=this._all).length;n<r;n++)if(e===t[n])return t.splice(n,1),this._removeListener&&this.emit("removeListenerAny",e),this}else{if(t=this._all,this._removeListener)for(n=0,r=t.length;n<r;n++)this.emit("removeListenerAny",t[n]);this._all=[]}return this},l.prototype.removeListener=l.prototype.off,l.prototype.removeAllListeners=function(e){if(e===s)return!this._events||c.call(this),this;if(this.wildcard)for(var t="string"===typeof e?e.split(this.delimiter):e.slice(),n=f.call(this,null,t,this.listenerTree,0),r=0;r<n.length;r++){n[r]._listeners=null}else this._events&&(this._events[e]=null);return this},l.prototype.listeners=function(e){if(this.wildcard){var t=[],n="string"===typeof e?e.split(this.delimiter):e.slice();return f.call(this,t,n,this.listenerTree,0),t}return this._events||c.call(this),this._events[e]||(this._events[e]=[]),o(this._events[e])||(this._events[e]=[this._events[e]]),this._events[e]},l.prototype.eventNames=function(){return Object.keys(this._events)},l.prototype.listenerCount=function(e){return this.listeners(e).length},l.prototype.listenersAny=function(){return this._all?this._all:[]},(r=function(){return l}.call(t,n,t,e))===s||(e.exports=r)}()}}]);