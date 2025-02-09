'use client';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Tabla() {
  const users = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', registered: '2024-01-15', status: 'Activo' },
    { id: 2, name: 'María López', email: 'maria@example.com', registered: '2023-12-20', status: 'Inactivo' },
    { id: 3, name: 'Carlos García', email: 'carlos@example.com', registered: '2024-02-01', status: 'Activo' },
    { id: 4, name: 'Ana Torres', email: 'ana@example.com', registered: '2023-11-05', status: 'Inactivo' }
  ];

  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo electrónico</th>
              <th>Fecha de registro</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.registered}</td>
                <td>
                  <span className={`badge ${user.status === 'Activo' ? 'bg-success' : 'bg-danger'}`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}