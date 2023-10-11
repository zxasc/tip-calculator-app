import PropTypes from 'prop-types'
import formInput from '../styles/FormInputs.module.scss'
import formSelector from '../styles/FormSelector.module.scss'

function TipInput({ currentTip, setTip }) {
    const handleTipChange = (value) => {
        setTip(value)
    }

    return (
        <section className={formInput.container}>
            <label htmlFor='custom-tip'>Select Tip %</label>

            <div className={formSelector.button_container}>
                <button className={currentTip === "5" ? formSelector.active : ""} type='button' onClick={() => handleTipChange('5')}>5%</button>
                <button className={currentTip === "10" ? formSelector.active : ""} type='button' onClick={() => handleTipChange('10')}>10%</button>
                <button className={currentTip === "15" ? formSelector.active : ""} type='button' onClick={() => handleTipChange('15')}>15%</button>
                <button className={currentTip === "25" ? formSelector.active : ""} type='button' onClick={() => handleTipChange('25')}>25%</button>
                <button className={currentTip === "50" ? formSelector.active : ""} type='button' onClick={() => handleTipChange('50')}>50%</button>
                <input className={currentTip <= 0 ? formInput.invalid : ""} type="number" id="custom-tip" min={1} max={100} placeholder='Custom' onChange={() => handleTipChange(event.target.value)} value={currentTip ?? ''}/>
            </div>
        </section>
    )
}

TipInput.propTypes = {
    currentTip: PropTypes.string,
    setTip: PropTypes.func
}

export default TipInput