'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ModalForm() {
  return (
    <div className="container mt-5">
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal">
        Regístrate
      </button>

      <div className="modal fade" id="registerModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Registro</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control mb-2" placeholder="Nombre de usuario" required />
              <input type="password" className="form-control mb-2" placeholder="Contraseña" required />
              <input type="password" className="form-control" placeholder="Confirmar contraseña" required />
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button className="btn btn-primary">Registrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}