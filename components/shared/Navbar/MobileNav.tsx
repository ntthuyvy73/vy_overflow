"use client";
import React, { useEffect, useState } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
    const pathName = usePathname();

    return (
        <section className="flex flex-col gap-6 pt-16 h-full">
            {sidebarLinks.map((item, index) => {
                const isActive =
                    (pathName.includes(item.route) && item.route.length > 1) ||
                    pathName === item.route;

                return (
                    <SheetClose asChild key={`${item.label}`}>
                        <Link
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
                                }`}
                            >
                                {item.label}
                            </p>
                        </Link>
                    </SheetClose>
                );
            })}
        </section>
    );
};

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleResize = () => {
        if (window.innerWidth >= 640 && isOpen) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    return (
        <section className="h-full">
            <Sheet open={isOpen}>
                <SheetTrigger asChild>
                    <Image
                        src="/assets/icons/hamburger.svg"
                        alt="Menu"
                        width={36}
                        height={36}
                        className="invert-colors sm:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="background-light900_dark200 border-none"
                >
                    <Link href="/" className="flex gap-1 items-center">
                        <Image
                            src="/assets/images/site-logo.svg"
                            width={23}
                            height={23}
                            className="object-contain"
                            alt=""
                        />
                        <p className="h2-bold  text-dark100_light900 font-spaceGrotesk ">
                            Dev
                            <span className="text-primary-500">Overflow</span>
                        </p>
                    </Link>

                    <div>
                        <SheetClose asChild>
                            <NavContent />
                        </SheetClose>

                        <SignedOut>
                            <div className="flex flex-col gap-3">
                                <SheetClose asChild>
                                    <Link href="/sign-in">
                                        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                                            <span className="primary-text-gradient">
                                                Log in
                                            </span>
                                        </Button>
                                    </Link>
                                </SheetClose>

                                <SheetClose asChild>
                                    <Link href="/sign-up">
                                        <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900">
                                            Sign up
                                        </Button>
                                    </Link>
                                </SheetClose>
                            </div>
                        </SignedOut>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
