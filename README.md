#  Music Education Platform – SE Hackathon Project

A full-stack MERN (MongoDB, Express, React, Node.js) application designed to revolutionize music education by enabling online teaching, learning, and course management. Built as part of the MITAOE Software Engineering End-Semester Hackathon.



## Live Demo

Frontend (Vercel): [https://se-hackathon-music.vercel.app](https://se-hackathon-music.vercel.app)
Backend (Render): [https://se-hackathon-api.onrender.com](https://se-hackathon-api.onrender.com)



##  Key Features

*  Role-based Authentication (Student / Instructor)
*  Course Creation & Management (CRUD)
*  Student Enrollment & Progress Tracking
*  Instructor Dashboard with Analytics
*  PDF Certificate Generation for Completed Courses
*  Live Class Integration (via embedded Zoom/Google Meet links)
*  Course Feedback & Ratings
* Admin Panel (future enhancement)



## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React.js (Vite), Tailwind CSS       |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB Atlas                       |
| Auth       | JWT (JSON Web Tokens)               |
| Deployment | Vercel (Frontend), Render (Backend) |



##  Folder Structure

```bash
SE_Hackathon/
│
├── client/               # React Frontend (Vite)
│   ├── src/
│   │   ├── components/   # Reusable UI Components
│   │   ├── pages/        # Route-specific pages (Student, Instructor)
│   │   ├── context/      # Auth and App context
│   │   └── utils/        # Helper functions
│   └── ...
│
├── server/               # Node.js Backend
│   ├── controllers/      # Business Logic
│   ├── routes/           # API Endpoints
│   ├── models/           # MongoDB Mongoose Models
│   ├── middlewares/      # JWT, Error Handlers
│   └── config/           # DB & Env config
│
└── README.md             # Project Overview
```



##  Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shiv-1540/SE_Hackathon.git
cd SE_Hackathon
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a .env file in /server with:

```
MONGO_URI=your_mongo_atlas_url
JWT_SECRET=your_jwt_secret
```

Run the server:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

---

##  Authentication Flow

* Users register and log in using email/password
* JWT tokens are stored in localStorage
* Protected routes are guarded with context-based auth
* Role-based redirection to dashboards

---

##  User Stories

### Student

* Register / Log in
* Enroll in Courses
* Join Live Sessions
* Track Progress
* Download Completion Certificates
* Leave Feedback

### Instructor

* Log in
* Create & Manage Courses
* Add Lecture Links
* View Enrollments
* See Ratings & Feedback



##  API Overview

| Method | Endpoint               | Description               |
| ------ | ---------------------- | ------------------------- |
| POST   | /api/auth/register     | Register user             |
| POST   | /api/auth/login        | Login & get token         |
| GET    | /api/courses           | Get all courses           |
| POST   | /api/courses           | Instructor creates course |
| POST   | /api/enroll            | Student enrolls in course |
| GET    | /api/progress/\:userId | Get student progress      |





##  Future Enhancements

* AI-powered practice feedback (via ML/audio analysis)
* PWA Support for Mobile Learning
* Multilingual Support
* In-app Chat (Student ↔️ Instructor)
* Learning Recommendation Engine



## Contributing

Contributions are welcome! Please fork the repo and open a pull request. If you're participating in a course or hackathon, please follow your institution's rules on collaboration.


## License

MIT License © 2025 Shivshankar Ghyar and Team

