import UpcomingEvent from "/upcomingevent.json";
function Upcoming() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Upcoming Events</h2>
      <p>
        Join us for these exciting opportunities to make a difference in your
        community.
      </p>
      <div>
        <div>
          <ul>
            {UpcomingEvent.map((eventupcoming) => {
              return (
                <li key={eventupcoming.id}>
                  {eventupcoming.img}
                  {eventupcoming.type}
                  {eventupcoming.date}
                  {eventupcoming.time}
                  {eventupcoming.location}
                  {eventupcoming.button_text}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p>Filter & Sort Events</p>
          <div>
            <button>Health</button>
            <button>Eduction</button>
            <button>Environmental</button>
            <button>Animal Welfare</button>
          </div>
          <label>Location</label>
          <select>
            <option value="">All Location</option>
          </select>
          <label>Event Type</label>
          <select>
            <option value="">All Types</option>
          </select>
          <label>Date Range</label>
          <input type="date" name="date" id="date" />
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
