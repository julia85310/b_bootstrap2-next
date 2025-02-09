'use client';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
      <div className="card-body">
        <h5 className="card-title text-center mb-4">Iniciar sesión</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" placeholder="Introduce tu correo" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Introduce tu contraseña" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
        </form>
        <div className="mt-3 text-center">
          <a href="#" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  </div>
}