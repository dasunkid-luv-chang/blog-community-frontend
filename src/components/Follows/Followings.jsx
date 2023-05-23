import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Group,
    Paper,
    Space,
    Stack,
    Text,
    Title,
} from "@mantine/core"
import { Link } from "react-router-dom"

const fakeData = [
    {
        id: 1,
        fullname: "Truong Kha",
        username: "khait",
    },
    {
        id: 2,
        fullname: "Thanh Tung",
        username: "tungzzs",
    },
    {
        id: 3,
        fullname: "John Cena",
        username: "cena123",
    },
    {
        id: 4,
        fullname: "Lam Thanh",
        username: "thanhpro2321",
    },
    {
        id: 5,
        fullname: "The weeknd",
        username: "weeknd333",
    },
]

const Followings = () => {
    return (
        <Box>
            <Paper w="100%" p="2rem" radius="md" withBorder>
                <Title order={2} align="center">
                    All your followings
                </Title>
                <Text align="center">Manage your followings</Text>
            </Paper>

            <Space h="md" />

            <Paper radius="md" p="1rem" withBorder>
                <Grid gutter="md">
                    {fakeData.map((people) => (
                        <Grid.Col span={6} key={people.id}>
                            <Paper p="1rem" radius="md" bg="gray.2">
                                <Flex justify="space-between" align="center">
                                    <Link
                                        to={`/${people.username}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Group noWrap>
                                            <Avatar
                                                variant="light"
                                                radius="xl"
                                                size="2.5rem"
                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                                            />

                                            <Stack spacing="0">
                                                <Text
                                                    fz="md"
                                                    fw="700"
                                                    lh="24px"
                                                    c="dark"
                                                >
                                                    {people.fullname}
                                                </Text>
                                                <Text
                                                    fz="sm"
                                                    color="gray.6"
                                                    lh="20px"
                                                >
                                                    @{people.username}
                                                </Text>
                                            </Stack>
                                        </Group>
                                    </Link>

                                    <Center>
                                        <Button variant="filled" compact>
                                            Following
                                        </Button>
                                    </Center>
                                </Flex>
                            </Paper>
                        </Grid.Col>
                    ))}
                </Grid>
            </Paper>
        </Box>
    )
}

export default Followings
