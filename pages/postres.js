import Link from "next/link"
import Layout from "../components/layout"
import Postre from "../components/postre"
import styles from "../styles/receta.module.css"

export default function Postres({ postres }) {
  return (
    <>
      <Layout
        title={'Postres'}
        description="Seccion con recetas de postres"
      >
        <main className="contenedor">

        <nav class="navegacionRecetas cardRecetas">
              
              <Link href={'/cerdos'} legacyBehavior>          
                <a>
                    Cerdo
                </a>
              </Link>

              <Link href={'/pescados'} legacyBehavior>          
                <a>
                    Pescado
                </a>
              </Link>
  
              <Link href={'/pollos'} legacyBehavior>          
                <a>
                    Pollo
                </a>
              </Link>

              <Link href={'/terneras'} legacyBehavior>          
                <a>
                    Ternera
                </a>
              </Link>

              <Link href={'/vegetales'} legacyBehavior>          
                <a>
                    Vegetales
                </a>
              </Link>
              
            </nav>
          <h1 className="heading">
            Recetas de Postres
          </h1>
          <div className={styles.grid}>
            {postres?.map(postre => (
              <Postre
                key={postre.id}
                postre={postre.attributes}
              />
            ))}
          </div>

        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/postres?populate=imagen&sort[0]=puntuacion:desc`)
  const { data: postres } = await respuesta.json()

  return {
    props: {
      postres
    }
  }
}