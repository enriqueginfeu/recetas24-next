import Link from "next/link"
import Layout from "../components/layout"
import Ternera from "../components/ternera"
import styles from "../styles/receta.module.css"

export default function Terneras({ terneras }) {
  return (
    <>
      <Layout
        title={'Ternera'}
        description="Seccion con recetas de comida que contienen carne de ternera"
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

              <Link href={'/postres'} legacyBehavior>          
                <a>
                    Postres
                </a>
              </Link>

              <Link href={'/vegetales'} legacyBehavior>          
                <a>
                    Vegetales
                </a>
              </Link>
              
            </nav>
          <h1 className="heading">
            Recetas con Ternera
          </h1>
          <div className={styles.grid}>
            {terneras?.map(ternera => (
              <Ternera
                key={ternera.id}
                ternera={ternera.attributes}
              />
            ))}
          </div>

        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/terneras?populate=imagen&sort[0]=puntuacion:desc`)
  const { data: terneras } = await respuesta.json()

  return {
    props: {
      terneras
    }
  }
}