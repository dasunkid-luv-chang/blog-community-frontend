import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    rootLayout: {
        backgroundColor: "#F8FAFC",
        minHeight: "100vh",
    },

    main: {
        width: "100%",
        height: "calc(100vh - 74px)",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        columnGap: "1rem",
        padding: "1rem",
    },

    leftSidebar: {
        gridColumn: "1/3",
        height: "fit-content",
    },

    mainContent: {
        gridColumn: "3/10",
        // position: "relative",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },

    rightSidebar: {
        gridColumn: "10/13",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
}))

export default useStyles
