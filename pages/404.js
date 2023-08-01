import Layout from "../components/layout"
import Link from "next/link"

export default function Pagina404() {
    return (
        <Layout
            title="Pagina No Encontrada"
        >
            <main className="contenedor">
                <div className="pagina-404">
                    <h2>
                        Pagina No Encontrada
                    </h2>
                    <Link href={'/'} legacyBehavior>
                        <a className="error-enlace">
                            Ir al Inicio
                        </a>
                    </Link>
                </div>
            </main>
        </Layout>
    )
}
