import { Component, Element, h, Host, Prop } from '@stencil/core';
import { HTMLStencilElement, State } from '@stencil/core/internal';

@Component({
  tag: 'a-input',
  styleUrl: 'a-input.scss',
  shadow: true,
})
export class Input {
  @Element()
  el: HTMLStencilElement;

  @Prop()
  placeholder: string;

  @Prop()
  type: string;

  @Prop()
  pattern: string;

  @Prop({ mutable: true })
  value: string;

  @State()
  passwordMask = true;

  render() {
    const Tag = this.type == 'textarea' ? 'textarea' : 'input';
    const type = (() => {
      if (this.type == 'textarea') {
        return;
      }
      if (this.type == 'password') {
        return this.passwordMask ? 'password' : 'text';
      }
      return this.type;
    })();

    const renderEye = () => {
      if (this.type != 'password') {
        return;
      }

      return (
        <ion-icon
          name={this.passwordMask ? 'eye' : 'eye-off'}
          onClick={() => {
            this.passwordMask = !this.passwordMask;
          }}
        ></ion-icon>
      );
    };

    return (
      <Host>
        <Tag
          id="input"
          placeholder={this.placeholder}
          onInput={(ev) => {
            const target = ev.target as HTMLInputElement;
            const newValue = target.value;
            if (this.pattern) {
              if (!newValue.match(this.pattern)) {
                target.value = this.value || '';
                return;
              }
            }
            this.value = newValue;
          }}
          type={type}
          pattern={this.pattern}
          value={this.value}
        ></Tag>
        {renderEye()}
      </Host>
    );
  }
}
