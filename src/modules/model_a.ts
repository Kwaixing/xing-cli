import { unlinkSync, writeFileSync } from 'fs';
import { readJsonFile, writeJsonFile } from '../utils/file.js';
import { PackageJson, Answer } from '../types.js';
import { eslintrc, prettierrc } from '../const.js';
import ModuleAPI from '../ModuleAPI.js';

export default function (api: ModuleAPI) {
  api.injectOption({
    name: 'simple_template',
    value: 'simple_template',
    short: 'simple',
    description: 'simple_template without ***',
    link: 'https://google.com',
    checked: true,
  });
  api.injectQuestion({
    name: 'rules',
    message: 'pick lint rule from your repo',
    when: (answer: Answer) => answer.features === 'simple_template',
    description: 'if choose model_a, pick model_a selection',
    type: 'checkbox',
    choices: [
      {
        name: 'eslint',
        value: 'eslint',
        short: 'eslint',
      },
      {
        name: 'prettier',
        value: 'prettier',
        short: 'prettier',
      },
    ],
  });
  api.injectQuestion({
    name: 'shell',
    message: 'would you like to pick shell.sh',
    when: (answer: Answer) => answer.features === 'simple_template',
    description: 'if choose model_a, pick model_a selection',
    type: 'confirm',
  });
}

export const handleEslintInject = (name: string) => {
  writeFileSync(`./${name}/.eslintrc.js`, eslintrc, { encoding: 'utf-8' });
  const packageJson = readJsonFile<PackageJson>(`./${name}/package.json`);
  packageJson.devDependencies['eslint'] = '^8.0.1';
  writeJsonFile(`./${name}/package.json`, packageJson);
};

export const handlePrettierInject = (name: string) => {
  writeFileSync(`./${name}/.prettierrc.js`, prettierrc, { encoding: 'utf-8' });
  const packageJson = readJsonFile<PackageJson>(`./${name}/package.json`);
  packageJson.devDependencies['prettier'] = '^2.4.1';
  writeJsonFile(`./${name}/package.json`, packageJson);
};

export const handleShellShDelete = (name: string) => {
  unlinkSync(`./${name}/build.sh`);
};
