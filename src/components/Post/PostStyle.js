import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    post: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "1rem",
    },

    postFooterRight: {
        "& > span": {
            display: "inherit",
            alignItems: "inherit",
            gap: "0.5rem",
            padding: "0.25rem 0.5rem",
            borderRadius: theme.radius.lg,

            "&:hover": {
                cursor: "pointer",
                backgroundColor: theme.colors.gray[1],
            },
        },
    },
}))

export default useStyles
