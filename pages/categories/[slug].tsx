import { useRouter } from "next/router";
import { categorySlugsQuery, postByCategoryQuery } from "../../lib/queries";
import sanity from "../../lib/sanity";
import { PostByCategoryQuery } from "../../lib/types";
import ErrorPage from "next/error";
import Layout from "../../components/Layout";
import Head from "next/head";
import Container from "../../components/Container";
import PostList from "../../components/PostList";
import PostTitle from "../../components/PostTitle";

interface CategoryProps {
    data: PostByCategoryQuery;
    preview: boolean;
}

const Category = ({ data, preview }: CategoryProps) => {
    const router = useRouter();

    if (!router.isFallback && !data) {
        return <ErrorPage statusCode={404} />;
    }

    const posts = data?.posts || [];
    const categorySlug = data?.categorySlug || "";

    const title = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

    return (
        <>
            <Layout>
                <Head>
                    <title>{title}</title>
                </Head>
                <Container>
                    {data?.posts.length > 0 && title ? (
                        <PostList posts={posts} title={title} />
                    ) : (
                        <PostTitle>No posts found</PostTitle>
                    )}
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
    const categorySlug = await params.slug;
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
