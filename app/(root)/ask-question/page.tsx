import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = () => {
    const { userId } = auth();

    if (!userId) redirect("/sign-in");

    return <div>AskQuestion</div>;
};

export default AskQuestion;
