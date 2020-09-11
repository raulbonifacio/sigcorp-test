import React, { useState, useEffect } from "react";

function EventModal({ title, id, event = {}, callback = () => {} }) {

    const [disabled, setDisabled] = useState(false);

    const [modalEvent, setModalEvent] = useState({});

    useEffect(() => {
        setModalEvent(event); 
    }, [event.id]);

    const handleChange = e => {
        setModalEvent({
            ...modalEvent,
            [e.target.name]: e.target.value
        });
    };

    const onClick = async event => {
        event.preventDefault();

        setDisabled(true);

        callback(modalEvent);

        $("#" + id).modal("toggle");
    };

    useEffect(() => {
        $("#" + id).on("show.bs.modal", () => setDisabled(false));
		setModalEvent({});
    }, []);

    return (
        <div id={id} className="modal fade" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5>{title}</h5>
                        <button
                            disabled={disabled}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form className="text-left">
                        <div className="modal-body">
                            <div className="form-row ">
                                <div className="form-group col-12">
                                    <label htmlFor="theme">Theme:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="theme"
                                        name="theme"
                                        onChange={handleChange}
                                        value={modalEvent.theme || ''}
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <label htmlFor="address">Address:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="address"
                                        name="address"
                                        onChange={handleChange}
                                        value={modalEvent.address || ''}
                                    />
                                </div>
                                <div className="form-group col-12">
                                    <label htmlFor="batch">Batch:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="batch"
                                        name="batch"
                                        onChange={handleChange}
                                        value={modalEvent.batch || ''}
                                    />
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="date">Date:</label>
                                    <input
                                        className="form-control"
                                        type="date"
                                        id="date"
                                        name="date"
                                        onChange={handleChange}
                                        value={modalEvent.date || ''}
                                    />
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="totalCapacity">
                                        Total capacity:
                                    </label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        min="1"
                                        step="1"
                                        id="totalCapacity"
                                        name="totalCapacity"
                                        onChange={handleChange}
                                        value={modalEvent.totalCapacity || ''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                disabled={disabled}
                                className="btn btn-secondary"
                                tabIndex="-1"
                                data-dismiss="modal"
                            >
                                Close
                                <i className="fas fa-times ml-1"></i>
                            </button>
                            <button
                                disabled={disabled}
                                className="btn btn-primary"
                                onClick={onClick}
                            >
                                Confirm
                                <i className="fas fa-check ml-1"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EventModal;
