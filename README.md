# Lab 10 – Campus Resource Finder API

## Project Description

For this lab, I created a Campus Resource Finder API using Node.js and Express. The API provides information about different campus resources at UW Oshkosh. Users can search for a specific resource by its ID or filter resources by category.

The API includes five resources: Blackhawk Commons, Polk Library, Reeve Union, Student Health Center, and Campus Bookstore.

## API Routes

### 1. GET Request – Search by Resource ID

**Request URL:**

`GET /resources/101`

This route uses a path parameter to find a specific resource by its ID. For example, entering ID 101 returns information about Blackhawk Commons.

**Expected status code:** `200 OK`

### 2. GET Request – Search by Category

**Request URL:**

`GET /resources?category=dining`

This route uses a query parameter to filter resources by category. For example, searching for dining returns the matching dining resources.

**Expected status code:** `200 OK`

### 3. GET Request – View All Resources

**Request URL:**

`GET /resources`

This route returns all available campus resources.

**Expected status code:** `200 OK`

## Error Handling

The API includes error handling for invalid requests and resources that cannot be found.

**Example 1: Resource not found**

`GET /resources/999`

**Expected status code:** `404 Not Found`

This happens when the resource ID is valid but does not exist in the API.

**Example 2: Invalid resource ID**

`GET /resources/abc`

**Expected status code:** `400 Bad Request`

This happens when the resource ID is not a valid number.

**Example 3: Category not found**

`GET /resources?category=invalid`

**Expected status code:** `404 Not Found`

This happens when no resources match the requested category.

## Testing

I tested the API using Postman and a web browser. I tested the GET request with a path parameter and the GET request with a query parameter. I also checked different error cases to make sure the API returned the appropriate status codes and JSON error messages.

I ran the project using GitHub Codespaces and checked that the server was running and responding to requests.

## Reflection

This lab gave me practical experience with creating and testing an API. I learned how Node.js and Express can be used to build a server that responds to different requests.

One of the main things I learned was the difference between path parameters and query parameters. A path parameter is used to identify a specific resource, such as searching for a campus building using its ID. A query parameter is useful when filtering information, such as finding resources that belong to a particular category.

I also learned how to work with JSON responses and HTTP status codes. I understood why it is important for an API to return the correct response when a request is successful and when something goes wrong. Adding error handling helped me understand how an API can respond when a resource does not exist or when a user enters invalid information.

Another part of the lab that helped me was using Postman to test my API. I learned how to send requests, check the response data, and identify whether a request was successful. I also gained experience running my project through GitHub Codespaces.

I used AI occasionally when I got stuck, mainly for troubleshooting errors and resolving issues while working with Postman and GitHub Codespaces. I used it as a support tool during the process, while working through the implementation and testing of my API myself.