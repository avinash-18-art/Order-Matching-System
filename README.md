# Order Matching System

## Project Overview

The Order Matching System is a web application that matches buyer and seller orders based on price and quantity, similar to stock exchanges. The application consists of a frontend built with React and a backend built with Flask and PostgreSQL.

### Features

- **Place Orders**: Submit new buyer orders through a form.
- **View Pending Orders**: See a list of all pending buyer and seller orders.
- **View Completed Orders**: Check completed orders where buyer and seller prices have matched.
- **Price Chart**: Visualize completed orders in a price chart.

## Technologies Used

- **Frontend**: React, Chart.js
- **Backend**: Flask
- **Database**: PostgreSQL
- **Package Manager**: pnpm

## Project Structure

- `src/`
  - `components/` - Contains React components.
  - `styles/` - Contains CSS files for styling.
  - `App.js` - Main React component that renders other components.
  - `index.js` - Entry point of the React application.
- `public/` - Contains static files like `index.html` and favicon.
- `backend/` - Contains the Flask backend code (if organized in a separate directory).

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.12 or higher)
- [pnpm](https://pnpm.io/) (v7.0 or higher)
- [PostgreSQL](https://www.postgresql.org/) (for database management)

### Frontend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/avinash-18-art/Order-Matching-System.git
   cd order-matching-system

   ```

2. **Project structure :
## Backend : 
order-matching-backend/
├── app.py                   # Main Flask application
├── config.py                # Configuration settings
├── models.py                # Database models (optional)
├── routes/
│   ├── __init__.py          # Initialize blueprint for routes
│   ├── orders.py            # Order-related routes and logic
├── services/
│   ├── __init__.py          # Service initializations
│   ├── order_matching.py    # Core order matching logic
├── templates/               # (Optional) HTML templates
├── static/                  # (Optional) Static files like CSS, JS, images
├── tests/
│   ├── __init__.py          # Test initialization
│   └── test_orders.py       # Unit tests for order functionality
├── requirements.txt         # Python dependencies
└── README.md                # Project documentation

## Frontend : 
order-matching-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── OrderForm.js
│   │   ├── PendingOrders.js
│   │   ├── CompletedOrders.js
│   │   └── PriceChart.js
│   ├── styles/
│   │   ├── OrderForm.css
│   │   ├── PendingOrders.css
│   │   ├── CompletedOrders.css
│   │   └── PriceChart.css
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md

