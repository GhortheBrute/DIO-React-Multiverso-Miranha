import Link from 'next/link';
import { spidersData } from '@/data/spiders';

export default function Navigator() {
    return (
        <nav className="s-menu">

            {/* 1. Lista da Esquerda (Home + Primeiro Aranha) */}
            <ul>
                <li className="s-menu__item">
                    <Link href="/">Página Inicial</Link>
                </li>
                {/* Pegamos apenas o primeiro aranha (Tobey) */}
                {spidersData.length > 0 && (
                    <li className="s-menu__item">
                        <Link href={`/hero/${spidersData[0].id}`}>
                            {spidersData[0].name}
                        </Link>
                    </li>
                )}
            </ul>

            {/* 2. O Ícone no Centro */}
            <div className="s-menu__icon">
                <Link href="/">
                    <img src="/assets/images/icons/spider.svg" alt="Spider-Man Icon" />
                </Link>
            </div>

            {/* 3. Lista da Direita (Restante dos Aranhas) */}
            <ul>
                {/* Pegamos do segundo aranha em diante (Tom, Andrew...) */}
                {spidersData.slice(1).map((spider) => (
                    <li key={spider.id} className="s-menu__item">
                        <Link href={`/hero/${spider.id}`}>
                            {spider.name}
                        </Link>
                    </li>
                ))}
            </ul>

        </nav>
    );
}