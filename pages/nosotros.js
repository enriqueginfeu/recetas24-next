import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">
          Nosotros
        </h1>

        <div className={styles.contenido}>
                <Image src="/img/nosotros.jpg" width={1100} height={1000} alt="Imagen sobre nosotros" />

                <div>
                <p>
                    ¡Bienvenidos a nuestra sección de nosotros en el sitio web de recetas de comidas! Aquí en nuestro espacio culinario virtual, nos apasiona compartir la alegría y el amor por la cocina con personas de todo el mundo. Nuestro equipo está compuesto por apasionados chefs, expertos en alimentos y entusiastas de la gastronomía, cuyo objetivo principal es inspirar a los amantes de la cocina a explorar nuevos sabores y experimentar con recetas deliciosas.
                </p>
                <p>
                    Nuestro objetivo es convertir la preparación de comidas en una experiencia divertida y enriquecedora, donde cada plato se convierta en una obra maestra de sabores y aromas. Así que, únete a nosotros en este viaje culinario y descubre nuevas delicias para deleitar a tus seres queridos y sorprender a tu paladar. ¡Bienvenidos a nuestra comunidad culinaria, donde la pasión por la comida une a las personas en torno a la mesa!
                </p>
                </div>
            </div>
      </main>
    </Layout>
  )
}
