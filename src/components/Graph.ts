import * as d3 from 'd3';
import Branch from './Branch';
import Task from './Task';
import Milestone from './Milestone';

class Graph {
  private svg: any;
  private branches: Branch[];

  constructor(containerId: string) {
    this.svg = d3
      .select(`#${containerId}`)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '500');
    this.branches = [];
  }

  addBranch(name: string): Branch {
    const branch = new Branch(name);
    this.branches.push(branch);
    return branch;
  }

  addTaskToBranch(branchName: string, taskTitle: string): void {
    const branch = this.branches.find((b) => b.name === branchName);
    if (branch) {
      const task = new Task(taskTitle);
      branch.addTask(task);
    } else {
      console.error(`Branch with name ${branchName} not found`);
    }
  }

  addMilestoneToBranch(
    branchName: string,
    milestoneTitle: string,
    date: Date
  ): void {
    const branch = this.branches.find((b) => b.name === branchName);
    if (branch) {
      const milestone = new Milestone(milestoneTitle, date);
      branch.addMilestone(milestone);
    } else {
      console.error(`Branch with name ${branchName} not found`);
    }
  }

  render(): void {
    console.log('Rendering graph with branches:', this.branches);
    this.svg.selectAll('*').remove(); // Очищення попереднього вмісту

    this.branches.forEach((branch, index) => {
      const group = this.svg
        .append('g')
        .attr('transform', `translate(50, ${50 + index * 100})`);

      // Відображення гілки
      group.append('text').text(branch.name).attr('x', 0).attr('y', 0);

      // Відображення задач
      branch.tasks.forEach((task, taskIndex) => {
        group
          .append('circle')
          .attr('cx', 150 + taskIndex * 50)
          .attr('cy', 0)
          .attr('r', 10)
          .attr('fill', 'blue');

        group
          .append('text')
          .text(task.title)
          .attr('x', 150 + taskIndex * 50)
          .attr('y', 20);
      });

      // Відображення майлстоунів
      branch.milestones.forEach((milestone, milestoneIndex) => {
        group
          .append('rect')
          .attr('x', 300 + milestoneIndex * 50)
          .attr('y', -10)
          .attr('width', 20)
          .attr('height', 20)
          .attr('fill', 'red');

        group
          .append('text')
          .text(milestone.title)
          .attr('x', 300 + milestoneIndex * 50)
          .attr('y', 30);
      });
    });
  }
}

export default Graph;
