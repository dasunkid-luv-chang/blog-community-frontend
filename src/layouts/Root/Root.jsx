import useStyles from "./RootStyle"
import Navbar from "../../components/Navbar/Navbar"
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar"
import RightSideBar from "../../components/RightSideBar/RightSideBar"
import { Outlet } from "react-router-dom"

const Root = () => {
    const { classes } = useStyles()
    return (
        <div className={classes.rootLayout}>
            {/* navbar */}
            <Navbar />

            <main className={classes.main}>
                {/* left sidebar  */}
                <aside className={classes.leftSidebar}>
                    <LeftSideBar />
                </aside>

                {/* main content */}
                <div className={classes.mainContent}>
                    <Outlet />
                </div>

                {/* right sidebar */}
                <aside className={classes.rightSidebar}>
                    <RightSideBar />
                </aside>
            </main>
        </div>
    )
}

export default Root
