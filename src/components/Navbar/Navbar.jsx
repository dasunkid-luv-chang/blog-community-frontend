import useStyles from "./style.js"
import { Avatar, Box, Button, Menu, TextInput } from "@mantine/core"
import { AiOutlineSearch } from "react-icons/ai"
import { FaPenNib } from "react-icons/fa"
import { GrNotification } from "react-icons/gr"
import { MdOutlineSpaceDashboard, MdSettings, MdLogout } from "react-icons/md"
import { Link } from "react-router-dom"
import Brand from "./Brand"

const Navbar = () => {
    const { classes } = useStyles()
    return (
        <header className={classes.navbar}>
            <Brand />

            <div className={classes.search}>
                <TextInput
                    sx={{ width: "100%" }}
                    placeholder="Search..."
                    radius="xl"
                    size="md"
                    icon={<AiOutlineSearch size="20px" />}
                />
            </div>

            <div className={classes.leftNavbar}>
                <Button
                    radius="xl"
                    size="md"
                    leftIcon={<FaPenNib size="20px" />}
                >
                    <Link to="/write" className={classes.writeBtn}>
                        Write
                    </Link>
                </Button>

                {/* notification */}
                <div>
                    <Menu
                        width={400}
                        shadow="md"
                        position="bottom-end"
                        withArrow
                    >
                        <Menu.Target>
                            <Box
                                sx={(theme) => ({
                                    padding: "0.5rem",
                                    cursor: "pointer",
                                    borderRadius: theme.radius.xl,
                                    "&:hover": {
                                        backgroundColor: theme.colors.gray[0],
                                    },
                                })}
                            >
                                <GrNotification size="25px" />
                            </Box>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item component="a" href="https://mantine.dev">
                                Mantine website
                            </Menu.Item>

                            <Menu.Item
                                component="a"
                                href="https://mantine.dev"
                                target="_blank"
                            >
                                External link
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>

                {/* account settings */}
                <div>
                    <Menu
                        width={200}
                        shadow="md"
                        position="bottom-end"
                        withArrow
                    >
                        <Menu.Target>
                            <Avatar
                                sx={{ cursor: "pointer" }}
                                variant="light"
                                radius="xl"
                                size="42px"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                            />
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item
                                component={Link}
                                to="/dashboard"
                                icon={<MdOutlineSpaceDashboard size={25} />}
                            >
                                Dash board
                            </Menu.Item>

                            <Menu.Item
                                component={Link}
                                to="/settings"
                                icon={<MdSettings size={25} />}
                            >
                                Settings
                            </Menu.Item>

                            <Menu.Item icon={<MdLogout size={25} />}>
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Navbar
