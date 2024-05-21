import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
    const hotQuestions = [
        {
            _id: 1,
            title: "1 How do I use express as a custom server in NextJS?",
        },
        {
            _id: 2,
            title: "2 How do I use express as a custom server in NextJS?",
        },
        {
            _id: 3,
            title: "3 How do I use express as a custom server in NextJS?",
        },
        {
            _id: 4,
            title: "4 How do I use express as a custom server in NextJS?",
        },
        {
            _id: 5,
            title: "5 How do I use express as a custom server in NextJS?",
        },
    ];

    const popularTags = [
        {
            _id: "1",
            name: "javascript",
            totalQuestions: 5,
        },
        {
            _id: "2",
            name: "react",
            totalQuestions: 15,
        },
        {
            _id: "3",
            name: "next",
            totalQuestions: 25,
        },
        {
            _id: "4",
            name: "vue",
            totalQuestions: 35,
        },
        {
            _id: "5",
            name: ".net",
            totalQuestions: 45,
        },
    ];

    return (
        <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
            {/* top question */}
            <div>
                <h3 className="h3-bold text-dark200_light900">Top Question</h3>
                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {hotQuestions.map((item) => (
                        <Link
                            href={`/question/${item._id}`}
                            key={item._id}
                            className="flex cursor-pointer items-center justify-between gap-7"
                        >
                            <p className="body-medium text-dark500_light700">
                                {item.title}
                            </p>
                            <Image
                                src="/assets/icons/chevron-right.svg"
                                alt=""
                                width={20}
                                height={20}
                                className="invert-colors"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            {/* tags */}
            <div className="mt-16 ">
                <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {popularTags.map((item) => (
                        <RenderTag
                            key={item._id}
                            _id={item._id}
                            name={item.name}
                            totalQuestions={item.totalQuestions}
                            showCount
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RightSidebar;
