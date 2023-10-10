import form from '../styles/FormInputs.module.scss'

export default function BillInput() {
    return (
        <section className={form.container}>
            <label htmlFor="bill-input">Bill</label>
            <input id='bill-input' type="number" min={0} placeholder='0' />
            <img className={form.dollar_icon} src="/icons/icon-dollar.svg" alt='dollar icon'/>
        </section>
    )
}