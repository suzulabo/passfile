import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-gencode',
  styleUrl: 'app-gencode.scss',
  shadow: true,
})
export class AppGenCode {
  render() {
    return (
      <Host>
        <stencil-route-title pageTitle="Code Generation"></stencil-route-title>

        <a-header></a-header>
        <ap-gencode-form></ap-gencode-form>
      </Host>
    );
  }
}
