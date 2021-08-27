# Chat Application

## Project Overview

This project is a chat application where users can talk with each other directly or create groups and chat with group
members.

## Features Implemented

1. User authentication and authorization - Login, Registration, Forget Password, Reset Password
2. Ability to create new groups [chat rooms] by users.
3. Ability to search and add new members in ones group.
4. Ability to have private group chat between members of the groups. Rooms in socket.io.

## Technologies Used

### Frontend

1. React typescript to build frontend UI.
2. Material UI/Chakra UI/SCSS for designing the layout.
3. Socket.io-client to implement client side socket.io functionalities.
4. JWT Authorization

### Backend

1. Express for backend api.
2. Mongoose ORM for modelling data for users and chats.
3. MongoDB for storing data.
4. socket.io for real-time bidirectional communication.
5. TypeScript for "failing fast" during development.

## Thinking Process

1. Chat apps require user authentication and authorization. So, no page can be visited without first signing-up with
   phone and otp, remain login forever unless logout, and receiving a jwt token for authorization.
2. The MVP of this project is user auth, user profile & settings, chat rooms, and direct messages between 2 users.
3. User profile and settings will be simple - edit username, profile pic, and delete account.
4. There will be no storage on server of messages. This will be stored in client side with backup feature to google
   drive.
5. Hence, on the MongoDB side, we store users profile data.

## Methodology Followed

1. TDD methodology is followed as closely as possible in order to develop this application.
2. Used jest/enzyme for unit testing.
3. Used cypress for E2E testing.

## Hosting

1. Frontend is hosted on Vercel with its CI/CD setup out of the box.
2. Backend is deployed on Heroku with its CI/CD setup out of the box.
3. Database in deployed on MongoDB Atlas Cloud.

## Live Demo:

https://ibmessenger.vercel.app

## Screenshots

## License

MIT License