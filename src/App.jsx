import { useState } from "react";
import './App.css';
import Task from './tasks/Task';
import Category from './categories/Category';
import Event from './events/Event';
import Header from './common/Header';
import TasksPage from './tasks/TasksPage';
import CategoriesPage from "./categories/CategoriesPage";
import EventsPage from "./events/EventsPage";

/**
 * The React component representing the app
 * @returns How the app should be rendered
 */
const App = () => {
  // State for storing which page the user currently has selected
  const [currentPage, setCurrentPage] = useState("tasks")

  // The below states are the actual app data
  // They need to be defined here as multiple pages use them

  // State for storing the current list of categories
  const [categories, setCategories] = useState([
    new Category(1, "Planning"),
    new Category(2, "On the day"),
    new Category(3, "Afterwards"),
  ]);

  // State for storing the current list of tasks
  const [tasks, setTasks] = useState([
    new Task(1, categories[0], "Book the venue"),
    new Task(2, categories[0], "Invite the guests"),
    new Task(3, categories[1], "Cook food"),
    new Task(4, categories[1], "Play music"),
    new Task(5, categories[2], "Clean up"),
    new Task(6, categories[2], "Plan for next year!"),
  ]);

  // State for storing the current list of events
  const [events, setEvents] = useState([
    new Event(1, tasks[0], new Date("2022-10-01")),
    new Event(2, tasks[1], new Date("2022-10-10")),
    new Event(3, tasks[2], new Date("2022-12-02")),
    new Event(4, tasks[3], new Date("2022-12-02")),
    new Event(5, tasks[4], new Date("2022-12-03")),
    new Event(6, tasks[5], new Date("2023-01-01")),
  ]);

  // This component only needs to render the Header component and a page component (depending on which has been selected)
  return (
    <div id="app">
      <Header setCurrentPage={setCurrentPage} />
      <div id="content">
        {/* Check the current selection and render the correct page */}
        {currentPage === "categories" && <CategoriesPage categories={categories} />}
        {currentPage === "tasks" && <TasksPage tasks={tasks} />}
        {currentPage === "events" && <EventsPage events={events} />}
      </div>
    </div>
  );
};

// Allows other files to use the above App component
export default App;
