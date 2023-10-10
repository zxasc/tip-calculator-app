import formInput from '../styles/FormInputs.module.scss'
import formSelector from '../styles/FormSelector.module.scss'

export default function TipInput() {
    return (
        <section className={formInput.container}>
            <label htmlFor='custom-tip'>Select Tip %</label>

            <div className={formSelector.button_container}>
                <button type='button'>5%</button>
                <button type='button'>10%</button>
                <button type='button'>15%</button>
                <button type='button'>20%</button>
                <button type='button'>25%</button>
                <input type="number" id="custom-tip" min={1} max={100} placeholder='Custom' />
            </div>
        </section>
    )
}