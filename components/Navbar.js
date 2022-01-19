import React from 'react';
import Link from "next/link";
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={"/"}>
                        <a>home</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/blog"}>
                        <a>blog</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/dashboard"}>
                        <a>dashboard</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;