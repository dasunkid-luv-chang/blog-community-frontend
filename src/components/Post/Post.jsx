import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Group,
    Paper,
    Stack,
    Text,
    Title,
} from "@mantine/core"
import { MdOutlineBookmarkAdd } from "react-icons/md"
import { FaRegComments } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"

const Post = () => {
    return (
        <Paper shadow="sm" radius="md" p="md">
            <Stack>
                <Group position="left" align="center">
                    <Avatar
                        variant="light"
                        radius="xl"
                        size="3rem"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                    />

                    <Stack spacing="0">
                        <Text fz="lg" fw={500}>
                            John cena
                        </Text>
                        <Text fz="md" color="gray.6">
                            a day ago
                        </Text>
                    </Stack>
                </Group>

                <Flex gap="1rem">
                    <Stack>
                        <Title order={2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </Title>

                        <Text color="gray.7">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laborum, voluptatum! Odio recusandae quae
                            consectetur suscipit non. Veritatis fugiat placeat
                            rem? Nam odio hic accusantium vero dignissimos sint,
                            quidem officiis earum aliquid reprehenderit
                        </Text>
                    </Stack>

                    <Box maw="22rem">
                        <Box
                            component="img"
                            alt="Cover"
                            src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1658&q=80"
                            sx={(theme) => ({
                                width: "100%",
                                borderRadius: theme.radius.lg,
                                aspectRatio: "16/9",
                            })}
                        ></Box>
                    </Box>
                </Flex>

                <Flex justify="space-between" align="center">
                    <Group>
                        <Center>
                            <MdOutlineBookmarkAdd size="25px" />
                        </Center>

                        <Group>
                            <Button
                                variant="default"
                                color="gray"
                                radius="lg"
                                size="xs"
                            >
                                React
                            </Button>
                            <Button
                                variant="default"
                                color="gray"
                                radius="lg"
                                size="xs"
                            >
                                Web development
                            </Button>
                            <Button
                                variant="default"
                                color="gray"
                                radius="lg"
                                size="xs"
                            >
                                Frontend
                            </Button>
                        </Group>
                    </Group>

                    <Group>
                        <Button
                            variant="default"
                            color="dark"
                            radius="lg"
                            size="xs"
                            leftIcon={<FaRegComments size="25px" />}
                        >
                            10
                        </Button>
                        <Button
                            variant="default"
                            color="dark"
                            radius="lg"
                            size="xs"
                            leftIcon={<AiOutlineHeart size="25px" />}
                        >
                            15
                        </Button>
                    </Group>
                </Flex>
            </Stack>
        </Paper>
    )
}

export default Post
