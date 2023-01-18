import styles from './Rodape.module.scss';
import instagram from '../../assets/redes/instagram.svg'
import twitter from '../../assets/redes/twitter.svg'
import facebook from '../../assets/redes/facebook.svg'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__box}>
                <a href="/"><img src={facebook} alt="facebook" /></a>
                <a href="/"><img src={twitter} alt="twitter" /></a>
                <a href="/"><img src={instagram} alt="instagram" /></a>
            </div>
            <p className={styles.rodape__texto}>Desenvolvido por Bruno Bahy.</p>
        </footer>
    )
}
