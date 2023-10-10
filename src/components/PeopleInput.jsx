import form from '../styles/FormInputs.module.scss'

export default function PeopleInput() {
    return (
        <section className={form.container}>
            <label htmlFor="people-input">Number of People</label>
            <input id='people-input' type="number" min={1} placeholder='0' />
            <img className={form.person_icon} src="/icons/icon-person.svg" alt='person icon'/>
        </section>
    )
}