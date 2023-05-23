import {
    Box,
    Button,
    Divider,
    Grid,
    Group,
    Paper,
    Select,
    Space,
    Stack,
    Text,
    Title,
} from "@mantine/core"
import { useState } from "react"

const selectData = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
]

const MyArticals = () => {
    const [value, setValue] = useState(selectData[0]["value"])

    return (
        <Box>
            <Paper w="100%" p="2rem" radius="md" withBorder>
                <Title order={2} align="center">
                    All your articals
                </Title>
                <Text align="center">Manage your content</Text>
            </Paper>

            <Space h="md" />

            <Paper withBorder p="1rem" radius="md">
                <Group>
                    <Button variant="outline" color="dark">
                        Show archived
                    </Button>
                    <Select
                        value={value}
                        onChange={setValue}
                        data={selectData}
                    />
                </Group>

                <Space h="md" />

                <Stack>
                    <Grid align="center">
                        <Grid.Col span={7}>
                            <Text
                                fz="lg"
                                fw="bold"
                                color="indigo"
                                sx={{ wordBreak: "break-word" }}
                            >
                                what is nodejs
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <Button compact variant="filled" color="yellow">
                                Draft
                            </Button>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Group position="right">
                                <Button variant="filled" color="red">
                                    Delete
                                </Button>
                                <Button variant="filled" color="cyan">
                                    Edit
                                </Button>
                            </Group>
                        </Grid.Col>
                    </Grid>

                    <Grid align="center">
                        <Grid.Col span={7}>
                            <Text
                                fz="lg"
                                fw="bold"
                                color="indigo"
                                sx={{ wordBreak: "break-word" }}
                            >
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit voluptates deleniti
                                error possimus ipsam tenetur numquam aperiam
                                soluta fuga nesciunt.
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <Button compact variant="outline" color="yellow">
                                Draft
                            </Button>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Group position="right">
                                <Button variant="outline" color="red">
                                    Delete
                                </Button>
                                <Button variant="outline" color="cyan">
                                    Edit
                                </Button>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Stack>
            </Paper>
        </Box>
    )
}

export default MyArticals
