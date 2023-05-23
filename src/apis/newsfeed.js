import http from "./http"

export const getNewsFeedRelevant = async (params) => {
    // const { data } = await http.get( '/newsfeed/relevant', { params })
    const { data } = await http.get(
        "https://jsonplaceholder.typicode.com/posts",
        { params }
    )
    return data
}
export const getNewsFeedTrending = async (params) => {
    // const { data } = await http.get( '/newsfeed/relevant', { params })
    const { data } = await http.get(
        "https://jsonplaceholder.typicode.com/comments",
        { params }
    )
    return data
}
export const getNewsFeedRecent = async (params) => {
    // const { data } = await http.get( '/newsfeed/relevant', { params })
    const { data } = await http.get(
        "https://jsonplaceholder.typicode.com/users",
        { params }
    )
    return data
}
