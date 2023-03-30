import axios from "axios";

import Postblock from "@/components/postBlock";

export default function Home(props) {
  return (
    <>
      <div className="felx flex-row">
        {props.data.map((post, index) => {
          return <Postblock key={index} post={post} />;
          // return <h1 key={index}>{post.postTitle}</h1>;
        })}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await axios.get("http://localhost:1337/api/posts?populate=*", {
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_TOKEN,
    },
  });

  let postInfo = posts.data.data.map((post) => {
    return {
      postId: post.id,
      postTitle: post.attributes.title,
      postBody: post.attributes.body,
      postCategory: post.attributes.category,
      postTags: post.attributes.tags,
      postUser: post.attributes.admin_user,
    };
  });
  return {
    props: {
      data: postInfo,
      // id: posts.data.id,
      // postData: posts.data.attributes,
    },
  };
}
