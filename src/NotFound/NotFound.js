import React from 'react'
import { Link } from 'react-router-dom'
import { center, container } from './NotFound.module.scss'

export default () => (
  <div className={center}>
    <div className={container}>
      <h1>
        <span className="display-1 text-info">Oops!</span>{' '}
        <span className="display-4">Página no encontrada</span>
      </h1>
      <p>
        La página que buscabas quiza fue removida, cambiado su nombre o no está
        disponible por el momento. <Link to="/">Ir a la página de inicio</Link>
      </p>
    </div>
  </div>
)
