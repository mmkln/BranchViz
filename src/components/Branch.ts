// src/components/Branch.ts
import { Branch as BranchInterface, Task, Milestone } from './interfaces';
import TaskClass from './Task';
import MilestoneClass from './Milestone';

class Branch implements BranchInterface {
  name: string;
  tasks: TaskClass[];
  milestones: MilestoneClass[];

  constructor(name: string) {
    this.name = name;
    this.tasks = [];
    this.milestones = [];
  }

  addTask(task: TaskClass): void {
    this.tasks.push(task);
  }

  addMilestone(milestone: MilestoneClass): void {
    this.milestones.push(milestone);
  }
}

export default Branch;
