import { usePost } from "../../context/postContext"
import EditorjsHTML from "editorjs-html"

const PreviewPost = () => {
    const [postContent] = usePost()
    console.log(
        "🚀 ~ file: PreviewPost.jsx:7 ~ PreviewPost ~ postContent:",
        postContent
    )
    const editorjsParser = EditorjsHTML()
    const htmlString = editorjsParser.parse(postContent)

    console.log(
        "🚀 ~ file: PreviewPost.jsx:6 ~ PreviewPost ~ jsonData:",
        htmlString
    )

    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />
}

export default PreviewPost
