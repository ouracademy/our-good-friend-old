import React from 'react'
import './App.scss'

export default () => (
  <main class="container">
    <header class="py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <a class="text-muted" href="/">
            Una organización para ti
          </a>
        </div>
        <div class="col-4 text-center">
          <a class="text-dark" href="/">
            <h3>
              <span role="img" aria-label="logo">
                😄
              </span>{' '}
              Our good friend
            </h3>
          </a>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <a class="text-muted" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mx-3"
            >
              <circle cx="10.5" cy="10.5" r="7.5" />
              <line x1="21" y1="21" x2="15.8" y2="15.8" />
            </svg>
          </a>
          <a class="btn btn-md btn-outline-secondary" href="/">
            Registrate
          </a>
          <a class="btn btn-md btn-outline-secondary" href="/">
            Iniciar sesión
          </a>
        </div>
      </div>
    </header>
    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4">Bienvenido a our good friend!</h1>
        <p class="lead my-3">
          Apoyamos a realizar tus grandes ideas usando tecnologia emergente
        </p>
        <p class="lead mb-0">
          <a href="/about" class="text-white font-weight-bold">
            Prueba 1 mes gratis
          </a>
        </p>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col-md-6">
        <div class="feature card flex-md-row mb-4 shadow-sm">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-primary">Pronto</strong>
            <h3 class="mb-0">
              <a class="text-dark" href="/">
                Seguimiento
              </a>
            </h3>
            <p class="card-text mb-auto">Mira quienes asisten a tus eventos.</p>
          </div>
          <img
            class="card-img-right flex-auto d-none d-lg-block"
            alt="Asistencias"
            src="https://images.pexels.com/photos/955449/pexels-photo-955449.jpeg?auto=compress&cs=tinysrgb&h=350"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="feature card flex-md-row mb-4 shadow-sm">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-success">Nuevo</strong>
            <h3 class="mb-0">
              <a class="text-dark" href="/">
                Familias
              </a>
            </h3>
            <p class="card-text mb-auto">
              Construye relaciones entre las personas y tu organización.
            </p>
          </div>
          <img
            class="card-img-right flex-auto d-none d-lg-block"
            alt="Familias"
            src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&h=350"
          />
        </div>
      </div>
    </div>

    <footer>
      <p>© 2018 OurGoodFriend, Inc.</p>
    </footer>
  </main>
)
