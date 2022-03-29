import Image from "next/image";
import styles from "../../styles/Guitarra.module.css";
import Layout from '../../components/Layout';
const Producto = ({guitarra}) => {
    const { descripcion, imagen, nombre, precio } = guitarra[0];
    return ( 
        <Layout pagina={`Guitarra ${nombre}`}>
            <div className={styles.guitarra}>
                <Image
                    layout="responsive"
                    src={imagen.url}
                    alt={`Imagen guitarra ${nombre}`}
                    width={180}
                    height={350}
                />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                </div>
            </div>
        </Layout>
     );
}

export async function getServerSideProps({query: {url}}) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()
    

    return {
        props: {
            // Propiedades que se pasan al componente
            guitarra
        }
    }
}
 
export default Producto;