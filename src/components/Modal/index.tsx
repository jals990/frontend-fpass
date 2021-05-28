import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/api';
import { Container } from './styles';

interface Thumbnails {
  path: string;
  extension: string
}

interface ACustom {
  items: [{
    name: string
  }]
}

interface Character {
  id: string;
  description: string;
  name: string;
  thumbnail: Thumbnails;
  comics: ACustom;
  series: ACustom;
}

interface ModalComicProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: {id: string}
}

export function ModalComic({ isOpen, onRequestClose, id}: ModalComicProps){
  const [ character, setCharacter] = useState<Character>();

  useEffect(() => {
    async function getDataFromMarvel(){
      api.get(`/characters/${id?.id}`)
        .then((response) => {
          setCharacter({...response.data.data.results[0]})
        });
    };
    getDataFromMarvel();
  }, [id]);

  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}>
        <Container>
          <img src={(`${character?.thumbnail.path}.${character?.thumbnail.extension}`)} alt={character?.name}/>
          <h1>{character?.name}</h1>
          <strong>{character?.description || 'Sem descrição disponível para este personagem' }</strong>
          <div>
            <strong>{`Comics: ${character?.comics.items.length}`}</strong>
            <ul>
              {character?.comics.items.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <strong>{`Series: ${character?.comics.items.length}`}</strong>
            <ul>
              {character?.series.items.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <p>{`ID personagem para validar em API: ${character?.id}`}</p>
          <button type="button" onClick={onRequestClose}>Fechar</button>
        </Container>
    </Modal>
  )
}