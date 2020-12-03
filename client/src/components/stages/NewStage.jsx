import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import '../../styles/index.css';
import './stage.css';

const NewStage = () => {
  const [stageData, setStageData] = useState(null);
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/packages', stageData);
    swal('Stage saved!', { icon: 'success' });
    history.push('/dashboard/stages');
  };
  const handleChange = async (event) => {
    setStageData({ ...stageData, [event.target.name]: event.target.value });
  };
  return (
    <div className="new-stage-full">
      <div>
        <form name="new-package" onSubmit={handleFormSubmit}>
          <div className="new-stage-container">
            <input
              className="stage-name"
              cols="75"
              rows="10"
              name="name"
              type="text"
              placeholder="Enter Stage Name"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="new-stage-dimensions-box">
            <div className="new-stage-dimensions">
              <h3 className="dash-h3">Stage Dimensions (ft.) </h3>
            </div>
            <div className="new-stage-area">
              <label for="stage-width">Width</label>
              <input
                className="stage-width"
                id="stage-width"
                type="number"
                name="width"
                onChange={handleChange}
              ></input>
              <label for="stage-depth">Depth</label>
              <input
                className="stage-height"
                id="stage-depth"
                type="number"
                name="depth"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="new-stage-place">
            <label
              className="outdoor-checkbox-label"
              // for="outdoor-checkbox"
              // style={{ paddingTop: '8px' }}
              // className="text-xl"
            >
              Outdoor
            </label>
            <input
              className="outdoor-checkbox-input"
              type="checkbox"
              name="isOutdoor"
              id="outdoor-checkbox"
              value="true"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="comment-box">
            <div className="new-stage-comments-title">
              <label className="dash-h3">Comments</label>
            </div>
            <div className="new-stage-comments">
              <textarea
                id="comments-text-area"
                name="comments"
                rows="5"
                cols="75"
                placeholder="Comments about this stage"
                onChange={handleChange}
              />
              <br />
            </div>
          </div>
          <br />
          <div className="new-stage-button-box">
            <button className="new-stage-button" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewStage;
