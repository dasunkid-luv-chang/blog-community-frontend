import {
    Box,
    Button,
    Flex,
    Grid,
    Mark,
    MultiSelect,
    Text,
    Title,
} from "@mantine/core"
import useStyles from "./style"
import Editor from "../../components/Editor/Editor"
import { Link } from "react-router-dom"
import { MdArrowBackIos } from "react-icons/md"
import { useState } from "react"

const data = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "riot", label: "Riot" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
]

const CreateNewPost = () => {
    const { classes } = useStyles()
    const [selectedValue, setSelectedValue] = useState([])

    return (
        <Box bg="gray.0" mih="100vh" p="1rem">
            <Box p="1rem">
                <div className="">
                    <Button
                        component={Link}
                        variant="subtle"
                        color="orange"
                        to="/"
                        leftIcon={<MdArrowBackIos />}
                    >
                        Back
                    </Button>
                </div>

                <Grid gutter="1rem">
                    <Grid.Col span={8}>
                        <Title order={3} align="center">
                            Create new post
                        </Title>

                        <Flex
                            justify="space-between"
                            align="flex-end"
                            my="1rem"
                        >
                            <Box w="60%">
                                <MultiSelect
                                    clearable
                                    searchable
                                    label="Select tags, max 3 tags"
                                    placeholder="Pick all that you like"
                                    nothingFound="Nothing found"
                                    size="md"
                                    data={data}
                                    value={selectedValue}
                                    onChange={setSelectedValue}
                                    maxSelectedValues={3}
                                />
                            </Box>

                            <Flex gap="1rem">
                                <Button variant="outline" color="red">
                                    Clear all
                                </Button>

                                <Button
                                    variant="outline"
                                    color="indigo"
                                    onClick={open}
                                >
                                    Preview
                                </Button>
                            </Flex>
                        </Flex>

                        <Editor />
                    </Grid.Col>
                    <Grid.Col span={4}>ấda</Grid.Col>
                </Grid>
            </Box>
        </Box>
        // <div className={classes.pageWrapper}>
        //     <div className={classes.header}>
        //         <Button
        //             component={Link}
        //             variant="subtle"
        //             color="orange"
        //             to="/"
        //             leftIcon={<MdArrowBackIos />}
        //         >
        //             Back
        //         </Button>
        //     </div>

        //     <div className={classes.editorWrapper}>
        //         <Title order={3}>Create new post</Title>

        //         <div>
        //             <MultiSelect
        //                 clearable
        //                 searchable
        //                 label="Select tags, max 3 tags"
        //                 placeholder="Pick all that you like"
        //                 nothingFound="Nothing found"
        //                 size="md"
        //                 data={data}
        //                 value={selectedValue}
        //                 onChange={setSelectedValue}
        //                 maxSelectedValues={3}
        //             />
        //         </div>
        //         <Editor />
        //     </div>

        //     <aside className={classes.guildeSection}>
        //         <div className="">
        //             <Title order={3} align="center" my="md">
        //                 Editor basics
        //             </Title>
        //             <Text>
        //                 Use <Mark>Tab</Mark> to open inline toolbar
        //             </Text>
        //         </div>
        //     </aside>
        // </div>
    )
}

export default CreateNewPost
