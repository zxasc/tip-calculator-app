import { useState } from 'react'
import './styles/global.scss'
import BillInput from './components/BillInput'
import TipInput from './components/TipInput'
import PeopleInput from './components/PeopleInput'
import Summary from './components/Summary'

export default function App() {
  const [appState, setAppState] = useState({bill: 0, tip: 0, people: 0})

  const setBill = (value) => {
    setAppState({
      ...appState,
      bill: value
    });
  };

  const setTip = (value) => {
    setAppState({
      ...appState,
      tip: value
    });
  };

  const setNumberOfPeople = (value) => {
    setAppState({
      ...appState,
      people: value
    });
  };

  const resetAppState = () => {
    setAppState({bill: 0, tip: 0, people: 0})
  }

  return (
    <>
      <img className='logo' src="/logo.svg" alt="splitter logo" />
      <main>
        <form className='inner-container'>
          <BillInput setBill={setBill} />
          <TipInput setTip={setTip} />
          <PeopleInput setNumberOfPeople={setNumberOfPeople} />
        </form>
        <Summary appState={appState} resetAppState={resetAppState} />
      </main>
    </>
  )
}
