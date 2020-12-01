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
      <div className="w-full" style={{fontSize: "1.5rem"}}>
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
            <div
              className="nav-div bg-gray-dark w-full"
              style={{
                width: '100vw',
                display: 'flex',
                justifyContent: 'space-around',
                position: 'relative',
                color: '#fff7f1',
                bottom: '4vh'
              }}
            >
                <Link to="/dashboard/events" onClick={() => this.setState({ currentTab: 'events' })}
                    className={`h-full text-3xl hover:text-red text-center ${
                      this.state.currentTab === 'events' ? 'selected-tab' : ' '
                    }`}
                    style={{
                      margin: '0px',
                      color: '#fff7f1',
                      fontWeight: '600'
                    }}
                  >
                    My Events
                </Link>
                <Link to="/dashboard/stages" onClick={() => this.setState({ currentTab: 'stages' })}
                    className={`h-full text-3xl hover:text-red text-center ${
                      this.state.currentTab === 'stages' ? 'selected-tab' : ' '
                    }`}
                    style={{
                      margin: '0px',
                      color: '#fff7f1',
                      fontWeight: '600'
                    }}
                  >
                    My Stages
                </Link>
                <Link to="/dashboard/equipment"
                    onClick={() => this.setState({ currentTab: 'equip' })}
                    className={`h-full text-3xl text-center ${
                      this.state.currentTab === 'equip' ? 'selected-tab' : ' '
                    }`}
                    style={{
                      margin: '0px',
                      color: '#fff7f1',
                      fontWeight: '600'
                    }}
                  >
                    My Equipment{' '}
                </Link>
            
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
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
