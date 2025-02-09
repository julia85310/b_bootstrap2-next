'use client';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ServiceCards() {
  const services = [
    { id: 1, title: 'Servicio 1', description: 'Descripción breve del servicio 1', imageUrl: '/producto.png' },
    { id: 2, title: 'Servicio 2', description: 'Descripción breve del servicio 2', imageUrl: '/producto.png' },
    { id: 3, title: 'Servicio 3', description: 'Descripción breve del servicio 3', imageUrl: '/producto.png' }
  ];

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {services.map(service => (
          <div className="col" key={service.id}>
            <div className="card h-100">
              <img src={service.imageUrl} className="card-img-top" alt={service.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <div className="mt-auto">
                  <button className="btn btn-primary w-100">Más información</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
