import React from 'react'
import open from './open.png'
import inconFavoritoVazio from './favorito.png'
import iconFavoritoCheio from './favorito2.png'

export default function Card({conteudo, estilo, funcao, expandir}) {

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
                    { conteudo.favorito ? <img style={{filter:"invert(1)"}} src={iconFavoritoCheio} onClick={() => funcao(conteudo.id)} alt="Ícone coração de curtir" />
                     : <img  src={inconFavoritoVazio} onClick={() => funcao(conteudo.id)} alt="Ícone coração de curtir" />
                     }
                    <img onClick={() => expandir(conteudo.id)} src={open} alt="Ícone de abrir modal" />
                </span>
            </div>
        </li>
    )
}
