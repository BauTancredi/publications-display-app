// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PublicationDisplayPage from './pages/PublicationDisplayPage'
import NewPublicationPage from './pages/NewPublicationPage'

import { Route, Routes, } from 'react-router-dom';


function App() {

  return (
    <div>
      <h1 className='text-center m-7 font-bold text-3xl'>Publications Display App</h1>
      <Routes>
        <Route path="/" element={<PublicationDisplayPage />} />
        <Route path="/new" element={<NewPublicationPage />} />
      </Routes>
    </div>
  )
}

export default App
