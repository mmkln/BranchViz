import Graph from './components/Graph';

const graph = new Graph('graph-container');
const mainBranch = graph.addBranch('Main Project');
graph.addTaskToBranch('Main Project', 'Task 1');
graph.addMilestoneToBranch('Main Project', 'Milestone 1', new Date());

graph.render();
