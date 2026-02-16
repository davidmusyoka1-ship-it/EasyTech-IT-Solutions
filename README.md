# EasyTech IT Solutions

## Project Overview
EasyTech IT Solutions is a web app crafted to simplify access to various IT services, including setting up networks, installing Windows, setting up CCTV, installing antivirus software, creating portals, servicing machines, and delivering them. With this application, customers can:

- Check out services and their prices in KSH
- See which technicians are handling each service
- Submit service requests via a user-friendly form
- Keep an eye on their requests in real-time

This project addresses the hassle of efficiently managing and accessing IT services, making it easier for clients to connect with the right technicians.

---

## Features

1. **Dynamic Services Display**  
   - Services come up with their assigned technicians seamlessly using JavaScript.

2. **Technician Profiles**  
   - Offers details about technicians, including their specialties, experience, and the services they cover dynamically.

3. **Service Request Form**  
   - Users can easily request services through a form.  
   - The form checks for valid entries with JavaScript.  
   - Requests get stored in `localStorage`.

4. **Requests Management**  
   - All requests submitted show up on a dedicated page.  
   - Data fetches dynamically from `localStorage`.

5. **Responsive Design**  
   - Adapts beautifully to mobile, tablet, and desktop views, thanks to CSS Flexbox and media queries.

6. **Professional & Modern UI**  
   - A corporate blue color scheme paired with sleek, modern design elements.  
   - Services, technicians, and requests are showcased via clean card layouts.

---

## Technologies Used

- **HTML5** – Utilizes a semantic structure with tags like `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`  
- **CSS3** – Makes use of Flexbox, media queries, and responsive layouts  
- **JavaScript** – Handles DOM manipulation, events, form validation, and localStorage interactions  
- **VS Code** – The go-to code editor for development

---

## Project Structure
EasyTech/
│
├── index.html # Home page showing services
├── technicians.html # Page displaying all technician profiles
├── request.html # Page for submitting service requests
├── requests.html # Page for displaying all submitted requests
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

1. Clone the repository or get the files onto your device.
2. Open `index.html` in your web browser.
3. Use the menu to navigate:
   - **Home** – Check out the services  
   - **Technicians** – Look at technician profiles  
   - **Request Service** – Send in a new service request  
   - **View Requests** – Review all submitted requests
4. Go ahead and submit a request to see the localStorage functionality in action.

---

## Known Issues / Future Improvements

- The images are placeholders; real profile pictures would make it better.  
- LocalStorage is great, but a backend database would add some persistent storage power.  
- A search or filter feature for services or technicians could really enhance usability.  
- Adding login authentication for technicians or an admin panel for management could be beneficial.

---

## Git & Version Control

- Committed with descriptive messages like:
  - `Initial project structure`
  - `Add services and technicians data`
  - `Implement dynamic services display`
  - `Create request form with validation`
  - `Add requests page displaying localStorage data`
  - `Enhance styles.css for responsiveness`
  - `Add README.md`
- The project is hosted publicly on GitHub for submission.
