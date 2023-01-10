import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-formfield';
import '@material/mwc-switch';

@customElement('switch-input')
export class SwitchInput extends LitElement {

  @property({ type: String })
  public name: string = "";

  @property({ type: String })
  public label: string = "";

  @property({ type: Boolean })
  public selected: boolean = false;

  @property({ type: String })
  public value: string = "1";

  @property({ type: Boolean })
  public isSelected: boolean = this.selected;

  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected? 'on': 'off'}" />
        </mwc-formfield>
      </div>
    `;
  }

  private get switch() {
    if (this.selected) {
      return html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `;
    } else {
      return html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `;
    }
  }

  private switchAction(switchActionEvent: { target: { selected: boolean; value: string; }; }) {
    // console.log({switchActionEvent});
    this.isSelected = switchActionEvent.target.selected;
    // console.log({"this.isSelected": this.isSelected});
    this.querySelectorAll('[name="' + this.name + '"]').forEach((input: HTMLInputElement) => {
      input.value = this.isSelected? "on": "off";
    })
  }

  createRenderRoot() {
    return this;
  }
}
