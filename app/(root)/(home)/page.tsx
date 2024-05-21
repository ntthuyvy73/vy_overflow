import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const questions = [
    {
        _id: "q12345",
        title: "How to use TypeScript with React?",
        tags: [
            { _id: "t1", name: "TypeScript" },
            { _id: "t2", name: "React" },
            { _id: "t3", name: "JavaScript" },
        ],
        author: {
            _id: "a123",
            name: "John Doe",
            picture: "https://example.com/johndoe.jpg",
            clerkId: "clerk123",
        },
        upvotes: ["user1", "user2", "user3"],
        views: 150000,
        answers: [
            {
                _id: "ans1",
                author: {
                    _id: "a456",
                    name: "Jane Smith",
                    picture: "https://example.com/janesmith.jpg",
                    clerkId: "clerk456",
                },
                content:
                    "You can use the `react` and `@types/react` packages along with TypeScript to get type support in your React projects.",
                createdAt: new Date("2023-05-01T12:00:00Z"),
            },
            {
                _id: "ans2",
                author: {
                    _id: "a789",
                    name: "Bob Johnson",
                    picture: "https://example.com/bobjohnson.jpg",
                    clerkId: "clerk789",
                },
                content:
                    "Don't forget to configure your tsconfig.json file properly to include JSX support.",
                createdAt: new Date("2023-05-02T15:00:00Z"),
            },
        ],
        createdAt: new Date("2023-04-30T10:00:00Z"),
        clerkId: "clerk123",
    },
];

const Home = () => {
    return (
        <>
            <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>

                <Link
                    href="/ask-question"
                    className="flex justify-end max-sm:w-full"
                >
                    <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
                        Ask a Question
                    </Button>
                </Link>
            </div>

            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                {/* search */}
                <LocalSearchBar
                    route="/"
                    iconPosition="left"
                    imgSrc="/assets/icons/search.svg"
                    placeholder="Search for Questions"
                    otherClasses="flex-1"
                />
                {/* filter */}
                <Filter
                    filters={HomePageFilters}
                    otherClasses="min-h-[56px] sm:min-w-[170px]"
                    containerClasses=" max-md:flex"
                />
            </div>

            <HomeFilters />

            <div className="mt-10 flex w-full flex-col gap-6">
                {questions.length > 0 ? (
                    questions.map((item) => (
                        <QuestionCard key={item._id} {...item} />
                    ))
                ) : (
                    <NoResult
                        title="There is no question to show"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut molestie nunc, sit amet ornare metus. Integer finibus diam ut turpis tincidunt, a porttitor augue sollicitudin. Vestibulum euismod ut magna ac feugiat. Integer eu convallis ligula. Integer mollis finibus neque vel suscipit. Mauris ac ex bibendum, porta ligula id, accumsan quam. Vestibulum nec libero lacus. Vestibulum non est facilisis, venenatis nulla eget, condimentum justo."
                        link="/ask-question"
                        linkTitle="Ask a Question"
                    />
                )}
            </div>
        </>
    );
};

export default Home;
