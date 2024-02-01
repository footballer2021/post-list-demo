import { usePostsContext, useIsErrorContext } from "../context/DataContext"
import { Link } from 'react-router-dom';

const PostIndex = () => {
  const posts = usePostsContext();
  const isError = useIsErrorContext();

  return (
    <>
        {
        isError ?
        <h3>データを取得できませんでした</h3> :
        <ul>
            {
                posts.map(post => {
                    return (
                        <li>
                            <Link to={`/posts/${post.id}`}>{post.id}:{post.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
        }
    </>
  )
}

export default PostIndex