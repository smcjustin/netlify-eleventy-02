import { Model } from "@stackbit/types"

export const PageModel = {
    name: "Page",
    type: "page",
    urlPath: "/{slug}",
    filePath: "content/pages/{slug}.md",
    fields: [
        { name: "title", type: "string", required: true },
        { name: "permalink", type: "string"},
        { name: "layout", type: "string"},
        { name: "content", type: "markdown"},
        { name: "markdown_content", type: "markdown", label: "Content", description: "Page content"}
    ]
}