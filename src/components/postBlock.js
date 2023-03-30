import { remark } from "remark";
import html from "remark-html";
import { resolve } from "styled-jsx/css";
// import Markdowns from "./Markdown";

import Link from "next/link";

export default function Postblock(props) {
  //   function Markdown(props) {
  //     const processedContent = remark()
  //       .use(html)
  //       .processSync(props.post.postBody)
  //       .toString();
  //     return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
  //   }

  //   const htmlContent = Markdown(props);

  //   function Markdown(content) {
  //     return (
  //       <div className="prose lg:prose-xl">
  //         <ReactMarkdown plugins={[Typography]}>{content}</ReactMarkdown>
  //       </div>
  //     );
  //   }

  return (
    <>
      <div className="w-1/4">
        <h2 className="text2xl font-bold">
          <Link href="/view/[postId]" as={`/view/${props.post.postId}`}>
            {props.post.postTitle}
          </Link>
        </h2>

        {/* <Markdowns content={props.post.postBody} /> */}
        {/* <div>{htmlContent}</div> */}
      </div>
    </>
  );
}
