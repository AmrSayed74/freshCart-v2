# **FreshCart**

![FreshCart Logo](https://via.placeholder.com/600x200?text=FreshCart)  
**A modern e-commerce platform to explore, manage, and purchase products easily.**

---

## **🌟 Features**

- **User Authentication**: Secure signup, login, and password reset.
- **Product Management**: View product details, categories, and brands.
- **Cart & Wishlist**:
  - Add and remove items.
  - Update item quantities directly from the cart.
  - Save favorite products for later.
- **Dynamic API Integration**: Fully connected with a robust backend API.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Protected Routes**: Access control based on user authentication.
- **Custom Hooks**: Reusable hooks like `usePostData` and `useGetData` for API calls.
- **React Query**: For managing and caching server state seamlessly.
- **Toast Notifications**: Real-time feedback for user actions.

---

## **🛠️ Technologies Used**

- **Frontend**:  
  - [React.js](https://reactjs.org/) with functional components and hooks.
  - [Tailwind CSS](https://tailwindcss.com/) for styling.
  - [React Router](https://reactrouter.com/) for navigation.
  - [React Query](https://tanstack.com/query/latest) for state management.
  - [Axios](https://axios-http.com/) and Fetch API for HTTP requests.
  - [Flowbite React](https://flowbite-react.com/) for UI components.

- **Backend**:  
  - API built using [Node.js](https://nodejs.org/) with full documentation.
  - Integrated with [Postman](https://www.postman.com/) for testing.

---

## **🚀 Getting Started**

### **Prerequisites**

Ensure you have the following installed on your system:

- **Node.js** (v16 or higher)  
  [Download here](https://nodejs.org/)
- **Git**  
  [Download here](https://git-scm.com/)

---

### **Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AmrSayed74/freshCart-v2.git
   cd freshCart-v2
npm install
npm start
Open http://localhost:5173 in your browser.

FreshCart-v2/
├── public/            # Public assets like images and icons
├── src/               # Main source folder
│   ├── components/    # Shared UI components
│   ├── pages/         # Individual pages (Home, Products, Cart, etc.)
│   ├── reusable/      # Custom hooks and reusable logic
│   ├── services/      # API integrations
│   ├── styles/        # Global styles and Tailwind configurations
│   └── utils/         # Helper functions like formatCurrency
├── .env               # Environment variables
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
