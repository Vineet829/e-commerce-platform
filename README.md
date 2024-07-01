# Sneaker E-commerce Platform

Welcome to the Sneaker E-commerce Platform! This project is a fully functional e-commerce web application built with React, Redux, and Tailwind CSS.

## Features

- **Product Listing:** Browse through a collection of sneakers.
- **Product Details:** Detailed view of each sneaker with color and size options.
- **Shopping Cart:** Add, view, and manage items in your cart.
- **Responsive Design:** Ensured compatibility with various devices.
- **State Management:** Utilizes Redux for efficient state management.
- **Toast Notifications:** Provides feedback for actions like adding items to the cart.
- **PWA Support:** Installable as a Progressive Web App (PWA) with offline functionality.

## Main Components

### CardPage

The `CardPage` component displays detailed information about a selected sneaker, including options for selecting the color and size, as well as a button to add the sneaker to the shopping cart.

**Key Features:**
- Displays sneaker details: image, title, price, description.
- Provides `ColorPicker` and `SizePicker` for selecting product options.
- Uses `AmountBtn` to adjust the quantity of the product.
- "Add to Cart" button dispatches the `addItem` action to the Redux store.

### Cart

The `Cart` component displays the items added to the shopping cart. It allows users to view item details, total price, and proceed to checkout.

**Key Features:**
- Displays the list of items in the cart.
- Computes and displays the total price of the items.
- "Checkout" button clears the cart and shows a success message using toast.

### Header

The `Header` component provides navigation and quick access to the cart. It displays the logo, navigation menu, search icon, and cart icon with the number of items.

**Key Features:**
- Displays the total number of items in the cart.
- Toggles the cart visibility when the cart icon is clicked.

### Home

The `Home` component serves as the landing page of the application, showcasing a highlighted product and a link to the shop page.

**Key Features:**
- Prominently displays a featured sneaker with title and description.
- Link to navigate to the shop page.
![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak1.png)
## PWA Functionality

This application supports Progressive Web App (PWA) features, allowing users to install the app on their devices and use it offline.

**Key Features:**
- **Offline Support:** The app caches resources for offline use.
- **Installable:** Users can install the app on their home screen for quick access.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/sneaker-ecommerce-platform.git
cd sneaker-ecommerce-platform
npm install
npm start
```
The application will be running on [http://localhost:3000](http://localhost:3000).

## Usage

- Browse products on the Home and Shop pages.
- View detailed information and select options for each product on the product page.
- Add items to the cart and manage quantities.
- Checkout process is simulated (no real payment integration).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
