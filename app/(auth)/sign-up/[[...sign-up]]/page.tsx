import React from "react";
import { SignUp } from "@clerk/nextjs";

// export async function generateStaticParams() {
//     return [
//         { signUp: [] }, // Default route
//         { signUp: ["example2"] }, // Example route
//         // Thêm các tham số khác nếu cần
//     ];
// }

const Page = () => {
    return <SignUp />;
};

export default Page;
