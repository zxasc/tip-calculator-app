import formInput from '../styles/FormInputs.module.scss'

export default function BillInput() {
    return (
        <section className={formInput.container}>
            <label htmlFor="bill-input">Bill</label>
            <input id='bill-input' type="number" min={0} placeholder='0' />
            <img className={formInput.dollar_icon} src="/icons/icon-dollar.svg" alt='dollar icon'/>
        </section>
    )
}