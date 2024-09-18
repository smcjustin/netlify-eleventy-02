import { GitContentSource } from "@stackbit/cms-git"
import { allModels } from "./.stackbit/models"

export default {
    stackbitVersion: '~0.6.0',
    ssgName: 'custom',
    devCommand: './node_modules/.bin/eleventy --serve --port {PORT}',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: allModels,
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ],
    models: allModels
}