import { compose } from "recompose";
import SignupForm from "./SignUpForm";
import withTextFieldState from "./stateManger";
import {
    withEmailError,
    withPasswordError,
    withConfirmPasswordError,
} from "./validationLogic";
import withSubmitForm from "./withSubmitForm";

const withFormLogic = compose(
    withTextFieldState,
    withEmailError,
    withPasswordError,
    withConfirmPasswordError,
    withSubmitForm
);

export default compose(
    withFormLogic
)(SignupForm);
