import React, { useState } from "react";

function EventRemovalButton({ event, callback }) {
    const [disabled, setDisabled] = useState(false);

    const remove = () => {
        setDisabled(true);
        axios.delete(`/api/events/${event.id}`).finally(callback);
    };

    return (
        <React.Fragment>
            <button
                onClick={remove}
                className="btn btn-link text-danger btn-sm"
                disabled={disabled}
            >
                <i className="fas fa-trash"></i>
            </button>
        </React.Fragment>
    );
}

export default EventRemovalButton;
