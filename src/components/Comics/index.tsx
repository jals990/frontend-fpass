import { useContext } from 'react';
import Loader from 'react-loader-spinner';
import { ComicsContext, LoadingContext } from '../../ComicsContext';
import { Container, Scroll } from './styles';

interface ComicsProps {
  visibleModal: () => void;
  dataModal: (id: string) => void;
  search: {name: string};
}

export function Comics({visibleModal, dataModal, search}: ComicsProps){
  const characters = useContext(ComicsContext);
  const loading = useContext(LoadingContext);

  function handleVisibleModal(id: string){
    visibleModal();
    dataModal(id);
  }

  if(loading){
    return(
      <Container>
        <div className="loading">
          <Loader type="MutatingDots" />
          <strong>Carregando Dados ...</strong>
        </div>
      </Container>
    )
  }

  if(search?.name && search?.name !== ''){
    const newArr = characters.filter(character => character.name.includes(search?.name));

    if(!newArr || newArr.length === 0 ){
      return(
        <Container>
          <h1 className="empty-search">Nenhum resultado encontrado</h1>
        </Container>
      )
    }
    return (
      <Scroll>
        <Container>  
          <ul>
            {newArr.map((character, index) => {
              return (
                <li key={index}>
                  <img src={(`${character.thumbnail.path}.${character.thumbnail.extension}`)} alt={character.name} />
                  <strong>{character.name}</strong>
                  <button type="button" onClick={() => handleVisibleModal(character.id)}>
                    Mais Infos
                  </button>
                </li>
              )
            })}
          </ul>
        </Container>
      </Scroll>
    )
  }

  return (
    <Scroll>
      <Container>  
        <ul>
          {characters.map((character, index) => {
            return (
              <li key={index}>
                <img src={(`${character.thumbnail.path}.${character.thumbnail.extension}`)} alt={character.name} />
                <strong>{character.name}</strong>
                <button type="button" onClick={() => handleVisibleModal(character.id)}>
                  Mais Infos
                </button>
              </li>
            )
          })}
        </ul>
      </Container>
    </Scroll>
  )
}