import useStyles from "./DashBoardStyle"
import Navbar from "../../components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import Menu from "./Menu"

const tabList = [
    {
        label: "Posts",
        value: "/dashboard/posts",
    },
    {
        label: "Following Users",
        value: "/dashboard/following-users",
    },
    {
        label: "Follower Users",
        value: "/dashboard/follower-users",
    },
    {
        label: "Following Tags",
        value: "/dashboard/following-tags",
    },
]

const DashboardLayout = () => {
    const { classes } = useStyles()

    return (
        <div className={classes.dashboardLayout}>
            {/* navbar */}
            <Navbar />

            <main className={classes.main}>
                {/* left sidebar  */}
                <aside className={classes.leftSidebar}>
                    <Menu tabList={tabList} />
                </aside>

                {/* main content */}
                <div className={classes.mainContent}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout
