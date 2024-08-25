// src/components/Graph.ts
import * as d3 from 'd3';

class Graph {
  private svg: any;
  
  constructor(containerId: string) {
    this.svg = d3.select(`#${containerId}`).append('svg')
      .attr('width', '100%')
      .attr('height', '500');
  }
  
  addBranch(name: string): void {
    // логіка для додавання гілки
  }
  
  render(): void {
    // логіка для рендерингу графу
  }
}

export default Graph;