import React from 'react';
import styled from 'styled-components';

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin:0 20%;
`

const Formlabel = styled.div`
    font-size:16px;
    font-weight:700;
    color:black;
    text-transform: capitalize;
    class:formlabel
`;

const ErrorMsg = styled.div`
    font-size:10px;
    color:red;
    padding-top: 5px;
`;

const Input = styled.input`
    font-size: 16px;
    color: grey;
    border: 0;
    outline: none;
    padding-top: 10px;
    padding-bottom: 5px;
    width: -webkit-fill-available;
    &:focus { 
        border-bottom: 1px solid;

        & ~ div.formlabel {
            color:blue;
        }
        div.textfield {
            border-bottom: 1.5px solid blue;
        }
    }
`;

const TextFieldSection = styled.div`
    margin: 16px;
    padding: 8px;
    text-transform: capitalize;
    background-color: white;
    // border-bottom: 1.5px solid;
    class:textfield;
`;

function Grid({ children }) {
    return (
        <Rows>
            {children}
        </Rows>
    )

}

function Error({ error, message }) {
    if (error) {
        return (
            <ErrorMsg>
                {message}
            </ErrorMsg>
        )
    }
    return false;
}

function TextField(props) {
    const { label, error, message, value, name, onChange, maskValue = false } = props
    return (
        <TextFieldSection>
            <Formlabel>
                {label}
            </Formlabel>
            {
                maskValue ? (<MaskedInput value={value} name={name} onChange={onChange} />) : (
                    <Input value={value} name={name} onChange={onChange} />
                )
            }
            <Error error={error} message={message} />
        </TextFieldSection>
    )
}

function MaskedInput({ value, name, onChange }) {
    let maskedvalue = '';
    if (value) {
        const arr = Array(value.length)
        maskedvalue = arr.fill('*').join('');
    }
    return (
        <Input value={maskedvalue} name={name} onChange={onChange} />
    )
}


const BtnStyled = styled.button`margin: 16px;
    padding: 8px;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    border-radius: 10px;
    color: #00be44;
    background: yellow;
    background-color: black;
    border-radius: 50px;
    &:hover {
        background-color:#2d2a2af0;
    }
`

const Header = styled.div`
    font-size: 48px;
    font-weight: 900;
    text-transform: capitalize;
    margin: 16px auto;
    padding: 16px;
`

function SignUpBtn(props) {
    return <BtnStyled type="button" {...props} >{props.name}</BtnStyled>
}


export default function ({
    email, onChangeEmail, emailError,
    password, onChangePassword, passwordError,
    confirmPassword, onChangeConfirmPassword, confirmPasswordError,
    onSubmit
}) {
    console.log({
        email, onChangeEmail, emailError,
        password, onChangePassword, passwordError,
        confirmPassword, onChangeConfirmPassword, confirmPasswordError,
        onSubmit
    })
    return (
        <React.Fragment>
            <Grid>
                <Header>
                    Sign Up Here
            </Header>
            </Grid>
            <Grid>
                <TextField value={email.value} name='email' label='email' onChange={onChangeEmail} error={emailError} message={emailError} />
                <TextField value={password.value} maskValue={true} name='password' label='password' onChange={onChangePassword} error={passwordError} message={passwordError} />
                <TextField value={confirmPassword.value} maskValue={true} name='confirm password' label='confirm password' error={confirmPasswordError} message={confirmPasswordError} onChange={onChangeConfirmPassword} />
                <SignUpBtn name={'sign up'} onClick={onSubmit} />
            </Grid>
        </React.Fragment>

    )

}