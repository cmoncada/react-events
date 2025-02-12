import React from "react";
import { EventsConsumer } from "../context/EventsContext";

import Event from "../components/Event";


function ListEvents() {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventsConsumer>
                {(value) => {
                    return value.events.map(event => (
                        <Event
                            key={event.id}
                            event={event}
                        />
                    ))
                }}
            </EventsConsumer>
        </div>
    )
}

export default ListEvents;
