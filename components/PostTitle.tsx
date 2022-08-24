interface PostTitleProps {
    children: React.ReactNode;
}

const PostTitle = ({ children }: PostTitleProps) => {
    return (
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-left">
            {children}
        </h1>
    );
};

export default PostTitle;
