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
  }, [show]);

  const handleSelectPackage = (packageId) => {
    setSelectedPackage(packageId);
  };

  let showHideClassName = show ? 'block' : 'hidden';

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
    <div className={showHideClassName}>
      <div
        class="entire-modal  inset-0 overflow-y-auto"
        id="parent-parent-parent"
      >
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          id="parent-parent"
        >
          <div
            class="inset-0 transition-opacity"
            id="background-overlay-parent"
            aria-hidden="true"
          >
            <div
              class="absolute inset-0 bg-gray-500  opacity-75"
              id="background-overlay"
            ></div>
          </div>

          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            class="entire-modal-inner-container inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            style={{ minWidth: '70%' }}
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="modal-container flex flex-col items-center w-full  mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    New Event{' '}
                  </h3>
                  <div class="w-full flex flex-col items-center mt-2 ">
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

                    <h2 class="text-xl">Select Stage</h2>

                    <div
                      className="package-select overflow-auto w-full h-44 flex justify-center"
                      id="package-select"
                    >
                      {packages.map((package1) => {
                        return (
                          <div
                            key={package1?._id}
                            class={
                              selectedPackage === package1?._id
                                ? 'bg-blue-100 individual-package-container shadow-md mb-4 hover:shadow-lg flex justify-center items-center'
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
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex justify-center"
              style={{
                position: 'relative',
                bottom: '2rem'
              }}
            >
              <button onClick={handleClose} type="button" class="btn-2">
                Close
              </button>
              <button onClick={handleGenerateEvent} type="button" class="btn-1">
                Generate Event Link
              </button>
            </div>
            <div>
              <EventLink display={showLinkClassName} eventURL={eventURL} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
