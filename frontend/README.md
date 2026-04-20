# StudySync

StudySync is a full-stack task management web application designed for students.
Users can register, log in, and manage their personal study tasks while receiving motivational quotes.

## Tools
- React
- JavaScript
- Node.js + Express
- PostgreSQL (Neon)
- CSS

## Features
- Login/Register
- CRUD tasks
- Motivational quotes API

## Backend API routes
- GET /tasks/:userId → Get all user tasks
- POST /tasks → Create new task
- PUT /tasks/:id → Update task
- DELETE /tasks/:id → Delete task

## How to run
- Backend:
npm install
node server.js

- Frontend:
npm install
npm start

## Video Demo

https://uncg-my.sharepoint.com/:v:/g/personal/idbarbozate_uncg_edu/IQDnRZaAN0D-So7f6cPGO8xpAXvOljLAlb29cIbv28Jo2tQ?e=0bhLkd&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D

In case the link does not work:

https://uncg-my.sharepoint.com/:v:/g/personal/idbarbozate_uncg_edu/IQDnRZaAN0D-So7f6cPGO8xpAXvOljLAlb29cIbv28Jo2tQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=bE58ck

## Challenges
- Connecting frontend with backend API
- Managing state updates after CRUD operations
- Handling user authentication flow

## What I learned
- Full-stack development with React + Express
- REST API design and CRUD operations
- PostgreSQL database integration
- External API consumption

## Future improvements
- Better UI/UX design
- Add task categories or deadlines
- Progress dashboard
- Deployment