import { Component, h, Host } from '@stencil/core';
import { normPath } from '../../../global/env';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <Host>
        <stencil-route-title pageTitle="Home"></stencil-route-title>

        <a-header></a-header>
        <div class="link-box">
          <stencil-route-link url={normPath('/gencode/')} exact={true}>
            <a-button>
              <ion-icon name="barcode-sharp"></ion-icon>
              <span class="label">Code Generation</span>
              <ion-icon name="barcode-sharp"></ion-icon>
            </a-button>
          </stencil-route-link>
          <stencil-route-link url={normPath('/encrypt/')} exact={true}>
            <a-button>
              <ion-icon name="key-outline"></ion-icon>
              <span class="label">Encryption</span>
              <ion-icon name="key-outline"></ion-icon>
            </a-button>
          </stencil-route-link>
          <stencil-route-link url={normPath('/decrypt/')} exact={true}>
            <a-button>
              <ion-icon name="lock-open"></ion-icon>
              <span class="label">Decryption</span>
              <ion-icon name="lock-open"></ion-icon>
            </a-button>
          </stencil-route-link>
        </div>
      </Host>
    );
  }
}
