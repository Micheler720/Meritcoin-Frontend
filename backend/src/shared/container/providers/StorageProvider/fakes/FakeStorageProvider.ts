import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  private storages: string[] = [];

  async saveFile(file: string): Promise<string> {
    this.storages.push(file);
    return file;
  }

  async deleteFile(file: string): Promise<void> {
    const indexFile = this.storages.findIndex(
      storageFile => storageFile === file,
    );
    this.storages.splice(indexFile, 1);
  }
}

export default FakeStorageProvider;
