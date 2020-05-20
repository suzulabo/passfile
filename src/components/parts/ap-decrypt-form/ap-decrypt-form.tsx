import { Component, h, Host, State } from '@stencil/core';
import { getApp } from '../../../global/env';
import { humanFileSize } from '../../../fileutils/fileutils';

@Component({
  tag: 'ap-decrypt-form',
  styleUrl: 'ap-decrypt-form.scss',
  shadow: true,
})
export class DecryptForm {
  private app = getApp();

  @State()
  secretCode: string;

  @State()
  passPhrase: string;

  @State()
  publicCode: string;

  @State()
  file: File;

  @State()
  filePublicCode: string;

  @State()
  overlayState: { icon: string; msg: string };

  @State()
  decryptedFiles: { filename: string; data: Uint8Array }[];

  private derivePublicCode() {
    this.decryptedFiles = null;

    if (!this.secretCode) {
      this.publicCode = null;
      return;
    }
    this.publicCode = this.app.derivePublicCode(
      this.secretCode,
      this.passPhrase
    );
  }

  private async decryptFile() {
    if (!this.filePublicCode || this.filePublicCode != this.publicCode) {
      return;
    }

    this.overlayState = { icon: 'document-outline', msg: 'Reading' };
    try {
      [this.decryptedFiles] = await Promise.all([
        this.app.decryptFile(
          this.file,
          this.secretCode,
          this.passPhrase,
          (stage, _val) => {
            if (stage == 'decrypt_begin') {
              this.overlayState = {
                icon: 'lock-open-outline',
                msg: 'Decrypting',
              };
            }
          }
        ),
        // spend at least 1 sec
        new Promise<void>((resolve) => {
          setTimeout(resolve, 1000);
        }),
      ]);
    } finally {
      this.overlayState = null;
    }
  }

  render() {
    const fileError = this.file && !this.filePublicCode;

    const renderFiles = () => {
      if (!this.decryptedFiles) {
        return;
      }
      return this.decryptedFiles.map((v) => {
        return (
          <a-download-link
            blob={new File([v.data], v.filename)}
            filename={v.filename}
          >
            <div class="file">
              <span class="name">{v.filename}</span>
              <span class="size">({humanFileSize(v.data.byteLength)})</span>
              <a-button icon="download-outline"></a-button>
            </div>
          </a-download-link>
        );
      });
    };

    const renderOverlay = () => {
      if (!this.overlayState) {
        return;
      }
      return (
        <div class="overlay progress">
          <ion-icon name={this.overlayState?.icon}></ion-icon>
          <span class="msg">{this.overlayState?.msg}</span>
        </div>
      );
    };

    return (
      <Host>
        <div class="title">
          <ion-icon name="lock-open"></ion-icon>
          <span class="label">Decryption</span>
          <ion-icon name="lock-open"></ion-icon>
        </div>
        <fieldset class="code-box">
          <legend>Secret Code</legend>
          <a-input
            placeholder="Paste Secret Code"
            type="textarea"
            pattern="^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{0,52}$"
            onInput={(ev) => {
              const target = ev.target as HTMLAInputElement;
              if (target.value?.length == 52) {
                this.secretCode = target.value;
              } else {
                this.secretCode = null;
              }
              this.derivePublicCode();
            }}
          ></a-input>
        </fieldset>
        <a-input
          class="passphrase"
          placeholder="Input Passphrase"
          type="password"
          value={this.passPhrase}
          onInput={(ev) => {
            const el = ev.target as HTMLAInputElement;
            this.passPhrase = el.value;
            this.derivePublicCode();
          }}
        ></a-input>
        <a-file-input
          class={{ error: fileError }}
          icon="document-outline"
          label={this.file?.name || 'Browse passfile'}
          onSelectFile={async (ev) => {
            const file = ev.detail[0];
            if (!file) {
              return;
            }
            this.filePublicCode = await this.app.checkHeader(file);
            this.file = file;
            this.decryptedFiles = null;
          }}
        ></a-file-input>
        <a-button
          class={{
            decrypt: true,
            hide: !this.file || !!this.decryptedFiles,
          }}
          label="Decrypt"
          disabled={
            !this.filePublicCode || this.filePublicCode != this.publicCode
          }
          onClick={() => {
            void this.decryptFile();
          }}
        ></a-button>
        <div class="files-box">{renderFiles()}</div>
        {renderOverlay()}
      </Host>
    );
  }
}
