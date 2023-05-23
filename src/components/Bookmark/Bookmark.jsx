import { Box, Paper, Space, Stack, Text, Title } from "@mantine/core"
import Post from "../Post/Post"

const Bookmark = () => {
    return (
        <Box>
            <Paper w="100%" p="2rem" radius="md" withBorder>
                <Title order={2} align="center">
                    Bookmarks
                </Title>
                <Text align="center">
                    All articles you have bookmarked on Techblog
                </Text>
            </Paper>

            <Space h="md" />
            <Stack>
                <Post />
                <Post />
                <Post />
                <Post />
            </Stack>
        </Box>
    )
}

export default Bookmark
