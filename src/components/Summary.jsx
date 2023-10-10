import summary from '../styles/Summary.module.scss'

export default function Summary() {
    return (
        <section className={`inner-container ${summary.container}`}>
            <div className={summary.inner}>
                <div>
                    <h3>Tip Amount</h3>
                    <h4>/ person</h4>
                </div>
                <h2>$0.00</h2>
            </div>

            <div className={summary.inner}>
                <div>
                    <h3>Tip Amount</h3>
                    <h4>/ person</h4>
                </div>
                <h2>$0.00</h2>
            </div>

            <button>RESET</button>
        </section>
    )
}