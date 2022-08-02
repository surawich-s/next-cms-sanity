import Link from "next/link";
import CoverImage from "./CoverImage";
import { Author, Body, MainImage } from "../lib/types";

type HeroPostProps = {
    title: string;
    mainImage: MainImage;
    body: Body;
    author: Author;
    slug: string;
};

const HeroPost = ({ title, mainImage, body, author, slug }: HeroPostProps) => {
    return (
        <section>
            <div className="mb-8 md:mb-16">
                {/* <CoverImage slug={slug} title={title} image={coverImage} /> */}
                <CoverImage image={mainImage} />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <Link href={`/posts/${slug}`}>
                            <a className="hover:underline">{title}</a>
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg"></div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">
                        {body.children}
                    </p>
                    {/* <Avatar name={author.name} picture={author.picture} /> */}
                </div>
            </div>
        </section>
    );
};

export default HeroPost;
