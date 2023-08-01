import Link from "next/link"
import Layout from "../components/layout"
import Cerdo from "../components/cerdo"
import styles from "../styles/receta.module.css"

export default function Cerdos({ cerdos }) {
  return (
    <>
      <Layout
        title={'Cerdo'}
        description="Seccion con recetas de comida que contienen carne de cerdo"
      >
        <main className="contenedor">

          <nav class="navegacionRecetas cardRecetas">

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

            <Link href={'/postres'} legacyBehavior>          
              <a>
                  Postres
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
            Recetas con Cerdo
          </h1>
          <div className={styles.grid}>
            {cerdos?.map(cerdo => (
              <Cerdo
                key={cerdo.id}
                cerdo={cerdo.attributes}
              />
            ))}
          </div>

        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/cerdos?populate=imagen&sort[0]=puntuacion:desc`)
  const { data: cerdos } = await respuesta.json()

  return {
    props: {
      cerdos
    }
  }
}