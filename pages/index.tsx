import {Producto, ProductosProps} from "@/components/Producto";
import { useForm } from "react-hook-form"
import { useState } from "react";

const datas: ProductosProps[] = [
  {
    "image": 'https://placehold.co/300x200',
    "title": 'Producto 1',
    "text": 'Este es el producto 1'
  },
  {
    "image": 'https://placehold.co/300x200',
    "title": 'Producto 2',
    "text": 'Este es el producto 2'
  },
  {
    "image": 'https://placehold.co/300x200',
    "title": 'Producto 3',
    "text": 'Este es el producto 3'
  },
  {
    "image": 'https://placehold.co/300x200',
    "title": 'Producto 4',
    "text": 'Este es el producto 4'
  },
  {
    "image": 'https://placehold.co/300x200',
    "title": 'Producto 5',
    "text": 'Este es el producto 5'
  },
  {
    "image": 'https://placehold.co/300x200',
    "title": 'Producto 6',
    "text": 'Este es el producto 6'
  }
];

const Home = () => {
  const [products, setProducts] = useState<ProductosProps[]>(datas)
  const {register, handleSubmit} = useForm();
  
  const onSubmit = (d:any) =>{
    setProducts([...products,d])
   }
   
  
  return (
    <main>
      <h1>Productos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Ingresa el Nombre: </label>
        <input type="text" {...register("title")}/>

        <label>Ingresa la Imagen: </label>
        <input type="text"  {...register("image")}/>

        <label>Ingresa la Descripción: </label>
        <input type="text"  {...register("text")}/>

        <input type="submit" value="Añadir" />
      </form>
      <div className="grid grid-cols-3 gap-4">
        {products.map((producto) => (
          <Producto key={producto.title} {...producto} />
        ))}
      </div>
    </main>
  );
};

export default Home;


