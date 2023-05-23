import {
    passwordRegex,
    fullnameRegex,
    usernameRegex,
    emailRegex,
} from "./regex"

export function fullnameValidate(value) {
    if (!value) {
        return "Fullname is required"
    } else if (!value.match(fullnameRegex)) {
        return "Invalid fullname, valid fullname must be like this 'John Doe' "
    }
}

export function usernameValidate(value) {
    if (!value) {
        return "Username is required"
    } else if (!value.match(usernameRegex)) {
        return "Invalid username, valid username must be like this 'JohnDoe' or 'Mike123' "
    }
}

export function emailValidate(value) {
    if (!value) {
        return "Email is required"
    } else if (!value.match(emailRegex)) {
        return "Invalid email format"
    }
}

export function passwordValidate(value) {
    if (!value) {
        return "Password is required"
    } else if (!value.match(passwordRegex)) {
        return "Minimum 8 characters, at least one letter, one number and one special character"
    }
}

export function passwordConfirmValidate(value, values) {
    if (!value) {
        return "Password confirmation is required"
    } else if (value !== values.password) {
        return "Passwords do not match"
    }
}
