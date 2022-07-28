import type { NextPage } from "next";
import Head from "next/head";
import { indexQuery } from "../lib/queries";
import sanity from "../lib/sanity";
import Layout from "../components/layout";
import Container from "../components/container";
import HeroPost from "../components/hero-post";

interface Post {
    _id: string;
    author: Object;
    coverImage: string;
    date: Date;
    excerpt: string;
    name: string;
    slug: string;
    title: string;
}
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
                        coverImage={heroPost.coverImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                </Container>
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
