import { useMemo, useState } from 'react';
import { Search, ShoppingBag } from 'lucide-react';
import MenuCard from '../components/MenuCard';
import CartPanel from '../components/CartPanel';
import { categories, menuItems } from '../data/menu';
export default function Menu(){
 const [category,setCategory]=useState('All'); const [search,setSearch]=useState('');
 // Filter the menu whenever the selected category or search text changes.
 const filteredItems=useMemo(()=>menuItems.filter(item=>(category==='All'||item.category===category)&&`${item.name} ${item.description}`.toLowerCase().includes(search.toLowerCase())),[category,search]);
 return <><section className="page-hero menu-hero"><div className="container"><span className="eyebrow eyebrow-light">FRESH FROM OUR KITCHEN</span><h1>Find your<br/><em>happy place.</em></h1><p>Comfort food classics, fresh favourites and little treats worth slowing down for.</p></div></section><section className="section container menu-layout"><div className="menu-main"><div className="menu-toolbar"><div><span className="eyebrow">THE GOOD STUFF</span><h2>Our menu</h2></div><label className="search-box"><Search size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search dishes..." aria-label="Search menu"/></label></div><div className="category-list">{categories.map(name=><button key={name} onClick={()=>setCategory(name)} className={category===name?'category-chip active':'category-chip'}>{name}</button>)}</div>{filteredItems.length ? <div className="menu-grid">{filteredItems.map(item=><MenuCard key={item.id} item={item}/>)}</div> : <div className="no-results"><ShoppingBag/><h3>No dishes found</h3><p>Try another search or choose a different category.</p><button className="text-link" onClick={()=>{setSearch('');setCategory('All')}}>Clear filters</button></div>}</div><CartPanel/></section></>}
