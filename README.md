<div align="center">

# 🚀 Accredian Enterprise Website Clone

### A pixel-perfect, responsive clone of the Accredian Enterprise landing page

Built with **Next.js**, **TypeScript**, and **Tailwind CSS** — following modern React and Next.js best practices.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Setup Instructions](#-setup-instructions)
- [Approach Taken](#-approach-taken)
- [AI Usage](#-ai-usage)
- [Improvements With More Time](#-improvements-with-more-time)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Author](#-author)

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React, React Icons |
| **Carousel** | Embla Carousel |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/bytepriyanshu/accredian-clone.git
```

### 2️⃣ Navigate to the project
```bash
cd accredian-clone
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Run the development server
```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

### 5️⃣ Build for production
```bash
npm run build
```

### 6️⃣ Start the production server
```bash
npm start
```

---

## 🧩 Approach Taken

The project was built with a **component-based architecture** to maximize reusability and maintainability.

### Key Decisions

- 🧭 Used the **Next.js App Router**
- 🧱 Built reusable UI components such as `Button`, `FAQ`, `CTA`, `Testimonials`, and `Footer`
- 🖥️ Preferred **Server Components** wherever interactivity was not required
- ⚡ Used **Client Components** only for interactive features such as:
  - FAQ accordion
  - Testimonials carousel
  - Enquiry modal
- 🖼️ Used **`next/image`** for optimized image loading and **`next/navigation`** for optimized component routing.
- ♿ Followed semantic HTML for improved accessibility and SEO
- 🎨 Kept styling modular using Tailwind CSS utilities
- 🔘 Designed the reusable `Button` component to support different variants, sizes, and optionally open the enquiry modal

---

## 🤖 AI Usage

AI was used as a **development assistant** throughout the project. It was primarily used for:

| Use Case | Description |
|---|---|
| 🧠 Brainstorming | Component architecture planning |
| 🏗️ Scaffolding | Generating initial component structures |
| 📱 Responsiveness | Suggesting responsive layouts |
| 🐞 Debugging | Resolving React and Next.js issues |

> ✅ All generated code was reviewed, modified, integrated, and tested manually before being used in the final project.

---

## 🔮 Improvements With More Time

Given additional time, the project could be further improved by:

- [ ] Adding form validation using **React Hook Form** and **Zod**
- [ ] Integrating the enquiry form with a dedicated backend API
- [ ] Improving accessibility (ARIA labels, focus management, keyboard navigation)
- [ ] Adding animations using **Framer Motion**
- [ ] Writing unit tests for reusable components
- [ ] Creating a centralized design system for colors, spacing, and typography
- [ ] Improving Lighthouse accessibility and performance scores

---

## 📂 Project Structure

```
src/
├── app/          # Next.js App Router pages & layouts
├── components/   # Reusable UI components
├── utils         # Helper functions & utilities
├── public/        # Static assets
```

---

## ✨ Features

<div align="center">

| ✅ | Feature |
|---|---|
| 📱 | Responsive design |
| 🧱 | Component-based architecture |
| 🔘 | Reusable Button component |
| 💬 | Enquiry modal |
| ❓ | FAQ accordion |
| 🌀 | Testimonials carousel |
| 🖼️ | Optimized images |
| 🔍 | SEO-friendly semantic HTML |
| 🔷 | TypeScript support |
| 🗄️ | Created API to store contact/enquiry form data

</div>

---

## 👨‍💻 Author

<div align="center">

Developed with ❤️ by **Priyanshu**
as part of the **Accredian Frontend Assignment**

</div>