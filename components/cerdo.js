import Link from "next/link"
import Image from "next/image"
import styles from "../styles/receta.module.css"

export default function Cerdo({cerdo}) {

  const { nombre, imagen, puntuacion, url } = cerdo

  return (
    
    <div className={styles.receta}>

      <div className={styles.contenido}>
        <h2>
          {nombre}
        </h2> 
        <Link href={`/cerdos/${url}`} legacyBehavior>
          <a>            
          <Image src={imagen.data[0].attributes.formats.medium.url} width={600} height={600} priority={true} alt={`Imagen pelicula ${nombre}`} />
          </a>
        </Link>
        <h4>
          {puntuacion} <span>&#9733;</span>
        </h4>
      </div>
    </div>
    
  )
}


