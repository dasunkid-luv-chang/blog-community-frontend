import { createContext, useContext, useState } from "react"

const PostContext = createContext()

function PostProvider(props) {
    const [postContent, setPostContent] = useState()
    const value = [postContent, setPostContent]

    return (
        <PostContext.Provider value={value} {...props}></PostContext.Provider>
    )
}

function usePost() {
    const context = useContext(PostContext)

    if (typeof context === "undefined") {
        throw new Error("usePost must be used within a PostProvider")
    }

    return context
}

export { usePost, PostProvider }
