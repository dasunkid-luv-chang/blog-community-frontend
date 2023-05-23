import { Modal } from "@mantine/core"

const PreviewModal = ({ opened, close, postContent }) => {
    const { blocks } = postContent.current
    console.log(
        "🚀 ~ file: PreviewModal.jsx:5 ~ PreviewModal ~ blocks:",
        blocks
    )
    return (
        <Modal
            size="55rem"
            opened={opened}
            onClose={close}
            title="Preview post"
        >
            {/* Modal content */}
            hasdhasdhahda
        </Modal>
    )
}

export default PreviewModal
