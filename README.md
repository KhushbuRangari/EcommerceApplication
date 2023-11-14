# EcommerceApplication


Here's an overview of the project:
A full-stack web application using a MERN (MongoDB, Express.js, React, Node.js) stack. Here's a high-level summary of what each part of the code is doing:

Backend (Node.js, Express, MongoDB):
Database Connection (dbConnect.js): Establishes a connection to MongoDB using Mongoose.
Category Routes (category.routes.js): Defines routes for CRUD operations on categories.
Inventory Routes (inventory.routes.js): Defines routes for CRUD operations on inventory items.
Product Routes (product.routes.js): Defines routes for CRUD operations on products.
User Routes (user.route.js): Defines routes for user registration, login, and retrieving all users.
Middleware and Configuration:
CORS (Cross-Origin Resource Sharing): Configures CORS settings to allow cross-origin requests.
Morgan (Logging): Uses Morgan for logging HTTP requests.
Environment Configuration (.env): Loads environment variables, including the MongoDB connection URL.
Express Application (app.js):
Express App Setup: Configures the Express app, sets up middleware, and defines routes.
Custom Error Handling Middleware: Defines custom error-handling middleware for catching and responding to errors.
Server Listening: Starts the server and listens on the specified port.
Frontend (React):
React App (App.js): Sets up the main React component with routing using React Router.
API Calls (axios): Uses axios for making HTTP requests to the backend API.
Protected Routes (PrivateRoute.js): Implements a protected route for dashboard access, checking user authentication.
Header Component (Header.js): Renders the application header with navigation links and search functionality.
Product Display (Products.js): Displays products, allows searching, and handles adding products to the cart.
Cart Component (Cart.js): Displays items added to the cart and calculates the total cost.
Authentication (Login.js, Register.js): Handles user login and registration.
Context API (AuthContext.js): Manages user authentication state using the Context API.
Spinner Component (Spinner.js): Provides a loading spinner during redirection.
Layout and Components:
Layout Component (Layout.js): Wraps the main content with common layout components like Header and Footer.
Card Component (Card.js): Represents a product card with an option to add it to the cart.
Header Component (Header.js): Renders the navigation bar with links and handles user authentication.
Footer Component (Footer.js): Placeholder for the footer (not provided in the shared code).
Styling:
CSS Styles: Styling is applied using both inline styles and external CSS files.
Bootstrap: Some components use Bootstrap classes for styling.
Additional Notes:
Authentication: The code includes user registration, login, and token-based authentication.
State Management: React state and context are used for managing user authentication and cart items.
Architecture: The project is structured as a Node.js application using the Express.js framework. It follows the MVC (Model-View-Controller) pattern. There are controllers for different entities like categories, products, inventory, and user authentication.

Database Integration: MongoDB is used as the database, and Mongoose is the ODM (Object Data Modeling) library for MongoDB and Node.js. There are separate schema models for Category, Inventory, Product, and User.

API Endpoints:

Categories: There are endpoints for getting all categories, adding, updating, deleting a category, and getting category details by ID.
Products: Similar CRUD operations are available for products, and there's an additional endpoint to get products by category.
Inventory: Endpoints for retrieving all inventory items, adding, updating, deleting an inventory item, and getting inventory details by ID.
User Authentication: Endpoints for user registration, login, and retrieving all users. There's also a protected route for demonstration.
Middleware: There's a middleware for JWT verification, ensuring that certain routes are protected and require a valid token for access.

Error Handling: Custom error handling middleware is implemented to catch and respond to errors in a consistent way.

Documentation: Although not explicitly provided, the presence of comments and some clear naming conventions in the code suggests a consideration for code readability and maintainability.

Express Middleware: The application uses various Express middlewares, including morgan for logging, cors for handling Cross-Origin Resource Sharing, and express.json() for parsing JSON in the request body.

Environment Variables: The application relies on environment variables, including the MongoDB connection string and a JWT secret key.

Routing: Routes are defined in separate files (e.g., category.routes.js, product.routes.js) and then mounted in the main app.js file.

Project Structure: The project is modularized, with separate folders for controllers, models, routes, and middleware.

Please note that this overview is based on the provided code snippets, and the actual details may vary depending on the complete codebase. If you have specific questions or areas you'd like more information on, feel free to ask!
SCREENSHOT OF PROJECT


![CartPage](https://github.com/KhushbuRangari/EcommerceApplication/assets/126225826/14c688b6-0343-42aa-830c-e65f611113de)
![Products](https://github.com/KhushbuRangari/EcommerceApplication/assets/126225826/7d38a481-81c0-4408-b42a-8250a8cb5e03)
![Homepage](https://github.com/KhushbuRangari/EcommerceApplication/assets/126225826/0befdd5c-c007-40da-9db4-36a7295c98da)
![Login Page](https://github.com/KhushbuRangari/EcommerceApplication/assets/126225826/77179423-de23-4f15-906c-cd4ffd4cab21)![Register](https://github.com/KhushbuRangari/EcommerceApplication/assets/126225826/14d24330-e755-450e-a5e2-55227ca18543)




