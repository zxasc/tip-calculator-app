import { useState } from 'react'
import './styles/global.scss'
import BillInput from './components/BillInput'
import TipInput from './components/TipInput'
import PeopleInput from './components/PeopleInput'
import Summary from './components/Summary'

export default function App() {
  const [currentBill, setCurrentBill] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);
  const [currentNumberOfPeople, setCurrentNumberOfPeople] = useState(0);

  const resetAppState = () => {
    setCurrentBill(0);
    setCurrentTip(0);
    setCurrentNumberOfPeople(0);
  }

  return (
    <>
      <img className='logo' src="/logo.svg" alt="splitter logo" />
      <main>
        <form className='inner-container'>
          <BillInput currentBill={currentBill} setBill={setCurrentBill} />
          <TipInput currentTip= {currentTip} setTip={setCurrentTip} />
          <PeopleInput currentNumberOfPeople={currentNumberOfPeople} setNumberOfPeople={setCurrentNumberOfPeople} />
        </form>
        <Summary appState={{currentBill, currentTip, currentNumberOfPeople}} resetAppState={resetAppState} />
      </main>
    </>
  )
}
