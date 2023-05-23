import Banner from "../../components/Banner/Banner"
import useStyles from "../../styles/FormStyles"
import CreateNewPasswordBanner from "../../assets/images/new_password.jpg"
import { Button, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import {
    passwordConfirmValidate,
    passwordValidate,
} from "../../utils/formValidation"

const initialValues = {
    password: "",
    passwordConfirm: "",
}

const validate = {
    password: passwordValidate,
    passwordConfirm: passwordConfirmValidate,
}

const ResetPassword = () => {
    const { classes } = useStyles()
    // get token from query params
    const navigate = useNavigate()
    const location = useLocation()
    const token = new URLSearchParams(location.search).get("token")

    useEffect(() => {
        if (!token) {
            navigate("/404")
        }
    }, [token])

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
                    <h2 className={classes.formHeader}>Create new password</h2>
                </div>

                <form
                    className={classes.form}
                    onSubmit={form.onSubmit(handleSubmit)}
                    noValidate
                >
                    <TextInput
                        label="Password"
                        placeholder="Your password"
                        radius="sm"
                        size="md"
                        type="password"
                        {...form.getInputProps("password")}
                    />

                    <TextInput
                        label="Password confirm"
                        placeholder="Retype your password"
                        radius="sm"
                        size="md"
                        type="password"
                        {...form.getInputProps("passwordConfirm")}
                    />

                    <Button
                        variant="gradient"
                        gradient={{ from: "indigo", to: "cyan" }}
                        size="md"
                        type="submit"
                    >
                        Confirm
                    </Button>
                </form>
            </div>

            <Banner img={CreateNewPasswordBanner} />
        </div>
    )
}

export default ResetPassword
