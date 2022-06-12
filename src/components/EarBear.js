class EarBear extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get Styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${EarBear.Styles}</style>
    <div class="inside-ear"></div>
    `;
  }
}

customElements.define("ear-bear", EarBear);
