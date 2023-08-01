import Link from "next/link"
import Layout from "../components/layout"
import styles from "../styles/receta.module.css"
import Vegetal from "../components/vegetal"

export default function Vegetales({ vegetales }) {
  return (
    <>
      <Layout
        title={'Vegetales'}
        description="Seccion con recetas de comida que contienen vegetales"
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
              
              <Link href={'/terneras'} legacyBehavior>          
                <a>
                    Ternera
                </a>
              </Link>

              
            </nav>
          <h1 className="heading">
            Recetas con Vegetales
          </h1>
          <div className={styles.grid}>
            {vegetales?.map(vegetal => (
              <Vegetal
                key={vegetal.id}
                vegetal={vegetal.attributes}
              />
            ))}
          </div>

        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/vegetales?populate=imagen&sort[0]=puntuacion:desc`)
  const { data: vegetales } = await respuesta.json()

  return {
    props: {
      vegetales
    }
  }
}