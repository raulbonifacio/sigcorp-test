import React from "react";
import EventModal from "./EventModal";

function AddEvent({ callback = () => {} }) {

    const id = "add-event";

    const modalCallback = event => {
		axios.post("/api/events/", event).then(callback);
    };

    return (
        <React.Fragment>
            <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target={"#" + id}
            >
                Add Event
                <i className="fas fa-plus ml-1"></i>
            </button>
            <EventModal id={id} title="Add Event" callback={modalCallback} />
        </React.Fragment>
    );
}

export default AddEvent;
