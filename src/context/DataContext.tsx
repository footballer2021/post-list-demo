import { useState, createContext, useContext, useEffect } from 'react'
import axios from 'axios';
import { PostType } from '../type/DataType';

const postsContext = createContext<PostType[]>([]);
const isErrorContext = createContext<boolean>(false);

const DataContext = ({children}:{children:React.ReactNode}) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
            setIsError(false);
        }catch(error){
            setIsError(true);
        };
    };
    getData();
  },[]);

  return (
    <postsContext.Provider value={posts}>
        <isErrorContext.Provider value={isError}>
            {children}
        </isErrorContext.Provider>
    </postsContext.Provider>
  )
}

const usePostsContext = () => useContext(postsContext);
const useIsErrorContext = () => useContext(isErrorContext);

export { DataContext, usePostsContext, useIsErrorContext }