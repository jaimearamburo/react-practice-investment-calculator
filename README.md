# 📈 Investment Calculator

A sleek, responsive **React web application** that calculates and visualizes compound investment growth over time. Users can input their initial capital, annual contributions, expected return rates, and duration to instantly see how their wealth accumulates.

This project was built to practice **state management**, **component structuring**, and **dynamic data rendering** in React.

## ✨ Features
* **Real-Time Calculation:** Updates the financial results instantly as the user modifies any input field.
* **Bi-directional Data Flow:** Utilizes controlled components and custom change handlers to manage state flawlessly.
* **Data Type Safety:** Automatically sanitizes and forces numeric conversions (`+value`) from raw string inputs to prevent calculation bugs.
* **Component-Driven Architecture:** Segmented into modular, reusable UI components (`Header`, `UserInput`, `Result`).

## 🛠️ Tech Stack
* **Frontend:** React (Hooks: `useState`)
* **Styling:** CSS3
* **Build Tool:** Vite

## 🧠 Core Technical Implementation
The core architecture focuses on **lifting state up** to the `App` component, creating a single source of truth for the financial parameters:

```javascript
const [investmentParameters, setInvestmentParameters] = useState({
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
});
```

A dynamic handler dynamically matches inputs via their unique IDs and spreads previous state smoothly to maintain UI performance:
```javascript
const handleInputChange = (field) => {
  const { id, value } = field;
  setInvestmentParameters((prevParams) => ({
    ...prevParams,
    [id]: +value // Formats string to a number instantly
  }));
}
```

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```

2. **Navigate into the project directory:**
   ```bash
   cd YOUR_REPO_NAME
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   # OR npm start
   ```

## 📝 Key Takeaways
Building this application helped solidify my understanding of:
* Handling multi-field form state efficiently in a single state object.
* Passing functions as props down to child components (`UserInput`) to update parent state.
* Consuming user data to perform complex computations down the component tree (`Result`).
