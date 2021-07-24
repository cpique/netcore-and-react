import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List, ListItem } from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7000/api/Activities').then(response => {
    console.log(response)  
    setActivities(response.data)
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />

        <List>
          <ListItem>
            {activities.map((activity: any) => (
              <li key={activity.id}>{activity.title}</li>
            ))}
          </ListItem>
        </List>

    </div>
  );
}

export default App;
