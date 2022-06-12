class NoseBear extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get Styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NoseBear.Styles}</style>
    <div class="nose"></div>
    `;
  }
}

customElements.define("nose-bear", NoseBear);
