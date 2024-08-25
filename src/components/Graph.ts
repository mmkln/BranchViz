// src/components/Graph.ts
import * as d3 from 'd3';
import Branch from './Branch';
import Task from './Task';
import Milestone from './Milestone';
import { Branch as BranchInterface } from './interfaces';

class Graph {
  private svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>;
  private branches: Branch[];

  constructor(containerId: string) {
    // Очищення попереднього вмісту контейнера
    d3.select(`#${containerId}`).selectAll('*').remove();

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

  render(): void {
    console.log('Rendering graph with branches:', this.branches);
    this.svg.selectAll('*').remove(); // Очищення попереднього вмісту

    const branchGroups = this.svg
      .selectAll<SVGGElement, Branch>('g.branch')
      .data(this.branches)
      .enter()
      .append('g')
      .attr('class', 'branch')
      .attr(
        'transform',
        (d: Branch, i: number) => `translate(50, ${50 + i * 100})`
      );

    // Відображення гілок
    branchGroups
      .append('text')
      .text((d: Branch) => d.name)
      .attr('x', 0)
      .attr('y', 0)
      .attr('font-size', '16px')
      .attr('font-weight', 'bold');

    // Відображення задач і ліній зв'язку
    branchGroups.each(function (branch: Branch) {
      const taskSelection = d3
        .select(this)
        .selectAll<SVGCircleElement, Task>('circle.task')
        .data(branch.tasks)
        .enter()
        .append('circle')
        .attr('class', 'task')
        .attr('cx', (d: Task, i: number) => 100 + i * 80)
        .attr('cy', 0)
        .attr('r', 10)
        .attr('fill', 'blue');

      // Додавання ліній зв'язку для задач
      taskSelection.each(function (d, i) {
        d3.select(this.parentNode as SVGGElement) // Використовуємо привід типу тут
          .append('line')
          .attr('x1', 0)
          .attr('y1', 0)
          .attr('x2', 100 + i * 80)
          .attr('y2', 0)
          .attr('stroke', 'black')
          .attr('stroke-width', 1);
      });

      // Додати текст для задач
      d3.select(this)
        .selectAll<SVGTextElement, Task>('text.task-label')
        .data(branch.tasks)
        .enter()
        .append('text')
        .attr('class', 'task-label')
        .attr('x', (d: Task, i: number) => 100 + i * 80)
        .attr('y', 20)
        .text((d: Task) => d.title)
        .attr('font-size', '12px');

      // Відображення майлстоунів і ліній зв'язку
      const milestoneSelection = d3
        .select(this)
        .selectAll<SVGRectElement, Milestone>('rect.milestone')
        .data(branch.milestones)
        .enter()
        .append('rect')
        .attr('class', 'milestone')
        .attr('x', (d: Milestone, i: number) => 300 + i * 80)
        .attr('y', -10)
        .attr('width', 20)
        .attr('height', 20)
        .attr('fill', 'red');

      // Додавання ліній зв'язку для майлстоунів
      milestoneSelection.each(function (d, i) {
        d3.select(this.parentNode as SVGGElement) // Використовуємо привід типу тут
          .append('line')
          .attr('x1', 0)
          .attr('y1', 0)
          .attr('x2', 300 + i * 80 + 10) // центр квадрата
          .attr('y2', 0)
          .attr('stroke', 'black')
          .attr('stroke-width', 1);
      });

      // Додати текст для майлстоунів
      d3.select(this)
        .selectAll<SVGTextElement, Milestone>('text.milestone-label')
        .data(branch.milestones)
        .enter()
        .append('text')
        .attr('class', 'milestone-label')
        .attr('x', (d: Milestone, i: number) => 300 + i * 80 + 10) // центр квадрата
        .attr('y', 30)
        .text((d: Milestone) => d.title)
        .attr('font-size', '12px');
    });
  }
}

export default Graph;
