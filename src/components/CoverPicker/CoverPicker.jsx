import { Group, Text, useMantineTheme, rem, Paper, Image } from "@mantine/core"
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone"
import { RiFileUploadLine } from "react-icons/ri"
import { TbFileX } from "react-icons/tb"
import { MdOutlineAddPhotoAlternate } from "react-icons/md"
import { useState } from "react"

const CoverPicker = () => {
    const theme = useMantineTheme()
    const [file, setFile] = useState(null)
    console.log("🚀 ~ file: CoverPicker.jsx:11 ~ CoverPicker ~ file:", file)
    let imageURL = null

    if (file) {
        imageURL = URL.createObjectURL(file)
    }

    return (
        <>
            <Dropzone
                onDrop={(file) => setFile(file[0])}
                onReject={(file) => console.log("rejected files", file[0])}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                maxFiles={1}
            >
                <Group
                    position="center"
                    spacing="xl"
                    style={{ minHeight: rem(220), pointerEvents: "none" }}
                >
                    <Dropzone.Accept>
                        <RiFileUploadLine
                            size="3.2rem"
                            stroke={1.5}
                            color={
                                theme.colors[theme.primaryColor][
                                    theme.colorScheme === "dark" ? 4 : 6
                                ]
                            }
                        />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <TbFileX
                            size="3.2rem"
                            stroke={1.5}
                            color={
                                theme.colors.red[
                                    theme.colorScheme === "dark" ? 4 : 6
                                ]
                            }
                        />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <MdOutlineAddPhotoAlternate
                            size="3.2rem"
                            stroke={1.5}
                        />
                    </Dropzone.Idle>

                    <div>
                        <Text size="xl" inline>
                            Drag images here or click to select files
                        </Text>
                        <Text size="sm" color="dimmed" inline mt={7}>
                            Attach as many files as you like, each file should
                            not exceed 3mb
                        </Text>
                    </div>
                </Group>
            </Dropzone>

            {imageURL && (
                <Paper withBorder p="1rem" radius="md">
                    <Image
                        src={imageURL}
                        width="100%"
                        height={300}
                        fit="cover"
                        imageProps={{
                            onLoad: () => URL.revokeObjectURL(imageURL),
                        }}
                    />
                </Paper>
            )}
        </>
    )
}

export default CoverPicker
