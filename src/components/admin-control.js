import React from "react";
import Users from "../components/admin_components/users";
import Survey from "../components/admin_components/survey";
import Events from "../components/admin_components/events";

const Landing = () => {
  return (
    <div>
      <div class="row">
        <div class="col-2">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              class="nav-link active"
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
              class="nav-link"
              id="events-tab"
              data-toggle="pill"
              href="#events"
              role="tab"
              aria-controls="#events"
              aria-selected="false"
            >
              Profile
            </a>
            <a
              class="nav-link"
              id="surveys-tab"
              data-toggle="pill"
              href="#surveys"
              role="tab"
              aria-controls="surveys"
              aria-selected="false"
            >
              Messages
            </a>
          </div>
        </div>
        <div class="col-10">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="users"
              role="tabpanel"
              aria-labelledby="users-tab"
            >
              <Users />
            </div>
            <div
              class="tab-pane fade"
              id="events"
              role="tabpanel"
              aria-labelledby="events-tab"
            >
              <Events />
            </div>
            <div
              class="tab-pane fade"
              id="surveys"
              role="tabpanel"
              aria-labelledby="surveys-tab"
            >
              <Survey />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Usage
export default Landing;
