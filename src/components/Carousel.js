'use client';

import Link from 'next/link';
import { spidersData } from "@/data/spiders";
import { useState} from "react";

export default function Carousel() {
    // Começamos no slide 1, igual ao projeto original
    const [selectedIndex, setSelectedIndex] = useState(1);

    // A lógica matemática do seu main.js
    // rotateYDeg = -120 * (selectedItem -1)
    const rotateY = -120 * (selectedIndex - 1);

    // 1. Função que roda quando o mouse entra no card
    const handleMouseEnter = (id, controllerId) => {
        // Muda o ID do body para ativar o CSS do fundo gigante.
        document.body.id = `${controllerId}--hovered`;

        // Adiciona a classe de hover manualmente no card específico.
        const card = document.getElementById(id);
        if (card) card.classList.add('s-card--hovered');
    }

    // 2. Função que roda quando o mouse sai do card
    const handleMouseLeave = (id) => {
        document.body.id = '';

        // Remove a classe de hover
        const card = document.getElementById(id);
        if (card) card.classList.remove('s-card--hovered');
    }

    return (
        <div>
            <div className="s-container">
                <div
                    className="s-cards-carousel"
                    // Aplicamos o estilo dinamicamente, aqui.
                    style={{transform: `translateZ(-40vw) rotateY(${rotateY}deg)`}}
                >
                    {spidersData.map(spider => (
                        <Link
                            key={spider.id}
                            href={`/hero/${spider.id}`}
                            className="s-card"
                            id={spider.id}
                            onMouseEnter={() => handleMouseEnter(spider.id, spider.controllerId)}
                            onMouseLeave={() => handleMouseLeave(spider.id)}
                            >
                            <img className="s-card__background" src={spider.background} alt={spider.name}/>
                            <img className="s-card__image" src={spider.image} alt={spider.name}/>
                            <h2 className="s-card__title">{spider.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="s-controller">
                {/* Ao clicar, chamamos setSelectedIndex com o número do botão */}
                <div
                    onClick={() => setSelectedIndex(1)}
                    className={`s-controller__button ${selectedIndex === 1 ? 's-controller__button--active' : ''}`}>
                    01
                </div>
                <div
                    onClick={() => setSelectedIndex(2)}
                    className={`s-controller__button ${selectedIndex === 2 ? 's-controller__button--active' : ''}`}>
                    02
                </div>
                <div
                    onClick={() => setSelectedIndex(3)}
                    className={`s-controller__button ${selectedIndex === 3 ? 's-controller__button--active' : ''}`}>
                    03
                </div>
                <div className="s-controller__line">

                </div>
            </div>
        </div>
    );
}