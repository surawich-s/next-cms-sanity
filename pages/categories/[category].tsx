import { categorySlugsQuery, postByCategoryQuery } from "../../lib/queries";
import sanity from "../../lib/sanity";

interface CategoryProps {}

const Category = ({}: CategoryProps) => {
    return <></>;
};

export async function getStaticProps({
    params,
    preview = false,
}: {
    params: { slug: string };
    preview: boolean;
}) {
    const { post, morePosts } = await sanity.fetch(postByCategoryQuery, {
        category: params.slug,
    });

    console.log(post);

    return {
        props: {
            preview,
            data: {
                post,
                morePosts,
            },
        },
    };
}

export async function getStaticPaths() {
    const paths = await sanity.fetch(categorySlugsQuery);
    return {
        paths: paths.map((slug: string) => ({ params: { slug } })),
        fallback: true,
    };
}

export default Category;
