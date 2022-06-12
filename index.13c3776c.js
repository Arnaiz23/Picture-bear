const h=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};h();class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get Styles(){return`
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        width: 150px;
        top: 40%;
        left: 25%;
    }

    .eye {
        width: 10px;
        height: 20px;
        background-color: #000;
        border-radius: 10px;
    }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.Styles}</style>
    <div class="eye"></div>
    <div class="eye"></div>
    `}}customElements.define("eye-bear",s);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get Styles(){return`
      :host {
        width: 100px;
        height: 70px;
        background-color: var(--yellow-bear);
        display: flex;
        border-radius: 50%;
        position: relative;
        top: 50%;
        left: 34%;
        justify-content: center;
      }

      .nose {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: var(--nose-bear);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.Styles}</style>
    <div class="nose"></div>
    `}}customElements.define("nose-bear",i);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get Styles(){return`
      :host {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: var(--brown-dark-hear);
        display: flex;
        position: absolute;
        right: calc(500px - 32%);
        top: 25%;
        z-index: 1;
        align-items: center;
        justify-content: center;
      }

      :host(.right) {
          right: 0;
          left: calc(500px - 32%);
      }

      .inside-ear {
          width: 50%;
          height: 50%;
          border-radius: 50%;
          background-color: var(--inner-ear);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.Styles}</style>
    <div class="inside-ear"></div>
    `}}customElements.define("ear-bear",n);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get Styles(){return`
      :host {
        display: flex;
        width: 40%;
        height: 17%;
        position: absolute;
        bottom: -10%;
        left: 30%;
      }

      .part {
          width: 50%;
          background-color: var(--sky-bear);
          border-radius: 50% 15px 15px 50%;
          display: flex;
          align-items: center;
      }

      .part.left {
          transform: rotate(180deg);
      }

      .center {
          border-radius: 70% 10px 10px 70%;
          width: 70%;
          height: 60%;
          background-color: var(--sky-dark-bear);
      }

      .bottom-center {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: var(--sky-ligth-bear);
          position: absolute;
          left: 40%;
          top: 25%;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.Styles}</style>
    <div class="left part">
        <div class="center"></div>
    </div>
    <div class="part">
        <div class="center"></div>
    </div>
    <div class="bottom-center"></div>
    `}}customElements.define("bow-tie",a);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get Styles(){return`
      :host {
        width: 500px;
        height: 500px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .head {
        width: 60%;
        height: 53%;
        background-color: var(--brown-ligth-bear);
        border-radius: 50%;
        position: relative;
        z-index: 10;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.Styles}</style>
    <div class="head">
        <eye-bear></eye-bear>
        <nose-bear></nose-bear>
        <bow-tie></bow-tie>
    </div>
    <ear-bear class="right"></ear-bear>
    <ear-bear></ear-bear>
    `}}customElements.define("bear-component",d);
