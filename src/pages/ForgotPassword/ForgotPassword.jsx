import Banner from "../../components/Banner/Banner"
import useStyles from "../../styles/FormStyles"
import ForgotPasswordBanner from "../../assets/images/forgot_password_banner.jpg"
import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom"
import { Button, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { emailValidate } from "../../utils/formValidation"

const initialValues = {
    email: "",
}

const validate = {
    email: emailValidate,
}

const ForgotPassword = () => {
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
                <div className={classes.back_url}>
                    <BiArrowBack />
                    <Link to="/login" className={classes.link}>
                        Back
                    </Link>
                </div>
                <div>
                    <h2 className={classes.formHeader}>
                        Forgot your password ?
                    </h2>
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

            <Banner img={ForgotPasswordBanner} />
        </div>
    )
}

export default ForgotPassword
