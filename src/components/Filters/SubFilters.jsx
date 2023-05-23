import { TextInput, MultiSelect, Button } from "@mantine/core"
import useStyles from "./SubFiltersStyle"
import { useState } from "react"

const data = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "riot", label: "Riot" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
]

const SubFilters = () => {
    const { classes } = useStyles()
    const [value, setValue] = useState([])
    console.log("🚀 ~ file: SubFilters.jsx:18 ~ SubFilters ~ value:", value)

    return (
        <div className={classes.subFilters}>
            <div className="">
                <MultiSelect
                    clearable
                    searchable
                    label="Select tags, max 3 tags"
                    placeholder="Pick all that you like"
                    nothingFound="Nothing found"
                    size="md"
                    data={data}
                    value={value}
                    onChange={setValue}
                    maxSelectedValues={3}
                />
            </div>
            <div className={classes.subFilterButtons}>
                <Button variant="filled" color="blue" radius="xl">
                    Apply
                </Button>
                <Button variant="filled" color="teal" radius="xl">
                    Clear filter
                </Button>
            </div>
        </div>
    )
}

export default SubFilters
