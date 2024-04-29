# Full Stack Authentication API

This project is a full stack authentication API built using Node.js, Express.js, and MongoDB. It provides endpoints for user authentication (signup and login) and accessing user details. It uses JSON Web Tokens (JWT) for authentication and bcrypt for password hashing.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

&emsp;`Node.js installed on your machine`

&emsp;`MongoDB installed locally or accessible via a cloud service`

&emsp;`Postman or similar tool for testing API endpoints`

### Installing

1. Clone the repository to your local machine:

    `git clone https://github.com/TusharKesarwani/Authentication`

2. Navigate to the project directory:

    `cd full-stack-authentication-api`

3. Install dependencies:

    `npm install`

### Running the Server

1. Start MongoDB service on your local machine or connect to your MongoDB instance in the cloud.
2. Create a .env file in the project root directory and add the following environment variables:

    `PORT=3000`
    
    `MONGODB_URI=your_mongodb_connection_string`
    
    `JWT_SECRET=your_jwt_secret_key`

Replace your_mongodb_connection_string with your MongoDB connection string and your_jwt_secret_key with any secret key you want to use for JWT.

3. Start the server:

    `npm start`

The server should now be running on http://localhost:3000.

### API Endpoints

1. POST /api/auth/signup: Register a new user.

    `Request body: { "username": "example", "email": "example@example.com", "password": "examplepassword" }`
    
    `Response: { "message": "User registered successfully" }`

2. POST /api/auth/login: Login with existing user credentials.

    `Request body: { "email": "example@example.com", "password": "examplepassword" }`
    
    `Response: { "token": "<JWT token>" }`

3. GET /api/auth/userdetails: Get details of the authenticated user.

    `Requires JWT token in the Authorization header (Bearer token).`
    
    `Response: { "userDetails": { "username": "example", "email": "example@example.com" } }`

<hr>


## Credits

This project was created by [Tushar Kesarwani](https://github.com/TusharKesarwani) as a part of the Authentication Project.

<h3 align=center>Happy Coding 👨‍💻</h3>

Show some ❤️&nbsp; by giving the star to this repo
<p align="right"><a href="https://github.com/TusharKesarwani/Authentication">Back to top</a></p>
