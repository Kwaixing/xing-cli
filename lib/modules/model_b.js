import chalk from 'chalk';
import { existedDirectory } from '../utils/file.js';
export default function (api, name) {
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
        message: `${chalk.bgBlueBright(name)} is used in this path, please change repo name`,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxfYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL21vZGVsX2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBELE1BQU0sQ0FBQyxPQUFPLFdBQVcsR0FBYyxFQUFFLElBQVk7SUFDbkQsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNmLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QixLQUFLLEVBQUUsU0FBUztRQUNoQixXQUFXLEVBQUUsK0JBQStCO1FBQzVDLElBQUksRUFBRSxtQkFBbUI7UUFDekIsT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ2pCLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUNsQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUM1QixJQUFJLENBQ0wsZ0RBQWdEO0tBQ2xELENBQUMsQ0FBQztBQUNMLENBQUMifQ==