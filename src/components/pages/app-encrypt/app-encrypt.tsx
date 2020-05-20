import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-encrypt',
  styleUrl: 'app-encrypt.scss',
  shadow: true,
})
export class AppEncrypt {
  render() {
    return (
      <Host>
        <stencil-route-title pageTitle="Encryption"></stencil-route-title>

        <a-header></a-header>
        <ap-encrypt-form></ap-encrypt-form>
      </Host>
    );
  }
}
