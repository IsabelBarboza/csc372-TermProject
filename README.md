# StudySync

StudySync is a full-stack task management web application designed for students.
Users can register, log in, and manage their personal study tasks while receiving motivational quotes.

## Deployment links:
Backend:https://csc372-studysyncproject.onrender.com
Frontend:https://csc372-studysync-project.vercel.app
Gtihub:https://github.com/IsabelBarboza/csc372-TermProject

## Tools
- React
- JavaScript
- Node.js + Express
- PostgreSQL (Neon)
- CSS
- Render (Backend Deployment)
- Vercel (Frontend Deployment)


## Features
- User Login / Register authentication
- Create, Read, Update, Delete (CRUD) tasks
- Share tasks with other users
- Motivational quotes API integration
- Random images for motivation page
- Dashboard 

## Backend API routes
- GET /tasks/:userId → Get all user tasks
- POST /tasks → Create new task
- PUT /tasks/:id → Update task
- DELETE /tasks/:id → Delete task

## How to run the repo

Clone repository
git clone https://github.com/IsabelBarboza/csc372-TermProject.git
cd csc372-TermProject
cd studysync

- Backend:
cd backend
npm install
node server.js

Verify this on .env file:
PORT=5000
PORT=5000
SECRET_KEY="1234"
DATABASE_URL='postgresql://neondb_owner:npg_ZDFjSL0lsJ9d@ep-hidden-haze-a4g8jfa8-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require' 

- Frontend:
cd frontend
npm install
npm start

Verify this on api.js:
 export const BASE_URL = "http://localhost:5000";

Run Locally
Frontend: http://localhost:3000
Backend: http://localhost:5000

## Reflection

For this project, I created a full-stack web application called StudySync. The purpose of the app is to help students organize their study tasks and stay motivated while studying. I wanted to build something useful for students and also practice the skills I learned in CSC 372.

When I started this project, I was still learning how full-stack development works. I did not have much experience connecting the frontend and backend. At first, it was difficult to understand how React, Node.js, and PostgreSQL work together. Over time, I started to understand how data moves between the frontend, backend, and database, and how all parts of the system connect.

For the design choices, I used React for the frontend because it is easy to build interactive user interfaces. I used Node.js and Express for the backend because they help me create APIs and organize routes in a simple way. For the database, I used PostgreSQL with Neon because it is reliable and works well with full-stack applications.

One of the biggest challenges for me was connecting the frontend with the backend API, especially after deployment. At first, I had errors like “localhost not found”. I solved this by updating my BASE_URL and fixing the backend configuration on Render. Another challenge was authentication using bcrypt, because it caused older users in the database to stop working. I learned how password hashing affects existing data and how login systems work.

I also faced some technical problems in React, such as missing imports like useState and useEffect, and debugging issues in my components. These problems helped me improve my understanding of React hooks and how important it is to organize code properly. I also improved my debugging and problem-solving skills while working on these errors.

Overall, this project helped me learn many important concepts in full-stack development, including API communication, authentication, database management, and deployment using Vercel and Render. In the future, I would like to improve the UI design and add more features like task deadlines, categories, and a better dashboard. Even though it was challenging, I feel more confident now in building full-stack applications.
