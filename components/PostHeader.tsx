import { MainImage } from "../lib/types";
import CoverImage from "./CoverImage";
import PostTitle from "./PostTitle";

interface PostHeaderProps {
    title: string;
    mainImage: MainImage;
}

const PostHeader = ({ title, mainImage }: PostHeaderProps) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage title={title} image={mainImage} />
            </div>
        </>
    );
};

export default PostHeader;
