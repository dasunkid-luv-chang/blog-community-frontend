import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    pageWrapper: {
        padding: "2rem 4rem",
        display: "grid",
        gridTemplateColumns: "2fr 3fr",
        gridGap: "2rem",
        height: "100%",
        // backgroundColor: theme.colors.gray[0],
        backgroundColor: theme.white,
    },
    formWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        gap: "20px",
        borderRadius: theme.radius.lg,
        backgroundColor: theme.white,
        boxShadow: theme.shadows.lg,
    },

    formHeader: {
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        margin: 0,
        color: theme.colors.dark,
    },
    formSubheader: {
        fontSize: "1rem",
        fontWeight: "normal",
        textAlign: "center",
        margin: 0,
        color: theme.colors.dark[3],
    },
    form: {
        padding: "0 1rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    link: {
        color: theme.colors.blue[6],
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    banner: {
        width: "100%",
        objectFit: "cover",
    },
    back_url: {
        alignSelf: "flex-start",
        display: "flex",
        gap: "5px",
        alignItems: "center",
        justifyContent: "center",
        color: theme.colors.blue[6],
    },
}))

export default useStyles
