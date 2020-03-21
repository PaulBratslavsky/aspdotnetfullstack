import React from 'react'
import './App.css'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react'

const App: React.FC = () => {

  React.useEffect(() => {
    getDataFromAPI()
    return () => {
      console.log('clean up')
    }
  }, [])

  const [dataState, setDataState] = React.useState([{ id: 1, name: 'No data found' }])

  const getDataFromAPI = async () => {
    const response = await axios.get('http://localhost:5000/api/values').then((res: any) => res.data)
    setDataState(response);
  }

  return <div>
    <Header as='h2' icon='users' content='Dot Net' />
    <List bulleted>
    {dataState.map((item: any) => <List.Item key={item.id}>{item.name}</List.Item>)}
    </List>
  </div>

}


export default App;
