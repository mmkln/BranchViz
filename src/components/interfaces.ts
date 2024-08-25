export interface Task {
  title: string;
  status: string;
}

export interface Milestone {
  title: string;
  date: Date;
}

export interface Branch {
  name: string;
  tasks: Task[];
  milestones: Milestone[];
}
