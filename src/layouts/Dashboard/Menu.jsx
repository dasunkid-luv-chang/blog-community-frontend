import { Paper, Tabs } from "@mantine/core"
import { useLocation, useNavigate } from "react-router-dom"

const Menu = ({ tabList }) => {
    const navigate = useNavigate()
    const activeTab = useLocation().pathname

    return (
        <Paper p="1rem" radius="md" withBorder>
            <Tabs
                value={activeTab}
                onTabChange={(value) => navigate(`${value}`)}
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
        </Paper>
    )
}

export default Menu
