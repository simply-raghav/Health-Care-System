# Health Care System

Welcome to the Health Care System project! Our platform is engineered to seamlessly connect doctors, patients, hospitals, lab technicians, pharmacy, staff and insurance companies, providing a unified digital interface for efficient interaction and collaboration.

## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Features](#features)
- [Future Scope](#future-scope)
- [Contributing](#contributing)
- [License](#license)

## About the Project

The Health Care System is a comprehensive digital platform revolutionizing the way healthcare services are accessed and delivered. With a focus on enhancing patient care, streamlining administrative processes, and fostering collaboration among healthcare professionals, our system offers a wide range of features tailored to meet the diverse needs of medical facilities, practitioners, and patients alike.

#### Key Features:

1. **Patient Management:** Seamlessly manage patient records, appointments, and medical history in one centralized system, ensuring continuity of care and efficient communication between healthcare providers.

2. **Appointment Scheduling:** Simplify the appointment booking process for both patients and medical staff with an intuitive scheduling system that optimizes clinic workflow and minimizes wait times.

3. **Electronic Health Records (EHR):** Digitize and securely store patient health information, enabling quick access to vital data, reducing paperwork, and facilitating informed decision-making by healthcare professionals.

4. **Telemedicine Integration:** Enable virtual consultations and remote monitoring capabilities, allowing patients to receive quality healthcare services from the comfort of their homes while expanding access to medical expertise.

5. **Pharmacy Management:** Streamline pharmacy operations with features for inventory management, prescription processing, and medication dispensing, ensuring timely and accurate medication distribution.

6. **Laboratory Integration:** Facilitate seamless communication between healthcare providers and laboratory technicians, enabling efficient test ordering, specimen tracking, and result reporting.

7. **Billing and Insurance Management:** Automate billing processes, generate invoices, and manage insurance claims, reducing administrative burden and ensuring accurate financial transactions.

8. **Analytics and Reporting:** Gain insights into patient demographics, treatment outcomes, and operational performance through comprehensive analytics and reporting tools, empowering healthcare organizations to make data-driven decisions and improve service delivery.

#### Our Mission:

At Health Care System, our mission is to leverage technology to transform healthcare delivery, improve patient outcomes, and enhance the overall quality of care. By providing a robust, user-friendly platform that fosters collaboration and innovation, we aim to empower healthcare professionals and institutions to deliver personalized, efficient, and patient-centric healthcare services.

#### Get Started:

Experience the future of healthcare with the Health Care System. Whether you're a healthcare provider looking to streamline operations, a patient seeking convenient access to medical services, or an administrator aiming to optimize organizational efficiency, our platform offers the tools and capabilities you need to thrive in today's rapidly evolving healthcare landscape. Join us in shaping the future of healthcare delivery and together, let's make a difference in the lives of patients around the world.

[Provide a brief overview of your project. Describe its purpose, goals, and any important information that users should know.]

## Installation

This guide will take you through the steps needed to set up and run the website on your local machine. No prior knowledge of Node.js, Express, EJS, or MongoDB is required. Let's get started!

- [Go to Prerequisites](#prerequisites)
- [Go to Step-by-Step Installation](#step-by-step-installation)
- [Go to Troubleshooting](#troubleshooting)


## Prerequisites

Before we begin, make sure you have the following installed on your system:

1. **Node.js**: Node.js is a JavaScript runtime that lets you run JavaScript on your server. Download and install it from [Node.js Official Website](https://nodejs.org/).

2. **Git**: Git is a version control system that allows you to clone repositories from GitHub.

   - **Download and Install Git**: Go to the [Git Official Website](https://git-scm.com/) and download the appropriate version for your operating system (Windows, macOS, or Linux).
   - **Windows Users**: Follow the installer prompts, and during installation, choose the default options unless you have specific needs.
   - **macOS Users**: You can install Git using Homebrew (`brew install git`) or by downloading the installer directly from the Git website.
   - **Linux Users**: You can install Git via your package manager. For example, on Ubuntu, run `sudo apt-get install git`.

   After installation, open your terminal or Command Prompt and type `git --version` to verify the installation.

3. **MongoDB**: MongoDB is a NoSQL database used to store the website's data. Download and install MongoDB Community Edition from [MongoDB Official Website](https://www.mongodb.com/try/download/community).

4. **MongoDB Compass**: This is a graphical user interface for MongoDB, which makes it easier to manage your database. Download and install it from [MongoDB Compass](https://www.mongodb.com/products/compass).

## Step-by-Step Installation

### Step 1: Clone the Repository

First, you need to clone the repository from GitHub to your local machine. Open the terminal (Command Prompt on Windows) and run the following command:

```bash
git clone https://github.com/simply-raghav/Health-Care-System.git
```

### Step 2: Navigate to the Project Directory

Change your directory to the project folder that you just cloned. In the terminal, run:

```bash
cd Health-Care-System/backend
```
**Note:** HealthCare Website has two folders frontend and backend. Frontend folder contains static pages which determines how the project will look alike. Whereas, Backend folder contains all the pages whose data are rendering dynamically(except for few pages). That's why, you have to run the application in Health-Care-System/backend.


### Step 3: Install Node.js Dependencies

Your project uses Node.js packages, which are listed in the `package.json` file. You need to install these packages using `npm`, which is included with Node.js. Run the following command in the terminal:

```bash
npm install
```

This command will read the `package.json` file and install all the required dependencies.

### Step 4: Set Up the MongoDB Database

1. **Start MongoDB Server**: Depending on your OS, you might need to start the MongoDB server manually. 

   - On Windows, MongoDB may start automatically. If not, you can start it by running `mongod` in the Command Prompt.
   - On macOS and Linux, you might need to start MongoDB with a similar command in the terminal.

   If you're using MongoDB installed through Docker, start the container using the command:

   ```bash
   docker run -d -p 27017:27017 --name mongodb mongo
   ```

2. **Create a Database**: Open MongoDB Compass, connect to your MongoDB server, and create a new database. 

   - Open MongoDB Compass and connect to `localhost:27017`.
   - Click on the `+ Create Database` button.
   - Name your database (e.g., `healthcareDB`) and create a collection (e.g., `users`).

3. **Update Configuration**: To setup configuration, we need to setup a .env file which will help to run the website smoothly. You can find the steps [Go to Guide To Configure .env File](#guide-to-configure-env-file)



### Step 5: Start the Server

Now, you are ready to start the server. Run the following command in the terminal:

```bash
npm start
```

If everything is set up correctly, you should see a message indicating that the server is running, typically something like:

```
Server is running on http://localhost:3000
```

### Step 6: Open Your Website

Open your web browser and go to `http://localhost:PORT/health_care/`. You should see your Healthcare Website up and running!

Change PORT with port number.

### Troubleshooting

If you encounter any issues during installation, here are a few tips:

- **Ensure MongoDB is Running**: Make sure your MongoDB server is running and accessible.
- **Check Dependencies**: Verify that all the Node.js dependencies are installed correctly (`node_modules` folder should be populated).
- **Port Conflicts**: Ensure that port `3000` (or whichever port your app uses) is not being used by another application.

### Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/en/starter/installing.html)

If you have any questions or need further assistance, feel free to reach out or consult the documentation for each tool.

Enjoy your Healthcare Website!
---


# Guide To Configure .env File

### Step 1: Create a .env File

In your project's root directory, create a file named `.env`.

```plaintext
touch .env
```

### Step 2: Add Environment Variables

Open the `.env` file in your preferred text editor and add the following environment variables:

```js
PORT=4000
URL=mongodb://localhost:27017/healthcareDB
SECRET_KEY=your_secret_key_here
JWT_EXPIRES=90h
COOKIE_EXPIRES=3600000
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password_here
```

#### Explanation of Each Variable:

- `PORT`: The port number on which your server will run (e.g., `4000`).
- `URL`: The MongoDB connection string, usually in the format `mongodb://localhost:27017/yourDatabaseName`.
- `SECRET_KEY`: A secret key for configuring cookies. This should be a strong, random string.(eg. "123456789")
- `JWT_EXPIRES`: The expiry time for JSON Web Tokens (e.g.,  `1d` for one day).
- `COOKIE_EXPIRES`: The expiry time for cookies, in milliseconds (e.g., `3600000` for one hour).
- `MAIL_USER`: Your Gmail email address, used for sending emails from the application.
- `MAIL_PASS`: The app password generated from your Gmail account for use with the application.


## Guide to Generate MAIL_PASS (Gmail App Password)

### Step 1: Enable Two-Factor Authentication (2FA) on Your Google Account

1. Go to your Google Account and navigate to the [Security](https://myaccount.google.com/security) section.
2. Under "Signing in to Google," select "2-Step Verification" and follow the instructions to enable it.

### Step 2: Generate an App Password

1. After enabling 2-Step Verification, return to the [Security](https://myaccount.google.com/security) section.
2. Under "Signing in to Google," click on "App passwords."
3. You may need to sign in again.
4. In the "Select app" dropdown, choose "Mail" and in the "Select device" dropdown, choose "Other (Custom name)." Name it something like "Healthcare Website."
5. Click "Generate."

A 16-character app password will be displayed. Copy this password. It will look something like this: `abcd efgh ijkl mnop`.

### Step 3: Update Your .env File

Paste the generated app password into the `MAIL_PASS` field in your `.env` file:

```plaintext
MAIL_PASS=abcd efgh ijkl mnop
```

Your `.env` file should now look something like this:

```plaintext
PORT=3000
URL=mongodb://localhost:27017/healthcareDB
SECRET_KEY=your_secret_key_here
JWT_EXPIRES=1h
COOKIE_EXPIRES=3600000
MAIL_USER=your_email@gmail.com
MAIL_PASS=abcd efgh ijkl mnop
```

### Security Note

**Important:** Never share your `.env` file or commit it to version control systems like Git. Use a `.gitignore` file to ensure the `.env` file is not tracked:

```js
# .gitignore
.env
```
**Note** : Since, complete project is in git but .env is in backend folder, the .gitignore file contains: 

```js
# .gitignore
backend/node_modules
**/.env
```

This guide should help users with no technical background to set up and run your healthcare website successfully.

## Features


#### Doctor Entity
- [x] **Feature 1:** Get list of Appointments categorized into Upcoming, Today and Past Appointments. 

- [ ] **Feature 2:** View patient profile, and add/edit medicals records including notes, lab reports and prescription.  

- [x] **Feature 3:** Doctor can schedule it timings on a week basis (eg. Doctor is available from 9:00 AM to 3:00 PM on Monday-Wednesday-Saturday and 11:00 AM to 3:00 PM on Sunday, rest he is not available).

- [ ] **Feature 4:** Update Profile which includes about me, it's clinic information, contact details, consultation fees, services and specialization, education, experience, awards and many more. 

- [ ] **Feature 5:** Cancel/edit Appointments

- [ ] **Feature 6:** View Medical Reports(Past as well).


#### Patient Entity
- [ ] **Feature 1:** View current Appointments. 

- [ ] **Feature 2:** View List of Prescriptions with complete detail including doctor details, medicine dosage details and many more.

- [ ] **Feature 3:** View and download all medical reports Generated, also see the status of reports.

- [ ] **Feature 4:** See all the Billings made for medical purpose. This includes, doctor consultancy fees, lab testing bills and pharmacy bills as well.

- [x] **Feature 2:** Book Appointments page gives list of all doctors with there respective Hospital info, Clinical info, features and specifications.

- [ ] **Feature 2:** Filter List of Doctors according to Name, Profession and Hospital Name.

- [x] **Feature 3:** View Doctor Profile contains all the profile information doctor has added in it's profile page. 

- [x] **Feature 4:** Book appointment gives you an option to select time according to your choice of time.

- [ ] **Feature 5:** Appointments slots disabling feature when booked. 

- [ ] **Feature 6:** Payment Gateway. (Implemented but not integrated)

- [ ] **Feature 7:** Update Profile.

#### Hospital Entity
- [ ] **Feature 1:** View List of doctors, staff members, Patients served or upcoming. 

- [x] **Feature 2:** Add Doctor

- [ ] **Feature 3:** Add lab Technician, Pharmacy and staffs

- [ ] **Feature 4:** Manage Doctors, Pharmacy, Lab Technician and Staff Members.

- [ ] **Feature 5:** Assigning authorities for each staff members(Administrative, Accounts, nurses, medical equipments access and many more).

### Future enhancements 

- [ ] **Feature 1:** Video Conferencing between patient and doctor. 

- [ ] **Feature 2:** Doctors may get some urgent operation to look on, so notification to patient accordingly.

- [ ] **Feature 3:** Managing all the medical equipments inventory management. 

- [ ] **Feature 4:** Different types of Rooms in a Hospital can be managed (Patient Room, ICU, etc.)

- [ ] **Feature 5:** All other pharmacies and labs other than Hospitals can be integrated.

- [ ] **Feature 6:** Emergency Support can also be integrated, and many more. 


### This is all about my vision for a Health-Care-System. 
