import { Post } from "../lib/types";
import PostPreview from "./PostPreview";

interface PostListProps {
    posts: Post[];
    title: string;
}

const PostList = ({ posts, title }: PostListProps) => {
    return (
        <section>
            <h2 className="mb-8 mt-8 text-2xl md:text-4xl font-bold text-center tracking-tighter leading-tight">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        mainImage={post.mainImage}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    );
};

export default PostList;
