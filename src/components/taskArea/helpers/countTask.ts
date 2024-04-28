import { ITaskApi } from '../interfaces/ITaskApi';
import { TaskCounterStatusType } from '../../taskCounter/interfaces/ITaskCounter';

export const countTasks = (
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number => {
    console.log("ass");
    
  if (!Array.isArray(tasks)) {
    return 0;
  }

  const totalTasks = tasks.filter((task) => task.status === status);

  return totalTasks.length;
};
