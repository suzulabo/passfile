import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-decrypt',
  styleUrl: 'app-decrypt.scss',
  shadow: true,
})
export class AppDecrypt {
  render() {
    return (
      <Host>
        <stencil-route-title pageTitle="Decryption"></stencil-route-title>

        <a-header></a-header>
        <ap-decrypt-form></ap-decrypt-form>
      </Host>
    );
  }
}
