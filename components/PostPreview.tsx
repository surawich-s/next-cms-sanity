import Link from "next/link";
import { Author, MainImage } from "../lib/types";
import CoverImage from "./CoverImage";

interface PostPreviewProps {
    title: string;
    mainImage: MainImage;
    author: Author;
    slug: string;
}

const PostPreview = ({ title, mainImage, slug }: PostPreviewProps) => {
    return (
        <div>
            <div className="mb-5">
                <CoverImage slug={slug} title={title} image={mainImage} />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link href={`/posts/${slug}`}>
                    <a className="hover:underline">{title}</a>
                </Link>
            </h3>

            <p className="text-lg leading-relaxed mb-4">{}</p>
        </div>
    );
};

export default PostPreview;
