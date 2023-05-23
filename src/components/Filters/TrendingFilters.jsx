import useStyles from "./TrendingFiltersStyle"
import { Button } from "@mantine/core"

const trendingFilters = [
    {
        label: "Week",
        value: "week",
    },
    {
        label: "Month",
        value: "month",
    },
    {
        label: "Year",
        value: "year",
    },
]

const TrendingFilters = ({ trending, setTrending }) => {
    const { classes } = useStyles()
    return (
        <div className={classes.trendingFilters}>
            {trendingFilters.map((item) => (
                <Button
                    key={item.label}
                    variant="subtle"
                    color="dark"
                    radius="none"
                    onClick={() => setTrending(item.value)}
                    className={
                        trending === item.value
                            ? `${classes.filter} ${classes.filterActive}`
                            : classes.filter
                    }
                >
                    {item.label}
                </Button>
            ))}
        </div>
    )
}

export default TrendingFilters
