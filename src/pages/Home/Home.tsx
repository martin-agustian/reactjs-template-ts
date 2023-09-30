import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { useDispatch } from "react-redux";
// styles
import styles from "./Home.module.css";
// assets
import bricksSVG from "assets/images/bricks.svg";
// api
import UserAPI from "apis/User.api";
// redux
import { setTitlePage } from "stores/App.slice";
// components
import { Container } from "components/Container/Container";
import { Input, InputError } from "components/Input/Input";
import { Label } from "components/Label/Label";
import { BtnOutline } from "components/Button/Button";
import { isEmail, isEmpty, isPhone } from "helpers/Checker.helper";

type formValue = {
	name: string;
	email: string;
	phone: string;
};

function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setTitlePage("Home"));
	}, []);

	const form = useForm<formValue>({
		initialValues: {
			name: "",
			email: "",
			phone: "",
		},

		validate: {
			name: (value) => isEmpty(value) && "Name is required",
			email: (value) => {
				if (isEmpty(value)) return "Email is required";
				else if (!isEmail(value)) return "Email is invalid";
			},
			phone: (value) => {
				if (isEmpty(value)) return "Phone is required";
				else if (!isPhone(value)) return "Phone is invalid";
			},
		},
	});

	const onSubmit = () => {
		if (!form.validate().hasErrors) {
			let params: { [key: string]: any } = {};

			params.name = form.values.name;
			params.email = form.values.email;
			params.phone = form.values.phone;

			UserAPI.store(params)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<div className={styles.page}>
			<Container className={styles.container}>
				<div className={styles.image}>
					<img className={styles.imageSrc} src={bricksSVG} />
				</div>
				<div className={styles.title}>
					Powering <span>Your</span> Gaming & Esports <span>Dreams</span>
				</div>
				<div className={styles.desc}>
					We connecting you to the best talent, jobs, and tournament within
					Esport & Gaming Industry
				</div>
				<div className={styles.form}>
					<div className={styles.formTitle}>Be our Early Adopters</div>
					<div className={styles.formGroup}>
						<div className={styles.inputLabel}>
							<Label htmlFor="name" className={styles.label}>
								Name
							</Label>
							<Input id="name" {...form.getInputProps("name")} />
							<InputError>{form.errors.name}</InputError>
						</div>
						<div className={styles.inputLabel}>
							<Label htmlFor="email" className={styles.label}>
								Email
							</Label>
							<Input id="email" {...form.getInputProps("email")} />
							<InputError>{form.errors.email}</InputError>
						</div>
						<div className={styles.inputLabel}>
							<Label htmlFor="phone" className={styles.label}>
								Phone Number
							</Label>
							<Input id="phone" {...form.getInputProps("phone")} />
							<InputError>{form.errors.phone}</InputError>
						</div>
					</div>
					<BtnOutline onClick={onSubmit}>Join</BtnOutline>
				</div>
			</Container>
		</div>
	);
}

export default Home;
