const EventList = ({ events }) => (
  <div>
    <h3>Events</h3>
    <ul>
      {events.map((event) => (<li key={`${event.id}-${event.title}`}>[{event.task.title}] {event.date.toString()}</li>))}
    </ul>
  </div>
)

export default EventList;
