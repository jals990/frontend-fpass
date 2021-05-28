import { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from './services/api';

interface Thumbnails {
  path: string;
  extension: string
}

interface Character {
  id: string;
  name: string;
  thumbnail: Thumbnails;
}

interface CharactersProps {
  children: ReactNode;
}

interface Controller {
  value: number;
}

interface Spinner {
  loading: boolean;
}

export const ComicsContext = createContext<Character[]>([]);
export const LoadingContext = createContext<boolean>(false);

export function CharactersList({ children }: CharactersProps){
  const [ characters, setCharacters] = useState<Character[]>([]);
  const [ offset, setOffset] = useState<Controller>({value: 0});
  const [ limit, setLimit] = useState<Controller>({value: 0});
  const [ loading, setLoading ] = useState<Spinner>({loading: true});

  useEffect(() => {
    getDataFromMarvel();
  }, []);

  function getDataFromMarvel(){

    if(offset?.value >= limit?.value && limit?.value > 0){
      setLoading({ loading: !loading });
      return
    }
    try{
      api.get('/characters', { params: {offset: offset?.value } })
      .then((response) => {
        setCharacters([...characters, ...response.data.data.results])
        setOffset({value: offset?.value + response.data.data.count})
        if(limit?.value === 0 ){
          setLimit({value: limit?.value + response.data.data.total })
        }
      });
    }catch(err){
      toast.error('Ocorreu um erro durante a slicitação. Tente novamente.')
    }
  }

  useEffect(() => {
    getDataFromMarvel();
  }, [offset]);

  return (
    <ComicsContext.Provider value={characters} >
      <LoadingContext.Provider value={loading?.loading} >
        { children }
      </LoadingContext.Provider>
    </ComicsContext.Provider>
  )
}