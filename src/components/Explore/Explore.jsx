import {
    Avatar,
    Box,
    Center,
    Flex,
    Grid,
    Group,
    Paper,
    Select,
    Space,
    Stack,
    Tabs,
    Text,
    Title,
} from "@mantine/core"
import { useEffect, useState } from "react"
import { HiOutlinePlusCircle } from "react-icons/hi"
import { useLocation, useNavigate, useParams } from "react-router-dom"

const categories = [
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
    { value: "year", label: "Year" },
]

const Explore = () => {
    const navigate = useNavigate()
    const { tabValue } = useParams()
    const location = useLocation()
    const searchCategory = new URLSearchParams(location.search).get("category")

    useEffect(() => {
        if (!searchCategory) {
            navigate(`/explore/${tabValue}?category=week`, {
                replace: true,
            })
        }
    }, [searchCategory, tabValue, navigate])

    return (
        <Box>
            <Paper w="100%" p="2rem" radius="md" withBorder>
                <Title order={2} align="center">
                    Explore tags and blogs
                </Title>
                <Text align="center">
                    Explore the most popular tech blogs from the Techblog
                    community. A constantly updating list of popular tags and
                    the best minds in tech.
                </Text>
            </Paper>

            <Space h="md" />

            <Paper p="1rem" radius="md" withBorder>
                <Tabs
                    radius="xs"
                    defaultValue="gallery"
                    value={tabValue}
                    onTabChange={(value) => {
                        navigate(`/explore/${value}?category=week`)
                    }}
                >
                    <Tabs.List position="center">
                        <Tabs.Tab value="tags">Tags</Tabs.Tab>
                        <Tabs.Tab value="blogs">Blogs</Tabs.Tab>
                    </Tabs.List>
                </Tabs>

                <Space h="md" />

                <Group position="apart">
                    <Title order={3}>Trending tags</Title>
                    <Select
                        value={searchCategory}
                        onChange={(category) => {
                            navigate(
                                `/explore/${tabValue}?category=${category}`,
                                { replace: true }
                            )
                        }}
                        data={categories}
                    />
                </Group>

                <Space h="md" />

                <Grid gutter="md">
                    <Grid.Col span={6}>
                        <Paper p="1rem" radius="md" bg="gray.1">
                            <Flex justify="space-between" align="center">
                                <Group noWrap>
                                    <Avatar
                                        variant="light"
                                        radius="xl"
                                        size="2.5rem"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                                    />

                                    <Stack spacing="0">
                                        <Text fz="md" fw="700" lh="24px">
                                            Programming Blogs
                                        </Text>
                                        <Text fz="sm" color="gray.6" lh="20px">
                                            120 articals this week
                                        </Text>
                                    </Stack>
                                </Group>

                                <Center>
                                    <HiOutlinePlusCircle size="25px" />
                                </Center>
                            </Flex>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Paper p="1rem" radius="md" bg="gray.1">
                            <Flex justify="space-between" align="center">
                                <Group noWrap>
                                    <Avatar
                                        variant="light"
                                        radius="xl"
                                        size="2.5rem"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                                    />

                                    <Stack spacing="0">
                                        <Text fz="md" fw="700" lh="24px">
                                            Programming Blogs
                                        </Text>
                                        <Text fz="sm" color="gray.6" lh="20px">
                                            120 articals this week
                                        </Text>
                                    </Stack>
                                </Group>

                                <Center>
                                    <HiOutlinePlusCircle size="25px" />
                                </Center>
                            </Flex>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Paper p="1rem" radius="md" bg="gray.1">
                            <Flex justify="space-between" align="center">
                                <Group noWrap>
                                    <Avatar
                                        variant="light"
                                        radius="xl"
                                        size="2.5rem"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                                    />

                                    <Stack spacing="0">
                                        <Text fz="md" fw="700" lh="24px">
                                            Programming Blogs
                                        </Text>
                                        <Text fz="sm" color="gray.6" lh="20px">
                                            120 articals this week
                                        </Text>
                                    </Stack>
                                </Group>

                                <Center>
                                    <HiOutlinePlusCircle size="25px" />
                                </Center>
                            </Flex>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Paper p="1rem" radius="md" bg="gray.1">
                            <Flex justify="space-between" align="center">
                                <Group noWrap>
                                    <Avatar
                                        variant="light"
                                        radius="xl"
                                        size="2.5rem"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                                    />

                                    <Stack spacing="0">
                                        <Text fz="md" fw="700" lh="24px">
                                            Programming Blogs
                                        </Text>
                                        <Text fz="sm" color="gray.6" lh="20px">
                                            120 articals this week
                                        </Text>
                                    </Stack>
                                </Group>

                                <Center>
                                    <HiOutlinePlusCircle size="25px" />
                                </Center>
                            </Flex>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Paper p="1rem" radius="md" bg="gray.1">
                            <Flex justify="space-between" align="center">
                                <Group noWrap>
                                    <Avatar
                                        variant="light"
                                        radius="xl"
                                        size="2.5rem"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                                    />

                                    <Stack spacing="0">
                                        <Text fz="md" fw="700" lh="24px">
                                            Programming Blogs
                                        </Text>
                                        <Text fz="sm" color="gray.6" lh="20px">
                                            120 articals this week
                                        </Text>
                                    </Stack>
                                </Group>

                                <Center>
                                    <HiOutlinePlusCircle size="25px" />
                                </Center>
                            </Flex>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Paper>
        </Box>
    )
}

export default Explore
