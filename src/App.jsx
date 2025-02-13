import { useEffect } from 'react'
import './App.css'
import CTable from './component/Table'

import { useDispatch } from 'react-redux'
import { insert } from './app/contactSlice'


function App() {

  let dispatch = useDispatch();
  useEffect(() => {
    fetch("../src/contact.json")
      .then((res) => res.json())
      .then(data => {
        dispatch(insert(data))
        console.log(data);
      })
      .catch(err => console.log(err));
  }, [])
  return (
  <>
      
      <CTable />
     
    </>
  )

}

export default App
