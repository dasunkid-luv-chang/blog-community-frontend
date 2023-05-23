import { Link } from "react-router-dom"
import { Title } from "@mantine/core"
import useStyles from "./style.js"

const Brand = () => {
    const { classes } = useStyles()
    return (
        <div className={classes.brand}>
            <Link to="/" className={classes.link}>
                <Title
                    order={1}
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                    ta="center"
                    fw={700}
                >
                    TechBlog
                </Title>
            </Link>
        </div>
    )
}

export default Brand
