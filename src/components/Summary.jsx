import PropTypes from 'prop-types'
import summary from '../styles/Summary.module.scss'

function Summary({ appState, resetAppState }) {
    const checkInputValues = () => {
        if((appState.currentBill <= 0 || appState.currentTip <= 0 || appState.currentNumberOfPeople <= 0) || (appState.currentBill === undefined || appState.currentTip === undefined || appState.currentNumberOfPeople === undefined)){
            return false
        }
        return true
    }

    const getTipAmount = () => {
        if(!checkInputValues()) {
            return "0.00";
        }
        const tipPercentage = appState.currentTip / 100;
        const result = (tipPercentage * appState.currentBill) / appState.currentNumberOfPeople
        // Make sure that the number always has 2 decimal places
        return (Math.round(result * 100) / 100).toFixed(2);
    }

    const getTotal = () => {
        if(!checkInputValues()) {
            return "0.00";
        }
        const totalNoTip = appState.currentBill / appState.currentNumberOfPeople;
        const result = totalNoTip + Number(getTipAmount());
        // Make sure that the number always has 2 decimal places
        return (Math.round(result * 100) / 100).toFixed(2);
    }

    

    return (
        <section className={`inner-container ${summary.container}`}>
            <div className={summary.inner}>
                <div>
                    <h3>Tip Amount</h3>
                    <h4>/ person</h4>
                </div>
                <h2>${getTipAmount()}</h2>
            </div>

            <div className={summary.inner}>
                <div>
                    <h3>Total</h3>
                    <h4>/ person</h4>
                </div>
                <h2>${getTotal()}</h2>
            </div>

            <button className={checkInputValues() ? summary.active : ""} onClick={resetAppState}>RESET</button>
        </section>
    )
}

Summary.propTypes = {
    appState: PropTypes.object,
    resetAppState: PropTypes.func
}

export default Summary