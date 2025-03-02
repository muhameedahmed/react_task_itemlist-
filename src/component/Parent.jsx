import React, { useState } from 'react';
import Child from './child';  // Ensure filename is `Child.js`

export default function Parent() {
  //const [products, SetProducts] = useState( { id: 1, code: 'P1001',category: 'Electronics', Pname: 'Laptop', count: 10, onSale: true });
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
  ])

  function deleteproduct(id){
    let newproduct = JSON.parse(JSON.stringify(products));
    newproduct = newproduct.filter((product)=>product.id!=id);
    setProducts(newproduct);
  
    console.log("delete"+id);
  } 
  
  function updatefunction(index){
    let newproduct = JSON.parse(JSON.stringify(products));
    newproduct[index].count++;
    setProducts(newproduct);
  
    console.log("update"+index);
  } 

  return (
    <div>
        <div className=" container mx-auto ">
            <div className="flex flex-wrap py-4">
            {products.map((product ,i )=> <Child key={product.id}  index ={i} update={updatefunction} delete={deleteproduct} products={product}/>)}
          
            </div>
        </div>
     
    </div>
  );
}
