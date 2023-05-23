import { createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
    navbar: {
        width: "100%",
        height: "74px",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        backgroundColor: theme.white,
        padding: "0 20px",
    },
    brand: {
        gridColumn: "1/3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    search: {
        gridColumn: " 4/8",
        minWidth: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    leftNavbar: {
        gridColumn: "10/13",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
    },
    link: {
        textDecoration: "none",
        color: theme.colors.gray[8],
        fontWeight: 500,
        fontSize: "1.5rem",
    },
    writeBtn: {
        color: theme.white,
        textDecoration: "none",
    },
}))

export default useStyles
