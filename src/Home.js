import React from 'react'

export default () => (
  <>
    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4">Bienvenido a our good friend!</h1>
        <p className="lead my-3">
          Apoyamos a realizar tus grandes ideas usando tecnologia emergente
        </p>
        <p className="lead mb-0">
          <a href="/about" className="text-white font-weight-bold">
            Prueba 1 mes gratis
          </a>
        </p>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="feature card flex-md-row mb-4 shadow-sm">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">Pronto</strong>
            <h3 className="mb-0">
              <a className="text-dark" href="/">
                Seguimiento
              </a>
            </h3>
            <p className="card-text mb-auto">
              Mira quienes asisten a tus eventos.
            </p>
          </div>
          <img
            className="card-img-right flex-auto d-none d-lg-block"
            alt="Asistencias"
            src="https://images.pexels.com/photos/955449/pexels-photo-955449.jpeg?auto=compress&cs=tinysrgb&h=350"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="feature card flex-md-row mb-4 shadow-sm">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">Nuevo</strong>
            <h3 className="mb-0">
              <a className="text-dark" href="/">
                Familias
              </a>
            </h3>
            <p className="card-text mb-auto">
              Construye relaciones entre las personas y tu organización.
            </p>
          </div>
          <img
            className="card-img-right flex-auto d-none d-lg-block"
            alt="Familias"
            src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&h=350"
          />
        </div>
      </div>
    </div>
  </>
)
