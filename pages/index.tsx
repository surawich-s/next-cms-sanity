import type { NextPage } from "next";
import Head from "next/head";
import { indexQuery } from "../lib/queries";
import sanity from "../lib/sanity";
import Layout from "../components/Layout";
import Container from "../components/Container";
import HeroPost from "../components/HeroPost";
import { Post } from "../lib/types";
import MorePosts from "../components/MorePosts";

interface HomeProps {
    allPosts: Array<Post>;
    preview: Boolean;
}

const Home: NextPage<HomeProps> = ({ allPosts, preview }) => {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
        <>
            <Layout>
                <Head>
                    <title>Next.js Blog Example with Sanity.io</title>
                </Head>
                <Container>
                    <HeroPost
                        title={heroPost.title}
                        mainImage={heroPost.mainImage}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        body={heroPost.body}
                    />
                    <MorePosts posts={morePosts} />
                </Container>
            </Layout>
        </>
    );
};

export async function getStaticProps({ preview = false }) {
    const allPosts = await sanity.fetch(indexQuery);
    console.log(allPosts[0]);
    return {
        props: { allPosts, preview },
    };
}

export default Home;
