import "../../../styles/layout/_header-home-component.sass"
import { useState } from "react";

export default function Header() {
    const colors: string[] = ['Azul-claro',
        'Turquesa',
        'Amarelo',
        'Rosa',
        'Salmão',
        'Azul',
        'Roxo',
        'Verde',
        'Laranja',
        'Cinza-claro',
        'Cinza',
        'Marrom'
    ];

    const [selectedColor, setSelectedColor] = useState<string>("");
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColor(event.target.value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsFavorite(event.target.checked);
    };

    return (
        <div id='header-container'>
            <div id="logo">
                <img src="https://i.imgur.com/sY8bF7f.png" alt="logo" />
                <p>CoreNotes</p>
            </div>

            <div id='search-container'>
                <p>Filtre suas notas:</p>

                <input
                    type="checkbox"
                    id="scales"
                    name="scales"
                    checked={isFavorite}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="scales">Favoritos</label>

                <select
                    id="rainbow-color"
                    value={selectedColor}
                    onChange={handleColorChange}
                    style={{ fontSize: '12px' }}
                >
                    <option value="">Sem filtro</option>
                    {colors.map((color, index) => (
                        <option key={index} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
