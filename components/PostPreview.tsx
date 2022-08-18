import Link from "next/link";
import { Author, MainImage } from "../lib/types";
import CoverImage from "./CoverImage";

interface PostPreviewProps {
    title: string;
    mainImage: MainImage;
    author: Author;
    slug: string;
    excerpt: string;
}

const PostPreview = ({ title, mainImage, slug, excerpt }: PostPreviewProps) => {
    return (
        <div className="rounded-lg bg-white">
            <div className="mb-2">
                <CoverImage slug={slug} title={title} image={mainImage} />
            </div>
            <div className="py-2 px-4">
                <h3 className="text-3xl mb-3 leading-snug">
                    <Link href={`/posts/${slug}`}>
                        <a>{title}</a>
                    </Link>
                </h3>

                <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            </div>
        </div>
    );
};

export default PostPreview;
