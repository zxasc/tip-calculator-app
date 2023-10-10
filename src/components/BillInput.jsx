import formInput from '../styles/FormInputs.module.scss'

export default function BillInput({ setBill }) {
    const handleBillChange = (e) => {
        setBill(Number(e.target.value));
    }

    return (
        <section className={formInput.container}>
            <label htmlFor="bill-input">Bill</label>
            <input id='bill-input' type="number" min={0} placeholder='0' onChange={handleBillChange} />
            <img className={formInput.dollar_icon} src="/icons/icon-dollar.svg" alt='dollar icon'/>
        </section>
    )
}