import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    filters: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        backgroundColor: theme.white,
        // boxShadow: theme.shadows.sm,
    },
    leftFilters: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    rightFilters: {
        display: "flex",
        alignItems: "center",
        padding: "0.25rem",
        borderRadius: theme.radius.xl,
        cursor: "pointer",
        "&:hover": {
            backgroundColor: theme.colors.blue[0],
        },
    },
    filter: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
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
