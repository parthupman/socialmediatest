import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import CardPost from "../components/Post/CardPost";
import { Segment } from "semantic-ui-react";
import { parseCookies } from "nookies";
import { NoPosts } from "../components/Layout/NoData";
import CreatePost from "../components/Post/CreatePost";

function Index({ user, postsData, errorLoading }) {
  const [posts, setPosts] = useState(postsData);
  const [showToastr, setshowToastr] = useState(false);
  useEffect(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []);

  if (posts.length === 0 || errorLoading) return <NoPosts />;

  return (
    <>
      <Segment>
        <CreatePost user={user} setPosts={setPosts} />
        {posts.map((post) => (
          <CardPost
            key={post._id}
            post={post}
            user={user}
            setPosts={setPosts}
            setshowToastr={setshowToastr}
          />
        ))}
      </Segment>
    </>
  );
}

Index.getInitialProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/posts`, {
      headers: { Authorization: token },
    });
    return { postsData: res.data };
  } catch (error) {
    return { errorLoading: true };
  }
};

export default Index;
