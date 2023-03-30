import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Typography } from "@tailwindcss/typography";
import { useRouter } from "next/router";

import Postblock from "@/components/postBlock";

export default function View(props) {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <>
      <div className="p-5">
        <h1 className="text-4xl">{props.data.attributes.title}</h1>
        <div>
          <div className="prose lg:prose-xl">
            <ReactMarkdown plugins={[Typography]}>
              {props.data.attributes.body}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { postId } = context.query;
  const post = await axios.get(
    `http://localhost:1337/api/posts/${postId}?populate=*`,
    {
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_TOKEN,
      },
    }
  );

  return {
    props: {
      data: post.data.data,
    },
  };
}
