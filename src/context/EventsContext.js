import React, { Component } from 'react';
import axios from "axios";


const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {

    token = "CXNRJAPROIQ7CNRCELGP";
    sortData = "date";

    state = {
        events: []
    };

    getEvents = async (query) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${query.name}&categories=${query.category}&sort_by=${this.sortData}&token=${this.token}&locale=en_US`;
        const events = await axios(url);

        this.setState({
            events: events.data.events
        })
    }

    render() {
        return (
            <EventsContext.Provider
                value={{
                    events: this.state.events,
                    getEvents: this.getEvents
                }}
            >
                {this.props.children}
            </EventsContext.Provider>
        )
    }
}

export default EventsProvider;
