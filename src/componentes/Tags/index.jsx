import styles from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, filtrar, mostraTodas}) {
    return (
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map( tag => <li onClick={() => filtrar(tag)} key={tag}>{tag}</li> )}
                <li onClick={() => mostraTodas(fotos)}>Todas</li>
            </ul>
        </div>
    )
}


