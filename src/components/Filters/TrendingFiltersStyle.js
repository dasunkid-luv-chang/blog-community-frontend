import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    trendingFilters: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0.5rem 1rem",
        gap: "1rem",
        backgroundColor: theme.white,
    },
    leftFilters: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },

    filter: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1rem",
        textDecoration: "none",
        color: theme.colors.gray[8],
        fontWeight: 500,
        "&:hover": {
            backgroundColor: theme.colors.blue[0],
        },
    },
    filterActive: {
        color: theme.colors.blue[6] + " !important",
        borderBottom: `2px solid ${theme.colors.blue[6]}`,
    },
}))

export default useStyles
