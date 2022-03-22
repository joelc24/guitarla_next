import Image from 'next/image'
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
    return ( 
        <div>
            <Layout
                pagina='Nosotros'
            >
                <main className='contenedor'>
                    <h2 className='heading'>Nosotros</h2>

                    <div className={styles.contenido}>

                        <Image layout="responsive" width={600} height={450} src='/img/nosotros.jpg' alt="Imagen sobre nosotros"/>

                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu lacus ut felis facilisis accumsan ac ac felis. Nulla in aliquam magna. Morbi pretium bibendum lectus, non interdum metus pretium eu. Curabitur semper luctus tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ultricies neque ut lectus tristique, vel elementum eros convallis. Nam sagittis, quam at faucibus molestie, metus lacus posuere lectus, non congue nulla lacus at nunc. Aliquam pellentesque sed magna sed tempor. Aliquam tellus elit, viverra sit amet felis luctus, aliquam fringilla velit. </p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu lacus ut felis facilisis accumsan ac ac felis. Nulla in aliquam magna. Morbi pretium bibendum lectus, non interdum metus pretium eu. Curabitur semper luctus tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ultricies neque ut lectus tristique, vel elementum eros convallis. Nam sagittis, quam at faucibus molestie, metus lacus posuere lectus, non congue nulla lacus at nunc. Aliquam pellentesque sed magna sed tempor. Aliquam tellus elit, viverra sit amet felis luctus, aliquam fringilla velit. </p>
                        </div>
                    </div>
                </main>

            </Layout>

        </div>
     );
}
 
export default Nosotros;