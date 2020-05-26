import { Component, h, Host } from '@stencil/core';
import { normPath } from '../../../global/env';

@Component({
  tag: 'a-header',
  styleUrl: 'a-header.scss',
  shadow: true,
})
export class Header {
  render() {
    return (
      <Host>
        <stencil-route-link url={normPath('/')} exact={true}>
          <span>Passfile</span>
        </stencil-route-link>
      </Host>
    );
  }
}
