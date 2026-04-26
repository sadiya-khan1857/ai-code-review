# 🚀 AI Code Review System

An AI-powered web application that analyzes code, detects issues, and suggests improvements with a clean and interactive UI.

---

## ✨ Features

### 🔐 Authentication (Frontend - LocalStorage)

* Login & Signup UI
* Dynamic Navbar (Login/Signup ↔ Logout)
* Protected Routes (Dashboard access control)

### 🧠 Code Review System

* Paste code and select language
* AI-based issue detection (mock data currently)
* Severity levels:

  * 🔴 High
  * 🟠 Medium
  * 🟡 Low

### 📊 Dashboard

* Issues table with line numbers
* Suggestions list
* Improved code section
* Copy to clipboard feature
* Syntax highlighting (Prism.js)

### 📜 Review History

* Stores previous reviews
* Click to reload past results
* Sidebar (collapsible like VS Code)
* Visible only for logged-in users

### 🎨 UI/UX

* Built with Tailwind CSS
* Responsive and clean design
* Loading states (Analyzing...)
* Modern layout with sidebar + main panel

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Prism.js (syntax highlighting)
* React Router DOM

### Backend (In Progress)

* FastAPI
* REST APIs for Login / Signup / Code Review

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│
├── App.jsx
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run frontend

```bash
npm run dev
```

---

## 🔐 Authentication Flow (Current)

* Uses `localStorage` for login state
* Protected routes prevent unauthorized dashboard access
* Will be replaced with JWT-based authentication using FastAPI

---

## 🔄 Upcoming Features

* 🔐 JWT Authentication (Backend)
* 🧠 Real AI code analysis (LLM integration)
* 📁 Persistent review history (database)
* 🔍 Search in history
* 🗑️ Delete / manage reviews
* 🌙 Dark mode

---

## 📸 Screens (Optional)

*Add screenshots here later*

---

## 🤝 Contributing

Feel free to fork the repo and submit pull requests.

---

## 📌 Author

Built as a full-stack learning project to practice:

* React
* FastAPI
* Git workflows
* Real-world app architecture

---
