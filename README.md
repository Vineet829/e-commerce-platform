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

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak4.png)

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak11.png)

### Cart

The `Cart` component displays the items added to the shopping cart. It allows users to view item details, total price, and proceed to checkout.

**Key Features:**
- Displays the list of items in the cart.
- Computes and displays the total price of the items.
- "Checkout" button clears the cart and shows a success message using toast.

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak5.png)

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak6.png)

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak12.png)

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

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak8.png)

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak9.png)

### Product Listing

The `ProductListing` component allows users to browse through a collection of sneakers.

**Key Features:**
- Displays a grid of sneaker products with images, titles, and prices.
- Supports filtering and sorting based on various criteria such as price, brand, and popularity.
- Includes pagination for easy navigation through the product catalog.

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak2.png)

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak3.png)

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak10.png)

## PWA Functionality

This application supports Progressive Web App (PWA) features, allowing users to install the app on their devices and use it offline.

**Key Features:**
- **Offline Support:** The app caches resources for offline use.
- **Installable:** Users can install the app on their home screen for quick access.

![alt text](https://github.com/Vineet829/e-commerce-platform/blob/main/images/sneak7.png)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

Clone the repository:

```bash
git clone https://github.com/vineet829/e-commerce-platform.git
cd e-commerce-platform
npm install
npm start
```
The application will be running on [http://localhost:3000].

## Usage

- Browse products on the Home and Shop pages.
- View detailed information and select options for each product on the product page.
- Add items to the cart and manage quantities.
- Checkout process is simulated (no real payment integration).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
