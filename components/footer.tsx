import Container from "./Container";
import Link from "next/link";

type footerProps = {};

const Footer = ({}) => {
    return (
        <footer className="bg-white border-t border-accent-2">
            <Container>
                <div className="flex flex-col md:flex-row justify-start px-4 py-5 gap-y-10">
                    <div className="flex flex-col items-start justify-between gap-y-4">
                        <h1 className="text-xl md:text-2xl font-bold">
                            Sign up to our newsletter
                        </h1>
                        <h2 className="text-lg md:text-xl">
                            Daily or Weekly updates on the latest news
                        </h2>
                        <div className="flex flex-row items-center gap-x-2">
                            <input
                                className="border border-accent-2 bg-gray p-2 text-gray-600"
                                placeholder={"Your Email Address"}
                            />
                            <div className="flex flex-row gap-x-2">
                                <input
                                    type="checkbox"
                                    id="daily"
                                    name="daiily"
                                    value="dailly"
                                />
                                <label htmlFor="daily">Daily</label>
                            </div>

                            <div className="flex flex-row gap-x-2">
                                <input
                                    type="checkbox"
                                    id="weekly"
                                    name="weekly"
                                    value="weekly"
                                />
                                <label htmlFor="weekly">Weekly</label>
                            </div>
                        </div>

                        <button className="bg-red-700 p-2 text-white">
                            Subscibe
                        </button>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
