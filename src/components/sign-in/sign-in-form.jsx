import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
	signInWithGooglePopUp,
	signInAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopUp();
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect password for email");
					break;

				case "auth/user-not-found":
					alert("email doesn't exist");
					break;
				default:
					console.log("Error occured when logging in: ", error.message);
			}
		}
	};

	return (
		<div className="sign-in-container">
			<h2>Already have an account?</h2>
			<span>Sign in with email or Google</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
