class EyeBear extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get Styles() {
    return /* css */ `
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${EyeBear.Styles}</style>
    <div class="eye"></div>
    <div class="eye"></div>
    `;
  }
}

customElements.define("eye-bear", EyeBear);
