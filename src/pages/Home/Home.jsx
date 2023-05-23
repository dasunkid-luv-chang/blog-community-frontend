import { Outlet, useLocation } from "react-router-dom"
import Filters from "../../components/Filters/Filters"
import SubFilters from "../../components/Filters/SubFilters"
import { useState } from "react"
import TrendingSubFilters from "../../components/Filters/TrendingSubFilters"

const Home = () => {
    const [showSubFilters, setShowSubFilters] = useState(false)
    const location = useLocation()
    const path = location.pathname.split("/")[2]

    return (
        <div>
            <Filters setShowSubFilters={setShowSubFilters} />
            {path === "trending" && <TrendingSubFilters />}
            {showSubFilters && <SubFilters />}

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Home
