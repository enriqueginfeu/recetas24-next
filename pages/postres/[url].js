import Image from "next/image"
import Layout from "../../components/layout"
import styles from "../../styles/receta.module.css"

export default function PostreURL({postre}) {
  
  const { 
    nombre, 
    imagen, 
    puntuacion, 
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    tiempo,
    porcion,
    paso1,
    paso2,
    paso3,
    paso4,
    paso5,
    paso6,
    paso7,
    paso8,
    paso9
  } = postre[0].attributes


  return (
    <Layout
    title={`${nombre}`}>

    <main className="contenedor">

        <h1>{nombre}</h1>
          <h4>{puntuacion} <span>&#9733;</span></h4>
            <div className={styles.grid}>
              <div>
                <Image src={imagen.data[0].attributes.formats.medium.url} width={600} height={600} priority={true} alt={`Imagen receta ${nombre}`} />
              </div>
              <div>
                <h2>Ingredientes</h2>
                <p>{item1}</p>
                <p>{item2}</p>
                <p>{item3}</p>
                <p>{item4}</p>
                <p>{item5}</p>
                <p>{item6}</p>
                <p>{item7}</p>
                <p>{item8}</p>
                <p>{item9}</p>
                <p>{item10}</p>
              </div>
            </div>
            <div>
              <h3>Tiempo: <span>{tiempo}</span></h3>
              <h3>Porcion: <span>{porcion}</span></h3>
            </div>
            <div className="card">
                <h2 className="tituloPreparacion">Preparacion</h2>
                <p>{paso1}</p>
                <p>{paso2}</p>
                <p>{paso3}</p>
                <p>{paso4}</p>
                <p>{paso5}</p>
                <p>{paso6}</p>
                <p>{paso7}</p>
                <p>{paso8}</p>
                <p>{paso9}</p>

                <form>
                    <p class="clasificacion">

                      <button type="reset">
                        Valorar Receta
                      </button>

                      <input id="radio1" type="radio" name="estrellas" value="5"/>
                      <label for="radio1">★</label>
                      <input id="radio2" type="radio" name="estrellas" value="4"/>
                      <label for="radio2">★</label>
                      <input id="radio3" type="radio" name="estrellas" value="3"/>
                      <label for="radio3">★</label>
                      <input id="radio4" type="radio" name="estrellas" value="2"/>
                      <label for="radio4">★</label>
                      <input id="radio5" type="radio" name="estrellas" value="1"/>
                      <label for="radio5">★</label>
                    </p>
                </form>
            </div>
        
  </main>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {

  const respuesta = await fetch(`${process.env.API_URL}/postres?filters[url]=${url}&populate=imagen`)
  const {data: postre} = await respuesta.json()
  
  return {
    props: {
      postre
    }
  }
}