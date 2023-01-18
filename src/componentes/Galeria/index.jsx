import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'

import Cards from './Cards'
import ImagemAmpliada from './Cards/ImagemAmpliada'

export default function Galeria() {

    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map(valor => valor.tag))]

    const [imagemEscolhida, setImagemEscolhida] = useState("")

    function filtraFotos(tag) {

        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag;
        });
        setItens(novasFotos);

    }

    function favoritar(id) {
        setItens(
            itens.map(item => {
                if (item.id === id) {
                    item.favorito = !item.favorito
                }
                return item
            })
        )
    }

    function expandir(id) {
        itens.map(item => {
            if (item.id === id) {
               setImagemEscolhida(item.imagem)
            }
        })

    }

    function esconder(){
        setImagemEscolhida('')
    }


    return (

        <section className={styles.galeria}>
            {imagemEscolhida ? <ImagemAmpliada
                imagem={imagemEscolhida}
                esconder={esconder}
            />
            : ""
            }
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtrar={filtraFotos} mostraTodas={setItens} />
            <Cards
                lista={itens}
                styles={styles}
                aoFavoritar={favoritar}
                expandir={expandir}
            />
        </section>
    )
}
