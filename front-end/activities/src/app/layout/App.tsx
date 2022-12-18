import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [activity, setActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/Activities').then(res => {
      setActivities(res.data);
    })
  }, [])

  const handleSelectedActivity = (id: string) => {
    const item = activities.find(item => item.id === id);
    setActivity(item);
  }

  const handleCancelSelectedActivity = () => {
    setActivity(undefined);
  }

  const handleFormOpen = (id?: string) => {
    id ? handleSelectedActivity(id) : handleCancelSelectedActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  return (
    <React.Fragment>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={activity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectedActivity} 
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}/>
      </Container>
    </React.Fragment>
  );
}

export default App;
