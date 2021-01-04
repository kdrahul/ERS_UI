                  <form id="eventForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    New Event
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Event Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="eventName"
                    />
                    <label> Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="eventDesc"
                    />
                    <label>Max. Participants</label>
                    <input
                      type="number"
                      className="form-control"
                      id="maxPart"
                    />
                    <label>Entry Fee</label>
                    <input
                      type="number"
                      className="form-control"
                      id="entryfee"
                    />
                    <label>Prize Money</label>
                    <input
                      type="number"
                      className="form-control"
                      id="prizeMoney"
                    />
                    <label>Date and Time</label>
                    <input
                      type="date"
                      className="form-control"
                      id="eventTime"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </form>
