import Link from "next/link";
import CoverImage from "./CoverImage";
import { Author, Body, MainImage } from "../lib/types";

type HeroPostProps = {
    title: string;
    mainImage: MainImage;
    excerpt: string;
    author: Author;
    slug: string;
};

const HeroPost = ({
    title,
    mainImage,
    excerpt,
    author,
    slug,
}: HeroPostProps) => {
    return (
        <section className="relative flex justify-center items-center text-center mt-4 mb-10">
            <div className="w-screen">
                {/* <CoverImage slug={slug} title={title} image={coverImage} /> */}
                <CoverImage image={mainImage} />
            </div>
            <div className="z-10 absolute text-white">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <Link href={`/posts/${slug}`}>
                            <a className="">{title}</a>
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg"></div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                </div>
            </div>
        </section>
    );
};

export default HeroPost;
