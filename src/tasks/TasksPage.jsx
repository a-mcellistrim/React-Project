/**
 * The React component representing the tasks page
 * @param tasks - List of tasks from the App component
 * @returns How the tasks page should be rendered
 */
const TasksPage = ({ tasks }) => (
  <div>
    <h3>Tasks</h3>
    <ul>
      {/*
        Loop through all the tasks and display each one
        The key property must be unique for each list item (li) as it helps React render things efficiently
      */}
      {tasks.map((task) => (<li key={task.id}>[{task.category.title}] {task.title}</li>))}
    </ul>
  </div>
)

// Allows other files to use the above TasksPage component
export default TasksPage;
