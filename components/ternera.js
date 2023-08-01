import Link from "next/link"
import Image from "next/image"
import styles from "../styles/receta.module.css"

export default function Ternera({ternera}) {

  const { nombre, imagen, puntuacion, url } = ternera

  return (
    
    <div className={styles.receta}>
      <div className={styles.contenido}>
        <h2>
          {nombre}
        </h2>
        <Link href={`/terneras/${url}`} legacyBehavior>
          <a>
          <Image src={imagen.data[0].attributes.formats.medium.url} width={600} height={600} priority={true} alt={`Imagen receta ${nombre}`} />  
          </a>
        </Link>
        <h4>
          {puntuacion} <span>&#9733;</span>
        </h4>
      </div>
    </div>
    
  )
}


