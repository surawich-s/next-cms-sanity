import { Post } from "../lib/types";
import PostPreview from "./PostPreview";

interface MorePostsProps {
    posts: Post[];
}

const MorePosts = ({ posts }: MorePostsProps) => {
    return (
        <section className="border-t-2 border-slate-800">
            <h2 className="mb-8 mt-8 text-4xl font-bold tracking-tighter leading-tight">
                More Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        mainImage={post.mainImage}
                        author={post.author}
                        slug={post.slug}
                    />
                ))}
            </div>
        </section>
    );
};

export default MorePosts;
