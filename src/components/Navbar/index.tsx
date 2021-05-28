import { Container } from './styles';

interface NavbarProps {
  dataSearch: (id: string) => void;
  search: {name: string};
}

export function Navbar({ dataSearch, search } : NavbarProps ){

  function handleChangeSearch(name: string){
    dataSearch(name);
  }

  return (
    <Container>
      <h1>MySuperHero</h1>
      <form>
        <input 
          type="text" 
          name="search"
          placeholder="Pesquise um herói"
          value={search?.name}
          onChange={(e) => handleChangeSearch(e.target.value)} 
        />
        <button type="button" onClick={() => handleChangeSearch('')}>Limpar Pesquisa</button>
      </form>
    </Container>
  )
}