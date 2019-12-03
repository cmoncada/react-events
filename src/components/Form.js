import React, { Component } from "react";
import { CategoriesConsumer } from "../context/CategoriesContext";
import { EventsConsumer } from "../context/EventsContext";

class Form extends Component {
  state = {
    name: "",
    category: ""
  };

  getEventData = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <EventsConsumer>
        {value => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                value.getEvents(this.state);
                
              }}
            >
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Search your event
                </legend>
              </fieldset>

              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    name="name"
                    className="uk-input"
                    type="text"
                    placeholder="event name o city event"
                    onChange={this.getEventData}
                  />
                </div>

                <div className="uk-margin" uk-margin="true">
                  <select
                    className="uk-select"
                    name="category"
                    onChange={this.getEventData}
                  >
                    <option value=""> Select your category </option>
                    <CategoriesConsumer>
                      {value => {
                        return value.categories.map(category => (
                          <option
                            key={category.id}
                            value={category.id}
                            data-uk-select
                          >
                            {category.name_localized}
                          </option>
                        ));
                      }}
                    </CategoriesConsumer>
                  </select>
                </div>

                <div>
                  <input
                    type="submit"
                    className="uk-button uk-button-danger"
                    value="Search events"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </EventsConsumer>
    );
  }
}

export default Form;
