"use strict";(self.webpackChunkhotel_accessories=self.webpackChunkhotel_accessories||[]).push([[871],{225:(e,i,n)=>{n.d(i,{A:()=>t});n(5043);const t=n.p+"static/media/back-icon.5a5803f529c0d36de67d3c0afb455de7.svg"},1684:(e,i,n)=>{n.d(i,{A:()=>k});var t=n(5043),a=n(7117),d=n(4688),r=n(9386),o=n(638),s=n(3375);const p=(0,n(2532).A)("MuiBox",["root"]),c=(0,o.A)(),l=(0,d.A)({themeId:s.A,defaultTheme:c,defaultClassName:p.root,generateClassName:r.A.generate});var m=n(3373),x=n(5464);const h=x.Ay.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: block;
    padding-top: 200px;
    padding-bottom: 200px;

    /* background-image: url("/img/prefooterImg.jpg");
    background-position: 50% 50%;
    background-size: cover; */
  }
`,g=x.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    /* flex-direction: column;
    flex-wrap: nowrap; */
    display: grid;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 16px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    
  }
`,f=x.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-left: 11px;
  }
`,w=x.Ay.h2`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 64px;
    line-height: 70.4px;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
    margin-bottom: 40px;
  }
`,u=x.Ay.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    max-width: 461px;
    margin-top: 108px;
    margin-left: auto;
    font-family: Helvetica;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: rgba(70, 70, 70, 1);
  }
`,y=x.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-right: 70px;
    padding-bottom: 40px;
    padding-left: 70px;
    background-color: rgba(255, 255, 255, 1);
    /* width: 40%;
    margin-left: auto;
    margin-right: -20px; */
  }
`,b=(0,x.Ay)(l)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`,v=(0,x.Ay)(m.A)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    .MuiOutlinedInput-notchedOutline {
      border: none;
      border-bottom: 1px solid rgba(70, 70, 70, 1);
      border-radius: 0;
    }

    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-bottom: 1px solid rgba(70, 70, 70, 1);
    }
    & .MuiInputLabel-root.Mui-focused {
      color: rgba(70, 70, 70, 1);
    }
  }
`,j=x.Ay.button`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    background-color: rgba(35, 81, 96, 1);
    color: rgba(255, 255, 255, 1);
    margin-top: 49px;
  }
`;var A=n(4681),C=n(3003),z=n(579);const k=()=>{const e=(0,C.wA)(),[i,n]=(0,t.useState)({companyName:"",email:"",phone:"",message:""}),[d,r]=(0,t.useState)({companyName:null,email:null,phone:null,message:null}),[o,s]=(0,t.useState)(!1),p=e=>{const{name:i,value:t}=e.target;n((e=>({...e,[i]:t})))},c=()=>{document.getElementById("form-prefooter").reset(),n({companyName:"",email:"",phone:"",message:""}),r({companyName:null,email:null,phone:null,message:null})};return(0,z.jsx)(h,{children:(0,z.jsx)(a.mc,{children:(0,z.jsxs)(g,{className:"prefooter-wrapper",children:[(0,z.jsxs)(f,{className:"prefooter-text-wrapper",children:[(0,z.jsx)(w,{className:"prefooter-main-text",children:"Contact Upscale Linen"}),(0,z.jsx)(u,{className:"prefooter-text",children:"At Upscale Linen, we seamlessly blend timeless elegance with the comfort of everyday living, offering a range that caters to various needs. Our commitment to providing quality lifestyle essentials and exceptional customer service ensures a touch of sophistication in every space."})]}),(0,z.jsx)(y,{className:"prefooter-form-wrapper",children:(0,z.jsxs)(b,{component:"form",id:"form-prefooter",noValidate:!0,autoComplete:"off",onSubmit:async n=>{n.preventDefault();try{await e(A.A.sendContactForm(i))}catch(t){console.log(t.message)}s(!1),c()},children:[(0,z.jsx)(v,{sx:{width:"100%"},autoComplete:"Name or name company",id:"Name or name company",label:"Name or name company",name:"companyName",variant:"outlined",value:i.companyName,onChange:p}),(0,z.jsx)(v,{sx:{width:"100%"},autoComplete:"Email",id:"email",label:"Email",name:"email",type:"email",variant:"outlined",value:i.email,onChange:p}),(0,z.jsx)(v,{sx:{width:"100%"},autoComplete:"Phone",id:"phone",label:"Phone",name:"phone",type:"phone",variant:"outlined",value:i.phone,onChange:p}),(0,z.jsx)(v,{sx:{width:"100%"},autoComplete:"Message",id:"message",label:"Message",name:"message",variant:"outlined",value:i.message,onChange:p}),(0,z.jsx)(j,{type:"submit",children:"Send Massage"})]})})]})})})}},1719:(e,i,n)=>{n.d(i,{JR:()=>d,VW:()=>t,Vs:()=>r,hT:()=>o,mP:()=>a});const t=e=>e.products.productsList,a=e=>e.products.oneProduct,d=e=>e.products.totalPages,r=e=>e.products.currentPage,o=e=>e.products.isLoading},1855:(e,i,n)=>{n.d(i,{A:()=>t});n(5043);const t=n.p+"static/media/code-icon.77556abdf90c3872b5598256cad74598.svg"},3851:(e,i,n)=>{n.d(i,{wz:()=>a,zQ:()=>t});const t=e=>e.auth.isLogin,a=e=>e.auth.user},4328:(e,i,n)=>{n.d(i,{h:()=>o});var t,a=n(5043);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)({}).hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(null,arguments)}function r(e,i){let{title:n,titleId:r,...o}=e;return a.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":r},o),n?a.createElement("title",{id:r},n):null,t||(t=a.createElement("path",{d:"M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z",stroke:"#235160",strokeWidth:2})))}const o=a.forwardRef(r);n.p},4905:(e,i,n)=>{n.d(i,{Cp:()=>t,IA:()=>a});const t=e=>e.favorites.favoritesList,a=e=>e.favorites.isFavorite},5577:(e,i,n)=>{n.d(i,{A:()=>m});n(5043);var t=n(5464);const a=t.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 27px;
    padding-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,d=t.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 15px;
  }
`,r=t.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 10px;
    opacity: ${e=>"basket"===e.page?1:.5};
    transform: opacity 0.3s ease;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    }
  }
`,o=t.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 10px;
    opacity: ${e=>"basket"===e.page?.5:1};
    transform: opacity 0.3s ease;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    }
  }
`;var s=n(1675),p=n(225);const c=n.p+"static/media/arrow-right.6d4b300d98000d724feb8b52bcab5b03.svg";var l=n(579);const m=e=>{let{item:i,page:n}=e;return(0,l.jsxs)(a,{children:[(0,l.jsxs)(d,{children:[(0,l.jsx)(s.N_,{to:"/",children:(0,l.jsxs)(r,{children:[(0,l.jsx)("p",{children:"Home"}),(0,l.jsx)("img",{src:c,alt:"Arrow Right"})]})}),"favorites"===n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.N_,{to:"/products",children:(0,l.jsxs)(r,{children:[(0,l.jsx)("p",{children:"Catalog"}),(0,l.jsx)("img",{src:c,alt:"Arrow Right"})]})}),(0,l.jsx)(r,{children:(0,l.jsx)("p",{children:"Favorites"})})]}),"registration"===n&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.N_,{to:"/registration",children:(0,l.jsx)(r,{children:(0,l.jsx)("p",{children:"Personal account"})})})}),"product"===n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.N_,{to:"/products",children:(0,l.jsxs)(r,{children:[(0,l.jsx)("p",{children:"Catalog"}),(0,l.jsx)("img",{src:c,alt:"Arrow Right"})]})}),(0,l.jsx)(s.N_,{to:`/products/${i._id}`,children:(0,l.jsx)(o,{page:n,children:(0,l.jsx)("p",{children:i.name})})})]}),"basket"===n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.N_,{to:"/products",children:(0,l.jsxs)(r,{children:[(0,l.jsx)("p",{children:"Catalog"}),(0,l.jsx)("img",{src:c,alt:"Arrow Right"})]})}),(0,l.jsx)(s.N_,{to:`/products/${i._id}`,children:(0,l.jsx)(o,{page:n,children:(0,l.jsx)("p",{children:i.name})})})]}),"basket"===n&&!i._id&&(0,l.jsx)(r,{page:n,style:{marginLeft:"-15px"},children:(0,l.jsx)("p",{children:"Basket"})}),"basket"===n&&i._id&&(0,l.jsxs)(r,{page:n,children:[(0,l.jsx)("img",{src:c,alt:"Arrow Right"}),(0,l.jsx)("p",{children:"Basket"})]})]}),(0,l.jsx)(s.N_,{to:-1,children:(0,l.jsx)("img",{src:p.A,alt:"button back"})})]})}},7117:(e,i,n)=>{n.d(i,{D9:()=>l,ZT:()=>p,du:()=>x,lw:()=>h,mc:()=>s,nW:()=>c,oD:()=>o,w0:()=>m,xw:()=>f,zr:()=>g});var t=n(1906),a=n(8988),d=n(1675),r=n(5464);const o=r.Ay.header`
  padding-top: 29px;
  padding-bottom: 29px;
  background-color: rgba(255, 255, 255, 1);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-top: 29px;
    padding-bottom: 29px;
    background-color: rgba(255, 255, 255, 1);
  }
`,s=r.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 1440px;
    padding-right: 20px;
    padding-left: 20px;
    margin: auto;
  }
`,p=r.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    /* display: flex; */
    display: grid;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    align-content: start;
    grid-auto-flow: row dense;
    grid-auto-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    font-family: Rebelton;
  }
`,c=(r.Ay.ul`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    /* display: flex; */
    justify-content: flex-start;
    align-items: center;
    grid-column-gap: 55px;
    grid-row-gap: 55px;
  }
`,(0,r.Ay)(t.A)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    &.MuiButton-root {
      opacity: 0.5;
      font-family: Rebelton;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    
    }
  }
`),l=r.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
  }
`,m=(0,r.Ay)(a.A)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    &.MuiMenuItem-root {
      margin-right: 5px;
      opacity: 0.5;
      color: rgba(35, 81, 96, 1);
      font-family: Rebelton;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      
    }
    &.MuiMenuItem-root:hover{
      background: none;
      opacity: 100%;
      p{
        font-size: 16px;
        opacity: 100%;
      }
    }
  }
`,x=r.Ay.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    opacity: 0.5;
    font-family: Rebelton;
    font-size: 16px;
    line-height: 22.4px;
    color: rgba(35, 81, 96, 1);
  }
`,h=r.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    grid-column-gap: 150px;
    grid-row-gap: 150px;
    margin-left: auto;
  }
`,g=r.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`,f=(0,r.Ay)(d.N_)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    :hover {
      fill: rgb(35 81 96 / 80%);
    }
  }
`},7871:(e,i,n)=>{n.r(i),n.d(i,{default:()=>B});var t=n(5043),a=n(7117),d=n(1675),r=n(2279),o=n(3003),s=n(1719),p=n(1405),c=n(5464);const l=c.Ay.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`,m=c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`,x=(c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 27px;
    padding-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 15px;
  }
`,c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 10px;
    opacity: 50%;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    }
  }
`,c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 10px;
    opacity: 100%;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      color: rgba(35, 81, 96, 1);
    }
  }
`,c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`),h=c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-right: 36px;
  }
`,g=c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 60px;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-transform: capitalize;
      color: rgba(35, 81, 96, 1);
    }
  }
`,f=c.Ay.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Rebelton;
    font-weight: 400;
    font-size: 64px;
    line-height: 70.4px;
    color: rgba(35, 81, 96, 1);
  }
`,w=c.Ay.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 81, 96, 1);
    margin-top: 65px;
    border-bottom: 1px solid rgba(35, 81, 96, 0.2);
    span {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(35, 81, 96, 0.7);
    }
  }
`,u=c.Ay.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 81, 96, 1);
    margin-top: 84px;
    border-bottom: 1px solid rgba(35, 81, 96, 0.2);
    span {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(35, 81, 96, 0.7);
    }
  }
`,y=c.Ay.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 81, 96, 1);
    margin-top: 70px;
    border-bottom: 1px solid rgba(35, 81, 96, 0.2);
  }
`,b=c.Ay.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {

    font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: rgba(35, 81, 96, 0.8);
    margin-top: 122px;
  }
`,v=c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    background: none;
    border: none;
    width: 100%;
    padding: 0;
    align-items: flex-end;
    gap: 10px;
    margin-top: 14px;
  }
`,j=c.Ay.button`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    background: none;
    border: none;
    width: 100%;
    padding: 0;
    align-items: center;
    gap: 10px;
    margin-top: 14px;
  }
`,A=c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    background-color: rgba(35, 81, 96, 1);
    color: rgba(255, 255, 255, 1);
    width: 100%;
    padding: 13px 0;
    justify-content: center;
    p {
      font-family: Helvetica;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }
  }
`,C=c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    border: 1px solid rgba(35, 81, 96, 1);
    padding: 17.5px;
    display: flex;
    svg {
      fill: ${e=>e.isactive?" rgba(35, 81, 96, 1)":"rgba(255, 255, 255, 1) "};
    }
  }
`,z=c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    color: rgba(35, 81, 96, 1);
    margin-top: 122px;
  }
`,k=c.Ay.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: rgba(35, 81, 96, 1);
  }
`,N=c.Ay.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    height: 2px;
    background-color: rgba(35, 81, 96, 1);
    margin-top: 10px;
  }
`,I=c.Ay.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-family: Helvetica;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(35, 81, 96, 1);
    margin-top: 38px;
  }
`;var H=n(1855),M=n(497),O=n(5577),_=n(4328),F=n(3851),L=n(4905),R=n(5619),P=n(579);const E=()=>{var e,i;const n=(0,d.Zp)(),c=(0,o.d4)(L.IA),[E,S]=(0,t.useState)(c),B=(0,o.d4)(F.wz),T=(0,o.d4)(F.zQ),{id:$}=(0,d.g)(),D=(0,o.wA)(),W=(0,o.d4)(s.hT),V=(0,o.d4)(s.mP);(0,t.useEffect)((()=>{D(r.A.fetchOneProduct({id:$})),D(p.A.fetchOneFavorites($)),S(c),window.scrollTo({top:0,behavior:"smooth"})}),[]),(0,t.useEffect)((()=>{D(r.A.fetchOneProduct({id:$})),D(p.A.fetchOneFavorites($)),S(c),window.scrollTo({top:0,behavior:"smooth"})}),[D,$,c]);return(0,P.jsx)(P.Fragment,{children:W?(0,P.jsx)(M.A,{}):(0,P.jsx)(l,{children:(0,P.jsxs)(a.mc,{children:[(0,P.jsx)(O.A,{item:V,page:"product"}),W?(0,P.jsx)(M.A,{}):(0,P.jsx)(m,{children:(0,P.jsxs)(x,{children:[(0,P.jsx)(h,{children:(0,P.jsx)("img",{src:V.image,alt:"product",style:{maxWidth:"692px",maxHeight:"694px"}})}),(0,P.jsxs)("div",{children:[(0,P.jsxs)("div",{children:[(0,P.jsxs)(g,{children:[(0,P.jsx)("img",{src:H.A,alt:"Code Icon",width:12,height:13}),(0,P.jsx)("p",{children:V.code})]}),(0,P.jsx)(f,{children:V.name}),(0,P.jsxs)("div",{style:{display:"flex",alignItems:"flex-end",borderBottom:"1px solid rgba(35, 81, 96, 0.2)",justifyContent:"space-between"},children:[(0,P.jsxs)(w,{children:["Color: ",(0,P.jsx)("span",{children:null===(e=V.color)||void 0===e?void 0:e.join(", ")})]}),(0,P.jsx)("div",{style:{display:"flex",gap:"5px"},children:null===(i=V.color)||void 0===i?void 0:i.map((e=>(0,P.jsx)("div",{style:{width:"15px",height:"15px",backgroundColor:`${e}`,marginBottom:"5px",border:"1px solid"}})))})]}),(0,P.jsxs)(u,{children:["Size: ",(0,P.jsx)("span",{children:V.size})]}),(0,P.jsxs)(y,{children:["Set: ",(0,P.jsx)("span",{children:V.size})]}),(0,P.jsxs)(b,{children:["$",V.price]}),(0,P.jsxs)(v,{children:[(0,P.jsx)(j,{onClick:async()=>{T?(console.log($),await D(R.A.addCartProduct({productId:$,quantity:1})),n("/basket",{state:{id:$}})):(console.log(!T,"isLoggedIn"),n("/account"))},children:(0,P.jsx)(A,{style:{display:"flex"},children:(0,P.jsx)("p",{children:"Add to cart"})})}),(0,P.jsx)(C,{isactive:!!E||void 0,onClick:async()=>{if(T||(console.log(!T,"isLoggedIn"),n("/account")),T){if(c)await D(p.A.deleteFavorite($)),await D(p.A.fetchOneFavorites($));else{const e={userId:B.id,productId:$};await D(p.A.addFavorite(e)),await D(p.A.fetchOneFavorites($))}n("/favorites")}},children:(0,P.jsx)(_.h,{})})]})]}),(0,P.jsxs)(z,{children:[(0,P.jsx)(k,{children:"DESCRIPTION"}),(0,P.jsx)(N,{}),(0,P.jsx)(I,{children:V.description})]})]})]})})]})})})};var S=n(1684);const B=()=>(0,P.jsxs)("div",{children:[(0,P.jsx)(E,{}),(0,P.jsx)(S.A,{})]})}}]);
//# sourceMappingURL=871.20b7d71c.chunk.js.map