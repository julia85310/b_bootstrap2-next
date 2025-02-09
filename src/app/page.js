'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Nav";
import Form from './Form';
import Carousel from './Carrousel';
import Tabla from './Tabla';
import ModalForm from './ModalForm';
import ServiceCards from './ServiceCards';
import Utility from './Utility';
import Planes from './Planes';
import Login from './Login';
export default function Home() {
  const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', imageUrl: '/producto.png' },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', imageUrl: '/producto.png' },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', imageUrl: '/producto.png' },
    { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', imageUrl: '/producto.png' },
    { id: 5, name: 'Producto 5', description: 'Descripción del producto 5', imageUrl: '/producto.png' },
    { id: 6, name: 'Producto 6', description: 'Descripción del producto 6', imageUrl: '/producto.png' }
  ];
  return (<div>
    <Navbar></Navbar>
    <div className="container py-5" id='Ejercicio2'>
      <h1 className="text-center mb-5">Nuestros Productos</h1>
      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">Comprar ahora</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Carousel></Carousel>
    <Form></Form>
    <Tabla></Tabla>
    <ModalForm></ModalForm>
    <ServiceCards></ServiceCards>
    <Utility></Utility>
    <Planes></Planes>
    <Login></Login>
  </div>);
}
