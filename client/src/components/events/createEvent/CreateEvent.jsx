import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventLink from './EventLink';
import './createEvent.css';
import swal from 'sweetalert';
import '../../../styles/index.css';

const CreateEvent = ({ handleClose, show }) => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [showLinkClassName, setShowLinkClassName] = useState(false);
  const [eventURL, setEventURL] = useState('');
  const [showModal, setShowModal] = useState(false);

  const getPackages = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/packages`
      });
      setPackages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPackages();
  }, [showModal]);

  const handleSelectPackage = (packageId) => {
    setSelectedPackage(packageId);
  };

  const handleGenerateEvent = () => {
    if (!selectedPackage) {
      swal('Please select a stage', { icon: 'warning' });
    }
    if (selectedPackage) {
      axios
        .post('/api/events', {
          data: { eventTitle, eventDate, selectedPackage }
        })
        .then((results) =>
          setEventURL(
            `http://welcome-backstage.herokuapp.com/artist/${results.data._id}`
          )
        );
      setShowLinkClassName(true);
    }
  };
  return (
    <>
      {!showModal && (
        <button
          type="button"
          style={{
            position: 'relative',
            left: '59vw',
            margin: '0px',
            top: '27vh',
            height: '5rem',
            width: '15.5rem',
            border: '1px solid white',
            transition: 'all .15s ease'
          }}
          onClick={() => setShowModal(true)}
          className="block btn-1 text-2xl red-button"
        >
          Create Event
        </button>
      )}

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none"
            style={{ position: 'fixed', right: '30', top: '30' }}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                style={{
                  backgroundColor: 'white',
                  width: '700px',
                  padding: '30px 50px'
                }}
                className="border-0 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none"
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    New Event
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    id="event-title"
                    type="text"
                    placeholder="Event Title"
                    onInput={(event) => setEventTitle(event.target.value)}
                    style={{
                      width: '45%',
                      height: '2rem',
                      textAlign: 'center',
                      backgroundColor: '#FFF7F1',
                      border: '1px solid black',
                      borderRadius: '5px'
                    }}
                  />

                  <input
                    id="date-select"
                    type="date"
                    onInput={(event) => setEventDate(event.target.value)}
                    style={{
                      width: '45%',
                      textAlign: 'center',
                      height: '2rem',
                      margin: '1rem',
                      backgroundColor: '#FFF7F1',
                      border: '1px solid black',
                      borderRadius: '5px'
                    }}
                  />

                  <h2 className="text-xl">Select Stage</h2>

                  {packages.map((package1) => {
                    return (
                      <div
                        key={package1?._id}
                        className={
                          selectedPackage === package1?._id
                            ? 'bg-blue-100 individual-package-container shadow-md mb-4 hover:shadow-lg flex justify-center items-center selected-pkg'
                            : 'individual-package-container shadow-md mb-4 hover:shadow-lg flex justify-center items-center'
                        }
                        onClick={() => handleSelectPackage(package1?._id)}
                      >
                        <span className="w-48 text-center text-xl">
                          {package1?.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/*footer*/}
                <div className="flex flex-col items-center justify-center p-6 border-t border-solid border-gray-300 rounded-b">
                  <div>
                    <button
                      className="btn-2"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      onClick={handleGenerateEvent}
                      type="button"
                      className="btn-1"
                    >
                      Generate Event Link
                    </button>
                  </div>

                  <EventLink display={showLinkClassName} eventURL={eventURL} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CreateEvent;
