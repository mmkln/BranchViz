class Task {
  title: string;
  status: string;

  constructor(title: string, status: string = 'To Do') {
    this.title = title;
    this.status = status;
  }

  setStatus(status: string): void {
    this.status = status;
  }
}

export default Task;
