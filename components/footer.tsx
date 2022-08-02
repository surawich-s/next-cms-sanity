import Container from "./Container";

type footerProps = {};

const Footer = ({}) => {
    return (
        <footer className="bg-accent-1 border-t border-accent-2">
            <Container>
                <div className="py-4 flex flex-col lg:flex-row items-center">
                    <h3 className="text-xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Statically Generated with Next.js.
                    </h3>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
