import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    settingLayout: {
        backgroundColor: "#F8FAFC",
        minHeight: "100vh",
    },

    main: {
        width: "100%",
        height: "calc(100vh - 74px)",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        columnGap: "1rem",
        padding: "3rem",
    },

    leftSidebar: {
        gridColumn: "1/4",
        height: "fit-content",
    },

    mainContent: {
        gridColumn: "4/12",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
}))

export default useStyles
