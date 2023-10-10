import summary from '../styles/Summary.module.scss'

export default function Summary({ appState, resetAppState }) {
    const getTipAmount = () => {
        const tipPercentage = appState.tip / 100;
        const result = (tipPercentage * appState.bill) / appState.people
        if(Number.isNaN(result)) {
            return "0.00";
        }
        // Make sure that the number always has 2 decimal places
        return (Math.round(result * 100) / 100).toFixed(2);
    }

    const getTotal = () => {
        if(appState.bill <= 0 || appState.tip <= 0 || appState.people <= 0){
            return "0.00"
        }
        const totalNoTip = appState.bill / appState.people;
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

            <button className={appState.bill > 0 ? summary.active : ""} onClick={resetAppState}>RESET</button>
        </section>
    )
}