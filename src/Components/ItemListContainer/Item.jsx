import { FaLeaf } from 'react-icons/fa';
import { Link } from "react-router-dom"

export default function Item({item : {id, img, name, shortDescription, price, pieces, stock, isPremium, isVegetarian}}) {
    return (
        <section className='item__cards'>
            <div className='item__cards__title'>
                    <h1>
                        {name}
                    </h1>
                    {isVegetarian 
                    ? <FaLeaf className='item__cards__icon' />
                    : ''}
            </div>
                <p className='item__cards__ingredients'>
                    {shortDescription}
                </p>
                <div className='item__cards__quantity'>
                    <h2 className='item__cards__price'>
                        ${price.toFixed(2)}
                    </h2>
                    <p className='item__cards__pieces'>
                        {pieces} pieces
                    </p>
                    <p className='item__cards__stock'>
                        In stock: {stock}
                    </p>
                </div>
                <Link to={`/item/${id}`}>
                    <button className='item__cards__button'>
                        Show Details
                    </button>
                </Link>
        </section>
    )
}