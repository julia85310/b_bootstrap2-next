'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Carousel() {
  return (
    <div style={{ marginBottom: "50px" }}>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" >
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="/producto.png" className="d-block w-100" style={{ maxHeight: "500px", objectFit: 'scale-down', zIndex: 20 }}/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Primer Producto</h5>
                <p>Descripción del primer producto</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="/producto.png" className="d-block w-100" style={{ maxHeight: "500px", objectFit: 'scale-down', zIndex: 20 }}/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Segundo Producto</h5>
                <p>Descripción del segundo producto</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="/producto.png" className="d-block w-100" style={{ maxHeight: "500px", objectFit: 'scale-down', zIndex: 20 }} />
            <div className="carousel-caption d-none d-md-block">
                <h5>Tercer Producto</h5>
                <p>Descripción del tercer producto</p>
            </div>
            </div>
        </div>

        <button className="carousel-control-prev position-absolute" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" style={{ zIndex: 10 }}>
            <span className="carousel-control-prev-icon" style={{ filter: "invert(1)" }}></span>
            <span style={{ filter: "invert(1)" }}>Anterior</span>
        </button>

        <button className="carousel-control-next position-absolute" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" style={{ zIndex: 10 }}>
            <span className="carousel-control-next-icon" style={{ filter: "invert(1)" }}></span>
            <span style={{ filter: "invert(1)" }}>Siguiente</span>
        </button>
        </div>
    </div>
  );
}