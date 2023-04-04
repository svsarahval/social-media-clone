import React, { useEffect, useState } from 'react';
import sociableLogo from './assets/Logo.png';
import profilePic from './assets/profilePic.jpg';
import './DashBoard.css';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [userPost, setUserPost] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    fetch('https://login-page-sociable-default-rtdb.firebaseio.com/posts.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const postArray = Object.keys(data).map((postId) => {
          const postData = data[postId];
          return {
            id: postId,
            content: postData.content,
          };
        });

        setPosts(postArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function userPostHandler(event) {
    event.preventDefault();
    fetch(
      'https://login-page-sociable-default-rtdb.firebaseio.com/posts.json',
      {
        method: 'POST',
        body: JSON.stringify({ content: userPost }),
      }
    )
      .then((response) => response.json())
      .then(() => {
        setUserPost('');
        getPosts();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function editPostHandler(postId, newContent) {
    fetch(
      `https://login-page-sociable-default-rtdb.firebaseio.com/posts/${postId}.json`,
      {
        method: 'PATCH',
        body: JSON.stringify({ content: newContent }),
      }
    )
      .then(() => {
        getPosts();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function deletePostHandler(postId) {
    fetch(
      `https://login-page-sociable-default-rtdb.firebaseio.com/posts/${postId}.json`,
      {
        method: 'DELETE',
      }
    )
      .then(() => {
        getPosts();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleEditButtonClick(postId, postText) {
    const newContent = prompt('Edit the post:', postText);
    if (newContent !== null) {
      editPostHandler(postId, newContent);
    }
    setEditing(false);
  }

  return (
    <div>
      <h1 className='top'>Check Out What's New</h1>
      <img className='profilePic' src={profilePic} alt='profile picture' />
      <p class='userinfo'>Model</p>
      <p class='userinfo'>
        Please check out my website <br />
        www.professionalmodel/rima.com
      </p>
      <p class='userinfo'>for booking email me at rimamod@gmail.com</p>

      <form onSubmit={userPostHandler}>
        <textarea
          type=''
          rows={4}
          cols='50'
          value={userPost}
          onChange={(event) => setUserPost(event.target.value)}
        />
        <button className='bttn' type='submit'>
          Post
        </button>
      </form>
      <div className='container4posts'>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            <button
              onClick={() =>
                handleEditButtonClick(post.id, post.content, editing)
              }
            >
              Edit
            </button>
            <button onClick={() => deletePostHandler(post.id)}>Delete</button>
          </div>
        ))}
        <footer>
          <img className='logo' src={sociableLogo} alt='logo' />
        </footer>
        ;
      </div>
    </div>
  );
}

export default Dashboard;
