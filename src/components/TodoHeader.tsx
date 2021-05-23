import React, { useEffect } from 'react';
import { IDarkMode } from '../pages/TodosManager';
import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';

const TodoHeader: React.FC<IDarkMode> = ({ darkMode, setDarkMode }) => {
	const htmlTag: any | string = document.body.parentElement;

	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			// Renvoie la valeur associée à la clé passée en paramètre. Ici, si il n'y a pas de value, alors ...
			setDarkMode(true);
			localStorage.setItem('theme', 'light'); // Ajoute nouveau stockage, ou modifie si existe déjà : key = theme, value = light
			htmlTag.setAttribute('data-theme', 'light');
		} else {
			htmlTag.setAttribute('data-theme', localStorage.getItem('theme'));
		}
	}, []);

	// == Change theme
	const switchTheme = (): void => {
		if (!darkMode) {
			localStorage.setItem('theme', 'light');
			htmlTag.setAttribute('data-theme', localStorage.getItem('theme'));
			setDarkMode(true);
		} else {
			localStorage.setItem('theme', 'dark');
			htmlTag.setAttribute('data-theme', localStorage.getItem('theme'));
			setDarkMode(false);
		}
	};

	return (
		<div className="header">
			<h1 className="header__title">TODO</h1>
			<button onClick={() => switchTheme()}>
				<img src={darkMode ? iconSun : iconMoon} alt="iconBg" />
			</button>
		</div>
	);
};

export default TodoHeader;
