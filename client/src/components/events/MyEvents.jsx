import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import '../../styles/index.css';

const MyEvents = () => {
  const [events, setEvents] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  const getEvents = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/events`
      });
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvents();
  }, [isUpdated]);

  return (
    <div
      className="saved-event-area"
      // style={{ marginTop: '4rem' }}
    >
      {events?.map((event1) => {
        return (
          <div className="saved-event-card-area">
            <div

              className="flex p-2 m-4 w-full justify-center saved-event-inner-card-area"
              style={{
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
                backgroundColor: '#FFF7F1',
                marginBottom: '.4rem',
                borderLeft: '8px solid #A6271F',
                maxWidth: '700px',
                padding: '20px',
                textAlign: 'center'
              }}

            >
              <div className="saved-event-inner-card-text-area">
                <h2 className="dash-h2">{event1?.eventTitle}</h2>
                <br />
                <span className="saved-event-card-custom-date">
                  {moment(event1?.eventDate).format('MMMM Do YYYY')}
                </span>
                <br />
                { <span
                  className="saved-event-has-been-opened-text"
                  style={
                    event1?.hasBeenOpened
                      ? { color: 'green', fontWeight: '600' }
                      : { color: 'red', fontWeight: '600' }
                  }
                >
                  {event1?.hasBeenOpened ? 'Opened by Artist' : 'Not Opened'}
                </span> */}
                <br />
              </div>
              <div className="saved-event-card-last"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MyEvents;
