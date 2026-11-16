# Project presentation / viva preparation

## Project overview
My project is **Savory Bites**, a responsive restaurant and food-ordering website. It introduces a restaurant, presents its menu, lets visitors search and filter dishes, and provides an interactive cart. It also includes a contact page with a validated form.

## How the application works
- The `main.jsx` file mounts the React application and wraps it in `BrowserRouter` and `CartProvider`.
- `App.jsx` defines the routes and displays the shared Header and Footer.
- The menu data is stored in `src/data/menu.js` as an array of objects.
- The Menu page uses `.filter()` to search and filter dishes, then `.map()` to render a reusable `MenuCard` for each result.
- `MenuCard` receives an `item` prop and calls `addToCart` when its plus button is clicked.
- `CartContext.jsx` shares cart data across components. `useState` updates the cart, `useEffect` saves it to Local Storage, and `useMemo` calculates item count and subtotal.
- The Contact page uses controlled inputs: React state is the source of truth for each field. The submit handler validates the values and displays feedback.

## Example questions and answers
**What is a component?** A component is a reusable part of a React interface. Examples in this project include Header, Footer, MenuCard and CartPanel.

**What are props?** Props pass information from a parent component to a child. Menu passes each menu object to MenuCard through the `item` prop.

**What is state?** State is data that can change while the application runs. When state changes, React updates the interface. The project uses state for cart contents, search, selected category and form values.

**Why use React Router?** It lets visitors move between pages without reloading the entire document.

**What does useEffect do here?** It saves cart changes to Local Storage and scrolls the page to the top when the route changes.

**What is Context API used for?** It makes shared cart data and cart functions available to components without passing props through every level.

**What does `.map()` do?** It transforms each item in an array into a rendered React element. This project uses it to display menu cards and cart rows.

**How is the form validated?** It checks that the name and subject are not empty, the email matches a basic email pattern, and the message contains at least ten characters. Errors are shown beside the relevant fields.

**Does the checkout process real payments?** No. It is a front-end demonstration. A real checkout needs a secure backend and payment provider integration.

## Demonstration order
1. Open the Home page and explain the navigation and reusable layout.
2. Open Our Story and describe the About content.
3. Open Menu, search for a dish and change categories.
4. Add two different dishes to the cart, increase/decrease a quantity and remove an item.
5. Refresh the page and show that Local Storage retains the cart.
6. Open Contact and submit an empty form to show validation.
7. Submit valid sample details to show the success feedback.
8. Explain the source folders, run/build commands and deployment URL.

Remember to understand the code, personalize the sample restaurant details and test the deployed version before submission.
