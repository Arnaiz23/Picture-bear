class BowTie extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get Styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BowTie.Styles}</style>
    <div class="left part">
        <div class="center"></div>
    </div>
    <div class="part">
        <div class="center"></div>
    </div>
    <div class="bottom-center"></div>
    `;
  }
}

customElements.define("bow-tie", BowTie);
