# ShopHub - Modern E-Commerce Platform

A beautiful, responsive, and feature-rich e-commerce application built with **React 19**, **Vite**, and **Bootstrap 5**. ShopHub delivers a vibrant shopping experience with modern UI/UX design, seamless product browsing, and smart cart management.

## Table of contents

![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-646cff?logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952b3?logo=bootstrap)
![Node](https://img.shields.io/badge/Node-16+-339933?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Features

### Modern Design
- **Vibrant Color Palette**: Eye-catching gradient backgrounds with colors like Vibrant Red (#FF6B6B), Teal (#4ECDC4), and Sunny Yellow (#FFE66D)
- **Responsive Layout**: Mobile-first design that looks great on all devices (mobile, tablet, desktop)
- **Smooth Animations**: Hover effects, transitions, and interactive elements for engaging UX
- **Bootstrap Integration**: Leveraging Bootstrap 5 for consistent, professional styling

### Core Functionality
- **Product Catalog**: Browse products fetched from FakeStore API with beautiful product cards
- **Shopping Cart**: Add/remove items, view cart totals, and manage purchases
- **Smooth Navigation**: Intuitive multi-page navigation using React Router
- **Real-time Cart Updates**: Cart badge displays item count in real-time

### Theme Support
- **Light & Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Persistent Styling**: Theme preferences applied across all pages
- **Eye-comfortable Colors**: Carefully chosen color schemes for reduced eye strain

### Mobile-Friendly
- **Adaptive Grid**: Products grid adjusts from 4 columns (desktop) to 1-2 columns (mobile)
- **Touch-friendly Buttons**: Larger touch targets for better mobile UX
- **Flexible Navigation**: Responsive navbar that adapts to smaller screens

---

## Sreenshots

![Home Page](/src/assets/image.png)
![DashBoard](/src/assets/image2.png)
![Cart](/src/assets/image3.png)
![About Page](/src/assets/image4.png)
---

## Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Installation

1. **Clone the repository**
   ```bash
   cd amazon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173` (or next available port)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## Usage

### Home Page (Login)
- Welcome landing page with login form
- Smooth form validation and user input handling
- Navigate to Dashboard after login

### Dashboard / Products
- Browse all available products fetched from FakeStore API
- View detailed product information (title, description, price, image)
- Add items to shopping cart with one click
- Smooth hover animations on product cards

### Shopping Cart
- View all added items with product details
- See real-time item count in navbar badge
- Remove items from cart
- View total price calculation
- Proceed to checkout (ready for payment integration)

### About Page
- Learn about ShopHub and our mission
- Company statistics and achievements
- Why customers choose us
- Beautiful stat cards with gradient backgrounds

---

## Project Structure

```
amazon/
├── src/
│   ├── pages/
│   │   ├── home.jsx              # Login/Landing page
│   │   ├── dashboard.jsx         # Products display
│   │   ├── cart.jsx              # Shopping cart
│   │   ├── about.jsx             # About page
│   │   └── productcard.jsx       # Product card component
│   ├── App.jsx                   # Main app component with routing
│   ├── main.jsx                  # React entry point
│   ├── index.css                 # Global styles & modern theme
│   ├── apiContext.js             # API context for products
│   └── cartContext.js            # Cart context for state management
├── public/                       # Static assets
├── index.html                    # HTML template
├── package.json                  # Dependencies & scripts
├── vite.config.js               # Vite configuration
└── README.md                     # This file
```

---

## Styling & Design System

### Color Palette
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Red | #FF6B6B | Headings, CTAs, Accents |
| Teal | #4ECDC4 | Buttons, Secondary elements |
| Sunny Yellow | #FFE66D | Highlights, Price displays |
| Dark | #2D3436 | Text, Dark theme background |
| Light | #F7F8FC | Light theme background |
| Neon Cyan | #00D9FF | Hover states, Active elements |

### Key CSS Features
- **Gradient Backgrounds**: Dynamic linear gradients for modern look
- **Box Shadows**: Depth and elevation with layered shadows
- **Smooth Transitions**: 0.3s ease transitions for all interactive elements
- **Mobile-first Responsive Design**: Media queries for tablets and phones
- **CSS Variables**: Reusable color variables in `:root`

### Custom Classes
```css
.product-card        /* Product listing cards */
.navbar-custom       /* Enhanced navigation bar */
.btn-cart            /* Add to cart button */
.cart-container      /* Cart page container */
.section-title       /* Section headings */
.alert              /* Bootstrap alert overrides */
```

---

## Technology Stack

| Technology | Purpose |
|-----------|---------|
| **React 19.2** | UI library and component framework |
| **Vite 8.0** | Fast build tool and dev server |
| **React Router 7.15** | Client-side routing and navigation |
| **Bootstrap 5.3** | CSS framework for responsive design |
| **JavaScript (ES6+)** | Modern JavaScript with async/await |
| **CSS3** | Advanced styling with gradients, animations |
| **FakeStore API** | Mock e-commerce product data |

---

## API Integration

### FakeStore API
The app fetches product data from the public **FakeStore API**:

**Endpoint**: `https://fakestoreapi.com/products`

**Response Structure**:
```json
{
  "id": 1,
  "title": "Product Title",
  "price": 19.99,
  "description": "Product description...",
  "image": "https://example.com/image.jpg",
  "category": "electronics"
}
```

---

## State Management

### Context API Implementation
The app uses React Context API for state management:

```javascript
// ApiContext: Shares product data across components
<ApiContext.Provider value={api}>

// CartContext: Manages shopping cart state
<CartContext value={{cart, setCart}}>
```

### State Variables
```javascript
const [api, setApi] = useState([])           // Product list
const [cart, setCart] = useState([])         // Cart items
const [theme, setTheme] = useState(true)     // Light/Dark mode
```

---

## Key Components

### App.jsx
- Main application wrapper
- Routes setup and navigation
- Theme toggle functionality
- Context providers

### ProductCard.jsx
```jsx
<ProductCard product={product} />
```
Displays individual product with:
- Product image
- Title and description
- Price display
- Add to cart button with feedback

### Dashboard.jsx
```jsx
<Dashboard />
```
Features:
- Product grid layout
- Real-time product fetching
- Responsive grid columns

### Cart.jsx
```jsx
<Cart />
```
Features:
- Cart items list
- Remove item functionality
- Total price calculation
- Order summary section

---

## Features in Detail

### 🛒 Shopping Cart Management
```javascript
// Add item to cart
setCart(prev => [...prev, product])

// Remove item from cart
setCart(cart.filter((_, i) => i !== index))

// Calculate total
const Total = cart.reduce((sum, product) => sum + product.price, 0)
```

### Theme Toggle
```javascript
const clickfxtn = () => {
  setTheme(prev => !prev)  // Toggle between Light/Dark
}

// Apply theme class
<main className={theme ? "Light" : "Dark"}>
```

### Responsive Grid
```css
.products-grid {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

@media (max-width: 768px) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

---

## Getting Started Guide

### Step 1: Install & Run
```bash
npm install
npm run dev
```

### Step 2: Explore Pages
1. **Home** - Try the login form
2. **Dashboard** - Browse products (auto-fetched from API)
3. **Cart** - Add products to cart
4. **About** - Learn more about ShopHub

### Step 3: Customize
- Modify colors in `:root` variables in `index.css`
- Update product API endpoint in `App.jsx`
- Add new pages in `src/pages/`
- Extend cart functionality with checkout

---

## Performance Optimizations

- **Vite** - Lightning-fast build times and HMR
- **Code Splitting** - Route-based code splitting with React Router
- **CSS Minification** - Production-ready minified Bootstrap
- **Image Optimization** - Object-fit and lazy loading ready
- **Efficient Re-renders** - Context API for minimal re-renders

---

## Security Features

- **Input Validation** - Form inputs validated before processing
- **XSS Protection** - React's built-in XSS protection
- **HTTPS Ready** - Compatible with secure connections
- **No Sensitive Data** - No hardcoded secrets or API keys

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

---

## Customization Guide

### Change Color Scheme
Edit `:root` variables in `src/index.css`:
```css
:root {
  --primary: #FF6B6B;      /* Change primary color */
  --secondary: #4ECDC4;    /* Change secondary color */
  --accent: #FFE66D;       /* Change accent color */
}
```

### Update Product API
Edit `src/App.jsx`:
```javascript
const response = await fetch("YOUR_API_ENDPOINT")
```

### Modify Navbar Brand
Edit `src/App.jsx`:
```jsx
<div className="nav-brand">
  Your Store Name  {/* Change brand name */}
</div>
```

---

## Troubleshooting

### Port Already in Use
Vite automatically tries the next available port. Check the terminal output for the actual URL.

### Bootstrap Not Loading
```bash
npm install bootstrap@5.3
rm -rf node_modules/.vite
npm run dev
```

### Products Not Appearing
- Check browser console for API errors
- Verify internet connection
- Ensure FakeStore API is accessible

### Styling Issues
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server (`npm run dev`)
- Check CSS import in `main.jsx`

---

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

---

## Future Enhancements

- [ ] User authentication & accounts
- [ ] Order history
- [ ] Wishlist functionality
- [ ] Product filters & search
- [ ] Payment gateway integration
- [ ] Customer reviews & ratings
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] PWA support

---

## MIT License

This project is open source and available under the **MIT License**.

---

## Contact & Support

For questions, issues, or suggestions:
- Create an issue on GitHub
- Check existing documentation
- Review code comments

---

## Acknowledgments

- **FakeStore API** - For providing mock product data
- **React Team** - For the amazing React library
- **Vite Team** - For the blazing-fast build tool
- **Bootstrap Team** - For the comprehensive CSS framework

---

## Project Statistics

- **Components**: 5+ functional components
- **Pages**: 4 main pages
- **Dependencies**: 3 core packages
- **Lines of Code**: 500+
- **CSS Classes**: 30+

---

## Happy Shopping!

Enjoy building with ShopHub! If you have any questions or need help, feel free to reach out.

**Made with  using React, Vite, and Bootstrap**

---

*Last Updated: May 29, 2026*
