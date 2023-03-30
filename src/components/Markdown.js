import ReactMarkdown from "react-markdown";
import { Typography } from "@tailwindcss/typography";

export default function Markdown(content) {
  return (
    <div className="prose lg:prose-xl">
      <ReactMarkdown plugins={[Typography]}>{content}</ReactMarkdown>
    </div>
  );
}
