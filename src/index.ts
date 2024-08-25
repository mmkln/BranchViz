// src/index.ts
import Graph from './components/Graph';
import Task from './components/Task';
import Milestone from './components/Milestone';

// Ініціалізація графу
const graph = new Graph('graph-container');

// Додавання основної гілки
const mainBranch = graph.addBranch('Main Project');
mainBranch.addTask(new Task('Task 1'));
mainBranch.addTask(new Task('Task 2'));
mainBranch.addMilestone(new Milestone('Milestone 1', new Date('2024-01-15')));

// Додавання додаткової гілки
const secondaryBranch = graph.addBranch('Secondary Project');
secondaryBranch.addTask(new Task('Secondary Task 1'));
secondaryBranch.addTask(new Task('Secondary Task 2'));
secondaryBranch.addMilestone(
  new Milestone('Secondary Milestone 1', new Date('2024-02-20'))
);

// Додавання ще однієї гілки для тестування
const experimentalBranch = graph.addBranch('Experimental Project');
experimentalBranch.addTask(new Task('Experimental Task 1'));
experimentalBranch.addTask(new Task('Experimental Task 2'));
experimentalBranch.addTask(new Task('Experimental Task 3'));
experimentalBranch.addMilestone(
  new Milestone('Experimental Milestone 1', new Date('2024-03-05'))
);
experimentalBranch.addMilestone(
  new Milestone('Experimental Milestone 2', new Date('2024-04-10'))
);

// Рендеринг графу
graph.render();
