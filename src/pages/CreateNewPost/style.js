import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    pageWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        columnGap: "1rem",
        height: "100%",
        minHeight: "100vh",
        backgroundColor: theme.colors.gray[0],
        padding: "1rem",
    },
    header: {
        gridColumn: "1/13",
    },
    editorWrapper: {
        gridColumn: "1/9",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
    },
    guildeSection: {
        gridColumn: "9/13",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
}))

export default useStyles
