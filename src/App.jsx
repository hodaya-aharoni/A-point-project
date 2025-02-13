import { useEffect, useState } from 'react'
import './App.css'
import CTable from './component/Table'

import { useDispatch } from 'react-redux'
import { insert } from './app/contactSlice'

import AddButton from './component/AddButton'


function App() {
  const [open, setOpen] = useState(false);
  function onClose() {
    setOpen(false)
  }

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

      <AddButton open={open} onClose={onClose} setOpen={setOpen}/>
      <CTable open={open} onClose={onClose} setOpen={setOpen}/>
     
    </>
  )

}

export default App
