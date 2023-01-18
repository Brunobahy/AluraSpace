
import Card from './Card'

export default function Cards({ lista, styles }) {
    return (
        <ul className={styles.galeria__cards}>
            {lista.map((item) => {
                return (
                    <Card
                        key={item.id}
                        estilo={styles}
                        conteudo={item}
                    />
                )
            })}
        </ul>
    )
}
