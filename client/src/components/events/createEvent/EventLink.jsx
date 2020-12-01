import React from 'react';
import { useClipboard } from 'use-clipboard-hook';
import swal from 'sweetalert';
import '../../../styles/index.css';

const EventLink = ({ display, eventURL }) => {
  let showLinkClassName = display ? 'block' : 'hidden';

  const { ref, copy } = useClipboard({
    onSuccess: (text) =>
      swal(`Copied event link!`, {
        icon: 'success',
        buttonColor: '#15438c'
      })
  });

  return (
    <div className={showLinkClassName}>
      <div>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center "></div>
          <input
            readonly
            type="text"
            id="price"
            className="focus:outline-none text-xl"
            value={eventURL}
            ref={ref}
            style={{
              backgroundColor: '#FFF7F1',
              textAlign: 'center',
              width: '100%',
              marginBottom: '1.5rem',
              justifySelf: 'center'
            }}
          />
          <div className="z-99 clipboard-button cursor-pointer absolute inset-y-0 right-0 flex items-center ">
            <svg
              onClick={copy}
              className="w-10 h-10 mb-6 cursor-pointer "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="clipboard-svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLink;
