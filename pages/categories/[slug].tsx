import { useRouter } from "next/router";
import { categorySlugsQuery, postByCategoryQuery } from "../../lib/queries";
import sanity from "../../lib/sanity";
import { PostByCategoryQuery } from "../../lib/types";
import ErrorPage from "next/error";
import Layout from "../../components/Layout";
import Head from "next/head";
import Container from "../../components/Container";
import PostList from "../../components/PostList";

interface CategoryProps {
    data: PostByCategoryQuery;
    preview: boolean;
}

const Category = ({ data, preview }: CategoryProps) => {
    const router = useRouter();

    if (!router.isFallback && !data?.posts) {
        return <ErrorPage statusCode={404} />;
    }

    if (!data?.posts) {
        return <title>Loading…</title>;
    }

    const { posts, categorySlug } = data;

    const title = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

    return (
        <>
            <Layout>
                <Head>
                    <title>{title}</title>
                </Head>
                <Container>
                    <PostList posts={posts} title={title} />
                </Container>
            </Layout>
        </>
    );
};

export async function getStaticProps({
    params,
    preview = false,
}: {
    params: { slug: string };
    preview: boolean;
}) {
    const categorySlug = params.slug;
    const posts = await sanity.fetch(postByCategoryQuery, {
        category: categorySlug,
    });
    return {
        props: {
            preview,
            data: {
                posts,
                categorySlug,
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
