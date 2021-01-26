import React from "react";
import Users from "../components/admin_components/users";
import Response from "../components/admin_components/response";
import Events from "../components/admin_components/events";
import Questions from "../components/admin_components/questions";

const Landing = () => {
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <div
                        className="nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <a
                            className="nav-link active"
                            id="users-tab"
                            data-toggle="pill"
                            href="#users"
                            role="tab"
                            aria-controls="users"
                            aria-selected="true"
                        >
                            Users
            </a>
                        <a
                            className="nav-link"
                            id="events-tab"
                            data-toggle="pill"
                            href="#events"
                            role="tab"
                            aria-controls="#events"
                            aria-selected="false"
                        >
                            Events
            </a>
                        <a
                            className="nav-link"
                            id="surveys-tab"
                            data-toggle="pill"
                            href="#surveys"
                            role="tab"
                            aria-controls="surveys"
                            aria-selected="false"
                        >
                            Survey Responses
            </a>
                        <a
                            className="nav-link"
                            id="question-tab"
                            data-toggle="pill"
                            href="#questions"
                            role="tab"
                            aria-controls="questions"
                            aria-selected="false"
                        >
                            Survey Questions
            </a>
                    </div>
                </div>
                <div className="col-10">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="users"
                            role="tabpanel"
                            aria-labelledby="users-tab"
                        >
                            <Users />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="events"
                            role="tabpanel"
                            aria-labelledby="events-tab"
                        >
                            <Events />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="surveys"
                            role="tabpanel"
                            aria-labelledby="surveys-tab"
                        >
                            <Response />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="questions"
                            role="tabpanel"
                            aria-labelledby="question-tab"
                        >
                            <Questions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// Usage
export default Landing;
