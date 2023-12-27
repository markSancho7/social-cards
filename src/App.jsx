import Card from './components/card/Card';

const App = () => {
	return (
		<>
			<h1>Núcleo de la aplicación</h1>
			<Card
				influencer='@nathanf'
				numbers='1987'
				folowers='FOLOWERS'
				puntuation='12 Today'
			></Card>
		</>
	);
};

export default App;
