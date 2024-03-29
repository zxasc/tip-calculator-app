import { useState } from 'react'
import './styles/global.scss'
import app from './styles/App.module.scss'
import BillInput from './components/BillInput'
import TipInput from './components/TipInput'
import PeopleInput from './components/PeopleInput'
import Summary from './components/Summary'

export default function App() {
  const [currentBill, setCurrentBill] = useState('');
  const [currentTip, setCurrentTip] = useState('');
  const [currentNumberOfPeople, setCurrentNumberOfPeople] = useState('');

  const resetAppState = () => {
    setCurrentBill("0");
    setCurrentTip("0");
    setCurrentNumberOfPeople("0");
  }

  return (
    <>
      <img className={app.logo} src="/logo.svg" alt="splitter logo" />
      <main className={app.container}>
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
