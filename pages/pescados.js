import Link from "next/link"
import Layout from "../components/layout"
import Pescado from "../components/pescado"
import styles from "../styles/receta.module.css"

export default function Pescados({ pescados }) {
  return (
    <>
      <Layout
        title={'Pescado'}
        description="Seccion con recetas de comida que contienen carne de cerdo"
      >
        <main className="contenedor">

        <nav class="navegacionRecetas cardRecetas">

          <Link href={'/cerdos'} legacyBehavior>          
            <a>
                Cerdo
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
            Recetas con Pescado
          </h1>
          <div className={styles.grid}>
            {pescados?.map(pescado => (
              <Pescado
                key={pescado.id}
                pescado={pescado.attributes}
              />
            ))}
          </div>

        </main>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/pescados?populate=imagen&sort[0]=puntuacion:desc`)
  const { data: pescados } = await respuesta.json()

  return {
    props: {
      pescados
    }
  }
}