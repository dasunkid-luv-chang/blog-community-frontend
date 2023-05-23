import useStyles from "./RightSideBarStyle"
import { Avatar, Center, Flex, Group, Paper, Stack, Text } from "@mantine/core"
import { HiOutlinePlusCircle } from "react-icons/hi"

const RightSideBar = () => {
    const { classes } = useStyles()

    return (
        <>
            <Paper bg="white" radius="md" shadow="sm" p="md">
                <Stack>
                    <Text fz="lg" fw="500">
                        Recommended for you
                    </Text>

                    <Flex
                        justify="space-between"
                        align="center"
                        p="sm"
                        bg="gray.1"
                        sx={{ borderRadius: "0.5rem" }}
                    >
                        <Group noWrap>
                            <Avatar
                                variant="light"
                                radius="xl"
                                size="3rem"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                            />

                            <Stack spacing="0">
                                <Text fz="lg" fw="500">
                                    John Cena
                                </Text>
                                <Text fz="sm" color="gray.6">
                                    Join at 2021-09-09
                                </Text>
                            </Stack>
                        </Group>

                        <Center>
                            <HiOutlinePlusCircle size="25px" />
                        </Center>
                    </Flex>

                    <Flex
                        justify="space-between"
                        align="center"
                        p="sm"
                        bg="gray.1"
                        sx={{ borderRadius: "0.5rem" }}
                    >
                        <Group noWrap>
                            <Avatar
                                variant="light"
                                radius="xl"
                                size="3rem"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                            />

                            <Stack spacing="0">
                                <Text fz="lg" fw="500">
                                    John Cena
                                </Text>
                                <Text fz="sm" color="gray.6">
                                    Join at 2021-09-09
                                </Text>
                            </Stack>
                        </Group>

                        <Center>
                            <HiOutlinePlusCircle size="25px" />
                        </Center>
                    </Flex>
                </Stack>
            </Paper>

            {/* recommended tags */}
            <Paper bg="white" radius="md" shadow="sm" p="md">
                <Stack>
                    <Text fz="lg" fw="500">
                        Recommended tags for you
                    </Text>

                    <Flex
                        justify="space-between"
                        align="center"
                        p="sm"
                        bg="gray.1"
                        sx={{ borderRadius: "0.5rem" }}
                    >
                        <Group noWrap>
                            <Avatar
                                variant="light"
                                radius="xl"
                                size="3rem"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                            />

                            <Stack spacing="0">
                                <Text fz="lg" fw="500">
                                    John Cena
                                </Text>
                                <Text fz="sm" color="gray.6">
                                    Join at 2021-09-09
                                </Text>
                            </Stack>
                        </Group>

                        <Center>
                            <HiOutlinePlusCircle size="25px" />
                        </Center>
                    </Flex>

                    <Flex
                        justify="space-between"
                        align="center"
                        p="sm"
                        bg="gray.1"
                        sx={{ borderRadius: "0.5rem" }}
                    >
                        <Group noWrap>
                            <Avatar
                                variant="light"
                                radius="xl"
                                size="3rem"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                            />

                            <Stack spacing="0">
                                <Text fz="lg" fw="500">
                                    John Cena
                                </Text>
                                <Text fz="sm" color="gray.6">
                                    Join at 2021-09-09
                                </Text>
                            </Stack>
                        </Group>

                        <Center>
                            <HiOutlinePlusCircle size="25px" />
                        </Center>
                    </Flex>
                </Stack>
            </Paper>
        </>
    )
}

export default RightSideBar
