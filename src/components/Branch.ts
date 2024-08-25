class Branch {
  name: string;
  tasks: any[];
  milestones: any[];

  constructor(name: string) {
    this.name = name;
    this.tasks = [];
    this.milestones = [];
  }

  addTask(task: any): void {
    this.tasks.push(task);
  }

  addMilestone(milestone: any): void {
    this.milestones.push(milestone);
  }
}

export default Branch;
