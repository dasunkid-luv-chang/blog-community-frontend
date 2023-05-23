import EditorJS from "@editorjs/editorjs"
import { editorConfig } from "./editor.config"
import { Avatar, Button, Flex, Modal, Paper, Text, Title } from "@mantine/core"
import useStyles from "./style"
import { useEffect, useRef } from "react"
import { usePost } from "../../context/postContext"
import { useNavigate } from "react-router-dom"
import { useDisclosure } from "@mantine/hooks"

const Editor = () => {
    const { classes } = useStyles()
    const [opened, { open, close }] = useDisclosure(false)
    const isReady = useRef(false)
    let editor = useRef(null)
    const [postContent, setPostContent] = usePost()
    const navigate = useNavigate()

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

    const onPreview = () => {
        editor.current
            .save()
            .then((jsonData) => {
                setPostContent(jsonData)
                navigate("/preview")
            })
            .catch((error) => {
                console.log("Saving failed: ", error)
            })
    }

    return (
        <>
            <Flex direction="column" rowGap="1rem">
                <Paper
                    id="editorjs"
                    shadow="md"
                    p="md"
                    className={classes.editor}
                />
                <Flex gap="1rem">
                    <Button onClick={onSave} sx={{ width: "fit-content" }}>
                        Publish
                    </Button>

                    <Button onClick={onSave} sx={{ width: "fit-content" }}>
                        Save Draft
                    </Button>
                </Flex>
            </Flex>

            <Modal
                size="55rem"
                opened={opened}
                onClose={close}
                title="Preview post"
            >
                {/* Modal content */}
                <img
                    style={{
                        width: "100%",
                        aspectRatio: "2/1",
                    }}
                    src="https://images.unsplash.com/photo-1494894194458-0174142560c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />

                <Flex direction="column" gap="1rem" p="2rem">
                    <Flex direction="column" gap="1rem">
                        <Flex gap="1rem" align="center">
                            <Avatar
                                sx={{ cursor: "pointer" }}
                                variant="light"
                                radius="xl"
                                size="42px"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                            />

                            <Flex direction="column">
                                <Text fz="lg" fw="500">
                                    John cena
                                </Text>
                                <Text c="gray.6" fw="400">
                                    2 days ago
                                </Text>
                            </Flex>

                            <Flex gap="1rem" ml="auto">
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
                            </Flex>
                        </Flex>

                        <Title order={1}>
                            Restful API with expressjs, mongodb
                        </Title>
                    </Flex>

                    <Flex direction="column" gap="10px" fz="lg">
                        <Text>
                            React is a popular open-source JavaScript library
                            used for building user interfaces. Developed by
                            Facebook, it allows developers to create reusable UI
                            components for different applications.
                        </Text>
                        <Text>
                            React is known for its efficient rendering,
                            easy-to-use syntax, and seamless integration with
                            other libraries and frameworks.
                        </Text>
                        <Text fw="bold">
                            What are React-based CSS Frameworks and Component
                            Libraries?
                        </Text>
                    </Flex>
                </Flex>
            </Modal>
        </>
    )
}

export default Editor
