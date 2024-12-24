"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[1017],{93498:(t,e,n)=>{n.d(e,{M:()=>c});var r=n(89523);var i=n(40295);var a=4;function o(t){return(0,i.A)(t,a)}const s=o;var d=n(8937);var l=n(78230);function c(t){var e={options:{directed:t.isDirected(),multigraph:t.isMultigraph(),compound:t.isCompound()},nodes:h(t),edges:g(t)};if(!r.A(t.graph())){e.value=s(t.graph())}return e}function h(t){return d.A(t.nodes(),(function(e){var n=t.node(e);var i=t.parent(e);var a={v:e};if(!r.A(n)){a.value=n}if(!r.A(i)){a.parent=i}return a}))}function g(t){return d.A(t.edges(),(function(e){var n=t.edge(e);var i={v:e.v,w:e.w};if(!r.A(e.name)){i.name=e.name}if(!r.A(n)){i.value=n}return i}))}function f(t){var e=new Graph(t.options).setGraph(t.value);_.each(t.nodes,(function(t){e.setNode(t.v,t.value);if(t.parent){e.setParent(t.v,t.parent)}}));_.each(t.edges,(function(t){e.setEdge({v:t.v,w:t.w,name:t.name},t.value)}));return e}},71017:(t,e,n)=>{n.d(e,{r:()=>L});var r=n(29);var i=n(93498);var a=n(28768);var o=n(76235);var s=n(84416);var d=n(78258);var l=n(92935);let c={};let h={};let g={};const f=()=>{h={};g={};c={}};const u=(t,e)=>{o.l.trace("In isDecendant",e," ",t," = ",h[e].includes(t));if(h[e].includes(t)){return true}return false};const w=(t,e)=>{o.l.info("Decendants of ",e," is ",h[e]);o.l.info("Edge is ",t);if(t.v===e){return false}if(t.w===e){return false}if(!h[e]){o.l.debug("Tilt, ",e,",not in decendants");return false}return h[e].includes(t.v)||u(t.v,e)||u(t.w,e)||h[e].includes(t.w)};const p=(t,e,n,r)=>{o.l.warn("Copying children of ",t,"root",r,"data",e.node(t),r);const i=e.children(t)||[];if(t!==r){i.push(t)}o.l.warn("Copying (nodes) clusterId",t,"nodes",i);i.forEach((i=>{if(e.children(i).length>0){p(i,e,n,r)}else{const a=e.node(i);o.l.info("cp ",i," to ",r," with parent ",t);n.setNode(i,a);if(r!==e.parent(i)){o.l.warn("Setting parent",i,e.parent(i));n.setParent(i,e.parent(i))}if(t!==r&&i!==t){o.l.debug("Setting parent",i,t);n.setParent(i,t)}else{o.l.info("In copy ",t,"root",r,"data",e.node(t),r);o.l.debug("Not Setting parent for node=",i,"cluster!==rootId",t!==r,"node!==clusterId",i!==t)}const s=e.edges(i);o.l.debug("Copying Edges",s);s.forEach((i=>{o.l.info("Edge",i);const a=e.edge(i.v,i.w,i.name);o.l.info("Edge data",a,r);try{if(w(i,r)){o.l.info("Copying as ",i.v,i.w,a,i.name);n.setEdge(i.v,i.w,a,i.name);o.l.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))}else{o.l.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",t)}}catch(s){o.l.error(s)}}))}o.l.debug("Removing node",i);e.removeNode(i)}))};const v=(t,e)=>{const n=e.children(t);let r=[...n];for(const i of n){g[i]=t;r=[...r,...v(i,e)]}return r};const y=(t,e)=>{o.l.trace("Searching",t);const n=e.children(t);o.l.trace("Searching children of id ",t,n);if(n.length<1){o.l.trace("This is a valid node",t);return t}for(const r of n){const n=y(r,e);if(n){o.l.trace("Found replacement for",t," => ",n);return n}}};const m=t=>{if(!c[t]){return t}if(!c[t].externalConnections){return t}if(c[t]){return c[t].id}return t};const x=(t,e)=>{if(!t||e>10){o.l.debug("Opting out, no graph ");return}else{o.l.debug("Opting in, graph ")}t.nodes().forEach((function(e){const n=t.children(e);if(n.length>0){o.l.warn("Cluster identified",e," Replacement id in edges: ",y(e,t));h[e]=v(e,t);c[e]={id:y(e,t),clusterData:t.node(e)}}}));t.nodes().forEach((function(e){const n=t.children(e);const r=t.edges();if(n.length>0){o.l.debug("Cluster identified",e,h);r.forEach((t=>{if(t.v!==e&&t.w!==e){const n=u(t.v,e);const r=u(t.w,e);if(n^r){o.l.warn("Edge: ",t," leaves cluster ",e);o.l.warn("Decendants of XXX ",e,": ",h[e]);c[e].externalConnections=true}}}))}else{o.l.debug("Not a cluster ",e,h)}}));t.edges().forEach((function(e){const n=t.edge(e);o.l.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e));o.l.warn("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(t.edge(e)));let r=e.v;let i=e.w;o.l.warn("Fix XXX",c,"ids:",e.v,e.w,"Translating: ",c[e.v]," --- ",c[e.w]);if(c[e.v]&&c[e.w]&&c[e.v]===c[e.w]){o.l.warn("Fixing and trixing link to self - removing XXX",e.v,e.w,e.name);o.l.warn("Fixing and trixing - removing XXX",e.v,e.w,e.name);r=m(e.v);i=m(e.w);t.removeEdge(e.v,e.w,e.name);const a=e.w+"---"+e.v;t.setNode(a,{domId:a,id:a,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});const s=structuredClone(n);const d=structuredClone(n);s.label="";s.arrowTypeEnd="none";d.label="";s.fromCluster=e.v;d.toCluster=e.v;t.setEdge(r,a,s,e.name+"-cyclic-special");t.setEdge(a,i,d,e.name+"-cyclic-special")}else if(c[e.v]||c[e.w]){o.l.warn("Fixing and trixing - removing XXX",e.v,e.w,e.name);r=m(e.v);i=m(e.w);t.removeEdge(e.v,e.w,e.name);if(r!==e.v){n.fromCluster=e.v}if(i!==e.w){n.toCluster=e.w}o.l.warn("Fix Replacing with XXX",r,i,e.name);t.setEdge(r,i,n,e.name)}}));o.l.warn("Adjusted Graph",i.M(t));b(t,0);o.l.trace(c)};const b=(t,e)=>{o.l.warn("extractor - ",e,i.M(t),t.children("D"));if(e>10){o.l.error("Bailing out");return}let n=t.nodes();let r=false;for(const i of n){const e=t.children(i);r=r||e.length>0}if(!r){o.l.debug("Done, no node has children",t.nodes());return}o.l.debug("Nodes = ",n,e);for(const a of n){o.l.debug("Extracting node",a,c,c[a]&&!c[a].externalConnections,!t.parent(a),t.node(a),t.children("D")," Depth ",e);if(!c[a]){o.l.debug("Not a cluster",a,e)}else if(!c[a].externalConnections&&t.children(a)&&t.children(a).length>0){o.l.warn("Cluster without external connections, without a parent and with children",a,e);const n=t.graph();let r=n.rankdir==="TB"?"LR":"TB";if(c[a]&&c[a].clusterData&&c[a].clusterData.dir){r=c[a].clusterData.dir;o.l.warn("Fixing dir",c[a].clusterData.dir,r)}const d=new s.T({multigraph:true,compound:true}).setGraph({rankdir:r,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));o.l.warn("Old graph before copy",i.M(t));p(a,t,d,a);t.setNode(a,{clusterNode:true,id:a,clusterData:c[a].clusterData,labelText:c[a].labelText,graph:d});o.l.warn("New graph after copy node: (",a,")",i.M(d));o.l.debug("Old graph after copy",i.M(t))}else{o.l.warn("Cluster ** ",a," **not meeting the criteria !externalConnections:",!c[a].externalConnections," no parent: ",!t.parent(a)," children ",t.children(a)&&t.children(a).length>0,t.children("D"),e);o.l.debug(c)}}n=t.nodes();o.l.warn("New list of nodes",n);for(const i of n){const n=t.node(i);o.l.warn(" Now next level",i,n);if(n.clusterNode){b(n.graph,e+1)}}};const N=(t,e)=>{if(e.length===0){return[]}let n=Object.assign(e);e.forEach((e=>{const r=t.children(e);const i=N(t,r);n=[...n,...i]}));return n};const E=t=>N(t,t.children());const X=(t,e)=>{o.l.info("Creating subgraph rect for ",e.id,e);const n=t.insert("g").attr("class","cluster"+(e.class?" "+e.class:"")).attr("id",e.id);const r=n.insert("rect",":first-child");const i=(0,o.m)((0,o.c)().flowchart.htmlLabels);const s=n.insert("g").attr("class","cluster-label");const c=e.labelType==="markdown"?(0,d.a)(s,e.labelText,{style:e.labelStyle,useHtmlLabels:i}):s.node().appendChild((0,a.c)(e.labelText,e.labelStyle,void 0,true));let h=c.getBBox();if((0,o.m)((0,o.c)().flowchart.htmlLabels)){const t=c.children[0];const e=(0,l.Ltv)(c);h=t.getBoundingClientRect();e.attr("width",h.width);e.attr("height",h.height)}const g=0*e.padding;const f=g/2;const u=e.width<=h.width+g?h.width+g:e.width;if(e.width<=h.width+g){e.diff=(h.width-e.width)/2-e.padding/2}else{e.diff=-e.padding/2}o.l.trace("Data ",e,JSON.stringify(e));r.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",e.x-u/2).attr("y",e.y-e.height/2-f).attr("width",u).attr("height",e.height+g);if(i){s.attr("transform","translate("+(e.x-h.width/2)+", "+(e.y-e.height/2)+")")}else{s.attr("transform","translate("+e.x+", "+(e.y-e.height/2)+")")}const w=r.node().getBBox();e.width=w.width;e.height=w.height;e.intersect=function(t){return(0,a.i)(e,t)};return n};const C=(t,e)=>{const n=t.insert("g").attr("class","note-cluster").attr("id",e.id);const r=n.insert("rect",":first-child");const i=0*e.padding;const o=i/2;r.attr("rx",e.rx).attr("ry",e.ry).attr("x",e.x-e.width/2-o).attr("y",e.y-e.height/2-o).attr("width",e.width+i).attr("height",e.height+i).attr("fill","none");const s=r.node().getBBox();e.width=s.width;e.height=s.height;e.intersect=function(t){return(0,a.i)(e,t)};return n};const S=(t,e)=>{const n=t.insert("g").attr("class",e.classes).attr("id",e.id);const r=n.insert("rect",":first-child");const i=n.insert("g").attr("class","cluster-label");const s=n.append("rect");const d=i.node().appendChild((0,a.c)(e.labelText,e.labelStyle,void 0,true));let c=d.getBBox();if((0,o.m)((0,o.c)().flowchart.htmlLabels)){const t=d.children[0];const e=(0,l.Ltv)(d);c=t.getBoundingClientRect();e.attr("width",c.width);e.attr("height",c.height)}c=d.getBBox();const h=0*e.padding;const g=h/2;const f=e.width<=c.width+e.padding?c.width+e.padding:e.width;if(e.width<=c.width+e.padding){e.diff=(c.width+e.padding*0-e.width)/2}else{e.diff=-e.padding/2}r.attr("class","outer").attr("x",e.x-f/2-g).attr("y",e.y-e.height/2-g).attr("width",f+h).attr("height",e.height+h);s.attr("class","inner").attr("x",e.x-f/2-g).attr("y",e.y-e.height/2-g+c.height-1).attr("width",f+h).attr("height",e.height+h-c.height-3);i.attr("transform","translate("+(e.x-c.width/2)+", "+(e.y-e.height/2-e.padding/3+((0,o.m)((0,o.c)().flowchart.htmlLabels)?5:3))+")");const u=r.node().getBBox();e.height=u.height;e.intersect=function(t){return(0,a.i)(e,t)};return n};const D=(t,e)=>{const n=t.insert("g").attr("class",e.classes).attr("id",e.id);const r=n.insert("rect",":first-child");const i=0*e.padding;const o=i/2;r.attr("class","divider").attr("x",e.x-e.width/2-o).attr("y",e.y-e.height/2).attr("width",e.width+i).attr("height",e.height+i);const s=r.node().getBBox();e.width=s.width;e.height=s.height;e.diff=-e.padding/2;e.intersect=function(t){return(0,a.i)(e,t)};return n};const B={rect:X,roundedWithTitle:S,noteGroup:C,divider:D};let O={};const T=(t,e)=>{o.l.trace("Inserting cluster");const n=e.shape||"rect";O[e.id]=B[n](t,e)};const J=()=>{O={}};const k=async(t,e,n,s,d)=>{o.l.info("Graph in recursive render: XXX",i.M(e),d);const l=e.graph().rankdir;o.l.trace("Dir in recursive render - dir:",l);const h=t.insert("g").attr("class","root");if(!e.nodes()){o.l.info("No nodes found for",e)}else{o.l.info("Recursive render XXX",e.nodes())}if(e.edges().length>0){o.l.trace("Recursive edges",e.edge(e.edges()[0]))}const g=h.insert("g").attr("class","clusters");const f=h.insert("g").attr("class","edgePaths");const u=h.insert("g").attr("class","edgeLabels");const w=h.insert("g").attr("class","nodes");await Promise.all(e.nodes().map((async function(t){const r=e.node(t);if(d!==void 0){const n=JSON.parse(JSON.stringify(d.clusterData));o.l.info("Setting data for cluster XXX (",t,") ",n,d);e.setNode(d.id,n);if(!e.parent(t)){o.l.trace("Setting parent",t,d.id);e.setParent(t,d.id,n)}}o.l.info("(Insert) Node XXX"+t+": "+JSON.stringify(e.node(t)));if(r&&r.clusterNode){o.l.info("Cluster identified",t,r.width,e.node(t));const i=await k(w,r.graph,n,s,e.node(t));const d=i.elem;(0,a.u)(r,d);r.diff=i.diff||0;o.l.info("Node bounds (abc123)",t,r,r.width,r.x,r.y);(0,a.s)(d,r);o.l.warn("Recursive render complete ",d,r)}else{if(e.children(t).length>0){o.l.info("Cluster - the non recursive path XXX",t,r.id,r,e);o.l.info(y(r.id,e));c[r.id]={id:y(r.id,e),node:r}}else{o.l.info("Node - the non recursive path",t,r.id,r);await(0,a.e)(w,e.node(t),l)}}})));e.edges().forEach((function(t){const n=e.edge(t.v,t.w,t.name);o.l.info("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t));o.l.info("Edge "+t.v+" -> "+t.w+": ",t," ",JSON.stringify(e.edge(t)));o.l.info("Fix",c,"ids:",t.v,t.w,"Translateing: ",c[t.v],c[t.w]);(0,a.f)(u,n)}));e.edges().forEach((function(t){o.l.info("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t))}));o.l.info("#############################################");o.l.info("###                Layout                 ###");o.l.info("#############################################");o.l.info(e);(0,r.Zp)(e);o.l.info("Graph after layout:",i.M(e));let p=0;E(e).forEach((function(t){const n=e.node(t);o.l.info("Position "+t+": "+JSON.stringify(e.node(t)));o.l.info("Position "+t+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height);if(n&&n.clusterNode){(0,a.p)(n)}else{if(e.children(t).length>0){T(g,n);c[n.id].node=n}else{(0,a.p)(n)}}}));e.edges().forEach((function(t){const r=e.edge(t);o.l.info("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(r),r);const i=(0,a.g)(f,t,r,c,n,e,s);(0,a.h)(r,i)}));e.nodes().forEach((function(t){const n=e.node(t);o.l.info(t,n.type,n.diff);if(n.type==="group"){p=n.diff}}));return{elem:h,diff:p}};const L=async(t,e,n,r,s)=>{(0,a.a)(t,n,r,s);(0,a.b)();(0,a.d)();J();f();o.l.warn("Graph at first:",JSON.stringify(i.M(e)));x(e);o.l.warn("Graph after:",JSON.stringify(i.M(e)));await k(t,e,r,s)}}}]);