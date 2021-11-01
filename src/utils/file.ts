import { readFileSync, writeFileSync, readdirSync } from 'fs';

export function readJsonFile<T>(filename: string): T {
  return JSON.parse(readFileSync(filename, { encoding: 'utf-8', flag: 'r' }));
}

export function writeJsonFile<T>(filename: string, content: T): void {
  writeFileSync(filename, JSON.stringify(content, null, 2));
}

export function existedDirectory(ans: string) {
  return [...readdirSync('./'), ''].includes(ans);
}
