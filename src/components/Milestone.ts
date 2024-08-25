// src/components/Milestone.ts
import { Milestone as MilestoneInterface } from './interfaces';

class Milestone implements MilestoneInterface {
  title: string;
  date: Date;

  constructor(title: string, date: Date) {
    this.title = title;
    this.date = date;
  }
}

export default Milestone;
