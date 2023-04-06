import { useState } from "react";
import './App.css';
import Task from './model/Task';
import Category from './model/Category';
import Event from './model/Event';
import Header from './common/Header';
import TaskList from './tasks/TaskList';
import CategoryList from "./categories/CategoryList";
import EventList from "./events/EventList";

const App = () => {
  const [currentSection, setCurrentSection] = useState("tasks")

  const [categories, setCategories] = useState([
    new Category(1, "Planning"),
    new Category(2, "On the day"),
    new Category(3, "Afterwards"),
  ]);

  const [tasks, setTasks] = useState([
    new Task(1, categories[0], "Book the venue"),
    new Task(2, categories[0], "Invite the guests"),
    new Task(3, categories[1], "Cook food"),
    new Task(4, categories[1], "Play music"),
    new Task(5, categories[2], "Clean up"),
    new Task(6, categories[2], "Plan for next year!"),
  ]);

  const [events, setEvents] = useState([
    new Event(1, tasks[0], new Date("2022-10-01")),
    new Event(2, tasks[1], new Date("2022-10-10")),
    new Event(3, tasks[2], new Date("2022-12-02")),
    new Event(4, tasks[3], new Date("2022-12-02")),
    new Event(5, tasks[4], new Date("2022-12-03")),
    new Event(6, tasks[5], new Date("2023-01-01")),
  ]);

  return (
    <div id="app">
      <Header setCurrentSection={setCurrentSection} />
      <div id="content">
        {currentSection === "categories" && <CategoryList categories={categories} />}
        {currentSection === "tasks" && <TaskList tasks={tasks} />}
        {currentSection === "events" && <EventList events={events} />}
      </div>
    </div>
  );
};

export default App;
