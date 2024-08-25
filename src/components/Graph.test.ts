import Graph from './Graph';

test('Graph створюється успішно', () => {
  const graph = new Graph('container');
  expect(graph).toBeInstanceOf(Graph);
});
