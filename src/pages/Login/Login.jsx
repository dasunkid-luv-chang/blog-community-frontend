import Banner from "../../components/Banner/Banner"
import loginBanner from "../../assets/images/login_banner.jpg"
import useStyles from "../../styles/FormStyles"
import { Link } from "react-router-dom"
import { GithubButton } from "../../components/SocialButton/GithubButton"
import { Button, Divider, PasswordInput, TextInput } from "@mantine/core"
import { isEmail, matches, useForm } from "@mantine/form"

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

const initialValues = {
    email: "",
    password: "",
}

const validate = {
    email: isEmail("Invalid email format"),
    password: matches(passwordRegex, "Minimum 8 characters, at least one letter, one number and one special character"),
}

const Login = () => {
    const { classes } = useStyles()

    const form = useForm({
        initialValues,
        validate,
    })

    const handleSubmit = (values) => {
        console.log("🚀 ~ file: Login.jsx:29 ~ handleSubmit ~ values:", values)
    }

    return (
        <div className={classes.pageWrapper}>
            <div className={classes.formWrapper}>
                <div>
                    <h2 className={classes.formHeader}>Welcome back</h2>
                    <p className={classes.formSubheader}>
                        Dont have account?
                        <Link to="/register" className={classes.link}>
                            Register
                        </Link>
                    </p>
                </div>

                <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)} noValidate>
                    <TextInput
                        label="Email"
                        placeholder="Your email"
                        radius="sm"
                        withAsterisk
                        size="md"
                        type="email"
                        {...form.getInputProps("email")}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Your password"
                        radius="sm"
                        withAsterisk
                        size="md"
                        {...form.getInputProps("password")}
                    />

                    <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }} size="md" type="submit">
                        Lets go!
                    </Button>

                    {/* github login */}
                    <Divider my="sm" label="Or login with" labelPosition="center" />
                    <GithubButton size="md">Continue with github</GithubButton>
                </form>
            </div>

            <Banner img={loginBanner} />
        </div>
    )
}

export default Login
