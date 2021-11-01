import { unlinkSync, writeFileSync } from 'fs';
import { readJsonFile, writeJsonFile } from '../utils/file.js';
import { eslintrc, prettierrc } from '../const.js';
export default function (api) {
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
        when: (answer) => answer.features === 'simple_template',
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
        when: (answer) => answer.features === 'simple_template',
        description: 'if choose model_a, pick model_a selection',
        type: 'confirm',
    });
}
export const handleEslintInject = (name) => {
    writeFileSync(`./${name}/.eslintrc.js`, eslintrc, { encoding: 'utf-8' });
    const packageJson = readJsonFile(`./${name}/package.json`);
    packageJson.devDependencies['eslint'] = '^8.0.1';
    writeJsonFile(`./${name}/package.json`, packageJson);
};
export const handlePrettierInject = (name) => {
    writeFileSync(`./${name}/.prettierrc.js`, prettierrc, { encoding: 'utf-8' });
    const packageJson = readJsonFile(`./${name}/package.json`);
    packageJson.devDependencies['prettier'] = '^2.4.1';
    writeJsonFile(`./${name}/package.json`, packageJson);
};
export const handleShellShDelete = (name) => {
    unlinkSync(`./${name}/build.sh`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxfYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL21vZGVsX2EudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUduRCxNQUFNLENBQUMsT0FBTyxXQUFXLEdBQWM7SUFDckMsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNmLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixLQUFLLEVBQUUsUUFBUTtRQUNmLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDakIsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsK0JBQStCO1FBQ3hDLElBQUksRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxpQkFBaUI7UUFDL0QsV0FBVyxFQUFFLDJDQUEyQztRQUN4RCxJQUFJLEVBQUUsVUFBVTtRQUNoQixPQUFPLEVBQUU7WUFDUDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsUUFBUTthQUNoQjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsVUFBVTtnQkFDakIsS0FBSyxFQUFFLFVBQVU7YUFDbEI7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDakIsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsaUNBQWlDO1FBQzFDLElBQUksRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxpQkFBaUI7UUFDL0QsV0FBVyxFQUFFLDJDQUEyQztRQUN4RCxJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUNqRCxhQUFhLENBQUMsS0FBSyxJQUFJLGVBQWUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN6RSxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQWMsS0FBSyxJQUFJLGVBQWUsQ0FBQyxDQUFDO0lBQ3hFLFdBQVcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ2pELGFBQWEsQ0FBQyxLQUFLLElBQUksZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7SUFDbkQsYUFBYSxDQUFDLEtBQUssSUFBSSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM3RSxNQUFNLFdBQVcsR0FBRyxZQUFZLENBQWMsS0FBSyxJQUFJLGVBQWUsQ0FBQyxDQUFDO0lBQ3hFLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ25ELGFBQWEsQ0FBQyxLQUFLLElBQUksZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7SUFDbEQsVUFBVSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUMifQ==