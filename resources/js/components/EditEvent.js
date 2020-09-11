import React from "react";
import EventModal from "./EventModal";

function EditEvent({ id, event, callback = () => {} }) {

    const modalCallback = event => {
		axios.put("/api/events/", event).then(callback);
    };

    return (
        <React.Fragment>
            <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target={"#" + id}
            >
				Edit event
                <i className="fas fa-plus ml-1"></i>
            </button>
            <EventModal id={id} title="Add Event" callback={modalCallback} />
        </React.Fragment>
    );
}

export default EditEvent;

