import Link from "next/link"
import Layout from "../components/layout"
import Pollo from "../components/pollo"
import styles from "../styles/receta.module.css"

export default function Pollos({ pollos }) {
  return (
    <>
      <Layout
        title={'Pollo'}
        description="Seccion con recetas de comida que contienen carne de pollo"
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
            Recetas con Pollo
          </h1>
          <div className={styles.grid}>
            {pollos?.map(pollo => (
              <Pollo
                key={pollo.id}
                pollo={pollo.attributes}
              />
            ))}
          </div>

        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/pollos?populate=imagen&sort[0]=puntuacion:desc`)
  const { data: pollos } = await respuesta.json()

  return {
    props: {
      pollos
    }
  }
}