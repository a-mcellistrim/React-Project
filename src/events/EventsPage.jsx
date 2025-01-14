/**
 * The React component representing the events page
 * @param events - List of events from the App component
 * @returns How the events page should be rendered
 */
const EventsPage = ({ events }) => (
  <div>
    <h3>Events</h3>
    <ul>
      {/*
        Loop through all the events and display each one
        The key property must be unique for each list item (li) as it helps React render things efficiently
       */}
      {events.map((event) => (<li key={event.id}>[{event.task.title}] {event.date.toString()}</li>))}
    </ul>
  </div>
)

// Allows other files to use the above EventsPage component
export default EventsPage;
