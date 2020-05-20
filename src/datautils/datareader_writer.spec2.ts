import { DataReader } from './datareader';
import { DataWriter } from './datawriter';

describe('data reader writer', () => {
  it('basic', () => {
    const writer = new DataWriter();
    const now = new Date();

    writer.writeInt8(1);
    writer.writeInt32(9999);
    writer.writeString('test');
    writer.writeUint8Array(new Uint8Array([1, 2, 3, 4, 5]));
    writer.writeDate(now);

    const data = writer.toUint8Array();
    const reader = new DataReader(data);

    expect(reader.readInt8()).toEqual(1);
    expect(reader.readInt32()).toEqual(9999);
    expect(reader.readString()).toEqual('test');
    expect(reader.readUint8Array()).toEqual(new Uint8Array([1, 2, 3, 4, 5]));
    expect(reader.readDate()).toEqual(now);
    expect(reader.readInt8()).toBeUndefined();
    expect(reader.readInt32()).toBeUndefined();
    expect(reader.readString()).toBeUndefined();
    expect(reader.readUint8Array()).toBeUndefined();
  });
});
