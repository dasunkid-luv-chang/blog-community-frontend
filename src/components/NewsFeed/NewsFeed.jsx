import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Filters from "../Filters/Filters"
import {
    getNewsFeedRecent,
    getNewsFeedRelevant,
    getNewsFeedTrending,
} from "../../apis/newsfeed"
import Post from "../Post/Post"
import { Box, Button, LoadingOverlay, Stack } from "@mantine/core"
import { useParams } from "react-router-dom"

const queryFns = {
    relevant: getNewsFeedRelevant,
    trending: getNewsFeedTrending,
    recent: getNewsFeedRecent,
}

const NewsFeed = () => {
    const { tabValue } = useParams()
    const [trending, setTrending] = useState("week")
    console.log("🚀 ~ file: NewsFeed.jsx:24 ~ NewsFeed ~ trending:", trending)
    // const [showSubFilters, setShowSubFilters] = useState(false)
    const params = { _limit: 10 }

    const filterProps = { tabValue, trending, setTrending }

    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ["newsfeed", tabValue, trending],
        queryFn: () => queryFns[tabValue](params),
        staleTime: 1000 * 60 * 5,
    })
    console.log("🚀 ~ file: NewsFeed.jsx:35 ~ NewsFeed ~ res:", data)
    // console.log("🚀 ~ file: NewsFeed.jsx:36 ~ NewsFeed ~ res:", res)

    return (
        <Box id="newsfeed" pos="relative" style={{ scrollBehavior: "smooth" }}>
            <LoadingOverlay visible={isLoading} overlayBlur={2} />
            <Filters {...filterProps} />

            <Stack>
                {isSuccess &&
                    data.map((item) => <Post key={item.id} data={item} />)}
            </Stack>

            <Button
                sx={{ position: "fixed", bottom: 10, right: 10 }}
                onClick={() => {
                    window.document
                        .getElementById("newsfeed")
                        .scrollIntoView({ behavior: "smooth" })
                }}
            >
                Back to top
            </Button>
        </Box>
    )
}

export default NewsFeed
