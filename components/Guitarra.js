import Image from "next/image";
import Link from "next/link";
const Guitarra = ({guitarra}) => {
    const {descripcion, imagen, nombre, precio, url  } = guitarra;
    return ( 
        <div>
            <Image
                layout="responsive"
                src={imagen.url}
                alt={`Imagen guitarra ${nombre}`}
                width={500}
                height={350}
            />
            <div>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <p>Precio: ${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    Ver Producto
                </Link>
            </div>
        </div>
    );
}
 
export default Guitarra;