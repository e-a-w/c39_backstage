import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';
import '../styles/index.css';

const AddImage = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    const avatar = new FormData();
    avatar.append('avatar', image, image?.name);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secure_url });
      swal('Sweet!', 'Your image has been updated!', 'success');
    } catch (error) {
      swal('Error', 'Oops, something went wrong.');
    }
  };
  return (
    <div>
      <div className="mt-4">
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <label for="image">
            <input
              type="file"
              name="image"
              id="image"
              style={{ display: 'none' }}
              onChange={handleImageSelect}
            />
            <img
              src={
                preview
                  ? preview
                  : currentUser?.avatar
                  ? currentUser.avatar
                  : 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'
              }
              alt="profile"
              width={250}
              height={250}
              roundedCircle
              className="the-profile-image"
            />
          </label>
          <button
            type="submit"
            size="sm"
            className="save-image"
            style={{
              color: 'white',
              padding: '8px',
              fontSize: '1.25rem',
              paddingLeft: '14px',
              paddingRight: '14px'
            }}
          >
            Save+
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddImage;
