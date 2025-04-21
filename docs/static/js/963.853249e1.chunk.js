"use strict";(self.webpackChunkhotel_accessories=self.webpackChunkhotel_accessories||[]).push([[963],{225:(e,i,a)=>{a.d(i,{A:()=>t});a(5043);const t=a.p+"static/media/back-icon.5a5803f529c0d36de67d3c0afb455de7.svg"},3851:(e,i,a)=>{a.d(i,{wz:()=>n,zQ:()=>t});const t=e=>e.auth.isLogin,n=e=>e.auth.user},5577:(e,i,a)=>{a.d(i,{A:()=>m});a(5043);var t=a(1675),n=a(5464);const d=n.Ay.div`
 padding-bottom: 27px;
    padding-top: 27px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
    
  }
  @media screen and (max-width: 768px) {
    
  }
  @media screen and (max-width: 480px) {
flex-direction: column;
align-items: flex-start;
  }
`,s=n.Ay.div`
 display: flex;
 gap: 15px;
 align-items: center;
    @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 768px) {

  }
  @media screen and (max-width: 480px) {
  }

`,p=n.Ay.div`
  display: flex;
    gap: 10px;
    align-items: baseline;
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
    @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 480px) {
  }
`,r=n.Ay.div`
  display: flex;
    gap: 10px;
    align-items: center;
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
    @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 480px) {
  }
`,x=(0,n.Ay)(t.N_)`
 
    @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 768px) {

  }
  @media screen and (max-width: 480px) {
    margin-left: auto;
  }

`;var o=a(225);const c=a.p+"static/media/arrow-right.6d4b300d98000d724feb8b52bcab5b03.svg";var l=a(579);const m=e=>{let{item:i,page:a}=e;return(0,l.jsxs)(d,{children:[(0,l.jsxs)(s,{children:[(0,l.jsx)(t.N_,{to:"/",children:(0,l.jsxs)(p,{children:[(0,l.jsx)("p",{children:"Home"}),(0,l.jsx)("img",{src:c,alt:"Arrow Right",width:5})]})}),"favorites"===a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.N_,{to:"/products",children:(0,l.jsxs)(p,{children:[(0,l.jsx)("p",{children:"Catalog"}),(0,l.jsx)("img",{src:c,alt:"Arrow Right",width:5})]})}),(0,l.jsx)(p,{children:(0,l.jsx)("p",{children:"Favorites"})})]}),"registration"===a&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(t.N_,{to:"/registration",children:(0,l.jsx)(p,{children:(0,l.jsx)("p",{children:"Personal account"})})})}),"product"===a&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.N_,{to:"/products",children:(0,l.jsxs)(p,{children:[(0,l.jsx)("p",{children:"Catalog"}),(0,l.jsx)("img",{src:c,alt:"Arrow Right",width:5})]})}),(0,l.jsx)(t.N_,{to:`/products/${i._id}`,children:(0,l.jsx)(r,{page:a,children:(0,l.jsx)("p",{children:i.name})})})]}),"basket"===a&&!i._id&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.N_,{to:"/products",children:(0,l.jsxs)(p,{children:[(0,l.jsx)("p",{children:"Catalog"}),(0,l.jsx)("img",{src:c,alt:"Arrow Right",width:5})]})}),(0,l.jsx)(p,{page:a,children:(0,l.jsx)("p",{children:"Basket"})})]}),"basket"===a&&i._id&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.N_,{to:"/products",children:(0,l.jsxs)(p,{children:[(0,l.jsx)("p",{children:"Catalog"}),(0,l.jsx)("img",{src:c,alt:"Arrow Right",width:5})]})}),(0,l.jsx)(t.N_,{to:`/products/${i._id}`,children:(0,l.jsxs)(r,{page:a,children:[(0,l.jsx)("p",{children:i.name}),(0,l.jsx)("img",{src:c,alt:"Arrow Right",width:5})]})}),(0,l.jsx)(p,{page:a,children:(0,l.jsx)("p",{children:"Basket"})})]})]}),(0,l.jsx)(x,{to:-1,children:(0,l.jsx)("img",{src:o.A,alt:"button back"})})]})}},7117:(e,i,a)=>{a.d(i,{D9:()=>c,ZT:()=>x,du:()=>m,lw:()=>h,mc:()=>r,nW:()=>o,oD:()=>p,w0:()=>l,xw:()=>f,zr:()=>g});var t=a(1906),n=a(8988),d=a(1675),s=a(5464);const p=s.Ay.header`
  padding-top: 29px;
  padding-bottom: 29px;
  background-color: rgba(255, 255, 255, 1);
  position: sticky;
  top: 0;
  z-index: 1500;
  min-width: 100vw;
  
`,r=s.Ay.div`
max-width: 1280px;

  padding: 0 20px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 960px;
  }
  @media screen and (max-width: 768px) {
    max-width: 720px;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`,x=s.Ay.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: Rebelton;
  justify-items: center;
  @media (max-width: 1280px) {

  }

  @media (max-width: 1024px) {
    /* gap: 15px; */
  }

  @media (max-width: 768px) {
   
  }

  @media (max-width: 480px) {
    display: flex;
  }

`,o=(s.Ay.ul`
display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  gap: 55px;
  
`,(0,s.Ay)(t.A)`
  &.MuiButton-root {
    opacity: 0.5;
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
  }
`),c=s.Ay.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  @media (max-width: 1280px) {

  }

  @media (max-width: 1024px) {
    /* gap: 15px; */
  }

  @media (max-width: 768px) {
   
  }

  @media (max-width: 480px) {
    padding: 0;
  }
  
`,l=(0,s.Ay)(n.A)`
  &.MuiMenuItem-root {
    margin-right: 5px;
    opacity: 0.5;
    color: rgba(35, 81, 96, 1);
    font-family: Rebelton;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
  }
  &.MuiMenuItem-root:hover {
    background: none;
    opacity: 1;
    p {
      font-size: 16px;
      opacity: 1;
    }
  }
`,m=s.Ay.p`
opacity: 0.5;
    font-family: Rebelton;
    font-size: 16px;
    line-height: 22.4px;
    color: rgba(35, 81, 96, 1);
 @media screen and (max-width: 1024px) {
  opacity: 0.5;
    font-family: Rebelton;
    font-size: 16px;
    line-height: 22.4px;
    color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 768px) {
    opacity: 0.5;
  font-family: Rebelton;
  font-size: 16px;
  line-height: 22.4px;
  color: rgba(35, 81, 96, 1);
  }
  @media screen and (max-width: 480px) {
  }
`,h=s.Ay.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  gap: 150px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    gap: 39px;
  }
  @media screen and (max-width: 768px) {
    gap: 20px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-end
  }
/* 


  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 150px;
  } */
`,g=s.Ay.div`

  display: flex;
  gap: 20px;

  @media (max-width: 1280px) {
   
  }

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {

  }

`,f=(0,s.Ay)(d.N_)`
  :hover {
    fill: rgb(35 81 96 / 80%);

  }
`}}]);
//# sourceMappingURL=963.853249e1.chunk.js.map