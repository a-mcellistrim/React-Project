const Header = ({ setCurrentSection }) => (
  <header>
    <h1>To Do Manager</h1>
      <button onClick={() => setCurrentSection("categories")}>Categories</button>
      <button onClick={() => setCurrentSection("tasks")}>Tasks</button>
      <button onClick={() => setCurrentSection("events")}>Events</button>
  </header>
);

export default Header;
