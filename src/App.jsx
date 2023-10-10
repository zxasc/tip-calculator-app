import { useState } from 'react'
import './styles/global.scss'
import BillInput from './components/BillInput'
import TipInput from './components/TipInput'
import PeopleInput from './components/PeopleInput'
import Summary from './components/Summary'

export default function App() {
  const [appState, setAppState] = useState({bill: 0, tip: 0, people: 0})

  return (
    <>
      <img className='logo' src="/logo.svg" alt="splitter logo" />
      <main>
        <form className='inner-container'>
          <BillInput />
          <TipInput />
          <PeopleInput />
        </form>
        <Summary />
      </main>
    </>
  )
}
