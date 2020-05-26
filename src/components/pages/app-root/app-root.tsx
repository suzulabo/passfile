import { Component, h, Host } from '@stencil/core';
import { normPath } from '../../../global/env';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <Host>
        <stencil-router titleSuffix=" - Passfile">
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route
              url={normPath('/gencode/')}
              component="app-gencode"
              exact={true}
            />
            <stencil-route
              url={normPath('/encrypt/')}
              component="app-encrypt"
              exact={true}
            />
            <stencil-route
              url={normPath('/decrypt/')}
              component="app-decrypt"
              exact={true}
            />
            <stencil-route
              url={normPath('/')}
              component="app-home"
              exact={true}
            />
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }
}
