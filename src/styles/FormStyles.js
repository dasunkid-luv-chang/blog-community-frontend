import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    pageWrapper: {
        padding: "2rem 4rem",
        display: "grid",
        gridTemplateColumns: "2fr 3fr",
        gridGap: "2rem",
        height: "100%",
        backgroundColor: theme.white,
        overflowY: "scroll",
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
        height: "fit-content",
        alignSelf: "center",
        // backgroundColor: theme.fn.rgba("#f7f7f2", 0.8),
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
    bannerWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    banner: {
        width: "100%",
        maxWidth: "80%",
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
    forgotPassword: {
        textAlign: "right",
        fontSize: "14px",
        margin: 0,
        fontWeight: 400,
    },
}))

export default useStyles
