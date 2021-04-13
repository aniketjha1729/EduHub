# EduHub

A Social Network developed with MERN stack.

## Requirements

1. nodeJS >=14.15.4
2. npm >=6.14.10
3. mongdb

## Steps to init project

1.  First install all dependencies with npm:
    `npm install` in the root directory && `npm install in the client directory.
2.  Open mongodb, and the server.
3.  Create a `.env` file and insert the following code. Replace values with yours!!

    ```javascript
    DATABASE = "mongodb://localhost/eduhub";
    SECRET_ADMIN_AUTH_KEY = "adminkey";
    SECRET_STUDENT_AUTH_KEY = "studentkey";
    SECRET_TEACHER_AUTH_KEY = "teacherkey";
    ```

4.  Start the server for backend and forntend
    ### forbackend
    `npm start` in the root directory
    ### for frontend
    Go to the client directory and run the command `npm start`
5.  Now load the app

    ```javacript
    localhost:300
    ```

6.  Enjoy!!
