import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineSegment } from "react-icons/md";

const Navbar = () => {
    const [toggleButton, setToggleButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setToggleButton(false);
        };
        if (toggleButton) {
            window.addEventListener("scroll", handleScroll);
        } else {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    const navigation = [
        { id: 1, name: "HOME", href: "/" },
        { id: 2, name: "NEWS", href: "/" },
        { id: 3, name: "CULTURE", href: "/" },
        { id: 4, name: "WEALTH", href: "/" },
        { id: 5, name: "INTERVIEW", href: "/" },
    ];
    const navBarList = (mode: string) => {
        const navBarListClassName =
            mode === "regular"
                ? "gap-x-4 hidden sm:flex sm:flex-row items-center justify-center"
                : "flex flex-col justify-center py-4 rounded border-b border-black";
        const navBarItemClassName =
            mode === "regular"
                ? "hover:underline"
                : "bg-white cursor-pointer hover:bg-slate-200 transition delay-150";
        return (
            <ul className={navBarListClassName}>
                {navigation.map((item) => {
                    const { id, href, name } = item;
                    return (
                        <li key={id} className={navBarItemClassName}>
                            <Link href={href}>
                                <a className="px-2 text-xl text-bold">{name}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    };
    return (
        <nav id="navbar" className="relative px-4 py-4 bg-white border-b-2">
            <div className="flex flex-row items-center justify-center">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mr-auto">
                    <Link href="/">
                        <a className="hover:underline">Logo</a>
                    </Link>
                    .
                </h2>
                {navBarList("regular")}
            </div>

            {toggleButton && (
                <div className="flex flex-col justify-center">
                    {navBarList("dropdown")}
                </div>
            )}
            <button
                type="button"
                className="block absolute top-0 right-0 p-4 sm:hidden"
                onClick={() => setToggleButton((prevState) => !prevState)}
            >
                <MdOutlineSegment className="w-8 h-8" />
            </button>
        </nav>
    );
};

export default Navbar;
