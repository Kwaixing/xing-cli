import { Command } from 'commander';
import { fileURLToPath } from 'url';
import path from 'path';
import create from './create.js';
import { readJsonFile } from './utils/file.js';
import { PackageJson } from './types.js';

const program = new Command();
let packageJson;
try {
  packageJson = readJsonFile<PackageJson>(
    path.join(
      path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'),
      path.sep,
      'package.json',
    ),
  );
} catch (error) {
  packageJson = { version: '0.0.1', error };
}
program
  .version(packageJson.version, '-v --version')
  .command('create <name>')
  .description('xing creator')
  .action(async (name: string) => {
    await create(name);
  });

program.parse();
