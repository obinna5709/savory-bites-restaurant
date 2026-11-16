# Savory Bites — React JS Restaurant & Food Ordering Website

A responsive restaurant website built with React and Vite for the New Horizon React JS practical project assignment. It includes Home, About, Menu and Contact pages, interactive menu filtering, a shopping cart and a validated contact form.

## Features
- Responsive navigation with React Router (no full-page navigation reloads).
- Home page with restaurant introduction, featured meals and calls to action.
- About page with background, mission, vision and values.
- Menu page with eight sample dishes, category filters and live search.
- Reusable `MenuCard` component rendered with JavaScript `.map()`.
- Cart: add items, increase/decrease quantities, remove items and calculate subtotal.
- Cart state shared with React Context and saved in Local Storage.
- Contact form with controlled inputs, required-field validation, email validation and success/error feedback.
- Responsive CSS using Grid, Flexbox and media queries.

## Technologies
- React, JavaScript (ES6+), JSX
- Vite
- React Router DOM
- Context API, `useState`, `useEffect`, `useMemo`, `useContext`
- CSS3, Flexbox and CSS Grid
- Lucide React icons

## Requirements
Install Node.js (LTS) and npm. Check with `node -v` and `npm -v`.

## Installation and running locally
1. Download or clone this repository.
2. Open the `savory-bites` folder in VS Code.
3. Open a terminal in that folder.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production files are generated in `dist/`.

## Project structure
```text
savory-bites/
├── public/
├── src/
│   ├── components/       # Header, Footer, MenuCard, CartPanel
│   ├── context/          # Shared cart state (Context API)
│   ├── data/             # Sample menu data and price formatter
│   ├── pages/            # Home, About, Menu, Contact
│   ├── App.jsx           # Routes and shared page layout
│   ├── main.jsx          # React entry point
│   └── styles.css        # Responsive styling
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## React concepts demonstrated
- **Components:** Header, Footer, MenuCard, CartPanel and page components divide the interface into reusable pieces.
- **JSX:** Components use JSX to describe the interface and embed JavaScript expressions.
- **Props:** `MenuCard` receives each menu item through its `item` prop.
- **State:** `useState` manages menu filters, search input, mobile navigation and contact form values.
- **Hooks:** `useEffect` persists the cart and scrolls to the top on route changes; `useMemo` derives cart totals and filtered menu data; `useContext` reads shared cart state.
- **Events:** `onClick`, `onChange` and `onSubmit` respond to user interaction.
- **Forms:** Controlled inputs and custom validation check required fields, email format and message length.
- **Lists:** `.map()` renders menu items, navigation categories and cart rows; `.filter()` implements search and category filtering; `.reduce()` calculates cart totals.
- **Routing:** React Router navigates between Home, About, Menu and Contact.
- **Persistence:** Local Storage retains the cart between browser refreshes.

## GitHub upload
Create an empty repository on GitHub, then run these commands from the project folder (replace the URL with your own repository URL):
```bash
git init
git add .
git commit -m "Build Savory Bites React restaurant website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/savory-bites.git
git push -u origin main
```
`node_modules/` and `dist/` are excluded by `.gitignore`. Do not upload `node_modules`.

## Deployment
### Netlify
1. Push the project to GitHub.
2. In Netlify, choose **Add new site → Import an existing project** and select the repository.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Deploy and copy the public URL.

### Vercel
1. Import the GitHub repository into Vercel.
2. Select the Vite preset (or use build command `npm run build` and output directory `dist`).
3. Deploy and copy the public URL.

For a production single-page application deployment, configure the host to rewrite unknown routes to `/index.html` so direct visits to `/about`, `/menu` and `/contact` work.

## Important demo notes / before real business use
- Restaurant name, address, phone and email are sample project details. Replace them with verified details before public business use.
- Menu prices and food entries are sample content.
- Contact form validates and displays a local success message; it does not send email to a backend.
- Checkout is a demonstration only. It does not accept payments or submit real orders.
- Food photos load from Unsplash and require an internet connection.

## Testing checklist
- [ ] Run `npm install` and `npm run dev` successfully.
- [ ] Navigate through Home, About, Menu and Contact.
- [ ] Search menu items and select category filters.
- [ ] Add multiple dishes to the cart; adjust quantities and remove an item.
- [ ] Refresh the browser and confirm cart persistence.
- [ ] Submit the contact form empty and verify validation messages.
- [ ] Submit valid contact details and verify success feedback.
- [ ] Test at mobile, tablet and desktop widths; check for horizontal overflow.
- [ ] Run `npm run build` successfully.
- [ ] Push source code to GitHub and verify the repository is public/accessible to the lecturer.
- [ ] Deploy and test the live public URL, including direct route visits.
