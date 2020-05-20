import { Component, h, Host, State } from '@stencil/core';
import { humanFileSize } from '../../../fileutils/fileutils';
import { getApp } from '../../../global/env';

const removeExtension = (filename: string) => {
  if (!filename) {
    return;
  }
  const a = filename.split('.');
  if (a.length <= 1) {
    return filename;
  } else {
    return a.slice(0, -1).join('.');
  }
};

@Component({
  tag: 'ap-encrypt-form',
  styleUrl: 'ap-encrypt-form.scss',
  shadow: true,
})
export class EncryptForm {
  private app = getApp();

  @State()
  publicCode: string;

  @State()
  files: File[] = [];

  @State()
  showOverlay: boolean;

  @State()
  overlayState: { icon: string; msg: string };

  @State()
  downloadURL: string;

  componentDidUnload() {
    this.clearDownloadURL();
  }

  private clearDownloadURL() {
    if (this.downloadURL) {
      URL.revokeObjectURL(this.downloadURL);
      this.downloadURL = null;
    }
  }

  private addFiles(files: FileList) {
    const newFiles = [...this.files];
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      newFiles.push(file);
      /*
      if (
        !newFiles.find((f) => {
          return f.name == file.name && f.size == file.size;
        })
      ) {
        newFiles.push(file);
      }
      */
    }
    this.files = newFiles;
  }

  private async eyncryptFiles() {
    if (this.showOverlay) {
      return;
    }

    this.clearDownloadURL();
    this.showOverlay = true;
    try {
      const [blob] = await Promise.all([
        this.app.encryptFiles(
          this.files,
          this.publicCode,
          (stage, file, _val) => {
            switch (stage) {
              case 'read':
                const i = this.files.indexOf(file);
                this.overlayState = {
                  icon: 'document-outline',
                  msg: `${file.name} (${i + 1}/${this.files.length})`,
                };
                break;
              case 'encrypt_begin':
                this.overlayState = {
                  icon: 'key-outline',
                  msg: `Encrypting`,
                };
            }
          }
        ),
        // spend at least 1 sec
        new Promise<void>((resolve) => {
          setTimeout(resolve, 1000);
        }),
      ]);

      this.downloadURL = URL.createObjectURL(blob);
    } catch (e) {
      this.showOverlay = false;
      throw e;
    }
  }

  render() {
    const totalSize = this.files.reduce((n, f) => {
      return n + f.size;
    }, 0);

    const renderFiles = () => {
      return this.files.map((v) => {
        return (
          <div class="file">
            <span class="name">{v.name}</span>
            <span class="size">({humanFileSize(v.size)})</span>
            <a-button
              icon="close"
              onClick={() => {
                this.files = this.files.filter((f) => {
                  return f != v;
                });
              }}
            ></a-button>
          </div>
        );
      });
    };

    const renderOverlay = () => {
      if (!this.showOverlay) {
        return;
      }

      if (this.downloadURL) {
        return (
          <div class="overlay dark">
            <a
              class="download-box"
              href={this.downloadURL}
              download={`${removeExtension(this.files[0]?.name)}.passfile`}
            >
              <a-button class="download" icon="download-outline"></a-button>
            </a>
            <a-button
              class="close"
              icon="close-circle-outline"
              onClick={() => {
                this.clearDownloadURL();
                this.showOverlay = false;
              }}
            ></a-button>
          </div>
        );
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
          <ion-icon name="key-outline"></ion-icon>
          <span class="label">Encryption</span>
          <ion-icon name="key-outline"></ion-icon>
        </div>
        <fieldset class="code-box">
          <legend>Public Code</legend>
          <a-input
            placeholder="Paste Public Code"
            type="textarea"
            pattern="^[0123456789ABCDEFGHJKMNPQRSTVWXYZ]{0,52}$"
            onInput={(ev) => {
              const target = ev.target as HTMLAInputElement;
              if (target.value?.length == 52) {
                this.publicCode = target.value;
              } else {
                this.publicCode = null;
              }
            }}
          ></a-input>
        </fieldset>
        <a-file-input
          icon="documents-outline"
          label="Browse files"
          multiple={true}
          onSelectFile={(ev) => {
            this.addFiles(ev.detail);
          }}
        ></a-file-input>
        <div class="files-box">{renderFiles()}</div>
        <div class={{ 'total-box': true, hide: this.files.length == 0 }}>
          Total: {humanFileSize(totalSize)}
        </div>
        <a-button
          class={{
            encrypt: true,
            hide: this.files.length == 0,
          }}
          label="Encrypt"
          disabled={!this.publicCode}
          onClick={() => {
            void this.eyncryptFiles();
          }}
        ></a-button>
        {renderOverlay()}
      </Host>
    );
  }
}
