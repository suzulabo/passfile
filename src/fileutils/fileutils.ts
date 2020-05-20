export const readFile = (f: Blob, progress?: (loaded: number) => void) => {
  return new Promise<Uint8Array>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      resolve(new Uint8Array(ev.target.result as ArrayBuffer));
    };
    reader.onerror = (ev) => {
      reject(ev.target.error);
    };
    reader.onprogress = (ev) => {
      if (progress) {
        progress(ev.loaded);
      }
    };

    reader.readAsArrayBuffer(f);
  });
};

/*
https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
*/
export const humanFileSize = (size: number) => {
  if (!size) {
    return '';
  }
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    Number((size / Math.pow(1024, i)).toFixed(2)) +
    ' ' +
    ['B', 'KiB', 'MiB', 'GiB', 'TiB'][i]
  );
};
