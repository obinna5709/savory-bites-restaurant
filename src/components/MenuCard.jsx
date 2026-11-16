import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/menu';
export default function MenuCard({ item }) {
  const { addToCart } = useCart();
  return <article className="menu-card"><div className="menu-image"><img src={item.image} alt={item.name} loading="lazy"/>{item.tag && <span className="food-tag">{item.tag}</span>}</div><div className="menu-card-body"><div className="food-meta"><span>{item.category}</span><span className="rating"><Star size={13} fill="currentColor"/> 4.9</span></div><h3>{item.name}</h3><p>{item.description}</p><div className="food-card-bottom"><strong>{formatPrice(item.price)}</strong><button className="add-button" onClick={() => addToCart(item)} aria-label={`Add ${item.name} to cart`}><Plus size={19}/></button></div></div></article>;
}
