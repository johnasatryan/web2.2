// const fs = require('node:fs');

// function write(path, data) {
//   fs.writeFileSync(path, data);
// }

// function read(path) {
//   return fs.readFileSync(path);
// }

// write('file.txt', 'hello world');

// const data = read('file.txt');
// console.log(data.toString());

import * as fs from 'fs';

type User = {
  name: string;
  age: number;
};
type FileType = {
  stringData?: string;
  jsonData?: User;
};

interface LowLevel {
  write(path: string, data: FileType);
  read(path: string): FileType;
}

class FileOperations implements LowLevel {
  write(path: string, data: FileType) {}

  read(path: string) {
    return '' as FileType;
  }
}

class JSONOperations implements LowLevel {
  write(path: string, data: FileType) {
    fs.writeFileSync(path, JSON.stringify(data));
  }

  read(path: string) {
    return '' as FileType;
  }
}

const obj = new JSONOperations();

obj.write('file.json', { jsonData: { name: 'James', age: 123 } });
