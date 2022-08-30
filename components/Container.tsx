interface ContainerProps {
    children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
