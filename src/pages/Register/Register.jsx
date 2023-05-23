import Banner from "../../components/Banner/Banner"
import registerBanner from "../../assets/images/register_banner.jpg"
import useStyles from "../../styles/FormStyles"
import { useForm } from "@mantine/form"
import { Link } from "react-router-dom"
import { GithubButton } from "../../components/SocialButton/GithubButton"
import { Button, Divider, PasswordInput, TextInput } from "@mantine/core"
import {
    emailValidate,
    fullnameValidate,
    passwordConfirmValidate,
    passwordValidate,
    usernameValidate,
} from "../../utils/formValidation"

const initialValues = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
}

const validate = {
    fullname: fullnameValidate,
    username: usernameValidate,
    email: emailValidate,
    password: passwordValidate,
    passwordConfirm: passwordConfirmValidate,
}

const Register = () => {
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
                    <h2 className={classes.formHeader}>Create your account</h2>
                    <p className={classes.formSubheader}>
                        Already have account?
                        <Link to="/login" className={classes.link}>
                            Login
                        </Link>
                    </p>
                </div>

                <form
                    className={classes.form}
                    onSubmit={form.onSubmit(handleSubmit)}
                    noValidate
                >
                    <TextInput
                        label="Full name"
                        placeholder="Your full name"
                        radius="sm"
                        size="md"
                        name="fullname"
                        {...form.getInputProps("fullname")}
                    />
                    <TextInput
                        label="Username"
                        placeholder="Eg: john_doe"
                        radius="sm"
                        size="md"
                        name="username"
                        {...form.getInputProps("username")}
                    />
                    <TextInput
                        label="Email"
                        placeholder="Your email"
                        radius="sm"
                        size="md"
                        type="email"
                        name="email"
                        {...form.getInputProps("email")}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Your password"
                        radius="sm"
                        size="md"
                        name="password"
                        {...form.getInputProps("password")}
                    />
                    <PasswordInput
                        label="Password confirmation"
                        placeholder="Your password confirmation"
                        radius="sm"
                        size="md"
                        name="passwordConfirm"
                        {...form.getInputProps("passwordConfirm")}
                    />

                    <Button
                        variant="gradient"
                        gradient={{ from: "indigo", to: "cyan" }}
                        size="md"
                        type="submit"
                    >
                        Create account
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

            <Banner img={registerBanner} />
        </div>
    )
}

export default Register
