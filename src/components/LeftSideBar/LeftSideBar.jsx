import useStyles from "./LeftSideBarStyle"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BiTrendingUp } from "react-icons/bi"
import {
    Badge,
    Divider,
    Group,
    Paper,
    Stack,
    Tabs,
    Text,
    Tooltip,
} from "@mantine/core"

// icons
import { MdOutlineArticle } from "react-icons/md"
import { MdOutlineBookmarks } from "react-icons/md"
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { MdOutlineExplore } from "react-icons/md"

const tabList = [
    {
        label: "Explore",
        value: "explore",
        icon: <MdOutlineExplore size={20} />,
    },
    {
        label: "Bookmarks",
        value: "bookmarks",
        icon: <MdOutlineBookmarks size={20} />,
    },
    {
        label: "My articals",
        value: "dashboard/posts",
        icon: <MdOutlineArticle size={20} />,
    },
    {
        label: "Dashboard",
        value: "dashboard",
        icon: <MdOutlineSpaceDashboard size={20} />,
    },
]

const LeftSideBar = () => {
    const { classes } = useStyles()
    const navigate = useNavigate()
    const activeTab = useLocation().pathname.split("/")[1]

    return (
        <Paper p="1rem" radius="md" withBorder>
            <Tabs
                value={activeTab}
                onTabChange={(value) => {
                    if (value === "explore") {
                        value = "explore/tags?category=week"
                    }
                    navigate(`/${value}`)
                }}
                radius="xs"
                variant="pills"
                orientation="vertical"
            >
                <Tabs.List w={"100%"}>
                    {tabList.map((tab, index) => (
                        <Tabs.Tab
                            key={index}
                            value={tab.value}
                            fw={500}
                            icon={tab.icon}
                        >
                            {tab.label}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
            </Tabs>

            <Divider my="sm" />

            <Stack spacing="xs">
                <Group>
                    <Text fw="500">Trending tags</Text>
                    <BiTrendingUp size="20px" />
                </Group>

                <Tooltip
                    label="Tooltip"
                    position="top-start"
                    color="gray"
                    withArrow
                >
                    <Link className={classes.trendingTag} to="/tags/1231">
                        Nodejs
                        <Badge color="blue" radius="xl" variant="light">
                            +123
                        </Badge>
                    </Link>
                </Tooltip>

                <Tooltip
                    label="Tooltip"
                    position="top-start"
                    color="gray"
                    withArrow
                >
                    <Link className={classes.trendingTag} to="/tags/1231">
                        React
                        <Badge color="blue" radius="xl" variant="light">
                            +250
                        </Badge>
                    </Link>
                </Tooltip>

                <Tooltip
                    label="Tooltip"
                    position="top-start"
                    color="gray"
                    withArrow
                >
                    <Link className={classes.trendingTag} to="/tags/1231">
                        Devops
                        <Badge color="blue" radius="xl" variant="light">
                            +55
                        </Badge>
                    </Link>
                </Tooltip>

                <Link className={classes.trendingTag} to="/explore/tags">
                    See all tags
                </Link>
            </Stack>
        </Paper>
    )
}

export default LeftSideBar
