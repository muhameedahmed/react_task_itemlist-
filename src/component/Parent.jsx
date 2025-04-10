import React, { useState } from 'react';
import Child from './child';

export default function Parent() {
  const [products, setProducts] = useState([
    { id: 1, code: 'P1001', name: 'Laptop', category: 'Electronics', count: 10, onSale: true },
    { id: 2, code: 'P1002', name: 'Phone', category: 'Electronics', count: 15, onSale: false },
    { id: 3, code: 'P1003', name: 'Tablet', category: 'Electronics', count: 8, onSale: true },
    { id: 4, code: 'P1004', name: 'Monitor', category: 'Accessories', count: 12, onSale: false },
    { id: 5, code: 'P1005', name: 'Keyboard', category: 'Accessories', count: 20, onSale: true },
    { id: 6, code: 'P1006', name: 'Mouse', category: 'Accessories', count: 18, onSale: false },
    { id: 7, code: 'P1007', name: 'Headphones', category: 'Audio', count: 25, onSale: true },
    { id: 8, code: 'P1008', name: 'Speaker', category: 'Audio', count: 5, onSale: false },
    { id: 9, code: 'P1009', name: 'Printer', category: 'Office', count: 7, onSale: true },
    { id: 10, code: 'P1010', name: 'Router', category: 'Networking', count: 10, onSale: false },
  ]);

  function deleteProduct(id) {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    console.log("delete " + id);
  }

  function updateProductCount(index) {
    setProducts(prevProducts =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, count: product.count + 1 } : product
      )
    );
    console.log("update " + index);
  }

  return (
    <div className="mx-auto w-full top-0 left-0 right-0">
      <div className="flex flex-wrap py-4 w-full justify-start"> {/* Changed to justify-start */}
        {products.map((product, i) => (
          <Child
            key={product.id}
            index={i}
            update={updateProductCount}
            delete={deleteProduct}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}