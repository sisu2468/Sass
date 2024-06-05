"use strict";(self.webpackChunkadmin_dashboard_template_dashwind=self.webpackChunkadmin_dashboard_template_dashwind||[]).push([[346],{3073:(e,t,s)=>{s.d(t,{A:()=>m});s(5043);var a=s(426),l=s(7021),n=s(6191),i=s(2692),c=s(7154),o=s(3851),r=s(579);const m=function(e){let{title:t,children:s,topMargin:m,EyeIcon:d,TopSideButtons:u,isVisible:x,onEyeChange:f}=e;return(0,r.jsxs)("div",{className:"card w-full p-3 md:p-6 bg-base-100 shadow-xl "+(m||"mt-4"),children:[(0,r.jsxs)(o.A,{styleClass:u?"inline-block":"",children:[t,u&&(0,r.jsx)(l.Ay,{type:"primary",className:"inline-block float-right",onClick:async()=>{const e=Math.random().toString(36).substr(2,40);console.log("Creating new component with unique string:",e);try{return(await c.A.post("/create-component",{uniqueString:e})).data.success?(0,r.jsx)(a.A,{message:"Component created successfully!",type:"success",showIcon:!0}):(0,r.jsx)(a.A,{message:"Failed to create component",type:"error",showIcon:!0})}catch(t){console.error("Error creating component",t)}},children:u}),d&&(0,r.jsx)("button",{className:"float-right pr-5",onClick:f,children:x?(0,r.jsx)(n.A,{}):(0,r.jsx)(i.A,{})})]}),(0,r.jsx)("div",{className:"divider mt-2"}),(x||d)&&(0,r.jsx)("div",{className:"h-full w-full pb-4 bg-base-100",children:s})]})}},3851:(e,t,s)=>{s.d(t,{A:()=>l});var a=s(579);const l=function(e){let{styleClass:t,children:s}=e;return(0,a.jsx)("div",{className:"text-xl font-semibold ".concat(t),children:s})}},1346:(e,t,s)=>{s.r(t),s.d(t,{default:()=>F});var a=s(5043),l=s(9456),n=s(4117),i=s(8379),c=s(5475),o=s(293),r=s(5389),m=s(785),d=s(6603),u=s(5589),x=s(4783),f=s(4325),h=s(2450),p=s(1238),g=s(6058),w=s(446),k=s.n(w),v=s(461),S=s(8310),j=s(3073),N=s(579);const b=e=>{let{operations:t,setOperations:s,startTime:a,unit:l,...n}=e;return(0,N.jsxs)("div",{className:"w-full",...n,children:[t.map(((e,n)=>(0,N.jsxs)("div",{className:"w-full flex flex-wrap gap-2 mt-4 items-center",children:[n>0&&(0,N.jsxs)("div",{className:"flex-grow flex gap-2",children:[(0,N.jsx)(u.A,{className:"flex-grow",options:[{value:0,label:"Continuous"},{value:1,label:"Bolus"}],value:e.mode,onChange:e=>((e,a)=>{const l=[...t];l[e].mode=a,s(l)})(n,e)}),(0,N.jsx)(m.A,{className:"flex-grow",defaultValue:e.time,onChange:e=>((e,a)=>{const l=[...t];l[e].time=a,s(l)})(n,e),addonBefore:a.add(e.time,"minutes").format("hh:mm"),suffix:"min"})]}),(0,N.jsxs)("div",{className:"flex-grow flex gap-2",children:[(0,N.jsx)(m.A,{className:"flex-grow",defaultValue:e.value,onChange:e=>((e,a)=>{const l=[...t];l[e].value=a<0?0:a,s(l)})(n,e),addonBefore:0==n&&"Initial",suffix:l[e.mode],value:e.value}),n>0&&(0,N.jsx)("button",{className:"flex-none",onClick:()=>(e=>{s(t.filter(((t,s)=>s!=e)))})(n),children:(0,N.jsx)("img",{className:"w-4 h-4",src:"/assets/img/remove.png"})})]})]},n))),(0,N.jsx)("button",{className:"mt-4 w-full py-1 border-dashed border border-gray-500 rounded-full flex justify-center dark:bg-[#2A323C]",onClick:()=>{s([...t,{mode:0,value:0,time:0}])},children:(0,N.jsx)("img",{className:"w-4 h-4",src:"/assets/img/plus.png"})})]})},{Column:A,ColumnGroup:C}=o.A;v.t1.register(v.PP,v.kc,v.FN,v.No,v.hE,v.m_,v.dN,v.s$);const y="HH:mm",E=[["Remimazolam","Dexmedetomidine"],["Remifentanil","Fentanyl"]],_=[["mg/kg/h","\u03bcg/kg/h"],["\u03bcg/mL","ng/mL"],["\u03bcg/kg/min","\u03bcg/min"],["ng/mL","ng/mL"]],I=[["mg/kg/h","mg/kg"],["\u03bcg/kg/h","\u03bcg/kg"]],D=[["\u03bcg/kg/min","\u03bcg/kg"],["\u03bcg/min","\u03bcg"]],B=[{value:1,label:"I"},{value:2,label:"II"},{value:3,label:"III"},{value:4,label:"IV"}],M=()=>{const{t:e}=(0,n.Bd)(),[t,s]=(0,a.useState)(!0),[l,i]=(0,a.useState)(170),[o,w]=(0,a.useState)(70),[v,A]=(0,a.useState)(40),[C,M]=(0,a.useState)(0),[F,P]=(0,a.useState)(1),[V,H]=(0,a.useState)(0),[R,T]=(0,a.useState)(0),[X,z]=(0,a.useState)(2),[L,O]=(0,a.useState)(k()("9.00",y)),[W,$]=(0,a.useState)([{mode:0,time:0,value:1}]),[G,K]=(0,a.useState)([{mode:0,time:0,value:1}]),[q,U]=(0,a.useState)([{mode:0,time:0,value:.2}]),[J,Q]=(0,a.useState)([{mode:0,time:0,value:.2}]),[Y,Z]=(0,a.useState)(0),[ee,te]=(0,a.useState)(0),[se,ae]=(0,a.useState)(0);(0,a.useEffect)((()=>{Z(0==C?1.1*o-128*Math.pow(o/l,2):1.07*o-148*Math.pow(o/l,2))}),[l,o,C]),(0,a.useEffect)((()=>{te(se+.4*(o-se))}),[se,o]),(0,a.useEffect)((()=>{ae(45.4+.89*(l-152.4)+4.5*(1-C))}),[l,C]);const le=[0,3.57,11.3,27.2,1.03,1.1,.401,1.19,.308,.146,-.184,.0205],[ne,ie]=(0,a.useState)(0),[ce,oe]=(0,a.useState)(0),[re,me]=(0,a.useState)(0),[de,ue]=(0,a.useState)(0),[xe,fe]=(0,a.useState)(0),[he,pe]=(0,a.useState)(0),[ge,we]=(0,a.useState)(16.19158879),[ke,ve]=(0,a.useState)(16.19158879),[Se,je]=(0,a.useState)([0,0,0,0]),[Ne,be]=(0,a.useState)([0,0,0,0]),[Ae,Ce]=(0,a.useState)([0,0,0,0]),[ye,Ee]=(0,a.useState)([0,0,0,0]),[_e,Ie]=(0,a.useState)([0,0,0,0]),[De,Be]=(0,a.useState)([0,0,0,0]),[Me,Fe]=(0,a.useState)([0,0,0,0]),[Pe,Ve]=(0,a.useState)([0,0,0,0]),[He,Re]=(0,a.useState)([0,0,0,0]),[Te,Xe]=(0,a.useState)([0,0,0,0]),[ze,Le]=(0,a.useState)([0,0,0,0]);(0,a.useEffect)((()=>{ie(.693/xe)}),[xe]),(0,a.useEffect)((()=>{oe((le[7]+le[11]*(v-54))*Math.pow(ee/67.3,-.25))}),[v,ee]),(0,a.useEffect)((()=>{me(.693/ge)}),[ge]),(0,a.useEffect)((()=>{ue(.693/ke)}),[ke]),(0,a.useEffect)((()=>{fe(.69314718/(.595-.007*(v-40)))}),[v]),(0,a.useEffect)((()=>{pe(.693/ce)}),[ce]),(0,a.useEffect)((()=>{je([5.1-.0201*(v-40)+.072*(Y-55),le[1]*ee/67.3,1.78*o/70,7.9])}),[v,Y,ee,o]),(0,a.useEffect)((()=>{be([9.82-.0811*(v-40)+.108*(Y-55),le[2]*(ee/67.3),30.3*o/70,13.8])}),[v,Y,ee,o]),(0,a.useEffect)((()=>{Ce([5.42,(le[3]+le[8]*(v-54))*(ee/67.3),52*o/70,187])}),[v,ee,o]),(0,a.useEffect)((()=>{Ee([Te[0]/Ne[0],Te[1]/Ne[1],Te[2]/Ne[2],Te[3]/Ne[3]])}),[Te,Ne]),(0,a.useEffect)((()=>{Ie([ze[0]/Ae[0],ze[1]/Ae[1],ze[2]/Ae[2],ze[3]/Ae[3]])}),[ze,Ae]),(0,a.useEffect)((()=>{Be([He[0]/Se[0],He[1]/Se[1],He[2]/Se[2],He[3]/Se[3]])}),[He,Se]),(0,a.useEffect)((()=>{Fe([Te[0]/Se[0],Te[1]/Se[1],Te[2]/Se[2],Te[3]/Se[3]])}),[Te,Se]),(0,a.useEffect)((()=>{Ve([ze[0]/Se[0],ze[1]/Se[1],ze[2]/Se[2],ze[3]/Se[3]])}),[ze,Se]),(0,a.useEffect)((()=>{Re([2.6-.0162*(v-40)+.0191*(Y-55),le[4]+le[9]*C+le[10]*(1==F||2==F?0:1)*Math.pow(ee/67.3,.75),.686*Math.pow(o/70,.75),.00791*l-.927])}),[v,Y,C,F,ee,o,l]),(0,a.useEffect)((()=>{Xe([2.05-.0301*(v-40),le[5]*Math.pow(ee/67.3,.75),2.98*Math.pow(30.3*o/70/30.3,.75),2.26])}),[v,ee,o]),(0,a.useEffect)((()=>{Le([.076-.00113*(v-40),le[6]*Math.pow(ee/67.3,.75),.602*Math.pow(52*o/70/70,.75),1.99])}),[v,ee,o]);const[Oe,We]=(0,a.useState)({k10:0,k12:0,k21:0,k13:0,k31:0,k14:0,k41:0,V:0}),[$e,Ge]=(0,a.useState)({k10:0,k12:0,k21:0,k13:0,k31:0,k14:0,k41:0,V:0});(0,a.useEffect)((()=>{const e=0==V?ce:de;We({k10:0==V?De[1]:De[3],k12:0==V?Me[1]:Me[3],k21:0==V?ye[1]:ye[3],k13:0==V?Pe[1]:Pe[3],k31:0==V?_e[1]:_e[3],k14:e/1e4,k41:e,V:0==V?Se[1]:Se[3]})}),[V,De,Me,ye,Pe,_e,ce,de,Se]),(0,a.useEffect)((()=>{const e=0==R?ne:.12;Ge({k10:0==R?De[0]:.0827,k12:0==R?Me[0]:.471,k21:0==R?ye[0]:.102,k13:0==R?Pe[0]:.225,k31:0==R?_e[0]:.006,k14:e/1e4,k41:e,V:0==R?Se[0]:6.09})}),[R,De,Me,ye,Pe,_e,ne,Se]);const[Ke,qe]=(0,a.useState)([]),[Ue,Je]=(0,a.useState)([]);(0,a.useEffect)((()=>{let e=L.$H,t=L.$m;const s=[];let a=0,l=0,n=0,i=0,c=0;for(let r=0;r<60*X;r++){let m=0;0==V?W.map((e=>{0==e.mode&&e.time==r&&(c=e.value),1==e.mode&&e.time==r&&(m+=e.value)})):G.map((e=>{0==e.mode&&e.time==r&&(c=e.value),1==e.mode&&e.time==r&&(m+=e.value)}));let d=c+m,u=o*d/60,x=-(Oe.k10+Oe.k12+Oe.k13+Oe.k14)*a+Oe.k21*l+Oe.k31*n+Oe.k41*i+u,f=Oe.k12*a-Oe.k21*l,h=Oe.k13*a-Oe.k31*n,p=Oe.k14*a-Oe.k41*i;s.push({time:"".concat(e.toString().padStart(2,"0"),":").concat(t.toString().padStart(2,"0")),minutes:r,X1:a,X2:l,X3:n,X4:i,dx1_dt:x,dx2_dt:f,dx3_dt:h,dx4_dt:p,Dose:d,ESC:1e4*i/Oe.V}),a+=x,l+=f,n+=h,i+=p,t++,60==t&&(e++,t=0,24==e&&(e=0))}qe(s)}),[X,L,Oe,W,G]),(0,a.useEffect)((()=>{let e=L.$H,t=L.$m;const s=[];let a=0,l=0,n=0,i=0,c=0;for(let r=0;r<60*X;r++){let m=0;0==R?q.map((e=>{0==e.mode&&e.time==r&&(c=e.value),1==e.mode&&e.time==r&&(m+=e.value)})):J.map((e=>{0==e.mode&&e.time==r&&(c=e.value),1==e.mode&&e.time==r&&(m+=e.value)}));let d=c+m,u=0==R?o*d:d,x=-($e.k10+$e.k12+$e.k13+$e.k14)*a+$e.k21*l+$e.k31*n+$e.k41*i+u,f=$e.k12*a-$e.k21*l,h=$e.k13*a-$e.k31*n,p=$e.k14*a-$e.k41*i;s.push({time:"".concat(e.toString().padStart(2,"0"),":").concat(t.toString().padStart(2,"0")),minutes:r,X1:a,X2:l,X3:n,X4:i,dx1_dt:x,dx2_dt:f,dx3_dt:h,dx4_dt:p,Dose:d,ESC:1e4*i/$e.V}),a+=x,l+=f,n+=h,i+=p,t++,60==t&&(e++,t=0,24==e&&(e=0))}Je(s)}),[X,L,$e,q,J]);const[Qe,Ye]=(0,a.useState)([]),[Ze,et]=(0,a.useState)({labels:[],datasets:[]});(0,a.useEffect)((()=>{et({labels:Ke.map((e=>e.minutes)),datasets:[{label:"".concat(E[0][V]," [").concat(_[1][V],"]"),data:Ke.map((e=>e.ESC)),yAxisID:"y1",borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)",pointBackgroundColor:"transparent",pointBorderColor:"transparent"},{label:"".concat(E[1][R]," [").concat(_[3][R],"]"),data:Ue.map((e=>e.ESC)),yAxisID:"y2",borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)",pointBackgroundColor:"transparent",pointBorderColor:"transparent"}]})}),[Ke,Ue]),(0,a.useEffect)((()=>{if(Ke.length==Ue.length){const e=[];for(let t=0;t<Ke.length;t++)e.push({key:t,A:Ke[t].time,B:Ke[t].minutes,C:Ke[t].Dose,D:Ke[t].ESC.toFixed(2),E:Ue[t].Dose,F:Ue[t].ESC.toFixed(2)});Ye(e)}}),[Ke,Ue]);const[tt,st]=(0,a.useState)(""),[at]=(0,c.ok)();(0,a.useEffect)((()=>{const e=at.get("_id");e&&S.A.get("/PKS/"+e,(e=>{let{result:t}=e;st(t.name),i(t.height),w(t.weight),A(t.age),M(t.gendor),P(t.ASA_PS),$(t.remimazolam),K(t.dexmedetomidine),U(t.remifentanil),Q(t.fentanyl)}))}),[]);const lt=(0,a.useRef)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"flex flex-wrap",children:[(0,N.jsx)("div",{className:"w-full xl:w-1/3 pr-0 xl:pr-2",children:(0,N.jsxs)(j.A,{title:"Patient",children:[(0,N.jsxs)("div",{className:"flex w-full mt-4 items-center",children:[(0,N.jsxs)("p",{className:"w-1/6 text-[12px]",children:[e("name"),":"]}),(0,N.jsxs)("div",{className:"w-5/6 flex gap-2",children:[(0,N.jsx)(r.A,{className:"flex-grow",onChange:e=>st(e.target.value),value:tt}),(0,N.jsx)("button",{className:"btn btn-primary btn-sm flex-none ".concat(0==tt.length&&"btn-disabled"),onClick:()=>{S.A.post("/PKS",{name:tt,height:l,weight:o,age:v,gendor:C,ASA_PS:F,remimazolam:W,dexmedetomidine:G,remifentanil:q,fentanyl:J})},children:e("save")}),(0,N.jsx)("button",{className:"btn btn-primary btn-sm flex-none ".concat(0==tt.length&&"btn-disabled"),onClick:()=>{const e=lt.current.canvas,t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.fillStyle="white",s.fillRect(0,0,t.width,t.height),s.drawImage(e,0,0);const a=t.toDataURL("image/png");(0,h.saveAs)(a,"".concat(tt,".png"));const n=[];n[1]=[],n[2]=[],n[3]=[],n[4]=[],n[5]=[],n[6]=[],n[1][1]="Patient",n[1][4]="Agents",n[2][1]="HT",n[3][1]="BW",n[4][1]="Age",n[5][1]="Gendor",n[6][1]="ASA-PS",n[2][2]=l,n[3][2]=o,n[4][2]=v,n[5][2]=0==C?"Male":"Female",n[6][2]=1==F?"I":2==F?"II":3==F?"III":"IV",n[2][3]="cm",n[3][3]="kg",n[2][4]="Hypnotics",n[3][4]="Opioid",n[4][4]="Simulation duration [h]",n[6][4]="Start",n[2][5]=0==V?"Remimazolam":"Dexmedetomidine",n[3][5]=0==R?"Remifentanil":"Fentanyl",n[4][5]=X,n[6][5]=L.format("HH:mm"),n[8]=[],n[8][1]="Time",n[8][3]=n[2][5],n[8][5]=n[3][5],n[9]=[],n[9][1]="[h:m]",n[9][2]="min",n[9][3]="Dose(".concat(_[0][V],")"),n[9][4]="ESC(".concat(_[1][V],")"),n[9][5]="Dose(".concat(_[2][R],")"),n[9][6]="ESC(".concat(_[3][R],")");for(let l=0,o=10;l<Qe.length;l++,o++)n[o]=[],n[o][1]=Qe[l].A,n[o][2]=Qe[l].B,n[o][3]=Qe[l].C,n[o][4]=Qe[l].D,n[o][5]=Qe[l].E,n[o][6]=Qe[l].F;const i=p.Wp.aoa_to_sheet(n),c=p.Wp.book_new();i["!merges"]=[{s:{r:1,c:1},e:{r:1,c:3}},{s:{r:1,c:4},e:{r:1,c:5}},{s:{r:4,c:4},e:{r:5,c:4}},{s:{r:4,c:5},e:{r:5,c:5}},{s:{r:8,c:1},e:{r:8,c:2}},{s:{r:8,c:3},e:{r:8,c:4}},{s:{r:8,c:5},e:{r:8,c:6}}],i["!cols"]=[];for(let l=0;l<=6;l++)i["!cols"][l]={wch:0==l?2:12};p.Wp.book_append_sheet(c,i,"PKS");const r=p.M9(c,{type:"array",bookType:"xlsx"});(0,h.saveAs)(new Blob([r]),"".concat(tt,".xlsx"))},children:e("download")})]})]}),(0,N.jsxs)("div",{className:"flex w-full mt-4 items-center",children:[(0,N.jsx)("p",{className:"w-1/6 text-[12px]",children:"HT:"}),(0,N.jsx)(m.A,{className:"w-5/6",suffix:"cm",value:l,onChange:i})]}),(0,N.jsxs)("div",{className:"flex w-full mt-4 items-center",children:[(0,N.jsx)("p",{className:"w-1/6 text-[12px]",children:"BW:"}),(0,N.jsx)(m.A,{className:"w-5/6",suffix:"kg",value:o,onChange:w})]}),(0,N.jsxs)("div",{className:"flex w-full mt-4 items-center",children:[(0,N.jsx)("p",{className:"w-1/6 text-[12px]",children:"Age:"}),(0,N.jsx)(m.A,{className:"w-5/6",value:v,onChange:A})]}),(0,N.jsxs)("div",{className:"flex w-full mt-4 items-center",children:[(0,N.jsx)("p",{className:"w-1/6 text-[12px]",children:"Gendor:"}),(0,N.jsxs)(d.Ay.Group,{className:"w-5/6",value:C,onChange:e=>M(e.target.value),children:[(0,N.jsx)(d.Ay,{value:0,children:"Male"}),(0,N.jsx)(d.Ay,{value:1,children:"Female"})]})]}),(0,N.jsxs)("div",{className:"flex w-full mt-4 items-center",children:[(0,N.jsx)("p",{className:"w-1/6 text-[12px]",children:"ASA-PS:"}),(0,N.jsx)(u.A,{className:"w-5/6",options:B,value:F,onChange:P})]})]})}),(0,N.jsx)("div",{className:"w-full xl:w-2/3 pl-0 xl:pl-2",children:(0,N.jsxs)(j.A,{title:"Agent",children:[(0,N.jsxs)("div",{className:"w-full flex-wrap flex items-start",children:[(0,N.jsxs)("div",{className:"w-full xl:w-1/2 mt-4 xl:pr-2",children:[(0,N.jsxs)("div",{className:"w-full flex items-center",children:[(0,N.jsx)("p",{className:"w-1/4 text-[12px]",children:"Hypnotics:"}),(0,N.jsx)(u.A,{className:"w-3/4",value:V,options:[{value:0,label:"Remimazolam"},{value:1,label:"Dexmedetomidine"}],onChange:H})]}),(0,N.jsx)(b,{operations:0==V?W:G,setOperations:0==V?$:K,startTime:L,unit:I[V]})]}),(0,N.jsxs)("div",{className:"w-full xl:w-1/2 mt-4 xl:pl-2",children:[(0,N.jsxs)("div",{className:"w-full flex items-center",children:[(0,N.jsx)("p",{className:"w-1/4 text-[12px]",children:"Opioid:"}),(0,N.jsx)(u.A,{className:"w-3/4",value:R,options:[{value:0,label:"Remifentanil"},{value:1,label:"Fentanyl"}],onChange:T})]}),(0,N.jsx)(b,{operations:0==R?q:J,setOperations:0==R?U:Q,startTime:L,unit:D[R]})]})]}),(0,N.jsxs)("div",{className:"flex w-full mt-4 items-center",children:[(0,N.jsx)("p",{className:"w-1/3 text-[12px]",children:"Simulation duration:"}),(0,N.jsxs)("div",{className:"w-2/3 flex gap-4",children:[(0,N.jsx)(m.A,{className:"w-1/2",min:2,max:12,value:X,onChange:z,suffix:"h"}),(0,N.jsx)(x.A,{className:"w-1/2",min:2,max:12,onChange:z,value:X})]})]}),(0,N.jsxs)("div",{className:"flex w-full mt-4 items-center",children:[(0,N.jsx)("p",{className:"w-1/6 text-[12px]",children:"Start time:"}),(0,N.jsx)(f.A,{className:"w-5/6",defaultValue:k()("9:00",y),format:y,onChange:O,allowClear:!1})]})]})})]}),(0,N.jsx)("div",{className:"flex flex-wrap items-start",children:(0,N.jsx)(j.A,{className:"w-full",title:"Dose and Effect site concentration (Chart)",children:(0,N.jsx)(g.N1,{className:"h-80 md:h-96",data:Ze,options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{intersect:!1,callbacks:{title:e=>"".concat(e[0].label," min")}}},scales:{x:{title:{display:!0,text:"Simulation duration (min)",font:{weight:"bold"}}},y1:{type:"linear",display:!0,position:"left",min:0,title:{display:!0,text:"".concat(E[0][V]," [").concat(_[1][V],"]")}},y2:{type:"linear",display:!0,position:"right",min:0,title:{display:!0,text:"".concat(E[1][R]," [").concat(_[3][R],"]")}}}},ref:lt})})})]})};const F=function(){const{user:e}=(0,l.d4)((e=>e.user)),{t:t}=(0,n.Bd)(),s=(0,l.wA)();return(0,a.useEffect)((()=>{s((0,i.wE)({title:"Pharmacokinetic"}))}),[]),null!==e&&void 0!==e&&e.paid||null!==e&&void 0!==e&&e.isAdmin?(0,N.jsx)(M,{}):(0,N.jsx)(j.A,{className:"w-full",title:"Dose and Effect site concentration (Table)",children:t("you_have_no_permission_please_pay")})}}}]);
//# sourceMappingURL=346.92899c03.chunk.js.map