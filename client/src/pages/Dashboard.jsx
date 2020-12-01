import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyStages from '../components/stages/MyStages';
import NewStage from '../components/stages/NewStage';
import MyEvents from '../components/events/MyEvents';
import CreateEvent from '../components/events/createEvent/CreateEvent';
import MyEquipment from '../components/equipment/MyEquipment';
import StageDetails from '../components/stages/StageDetails';
import AddImage from '../components/AddImage';
import '../styles/index.css';
import jennyBlock2 from '../assets/dashboard-images/jennyblock2.png';

class Dashboard extends React.Component {
  state = { show: false, image: null, preview: null, currentTab: 'equip' };

  render() {
    return (
      <div className="w-full">
        <div
          className="header-container bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url('${jennyBlock2}')`,
            height: '36vh'
          }}
        >
          <div className="profile-picture">
            <AddImage />
          </div>

          <CreateEvent show={this.state.show} />
        </div>
        <BrowserRouter>
          <div className="bg-gray-dark w-full">
            <div
              className="nav-div"
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                color: '#fff7f1',
                bottom: '4vh'
              }}
            >
              <nav
                className={!this.state.show ? 'flex' : 'hidden'}
                className="flex"
                style={{
                  width: '100%',
                  height: '4rem',
                  marginTop: '.5rem'
                }}
              >
                <Link to="/dashboard/events" className="w-1/3 react-link">
                  <h2
                    onClick={() => this.setState({ currentTab: 'events' })}
                    className={`h-full font-medium text-3xl hover:text-red text-center flex items-center justify-center ${
                      this.state.currentTab === 'events' ? 'selected-tab' : ' '
                    }`}
                    style={{
                      margin: '0px',
                      color: '#fff7f1',
                      fontWeight: '600'
                    }}
                  >
                    My Events
                  </h2>
                </Link>
                <br />
                <Link to="/dashboard/stages" className="w-1/3 react-link">
                  <h2
                    onClick={() => this.setState({ currentTab: 'stages' })}
                    className={`h-full font-medium text-3xl hover:text-red text-center flex items-center justify-center ${
                      this.state.currentTab === 'stages' ? 'selected-tab' : ' '
                    }`}
                    style={{
                      margin: '0px',
                      color: '#fff7f1',
                      fontWeight: '600'
                    }}
                  >
                    My Stages
                  </h2>
                </Link>
                <br />
                <Link to="/dashboard/equipment" className="w-1/3 react-link">
                  <h2
                    onClick={() => this.setState({ currentTab: 'equip' })}
                    className={`h-full font-medium text-3xl text-center flex items-center justify-center ${
                      this.state.currentTab === 'equip' ? 'selected-tab' : ' '
                    }`}
                    style={{
                      margin: '0px',
                      color: '#fff7f1',
                      fontWeight: '600'
                    }}
                  >
                    My Equipment{' '}
                  </h2>
                </Link>
                <br />
                <br />
              </nav>
            </div>

            <Switch>
              <Route exact path="/dashboard/events" component={MyEvents} />
              <Route exact path="/dashboard/new-stage" component={NewStage} />
              <Route
                exact
                path="/dashboard/stages/:id"
                component={StageDetails}
              />
              <Route exact path="/dashboard/stages" component={MyStages} />
              <Route
                exact
                path="/dashboard/equipment"
                component={MyEquipment}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
