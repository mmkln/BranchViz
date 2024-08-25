// src/index.ts
import Graph from './components/Graph';
import Task from './components/Task';
import Milestone from './components/Milestone';

const graph = new Graph('graph-container');
const mainBranch = graph.addBranch('Main Project');

mainBranch.addTask(new Task('Task 1'));
mainBranch.addTask(new Task('Task 2'));

mainBranch.addMilestone(new Milestone('Milestone 1', new Date()));

graph.render();
