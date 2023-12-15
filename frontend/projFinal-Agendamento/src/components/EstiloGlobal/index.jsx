import { Global } from "@emotion/react"

const estilos = tema => {
    return {
        html: {
            fontFamily: 'Montserrat'
        }, 
        body: {
            margin: 0,
            padding: 0
        },
        a: {
            textDecoration: 'none'
        }
    }
}


export const Estilos = () => {
    return (<Global styles={estilos}/>)
}