"use strict";(self.webpackChunkga_4_dataform=self.webpackChunkga_4_dataform||[]).push([[678],{4242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(4848),s=n(8453);const a={title:"Quick Installation Guide",description:"Install GA4Dataform in a few clicks",sidebar_position:1,slug:"/quick-installation-guide"},o=void 0,r={id:"ga4dataform-guide/quick-installation-guide",title:"Quick Installation Guide",description:"Install GA4Dataform in a few clicks",source:"@site/docs/ga4dataform-guide/quick-installation-guide.md",sourceDirName:"ga4dataform-guide",slug:"/quick-installation-guide",permalink:"/ga4dataform/docs/quick-installation-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ga4dataform-guide/quick-installation-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Installation Guide",description:"Install GA4Dataform in a few clicks",sidebar_position:1,slug:"/quick-installation-guide"},sidebar:"tutorialSidebar",previous:{title:"Support & Contact",permalink:"/ga4dataform/docs/support-contact"},next:{title:"GA4Dataform is installed... now what?",permalink:"/ga4dataform/docs/post-installation"}},l={},c=[{value:"Walkthrough video",id:"walkthrough-video",level:2},{value:"Text Guide",id:"text-guide",level:2},{value:"Activate Your License Key",id:"activate-your-license-key",level:3},{value:"Install GA4Dataform",id:"install-ga4dataform",level:3},{value:"Configure and Run GA4Dataform",id:"configure-and-run-ga4dataform",level:3},{value:"You&#39;re Done!",id:"youre-done",level:3},{value:"Check Configuration and Output",id:"check-configuration-and-output",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"walkthrough-video",children:"Walkthrough video"}),"\n",(0,i.jsx)("iframe",{width:"640",height:"360",src:"https://www.loom.com/embed/684fa45119014ec8898e98b604328d48?sid=e2919baf-9ac7-4c21-97d6-7327e185ebdf",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"text-guide",children:"Text Guide"}),"\n",(0,i.jsx)(t.h3,{id:"activate-your-license-key",children:"Activate Your License Key"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Get your License Key"}),": After requesting access to ",(0,i.jsx)(t.a,{href:"https://ga4dataform.com/",children:"GA4Dataform"}),', you will receive a confirmation email from Lemon Squeezy with your license key and a link to the installer. Save the license key, and click "Proceed to GA4Dataform installation".']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"screenshot",src:n(3635).A+"",width:"2152",height:"1122"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Enter License Key"}),': In the GA4Dataform installer, enter your license key in the provided field and click "Login with Google" to continue.']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"screenshot",src:n(3786).A+"",width:"561",height:"525"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Google Cloud Platform Configuration",type:"warning",children:(0,i.jsx)(t.p,{children:"Ensure that your Google Cloud Project meets the setup requirements (billing enabled, Service Usage API enabled, GA4 BigQuery export active, and proper permissions)."})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"install-ga4dataform",children:"Install GA4Dataform"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Select Project and Data Set"}),': The installer will automatically list all Google Cloud Platform projects you have access to and, within each project, all available GA4 BigQuery export tables. Choose your Google Cloud project and GA4 BigQuery export table from the dropdown menus, then click "Install GA4Dataform".']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"screenshot",src:n(3553).A+"",width:"556",height:"615"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Multiple GA4 BigQuery Exports",type:"tip",children:(0,i.jsx)(t.p,{children:"If you have multiple BigQuery export projects, ensure you select the correct one. If you want to run GA4Dataform for each BigQuery Export you will have to run a different installation for each one of them."})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Installation Progress"}),': After clicking "Install GA4Dataform", the installer will display each setup step, such as checking APIs, creating the Dataform repository, and configuring permissions. Wait for each step to complete.']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"screenshot",src:n(9432).A+"",width:"803",height:"1033"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"configure-and-run-ga4dataform",children:"Configure and Run GA4Dataform"}),"\n",(0,i.jsx)(t.p,{children:"Once the installation is complete, you'll see a success message and two optional next steps, shown as toggle buttons:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The first option allows GA4Dataform to process your entire GA4 historical data set. It provides an estimate of the associated cost."}),"\n",(0,i.jsx)(t.li,{children:"The second option enables GA4Dataform to create a Dataform schedule to process your GA4 data daily."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'Toggle on both options, then click "un GA4Dataform".'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"screenshot",src:n(7294).A+"",width:"1044",height:"1224"})}),"\n",(0,i.jsx)(t.admonition,{title:"BigQuery Cost",type:"warning",children:(0,i.jsx)(t.p,{children:"Using GA4Dataform will incur BigQuery costs, so please monitor your billing. We're not responsible for any charges that may arise."})}),"\n",(0,i.jsx)(t.admonition,{title:"Customization",type:"tip",children:(0,i.jsx)(t.p,{children:"Once installed, GA4Dataform is fully customizable. You can adjust the schedule workflow and modify variables to process your GA4 data differently (e.g., filtering by domains, events, etc.)."})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"youre-done",children:"You're Done!"}),"\n",(0,i.jsx)(t.p,{children:"GA4Dataform is now fully installed and operational. Here\u2019s a summary of what we have accomplished:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Active your GA4Dataform licence key."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Selected a Google Cloud project and GA4 BigQuery export data set."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Ran the Dataform installation package."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Configured Dataform workflow scheduling and processed GA4 historical data."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"screenshot",src:n(5808).A+"",width:"783",height:"1171"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"check-configuration-and-output",children:"Check Configuration and Output"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Data Output"}),": Processed GA4 data will appear directly in BigQuery in tables such as ",(0,i.jsx)(t.code,{children:"ga4_events"})," and ",(0,i.jsx)(t.code,{children:"ga4_sessions"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"screenshot",src:n(5276).A+"",width:"2542",height:"1307"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Execution Logs and Scheduling"}),": After setup, you can check the ",(0,i.jsx)(t.strong,{children:"Releases & Scheduling"})," tab in your Dataform workspace to view or adjust the release and workflow schedules."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Scheduling",src:n(860).A+"",width:"2475",height:"575"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3635:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/email-8a0cf8627315d48a7594bdb5a126f2af.png"},7294:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/install_success-873b397d6e38dafdb6f30f8b810210ba.png"},3786:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/licence_key-b6486df86f39486e429c2fb3a4076a09.png"},5276:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/output-fd477197fe048a22765aba671794421d.png"},5808:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/run_success-4e9fbc7c5fcf7753ffc5859c1e4568ec.png"},860:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/schedule-68c4de9f8cafb1824bdec86655454aaf.png"},3553:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/select_project-64e6cab58dfba45cb914e02cb92e0ea8.png"},9432:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/setup_progress-4435b8ab410fb118eda3b2fd6b155b67.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);