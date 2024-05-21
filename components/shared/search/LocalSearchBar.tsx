"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface LocalSearchBarProps {
    route: string;
    iconPosition: string;
    imgSrc: string;
    placeholder: string;
    otherClasses?: string;
}

const LocalSearchBar = ({
    route,
    iconPosition,
    imgSrc,
    placeholder,
    otherClasses,
}: LocalSearchBarProps) => {
    return (
        <div
            className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
        >
            {iconPosition === "left" && (
                <Image
                    src={imgSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />
            )}

            <Input
                type="text"
                placeholder={placeholder}
                className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
                value=""
                onChange={() => {}}
            />

            {iconPosition === "right" && (
                <Image
                    src={imgSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="cursor-pointer"
                />
            )}
        </div>
    );
};

export default LocalSearchBar;
