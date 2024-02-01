import { useParams } from "react-router-dom"
import { usePostsContext } from "../context/DataContext";

const Post = () => {
  const { userId } = useParams();
  const post = usePostsContext().find(post => {
    return post.id === Number(userId)
  });

  return (
    <>
        {
            post ?
            <>
                <p>ID:{post.id}</p>
                <p>タイトル:{post.title}</p>
                <p>内容:{post.body}</p>
            </>
            :<h3>データを取得できませんでした</h3>
        }
    </>
  )
}

export default Post