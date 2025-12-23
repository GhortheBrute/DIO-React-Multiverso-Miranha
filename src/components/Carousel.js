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

    return (
        <div>
            <div className="s-container">
                <div
                    className="s-cards-carousel"
                    // Aplicamos o estilo dinamicamente, aqui.
                    style={{transform: `translateZ(-40vw) rotateY(${rotateY}deg)`}}
                >
                    <Link
                        key={spider.id}
                        href={`/hero/${spider.id}`}
                        className="s-card"
                        id={spider.id}
                        >
                        <img className="s-card__background" src={spider.background} alt={spider.name}/>
                        <img className="s-card__image" src={spider.image} alt={spider.name}/>
                        <h2 className="s-card__title">{spider.name}</h2>
                    </Link>
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