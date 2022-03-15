import Head from 'next/head'

const Layout = ({children,pagina}) => {
    return ( 
        <div>
            <head>
            <title>GuitarLa</title>

        </head>
            {children}
        </div>
     );
}
 
export default Layout;