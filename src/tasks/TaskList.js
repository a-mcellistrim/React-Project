const TaskList = ({ tasks }) => (
  <div>
    <h3>Tasks</h3>
    <ul>
      {tasks.map((task) => (<li key={`${task.id}-${task.title}`}>[{task.category.title}] {task.title}</li>))}
    </ul>
  </div>
)

export default TaskList;
