# 📚 Book Generator App

A single-page web application to generate fake book data for testing bookstore applications. Built with React, Tailwind CSS, and Faker.js, this app supports dynamic data generation, infinite scroll, and multilingual content.

---

## 🚀 Features

- ✅ Select Language/Region: English 🇺🇸, German 🇩🇪, French 🇫🇷
- ✅ Seed-based book generation (reproducible results)
- ✅ Random seed generator button 🔀
- ✅ Average Likes per Book (slider: supports fractional values)
- ✅ Average Reviews per Book (input: supports fractional values)
- ✅ Dynamically updated book table with:
  - Index
  - ISBN
  - Title
  - Author
  - Publisher
- ✅ Infinite Scroll (20 initial, then 10 per scroll)
- ✅ Expandable rows with:
  - Book cover (generated from seed)
  - Title + Author overlay
  - Review section
- ✅ Fully responsive and styled with Tailwind CSS

## 📦 Tech Stack

- **React**
- **Tailwind CSS**
- **@faker-js/faker**
- **Vite**
- **seedrandom**

---

## 🛠 Installation & Development

```bash
git clone https://github.com/your-username/Book-List-App
cd Book-List-App
npm install
npm run dev
```
