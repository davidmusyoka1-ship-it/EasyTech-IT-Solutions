# EasyTech IT Solutions

## Project Overview
EasyTech IT Solutions is a web application designed to provide easy access to IT services, such as network setup, Windows installation, CCTV installation, antivirus setup, portal creation, machine servicing, and machine delivery. The application allows customers to:

- View services and prices in KSH
- See technicians assigned to each service
- Submit service requests through a dynamic form
- Track requests in real-time

The project solves the problem of managing and accessing IT services efficiently while connecting clients to the right technicians.

---

## Features

1. **Dynamic Services Display**  
   - Services are listed with assigned technicians dynamically using JavaScript.

2. **Technician Profiles**  
   - Displays technician details, specialties, experience, and assigned services dynamically.

3. **Service Request Form**  
   - Users can request services via a form.  
   - Form input is validated with JavaScript.  
   - Requests are saved to `localStorage`.

4. **Requests Management**  
   - All submitted requests are displayed on a separate page.  
   - Data is retrieved dynamically from `localStorage`.

5. **Responsive Design**  
   - Works on mobile, tablet, and desktop using CSS Flexbox and media queries.

6. **Professional & Modern UI**  
   - Corporate blue color scheme with modern tech styling.  
   - Clean layouts using cards for services, technicians, and requests.

---

## Technologies Used

- **HTML5** – Semantic structure with `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`  
- **CSS3** – Flexbox, media queries, responsive layout  
- **JavaScript** – DOM manipulation, event handling, form validation, localStorage  
- **VS Code** – Code editor for development

---

## Project Structure
EasyTech/
│
├── index.html # Home page showing services
├── technicians.html # Page showing all technician profiles
├── request.html # Page for submitting service requests
├── requests.html # Page displaying all submitted requests
│
├── css/
│ └── styles.css # Shared stylesheet
├── js/
│ └── script.js # Shared JavaScript (services, technicians, form handling, localStorage)
└── images/ # Technician profile images
├── john.jpg
├── sarah.jpg
├── david.jpg
├── grace.jpg
└── brian.jpg

---

## Usage

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.
3. Navigate using the menu:
   - **Home** – View services  
   - **Technicians** – View technician profiles  
   - **Request Service** – Submit a new service request  
   - **View Requests** – Check all submitted requests
4. Submit a request to test dynamic localStorage functionality.

---

## Known Issues / Future Improvements

- Images are placeholders; real profile pictures can be added.  
- Currently uses localStorage; a backend database could be added for persistent storage.  
- Optionally, a search or filter feature could be implemented for services or technicians.  
- Add login authentication for technicians or admin panel for management.

---

## Git & Version Control

- Descriptive commit messages were used, for example:
  - `Initial project structure`
  - `Add services and technicians data`
  - `Implement dynamic services display`
  - `Create request form with validation`
  - `Add requests page displaying localStorage data`
  - `Enhance styles.css for responsiveness`
  - `Add README.md`
- Hosted publicly on GitHub for submission.

