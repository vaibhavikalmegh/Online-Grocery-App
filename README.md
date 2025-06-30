### 🧾 Dashboard Page

Here is my **Dashboard page** of the Online Grocery App System.  
Users can create orders, view past orders, and explore a smooth UI.
<p align="center">
  <img src="https://github.com/VaibhaviKalmegh/Online-Grocery-App/blob/main/Output.png?raw=true" alt="App Screenshot" width="700"/>
</p>

### 🛒 Product List

This is the **Products section** where you can add, edit, or delete items available in the store.  
Happy shopping! 🛍️
<p align="center">
  <img src="https://github.com/VaibhaviKalmegh/Online-Grocery-App/blob/main/Products.png?raw=true" alt="App Screenshot" width="700"/>
</p>

# Online Grocery App System

An Online Grocery App System built using **HTML, CSS, JavaScript (jQuery)** for the frontend and **Python Flask** with **MySQL** for the backend. This application allows users to manage grocery products and process customer orders with a modern, responsive UI.

## 🌐 Live Demo

- **Frontend (Vercel)**: [https://grocery-store-orcin.vercel.app](grocery-store-orcin.vercel.app)
- **Backend (Render)**: [https://grocery-store-api.onrender.com](https://grocery-1zba.onrender.com)

---

## 🚀 Features

- View & Manage Product Inventory
- Add/Edit/Delete Products
- Create New Orders
- Auto-calculated Total & Grand Total
- Background slideshow with 23 images
- Responsive layout with Bootstrap

---

## 🛠️ Tech Stack

**Frontend:**

- HTML, CSS, JavaScript
- jQuery
- Bootstrap 3

**Backend:**

- Python 3.x
- Flask
- Flask-CORS
- MySQL (Remote Database)

**Deployment:**

- Frontend: Vercel
- Backend: Render

---

## 📂 Project Structure

```
├── ui/
│   ├── index.html
│   ├── manage-product.html
│   ├── order.html
│   ├── css/
│   └── js/
├── backend/
│   ├── server.py
│   ├── sql_connection.py
│   ├── products_dao.py
│   ├── orders_dao.py
│   └── uom_dao.py
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/vaibhavikalmegh/Online-Grocery-App.git
cd grocery-store
```

### 2. Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 3. Setup Environment Variables

Create a `.env` file in the backend directory:

```env
DB_HOST=your-db-host
DB_USER=your-db-username
DB_PASSWORD=your-db-password
DB_NAME=your-database-name
```

### 4. Run the Flask Server Locally

```bash
python server.py
```

### 5. Open Frontend

Open `ui/index.html` in your browser or serve using Live Server.

---

## 🔒 Security Notes

- **Database credentials** are not included in this repository.
- Use `.env` for secrets and make sure it is listed in `.gitignore`.
- Do not expose API secrets or tokens in client-side code.

---

## 🙌 Acknowledgements

- [Bootstrap](https://getbootstrap.com)
- [jQuery](https://jquery.com)
- [Render](https://render.com)
- [Vercel](https://vercel.com)

---

## 📓 License

This project is for educational and demonstration purposes only. You may modify and use it as needed.

---

## 👩‍💻 Author
Vaibhavi Kalmegh
📍 G.V.I.S.H., Amravati
🎓 M.Sc. in Statistics (2023) 
Follow me on:  
🔗 [GitHub](https://github.com/vaibhavikalmegh)  
🔗 [LinkedIn](https://www.linkedin.com/in/vaibhavikalmegh18)
