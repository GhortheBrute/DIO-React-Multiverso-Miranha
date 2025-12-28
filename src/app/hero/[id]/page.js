'use client';

import { useState, use, useEffect } from "react";
import { spidersData } from "@/data/spiders";
import Link from 'next/link';

// Importar o CSS específico das páginas internas
import '@/styles/internal.css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function HeroPage({ params }) {
    // CORREÇÃO AQUI: Removemos o .id do final.
    // Agora estamos pegando o 'id' de dentro do objeto resolvedParams.
    const resolvedParams = use(params);
    const { id } = resolvedParams;

    // Busca os dados do herói correspondente
    const hero = spidersData.find(spider => spider.id === id);

    // Estado para controlar qual filme está selecionado (começando sempre com o primeiro)
    const [activeMovieIndex, setActiveMovieIndex] = useState(0);

    // Este bloco liga o Fancybox assim que a tela carrega ou muda de filme
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            buttons: ["zoom", "slideShow", "fullScreen"],
            closeButton: "top",
            Html: {
                video: {
                    autoplay: true,
                },
            },
        });

        // Limpeza: destrói o Fancybox quando saímos da página.
        return () => {
            Fancybox.destroy();
        }
    }, [activeMovieIndex]);

    // Se não achar o herói, mostra mensagem (verifique se os IDs no spiders.js são 'tobey-maguire', etc)
    if (!hero) {
        return <div>Herói não encontrado! (ID buscado: {id})</div>
    }

    // Atalho para o filme atual
    const activeMovie = hero.movies[activeMovieIndex];

    return (
        <div className="s-wrapper">
            <div className="s-left-column">
                <nav className="navigator">
                    <div className="navigator__icon">
                        <Link href="/">
                            <img src="/assets/images/icons/spiderman1.png" alt="Voltar para Home"/>
                        </Link>
                    </div>
                    <ul>
                        {/* Cria os botões para cada filme do herói dinamicamente */}
                        {hero.movies.map((movie, index) => (
                            <li key={movie.id}>
                                <button
                                    // Adiciona a classe 'active' se for o filme atual
                                    className={index === activeMovieIndex ? 'active-movie-button' : ''}
                                    onClick={() => setActiveMovieIndex(index)}
                                >
                                    0{index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className={`s-main-content s-${hero.controllerId}-0${activeMovieIndex + 1}`}>
                <div className="s-main-content__top">
                    <div className="s-logo">
                        <img src={activeMovie.logo} alt={activeMovie.title} title={activeMovie.title}/>
                    </div>

                    <div className="s-description">
                        <div className="pills">
                            <ul>
                                <li>Ano: {activeMovie.year}</li>
                                <li>Diretor: {activeMovie.director}</li>
                            </ul>
                        </div>
                        <div className="s-description__text">
                            <p><strong>Sinopse:</strong> {activeMovie.synopsis}</p>
                        </div>
                    </div>

                    <div className="s-links">
                        <ul>
                            <li>
                                <a
                                    href={activeMovie.trailer}
                                    className="link-button"
                                    data-fancybox
                                >
                                    <span className="icon">
                                        <div className="play-icon">&nbsp;</div>
                                    </span>
                                    <span className="label">Assistir trailer</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="s-main-content__bottom">
                    <div className="gallery">
                        <ul>
                            {/* Mapeia a galeria do filme atual */}
                            {activeMovie.gallery.map((image, index) => {
                                const imageUrl = typeof image === 'string' ? image : image.thumb;
                                const fullUrl = typeof image === 'string' ? image : image.full;

                                return (
                                    <li key={index}>
                                        <a
                                            href={fullUrl}
                                            data-fancybox="gallery"
                                            data-caption={`Cena do filme ${activeMovie.title} - ${hero.name}`}
                                        >
                                            <img src={imageUrl} alt={`Cena do filme ${activeMovie.title}`}/>
                                        </a>
                                    </li>
                                )}
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}