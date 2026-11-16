import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
export default function Header() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();
  const close = () => setOpen(false);
  return <header className="site-header"><div className="nav-wrap container">
    <Link to="/" className="brand" onClick={close}><span className="brand-mark">S</span><span>Savory<span className="brand-accent">Bites</span><small>GOOD FOOD, GOOD MOOD</small></span></Link>
    <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'main-nav open' : 'main-nav'}>
      <NavLink to="/" end onClick={close}>Home</NavLink><NavLink to="/about" onClick={close}>Our Story</NavLink><NavLink to="/menu" onClick={close}>Menu</NavLink><NavLink to="/contact" onClick={close}>Contact</NavLink>
      <Link to="/menu" className="nav-order" onClick={close}><ShoppingBag size={17}/> Order now <span className="cart-count">{itemCount}</span></Link>
    </nav>
  </div></header>;
}
