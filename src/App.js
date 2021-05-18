import React, { useState } from 'react';
import TodosManager from './pages/TodosManager';

function App() {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('theme') === 'light' ? true : false,
	);

	return (
		<div className="App">
			<TodosManager darkMode={darkMode} setDarkMode={setDarkMode} />
		</div>
	);
}

export default App;
