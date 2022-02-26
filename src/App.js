import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
//import Pokemon from './components/Pokemon';
//import ComponenteEstado from './components/ComponenteEstado';
//import Food from './components/Food';

const saludo = {
    greetings: 'Welcome to React Store',
}

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer saludos={saludo.greetings}>
                <ItemList />
            </ItemListContainer>
        </>
    );
}

export default App;