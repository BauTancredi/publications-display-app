import PublicationDisplayPage from './pages/PublicationDisplayPage'
import NewPublicationPage from './pages/NewPublicationPage'

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='p-8 bg-stone-900 text-white min-h-screen'>
      <h1 className='text-center m-3 font-bold text-3xl'>Publications Display App</h1>
      <Routes>
        <Route path="/" element={<PublicationDisplayPage />} />
        <Route path="/new" element={<NewPublicationPage />} />
      </Routes>
    </div>
  )
}

export default App
