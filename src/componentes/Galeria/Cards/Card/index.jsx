import React from 'react'
import open from './open.png'
import favorito from './favorito.png'

export default function Card({conteudo, estilo}) {
    return (
        <li className={estilo.galeria__card}>
            <img
                className={estilo.galeria__imagem}
                src={conteudo.imagem}
                alt={conteudo.titulo}
            />
            <p className={estilo.galeria__descricao}>{conteudo.titulo}</p>
            <div>
                <p >{conteudo.creditos}</p>
                <span >
                    <img src={favorito} alt="Ícone coração de curtir" />
                    <img src={open} alt="Ícone de abrir modal" />
                </span>
            </div>
        </li>
    )
}
