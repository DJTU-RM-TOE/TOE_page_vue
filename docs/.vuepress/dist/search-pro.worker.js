const{entries:V}=Object,{fromEntries:et}=Object,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/\":{\"documentCount\":64,\"nextId\":64,\"documentIds\":{\"0\":\"1\",\"1\":\"2\",\"2\":\"2#培训方案大纲\",\"3\":\"2#_1-统一的培训\",\"4\":\"2#_2-通过实验室文档自学\",\"5\":\"2#培训阶段细则\",\"6\":\"2#part1-机器人建模-电控系统通识课\",\"7\":\"2#内容\",\"8\":\"2#细则\",\"9\":\"2#part2-arduino相关-简单三维建模\",\"10\":\"2#内容-1\",\"11\":\"2#细则-1\",\"12\":\"2#part3-stm32hal相关-未编写\",\"13\":\"3\",\"14\":\"3#_1-1-关于机器人学\",\"15\":\"3#_1-1-1-简介\",\"16\":\"3#_1-2-关于机器人\",\"17\":\"3#_1-2-1-简介\",\"18\":\"3#_1-2-2-附录\",\"19\":\"3#不同形态机器人的宣传片展示\",\"20\":\"3#来自boston-dynamics的人型机器人\",\"21\":\"3#来自arx方舟无限的小型六自由度机械臂\",\"22\":\"3#来自toe-rm战队的平衡步兵\",\"23\":\"3#来自boston-dynamics的四足机器人spotmini\",\"24\":\"3#_1-3-机器人的系统分析\",\"25\":\"3#_1-2-1机器人系统的组成\",\"26\":\"3#_1-4-机器人学需要的技术栈\",\"27\":\"3#_1-4-1-技术栈\",\"28\":\"3#机械方向\",\"29\":\"3#电控方向\",\"30\":\"3#数理基础\",\"31\":\"3#_1-4-2-附录-推荐阅读\",\"32\":\"3#_1-5-写在最后\",\"33\":\"3#_2-1-arduino\",\"34\":\"3#_2-1-1-什么是arduino\",\"35\":\"3#_2-1-2-软件链接\",\"36\":\"3#_2-1-3-教程资源\",\"37\":\"3#_2-2-stm32\",\"38\":\"3#_2-2-1-什么是stm32\",\"39\":\"3#_2-2-2-引入\",\"40\":\"3#_2-2-3-网址资源\",\"41\":\"3#_2-2-4-附件\",\"42\":\"4\",\"43\":\"4#优秀博主汇总\",\"44\":\"4#bilibili博主\",\"45\":\"4#知乎博主\",\"46\":\"4#优秀教程汇总\",\"47\":\"4#solidworks\",\"48\":\"4#c语言基础\",\"49\":\"4#python基础\",\"50\":\"4#opencv\",\"51\":\"4#ros2\",\"52\":\"4#stm32\",\"53\":\"4#markdown\",\"54\":\"4#linux相关\",\"55\":\"4#控制相关\",\"56\":\"4#绝大多数的软件可以在这里找到\",\"57\":\"5\",\"58\":\"5#机械\",\"59\":\"5#电控\",\"60\":\"5#视觉\",\"61\":\"6\",\"62\":\"7\",\"63\":\"8\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[1,2],\"2\":[1,4],\"3\":[2,3],\"4\":[2,7],\"5\":[1],\"6\":[3],\"7\":[1,3],\"8\":[1,5],\"9\":[3],\"10\":[1,2],\"11\":[1,1],\"12\":[4],\"13\":[2,2],\"14\":[2],\"15\":[2,29],\"16\":[3],\"17\":[3,31],\"18\":[3],\"19\":[1],\"20\":[2],\"21\":[1],\"22\":[2],\"23\":[2],\"24\":[3],\"25\":[3,21],\"26\":[3],\"27\":[3],\"28\":[1,12],\"29\":[1,30],\"30\":[1,12],\"31\":[6,4],\"32\":[3,19],\"33\":[3],\"34\":[3,2],\"35\":[3],\"36\":[4,2],\"37\":[2],\"38\":[3,56],\"39\":[2],\"40\":[3],\"41\":[3],\"42\":[1],\"43\":[1],\"44\":[1,10],\"45\":[1,9],\"46\":[1],\"47\":[1,14],\"48\":[1,7],\"49\":[1,7],\"50\":[1,8],\"51\":[1,6],\"52\":[1,3],\"53\":[1,1],\"54\":[1,1],\"55\":[1,2],\"56\":[1,2],\"57\":[1],\"58\":[1,8],\"59\":[1,4],\"60\":[1,11],\"61\":[1],\"62\":[1,3],\"63\":[1]},\"averageFieldLength\":[1.8281250000000007,8.13644808250656],\"storedFields\":{\"0\":{\"h\":\"TOE实验室资源站\"},\"1\":{\"h\":\"TOE战队培训方案\",\"t\":[\"tip:本文档仅提供TOE实验室培训活动大体方向的指导\"]},\"2\":{\"h\":\"培训方案大纲\",\"t\":[\" 通过往年培训过程的观察，发现同一套培训体系下不同同学的表现相去甚远，所以今年的培训体系分为两层 \"]},\"3\":{\"h\":\"1.统一的培训\",\"t\":[\"培训内容的难度曲线较为缓和。\",\"有助于提高新生的留存率。\"]},\"4\":{\"h\":\"2.通过实验室文档自学\",\"t\":[\"学习内容的难度曲线与前一年相同（或者视个人情况，学长会给出建议）。\",\"适用于提拔积极性高的人，作为难度较高的项目/比赛的人才储备。\"]},\"5\":{\"h\":\"培训阶段细则\"},\"6\":{\"h\":\"part1 机器人建模/电控系统通识课\"},\"7\":{\"h\":\"内容\",\"t\":[\"使用TinkerCad对新生进行培训，包括简易的建模和arduino仿真的培训。\"]},\"8\":{\"h\":\"细则\",\"t\":[\"由于TinkerCad的建模软件和SW差别较大，我们将会鼓励有意愿在将来参与机械方向的同学通过资料自学SW。\",\"arduino的编程有图形化和C语言形式可选，我们将会主要讲授图形化并鼓励有意愿在将来参与电控方向的同学自学C语言用以完成程序编写。\"]},\"9\":{\"h\":\"part2 Arduino相关 简单三维建模\"},\"10\":{\"h\":\"内容\",\"t\":[\"通过Arduino来使新生建立对单片机及其外设和基本控制系统的初步认识。\",\"通过tinkercad使学生建立基本的建模和结构设计能力\"]},\"11\":{\"h\":\"细则\",\"t\":[\"建议有能力的机械方向的人尽早切入SW\"]},\"12\":{\"h\":\"part3 stm32hal相关（未编写）\"},\"13\":{\"h\":\"1 机器人通识\",\"t\":[\"目标：让同学对机器人和机器人学相关概念有基本的认识\"]},\"14\":{\"h\":\"1.1 关于机器人学\"},\"15\":{\"h\":\"1.1.1 简介\",\"t\":[\"机器人学（英语：robotics） 是一项涵盖了机器人的 设计、建造、运作、以及应用 的 跨领域科技 ，集合 机械工程学、电机工程学、机械电子学、电子学、控制工程学、计算机工程学、软件工程学、资讯工程学、数学及生物工程学 等领域。这些科技催生出能够取代人力的自动化机器，在危险境或制造工厂运作，或塑造成外表、行为、心智的仿人机器人。现今许多机器人都是受到自然界的启发，致力于仿生机器人学领域的发展。\"]},\"16\":{\"h\":\"1.2 关于机器人\"},\"17\":{\"h\":\"1.2.1 简介\",\"t\":[\"机器人（英语：Robot） 包括一切模拟人类行为或思想与模拟其他生物的机械（如机器狗、机器猫等）。狭义上对机器人的定义还有很多分类法及争议，有些电脑程序甚至也被称为机器人。在当代工业中，机器人指能自动执行任务的人造机器设备，用以取代或协助人类工作，一般会是机电设备，由计算机程序或是电子电路控制。\",\"机器人的范围很广，可以是自主或是半自主的，可以从本田技研工业的ASIMO或是TOSY的TOPIO等拟人机器人到工业机器人，也包括多台一起动作的群机器人，其至是纳米机器人。借由模仿逼真的外观及自动化的动作，理想中的高仿真机器人是 高级集成控制论、机械电子、计算机与人工智能、材料学 和 仿生学 的产物，目前科学界正在向此方向研究开发。有关机器人的话题，常见于科幻作品中。\"]},\"18\":{\"h\":\"1.2.2 附录\"},\"19\":{\"h\":\"不同形态机器人的宣传片展示\"},\"20\":{\"h\":\"来自Boston Dynamics的人型机器人\"},\"21\":{\"h\":\"来自ARX方舟无限的小型六自由度机械臂\"},\"22\":{\"h\":\"来自TOE RM战队的平衡步兵\"},\"23\":{\"h\":\"来自Boston Dynamics的四足机器人SpotMini\"},\"24\":{\"h\":\"1.3 机器人的系统分析\"},\"25\":{\"h\":\"1.2.1机器人系统的组成\",\"t\":[\"三大部分\",\"机械部分包括机械传动结构、执行器（电机、气动/液压系统）\",\"传感部分包括压力传感器、摄像头、编码器、陀螺仪、激光雷达等\",\"控制部分包括控制电路，采样电路，嵌入式控制系统等\",\"六个子系统\",\"驱动系统\",\"机械结构系统\",\"感受系统\",\"机器人-环境交互系统\",\"人机交互系统和控制系统\"]},\"26\":{\"h\":\"1.4 机器人学需要的技术栈\"},\"27\":{\"h\":\"1.4.1 技术栈\"},\"28\":{\"h\":\"机械方向\",\"t\":[\"相对熟练地使用三维建模软件\",\"学会齿轮等基础传动系统\",\"学会轴系设计\",\"学会使用三维建模软件做简单的应力分析\",\"学会使用三维建模软件做简单的轻量化设计\",\"学会连杆运动关系的计算并使用仿真软件优化传动结构\",\"学会设计复杂机械结构（如紧凑型行星减速器等）\",\"tip：以上排序由易向难（个人观点）\"]},\"29\":{\"h\":\"电控方向\",\"t\":[\"相对熟练地使用C语言\",\"学会嵌入式开发 Arduino\",\"对pid控制有基本认识\",\"学会嵌入式开发 stm32 hal库\",\"学会在stm32上使用freertos这里有一个岔路 *（偏硬件） \",\"相对熟练地使用立创eda/AD等电路设计软件\",\"学会stm32最小系统板及其外围电路（如can协议收发）等设计\",\"学会设计无刷电机驱动\",\"学会高速线路layout和开关电源设计 *（偏软件）\",\"相对熟练地使用C++、Python\",\"相对熟练地使用linux系统\",\"学会使用ROS进行机器人控制系统设计\",\"学会使用仿真环境进行机器人控制系统设计\",\"学会机器视觉相关算法的实现\",\"学会使用高级的机器人控制算法如LQR MPC VMC\",\"学会SLAM相关算法的实现\",\"tip：以上排序由易向难（个人观点）\"]},\"30\":{\"h\":\"数理基础\",\"t\":[\"微积分 、线性代数 、理论力学\",\"概率论、图论、多元微积分\",\"最优估计 、微分几何 、计算几何、运筹学等\",\"tip：画重点的个人认为使用频次较高\"]},\"31\":{\"h\":\"1.4.2 附录（推荐阅读）：\",\"t\":[\"电子入坑百科全书\",\"机器人工程师学习计划-知乎-YY硕\"]},\"32\":{\"h\":\"1.5 写在最后\",\"t\":[\"机器人相关技术的学习是一个漫长的过程，机器人学是一个艰苦的道路，想要成为一个独挡一面的机器人工程师需要多年理论和实践的同步训练，借用DJI创始人YY硕的一句话：\",\"如果是已经工作之后才想要学习机器人的话，可能已经太迟了，因为很可能兴趣战胜不了客观限制因素。如果作为兴趣去学习，只能学到做巡线小车和舵机机械臂什么的，可能也满足不了中二病的创造欲。\",\"同理，如果你希望设计出如同视频中/学长手上的酷炫的机器人，那么光凭借培训所学是远远不够的，在培训之外我们会在本站上同步文档/网页/视频资料链接等信息供大家自学，想学习更加硬核的技术的同学可以关注我们的文档，后续我们将会持续更新\"]},\"33\":{\"h\":\"2.1 arduino\"},\"34\":{\"h\":\"2.1.1 什么是arduino\",\"t\":[\"---TODO\"]},\"35\":{\"h\":\"2.1.2 软件链接\"},\"36\":{\"h\":\"2.1.3 教程资源\",\"t\":[\"太极创客网站网页教程\",\"太极创客bilibili主页视频教程\"]},\"37\":{\"h\":\"2.2 STM32\"},\"38\":{\"h\":\"2.2.1 什么是STM32\",\"t\":[\"STM32是意法半导体（ST）公司推出一款32位的单片机（MCU）。 STM32具有超低的价格、超多的外设、丰富的型号、优异的实时性、极低的开发成本等优势。 STM32凭借其产品线的多样化、极高的性价比、简单易用的库开发方式。\",\"生活中很多地方都有单片机的身影家电控制：STM32被广泛用于电视、空调、冰箱、洗衣机等家用电器的控制系统中。它可以实现电器设备的智能控制，提高能效和用户体验。\",\"智能家居：STM32可用于构建智能家居系统，通过连接传感器和执行器，实现对家庭照明、安全、温度等方面的控制和监测。\",\"无线通信：STM32具备丰富的通信接口和协议支持，可用于构建无线通信设备，如蓝牙耳机、智能手表、遥控器等。\",\"汽车电子系统：STM32在汽车电子领域广泛应用，包括发动机控制单元(ECU)、车载娱乐系统、车身控制模块等，提升了汽车性能和安全性。\",\"工业自动化：STM32被广泛应用于工控领域，用于控制机器人、自动化生产线、传感器网络等，提高生产效率和产品质量。\",\"你可以用32做出一些意想不到的东西，像是一个遥控小车，声控开关，航模飞机，无人机等等，32对于你的创造力是一个无限的放大器，心之所想，目之所及stm32均可实现你的创意。\",\"目前stm32主流的官方函数库有固件库和HAL库，由于HAL库的可视化配置和ST公司近些年的推动，决定带大家以HAL库的标准进行入门。\"]},\"39\":{\"h\":\"2.2.2 引入\"},\"40\":{\"h\":\"2.2.3 网址资源\"},\"41\":{\"h\":\"2.2.4 附件\"},\"42\":{\"h\":\"\"},\"43\":{\"h\":\"优秀博主汇总\"},\"44\":{\"h\":\"bilibili博主\",\"t\":[\"哈工大竞技机器人队（机械设计讲解）\",\"工科男孙老师（硬件入门教程）\",\"DR_CAN（控制理论底层公式推导）\",\"3Blue1Brown（图像化理解数学理论）\"]},\"45\":{\"h\":\"知乎博主\",\"t\":[\"摸鱼斯基（机械设计逻辑分享）\",\"硬件工程师炼成之路（电源相关底层公式推导）\",\"韭菜的菜（易于理解的控制理论入门）\",\"袁玉斌（FOC相关底层公式推导）\"]},\"46\":{\"h\":\"优秀教程汇总\"},\"47\":{\"h\":\"Solidworks\",\"t\":[\"先学习soildwork，待sw使用熟练后可以去学 机械原理 轴系设计 材料力学 工程力学 不懂就查机械设计手册\",\"SOLIDWORKS 2021 教学 精品教程 | B站点赞NO.1\"]},\"48\":{\"h\":\"C语言基础\",\"t\":[\"先学习c语言，c学习完毕后可以先选择学习难度较低的arduino或者直径进行stm32hal库的学习。\",\"菜鸟教程\",\"郝斌C语言自学教程》\",\"小甲鱼《带你学C带你飞》\"]},\"49\":{\"h\":\"Python基础\",\"t\":[\"先进行pyhon的学习，然后进行opencv的学习\",\"2022新版黑马程序员python教程，8天python从入门到精通，学python看这套就够了_哔哩哔哩_bilibili\"]},\"50\":{\"h\":\"OpenCV\",\"t\":[\"【2022B站最好的OpenCV课程推荐】OpenCV从入门到实战 全套课程（附带课程课件资料+课件笔记）图像处理|深度学习人工智能计算机视觉python+AI_哔哩哔哩_bilibili\"]},\"51\":{\"h\":\"ROS2\",\"t\":[\"鱼香ROS(内有一键安装脚本)\",\"赵虚左ROS2理论与实践\",\"官方文档ROS2 humble doc\"]},\"52\":{\"h\":\"STM32\",\"t\":[\"野火stm32 HAL\",\"江科大stm32\"]},\"53\":{\"h\":\"MarkDown\",\"t\":[\"Markdown基本语法\"]},\"54\":{\"h\":\"LINUX相关\",\"t\":[\"docker基本用法\"]},\"55\":{\"h\":\"控制相关\",\"t\":[\"mujoco仿真\",\"c++动力学工具箱OCS2\"]},\"56\":{\"h\":\"绝大多数的软件可以在这里找到\",\"t\":[\"软件共享管家\",\"软件智库\"]},\"57\":{\"h\":\"实验室开源汇总\"},\"58\":{\"h\":\"机械\",\"t\":[\"robomaster2023工程机器人\",\"RM2021-大连交通大学-纵维立方TOE战队-哨兵机器人\",\"RM2021-大连交通大学-纵维立方TOE战队-工程机器人\",\"RM2021-大连交通大学-纵维立方TOE战队-飞镖机器人\",\"RM2021-大连交通大学-纵维立方TOE战队-步兵机器人\"]},\"59\":{\"h\":\"电控\",\"t\":[\"robomaster2023超级电容\",\"robomaster2023飞镖系统\",\"RoboMaster2023英雄\",\"RoboMaster2021步兵\"]},\"60\":{\"h\":\"视觉\",\"t\":[\"RoboMaster2022 TOE 实验室视觉项目\",\"RoboMaster2023 雷达站（半成品）\",\"Robomaster2023 大符识别训练程序\",\"Robomaster2023 自瞄\",\"Robomaster2018 视觉\"]},\"61\":{\"h\":\"项目\"},\"62\":{\"h\":\"\",\"t\":[\"404 Not Found\"]},\"63\":{\"h\":\"Learning\"}},\"dirtCount\":0,\"index\":[[\"learning\",{\"0\":{\"63\":1}}],[\"linux相关\",{\"0\":{\"54\":1}}],[\"found\",{\"1\":{\"62\":1}}],[\"foc相关底层公式推导\",{\"1\":{\"45\":1}}],[\"not\",{\"1\":{\"62\":1}}],[\"项目\",{\"0\":{\"61\":1}}],[\"自瞄\",{\"1\":{\"60\":1}}],[\"自动化生产线\",{\"1\":{\"38\":1}}],[\"大符识别训练程序\",{\"1\":{\"60\":1}}],[\"大连交通大学\",{\"1\":{\"58\":4}}],[\"半成品\",{\"1\":{\"60\":1}}],[\"雷达站\",{\"1\":{\"60\":1}}],[\"视觉\",{\"0\":{\"60\":1},\"1\":{\"60\":1}}],[\"视频资料链接等信息供大家自学\",{\"1\":{\"32\":1}}],[\"步兵机器人\",{\"1\":{\"58\":1}}],[\"飞镖机器人\",{\"1\":{\"58\":1}}],[\"哨兵机器人\",{\"1\":{\"58\":1}}],[\"纵维立方toe战队\",{\"1\":{\"58\":4}}],[\"实验室视觉项目\",{\"1\":{\"60\":1}}],[\"实验室开源汇总\",{\"0\":{\"57\":1}}],[\"实现对家庭照明\",{\"1\":{\"38\":1}}],[\"绝大多数的软件可以在这里找到\",{\"0\":{\"56\":1}}],[\"江科大stm32\",{\"1\":{\"52\":1}}],[\"野火stm32\",{\"1\":{\"52\":1}}],[\"hal\",{\"1\":{\"52\":1}}],[\"hal库\",{\"1\":{\"29\":1}}],[\"humble\",{\"1\":{\"51\":1}}],[\"官方文档ros2\",{\"1\":{\"51\":1}}],[\"赵虚左ros2理论与实践\",{\"1\":{\"51\":1}}],[\"内有一键安装脚本\",{\"1\":{\"51\":1}}],[\"内容\",{\"0\":{\"7\":1,\"10\":1}}],[\"鱼香ros\",{\"1\":{\"51\":1}}],[\"全套课程\",{\"1\":{\"50\":1}}],[\"opencv从入门到实战\",{\"1\":{\"50\":1}}],[\"opencv\",{\"0\":{\"50\":1}}],[\"哔哩哔哩\",{\"1\":{\"49\":1,\"50\":1}}],[\"8天python从入门到精通\",{\"1\":{\"49\":1}}],[\"然后进行opencv的学习\",{\"1\":{\"49\":1}}],[\"先进行pyhon的学习\",{\"1\":{\"49\":1}}],[\"先学习c语言\",{\"1\":{\"48\":1}}],[\"先学习soildwork\",{\"1\":{\"47\":1}}],[\"带你学c带你飞\",{\"1\":{\"48\":1}}],[\"小甲鱼\",{\"1\":{\"48\":1}}],[\"郝斌c语言自学教程\",{\"1\":{\"48\":1}}],[\"菜鸟教程\",{\"1\":{\"48\":1}}],[\"c++动力学工具箱ocs2\",{\"1\":{\"55\":1}}],[\"c学习完毕后可以先选择学习难度较低的arduino或者直径进行stm32hal库的学习\",{\"1\":{\"48\":1}}],[\"c语言基础\",{\"0\":{\"48\":1}}],[\"can\",{\"1\":{\"44\":1}}],[\"bilibili\",{\"1\":{\"49\":1,\"50\":1}}],[\"bilibili博主\",{\"0\":{\"44\":1}}],[\"b站点赞no\",{\"1\":{\"47\":1}}],[\"|\",{\"1\":{\"47\":1}}],[\"精品教程\",{\"1\":{\"47\":1}}],[\"教学\",{\"1\":{\"47\":1}}],[\"教程资源\",{\"0\":{\"36\":1}}],[\"不懂就查机械设计手册\",{\"1\":{\"47\":1}}],[\"不同形态机器人的宣传片展示\",{\"0\":{\"19\":1}}],[\"材料力学\",{\"1\":{\"47\":1}}],[\"材料学\",{\"1\":{\"17\":1}}],[\"轴系设计\",{\"1\":{\"47\":1}}],[\"待sw使用熟练后可以去学\",{\"1\":{\"47\":1}}],[\"solidworks\",{\"0\":{\"47\":1},\"1\":{\"47\":1}}],[\"st\",{\"1\":{\"38\":1}}],[\"stm32被广泛应用于工控领域\",{\"1\":{\"38\":1}}],[\"stm32被广泛用于电视\",{\"1\":{\"38\":1}}],[\"stm32在汽车电子领域广泛应用\",{\"1\":{\"38\":1}}],[\"stm32具备丰富的通信接口和协议支持\",{\"1\":{\"38\":1}}],[\"stm32具有超低的价格\",{\"1\":{\"38\":1}}],[\"stm32可用于构建智能家居系统\",{\"1\":{\"38\":1}}],[\"stm32凭借其产品线的多样化\",{\"1\":{\"38\":1}}],[\"stm32是意法半导体\",{\"1\":{\"38\":1}}],[\"stm32\",{\"0\":{\"37\":1,\"52\":1},\"1\":{\"29\":1}}],[\"stm32hal相关\",{\"0\":{\"12\":1}}],[\"袁玉斌\",{\"1\":{\"45\":1}}],[\"易于理解的控制理论入门\",{\"1\":{\"45\":1}}],[\"韭菜的菜\",{\"1\":{\"45\":1}}],[\"硬件工程师炼成之路\",{\"1\":{\"45\":1}}],[\"硬件入门教程\",{\"1\":{\"44\":1}}],[\"摸鱼斯基\",{\"1\":{\"45\":1}}],[\"图像处理|深度学习人工智能计算机视觉python+ai\",{\"1\":{\"50\":1}}],[\"图像化理解数学理论\",{\"1\":{\"44\":1}}],[\"图论\",{\"1\":{\"30\":1}}],[\"docker基本用法\",{\"1\":{\"54\":1}}],[\"doc\",{\"1\":{\"51\":1}}],[\"dr\",{\"1\":{\"44\":1}}],[\"dynamics的四足机器人spotmini\",{\"0\":{\"23\":1}}],[\"dynamics的人型机器人\",{\"0\":{\"20\":1}}],[\"工程机器人\",{\"1\":{\"58\":1}}],[\"工程力学\",{\"1\":{\"47\":1}}],[\"工科男孙老师\",{\"1\":{\"44\":1}}],[\"工业自动化\",{\"1\":{\"38\":1}}],[\"哈工大竞技机器人队\",{\"1\":{\"44\":1}}],[\"优秀教程汇总\",{\"0\":{\"46\":1}}],[\"优秀博主汇总\",{\"0\":{\"43\":1}}],[\"优异的实时性\",{\"1\":{\"38\":1}}],[\"附带课程课件资料+课件笔记\",{\"1\":{\"50\":1}}],[\"附件\",{\"0\":{\"41\":1}}],[\"附录\",{\"0\":{\"18\":1,\"31\":1}}],[\"网址资源\",{\"0\":{\"40\":1}}],[\"网页\",{\"1\":{\"32\":1}}],[\"引入\",{\"0\":{\"39\":1}}],[\"决定带大家以hal库的标准进行入门\",{\"1\":{\"38\":1}}],[\"心之所想\",{\"1\":{\"38\":1}}],[\"心智的仿人机器人\",{\"1\":{\"15\":1}}],[\"无人机等等\",{\"1\":{\"38\":1}}],[\"无线通信\",{\"1\":{\"38\":1}}],[\"航模飞机\",{\"1\":{\"38\":1}}],[\"声控开关\",{\"1\":{\"38\":1}}],[\"像是一个遥控小车\",{\"1\":{\"38\":1}}],[\"你可以用32做出一些意想不到的东西\",{\"1\":{\"38\":1}}],[\"传感器网络等\",{\"1\":{\"38\":1}}],[\"传感部分包括压力传感器\",{\"1\":{\"25\":1}}],[\"用于控制机器人\",{\"1\":{\"38\":1}}],[\"用以取代或协助人类工作\",{\"1\":{\"17\":1}}],[\"提高生产效率和产品质量\",{\"1\":{\"38\":1}}],[\"提高能效和用户体验\",{\"1\":{\"38\":1}}],[\"提升了汽车性能和安全性\",{\"1\":{\"38\":1}}],[\"车身控制模块等\",{\"1\":{\"38\":1}}],[\"车载娱乐系统\",{\"1\":{\"38\":1}}],[\"ecu\",{\"1\":{\"38\":1}}],[\"汽车电子系统\",{\"1\":{\"38\":1}}],[\"遥控器等\",{\"1\":{\"38\":1}}],[\"智能手表\",{\"1\":{\"38\":1}}],[\"智能家居\",{\"1\":{\"38\":1}}],[\"温度等方面的控制和监测\",{\"1\":{\"38\":1}}],[\"安全\",{\"1\":{\"38\":1}}],[\"它可以实现电器设备的智能控制\",{\"1\":{\"38\":1}}],[\"洗衣机等家用电器的控制系统中\",{\"1\":{\"38\":1}}],[\"冰箱\",{\"1\":{\"38\":1}}],[\"空调\",{\"1\":{\"38\":1}}],[\"生活中很多地方都有单片机的身影家电控制\",{\"1\":{\"38\":1}}],[\"极高的性价比\",{\"1\":{\"38\":1}}],[\"极低的开发成本等优势\",{\"1\":{\"38\":1}}],[\"丰富的型号\",{\"1\":{\"38\":1}}],[\"超多的外设\",{\"1\":{\"38\":1}}],[\"mujoco仿真\",{\"1\":{\"55\":1}}],[\"markdown基本语法\",{\"1\":{\"53\":1}}],[\"markdown\",{\"0\":{\"53\":1}}],[\"mcu\",{\"1\":{\"38\":1}}],[\"mpc\",{\"1\":{\"29\":1}}],[\"公司推出一款32位的单片机\",{\"1\":{\"38\":1}}],[\"什么是stm32\",{\"0\":{\"38\":1}}],[\"什么是arduino\",{\"0\":{\"34\":1}}],[\"太极创客bilibili主页视频教程\",{\"1\":{\"36\":1}}],[\"太极创客网站网页教程\",{\"1\":{\"36\":1}}],[\"软件智库\",{\"1\":{\"56\":1}}],[\"软件共享管家\",{\"1\":{\"56\":1}}],[\"软件链接\",{\"0\":{\"35\":1}}],[\"软件工程学\",{\"1\":{\"15\":1}}],[\"后续我们将会持续更新\",{\"1\":{\"32\":1}}],[\"想学习更加硬核的技术的同学可以关注我们的文档\",{\"1\":{\"32\":1}}],[\"想要成为一个独挡一面的机器人工程师需要多年理论和实践的同步训练\",{\"1\":{\"32\":1}}],[\"那么光凭借培训所学是远远不够的\",{\"1\":{\"32\":1}}],[\"同理\",{\"1\":{\"32\":1}}],[\"只能学到做巡线小车和舵机机械臂什么的\",{\"1\":{\"32\":1}}],[\"因为很可能兴趣战胜不了客观限制因素\",{\"1\":{\"32\":1}}],[\"可用于构建无线通信设备\",{\"1\":{\"38\":1}}],[\"可能也满足不了中二病的创造欲\",{\"1\":{\"32\":1}}],[\"可能已经太迟了\",{\"1\":{\"32\":1}}],[\"可以从本田技研工业的asimo或是tosy的topio等拟人机器人到工业机器人\",{\"1\":{\"17\":1}}],[\"可以是自主或是半自主的\",{\"1\":{\"17\":1}}],[\"借用dji创始人yy硕的一句话\",{\"1\":{\"32\":1}}],[\"借由模仿逼真的外观及自动化的动作\",{\"1\":{\"17\":1}}],[\"写在最后\",{\"0\":{\"32\":1}}],[\"5\",{\"0\":{\"32\":1}}],[\"yy硕\",{\"1\":{\"31\":1}}],[\"知乎博主\",{\"0\":{\"45\":1}}],[\"知乎\",{\"1\":{\"31\":1}}],[\"推荐阅读\",{\"0\":{\"31\":1}}],[\"画重点的个人认为使用频次较高\",{\"1\":{\"30\":1}}],[\"运筹学等\",{\"1\":{\"30\":1}}],[\"运作\",{\"1\":{\"15\":1}}],[\"计算几何\",{\"1\":{\"30\":1}}],[\"计算机与人工智能\",{\"1\":{\"17\":1}}],[\"计算机工程学\",{\"1\":{\"15\":1}}],[\"微分几何\",{\"1\":{\"30\":1}}],[\"微积分\",{\"1\":{\"30\":1}}],[\"最优估计\",{\"1\":{\"30\":1}}],[\"多元微积分\",{\"1\":{\"30\":1}}],[\"概率论\",{\"1\":{\"30\":1}}],[\"理论力学\",{\"1\":{\"30\":1}}],[\"理想中的高仿真机器人是\",{\"1\":{\"17\":1}}],[\"线性代数\",{\"1\":{\"30\":1}}],[\"数理基础\",{\"0\":{\"30\":1}}],[\"数学及生物工程学\",{\"1\":{\"15\":1}}],[\"vmc\",{\"1\":{\"29\":1}}],[\"python基础\",{\"0\":{\"49\":1}}],[\"python\",{\"1\":{\"29\":1}}],[\"part3\",{\"0\":{\"12\":1}}],[\"part2\",{\"0\":{\"9\":1}}],[\"part1\",{\"0\":{\"6\":1}}],[\"偏软件\",{\"1\":{\"29\":1}}],[\"偏硬件\",{\"1\":{\"29\":1}}],[\"等设计\",{\"1\":{\"29\":1}}],[\"等领域\",{\"1\":{\"15\":1}}],[\"ad等电路设计软件\",{\"1\":{\"29\":1}}],[\"arduino\",{\"0\":{\"33\":1},\"1\":{\"29\":1}}],[\"arduino相关\",{\"0\":{\"9\":1}}],[\"arduino的编程有图形化和c语言形式可选\",{\"1\":{\"8\":1}}],[\"对pid控制有基本认识\",{\"1\":{\"29\":1}}],[\"相对熟练地使用linux系统\",{\"1\":{\"29\":1}}],[\"相对熟练地使用c++\",{\"1\":{\"29\":1}}],[\"相对熟练地使用c语言\",{\"1\":{\"29\":1}}],[\"相对熟练地使用立创eda\",{\"1\":{\"29\":1}}],[\"相对熟练地使用三维建模软件\",{\"1\":{\"28\":1}}],[\"个人观点\",{\"1\":{\"28\":1,\"29\":1}}],[\"以上排序由易向难\",{\"1\":{\"28\":1,\"29\":1}}],[\"以及应用\",{\"1\":{\"15\":1}}],[\"如蓝牙耳机\",{\"1\":{\"38\":1}}],[\"如果你希望设计出如同视频中\",{\"1\":{\"32\":1}}],[\"如果作为兴趣去学习\",{\"1\":{\"32\":1}}],[\"如果是已经工作之后才想要学习机器人的话\",{\"1\":{\"32\":1}}],[\"如can协议收发\",{\"1\":{\"29\":1}}],[\"如紧凑型行星减速器等\",{\"1\":{\"28\":1}}],[\"如机器狗\",{\"1\":{\"17\":1}}],[\"技术栈\",{\"0\":{\"27\":1}}],[\"404\",{\"1\":{\"62\":1}}],[\"4\",{\"0\":{\"26\":1,\"27\":1,\"31\":1,\"41\":1}}],[\"人机交互系统和控制系统\",{\"1\":{\"25\":1}}],[\"环境交互系统\",{\"1\":{\"25\":1}}],[\"感受系统\",{\"1\":{\"25\":1}}],[\"驱动系统\",{\"1\":{\"25\":1}}],[\"六个子系统\",{\"1\":{\"25\":1}}],[\"嵌入式控制系统等\",{\"1\":{\"25\":1}}],[\"采样电路\",{\"1\":{\"25\":1}}],[\"控制相关\",{\"0\":{\"55\":1}}],[\"控制理论底层公式推导\",{\"1\":{\"44\":1}}],[\"控制部分包括控制电路\",{\"1\":{\"25\":1}}],[\"控制工程学\",{\"1\":{\"15\":1}}],[\"激光雷达等\",{\"1\":{\"25\":1}}],[\"陀螺仪\",{\"1\":{\"25\":1}}],[\"编码器\",{\"1\":{\"25\":1}}],[\"摄像头\",{\"1\":{\"25\":1}}],[\"液压系统\",{\"1\":{\"25\":1}}],[\"气动\",{\"1\":{\"25\":1}}],[\"执行器\",{\"1\":{\"25\":1}}],[\"三大部分\",{\"1\":{\"25\":1}}],[\"3blue1brown\",{\"1\":{\"44\":1}}],[\"32对于你的创造力是一个无限的放大器\",{\"1\":{\"38\":1}}],[\"3\",{\"0\":{\"24\":1,\"36\":1,\"40\":1}}],[\"rm2021\",{\"1\":{\"58\":4}}],[\"rm战队的平衡步兵\",{\"0\":{\"22\":1}}],[\"robomaster2018\",{\"1\":{\"60\":1}}],[\"robomaster2022\",{\"1\":{\"60\":1}}],[\"robomaster2021步兵\",{\"1\":{\"59\":1}}],[\"robomaster2023\",{\"1\":{\"60\":3}}],[\"robomaster2023英雄\",{\"1\":{\"59\":1}}],[\"robomaster2023飞镖系统\",{\"1\":{\"59\":1}}],[\"robomaster2023超级电容\",{\"1\":{\"59\":1}}],[\"robomaster2023工程机器人\",{\"1\":{\"58\":1}}],[\"robot\",{\"1\":{\"17\":1}}],[\"robotics\",{\"1\":{\"15\":1}}],[\"ros2\",{\"0\":{\"51\":1}}],[\"来自toe\",{\"0\":{\"22\":1}}],[\"来自arx方舟无限的小型六自由度机械臂\",{\"0\":{\"21\":1}}],[\"来自boston\",{\"0\":{\"20\":1,\"23\":1}}],[\"常见于科幻作品中\",{\"1\":{\"17\":1}}],[\"目前stm32主流的官方函数库有固件库和hal库\",{\"1\":{\"38\":1}}],[\"目前科学界正在向此方向研究开发\",{\"1\":{\"17\":1}}],[\"目之所及stm32均可实现你的创意\",{\"1\":{\"38\":1}}],[\"目标\",{\"1\":{\"13\":1}}],[\"仿生学\",{\"1\":{\"17\":1}}],[\"和\",{\"1\":{\"17\":1}}],[\"高级集成控制论\",{\"1\":{\"17\":1}}],[\"其至是纳米机器人\",{\"1\":{\"17\":1}}],[\"也包括多台一起动作的群机器人\",{\"1\":{\"17\":1}}],[\"由于hal库的可视化配置和st公司近些年的推动\",{\"1\":{\"38\":1}}],[\"由于tinkercad的建模软件和sw差别较大\",{\"1\":{\"8\":1}}],[\"由计算机程序或是电子电路控制\",{\"1\":{\"17\":1}}],[\"一般会是机电设备\",{\"1\":{\"17\":1}}],[\"在培训之外我们会在本站上同步文档\",{\"1\":{\"32\":1}}],[\"在当代工业中\",{\"1\":{\"17\":1}}],[\"在危险境或制造工厂运作\",{\"1\":{\"15\":1}}],[\"有关机器人的话题\",{\"1\":{\"17\":1}}],[\"有些电脑程序甚至也被称为机器人\",{\"1\":{\"17\":1}}],[\"有助于提高新生的留存率\",{\"1\":{\"3\":1}}],[\"狭义上对机器人的定义还有很多分类法及争议\",{\"1\":{\"17\":1}}],[\"包括发动机控制单元\",{\"1\":{\"38\":1}}],[\"包括一切模拟人类行为或思想与模拟其他生物的机械\",{\"1\":{\"17\":1}}],[\"包括简易的建模和arduino仿真的培训\",{\"1\":{\"7\":1}}],[\"关于机器人\",{\"0\":{\"16\":1}}],[\"关于机器人学\",{\"0\":{\"14\":1}}],[\"致力于仿生机器人学领域的发展\",{\"1\":{\"15\":1}}],[\"现今许多机器人都是受到自然界的启发\",{\"1\":{\"15\":1}}],[\"行为\",{\"1\":{\"15\":1}}],[\"或塑造成外表\",{\"1\":{\"15\":1}}],[\"或者视个人情况\",{\"1\":{\"4\":1}}],[\"这些科技催生出能够取代人力的自动化机器\",{\"1\":{\"15\":1}}],[\"资讯工程学\",{\"1\":{\"15\":1}}],[\"电源相关底层公式推导\",{\"1\":{\"45\":1}}],[\"电子入坑百科全书\",{\"1\":{\"31\":1}}],[\"电子学\",{\"1\":{\"15\":1}}],[\"电控\",{\"0\":{\"59\":1}}],[\"电控方向\",{\"0\":{\"29\":1}}],[\"电控系统通识课\",{\"0\":{\"6\":1}}],[\"电机\",{\"1\":{\"25\":1}}],[\"电机工程学\",{\"1\":{\"15\":1}}],[\"机器猫等\",{\"1\":{\"17\":1}}],[\"机器人相关技术的学习是一个漫长的过程\",{\"1\":{\"32\":1}}],[\"机器人工程师学习计划\",{\"1\":{\"31\":1}}],[\"机器人的系统分析\",{\"0\":{\"24\":1}}],[\"机器人的范围很广\",{\"1\":{\"17\":1}}],[\"机器人指能自动执行任务的人造机器设备\",{\"1\":{\"17\":1}}],[\"机器人\",{\"1\":{\"17\":1,\"25\":1}}],[\"机器人学是一个艰苦的道路\",{\"1\":{\"32\":1}}],[\"机器人学需要的技术栈\",{\"0\":{\"26\":1}}],[\"机器人学\",{\"1\":{\"15\":1}}],[\"机器人通识\",{\"0\":{\"13\":1}}],[\"机器人建模\",{\"0\":{\"6\":1}}],[\"机械\",{\"0\":{\"58\":1}}],[\"机械原理\",{\"1\":{\"47\":1}}],[\"机械设计逻辑分享\",{\"1\":{\"45\":1}}],[\"机械设计讲解\",{\"1\":{\"44\":1}}],[\"机械方向\",{\"0\":{\"28\":1}}],[\"机械结构系统\",{\"1\":{\"25\":1}}],[\"机械部分包括机械传动结构\",{\"1\":{\"25\":1}}],[\"机械电子\",{\"1\":{\"17\":1}}],[\"机械电子学\",{\"1\":{\"15\":1}}],[\"机械工程学\",{\"1\":{\"15\":1}}],[\"集合\",{\"1\":{\"15\":1}}],[\"跨领域科技\",{\"1\":{\"15\":1}}],[\"的产物\",{\"1\":{\"17\":1}}],[\"的\",{\"1\":{\"15\":1}}],[\"建造\",{\"1\":{\"15\":1}}],[\"建议有能力的机械方向的人尽早切入sw\",{\"1\":{\"11\":1}}],[\"设计\",{\"1\":{\"15\":1}}],[\"是一项涵盖了机器人的\",{\"1\":{\"15\":1}}],[\"英语\",{\"1\":{\"15\":1,\"17\":1}}],[\"简单易用的库开发方式\",{\"1\":{\"38\":1}}],[\"简单三维建模\",{\"0\":{\"9\":1}}],[\"简介\",{\"0\":{\"15\":1,\"17\":1}}],[\"让同学对机器人和机器人学相关概念有基本的认识\",{\"1\":{\"13\":1}}],[\"未编写\",{\"0\":{\"12\":1}}],[\"我们将会主要讲授图形化并鼓励有意愿在将来参与电控方向的同学自学c语言用以完成程序编写\",{\"1\":{\"8\":1}}],[\"我们将会鼓励有意愿在将来参与机械方向的同学通过资料自学sw\",{\"1\":{\"8\":1}}],[\"细则\",{\"0\":{\"8\":1,\"11\":1}}],[\"使用tinkercad对新生进行培训\",{\"1\":{\"7\":1}}],[\"比赛的人才储备\",{\"1\":{\"4\":1}}],[\"作为难度较高的项目\",{\"1\":{\"4\":1}}],[\"适用于提拔积极性高的人\",{\"1\":{\"4\":1}}],[\"学python看这套就够了\",{\"1\":{\"49\":1}}],[\"学长手上的酷炫的机器人\",{\"1\":{\"32\":1}}],[\"学长会给出建议\",{\"1\":{\"4\":1}}],[\"学会slam相关算法的实现\",{\"1\":{\"29\":1}}],[\"学会stm32最小系统板及其外围电路\",{\"1\":{\"29\":1}}],[\"学会机器视觉相关算法的实现\",{\"1\":{\"29\":1}}],[\"学会使用高级的机器人控制算法如lqr\",{\"1\":{\"29\":1}}],[\"学会使用仿真环境进行机器人控制系统设计\",{\"1\":{\"29\":1}}],[\"学会使用ros进行机器人控制系统设计\",{\"1\":{\"29\":1}}],[\"学会使用三维建模软件做简单的轻量化设计\",{\"1\":{\"28\":1}}],[\"学会使用三维建模软件做简单的应力分析\",{\"1\":{\"28\":1}}],[\"学会高速线路layout和开关电源设计\",{\"1\":{\"29\":1}}],[\"学会设计无刷电机驱动\",{\"1\":{\"29\":1}}],[\"学会设计复杂机械结构\",{\"1\":{\"28\":1}}],[\"学会在stm32上使用freertos这里有一个岔路\",{\"1\":{\"29\":1}}],[\"学会嵌入式开发\",{\"1\":{\"29\":2}}],[\"学会连杆运动关系的计算并使用仿真软件优化传动结构\",{\"1\":{\"28\":1}}],[\"学会轴系设计\",{\"1\":{\"28\":1}}],[\"学会齿轮等基础传动系统\",{\"1\":{\"28\":1}}],[\"学习内容的难度曲线与前一年相同\",{\"1\":{\"4\":1}}],[\"通过连接传感器和执行器\",{\"1\":{\"38\":1}}],[\"通过tinkercad使学生建立基本的建模和结构设计能力\",{\"1\":{\"10\":1}}],[\"通过arduino来使新生建立对单片机及其外设和基本控制系统的初步认识\",{\"1\":{\"10\":1}}],[\"通过实验室文档自学\",{\"0\":{\"4\":1}}],[\"通过往年培训过程的观察\",{\"1\":{\"2\":1}}],[\"2022b站最好的opencv课程推荐\",{\"1\":{\"50\":1}}],[\"2022新版黑马程序员python教程\",{\"1\":{\"49\":1}}],[\"2021\",{\"1\":{\"47\":1}}],[\"2\",{\"0\":{\"4\":1,\"16\":1,\"17\":1,\"18\":2,\"25\":1,\"31\":1,\"33\":1,\"34\":1,\"35\":2,\"36\":1,\"37\":2,\"38\":2,\"39\":3,\"40\":2,\"41\":2}}],[\"培训阶段细则\",{\"0\":{\"5\":1}}],[\"培训内容的难度曲线较为缓和\",{\"1\":{\"3\":1}}],[\"培训方案大纲\",{\"0\":{\"2\":1}}],[\"统一的培训\",{\"0\":{\"3\":1}}],[\"1机器人系统的组成\",{\"0\":{\"25\":1}}],[\"1\",{\"0\":{\"3\":1,\"13\":1,\"14\":2,\"15\":3,\"16\":1,\"17\":2,\"18\":1,\"24\":1,\"25\":1,\"26\":1,\"27\":2,\"31\":1,\"32\":1,\"33\":1,\"34\":2,\"35\":1,\"36\":1,\"38\":1},\"1\":{\"47\":1}}],[\"所以今年的培训体系分为两层\",{\"1\":{\"2\":1}}],[\"发现同一套培训体系下不同同学的表现相去甚远\",{\"1\":{\"2\":1}}],[\"本文档仅提供toe实验室培训活动大体方向的指导\",{\"1\":{\"1\":1}}],[\"todo\",{\"1\":{\"34\":1}}],[\"toe\",{\"1\":{\"60\":1}}],[\"toe战队培训方案\",{\"0\":{\"1\":1}}],[\"toe实验室资源站\",{\"0\":{\"0\":1}}],[\"tip\",{\"1\":{\"1\":1,\"28\":1,\"29\":1,\"30\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map
