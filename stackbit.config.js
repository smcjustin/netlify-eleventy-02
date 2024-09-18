import { GitContentSource } from "@stackbit/cms-git"
export default {
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ],
    models: {
      Page: {
        name: "Page",
        type: "page",
        urlPath: "/{slug}",
        filePath: "content/pages/{slug}.md",
        fields: [
            { name: "title", type: "string", required: true },
            { name: "permalink", type: "string"},
            { name: "layout", type: "string"},
            { name: "content", type: "markdown"},
            { name: "markdown_content", type: "markdown"}
        ]
      }
    },
    ignorePatterns: ['package.json', 'package-lock.json']
  }