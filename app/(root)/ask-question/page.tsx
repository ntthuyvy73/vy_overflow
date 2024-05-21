import Question from "@/components/forms/Question";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = () => {
    // const { userId } = auth();

    // if (!userId) redirect("/sign-in");

    return (
        <div>
            <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
            <div className="mt-9">
                <Question />
            </div>
        </div>
    );
};

export default AskQuestion;
