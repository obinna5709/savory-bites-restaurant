import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/menu';
export default function CartPanel(){
 const {cart,updateQuantity,removeFromCart,subtotal}=useCart();
 return <section className="cart-panel"><div className="cart-heading"><div><span className="eyebrow">YOUR ORDER</span><h2>Shopping cart</h2></div><span className="cart-items">{cart.length} {cart.length===1?'item':'items'}</span></div>
 {cart.length===0 ? <div className="empty-cart"><ShoppingBag size={36}/><h3>Your cart is waiting</h3><p>Add something delicious from our menu.</p><Link className="button button-dark" to="/menu">Explore menu</Link></div> : <><div className="cart-list">{cart.map(item=><div className="cart-row" key={item.id}><img src={item.image} alt=""/><div className="cart-row-info"><strong>{item.name}</strong><span>{formatPrice(item.price)}</span><div className="quantity-control"><button onClick={()=>updateQuantity(item.id,item.quantity-1)} aria-label="Decrease quantity"><Minus size={13}/></button><span>{item.quantity}</span><button onClick={()=>updateQuantity(item.id,item.quantity+1)} aria-label="Increase quantity"><Plus size={13}/></button></div></div><button className="remove-button" onClick={()=>removeFromCart(item.id)} aria-label={`Remove ${item.name}`}><Trash2 size={17}/></button></div>)}</div><div className="cart-total"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p className="cart-note">Delivery fees, if applicable, are calculated at checkout.</p><button className="button button-primary checkout-button" onClick={()=>window.alert('Thank you! This student demo does not process real payments. Please contact the restaurant to complete your order.')}>Continue to checkout</button></>}
 </section>;
}
