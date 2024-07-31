# ROCKETIUM-BACKEND

This project is a Node.js API that serves dummy JSON data. It provides endpoints to retrieve, filter, and sort the data, and includes Swagger documentation for easy API exploration and testing.

**Table of Contents**

   - Features
   - Installation
   - Usage
   - API Documentation
   - Testing

# **Features**

   - Fetch dummy JSON data from a remote source and store it locally.
   - Serve data through an Express.js API.
   - Support for filtering and sorting data via query parameters.
   - Swagger documentation for easy API exploration.
   - unit testing done via Jest

# Installation
Prerequisites

  - Node.js (version 12.x or higher)
  - npm (Node Package Manager)

Steps

  - Clone the repository:

        git clone git@github.com:Vishesh-Paliwal/Rocketium_Backend.git

  - cd to your repo directory

Install dependencies:

      npm install

Fetch the dummy data and initialize the server:

The initialization script automatically runs when the server starts for the first time, fetching and storing the dummy JSON data.

Start the server:

    npm start
    

The server will start on http://localhost:3000.

# Usage

API Endpoints

   - GET /api/data
       - Retrieve a list of data items.
       - Query Parameters:
           - sortField: Field to sort by (e.g., name, language).
           - sortOrder: Order to sort (asc or desc). Default is asc.
           - filterfield: Field to filter by (e.g., name, language).
           - filter: Value to filter by.

Example Request

   - GET

         localhost:3000/api/data?sortField=name&sortOrder=asc&filterfield=language&filter=English

Example Response

    [
      {
        "name": "Alice",
        "language": "English",
        "id": "A1",
        "bio": "Lorem ipsum dolor sit amet.",
        "version": 5.0
      },
      {
        "name": "Bob",
        "language": "English",
        "id": "B2",
        "bio": "Consectetur adipiscing elit.",
        "version": 6.1
      }
    ]

# API Documentation

The API documentation is available via Swagger UI. You can access it at http://localhost:3000/api-docs.

# Testing

Unit tests are written using Jest. To run the tests, use the following command:

      npm test
