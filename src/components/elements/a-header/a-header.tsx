import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'a-header',
  styleUrl: 'a-header.scss',
  shadow: true,
})
export class Header {
  render() {
    return (
      <Host>
        <stencil-route-link url="/" exact={true}>
          <span>Passfile</span>
        </stencil-route-link>
      </Host>
    );
  }
}
