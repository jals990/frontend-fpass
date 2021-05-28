import { useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer } from "react-toastify";
import { Comics } from './components/Comics';
import { ModalComic } from './components/Modal'
import { Navbar } from './components/Navbar';
import { CharactersList } from './ComicsContext'
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

interface ModalData{
  id: string
}

interface Search {
  name: string;
}

export function App() {
  const [modalComicVisible, setModalComicVisible] = useState(false);
  const [modalData, setModalData] = useState<ModalData>({id: ''});
  const [ search, setSearch] = useState<Search>({name: ''});

  function handleVisibleModal(){
    setModalComicVisible(!modalComicVisible);

    if(!modalComicVisible){
      setModalData({id:'0'})
    }
  }

  function handleDataModal({id}: ModalData){
    setModalData({ id: id });
  }

  function handleSearch({name}: Search){
    setSearch({ name: name });
  }

  return (
    <CharactersList>
      <GlobalStyle />
      <ToastContainer autoClose={6000} />
      <Navbar 
        dataSearch={(target) => handleSearch({name: target})} search={search}/>
      <Comics 
        visibleModal={handleVisibleModal} 
        dataModal={(target) => handleDataModal({id: target})}
        search={search}
      />
      <ModalComic 
        isOpen={modalComicVisible}
        onRequestClose={handleVisibleModal}
        id={modalData}
      />
      <footer>Data provided by Marvel. © 2021 MARVEL</footer>
    </CharactersList>
  );
}
