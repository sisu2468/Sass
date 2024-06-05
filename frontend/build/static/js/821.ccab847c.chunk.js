"use strict";(self.webpackChunkadmin_dashboard_template_dashwind=self.webpackChunkadmin_dashboard_template_dashwind||[]).push([[821],{3073:(e,s,a)=>{a.d(s,{A:()=>d});a(5043);var t=a(426),n=a(7021),i=a(6191),l=a(2692),o=a(7154),r=a(3851),c=a(579);const d=function(e){let{title:s,children:a,topMargin:d,EyeIcon:h,TopSideButtons:m,isVisible:p,onEyeChange:x}=e;return(0,c.jsxs)("div",{className:"card w-full p-3 md:p-6 bg-base-100 shadow-xl "+(d||"mt-4"),children:[(0,c.jsxs)(r.A,{styleClass:m?"inline-block":"",children:[s,m&&(0,c.jsx)(n.Ay,{type:"primary",className:"inline-block float-right",onClick:async()=>{const e=Math.random().toString(36).substr(2,40);console.log("Creating new component with unique string:",e);try{return(await o.A.post("/create-component",{uniqueString:e})).data.success?(0,c.jsx)(t.A,{message:"Component created successfully!",type:"success",showIcon:!0}):(0,c.jsx)(t.A,{message:"Failed to create component",type:"error",showIcon:!0})}catch(s){console.error("Error creating component",s)}},children:m}),h&&(0,c.jsx)("button",{className:"float-right pr-5",onClick:x,children:p?(0,c.jsx)(i.A,{}):(0,c.jsx)(l.A,{})})]}),(0,c.jsx)("div",{className:"divider mt-2"}),(p||h)&&(0,c.jsx)("div",{className:"h-full w-full pb-4 bg-base-100",children:a})]})}},2201:(e,s,a)=>{a.d(s,{A:()=>i});var t=a(5043),n=a(579);const i=function(e){let{labelTitle:s,labelStyle:a,type:i,containerStyle:l,defaultValue:o,placeholder:r,updateFormValue:c,updateType:d}=e;const[h,m]=(0,t.useState)(o);return(0,n.jsxs)("div",{className:"form-control w-full ".concat(l),children:[(0,n.jsx)("label",{className:"label",children:(0,n.jsx)("span",{className:"label-text text-base-content "+a,children:s})}),(0,n.jsx)("input",{type:i||"text",value:h,placeholder:r||"",onChange:e=>{return s=e.target.value,m(s),void c({updateType:d,value:s});var s},className:"input  input-bordered w-full "})]})}},3982:(e,s,a)=>{a.d(s,{A:()=>n});var t=a(579);const n=function(e){let{styleClass:s,children:a}=e;return(0,t.jsx)("p",{className:"text-center  text-error ".concat(s),children:a})}},3851:(e,s,a)=>{a.d(s,{A:()=>n});var t=a(579);const n=function(e){let{styleClass:s,children:a}=e;return(0,t.jsx)("div",{className:"text-xl font-semibold ".concat(s),children:a})}},1821:(e,s,a)=>{a.r(s),a.d(s,{default:()=>y});var t=a(5475),n=a(5043),i=a(579);const l=function(e){let{activeIndex:s}=e;const a=[{name:"Authentication",isActive:1===s},{name:"Sidebar",isActive:!1},{name:"Add New Page",isActive:!1},{name:"Right sidebar",isActive:!1},{name:"Themes",isActive:!1},{name:"Modal",isActive:!1},{name:"Notification",isActive:!1}],[t,l]=(0,n.useState)(a);return(0,i.jsxs)("ul",{className:"menu w-56 mt-10 text-sm",children:[(0,i.jsx)("li",{className:"menu-title",children:(0,i.jsx)("span",{className:"",children:"Features"})}),t.map(((e,s)=>(0,i.jsx)("li",{onClick:()=>{return e=s,l(t.map(((s,a)=>a===e?{...s,isActive:!0}:{...s,isActive:!1}))),void document.getElementById("feature"+(e+1)).scrollIntoView({behavior:"smooth"});var e},className:e.isActive?"bordered":"",children:(0,i.jsx)("a",{children:e.name})},s)))]})};var o=a(9456),r=a(3851),c=a(8379);const d=function(){return(0,o.wA)(),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("article",{className:"prose",children:[(0,i.jsx)("h1",{className:"",children:"Getting Started"}),(0,i.jsx)("h2",{className:"",id:"getstarted1",children:"Introduction"}),(0,i.jsxs)("p",{children:["A free dashboard template using ",(0,i.jsx)("span",{className:"font-bold",children:"Daisy UI"})," and react js. With the help of Dasisy UI, it comes with ",(0,i.jsx)("span",{className:"font-bold",children:"fully customizable and themable CSS"})," and power of Tailwind CSS utility classes. We have also added ",(0,i.jsx)("span",{className:"font-bold",children:"redux toolkit"}),"  and configured it for API calls and state management."]}),(0,i.jsx)("p",{children:"User authentication has been implemented using JWT token method (ofcourse you need backend API for generating and verifying token). This template can be used to start your next SaaS project or build new internal tools in your company."}),(0,i.jsx)("h4",{children:" Core libraries used - "}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://reactjs.org/",target:"_blank",children:"React JS v18.2.0"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://reactrouter.com/en/main",target:"_blank",children:"React Router v6.4.3"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://tailwindcss.com/",target:"_blank",children:"Tailwind CSS v3.3.6"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://daisyui.com/",target:"_blank",children:"Daisy UI v4.4.19"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://heroicons.com/",target:"_blank",children:"HeroIcons v2.0.13"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://redux-toolkit.js.org/",target:"_blank",children:"Redux toolkit v1.9.0"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://react-chartjs-2.js.org/",target:"_blank",children:"React ChartJS 2 v5.0.1"})})]}),(0,i.jsx)("h4",{children:"Major features - "}),(0,i.jsx)("p",{className:"",children:"Almost all major UI components are available in Daisy UI library. Apart from this logic has been added for following - "}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[" ",(0,i.jsx)("span",{className:"font-bold",children:"Light/dark"})," mode toggle"]}),(0,i.jsx)("li",{children:" Token based user authentication"}),(0,i.jsxs)("li",{children:[" ",(0,i.jsx)("span",{className:"font-bold",children:"Submenu support"})," in sidebar"]}),(0,i.jsxs)("li",{children:[" Store management using ",(0,i.jsx)("span",{className:"font-bold",children:"redux toolkit"})]}),(0,i.jsxs)("li",{children:[" ",(0,i.jsx)("span",{className:"font-bold",children:"Daisy UI"})," components"]}),(0,i.jsxs)("li",{children:[" ",(0,i.jsx)("span",{className:"font-bold",children:"Right and left sidebar"}),", Universal loader, notifications and other components"]}),(0,i.jsxs)("li",{children:[" React ",(0,i.jsx)("span",{className:"font-bold",children:"chart js 2"})," examples"]})]}),(0,i.jsx)("h2",{id:"getstarted2",children:"How to use?"}),(0,i.jsxs)("p",{children:["Just clone the repo from github and then run following command (Make sure you have node js installed )",(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://github.com/srobbin01/daisyui-admin-dashboard-template",className:"text-sm text-blue-500",target:"_blank",children:"Repo Link"}),(0,i.jsx)("br",{}),(0,i.jsx)("code",{children:" npm install "}),(0,i.jsx)("br",{}),(0,i.jsx)("code",{children:"npm start"})]}),(0,i.jsx)("h2",{id:"getstarted3",children:"Tailwind CSS"}),(0,i.jsx)("p",{children:"Tailwind CSS is a utility-first CSS framework with predefined classes that you can use to build and design the UI directly in the JSX. We have also included Daisy UI Component, that is based on tailwind CSS."}),(0,i.jsx)("h2",{id:"getstarted4",children:"Daisy UI"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("a",{href:"https://daisyui.com/",target:"_blank",className:"text-xl btn-link",children:"Daisy UI"}),", a popular free and opensource tailwind component library has been used for this template. It has a rich collection of components, layouts and is fully customizable and themeable."]}),(0,i.jsxs)("p",{children:["Apart from this it also helps in making HTML code more cleaner as we don't have to include all utility classes of tailwind to make the UI. Check components ",(0,i.jsx)("a",{href:"https://daisyui.com/components/button/",target:"_blank",className:"btn-link",children:"documentation here"}),". For Ex- "]}),(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("h2",{className:"text-xl font-bold mb-0.5",children:"Creating a button"})}),(0,i.jsxs)("div",{className:"",children:[(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("p",{className:"text-center font-semibold",children:" using only utility classes of tailwind"}),(0,i.jsx)("div",{className:"mockup-code text-justify mb-4",children:(0,i.jsx)("pre",{className:"my-0 py-0",children:(0,i.jsx)("code",{children:'<a className="inline-block px-4 py-3 \n text-sm font-semibold text-center \n text-white uppercase transition duration-200 \n ease-in-out bg-indigo-600 \n rounded-md cursor-pointer \n hover:bg-indigo-700">Button</a>'})})}),(0,i.jsx)("button",{className:"inline-block  px-4 py-3  text-sm font-semibold text-center  text-white uppercase transition duration-200  ease-in-out bg-indigo-600  rounded-md cursor-pointer  hover:bg-indigo-700",children:"Button"})]}),(0,i.jsx)("div",{className:"divider"}),(0,i.jsxs)("div",{className:"grid w-full flex-grow",children:[(0,i.jsx)("p",{className:"text-center font-semibold",children:"using daisyUI component classes"}),(0,i.jsx)("div",{className:"mockup-code mb-4",children:(0,i.jsx)("pre",{className:"my-0 py-0",children:(0,i.jsx)("code",{children:'<a className="btn btn-primary">\nButton</a>'})})}),(0,i.jsx)("button",{className:"btn btn-primary",children:"Button"})]})]}),(0,i.jsx)("h2",{id:"getstarted5",children:"Chart JS"}),(0,i.jsxs)("p",{children:["Chart JS library has rich components of different charts available. It is based on  ",(0,i.jsx)("a",{href:"https://www.chartjs.org/",target:"_blank",alt:"",children:" Chart.js"})," library, the most popular charting library. We have added this library and added couple of examples in seperate page."]}),(0,i.jsx)("h2",{id:"getstarted6",children:"Redux Toolkit"}),(0,i.jsxs)("p",{children:["The Redux Toolkit package helps in writing redux logic easily. It was originally created to help address three common concerns about Redux:",(0,i.jsx)("li",{children:"Configuring a Redux store is too complicated"}),(0,i.jsx)("li",{children:"I have to add a lot of packages to get Redux to do anything useful"}),(0,i.jsx)("li",{children:'Redux requires too much boilerplate code"'}),"This library has been configured and used for showing notifications, modals and loading data from API in leads page."]}),(0,i.jsx)("h2",{id:"getstarted7",children:"Hero Icons"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("a",{href:"https://heroicons.com/",target:"_blank",className:"text-xl btn-link",children:"HeroIcons"})," library has been used for all the icons in this templates. It has a rich collection of SVG icons, and is made by the makers of Tailwind CSS."]}),(0,i.jsxs)("p",{className:"mt-4",children:["Each icon can be imported individually as a React component, check ",(0,i.jsx)("a",{href:"https://github.com/tailwindlabs/heroicons",target:"_blank",className:"btn-link",children:"documentation"})]}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:"import BeakerIcon from '@heroicons/react/24/solid/BeakerIcon'"})}),(0,i.jsx)("p",{children:"Use as follows in your component"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:"<BeakerIcon className='h-6 w-6'/>"})}),(0,i.jsx)("div",{className:"divider "}),(0,i.jsx)("div",{className:"alert mt-4 alert-warning shadow-lg",children:(0,i.jsx)("div",{children:(0,i.jsx)("span",{children:"Note: Importing all icons in single line will increase your build time"})})}),(0,i.jsx)("p",{children:"Don't import like this (will load all icons and increase build time)"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{children:"import {BeakerIcon, BellIcon } from '@heroicons/react/24/solid'"})}),(0,i.jsx)("p",{children:"Instead import as follows"}),(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{children:["import BeakerIcon from '@heroicons/react/24/solid/BeakerIcon'",(0,i.jsx)("br",{}),"import BellIcon from '@heroicons/react/24/solid/BellIcon'"]})}),(0,i.jsx)("div",{className:"badge badge-secondary",children:"This is better way for importing icons"}),(0,i.jsx)("h2",{id:"getstarted8",children:"Project Structure"}),(0,i.jsx)("h4",{children:"Folders - "}),(0,i.jsxs)("ul",{className:"mt-0",children:[(0,i.jsx)("li",{children:"app - store management, auth and libraries settings are present"}),(0,i.jsx)("li",{children:"components - this include all common components to be used in project"}),(0,i.jsx)("li",{children:"containers - components related to layout like sidebar, page layout, header etc.."}),(0,i.jsx)("li",{children:"features - main folder where all page logic resides, there will be folder for each page and additional folder inside that to group different functionalities like components, modals etc... Redux slice file will also present inside page specific folder."}),(0,i.jsx)("li",{children:"pages - this contain one single file related to one page, if you want to divide page into different components file, use features folder and create seperate folder related to that page"}),(0,i.jsx)("li",{children:"routes - all settings related to routes"})]}),(0,i.jsx)("h4",{children:"Files - "}),(0,i.jsxs)("ul",{className:"mt-0",children:[(0,i.jsx)("li",{children:"App.js - Main file containing different routes and components "}),(0,i.jsx)("li",{children:"index.css - Additional global css if required"}),(0,i.jsx)("li",{children:"index.js - Entry point of project"}),(0,i.jsx)("li",{children:"package.json - All dependencies and npm scripts"}),(0,i.jsx)("li",{children:"tailwind.config.js - Tailwind CSS configuration file, add theme customization and new themes in this file"})]}),(0,i.jsx)("div",{className:"h-24"})]})})};const h=function(e){let{activeIndex:s}=e;const a=[{name:"Introduction",isActive:1===s},{name:"How to Use",isActive:!1},{name:"Tailwind CSS",isActive:!1},{name:"Daisy UI",isActive:!1},{name:"Chart JS",isActive:!1},{name:"Redux Toolkit",isActive:!1},{name:"Hero Icons",isActive:!1},{name:"Project Structure",isActive:!1}],[t,l]=(0,n.useState)(a);return(0,i.jsxs)("ul",{className:"menu w-56 mt-10 text-sm",children:[(0,i.jsx)("li",{className:"menu-title",children:(0,i.jsx)("span",{className:"",children:"Getting Started"})}),t.map(((e,s)=>(0,i.jsx)("li",{onClick:()=>{return e=s,l(t.map(((s,a)=>a===e?{...s,isActive:!0}:{...s,isActive:!1}))),void document.getElementById("getstarted"+(e+1)).scrollIntoView({behavior:"smooth"});var e},className:e.isActive?"bordered":"",children:(0,i.jsx)("a",{children:e.name})},s)))]})};const m=function(e){let{className:s,children:a}=e;return(0,i.jsx)("p",{className:"text-2xl font-bold  ".concat(s),children:a})};const p=function(e){let{activeIndex:s}=e;const a=[{name:"Typography",isActive:1===s},{name:"Form Input",isActive:!1},{name:"Cards",isActive:!1}],[t,l]=(0,n.useState)(a);return(0,i.jsxs)("ul",{className:"menu w-56 mt-10 text-sm",children:[(0,i.jsx)("li",{className:"menu-title",children:(0,i.jsx)("span",{className:"",children:"Components"})}),t.map(((e,s)=>(0,i.jsx)("li",{onClick:()=>{return e=s,l(t.map(((s,a)=>a===e?{...s,isActive:!0}:{...s,isActive:!1}))),void document.getElementById("component"+(e+1)).scrollIntoView({behavior:"smooth"});var e},className:e.isActive?"bordered":"",children:(0,i.jsx)("a",{children:e.name})},s)))]})};const x=function(){const e=(0,o.wA)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("article",{className:"prose",children:[(0,i.jsx)("h1",{className:"",children:"Features"}),(0,i.jsx)("h2",{id:"feature1",children:"Authentication"}),(0,i.jsxs)("p",{children:["JWT based Authentication logic is present in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/app/auth.js"}),". In the file you can see we are adding bearer token in header for every request. Every routes under ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/"})," folder will need authentication. For public routes like login, register you will have to add routes in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"App.js"})," file and also include the path in PUBLIC_ROUTES variable under ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/app/auth.js"})," file so that auto redirect to login page is not triggered."]}),(0,i.jsx)("h2",{id:"feature2",children:"Left Sidebar"}),(0,i.jsxs)("p",{children:["This is main internal navigation (for pages that will come after login only), all sidebar menu items with their icons are present in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/sidebar.js"}),"  file, while  path and page components mapping are respectively present in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/index.js"})," file."]}),(0,i.jsx)("h2",{id:"feature3",children:"Add New Page"}),(0,i.jsxs)("p",{children:["All ",(0,i.jsx)("span",{className:"font-semibold",children:"public routes"})," are present in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"App.js"})," file. Steps to add new public page -"]}),(0,i.jsxs)("ul",{className:"mt-0",children:[(0,i.jsxs)("li",{children:["Create Page inside ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/pages"})," folder"]}),(0,i.jsxs)("li",{children:["Go to ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"App.js"})," and import the component and add its path"]}),(0,i.jsxs)("li",{children:["Add your new route path in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/app/auth.js"})," file under PUBLIC_ROUTES variable, this will allow the page to open without login."]})]}),(0,i.jsxs)("p",{className:"mt-4",children:["All ",(0,i.jsx)("span",{className:"font-semibold",children:"protected routes"})," are present in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/sidebar.js"})," file"]}),(0,i.jsxs)("ul",{className:"mt-0",children:[(0,i.jsxs)("li",{children:["Create your page inside ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/pages/protected"})," folder"]}),(0,i.jsxs)("li",{children:["Add your new routes in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/sidebar.js"}),", this will show your new page in sidebar"]}),(0,i.jsxs)("li",{children:["Import your new routes component and map its path in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/routes/index.js"})]})]}),(0,i.jsx)("h2",{id:"feature4",children:"Right Sidebar"}),(0,i.jsxs)("div",{children:["This is used for showing long list contents like notifications, settings etc.. We are using redux to show and hide and it is single component and can be called from any file with dispatch method. To add new content follow following steps:",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Create new component file containing main body of your content"}),(0,i.jsxs)("li",{children:["Create new variable in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/utils/globalConstantUtils.js"})," file under RIGHT_DRAWER_TYPES variable"]}),(0,i.jsxs)("li",{children:["Now include the file mapped with the new variable in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/containers/RightSidebar.js"})," file using switch. ",(0,i.jsx)("br",{}),"For ex- If you new component name is ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"TestRightSideBar.js"})," and  variable name is TEST_RIGHT_SIDEBAR, then add following code inside switch code block",(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"mockup-code mt-4",children:(0,i.jsx)("pre",{className:"my-0 py-0",children:(0,i.jsx)("code",{children:"[RIGHT_DRAWER_TYPES.TEST_RIGHT_SIDEBAR] : \n<TestRightSideBar {...extraObject} closeRightDrawer={close}/>"})})}),(0,i.jsx)("span",{className:"text-sm mt-1 italic",children:"Here extraObject have variables that is passed from parent component while calling openRightDrawer method"})]}),(0,i.jsxs)("li",{children:["Now the last step, call dispatch method as follows",(0,i.jsx)("div",{className:"mockup-code mt-1",children:(0,i.jsx)("pre",{className:"my-0 py-0",children:(0,i.jsx)("code",{children:'import { useDispatch } from "react-redux"\n  const dispatch = useDispatch()\n  dispatch(openRightDrawer({header : "Test Right Drawer", \n  bodyType : RIGHT_DRAWER_TYPES.TEST_RIGHT_SIDEBAR}))'})})})]})]})]}),(0,i.jsx)("h2",{id:"feature5",children:"Themes"}),(0,i.jsxs)("p",{children:["By default we have added light and dark theme and Daisy UI comes with a number of themes, which you can use with no extra effort, you just have to include it in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"tailwind.config.js"})," file,  you can add themes like cupcake, corporate, reto etc... Also we can configure themes colors in config file, for more documentation on themes checkout ",(0,i.jsx)("a",{href:"https://daisyui.com/docs/themes/",target:"_blank",children:"Daisy UI documentation."})]}),(0,i.jsx)("h2",{id:"feature6",children:"Modal"}),(0,i.jsxs)("div",{children:["With global modal functionality you dont have to create seperate modal for each page. We are using redux to show and hide and it is a single component and can be called from any file with dispatch method. Code for showing modal is present in modalSlice and layout container component. To show modal just call openModal() function of modalSlice using dispatch.",(0,i.jsx)("br",{}),"To add new modal in any page follow following steps:",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Create new component file containing main body of your modal content"}),(0,i.jsxs)("li",{children:["Create new variable in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/utils/globalConstantUtils.js"})," file under MODAL_BODY_TYPES variable"]}),(0,i.jsxs)("li",{children:["Now include the file mapped with the new variable in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/containers/ModalLayout.js"})," file using switch. ",(0,i.jsx)("br",{}),"For ex- If you new component name is ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"TestModal.js"})," and  variable name is TEST_MODAL, then add following code inside switch code block",(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"mockup-code mt-4",children:(0,i.jsx)("pre",{className:"my-0 py-0",children:(0,i.jsx)("code",{children:"[RIGHT_DRAWER_TYPES.TEST_MODAL] : \n<TestModal closeModal={close} extraObject={extraObject}/>"})})}),(0,i.jsx)("span",{className:"text-sm mt-1 italic",children:"Here extraObject have variables that is passed from parent component while calling openModal method"})]}),(0,i.jsxs)("li",{children:["Now the last step, call dispatch method as follows",(0,i.jsx)("div",{className:"mockup-code mt-1",children:(0,i.jsx)("pre",{className:"my-0 py-0",children:(0,i.jsx)("code",{children:'import { useDispatch } from "react-redux"\n  const dispatch = useDispatch()\n   dispatch(openModal({title : "Test Modal Title", \n   bodyType : MODAL_BODY_TYPES.TEST_MODAL}))'})})})]})]})]}),(0,i.jsx)("h2",{id:"feature7",children:"Notification"}),(0,i.jsx)("p",{children:"Many times we have to show notification to user be it on successfull form submission or any api success. And requirement can come to show notification from any page, so global notification handling is needed."}),(0,i.jsxs)("p",{className:"mt-4",children:["Code for showing notification is present in headerSlice and layout container component. To show notification just call ",(0,i.jsx)("span",{className:"badge badge-ghost",children:"showNotification()"})," function of headerSlice using dispatch. To show success message notification pass status as 1 and for showing error message pass status as 0."]}),(0,i.jsx)("div",{className:"mockup-code mb-4",children:(0,i.jsx)("pre",{className:"my-0 py-0",children:(0,i.jsx)("code",{children:'import { useDispatch } from "react-redux"\n  const dispatch = useDispatch()\n  dispatch(showNotification({message : "Message here", status : 1}))'})})}),(0,i.jsx)("p",{children:"Click on this button to check"}),(0,i.jsx)("button",{className:"btn btn-success",onClick:()=>e((0,c.Ds)({message:"Your message has been sent!",status:1})),children:"Success"}),(0,i.jsx)("button",{className:"btn btn-error ml-4",onClick:()=>e((0,c.Ds)({message:"Something went wrong!",status:0})),children:"Error"}),(0,i.jsx)("div",{className:"h-24"})]})})};var u=a(2201),j=a(3982);const b=function(e){let{className:s,children:a}=e;return(0,i.jsx)("div",{className:"text-slate-400 ".concat(s),children:a})};var g=a(3073);const f=function(){return(0,o.wA)(),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("article",{className:"prose",children:[(0,i.jsx)("h1",{className:"",children:"Components"}),"We have added some global components that are used commonly inside the project.",(0,i.jsx)("h2",{id:"component1",children:"Typography"}),(0,i.jsxs)("div",{children:["These components are present under ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/components/Typography"})," folder. It accepts styleClass as props which can be used to pass additional className for style. It has following components which you can import and use it -",(0,i.jsx)("div",{className:"mockup-code mt-4",children:(0,i.jsx)("pre",{className:"my-0 py-0",children:(0,i.jsx)("code",{children:'import  Title from "../components/Typography/Title"\n  <Title>Your Title here</Title>'})})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"font-bold",children:"Title"})," - Use this component to show title",(0,i.jsx)(m,{children:"Title Example"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"font-bold",children:"Subtitle"})," - Component that shows text smaller than title",(0,i.jsx)(r.A,{styleClass:"mt-4 mb-6",children:"Subtitle Example"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"font-bold",children:"ErrorText"})," - Used for showing error messages",(0,i.jsx)(j.A,{styleClass:"mt-2",children:"Error Text Example"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"font-bold",children:"HelperText"})," - Used for showing secondary message",(0,i.jsx)(b,{styleClass:"",children:"Helper Text Example"})]})]})]}),(0,i.jsx)("h2",{id:"component2",children:"Form Input"}),(0,i.jsxs)("p",{children:["Many times we have to use form input like text, select one or toogle and in every file we have to handle its state management, here we have added global form component that can be used in any file and state variables can be managed by passing props to it. It is present in ",(0,i.jsx)("span",{className:"badge mt-0 mb-0 badge-ghost",children:"/components/Input"})," folder."]}),"Ex-",(0,i.jsx)("div",{className:"mockup-code mt-4",children:(0,i.jsx)("pre",{className:"my-0 py-0",children:(0,i.jsx)("code",{children:'const INITIAL_LEAD_OBJ = {\n   first_name : "", \n   last_name : "", \n   email : "" \n  } \n   const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ) \n   const updateFormValue = ({updateType, value}) => {\n    setErrorMessage("") \n    setLeadObj({...leadObj, [updateType] : value})\n   }\n\n<InputText type="text" defaultValue={leadObj.first_name}  \n  updateType="first_name" containerStyle="mt-4"  \n  labelTitle="First Name" updateFormValue={updateFormValue}/>'})})}),(0,i.jsx)(u.A,{type:"text",defaultValue:"input value",updateType:"first_name",containerStyle:"mt-3",labelTitle:"Label Title",updateFormValue:()=>{}}),(0,i.jsx)("p",{children:" This example is from add new lead modal, here we are importing component for creating text input and passing some props to handle its content and state variable. Description of props are as follows - "}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"font-bold",children:"type"})," - Input type value like number, date, time etc.. "]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"font-bold",children:"updateType"})," - This is used to update state variable in parent component"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"font-bold",children:"containerStyle"})," - Style class for container of input, which include label as well"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"font-bold",children:"labelTitle"})," - Title of the label"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"font-bold",children:"updateFormValue"})," - Function of parent component to update state variable"]})]}),(0,i.jsx)("h2",{id:"component3",children:"Cards"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("a",{href:"https://daisyui.com/components/card/",target:"_blank",children:"Daisy UI"})," already have many cards layout, on top of that we have added one card component that accept title props and shows children inside its body. Also there is a divider between title and body of card. On more provision has been added to add buttons on top left side of card using TopSideButtons props (check leads page)."]}),"Ex -",(0,i.jsx)("div",{className:"mockup-code mt-4",children:(0,i.jsx)("pre",{className:"my-0 py-0",children:(0,i.jsx)("code",{children:'<TitleCard title={"Card Title"}> <h1>Card Body</h1></TitleCard>'})})}),(0,i.jsx)("div",{className:"p-8 bg-base-300 rounded-lg mt-4",children:(0,i.jsxs)(g.A,{title:"Card Title",children:[" ",(0,i.jsx)("h1",{children:"Card Body"})]})}),(0,i.jsx)("div",{className:"h-24"})]})})};const y=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"min-h-screen bg-base-200 flex items-center",children:(0,i.jsx)("div",{className:"card mx-auto w-full max-w-4xl  shadow-xl",children:(0,i.jsxs)("div",{className:"py-12 p-10 h-screen flex overflow-hidden  bg-base-100 rounded-xl",children:[(0,i.jsxs)("div",{className:"flex-none p-4 overflow-y-scroll gap-6 ",children:[(0,i.jsx)("h1",{className:"text-3xl font-bold mb-2",children:"Dashwind"}),(0,i.jsx)(t.N_,{to:"/login",children:(0,i.jsx)("button",{type:"submit",className:"btn normal-case btn-xs btn-primary",children:"Live Preview"})}),(0,i.jsx)(h,{}),(0,i.jsx)(l,{}),(0,i.jsx)(p,{})]}),(0,i.jsxs)("div",{className:"grow pt-16  overflow-y-scroll",children:[(0,i.jsx)(d,{}),(0,i.jsx)(x,{}),(0,i.jsx)(f,{})]})]})})})})}}}]);
//# sourceMappingURL=821.ccab847c.chunk.js.map