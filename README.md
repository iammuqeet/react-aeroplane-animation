# 🚀 Aeroplane Animated Runway (React + Vite + Tailwind CSS)

## 📌 Overview
This is a modern **Aeroplane Animated Runway application** built using **React**, **Vite**, and **Tailwind CSS**. It includes a unique **animated runway effect** where an airplane moves as you scroll. The runway lights up dynamically as the airplane passes.

---

## 🛠️ Tech Stack
- **React** (with React Router for navigation)
- **Vite** (for fast development and build speed)
- **Tailwind CSS** (for styling and responsiveness)
- **Framer Motion** (for smooth animations)

---

## ✨ Features
✅ **Airplane Animation:** The airplane moves up as you scroll.  
✅ **Dynamic Runway Lighting:** Runway lights change color when the airplane passes over them.  
✅ **Fast Performance:** Powered by **Vite** for rapid development.  
✅ **Fully Responsive:** Optimized for mobile, tablet, and desktop screens.  

---

## 🎨 Runway Animation (`Runway.jsx`)
This component creates a **scroll-based airplane animation** with dynamically changing runway lights.

### 🔹 How It Works
- The airplane moves **from bottom to top** as the user scrolls.
- Runway lights change color when the airplane **passes over them**.
- The animation **adjusts dynamically** based on page content height.

### ✨ Key Code Snippet
```jsx
<motion.div
  initial={{ y: 0 }}
  animate={{ y: -progress * (window.innerHeight - 80) }}
  transition={{ type: "tween", ease: "linear" }}
  className="absolute bottom-0"
>
  <img src="/aeroplane.svg" alt="Aeroplane" className="w-[80px] h-[80px] max-w-none" />
</motion.div>
```

---

## 🚀 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/iammuqeet/react-aeroplane-animation.git

cd react-aeroplane-animation
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start Development Server
```sh
npm run dev
```

### 4️⃣ Build for Production
```sh
npm run build
```

---

## 🎯 Future Improvements
- 🌓 **Dark Mode** toggle for better UX.

---

## 📜 License
This project is **MIT Licensed** – feel free to modify and use it!

---

## 📬 Contact
**Created by:** Muqeet Ahmad  
📧 **Email:** iammuqeetahmad@gmail.com  
🐦 **LinkedIn:** [@iammuqeet-ahmad](https://www.linkedin.com/in/iammuqeet-ahmad/)

