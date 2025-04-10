import React from 'react';

export default function Child({ product, index, update, delete: deleteProduct }) {
  const { id, code, category, name, count, onSale } = product;

  return (
    <div className="w-1/3 p-2"> {/* Fixed width for each card */}
      <div className="p-4 bg-gray-700 rounded-lg text-white relative shadow-md">
        {onSale && (
          <span className="absolute top-0 right-0 px-1 py-1 rounded-b-md bg-red-700 text-red-100">
            Sale
          </span>
        )}

        <h1 className="text-xl text-center">{name}</h1>
        <p className="mt-1 text-sm">
          <span className="font-semibold">Code:</span> {code}
        </p>
        <p className="text-sm">
          <span className="font-semibold">ID:</span> {id}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Stock:</span> {count}
        </p>
        <button
          onClick={() => deleteProduct(id)}
          className="py-2 w-full my-2 rounded-md border hover:border-red-600 border-red-600 text-red-300 mx-auto"
        >
          Delete
        </button>
        <button
          onClick={() => update(index)}
          className="py-2 w-full my-2 rounded-md border hover:border-amber-500 border-amber-500 text-amber-300 mx-auto"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
}