import { SignIn } from "@clerk/nextjs";
import React from "react";

// export async function generateStaticParams() {
//     return [
//         { signIn: [] }, // Default route
//         { signIn: ["example1"] }, // Example route
//         // Thêm các tham số khác nếu cần
//     ];
// }

const Page = () => {
    return <SignIn />;
};

export default Page;
