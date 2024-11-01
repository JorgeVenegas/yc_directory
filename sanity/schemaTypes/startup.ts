import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            }
        }),
        defineField({
            name: "author",
            type: "reference",
            to: { type: "author" }
        }),
        defineField({
            name: "views",
            type: "number",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "description",
            type: "text",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (Rule) => Rule.min(1).max(20).required().error("Enter a category.")
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "pitch",
            type: "markdown",
            validation: (Rule) => Rule.required()
        })
    ]
})