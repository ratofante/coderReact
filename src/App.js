import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const saludo = {
    greetings: 'Welcome to React Store',
}
function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer saludos={saludo.greetings} />
        </>
    );
}

export default App;