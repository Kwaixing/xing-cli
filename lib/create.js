import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';
import download from 'download-git-repo';
import Creator from './Creator.js';
import ModuleAPI from './ModuleAPI.js';
import clear from './utils/clear.js';
import { git_address } from './const.js';
import { handleEslintInject, handlePrettierInject, handleShellShDelete, } from './modules/model_a.js';
import { existedDirectory } from './utils/file.js';
const log = console.log;
const { bgBlueBright, greenBright, redBright } = chalk;
const getModules = () => {
    return Promise.all(['model_a', 'model_b'].map((file) => {
        return import(`./modules/${file}.js`);
    }));
};
export default async (name) => {
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
    const ans = await inquirer.prompt(creator.getAllQuestions());
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
            }
            else {
                if (existedDirectory(ans.directory)) {
                    processOra.fail(redBright('Failed: existed dirname'));
                }
                else {
                    processOra.fail(redBright('please check your gitlab authority'));
                }
            }
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLE9BQU8sTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxLQUFLLE1BQU0sa0JBQWtCLENBQUM7QUFFckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6QyxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixtQkFBbUIsR0FDcEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3hCLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQztBQUV2RCxNQUFNLFVBQVUsR0FBRyxHQUE4QixFQUFFO0lBQ2pELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDaEIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDbEMsT0FBTyxNQUFNLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLEtBQUssRUFBRSxJQUFZLEVBQUUsRUFBRTtJQUNwQyxjQUFjO0lBQ2QsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUM5QixnQkFBZ0I7SUFDaEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxVQUFVLEVBQUUsQ0FBQztJQUNuQyxpQkFBaUI7SUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RCxRQUFRO0lBQ1IsS0FBSyxFQUFFLENBQUM7SUFFUixHQUFHLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0QsTUFBTSxHQUFHLEdBQUcsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFTLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLFlBQVk7SUFDWixJQUFJLEdBQUcsRUFBRTtRQUNQLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9DLElBQUksR0FBRyxHQUFHLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUM3QixRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDakMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFCO2dCQUNELElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ25DLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1QjtnQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtvQkFDZCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDM0I7Z0JBQ0QsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxHQUFHLENBQUMsV0FBVyxDQUFDLHdCQUF3QixJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7aUJBQU07Z0JBQ0wsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ25DLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztpQkFDdkQ7cUJBQU07b0JBQ0wsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO2lCQUNsRTthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQyJ9