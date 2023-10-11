import PropTypes from 'prop-types'
import formInput from '../styles/FormInputs.module.scss'

function PeopleInput({ currentNumberOfPeople, setNumberOfPeople }) {
    const handlePeopleChange = (e) => {
        setNumberOfPeople(Number(e.target.value));
    }

    return (
        <section className={formInput.container}>
            <label htmlFor="people-input">Number of People{currentNumberOfPeople <= 0 && <span>Invalid amount</span>}</label>
            <input className={currentNumberOfPeople <= 0 ? formInput.invalid : ""} id='people-input' type="number" min={1} placeholder='0' onChange={() => handlePeopleChange(event)} />
            <img className={formInput.person_icon} src="/icons/icon-person.svg" alt='person icon'/>
        </section>
    )
}

PeopleInput.propTypes = {
    currentNumberOfPeople: PropTypes.number,
    setNumberOfPeople: PropTypes.func
}

export default PeopleInput