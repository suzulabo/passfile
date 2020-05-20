import { Component, h, Host, Prop, State, Element } from '@stencil/core';
import { getApp } from '../../../global/env';

@Component({
  tag: 'ap-gencode-form',
  styleUrl: 'ap-gencode-form.scss',
  shadow: true,
})
export class GenCodeForm {
  private app = getApp();

  @Element()
  el: HTMLElement;

  @Prop()
  passPhrase: string;

  @State()
  codes: { secret: string; public: string };

  render() {
    const renderCodeBox = (isPublic: boolean, code: string) => {
      const title = isPublic ? 'Public Code' : 'Secret Code';
      return (
        <fieldset
          class={{
            'code-box': true,
            public: isPublic,
            secret: !isPublic,
            hide: !code,
          }}
        >
          <legend>{title}</legend>
          <div class="inner">
            <span class="code">{code}</span>
            <a-button
              icon="copy-outline"
              disabled={!navigator.clipboard}
              onClick={(ev) => {
                if (!navigator.clipboard) {
                  return;
                }
                void navigator.clipboard.writeText(code);
                const el = ev.target as HTMLElement;
                const codeEl = el
                  .closest('.code-box')
                  .querySelector<HTMLElement>('.code');
                codeEl.classList.remove('copied');
                void codeEl.offsetWidth;
                codeEl.classList.add('copied');
              }}
            ></a-button>
          </div>
        </fieldset>
      );
    };

    return (
      <Host>
        <div class="title">
          <ion-icon name="barcode-sharp"></ion-icon>
          <span class="label">Code Generation</span>
          <ion-icon name="barcode-sharp"></ion-icon>
        </div>
        <a-input
          class="passphrase"
          placeholder="Input Passphrase"
          type="password"
          value={this.passPhrase}
          onInput={(ev) => {
            const el = ev.target as HTMLAInputElement;
            this.passPhrase = el.value;
            this.codes = null;
          }}
        ></a-input>
        <a-button
          class="make"
          label="Make"
          onClick={() => {
            this.codes = this.app.generateCodes(this.passPhrase);
          }}
        ></a-button>
        {renderCodeBox(false, this.codes?.secret)}
        {renderCodeBox(true, this.codes?.public)}
      </Host>
    );
  }
}
