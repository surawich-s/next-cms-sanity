import markdownStyles from "./markdown-styles.module.css";
import { PortableText } from "@portabletext/react";
import { Body } from "../lib/types";
interface PostBodyProps {
    content: Body;
}

const PostBody = ({ content }: PostBodyProps) => {
    return (
        <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
            <PortableText value={content} />
        </div>
    );
};

export default PostBody;
