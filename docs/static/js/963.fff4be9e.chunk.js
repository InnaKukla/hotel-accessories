"use strict";(self.webpackChunkhotel_accessories=self.webpackChunkhotel_accessories||[]).push([[963],{225:(e,i,a)=>{a.d(i,{A:()=>t});a(5043);const t=a.p+"static/media/back-icon.5a5803f529c0d36de67d3c0afb455de7.svg"},3851:(e,i,a)=>{a.d(i,{VP:()=>n,wz:()=>d,zQ:()=>t});const t=e=>e.auth.isLogin,n=e=>e.auth.isLoading,d=e=>e.auth.user},5577:(e,i,a)=>{a.d(i,{A:()=>h});a(5043);var t=a(5180),n=a(5464);const d=n.Ay.div`
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
`,r=n.Ay.div`
  display: flex;
  gap: 15px;
  align-items: center;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`,s=n.Ay.div`
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
`,p=n.Ay.div`
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
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(35, 81, 96, 1);
    word-break: break-word;
    overflow-wrap: break-word;
    width: 100%;
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
      width: 100%;
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
      width: 130px;
    }
  }
  @media screen and (max-width: 480px) {
    p {
      width: 100%;
    }
  }
`,x=(0,n.Ay)(t.N_)`
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    margin-left: auto;
  }
`;var o=a(225);const l=a.p+"static/media/arrow-right.6d4b300d98000d724feb8b52bcab5b03.svg";var c=a(579);const h=e=>{let{item:i,page:a}=e;return(0,c.jsxs)(d,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(t.N_,{to:"/",children:(0,c.jsxs)(s,{children:[(0,c.jsx)("p",{children:"Home"}),(0,c.jsx)("img",{src:l,alt:"Arrow Right",width:5})]})}),"favorites"===a&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.N_,{to:"/products",children:(0,c.jsxs)(s,{children:[(0,c.jsx)("p",{children:"Catalog"}),(0,c.jsx)("img",{src:l,alt:"Arrow Right",width:5})]})}),(0,c.jsx)(s,{children:(0,c.jsx)("p",{children:"Favorites"})})]}),"registration"===a&&(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(t.N_,{to:"/registration",children:(0,c.jsx)(s,{children:(0,c.jsx)("p",{children:"Personal account"})})})}),"product"===a&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.N_,{to:"/products",children:(0,c.jsxs)(s,{children:[(0,c.jsx)("p",{children:"Catalog"}),(0,c.jsx)("img",{src:l,alt:"Arrow Right",width:5})]})}),(0,c.jsx)(t.N_,{to:`/products/${i._id}`,children:(0,c.jsx)(p,{page:a,children:(0,c.jsx)("p",{children:i.name})})})]}),"basket"===a&&!i._id&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.N_,{to:"/products",children:(0,c.jsxs)(s,{children:[(0,c.jsx)("p",{children:"Catalog"}),(0,c.jsx)("img",{src:l,alt:"Arrow Right",width:5})]})}),(0,c.jsx)(s,{page:a,children:(0,c.jsx)("p",{children:"Basket"})})]}),"basket"===a&&i._id&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.N_,{to:"/products",children:(0,c.jsxs)(s,{children:[(0,c.jsx)("p",{children:"Catalog"}),(0,c.jsx)("img",{src:l,alt:"Arrow Right",width:5})]})}),(0,c.jsx)(t.N_,{to:`/products/${i._id}`,children:(0,c.jsxs)(p,{page:a,children:[(0,c.jsx)("p",{children:i.name}),(0,c.jsx)("img",{src:l,alt:"Arrow Right",width:5})]})}),(0,c.jsx)(s,{page:a,children:(0,c.jsx)("p",{children:"Basket"})})]})]}),(0,c.jsx)(x,{to:-1,children:(0,c.jsx)("img",{src:o.A,alt:"button back"})})]})}},7117:(e,i,a)=>{a.d(i,{D9:()=>l,ZT:()=>x,du:()=>h,lw:()=>m,mc:()=>p,nW:()=>o,oD:()=>s,w0:()=>c,xw:()=>f,zr:()=>g});var t=a(1906),n=a(8988),d=a(5180),r=a(5464);const s=r.Ay.header`
  padding-top: 29px;
  padding-bottom: 29px;
  background-color: rgba(255, 255, 255, 1);
  position: sticky;
  top: 0;
  z-index: 1500;
  min-width: 100vw;
`,p=r.Ay.div`
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
`,x=r.Ay.div`
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
`,o=(r.Ay.ul`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  gap: 55px;
`,(0,r.Ay)(t.A)`
  &.MuiButton-root {
    opacity: 0.5;
    font-family: Rebelton;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: rgba(35, 81, 96, 1);
  }
`),l=r.Ay.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
`,c=(0,r.Ay)(n.A)`
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
`,h=r.Ay.p`
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
`,m=r.Ay.div`
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
    align-items: flex-end;
  }
  /* 


  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 150px;
  } */
`,g=r.Ay.div`
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
`,f=(0,r.Ay)(d.N_)`
  svg {
    fill: ${e=>{let{$active:i}=e;return i?"rgb(35 81 96 / 80%)":"none"}};
  }

  :hover {
    fill: rgb(35 81 96 / 80%);
  }
`}}]);
//# sourceMappingURL=963.fff4be9e.chunk.js.map