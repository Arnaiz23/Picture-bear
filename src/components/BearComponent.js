import "./EyeBear.js";
import "./NoseBear.js";
import "./EarBear.js";
import "./BowTie.js";

class BearComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get Styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BearComponent.Styles}</style>
    <div class="head">
        <eye-bear></eye-bear>
        <nose-bear></nose-bear>
        <bow-tie></bow-tie>
    </div>
    <ear-bear class="right"></ear-bear>
    <ear-bear></ear-bear>
    `;
  }
}

customElements.define("bear-component", BearComponent);
