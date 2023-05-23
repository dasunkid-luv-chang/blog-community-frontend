import useStyles from "./SettingStyle"
import Navbar from "../../components/Navbar/Navbar"
import Menu from "./../Dashboard/Menu"
import { Outlet } from "react-router-dom"

const tabList = [
    {
        label: "Profile",
        value: "/settings/profile",
    },
    {
        label: "Account",
        value: "/settings/account",
    },
]

const SettingLayout = () => {
    const { classes } = useStyles()

    return (
        <div className={classes.settingLayout}>
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

export default SettingLayout
