import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    subFilters: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: theme.white,
    },
    subFilterButtons: {
        display: "flex",
        // alignItems: "flex-end",
        gap: "1rem",
    },
}))

export default useStyles
