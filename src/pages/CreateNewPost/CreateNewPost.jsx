import EditorJS from "@editorjs/editorjs"
import editorConfig from "../../configs/editor.config"
import {
    Box,
    Button,
    Grid,
    Group,
    MultiSelect,
    Paper,
    Space,
    Stack,
    Text,
    Textarea,
    Title,
} from "@mantine/core"
import { useEffect, useRef, useState } from "react"
import { MdArrowBackIos } from "react-icons/md"
import { Link } from "react-router-dom"

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
    const [selectedValue, setSelectedValue] = useState([])
    const isReady = useRef(false)
    let editor = useRef(null)

    useEffect(() => {
        if (!isReady.current) {
            editor.current = new EditorJS(editorConfig)
            isReady.current = true

            editor.current.isReady
                .then(() => {
                    console.log("Editor.js is ready to work!?")
                    /** Do anything you need after editor initialization */
                })
                .catch((reason) => {
                    console.log(
                        `Editor.js initialization failed because of ${reason}`
                    )
                })
        }
    }, [])

    const clearAllBlocks = () => {
        editor.current.blocks.clear()
    }

    const onSave = () => {
        editor.current
            .save()
            .then((outputData) => {
                console.log("Article data : ", outputData)
            })
            .catch((error) => {
                console.log("Saving failed: ", error)
            })
    }

    // const onPreview = () => {
    //     editor.current
    //         .save()
    //         .then((jsonData) => {
    //             setPostContent(jsonData)
    //             navigate("/preview")
    //         })
    //         .catch((error) => {
    //             console.log("Saving failed: ", error)
    //         })
    // }

    return (
        <Box mih="100vh" p="2rem" bg="gray.1">
            <Grid>
                <Grid.Col span={2}>
                    <Button
                        component={Link}
                        variant="subtle"
                        color="dark"
                        to="/"
                        leftIcon={<MdArrowBackIos />}
                    >
                        Back
                    </Button>
                </Grid.Col>

                <Grid.Col span={4} offset={1}>
                    <Title order={2} color="blue">
                        Create New Post
                    </Title>
                </Grid.Col>
            </Grid>

            <Space h="1rem" />

            <Grid>
                <Grid.Col span={8}>
                    <Paper radius="md" p="md" mih="30rem" withBorder>
                        <Stack>
                            <MultiSelect
                                clearable
                                searchable
                                label="Maximum 3 tags"
                                placeholder="Select tags for your artical"
                                nothingFound="Nothing found"
                                data={data}
                                value={selectedValue}
                                onChange={setSelectedValue}
                                maxSelectedValues={3}
                            />

                            <Textarea
                                label="Post title"
                                placeholder="Your artical title"
                                autosize
                                minRows={2}
                                maxRows={2}
                            />

                            {/* Editorjs */}
                            <Paper id="editorjs" p="xs" withBorder />

                            <Group>
                                <Button>Publish</Button>
                                <Button>Save draft</Button>
                                <Button color="red" onClick={clearAllBlocks}>
                                    Clear all text
                                </Button>
                                <Button color="teal">Preview</Button>
                            </Group>
                        </Stack>
                    </Paper>
                </Grid.Col>

                <Grid.Col span={4}>
                    <Title order={3} align="center">
                        Editor guildline
                    </Title>

                    <Text align="center">Tab to open inline toolbar</Text>
                </Grid.Col>
            </Grid>
        </Box>
    )
}

export default CreateNewPost
