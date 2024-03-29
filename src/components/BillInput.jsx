import PropTypes from 'prop-types'
import formInput from '../styles/FormInputs.module.scss'

function BillInput({ currentBill, setBill }) {
    const handleBillChange = (e) => {
        setBill(e.target.value);
    }

    return (
        <section className={formInput.container}>
            <label htmlFor="bill-input">Bill{currentBill <= 0 && <span>Invalid amount</span>}</label>
            <input className={currentBill <= 0 ? formInput.invalid : ""} id='bill-input' type="number" min={1} placeholder='0' onChange={handleBillChange} value={currentBill ?? ''} />
            <img className={formInput.dollar_icon} src="/icons/icon-dollar.svg" alt='dollar icon'/>
        </section>
    )
}

BillInput.propTypes = {
    currentBill: PropTypes.string,
    setBill: PropTypes.func
}

export default BillInput