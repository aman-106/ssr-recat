import { withProps } from "recompose";

const getEmailError = email => {
    if (!email.isDirty) {
        return "";
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValidEmail = emailRegex.test(email.value);
    return !isValidEmail ? "Invalid email." : "";
};

const withEmailError = withProps(ownerProps => ({
    emailError: getEmailError(ownerProps.email)
}));


const getPasswordError = password => {
    if (!password.isDirty) {
        return "";
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const isValidPassword = passwordRegex.test(password.value);
    return !isValidPassword
        ? "The password must contain minimum eight characters, at least one letter and one number."
        : "";
};

const withPasswordError = withProps(ownerProps => ({
    passwordError: getPasswordError(ownerProps.password)
}));


const getConfirmPasswordError = (password, confirmPassword) => {
    if (!confirmPassword.isDirty) {
        return "";
    }

    const passwordsMatch = password.value === confirmPassword.value;

    return !passwordsMatch ? "Passwords don't match." : "";
};

const withConfirmPasswordError = withProps(
    (ownerProps) => ({
        confirmPasswordError: getConfirmPasswordError(
            ownerProps.password,
            ownerProps.confirmPassword
        )
    })
);


export { withConfirmPasswordError, withEmailError, withPasswordError };
