import type { NextPage } from "next";
import Head from "next/head";
import { indexQuery } from "../lib/queries";
import sanity from "../lib/sanity";
import Layout from "../components/Layout";
import Container from "../components/Container";
import HeroPost from "../components/HeroPost";
import { Post } from "../lib/types";
import PostList from "../components/PostList";
import PostTitle from "../components/PostTitle";

interface HomeProps {
    allPosts: Array<Post>;
    preview: Boolean;
}

const Home: NextPage<HomeProps> = ({ allPosts, preview }) => {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    const renderPageContent = <T extends {}>(
        content: Array<T>
    ): JSX.Element => {
        if (content.length < 1) {
            return (
                <Container>
                    <PostTitle>No posts found</PostTitle>
                </Container>
            );
        } else {
            return (
                <>
                    <HeroPost
                        title={heroPost?.title}
                        mainImage={heroPost?.mainImage}
                        author={heroPost?.author}
                        slug={heroPost?.slug}
                        excerpt={heroPost?.excerpt}
                    />
                    <Container>
                        <PostList posts={morePosts} title="More Stories" />
                    </Container>
                </>
            );
        }
    };

    return (
        <>
            <Layout>
                <Head>
                    <title>Website Name</title>
                </Head>
                {renderPageContent(allPosts)}
            </Layout>
        </>
    );
};

export async function getStaticProps({ preview = false }) {
    const allPosts = await sanity.fetch(indexQuery);
    return {
        props: { allPosts, preview },
    };
}

export default Home;
