import moment from "moment";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { PageHeader } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";

import eventsSchedule from "../../data/events/eventsSchedule";

const localizer = momentLocalizer(moment);

class Events extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>
              <FaCalendar />
              Events Calendar
            </PageHeader>
          </div>
        </div>
        <br />
        <br />
        <div className="calender-div" {...this.props}>
          <Calendar
            localizer={localizer}
            selectable
            popup
            events={eventsSchedule}
            defaultDate={new Date()}
            onSelectEvent={event => alert(event.title)}
          />
        </div>
      </div>
    );
  }
}

export default Events;
