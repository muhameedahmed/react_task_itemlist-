import React from 'react';

export default function Child(props) {
  let { id, code, category, name, count, onSale } = props.products;

  return (
    <>
     <div className="w-1/3 p-2">
      <div className="p-1  bg-gray-700 rounded-lg text-white relative shadow-md">
        {onSale && (
          <span className="sale">
            Sale
          </span>
        )}

        <h1 className="text-1xl">{name}</h1>
        <p className="text-2xl mt-1">
          <span className="font-semibold">Code:</span> {code}
        </p>
        <p className="text-2xl">
          <span className="font-semibold">ID:</span> {id}
        </p>
        <p className="text-2xl">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-2xl">
          <span className="font-semibold">Stock:</span> {count}
        </p>
        <button  onClick={()=>props.delete(id) } className="btn hover:border-red-600 border-red-600 text text-red-300 m-2 mx-auto"> Delete </button>
        <button onClick={()=>props.update(props.index) } className="btn hover:border-amber-50 border-red-600 text text-red-300 m-2 mx-auto"> UPDATE </button>
      </div>
    </div>
    </>
 
  );
}
