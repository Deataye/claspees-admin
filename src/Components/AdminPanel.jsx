import React, { useState } from "react";

const AdminPanel = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const tabs = [
    { name: "Dashboard", value: "dashboard" },
    { name: "Manage Products", value: "products" },
    { name: "Manage FAQs", value: "faqs" },
    { name: "Users", value: "users" },
  ];

  return (
    <div className="min-h-screen  bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-purple-700 text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav>
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                selectedTab === tab.value
                  ? "bg-purple-900"
                  : "hover:bg-purple-800"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {selectedTab === "dashboard" && <Dashboard />}
        {selectedTab === "products" && <ManageProducts />}
        {selectedTab === "faqs" && <ManageFAQs />}
        {selectedTab === "users" && <ManageUsers />}
      </main>
    </div>
  );
};

export default AdminPanel;

// Dashboard Component
const Dashboard = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
    <p>Welcome to the admin panel! Use the sidebar to manage your website.</p>
  </div>
);

// Manage Products Component
const ManageProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Claspees Pack 1", price: "$9.99" },
    { id: 2, name: "Claspees Pack 2", price: "$9.99" },
  ]);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Claspees Pack ${products.length + 1}`,
      price: "$9.99",
    };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <button
        onClick={addProduct}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4"
      >
        Add Product
      </button>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <span>{product.name}</span>
            <span>{product.price}</span>
            <button
              onClick={() => deleteProduct(product.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Manage FAQs Component
const ManageFAQs = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, question: "What are Claspees?", answer: "Claspees are amazing!" },
    {
      id: 2,
      question: "How do Claspees work?",
      answer: "Claspees secure your drawstrings.",
    },
  ]);

  const addFaq = () => {
    const newFaq = {
      id: faqs.length + 1,
      question: `New FAQ ${faqs.length + 1}`,
      answer: "New FAQ Answer",
    };
    setFaqs([...faqs, newFaq]);
  };

  const deleteFaq = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage FAQs</h2>
      <button
        onClick={addFaq}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4"
      >
        Add FAQ
      </button>
      <ul className="space-y-4">
        {faqs.map((faq) => (
          <li
            key={faq.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <span>{faq.question}</span>
            <button
              onClick={() => deleteFaq(faq.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Manage Users Component
const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Admin User", email: "admin@claspees.com" },
  ]);

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@claspees.com`,
    };
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <button
        onClick={addUser}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4"
      >
        Add User
      </button>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <span>{user.name}</span>
            <span>{user.email}</span>
            <button
              onClick={() => deleteUser(user.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
