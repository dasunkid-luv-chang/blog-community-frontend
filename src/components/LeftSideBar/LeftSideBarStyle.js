import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    // leftSidebar: {
    //     gridColumn: "1/3",
    //     height: "fit-content",
    // },

    trendingTag: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.25rem 0.5rem",
        width: "100%",
        textDecoration: "none",
        color: "#475569",
        fontSize: "14px",
        fontWeight: 500,
        borderRadius: "6px",
        "&:hover": {
            backgroundColor: theme.colors.gray[1],
        },
    },
}))

export default useStyles
