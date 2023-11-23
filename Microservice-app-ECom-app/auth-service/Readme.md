Before starting the application create a mongo DB with the name auth-service

TO register a user on postman 
URL http://localhost:5000/auth/reg
Method post
Body Application/JSON
{
    "name":"Nishant",
    "email":"xyz@email.com",
    "password":"admin123"
}


To login 
URL  http://localhost:5000/auth/login
Method post
Body Application/JSON
{
    "email":"xyz@email.com",
    "password":"admin123"
}
