import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'a-button',
  styleUrl: 'a-button.scss',
  shadow: true,
})
export class Button {
  @Prop()
  label: string;

  @Prop()
  icon: string;

  @Prop({ reflect: true })
  disabled: boolean;

  render() {
    if (this.icon) {
      return (
        <Host class="icon">
          <ion-icon name={this.icon}></ion-icon>
        </Host>
      );
    }

    return (
      <Host class="label">
        {this.label}
        <slot></slot>
      </Host>
    );
  }
}
