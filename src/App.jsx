import { useState } from 'react'
import './styles/global.scss'
import BillInput from './components/BillInput'
import TipInput from './components/TipInput'
import PeopleInput from './components/PeopleInput'
import Summary from './components/Summary'

export default function App() {
  const [appState, setAppState] = useState({bill: undefined, tip: undefined, people: undefined})

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
          <BillInput currentBill={appState.bill} setBill={setBill} />
          <TipInput currentTip= {appState.tip} setTip={setTip} />
          <PeopleInput currentNumberOfPeople={appState.people} setNumberOfPeople={setNumberOfPeople} />
        </form>
        <Summary appState={appState} resetAppState={resetAppState} />
      </main>
    </>
  )
}
