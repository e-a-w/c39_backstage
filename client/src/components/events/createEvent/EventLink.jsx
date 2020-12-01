import React from 'react';
import { useClipboard } from 'use-clipboard-hook';
import swal from 'sweetalert';
import clipboard from '../../../assets/clipboard.png';
import '../../../styles/index.css';

const EventLink = ({ display, eventURL }) => {
  const showLinkClassName = display ? 'block' : 'none';

  const { ref, copy } = useClipboard({
    onSuccess: (text) =>
      swal(`Copied event link!`, {
        icon: 'success',
        buttonColor: '#15438c'
      })
  });

  return (
    <div className={showLinkClassName} className="flex w-full justify-center">
      <input
        readonly
        type="text"
        id="price"
        className="focus:outline-none text-sm"
        value={eventURL}
        ref={ref}
        style={{
          backgroundColor: '#FFF7F1',
          textAlign: 'center',
          height: '35px',
          width: '80%',
          overflow: 'scroll',
          marginBottom: '1.5rem',
          justifySelf: 'center'
        }}
      />
      <img
        style={{ cursor: 'pointer', height: '30px', display: 'inline-flex' }}
        onClick={copy}
        src={clipboard}
        alt="clipboard"
      />
    </div>
  );
};

export default EventLink;
