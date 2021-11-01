import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';
import download from 'download-git-repo';
import Creator from './Creator.js';
import ModuleAPI from './ModuleAPI.js';
import clear from './utils/clear.js';
import { Answer, ModuleFunction } from './types.js';
import { git_address } from './const.js';
import {
  handleEslintInject,
  handlePrettierInject,
  handleShellShDelete,
} from './modules/model_a.js';
import { existedDirectory } from './utils/file.js';

const log = console.log;
const { bgBlueBright, greenBright, redBright } = chalk;

const getModules = (): Promise<ModuleFunction[]> => {
  return Promise.all(
    ['model_a', 'model_b'].map((file) => {
      return import(`./modules/${file}.js`);
    }),
  );
};

export default async (name: string) => {
  // 创建creator对象
  const creator = new Creator();
  // 调用方法获得所有的提示语句
  const modules = await getModules();
  // 把语句注入creator对象
  const apis = new ModuleAPI(creator);
  modules.forEach((module) => module.default(apis, name));
  // 清空命令行
  clear();

  log(bgBlueBright('your repo name is:'), greenBright(name));
  const ans = await inquirer.prompt<Answer>(creator.getAllQuestions());
  // log(ans);
  if (ans) {
    let processOra = ora('start download').start();
    name = ans.directory || name;
    download(git_address, name, { clone: true }, (error) => {
      if (!error) {
        if (ans.rules?.includes('eslint')) {
          handleEslintInject(name);
        }
        if (ans.rules?.includes('prettier')) {
          handlePrettierInject(name);
        }
        if (!ans.shell) {
          handleShellShDelete(name);
        }
        processOra.succeed(greenBright('download success'));
        log(greenBright(`\n now you can:\n cd ${name} \n npm i`));
      } else {
        if (existedDirectory(ans.directory)) {
          processOra.fail(redBright('Failed: existed dirname'));
        } else {
          processOra.fail(redBright('please check your gitlab authority'));
        }
      }
    });
  }
};
