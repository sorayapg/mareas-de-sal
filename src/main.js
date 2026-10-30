
/**
 * MAREAS DE SAL
 * Web oficial de una banda ficticia asturiana
 * Desarrollo de Interfaces - DAM
 */

// Importamos los estilos de Bootstrap 5.3
import 'bootstrap/dist/css/bootstrap.min.css'

// Importamos el JavaScript de Bootstrap para los componentes interactivos
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Importamos nuestros estilos personalizados
import './style.css'

// Seleccionamos el contenedor principal de nuestra página
const app = document.querySelector('#app')

// Construimos el contenido HTML de nuestra web
app.innerHTML = `
  <!-- Barra de navegación principal -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">

      <!-- Nombre de la banda -->
      <a class="navbar-brand fw-bold" href="#">
        Mareas de Sal
      </a>

      <!-- Botón para desplegar el menú en móviles -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menuPrincipal"
        aria-controls="menuPrincipal"
        aria-expanded="false"
        aria-label="Abrir menú de navegación"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Enlaces de navegación -->
      <div class="collapse navbar-collapse" id="menuPrincipal">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <a class="nav-link" href="#grupo">El grupo</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#discografia">Discografía</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#gira">Gira</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>

        </ul>
      </div>

    </div>
  </nav>

  <!-- Contenido principal de la página -->
  <main class="container py-5 text-center">

    <!-- Nombre de nuestra banda -->
    <h1 class="display-3 fw-bold">
      Mareas de Sal
    </h1>

    <!-- Lema del grupo -->
    <p class="lead">
      Hay canciones que siempre vuelven, como las mareas.
    </p>

    <!-- Presentación provisional -->
    <p>
      Indie rock y folk rock desde Luanco, Asturias.
    </p>

  </main>
`
