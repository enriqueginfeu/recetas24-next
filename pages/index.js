import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"
import Ternera from "../components/ternera"
import Cerdo from "../components/cerdo"
import Postre from "../components/postre"
import Post from "../components/post"
import styles from '../styles/grid.module.css'
import cerdo from '../public/img/cerdo.jpg'
import ternera from '../public/img/ternera.jpg'
import pescado from '../public/img/pescado.jpg'
import postre from '../public/img/postres.jpg'
import pollo from '../public/img/pollo.jpg'
import vegetales from '../public/img/vegetales.jpg'
import empanada from '../public/img/empanada.jpg'


export default function Home({ terneras, cerdos, postres, posts }) {

  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Ultimas noticias, venta de peliculas digitales y mucho mas'}
      >
        <main className="contenedor">

          <div>
          <h2 className="heading">
            Bienvenidos a Recetas 24Hs
          </h2>

          <h2 className="subtitulos">
			        ¿Estás buscando nuevas ideas para sorprender a tus invitados en la próxima cena? ¿O tal vez deseas probar algo diferente para consentir a tu familia en la comida diaria? ¡No busques más! Nuestro sitio de recetas de comida está diseñado para saciar tus deseos culinarios y llevar tus habilidades en la cocina al siguiente nivel.
		      </h2>

          <div className={styles.grid}>  
            <div>
            <Link href={'/cerdos'} legacyBehavior>
              <a>
                <Image src={cerdo} width={500} height={500} alt="imagen cerdo" />
              </a>
            </Link>
            <p>
					    Explora el sabor inigualable: Recetas irresistibles con carne de cerdo
				    </p>
            </div>

            <div>
            <Link href={'/terneras'} legacyBehavior>
              <a>
                <Image src={ternera} width={500} height={500} alt="imagen ternera" />
              </a>
            </Link>
            <p>
					    Descubre la perfección de la ternera en nuestra selección de recetas irresistibles.
				    </p>
            </div>

            <div>
            <Link href={'/pescados'} legacyBehavior>
              <a>
                <Image src={pescado} width={500} height={500} alt="imagen pescado" />
              </a>
            </Link>
            <p>
					    Sumérgete en el sabor del mar con nuestras deliciosas recetas de pescado.
				    </p>
            </div>

            <div>
            <Link href={'/pollos'} legacyBehavior>
              <a>
                <Image src={pollo} width={500} height={500} alt="imagen pollo" />
              </a>
            </Link>
            <p>
					    Explora el sabor inigualable: Recetas irresistibles con carne de cerdo
				    </p>
            </div>

            <div>
            <Link href={'/postres'} legacyBehavior>
              <a>
                <Image src={postre} width={500} height={500} alt="imagen postres" />
              </a>
            </Link>
            <p>
					    Endulza tu día con nuestra irresistible selección   de postres que deleitarán tu paladar
				    </p>
            </div>

            <div>
            <Link href={'/vegetales'} legacyBehavior>
              <a>
                <Image src={vegetales} width={500} height={500} alt="imagen vegetales" />
              </a>
            </Link>
            <p>
					    Explora la gama de sabores saludables en la sección de recetas de vegetales
				    </p>
            </div>

          </div>
          <div className="card">
            <h2 className="tituloCard">
                Recetas Mas Valoradas
            </h2>
            <div className={styles.grid}>
              <div>
                {terneras?.map(ternera => (
                  <Ternera
                    key={ternera.id}
                    ternera={ternera.attributes}
                  />
                ))}
              </div>
              <div>
                {cerdos?.map(cerdo => (
                  <Cerdo
                    key={cerdo.id}
                    cerdo={cerdo.attributes}
                  />
                ))}
              </div>
              <div>
                {postres?.map(postre => (
                  <Postre
                    key={postre.id}
                    postre={postre.attributes}
                  />
                ))}
              </div>
            </div>
          </div>

              <div className="card">
                <div>
                  <h2 className="tituloCard">
                    Recetas Recomendada
                  </h2>
                    <div>
                        <h3>Empanada de carne y espinaca</h3>
                        <h4>4.4 <span>&#9733;</span></h4>
                    </div>
                      <div className="grid">
                        <div>
                          <Image src={empanada} width={600} height={600} alt="imagen receta empanadas" />
                        </div>
                        <div>
                          <h2>Ingredientes</h2>
                          <p>400 g de carne picada</p>
                          <p>2 cebollas</p>
                          <p>1 pimiento verde</p>
                          <p>6 dientes de ajo</p>
                          <p>espinacas</p>
                          <p>nuez moscada</p>
                          <p>orégano</p>
                          <p>perejil</p>
                          <p>vino blanco</p>
                          <p>1 huevo</p>
                        </div>
                      </div>

                      <div>
                        <h3>Tiempo: <span>25 Min</span></h3>
                        <h3>Porcion: <span>4 Personas</span></h3>
                      </div>

                      <div>
                        <h2>Preparacion</h2>
                        <p>Pelar y picar fino las cebollas, el pimiento y el ajo.</p>
                        <p>Poner una sartén a fuego medio con un poco de aceite y freír unos minutos.</p>
                        <p>Cocer las espinacas. Escurrir y picar.</p>
                        <p>Añadir las espinacas. Subir un poco el fuego y agregar la carne.</p>
                        <p>Cuando esté casi hecha, añadir un chorrito de vino y bajar de nuevo el fuego.</p>
                        <p>Cocinar hasta que el vino se evapore.</p>
                        <p>Agregar nuez moscada, orégano y perejil al gusto. Salpimentar, remover bien y retirar del fuego.</p>
                        <p>Precalentar el horno a 180º C. Rellenar las empanadas con la mezcla de carne y espinacas.</p>
                        <p>Cerrarlas, sellarlas con el tenedor y pintarlas con yema de huevo.</p>
                        <p>Hornear durante 10 minutos, retirar y servir.</p>
                      </div>
                        <form>
                          <p class="clasificacion">

                              <button type="reset">
                                  Enviar
                              </button>

                            <input id="radio1" type="radio" name="estrellas" value="5"/>
                            <label for="radio1">★</label>
                            <input id="radio2" type="radio" name="estrellas" value="4"/>
                            <label for="radio2">★</label>
                            <input id="radio3" type="radio" name="estrellas" value="3"/>
                            <label for="radio3">★</label>
                            <input id="radio4" type="radio" name="estrellas" value="2"/>
                            <label for="radio4">★</label>
                            <input id="radio5" type="radio" name="estrellas" value="1"/>
                            <label for="radio5">★</label>

                          </p>
                        </form>
                  </div>  
              </div>
          </div>

          <div className="card">
                  <h2 className="tituloCard">
                    Blog
                  </h2>
                <div className={styles.grid}>
                    {posts?.map(post => (
                      <Post 
                        key={post.id}
                        post={post.attributes}
                      />
                    ))}
                </div>
                <Link href={'/blog'} legacyBehavior>
                      <a className="boton">
                        Ver Mas...
                      </a>
                </Link>
          </div>

        </main>

      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const urlTernera = `${process.env.API_URL}/terneras?populate=imagen&pagination[pageSize]=1&sort[0]=puntuacion:desc`
  const urlCerdo = `${process.env.API_URL}/cerdos?populate=imagen&pagination[pageSize]=1&sort[0]=puntuacion:desc`
  const urlPostre = `${process.env.API_URL}/postres?populate=imagen&pagination[pageSize]=1&sort[0]=puntuacion:desc`
  const post = `${process.env.API_URL}/posts?populate=imagen&pagination[pageSize]=3&sort[0]=puntuacion:desc`
  

  const [resTernera, resCerdo, resPostre, resPost] = await Promise.all([
    fetch(urlTernera),
    fetch(urlCerdo),
    fetch(urlPostre),
    fetch(post)
  ])

  const [{data: terneras}, {data: cerdos}, {data: postres}, {data: posts}] = await Promise.all([
    resTernera.json(),
    resCerdo.json(),
    resPostre.json(),
    resPost.json()
  ])

  return {
    props: {
      terneras,
      cerdos,
      postres,
      posts
    }
  }
}

