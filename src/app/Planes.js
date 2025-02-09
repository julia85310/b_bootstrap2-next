'use client';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Planes() {
    return <div className="container py-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border">
            <div className="card-header text-center">
              <h4>Básico</h4>
            </div>
            <div className="card-body">
              <h5>$10/mes</h5>
              <ul>
                <li>1 Usuario</li>
                <li>Acceso básico</li>
              </ul>
              <button className="btn btn-primary w-100">Seleccionar plan</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border border-primary bg-light">
            <div className="card-header text-center">
              <h4>Pro</h4>
            </div>
            <div className="card-body">
              <h5>$30/mes</h5>
              <ul>
                <li>5 Usuarios</li>
                <li>Acceso completo</li>
              </ul>
              <button className="btn btn-primary w-100">Seleccionar plan</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border">
            <div className="card-header text-center">
              <h4>Premium</h4>
            </div>
            <div className="card-body">
              <h5>$50/mes</h5>
              <ul>
                <li>10 Usuarios</li>
                <li>Acceso completo + avanzado</li>
              </ul>
              <button className="btn btn-primary w-100">Seleccionar plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
}