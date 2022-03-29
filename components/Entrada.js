const Entrada = ({entrada}) => {
    const {titulo, resumen, imagen, published_at, id} = entrada
    return ( 
        <article>
            <h2>{titulo}</h2>
        </article>
     );
}
 
export default Entrada;