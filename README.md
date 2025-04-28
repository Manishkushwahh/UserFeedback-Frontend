# Frontend 

- Create a React + Vite Project using this command
- Install Tailwind css 
- Created functional components for dashboard, submit feedback, header
- Handle Routing using react-router-dom
- Install axios for making API calls
- And build handleSubmit function for sumbit the user feedback
- create a button for filter data 


# Backend

- Create a folder named as UserFeedback-Backend
- run (npm init)
- run (npm i express) for creating a server for our app
- run (npm i -g nodemon) for autometic refresh or run the project
- created a mongoDB altas cluster
- take the connection string and connect to database 
- using mongoose (npm i mongoose)
- create a feedback model through the feedback Schema
- create a route or post API to post data into database
- use a middleware ( express.json() ) to read json data from the req body
- run npm i cors for allow cors origin
- make a getFeedbacks funtion to get all the feedback in dashboard component
- validate fields using validator library ( npm i validator)
- created an redux store for manage the data of our app 
- build two more API for filter data by using 
      find({username: 1}) and find({createdAt: 1})
