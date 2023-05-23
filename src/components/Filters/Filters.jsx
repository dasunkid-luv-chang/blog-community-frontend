import { Paper, Select, Tabs } from "@mantine/core"
import { useNavigate } from "react-router-dom"

const Filters = ({ tabValue, trending, setTrending }) => {
    console.log("🚀 ~ file: Filters.jsx:6 ~ Filters ~ trending:", trending)
    const navigate = useNavigate()

    return (
        <Paper radius="sm" shadow="xs" p="1rem" mb="1rem">
            <Tabs
                value={tabValue}
                onTabChange={(value) => navigate(`/newsfeed/${value}`)}
                radius="xs"
                variant="pills"
            >
                <Tabs.List>
                    <Tabs.Tab value="relevant" fw={500}>
                        Relevant
                    </Tabs.Tab>
                    <Tabs.Tab value="trending" fw={500}>
                        Trending
                    </Tabs.Tab>
                    <Tabs.Tab value="recent" fw={500}>
                        Recent
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="trending" pt="xs">
                    <Select
                        w={"50%"}
                        value={trending}
                        onChange={setTrending}
                        data={[
                            { value: "week", label: "Week" },
                            { value: "month", label: "Month" },
                            { value: "year", label: "Year" },
                        ]}
                    />
                </Tabs.Panel>
            </Tabs>
        </Paper>
    )
}

export default Filters
