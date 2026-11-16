// Menu data is kept separate so MenuCard can be reused for every item.
export const menuItems = [
  { id: 1, name: 'Smoky Beef Burger', category: 'Burgers', price: 8500, description: 'Juicy grilled beef, cheddar, caramelised onions and our house sauce.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85', tag: 'Bestseller' },
  { id: 2, name: 'Crispy Chicken Burger', category: 'Burgers', price: 7800, description: 'Golden crispy chicken, fresh lettuce, pickles and creamy mayo.', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85', tag: 'Popular' },
  { id: 3, name: 'Stone-Baked Pizza', category: 'Pizza', price: 12500, description: 'A crisp artisan base topped with mozzarella, tomato and basil.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85', tag: 'Chef’s pick' },
  { id: 4, name: 'Creamy Alfredo Pasta', category: 'Pasta', price: 10500, description: 'Silky parmesan cream sauce, herbs and perfectly cooked pasta.', image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=85', tag: '' },
  { id: 5, name: 'Grilled Chicken Bowl', category: 'Healthy', price: 9200, description: 'Tender grilled chicken with seasoned rice and colourful vegetables.', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85', tag: 'Fresh' },
  { id: 6, name: 'Garden Salad', category: 'Healthy', price: 6500, description: 'Crisp greens, avocado, tomatoes and a bright citrus dressing.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85', tag: 'Light choice' },
  { id: 7, name: 'Loaded Chicken Fries', category: 'Sides', price: 6000, description: 'Crispy fries piled high with chicken, cheese and signature drizzle.', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85', tag: '' },
  { id: 8, name: 'Chocolate Milkshake', category: 'Drinks', price: 4500, description: 'A thick, chilled chocolate shake finished with whipped cream.', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85', tag: '' }
];
export const categories = ['All', 'Burgers', 'Pizza', 'Pasta', 'Healthy', 'Sides', 'Drinks'];
export const formatPrice = (amount) => `₦${amount.toLocaleString('en-NG')}`;
