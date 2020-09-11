import React, { useState } from "react";
import Fuse from "fuse.js";

import useEvents from "../hooks/useEvents";

import AddEvent from "./AddEvent";
import EventModal from "./EventModal";
import EventRemovalButton from "./EventRemovalButton";

function EventManager() {
    const [events, refresh] = useEvents();

    const [selectedEvent, setSelectedEvent] = useState({});

    const [search, setSearch] = useState("");

    let filteredEvents = search
        ? new Fuse(events, {
              keys: ["theme", "address", "batch", "date"]
          })
              .search(search)
              .map(({ item }) => item)
        : events;

    const handleUpdate = event => {
        axios.put(`api/events/${event.id}`, event);
        refresh();
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col py-4">
                    <h2>Event Manager</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-lg-8">
                    <div id="search">
                        <div className="form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="search"
                                    className="form-control"
                                    placeholder="Filter events..."
                                    onChange={event =>
                                        setSearch(event.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col text-right">
                    <AddEvent callback={refresh} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {search ? (
                        <div className="text-muted text-left">
                            Showing results for:{" "}
                            <i className="text-success">{search}</i>
                        </div>
                    ) : (
                        <div className="text-muted text-left">
                            Showing all events:
                        </div>
                    )}
                </div>
            </div>
            <div className="row"> <div className="col"> {filteredEvents.length ? (
                        <table className="table table-borderless table-hover my-3">
                            <thead>
                                <tr className="text-primary">
                                    <th>#</th>
                                    <th>Theme</th>
                                    <th>Address</th>
                                    <th>Date and time</th>
                                    <th>Total capacity</th>
                                    <th>Batch</th>
                                    <th className="text-muted">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEvents.map(event => (
                                    <tr key={event.id}>
                                        <td>{event.id}</td>
                                        <td>{event.theme}</td>
                                        <td>{event.address}</td>
                                        <td>{event.date}</td>
                                        <td>{event.totalCapacity}</td>
                                        <td>{event.batch}</td>
                                        <td>
                                            <button
                                                className="btn btn-link btn-sm"
                                                data-toggle="modal"
                                                data-target="#edit-event"
                                                onClick={() => {
                                                    setSelectedEvent(event);
                                                }}
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <EventRemovalButton
                                                event={event}
                                                callback={refresh}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="small text-danger">
                            {search
                                ? "No events were found!"
                                : "No events registered yet!"}
                        </div>
                    )}
                </div>
            </div>
            <EventModal
                id="edit-event"
                event={selectedEvent}
                title="Edit event"
                callback={handleUpdate}
            />
        </React.Fragment>
    );
}

export default EventManager;
