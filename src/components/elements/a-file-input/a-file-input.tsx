import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'a-file-input',
  styleUrl: 'a-file-input.scss',
  shadow: true,
})
export class FileInput {
  @Element()
  el: HTMLElement;

  @Prop()
  icon: string;

  @Prop()
  label: string;

  @Prop()
  loading: boolean;

  @Prop()
  multiple: boolean;

  @Event()
  selectFile: EventEmitter<FileList>;

  render() {
    return (
      <Host
        onDragOver={(ev: DragEvent) => {
          ev.stopPropagation();
          ev.preventDefault();
          ev.dataTransfer.dropEffect = 'copy';
        }}
        onDrop={(ev: DragEvent) => {
          ev.stopPropagation();
          ev.preventDefault();
          if (ev.dataTransfer.files?.length > 0) {
            this.selectFile.emit(ev.dataTransfer.files);
          }
        }}
      >
        <a-button
          icon={this.icon || 'document-outline'}
          disabled={this.loading}
          onClick={() => {
            if (this.loading) {
              return;
            }
            this.el.shadowRoot.getElementById('file_select_input').click();
          }}
        ></a-button>
        <span class="label">{this.label}</span>
        <input
          id="file_select_input"
          type="file"
          multiple={this.multiple}
          onChange={(ev) => {
            const el = ev.target as HTMLInputElement;
            this.selectFile.emit(el.files);
            el.value = '';
          }}
        ></input>
      </Host>
    );
  }
}
