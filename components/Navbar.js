import React from 'react';
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";

const Navbar = () => {
    const {data: session} = useSession();

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
                {
                    !session && <li>
                        <Link href={"/api/auth/signin"}>
                            <a onClick={e => {
                                e.preventDefault();
                                signIn();
                            }}>Sign In</a>
                        </Link>
                    </li>
                }
                {
                    session && <li>
                        <Link href={"/api/auth/signout"}>
                            <a onClick={e => {
                                e.preventDefault();
                                signOut();
                            }}>Sign Out</a>
                        </Link>
                    </li>
                }

            </ul>
        </nav>
    );
};

export default Navbar;