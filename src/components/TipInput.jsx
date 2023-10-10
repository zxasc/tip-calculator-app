import formInput from '../styles/FormInputs.module.scss'
import formSelector from '../styles/FormSelector.module.scss'

export default function TipInput({ setTip }) {
    const handleTipChange = (value) => {
        setTip(Number(value))
    }

    return (
        <section className={formInput.container}>
            <label htmlFor='custom-tip'>Select Tip %</label>

            <div className={formSelector.button_container}>
                <button type='button' onClick={() => handleTipChange(5)}>5%</button>
                <button type='button' onClick={() => handleTipChange(10)}>10%</button>
                <button type='button' onClick={() => handleTipChange(15)}>15%</button>
                <button type='button' onClick={() => handleTipChange(25)}>25%</button>
                <button type='button' onClick={() => handleTipChange(50)}>50%</button>
                <input type="number" id="custom-tip" min={1} max={100} placeholder='Custom' onChange={() => handleTipChange(event.target.value)} />
            </div>
        </section>
    )
}