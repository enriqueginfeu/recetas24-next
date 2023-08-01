import Link from "next/link"
import Image from "next/image"
import { formatearFecha } from "../utils/helpers"
import styles from "../styles/blog.module.css"


export default function Post({post}) {

  const { contenido, imagen, titulo, url, publishedAt } = post

  return (

       <article>
        <Image src={imagen.data[0].attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${titulo}`} />

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <Link href={`/blog/${url}`} legacyBehavior>
                <a className={styles.enlace}>
                    Leer Post
                </a>
            </Link>
        </div>
    </article>

  )
}


