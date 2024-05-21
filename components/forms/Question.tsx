"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { QuestionSchema } from "@/lib/validations";

const Question = () => {
    const form = useForm<z.infer<typeof QuestionSchema>>({
        resolver: zodResolver(QuestionSchema),
        defaultValues: {
            title: "",
            explanation: "",
            tags: [],
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof QuestionSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-10"
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="w-full flex flex-col">
                            <FormLabel className="paragraph-semibold text-dark400_light800">
                                Question Title{" "}
                                <span className="text-primary-500">*</span>
                            </FormLabel>
                            <FormControl className="mt-3.5">
                                <Input
                                    className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription className="body-regular mt-2.5 text-light-500">
                                Be specific and imagine you&apos;re asking a
                                question to another perso
                            </FormDescription>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />

                {/* explanation */}
                <FormField
                    control={form.control}
                    name="explanation"
                    render={({ field }) => (
                        <FormItem className="flex w-full flex-col gap-3">
                            <FormLabel className="paragraph-semibold text-dark400_light800">
                                Detailed explanation of your problem{" "}
                                <span className="text-primary-500">*</span>
                            </FormLabel>
                            <FormControl className="mt-3.5">
                                <Input
                                    className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription className="body-regular mt-2.5 text-light-500">
                                Introduce the problem and expand on what you put
                                in the title. Minimum 20 characters.
                            </FormDescription>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />

                {/* tags */}
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem className="flex w-full flex-col">
                            <FormLabel className="paragraph-semibold text-dark400_light800">
                                Tags <span className="text-primary-500">*</span>
                            </FormLabel>
                            <FormControl className="mt-3.5">
                                <Input
                                    className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription className="body-regular mt-2.5 text-light-500">
                                Add up to 3 tags to describe what your question
                                is about. You need to press enter to add a tag.
                            </FormDescription>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};

export default Question;