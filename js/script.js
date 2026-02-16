// ---------------- Services ----------------
const services = [
    { id: 1, name: "Network Supply & Setup", price: 15000, technicianId: 1 },
    { id: 2, name: "Windows Installation", price: 3000, technicianId: 3 },
    { id: 3, name: "CCTV Installation", price: 35000, technicianId: 1 },
    { id: 4, name: "Antivirus Installation", price: 2000, technicianId: 2 },
    { id: 5, name: "Portal Creation", price: 45000, technicianId: 4 },
    { id: 6, name: "Machine Servicing", price: 8000, technicianId: 3 },
    { id: 7, name: "Machine Delivery", price: 2500, technicianId: 5 }
];

// ---------------- Technicians ----------------
const technicians = [
    { id: 1, name: "John Mwangi", phone: "+254712345678", email: "john@easytech.co.ke", specialty: "Network & CCTV", experience: 6, img: "images/john.jpg" },
    { id: 2, name: "Sarah Otieno", phone: "+254713456789", email: "sarah@easytech.co.ke", specialty: "Software & Antivirus", experience: 5, img: "images/sarah.jpg" },
    { id: 3, name: "David Kamau", phone: "+254714567890", email: "david@easytech.co.ke", specialty: "Windows & Machine Repair", experience: 7, img: "images/david.jpg" },
    { id: 4, name: "Grace Wanjiku", phone: "+254715678901", email: "grace@easytech.co.ke", specialty: "Portal & Web Solutions", experience: 4, img: "images/grace.jpg" },
    { id: 5, name: "Brian Njoroge", phone: "+254716789012", email: "brian@easytech.co.ke", specialty: "Hardware Support & Logistics", experience: 5, img: "images/brian.jpg" }
];

// ---------------- Local Storage ----------------
let requests = JSON.parse(localStorage.getItem("requests")) || [];
function saveRequests() {
    localStorage.setItem("requests", JSON.stringify(requests));
}

// ---------------- Helpers ----------------
function getTechnicianById(id) {
    return technicians.find(t => t.id === id);
}

function createCard(title, contentHtml) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${title}</h3>${contentHtml}`;
    return card;
}

// ---------------- Populate Services Dropdown ----------------
function populateServiceDropdown(selectElement) {
    selectElement.innerHTML = `<option value="">--Choose a Service--</option>`;
    services.forEach(s => {
        const option = document.createElement('option');
        option.value = s.id;
        option.textContent = `${s.name} - KSH ${s.price.toLocaleString()}`;
        selectElement.appendChild(option);
    });
}

// ---------------- Render Services ----------------
function renderServices(container) {
    container.innerHTML = '';
    services.forEach(service => {
        const tech = getTechnicianById(service.technicianId);
        const contentHtml = `
            <p><strong>Price:</strong> KSH ${service.price.toLocaleString()}</p>
            <p><strong>Technician:</strong> ${tech.name} (${tech.specialty})</p>
            <a href="request.html?serviceId=${service.id}" class="card-btn">Request This Service</a>
        `;
        container.appendChild(createCard(service.name, contentHtml));
    });
}

// ---------------- Render Technicians ----------------
function renderTechnicians(container) {
    container.innerHTML = '';
    technicians.forEach(tech => {
        const assignedServices = services
            .filter(s => s.technicianId === tech.id)
            .map(s => s.name)
            .join(', ');
        const contentHtml = `
            <img src="${tech.img}" alt="${tech.name}">
            <p><strong>Specialty:</strong> ${tech.specialty}</p>
            <p><strong>Experience:</strong> ${tech.experience} yrs</p>
            <p><strong>Services:</strong> ${assignedServices}</p>
            <p><strong>Contact:</strong> ${tech.phone}<br>${tech.email}</p>
        `;
        container.appendChild(createCard(tech.name, contentHtml));
    });
}

// ---------------- Render Requests ----------------
function renderRequests(container, loggedIn = false) {
    container.innerHTML = '';
    if (requests.length === 0) {
        container.innerHTML = "<p>No requests yet. Once someone asks for help, you'll see it here.</p>";
        return;
    }

    requests.forEach(req => {
        const contentHtml = `
            <p><strong>Customer:</strong> ${req.name}</p>
            <p><strong>Phone:</strong> ${req.phone}</p>
            <p><strong>Location:</strong> ${req.location}</p>
            <p><strong>Price:</strong> KSH ${req.price.toLocaleString()}</p>
            <p><strong>Technician:</strong> ${req.technician}</p>
            <div class="card-actions">
                <button class="complete-btn">✅ Complete</button>
                <button class="delete-btn">🗑 Delete</button>
            </div>
        `;
        const card = createCard(req.service, contentHtml);
        if (req.completed) card.style.opacity = 0.5;
        container.appendChild(card);

        const completeBtn = card.querySelector('.complete-btn');
        const deleteBtn = card.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => {
            req.completed = true;
            saveRequests();
            card.style.opacity = 0.5;
            setTimeout(() => {
                requests = requests.filter(r => r.id !== req.id);
                saveRequests();
                renderRequests(container, loggedIn);
            }, 500);
        });

        deleteBtn.addEventListener('click', () => {
            if (!loggedIn) return;
            if (confirm(`Delete request from ${req.name}?`)) {
                requests = requests.filter(r => r.id !== req.id);
                saveRequests();
                renderRequests(container, loggedIn);
            }
        });

        if (loggedIn) deleteBtn.style.display = 'inline-block';
    });
}

// ---------------- Login System ----------------
function loginRequestsPage(container) {
    const username = prompt("Enter username:");
    const password = prompt("Enter password:");

    if (username === "admin" && password === "admin123") {
        alert("Login successful! You can now delete requests.");
        renderRequests(container, true);
    } else {
        alert("Wrong credentials. You cannot delete requests.");
        renderRequests(container, false);
    }
}

// ---------------- Auto Refresh ----------------
function autoRefreshRequests(container, loggedIn = false, interval = 10000) {
    setInterval(() => renderRequests(container, loggedIn), interval);
}
