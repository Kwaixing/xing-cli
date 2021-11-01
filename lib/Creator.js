export default class Creator {
    constructor() {
        this.defaultQuestion = {
            name: 'features',
            message: 'check feature of your repo',
            pageSize: 10,
            type: 'list',
            choices: [],
        };
        this.questions = [];
    }
    getAllQuestions() {
        this.questions.forEach((item) => {
            const originalWhen = item.when || (() => true);
            item.when = (ans) => originalWhen(ans);
        });
        return [this.defaultQuestion, ...this.questions];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9DcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sT0FBTztJQUcxQjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDckIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsT0FBTyxFQUFFLDRCQUE0QjtZQUNyQyxRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzlCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YifQ==