import React, { useState } from 'react';

const Admin = () => {
  // Состояние для хранения данных продуктов
  const [products, setProducts] = useState([
    {
      name: "Andrew Huang",
      text: "I can always find what I’m looking for on Splice, whether it’s the exact sound I want or just a bit of inspiration.",
      image: "url-to-andrew-huang-image",
    },
  ]);

  // Функция для удаления продукта
  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  // Функция для редактирования продукта
  const handleEdit = (index) => {
    const newName = prompt("Введите новое имя:", products[index].name);
    const newText = prompt("Введите новый текст:", products[index].text);
    if (newName && newText) {
      const updatedProducts = [...products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        name: newName,
        text: newText,
      };
      setProducts(updatedProducts);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <h1>Admin Panel</h1>
          <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '50px', height: '50px' }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.text}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Admin;
