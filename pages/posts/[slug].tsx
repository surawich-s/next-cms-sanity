import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { postQuery, postSlugsQuery } from "../../lib/queries";
import sanity from "../../lib/sanity";
import { PostSlugQuery } from "../../lib/types";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Head from "next/head";
import { urlForImage } from "../../lib/sanityHelper";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import SectionSeparator from "../../components/SectionSeparator";
import PostTitle from "../../components/PostTitle";
import PostList from "../../components/PostList";

interface PostProps {
    data: PostSlugQuery;
    preview: boolean;
}

const Post = ({ data, preview }: PostProps) => {
    const router = useRouter();

    const slug = data?.post?.slug;

    if (!router.isFallback && !slug) {
        return <ErrorPage statusCode={404} />;
    }

    if (!data?.post || !data.morePosts) {
        return <PostTitle>Loading…</PostTitle>;
    }

    const { post, morePosts } = data;

    return (
        <Layout>
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>{post.title}</title>
                                {post.mainImage && (
                                    <meta
                                        key="ogImage"
                                        property="og:image"
                                        content={urlForImage(post.mainImage)
                                            .width(1200)
                                            .height(627)
                                            .fit("crop")
                                            .url()}
                                    />
                                )}
                            </Head>
                            <PostHeader
                                title={post.title}
                                mainImage={post.mainImage}
                            />
                            <PostBody content={post.body} />
                        </article>
                        <SectionSeparator />
                        {morePosts.length > 0 && (
                            <PostList posts={morePosts} title="More Stories" />
                        )}
                    </>
                )}
            </Container>
        </Layout>
    );
};

export async function getStaticProps({
    params,
    preview = false,
}: {
    params: { slug: string };
    preview: boolean;
}) {
    const { post, morePosts } = await sanity.fetch(postQuery, {
        slug: params.slug,
    });

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
    const paths = await sanity.fetch(postSlugsQuery);
    return {
        paths: paths.map((slug: string) => ({ params: { slug } })),
        fallback: true,
    };
}

export default Post;
