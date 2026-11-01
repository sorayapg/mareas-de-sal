
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

 // Importamos los iconos de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'


// Importamos las fotografías de los integrantes
import fotoAdrian from './assets/adrian-suarez.png'
import fotoLucia from './assets/lucia-fernandez.png'
import fotoNerea from './assets/nerea-alvarez.png'
import fotoDiego from './assets/diego-menendez.png'

// Importamos la fotografía de la biografía
import fotoBiografia from './assets/mareas-de-sal-biografia.png';

// Importamos la fotografía conjunta para el carrusel
import fotoGrupo from './assets/mareas-de-sal-grupo.png'

// Importamos la fotografía del concierto en Muniello
import fotoConcierto from './assets/mareas-de-sal-concierto.png'

// Fotografía de la banda paseando por el puerto de Luanco
import fotoLuanco from './assets/mareas-de-sal-luanco.png'

// Importamos el logotipo oficial de Mareas de Sal
import logoMareas from './assets/logo-mareas-de-sal.png'

// Importamos la portada del primer EP de Mareas de Sal
import portadaOrillas from './assets/Orillas.png'

// Importamos la portada del segundo álbum de Mareas de Sal
import portadaDondeRompeElMar from './assets/DondeRompeElMar.png'

// Importamos la portada del tercer álbum de Mareas de Sal
import portadaDespuesDeLaTormenta from './assets/DespuesDeLaTormenta.png'

/*
 * ==========================================
 * CANCIONES DE MAREAS DE SAL
 * ==========================================
 * Importamos los archivos MP3 para que Vite
 * gestione correctamente sus rutas.
 */

import audioOrillas from './assets/Orillas.mp3';
import audioDondeRompe from './assets/Donde rompe el mar.mp3';
import audioDespuesTormenta from './assets/Después de la tormenta.mp3';


// Seleccionamos el contenedor principal de nuestra página
const app = document.querySelector('#app')

// Construimos el contenido HTML de nuestra web
app.innerHTML = `

  <!-- =========================================
       BARRA DE NAVEGACIÓN
       ========================================= -->
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container">

      <!-- Nombre de la banda -->
      <a class="navbar-brand fw-bold d-none d-lg-block" href="#">
        Mareas de Sal
      </a>

      <!-- Botón para desplegar el menú en móviles -->
      <button
        class="navbar-toggler d-lg-none"
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
          </li>Contacto

          <li class="nav-item">
            <a class="nav-link" href="#discografia">Discografía</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#gira">Gira</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#contacto">Contacto</a>
          </li>

       
        
        <!-- Menú desplegable de navegación -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="menuDesplegable"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Descubre más
          </a>

          <ul class="dropdown-menu" aria-labelledby="menuDesplegable">
            <li>
              <a class="dropdown-item" href="#grupo">Conoce a la banda</a>
            </li>
            <li>
              <a class="dropdown-item" href="#discografia">Nuestra música</a>
            </li>
            <li>
              <a class="dropdown-item" href="#gira">Próximos conciertos</a>
            </li>
          </ul>
        </li>
        <!-- Fin del menú desplegable -->
      </ul>
      </div>

    </div>
  </nav>

  <!-- =========================================
       CONTENIDO PRINCIPAL
       ========================================= -->
  <main class="container py-5 text-center">

    <!-- Presentación de la banda -->
    
    <!-- Logotipo principal de Mareas de Sal -->
    <h1 class="mb-4">
      <img
        src="${logoMareas}"
        class="img-fluid"
        alt="Mareas de Sal"
        style="max-width: 600px; width: 100%;"
      />
    </h1>


    <!-- Lema del grupo -->
    <p class="lead">
      Hay canciones que siempre vuelven, como las mareas.
    </p>

    <!-- Procedencia y estilo musical -->
    <p>
      Indie rock y folk rock desde Luanco, Asturias.
    </p>
    
    <!-- =========================================
        SECCIÓN: CARRUSEL DE MAREAS DE SAL
        ========================================= -->

    <!-- Carrusel principal de Mareas de Sal -->
    <div id="carruselMareas" class="carousel slide my-5">
      
      <!-- Indicadores para navegar entre las tres diapositivas -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carruselMareas"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Diapositiva 1">
        </button>

        <button
          type="button"
          data-bs-target="#carruselMareas"
          data-bs-slide-to="1"
          aria-label="Diapositiva 2">
        </button>

        <button
          type="button"
          data-bs-target="#carruselMareas"
          data-bs-slide-to="2"
          aria-label="Diapositiva 3">
        </button>
      </div>
      <!-- Fin de los indicadores -->


      <!-- Contenedor de las diapositivas -->
      <div class="carousel-inner">

        <!-- DIAPOSITIVA 1: Presentación de Mareas de Sal -->
        <div class="carousel-item active position-relative">

          <!-- Fotografía del grupo -->
          <img
            src="${fotoGrupo}"
            class="d-block w-100"
            alt="Los cuatro integrantes de Mareas de Sal junto al mar Cantábrico"
          />

          <!-- Logotipo como marca de agua -->
          <img
            src="${logoMareas}"
            class="position-absolute top-0 start-0 m-3"
            alt=""
            aria-hidden="true"
            style="width: 22%; max-width: 180px; opacity: 0.65;"
          />

          <!-- Texto superpuesto, oculto en móviles -->
          <div class="carousel-caption d-none d-md-block">
            <h2>Mareas de Sal</h2>
            <p>La música nace donde el mar encuentra la tierra.</p>
          </div>

        </div>
        <!-- Fin de la primera diapositiva -->

        <!-- DIAPOSITIVA 2: Mareas de Sal en concierto -->
        <div class="carousel-item">

          <!-- Fotografía del concierto en Muniello -->
          <img
            src="${fotoConcierto}"
            class="d-block w-100"
            alt="Mareas de Sal actuando en directo en Muniello, Asturias"
          />

          <!-- Texto superpuesto, oculto en móviles -->
          <div class="carousel-caption d-none d-md-block">
            <h2>En directo desde Muniello</h2>
            <p>Cuatro músicos, un escenario y muchas historias que contar.</p>
          </div>

        </div>
        <!-- Fin de la segunda diapositiva -->
        
          <!-- DIAPOSITIVA 3: Mareas de Sal en Luanco -->
          <div class="carousel-item">

            <!-- Fotografía del grupo paseando por el puerto -->
            <img
              src="${fotoLuanco}"
              class="d-block w-100"
              alt="Los cuatro integrantes de Mareas de Sal paseando por el puerto de Luanco, Asturias"
            />

            <!-- Texto superpuesto, oculto en móviles -->
            <div class="carousel-caption d-none d-md-block">
              <h2>Desde Luanco, Asturias</h2>
              <p>Cuatro caminos, una misma marea.</p>
            </div>

          </div>
          <!-- Fin de la tercera diapositiva -->


      </div>
      <!-- Fin del contenedor de diapositivas -->

      <!-- Flecha para ir a la diapositiva anterior -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carruselMareas"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>

      <!-- Flecha para ir a la diapositiva siguiente -->
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carruselMareas"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>

    </div>
    <!-- Fin del carrusel principal -->


    <!-- =========================================
         SECCIÓN: EL GRUPO
         ========================================= -->
    <section id="grupo" class="py-5">

      <!-- Título de la sección -->
      <h2 class="fw-bold mb-4">El grupo</h2>

      <!-- Historia de la banda -->
      <!-- Distribución responsive de la biografía -->
      <div class="row align-items-center g-4">
        <div class="col-12 col-md-6">
        <p class="lead mx-auto">
          Mareas de Sal nació en Luanco, Asturias, entre guitarras,
          conversaciones interminables y canciones que hablaban de
          lo que a veces cuesta decir en voz alta.
        </p>

        <p class="mx-auto">
          Una banda que mezcla la energía del indie rock con las
          raíces del folk, inspirada por el Cantábrico y las historias
          de quienes viven junto a él.
        </p>
      </div>
      <!-- Columna de la fotografía del grupo -->
      <div class="col-12 col-md-6">
        <img
          src="${fotoBiografia}"
          class="img-fluid rounded shadow-sm"
          alt="Los cuatro integrantes de Mareas de Sal"
        />
      </div>

      <!-- Cierre de la fila de la biografía -->
      </div>

      <!-- Presentación de los integrantes -->
      <div class="integrantes mt-5">

        <h3 class="fw-bold mb-4">Conoce a la banda</h3>

        <!-- Fila responsive de las cuatro tarjetas -->
        <div class="row g-4 justify-content-center">

          <!-- TARJETA 1: ADRIÁN SUÁREZ -->
          <div class="col-12 col-md-6 col-lg-3">

            <div class="card h-100 shadow-sm">

              <!-- Fotografía de Adrián -->
              <img
                src="${fotoAdrian}"
                class="card-img-top"
                alt="Adrián Suárez, cantante y guitarrista de Mareas de Sal"
              />

              <!-- Información del integrante -->
              <div class="card-body">

                <h4 class="card-title fw-bold">
                  Adrián Suárez
                </h4>

                <h5 class="card-subtitle mb-3 text-muted">
                  Voz y guitarra
                </h5>

                <p class="card-text">
                  La voz de Mareas de Sal. Compone canciones
                  inspiradas en el mar, los recuerdos y las
                  historias que merecen ser contadas.
                </p>

              </div>
            </div>
          </div>
          <!-- Fin de la tarjeta de Adrián -->

          <!-- TARJETA 2: LUCÍA FERNÁNDEZ -->
          <div class="col-12 col-md-6 col-lg-3">

            <div class="card h-100 shadow-sm">

              <!-- Fotografía de Lucía -->
              <img
                src="${fotoLucia}"
                class="card-img-top"
                alt="Lucía Fernández, guitarrista eléctrica de Mareas de Sal"
              />

              <!-- Información de la integrante -->
              <div class="card-body">

                <h4 class="card-title fw-bold">
                  Lucía Fernández
                </h4>

                <h5 class="card-subtitle mb-3 text-muted">
                  Guitarra eléctrica
                </h5>

                <p class="card-text">
                  Aporta fuerza y personalidad al sonido del grupo.
                  Sus melodías combinan la energía del rock
                  con la sensibilidad de las raíces folk.
                </p>

              </div>
            </div>
          </div>
          <!-- Fin de la tarjeta de Lucía -->

          <!-- TARJETA 3: NEREA ÁLVAREZ -->
          <div class="col-12 col-md-6 col-lg-3">

            <div class="card h-100 shadow-sm">

              <!-- Fotografía de Nerea -->
              <img
                src="${fotoNerea}"
                class="card-img-top"
                alt="Nerea Álvarez, bajista de Mareas de Sal"
              />

              <!-- Información de la integrante -->
              <div class="card-body">

                <h4 class="card-title fw-bold">
                  Nerea Álvarez
                </h4>

                <h5 class="card-subtitle mb-3 text-muted">
                  Bajo
                </h5>

                <p class="card-text">
                  El pulso de Mareas de Sal. Sus líneas de bajo
                  aportan profundidad y carácter a cada canción,
                  uniendo la fuerza del rock con la calidez del folk.
                </p>

              </div>
            </div>
          </div>
          <!-- Fin de la tarjeta de Nerea -->

          <!-- TARJETA 4: DIEGO MENÉNDEZ -->
          <div class="col-12 col-md-6 col-lg-3">

            <div class="card h-100 shadow-sm">

              <!-- Fotografía de Diego -->
              <img
                src="${fotoDiego}"
                class="card-img-top"
                alt="Diego Menéndez, batería de Mareas de Sal"
              />

              <!-- Información del integrante -->
              <div class="card-body">

                <h4 class="card-title fw-bold">
                  Diego Menéndez
                </h4>

                <h5 class="card-subtitle mb-3 text-muted">
                  Batería
                </h5>

                <p class="card-text">
                  El ritmo y la energía de Mareas de Sal.
                  Sus baterías dan vida a cada canción,
                  desde los momentos más íntimos hasta
                  los estribillos más potentes.
                </p>

              </div>
            </div>
          </div>
          <!-- Fin de la tarjeta de Diego -->

        </div>
        <!-- Fin de la fila de integrantes -->

      </div>
      <!-- Fin del apartado de integrantes -->

    </section>
    <!-- Fin de la sección El grupo -->

    <!-- =========================================
         SECCIÓN: DISCOGRAFÍA
         ========================================= -->
    <section id="discografia" class="py-5">

      <!-- Título de la sección -->
      <h2 class="fw-bold mb-4">Discografía</h2>

      <!-- Introducción a los trabajos musicales -->
      <p class="lead mx-auto">
        Cada canción cuenta una historia y cada disco guarda
        un pedazo del camino recorrido por Mareas de Sal.
        Descubre los sonidos que nos han acompañado
        desde nuestros primeros acordes.
      </p>

      <!-- Fila responsive de los trabajos discográficos -->
      <div class="row g-4 justify-content-center mt-4">

        <!-- TARJETA 1: ORILLAS -->
        <div class="col-12 col-md-6 col-lg-4">

          <div class="card h-100 shadow-sm">
            <!-- Portada ilustrada del EP Orillas -->
              <img
                src="${portadaOrillas}"
                class="card-img-top"
                alt="Portada ilustrada de Orillas, EP de Mareas de Sal de 2022"
              />
            <!-- Información del EP -->
            <div class="card-body">

              <h3 class="card-title fw-bold">
                Orillas
              </h3>

              <p class="text-muted mb-3">
                EP · 2022
              </p>

              <p class="card-text">
                El comienzo de Mareas de Sal.
                Un viaje entre guitarras acústicas,
                melodías íntimas y canciones que
                hablan de raíces, despedidas
                y nuevos horizontes.
              </p>
              
              <!-- Reproductor de audio del EP Orillas -->
              <div class="mt-3 mb-3">
                <p class="fw-semibold mb-2">
                  🎵 Escucha Orillas
                </p>

                <audio
                  controls
                  preload="none"
                  class="w-100"
                  aria-label="Escuchar la canción Orillas de Mareas de Sal"
                >
                  <source src="${audioOrillas}" type="audio/mpeg" />
                  Tu navegador no admite la reproducción de audio.
                </audio>
              </div>

              
              <!-- Botón para mostrar u ocultar las canciones del EP Orillas -->
              <button
                class="btn btn-outline-primary mt-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#cancionesOrillas"
                aria-expanded="false"
                aria-controls="cancionesOrillas"
              >
                Ver canciones
              </button>

              <!-- Lista desplegable de canciones del EP Orillas -->
              <div class="collapse mt-3" id="cancionesOrillas">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">1. Orillas</li>
                  <li class="list-group-item">2. Sal en la piel</li>
                  <li class="list-group-item">3. Volver al norte</li>
                  <li class="list-group-item">4. Mareas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin de la tarjeta Orillas -->

        <!-- TARJETA 2: DONDE ROMPE EL MAR -->
        <div class="col-12 col-md-6 col-lg-4">

          <div class="card h-100 shadow-sm">
            
            <!-- Portada ilustrada del álbum Donde rompe el mar -->
            <img
              src="${portadaDondeRompeElMar}"
              class="card-img-top"
              alt="Portada ilustrada de Donde rompe el mar, álbum de Mareas de Sal de 2024"
            />

            <!-- Información del álbum -->
            <div class="card-body">

              <h3 class="card-title fw-bold">
                Donde rompe el mar
              </h3>

              <p class="text-muted mb-3">
                Álbum · 2024
              </p>

              <p class="card-text">
                Un disco de emociones intensas, guitarras
                envolventes y letras que hablan de encuentros,
                despedidas y segundas oportunidades.
                El sonido de Mareas de Sal crece sin perder
                sus raíces junto al Cantábrico.
              </p>
              
              <!-- Reproductor de audio del álbum Donde rompe el mar -->
              <div class="mt-3 mb-3">
                <p class="fw-semibold mb-2">
                  🎵 Escucha Donde rompe el mar
                </p>

                <audio
                  controls
                  preload="none"
                  class="w-100"
                  aria-label="Escuchar Donde rompe el mar de Mareas de Sal"
                >
                  <source src="${audioDondeRompe}" type="audio/mpeg" />
                  Tu navegador no admite la reproducción de audio.
                </audio>
              </div>

              
              <!-- Botón para desplegar las canciones del álbum -->
              <button
                class="btn btn-outline-primary mt-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#cancionesDondeRompeElMar"
                aria-expanded="false"
                aria-controls="cancionesDondeRompeElMar"
              >
                Ver canciones
              </button>

              <!-- Lista desplegable de canciones del álbum -->
              <div class="collapse mt-3" id="cancionesDondeRompeElMar">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">1. Donde rompe el mar</li>
                  <li class="list-group-item">2. A contracorriente</li>
                  <li class="list-group-item">3. Faros encendidos</li>
                  <li class="list-group-item">4. Lo que dejamos atrás</li>
                  <li class="list-group-item">5. La última marea</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin de la tarjeta Donde rompe el mar -->
        
        <!-- TARJETA 3: DESPUÉS DE LA TORMENTA -->
        <div class="col-12 col-md-6 col-lg-4">

          <div class="card h-100 shadow-sm">
            
            <!-- Portada ilustrada del álbum Después de la tormenta -->
            <img
              src="${portadaDespuesDeLaTormenta}"
              class="card-img-top"
              alt="Portada ilustrada de Después de la tormenta, álbum de Mareas de Sal de 2026"
            />

            <!-- Información del álbum -->
            <div class="card-body">

              <h3 class="card-title fw-bold">
                Después de la tormenta
              </h3>

              <p class="text-muted mb-3">
                Álbum · 2026
              </p>

              <p class="card-text">
                Un nuevo capítulo para Mareas de Sal.
                Canciones sobre volver a empezar, encontrar
                la calma después del ruido y descubrir
                que siempre hay un horizonte al que regresar.
              </p>
              
              <!-- Reproductor de audio del álbum Después de la tormenta -->
              <div class="mt-3 mb-3">
                <p class="fw-semibold mb-2">
                  🎵 Escucha Después de la tormenta
                </p>

                <audio
                  controls
                  preload="none"
                  class="w-100"
                  aria-label="Escuchar Después de la tormenta de Mareas de Sal"
                >
                  <source src="${audioDespuesTormenta}" type="audio/mpeg" />
                  Tu navegador no admite la reproducción de audio.
                </audio>
              </div>

                
              <!-- Botón para desplegar las canciones del tercer álbum -->
              <button
                class="btn btn-outline-primary mt-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#cancionesDespuesTormenta"
                aria-expanded="false"
                aria-controls="cancionesDespuesTormenta"
              >
                Ver canciones
              </button>

              <!-- Lista desplegable de canciones del álbum -->
              <div class="collapse mt-3" id="cancionesDespuesTormenta">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">1. Después de la tormenta</li>
                  <li class="list-group-item">2. Volver a empezar</li>
                  <li class="list-group-item">3. La luz del faro</li>
                  <li class="list-group-item">4. Todo lo que somos</li>
                  <li class="list-group-item">5. Un horizonte al que regresar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin de la tarjeta Después de la tormenta -->
      </div>
      <!-- Fin de la fila de discos -->
    </section>
    <!-- Fin de la sección Discografía -->
    
    <!-- =========================================
        SECCIÓN: GIRA
        ========================================= -->
    <section id="gira" class="py-5">

      <!-- Título de la sección -->
      <h2 class="fw-bold mb-4">Próximos conciertos</h2>

      <!-- Presentación de la gira -->
      <p class="lead mx-auto">
        La música cobra vida cuando la compartimos.
        Descubre dónde sonarán nuestras próximas canciones
        y acompáñanos en el camino.
      </p>
      
      
  <!-- =========================================
      TABLA DE PRÓXIMOS CONCIERTOS
      ========================================= -->

  <!-- Contenedor responsive de la gira -->
  <div class="row justify-content-center mt-5">

    <div class="col-12 col-lg-10">

      <!-- Permite desplazar la tabla horizontalmente en móviles -->
      <div class="table-responsive shadow-sm rounded">

        <!-- Tabla Bootstrap con filas alternas y efecto hover -->
        <table class="table table-striped table-hover align-middle mb-0">

          <!-- Cabecera de la tabla -->
          <thead class="table-dark">
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Sala</th>
              <th scope="col">Entradas</th>
            </tr>
          </thead>

          <!-- Cuerpo de la tabla -->
          <tbody>

            <!-- Concierto 1: Luanco -->
            <tr>
              <td>14 NOV 2026</td>
              <td>Luanco, Asturias</td>
              <td>Teatro Riera</td>
              <td>
                <span class="badge text-bg-danger">
                  Agotado
                </span>
              </td>
            </tr>

            <!-- Concierto 2: Gijón -->
            <tr>
              <td>28 NOV 2026</td>
              <td>Gijón, Asturias</td>
              <td>Sala Acapulco</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm">
                  Comprar
                </button>
              </td>
            </tr>

            <!-- Concierto 3: Oviedo -->
            <tr>
              <td>12 DIC 2026</td>
              <td>Oviedo, Asturias</td>
              <td>Sala Gong</td>
              <td>
                <button type="button" class="btn btn-outline-primary btn-sm">
                  Comprar
                </button>
              </td>
            </tr>

            <!-- Concierto 4: Avilés -->
            <tr>
              <td>19 DIC 2026</td>
              <td>Avilés, Asturias</td>
              <td>Factoría Cultural</td>
              <td>
                <span class="badge text-bg-warning">
                  Últimas entradas
                </span>
              </td>
            </tr>

            <!-- Concierto 5: Santander -->
            <tr>
              <td>16 ENE 2027</td>
              <td>Santander, Cantabria</td>
              <td>Escenario ficticio de Santander</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm">
                  Comprar
                </button>
              </td>
            </tr>

            <!-- Concierto 6: Bilbao -->
            <tr>
              <td>30 ENE 2027</td>
              <td>Bilbao, Bizkaia</td>
              <td>Escenario ficticio de Bilbao</td>
              <td>
                <span class="badge text-bg-secondary">
                  Próximamente
                </span>
              </td>
            </tr>

          </tbody>

        </table>
        <!-- Fin de la tabla de conciertos -->

      </div>
      <!-- Fin del contenedor table-responsive -->

    <!-- Paginación visual de Bootstrap -->
    <!-- El enunciado no exige funcionalidad real -->
    <nav class="mt-4" aria-label="Paginación de conciertos">

      <ul class="pagination justify-content-center">

        <li class="page-item disabled">
          <span class="page-link">Anterior</span>
        </li>

        <li class="page-item active" aria-current="page">
          <span class="page-link">1</span>
        </li>

        <li class="page-item">
          <span class="page-link">2</span>
        </li>

        <li class="page-item">
          <span class="page-link">Siguiente</span>
        </li>

      </ul>

    </nav>
    <!-- Fin de la paginación -->

  </div>

</div>
<!-- Fin del contenedor de la gira -->


    </section>
    <!-- Fin de la sección Gira -->
  
    <!-- =========================================
        SECCIÓN: CONTACTO
        ========================================= -->
    <section id="contacto" class="py-5">

      <!-- Título de la sección -->
      <h2 class="fw-bold mb-4">Contacto</h2>

      <!-- Presentación del apartado -->
      <p class="lead mx-auto">
        ¿Quieres ponerte en contacto con Mareas de Sal?
        Estamos encantados de escuchar tus propuestas,
        preguntas o simplemente saber de ti.
      </p>
      
      <!-- Botón que abrirá la ventana modal de contacto -->
      <!-- Bootstrap gestiona la apertura mediante sus atributos data-bs-* -->
      <div class="text-center mt-4 mb-4">

        <button
          type="button"
          class="btn btn-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalContacto"
        >
          Contactar con Mareas de Sal
        </button>

      </div>
      <!-- Fin del botón de contacto -->

  </div>

</div>
<!-- Fin del contenedor del formulario -->

    </section>
    <!-- Fin de la sección Contacto -->
    
    <!-- =========================================
        VENTANA MODAL DE CONTACTO
        ========================================= -->
    <div
      class="modal fade"
      id="modalContacto"
      tabindex="-1"
      aria-labelledby="tituloModalContacto"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">

        <div class="modal-content">

          <!-- Cabecera de la ventana modal -->
          <div class="modal-header">

            <h2 class="modal-title fs-5" id="tituloModalContacto">
              Contactar con Mareas de Sal
            </h2>

            <!-- Botón X para cerrar la ventana -->
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>

          </div>

          <!-- Contenido de la ventana modal -->
          <div class="modal-body">
            <p>
              ¿Tienes alguna pregunta o propuesta?
              ¡Nos encantará escucharte!
            </p>

            <!-- Contenedor responsive del formulario de contacto -->
  <div class="row justify-content-center mt-5">

  <div class="col-12 col-md-10 col-lg-8">

    <!-- Formulario de contacto de Mareas de Sal -->
    
      <!-- Formulario preparado para la validación personalizada de Bootstrap -->
      <form
        id="formularioContacto"
        class="text-start needs-validation"
        novalidate
      >


      <!-- Campo: Nombre -->
      <div class="mb-3">
        <label for="nombreContacto" class="form-label fw-bold">
          Nombre
        </label>
        <input
          type="text"
          class="form-control"
          id="nombreContacto"
          name="nombre"
          placeholder="Escribe tu nombre"
          autocomplete="name"
          required
        />
        
        <!-- Mensaje de error cuando no se introduce el nombre -->
        <div class="invalid-feedback">
          Por favor, introduce tu nombre.
        </div>

      </div>

      <!-- Campo: Correo electrónico -->
      <div class="mb-3">
        <label for="emailContacto" class="form-label fw-bold">
          Correo electrónico
        </label>
        <input
          type="email"
          class="form-control"
          id="emailContacto"
          name="email"
          placeholder="nombre@ejemplo.com"
          autocomplete="email"
          required
        />
        
        <!-- Mensaje de error si el correo está vacío o no es válido -->
        <div class="invalid-feedback">
          Introduce una dirección de correo electrónico válida.
        </div>

      </div>
      
      <!-- Campo: Motivo de contacto -->
      <!-- Permite seleccionar el tipo de consulta mediante Bootstrap -->
      <div class="mb-3">

        <label for="motivoContacto" class="form-label fw-bold">
          Motivo de contacto
        </label>

        <select
          class="form-select"
          id="motivoContacto"
          name="motivo"
          required
        >
          <option value="" selected disabled>
            Selecciona un motivo
          </option>

          <option value="prensa">Prensa y entrevistas</option>
          <option value="contratacion">Contratación de conciertos</option>
          <option value="fans">Mensaje de un fan</option>
          <option value="otros">Otros asuntos</option>
        </select>
        
        <!-- Mensaje de error si no se selecciona un motivo -->
        <div class="invalid-feedback">
          Por favor, selecciona un motivo de contacto.
        </div>


      </div>
      <!-- Fin del campo Motivo de contacto -->

      <!-- Campo: Asunto -->
      <div class="mb-3">
        <label for="asuntoContacto" class="form-label fw-bold">
          Asunto
        </label>
        <input
          type="text"
          class="form-control"
          id="asuntoContacto"
          name="asunto"
          placeholder="¿Sobre qué quieres escribirnos?"
          required
        />
        
        <!-- Mensaje de error si el asunto está vacío -->
        <div class="invalid-feedback">
          Por favor, indica el asunto de tu mensaje.
        </div>

      </div>

      <!-- Campo: Mensaje -->
      <div class="mb-4">
        <label for="mensajeContacto" class="form-label fw-bold">
          Mensaje
        </label>
        <textarea
          class="form-control"
          id="mensajeContacto"
          name="mensaje"
          rows="5"
          placeholder="Cuéntanos qué tienes en mente..."
          required
        ></textarea>
        
        <!-- Mensaje de error si no se escribe ningún mensaje -->
        <div class="invalid-feedback">
          Por favor, escribe tu mensaje antes de enviarlo.
        </div>

      </div>
      
      <!-- Casilla de aceptación de privacidad -->
      <!-- El usuario debe aceptar antes de enviar el formulario -->
      <div class="form-check mb-4 text-start">

        <input
          class="form-check-input"
          type="checkbox"
          id="privacidadContacto"
          name="privacidad"
          required
        />

        <label
          class="form-check-label"
          for="privacidadContacto"
        >
          He leído y acepto la política de privacidad.
        </label>
        
        <!-- Mensaje de error si no se acepta la privacidad -->
        <div class="invalid-feedback">
          Debes aceptar la política de privacidad para continuar.
        </div>

      </div>
      <!-- Fin de la casilla de privacidad -->


      <!-- Botón para enviar el formulario -->
      <div class="text-center">
        <button type="submit" class="btn btn-dark px-5">
          Enviar mensaje
        </button>
      </div>

    </form>
    <!-- Fin del formulario de contacto -->

          </div>

          <!-- Pie de la ventana modal -->
          <div class="modal-footer">

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>

          </div>

        </div>

      </div>
    </div>
    <!-- Fin de la ventana modal de contacto -->


  </main>
  <!-- Fin del contenido principal -->
  
  <!-- ==========================================
      PIE DE PÁGINA - MAREAS DE SAL
      ========================================== -->
  <footer class="bg-dark text-white py-4 mt-5">
    <div class="container text-center">

      <!-- Nombre del grupo -->
      <p class="fw-bold fs-5 mb-2">
        Mareas de Sal
      </p>

      
      <!-- Redes sociales de Mareas de Sal -->
      <div class="d-flex justify-content-center gap-4 my-3">

        <!-- Instagram -->
        <a href="#"
          class="text-white fs-4"
          aria-label="Instagram de Mareas de Sal"
          title="Instagram">
          <i class="bi bi-instagram" aria-hidden="true"></i>
        </a>

        <!-- YouTube -->
        <a href="#"
          class="text-white fs-4"
          aria-label="YouTube de Mareas de Sal"
          title="YouTube">
          <i class="bi bi-youtube" aria-hidden="true"></i>
        </a>

        <!-- Facebook -->
        <a href="#"
          class="text-white fs-4"
          aria-label="Facebook de Mareas de Sal"
          title="Facebook">
          <i class="bi bi-facebook" aria-hidden="true"></i>
        </a>

    </div>
  <!-- Fin de las redes sociales -->


      <!-- Derechos de autor -->
      <p class="small mb-2">
        &copy; 2026 Mareas de Sal. Todos los derechos reservados.
      </p>

      <!-- Enlace al aviso legal -->
      <a href="#aviso-legal" class="link-light small">
        Aviso legal
      </a>

    </div>
  </footer>
  <!-- Fin del pie de página -->

`


/**
 * =========================================
 * VALIDACIÓN DEL FORMULARIO DE CONTACTO
 * =========================================
 *
 * Utilizamos la validación de HTML5 junto con
 * las clases de Bootstrap 5.3.
 *
 * IMPORTANTE:
 * La apertura y el cierre de la ventana modal
 * siguen gestionados por Bootstrap mediante
 * los atributos data-bs-* del HTML.
 */

// Seleccionamos el formulario de contacto
const formularioContacto = document.querySelector('#formularioContacto')

// Comprobamos que el formulario existe
if (formularioContacto) {

  // Escuchamos el evento de envío
  formularioContacto.addEventListener('submit', (event) => {

    // Evitamos que la página se recargue
    event.preventDefault()

    // Activamos los estilos de validación de Bootstrap
    formularioContacto.classList.add('was-validated')

    // Comprobamos si todos los campos son válidos
    if (!formularioContacto.checkValidity()) {

      // Detenemos el envío si hay campos incorrectos
      event.stopPropagation()
      return
    }

    // El formulario es válido, pero aún no envía datos reales
    console.log('Formulario validado correctamente (modo prueba)')

  })

}

/*
 * ==========================================
 * CONTROL DE LOS REPRODUCTORES DE AUDIO
 * ==========================================
 * Cuando comienza una canción, pausamos las
 * demás para evitar que suenen simultáneamente.
 */

// Seleccionamos todos los reproductores de audio.
const reproductores = document.querySelectorAll('audio');

// Recorremos cada reproductor.
reproductores.forEach((reproductorActual) => {

  // Detectamos cuándo comienza a reproducirse.
  reproductorActual.addEventListener('play', () => {

    // Recorremos nuevamente todos los reproductores.
    reproductores.forEach((otroReproductor) => {

      // Si no es el actual, lo pausamos.
      if (otroReproductor !== reproductorActual) {
        otroReproductor.pause();
      }

    });

  });

});


