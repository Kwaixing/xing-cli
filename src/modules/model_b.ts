import chalk from 'chalk';
import ModuleAPI from '../ModuleAPI.js';
import { existedDirectory } from '../utils/file.js';

export default function (api: ModuleAPI, name: string) {
  api.injectOption({
    name: 'complex_template',
    value: 'complex_template',
    short: 'complex',
    description: 'complex_template contains ***',
    link: 'https://baidu.com',
    checked: false,
  });
  api.injectQuestion({
    name: 'directory',
    type: 'input',
    when: () => existedDirectory(name),
    message: `${chalk.bgBlueBright(
      name,
    )} is used in this path, please change repo name`,
  });
}
