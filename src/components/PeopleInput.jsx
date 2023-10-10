import formInput from '../styles/FormInputs.module.scss'

export default function PeopleInput({ setNumberOfPeople }) {
    const handlePeopleChange = (e) => {
        setNumberOfPeople(Number(e.target.value));
    }

    return (
        <section className={formInput.container}>
            <label htmlFor="people-input">Number of People</label>
            <input id='people-input' type="number" min={1} placeholder='0' onChange={handlePeopleChange} />
            <img className={formInput.person_icon} src="/icons/icon-person.svg" alt='person icon'/>
        </section>
    )
}