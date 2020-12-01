import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import '../../styles/index.css';

const MyStages = () => {
  const [packages, setPackages] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const history = useHistory();

  const getPackages = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/packages`,
        withCredentials: true
      });
      setPackages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPackages();
  }, [isUpdated]);

  const handlePackageDelete = async (packageId) => {
    try {
      setIsUpdated(!isUpdated);
      await axios.delete(`/api/packages/${packageId}`);
      swal('Stage deleted.', { icon: 'success' });
    } catch (error) {
      alert(error);
    }
  };

  const handleEditClick = (packageId) => {
    history.push(`/dashboard/stages/${packageId}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="dash-title-bar w-full flex justify-center">
        <div className="dash-title-bar-buttons flex justify-center">
          <button
            className="btn-4 text-2xl"
            style={{ height: '5rem', width: '15.5rem' }}
            onClick={() => history.push('/dashboard/new-stage')}
          >
            Add A New Stage
          </button>
        </div>
      </div>
      <div
        className="w-7/12"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {packages.map((package1) => {
          return (
            <div
              className="flex p-2 m-6 w-full justify-center my-event-card"
              style={{
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
                backgroundColor: '#FFF7F1',
                marginBottom: '.4rem',
                borderLeft: '8px solid #A6271F'
              }}
            >
              <br />

              <div className="flex justify-between">
                <div className="p-2 m-2 flex flex-col w-2/3 h-56 mb-6">
                  <h2 className="text-3xl">{package1?.name}</h2>
                  <br />
                  <span className="text-2xl">
                    {package1?.isOutdoor ? 'Outdoor' : 'Indoor'}
                  </span>
                  <span className="text-2xl my-4">{`Dimensions: ${package1?.width} x ${package1?.depth} ft.`}</span>

                  <p className="text-xl">
                    <em>{package1?.comments}</em>
                  </p>
                </div>

                <div className="saved-stage-btn-area">
                  <button
                    className="btn-2"
                    onClick={() => handleEditClick(package1?._id)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn-4"
                    onClick={() => handlePackageDelete(package1?._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyStages;
