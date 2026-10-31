
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

// Importamos las fotografías de los integrantes
import fotoAdrian from './assets/adrian-suarez.png'
import fotoLucia from './assets/lucia-fernandez.png'
import fotoNerea from './assets/nerea-alvarez.png'
import fotoDiego from './assets/diego-menendez.png'

// Importamos la portada del primer EP de Mareas de Sal
import portadaOrillas from './assets/Orillas.png'

// Importamos la portada del segundo álbum de Mareas de Sal
import portadaDondeRompeElMar from './assets/DondeRompeElMar.png'

// Importamos la portada del tercer álbum de Mareas de Sal
import portadaDespuesDeLaTormenta from './assets/DespuesDeLaTormenta.png'

// Seleccionamos el contenedor principal de nuestra página
const app = document.querySelector('#app')

// Construimos el contenido HTML de nuestra web
app.innerHTML = `

  <!-- =========================================
       BARRA DE NAVEGACIÓN
       ========================================= -->
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

  <!-- =========================================
       CONTENIDO PRINCIPAL
       ========================================= -->
  <main class="container py-5 text-center">

    <!-- Presentación de la banda -->
    <h1 class="display-3 fw-bold">
      Mareas de Sal
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
         SECCIÓN: EL GRUPO
         ========================================= -->
    <section id="grupo" class="py-5">

      <!-- Título de la sección -->
      <h2 class="fw-bold mb-4">El grupo</h2>

      <!-- Historia de la banda -->
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

            </div>

          </div>

        </div>
        <!-- Fin de la tarjeta Después de la tormenta -->


      </div>
      <!-- Fin de la fila de discos -->

    </section>
    <!-- Fin de la sección Discografía -->

  </main>
  <!-- Fin del contenido principal -->
`
