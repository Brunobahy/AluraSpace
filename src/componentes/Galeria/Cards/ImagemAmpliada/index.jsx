import Styles from './ImagemAmpliada.module.scss'

export default function ImagemAmpliada({imagem, esconder}) {
    return (
        <span onClick={() => esconder()} className={Styles.tela}>
            <h2>Clique para sair</h2>
            <img src={imagem} alt="teste 123" />
        </span>
    )
}
