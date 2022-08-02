import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../lib/sanityHelper";
import { MainImage } from "../lib/types";
type coverImageProps = {
    image: MainImage;
    slug?: string;
    title?: string;
};

const CoverImage = ({
    image: source,
    slug = "",
    title = "",
}: coverImageProps) => {
    const image = source ? (
        <Image
            className="rounded-lg brightness-75"
            src={urlForImage(source).height(1000).width(2000).url()}
            alt="cover image"
            layout="responsive"
            width={2000}
            height={1000}
            priority={true}
        />
    ) : (
        <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
    );

    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link href={`/posts/${slug}`}>
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </div>
    );
};

export default CoverImage;
