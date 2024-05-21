"use client";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";
import { SheetClose } from "../ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

const LeftSidebar = () => {
    const pathName = usePathname();

    return (
        <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
            <div className="flex-1 flex flex-col gap-6 ">
                {sidebarLinks.map((item, index) => {
                    const isActive =
                        (pathName.includes(item.route) &&
                            item.route.length > 1) ||
                        pathName === item.route;

                    return (
                        <Link
                            key={item.route}
                            href={item.route}
                            className={`flex items-center p-3 gap-4 ${
                                isActive
                                    ? "primary-gradient rounded-lg text-light-900 "
                                    : "text-dark300_light900"
                            }`}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={20}
                                height={20}
                                className={`${isActive ? "" : "invert-colors"}`}
                            />
                            <p
                                className={`${
                                    isActive ? "base-bold" : "base-medium"
                                } max-lg:hidden`}
                            >
                                {item.label}
                            </p>
                        </Link>
                    );
                })}
            </div>

            <SignedOut>
                <div className="flex flex-col gap-3">
                    <Link href="/sign-in">
                        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                            <Image
                                src="/assets/icons/account.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="invert-colors lg:hidden"
                            />
                            <span className="primary-text-gradient max-lg:hidden">
                                Log in
                            </span>
                        </Button>
                    </Link>

                    <Link href="/sign-up">
                        <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900">
                            <Image
                                src="/assets/icons/sign-up.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="invert-colors lg:hidden"
                            />
                            <span className="primary-text-gradient max-lg:hidden">
                                Sign up
                            </span>
                        </Button>
                    </Link>
                </div>
            </SignedOut>
        </section>
    );
};

export default LeftSidebar;
