/*
The ApiResponse class is designed to standardize and simplify the structure of responses sent by an API. It ensures that every response has a consistent format, making it easier for clients (like frontend applications) to process and handle the response. Let's break it down step by step:


*/

class ApiResponse {
constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this, (message = message);
    this.success = statusCode < 400;
}
}
