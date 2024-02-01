import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { DataContext } from "./context/DataContext";
import PostIndex from "./components/PostIndex";
import Post from "./pages/Post";

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <DataContext>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/posts' element={<Posts/>}>
            <Route path='' element={<PostIndex />}/>
            <Route path=':userId' element={<Post />}/>
          </Route >
        </Route>
      </Routes>
      </DataContext>
    </BrowserRouter>
  );
}

export default App;
