import React from 'react'
import './App.css'
import axios from 'axios'

const App: React.FC = () => {

  React.useEffect(() => {
    getDataFromAPI()
    return () => {
      console.log('clean up')
    }
  }, [])

  const [dataState, setDataState] = React.useState(['No data found'])

  const getDataFromAPI = async () => {
    const response = await axios.get('http://localhost:5000/api/values').then((res: any) => res.data)
    setDataState(response);
  }

  return <div>
    <p>My App</p>
    {dataState.map((item: any, index: any) => <h2 key={index}>{item}</h2>)}
  </div>

}


export default App;
