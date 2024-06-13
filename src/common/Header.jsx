/**
 * The React component representing the app header (title & nav buttons)
 * @param setCurrentPage - Function to set the current page
 * @returns How the app header should be rendered
 */
const Header = ({ setCurrentPage }) => (
  <header>
    <h1>To Do Manager</h1>
      {/* When a user clicks one of the nav buttons, set the state in the App component */}
      <button onClick={() => setCurrentPage("categories")}>Categories</button>
      <button onClick={() => setCurrentPage("tasks")}>Tasks</button>
      <button onClick={() => setCurrentPage("events")}>Events</button>
  </header>
);

// Allows other files to use the above Header component
export default Header;
