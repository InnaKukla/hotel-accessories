"use strict";(self.webpackChunkhotel_accessories=self.webpackChunkhotel_accessories||[]).push([[963],{225:(e,i,a)=>{a.d(i,{A:()=>t});a(5043);const t=a.p+"static/media/back-icon.5a5803f529c0d36de67d3c0afb455de7.svg"},3851:(e,i,a)=>{a.d(i,{wz:()=>n,zQ:()=>t});const t=e=>e.auth.isLogin,n=e=>e.auth.user},5577:(e,i,a)=>{a.d(i,{A:()=>l});a(5043);var t=a(5464);const n=t.Ay.div`
 padding-bottom: 27px;
    padding-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
      padding-bottom: 27px;
    padding-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 27px;
    padding-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 480px) {
  }
`,d=t.Ay.div`
 display: flex;
 gap: 15px;
    @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 768px) {

  }
  @media screen and (max-width: 480px) {
  }

`,p=t.Ay.div`
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
`,s=t.Ay.div`
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
`;var x=a(1675),r=a(225);const o=a.p+"static/media/arrow-right.6d4b300d98000d724feb8b52bcab5b03.svg";var c=a(579);const l=e=>{let{item:i,page:a}=e;return(0,c.jsxs)(n,{children:[(0,c.jsxs)(d,{children:[(0,c.jsx)(x.N_,{to:"/",children:(0,c.jsxs)(p,{children:[(0,c.jsx)("p",{children:"Home"}),(0,c.jsx)("img",{src:o,alt:"Arrow Right"})]})}),"favorites"===a&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x.N_,{to:"/products",children:(0,c.jsxs)(p,{children:[(0,c.jsx)("p",{children:"Catalog"}),(0,c.jsx)("img",{src:o,alt:"Arrow Right"})]})}),(0,c.jsx)(p,{children:(0,c.jsx)("p",{children:"Favorites"})})]}),"registration"===a&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(x.N_,{to:"/registration",children:(0,c.jsx)(p,{children:(0,c.jsx)("p",{children:"Personal account"})})})}),"product"===a&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x.N_,{to:"/products",children:(0,c.jsxs)(p,{children:[(0,c.jsx)("p",{children:"Catalog"}),(0,c.jsx)("img",{src:o,alt:"Arrow Right"})]})}),(0,c.jsx)(x.N_,{to:`/products/${i._id}`,children:(0,c.jsx)(s,{page:a,children:(0,c.jsx)("p",{children:i.name})})})]}),"basket"===a&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x.N_,{to:"/products",children:(0,c.jsxs)(p,{children:[(0,c.jsx)("p",{children:"Catalog"}),(0,c.jsx)("img",{src:o,alt:"Arrow Right"})]})}),(0,c.jsx)(x.N_,{to:`/products/${i._id}`,children:(0,c.jsx)(s,{page:a,children:(0,c.jsx)("p",{children:i.name})})})]}),"basket"===a&&!i._id&&(0,c.jsx)(p,{page:a,style:{marginLeft:"-15px"},children:(0,c.jsx)("p",{children:"Basket"})}),"basket"===a&&i._id&&(0,c.jsxs)(p,{page:a,children:[(0,c.jsx)("img",{src:o,alt:"Arrow Right"}),(0,c.jsx)("p",{children:"Basket"})]})]}),(0,c.jsx)(x.N_,{to:-1,children:(0,c.jsx)("img",{src:r.A,alt:"button back"})})]})}},7117:(e,i,a)=>{a.d(i,{D9:()=>c,ZT:()=>r,du:()=>m,lw:()=>g,mc:()=>x,nW:()=>o,oD:()=>s,w0:()=>l,xw:()=>f,zr:()=>h});var t=a(1906),n=a(8988),d=a(1675),p=a(5464);const s=p.Ay.header`
  padding-top: 29px;
  padding-bottom: 29px;
  background-color: rgba(255, 255, 255, 1);
  position: sticky;
  top: 0;
  z-index: 1500;
  min-width: 100vw;
  
`,x=p.Ay.div`
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
`,r=p.Ay.div`
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

`,o=(p.Ay.ul`
display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  gap: 55px;
  
`,(0,p.Ay)(t.A)`
  &.MuiButton-root {
    opacity: 0.5;
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
  }
`),c=p.Ay.div`
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
  
`,l=(0,p.Ay)(n.A)`
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
`,m=p.Ay.p`
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
`,g=p.Ay.div`
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
`,h=p.Ay.div`

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

`,f=(0,p.Ay)(d.N_)`
  :hover {
    fill: rgb(35 81 96 / 80%);

  }
`}}]);
//# sourceMappingURL=963.26045084.chunk.js.map