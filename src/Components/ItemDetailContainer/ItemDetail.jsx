import './ItemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { FaLeaf, FaAngleLeft, FaAngleRight, FaCertificate } from 'react-icons/fa';
import { useCartContext } from '../../Context/CartContext';

export default function ItemDetail({item : {id, img, name, longDescription, price, pieces, ingredients, stock, isPremium, isVegetarian}}) {
    const {addToCart, isInCart} = useCartContext()

    function handleOnAdd(quantity) {
        addToCart({id, name, img, price, pieces, isPremium, isVegetarian, stock, quantity})
    }
    
    return (
        <section className='detail'>
            <div>
                <div className='detail__description'>
                    <div className="detail__description__title">
                        <h1 className='detail__title'>
                            {name}
                        </h1>
                        {isVegetarian 
                            ? <FaLeaf className='detail__icon'/>
                            : ''}
                    </div>
                    <div className='detail__information'>
                        <p>
                            {longDescription}
                        </p>
                        <h3>
                            Ingredients
                        </h3>
                        <ul className='detail__information__ingredients'>
                            { ingredients 
                            ?   ingredients.map((ingredient) => (
                                    <li key={ingredient.id} className='detail__ingredients'>
                                        <FaCertificate className='detail__ingredients__icon'/>
                                        {ingredient.name}
                                    </li>
                                ))
                            : <p>Loading...</p>    
                            }
                        </ul>
                        <p>
                            Each order comes with <span className='bold'>{pieces} pieces</span> of sushi, perfect for sharing or enjoying as a meal!
                        </p>
                        <p>
                            At Kibou, we take pride in using only the <span className='bold'>freshest and highest quality</span> ingredients in our sushi dishes.
                        </p>
                        <p>
                            Order now and experience the delicious flavors of our <span className='bold'>{name} Roll</span>!
                        </p>
                    </div>
                    <div className='detail__quantity'>
                        <h2 className='detail__price'>
                            ${price ? price.toFixed(2) : <span>Loading...</span>}
                        </h2>
                        <p className='detail__pieces'>
                            {pieces} pieces
                        </p>
                        <p className='detail__stock'>
                            In stock: {stock}
                        </p>
                    </div>
                </div>
                {
                    isInCart(id)
                    ?   <Link to='/cart'>
                            <button className='detail__cart__button'>
                                Go to Cart
                                <FaAngleRight className='detail__cart__icon'/>
                            </button>
                        </Link>
                    : stock > 0 
                        ?   <ItemCount stock={stock} onAdd={handleOnAdd} /> 
                        :   <p className='detail__empty__stock'>
                                You can't buy this item right now. Come back later and see if we have stock!
                            </p>
                }
                <Link to='/all'>
                    <button className='detail__home__button'>
                        <FaAngleLeft className='detail__home__icon'/>
                        Browse Other Dishes
                    </button>
                </Link>
            </div>
        </section>
    )
}
