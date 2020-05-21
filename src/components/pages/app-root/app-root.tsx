import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <Host>
        <stencil-router titleSuffix=" - Passfile" root="/passfile/">
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route
              url="/gencode(|/)"
              component="app-gencode"
              exact={true}
            />
            <stencil-route
              url="/encrypt(|/)"
              component="app-encrypt"
              exact={true}
            />
            <stencil-route
              url="/decrypt(|/)"
              component="app-decrypt"
              exact={true}
            />
            <stencil-route url="/" component="app-home" exact={true} />
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }
}
