
import Card from './Card'
import favoritoCheio from './Card/favorito2.png'

export default function Cards({ lista, styles, aoFavoritar, expandir }) {
    
   
    
    return (
        <ul className={styles.galeria__cards}>
            {lista.map((item) => {
                return (
                    <Card
                        key={item.id}
                        estilo={styles}
                        conteudo={item}
                        funcao={aoFavoritar}
                        expandir={expandir}
                    />
                )
            })}
        </ul>
    )
}
