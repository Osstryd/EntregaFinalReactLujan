import './Error.css'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export default function Error() {
    return (
        <section className='error'>
            <h1 className='error__title'>
                Oh no!
            </h1>
            <div className='error__text'>
                <p>
                    We can't find the page you're looking for, but don't worry!
                </p>
                <p>
                    You can still go to our menu and choose your favorite sushi!
                </p>
            </div>
            <Link to='/'>
                <button className='error__button'>
                    Go to home
                    <FaHome className='error__button__icon'/>
                </button>
            </Link>
        </section>
    )
}
