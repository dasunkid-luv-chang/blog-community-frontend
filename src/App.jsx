import "./App.css"
import { Fragment } from "react"
import { PostProvider } from "./context/postContext"
import Rootlayout from "./layouts/Root/Root"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import ResetPassword from "./pages/ResetPassword/ResetPassword"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import NewsFeed from "./components/NewsFeed/NewsFeed"
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate,
} from "react-router-dom"
import CreateNewPost from "./pages/CreateNewPost/CreateNewPost"
import PreviewPost from "./pages/PreviewPost/PreviewPost"
import Bookmark from "./components/Bookmark/Bookmark"
import MyArticals from "./components/MyArticals/MyArticals"
import Explore from "./components/Explore/Explore"
import DashboardLayout from "./layouts/Dashboard/Dashboard"
import SettingLayout from "./layouts/Setting/Setting"
import Followers from "./components/Follows/Followers"
import Followings from "./components/Follows/Followings"
import FollowingTags from "./components/Follows/FollowingTags"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Fragment>
            <Route path="/" element={<Rootlayout />}>
                <Route
                    index
                    element={
                        <Navigate to="/newsfeed/relevant" replace="true" />
                    }
                />
                <Route path="/newsfeed/:tabValue" element={<NewsFeed />} />
                <Route path="/explore/:tabValue" element={<Explore />} />
                <Route path="/my-articals" element={<MyArticals />} />
                <Route path="/bookmarks" element={<Bookmark />} />
            </Route>

            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route
                    index
                    element={<Navigate to="/dashboard/posts" replace="true" />}
                />
                <Route path="/dashboard/posts" element={<MyArticals />} />
                <Route
                    path="/dashboard/follower-users"
                    element={<Followers />}
                />
                <Route
                    path="/dashboard/following-users"
                    element={<Followings />}
                />
                <Route
                    path="/dashboard/following-tags"
                    element={<FollowingTags />}
                />
            </Route>

            <Route path="/settings" element={<SettingLayout />}>
                <Route
                    index
                    element={<Navigate to="/settings/profile" replace="true" />}
                />
                <Route path="/settings/profile" element={<h1>prfile</h1>} />
                <Route
                    path="/settings/account"
                    element={<h1>account settings</h1>}
                />
            </Route>

            <Route path="/write" element={<CreateNewPost />} />
            <Route path="/preview" element={<PreviewPost />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
        </Fragment>
    )
)
function App() {
    return (
        <PostProvider>
            <RouterProvider router={router} />
        </PostProvider>
    )
}

export default App
