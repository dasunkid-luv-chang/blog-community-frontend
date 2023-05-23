import Banner from "../../components/Banner/Banner"
import loginBanner from "../../assets/images/login_banner.jpg"
import useStyles from "../../styles/FormStyles"
import { Link } from "react-router-dom"
import { GithubButton } from "../../components/SocialButton/GithubButton"
import {
    Button,
    Divider,
    Group,
    PasswordInput,
    Text,
    TextInput,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { emailValidate, passwordValidate } from "../../utils/formValidation"

const initialValues = {
    email: "",
    password: "",
}

const validate = {
    email: emailValidate,
    password: passwordValidate,
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

                <form
                    className={classes.form}
                    onSubmit={form.onSubmit(handleSubmit)}
                    noValidate
                >
                    <TextInput
                        label="Email"
                        placeholder="Your email"
                        radius="sm"
                        size="md"
                        type="email"
                        {...form.getInputProps("email")}
                    />

                    <div>
                        <Group position="apart" mb={5}>
                            <Text
                                component="label"
                                htmlFor="your-password"
                                size="sm"
                                weight={500}
                            >
                                Your password
                            </Text>

                            <Link
                                to="/forgot-password"
                                className={`${classes.forgotPassword} ${classes.link}`}
                            >
                                Forgot your password?
                            </Link>
                        </Group>
                        <PasswordInput
                            // label="Password"
                            placeholder="Your password"
                            radius="sm"
                            size="md"
                            {...form.getInputProps("password")}
                        />
                    </div>

                    <Button
                        variant="gradient"
                        gradient={{ from: "indigo", to: "cyan" }}
                        size="md"
                        type="submit"
                    >
                        Lets go!
                    </Button>

                    {/* github login */}
                    <Divider
                        my="sm"
                        label="Or login with"
                        labelPosition="center"
                    />
                    <GithubButton size="md">Continue with github</GithubButton>
                </form>
            </div>

            <Banner img={loginBanner} />
        </div>
    )
}

export default Login
