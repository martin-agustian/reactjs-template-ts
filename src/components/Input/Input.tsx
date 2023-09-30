import { ComponentPropsWithRef } from "react";
// styles
import styles from "./Input.module.css";

type InputProps = {
	className?: string;
} & ComponentPropsWithRef<"input">;

export function Input({ className = "", ...otherProps }: InputProps) {
	return <input className={`${styles.input} ${className}`} {...otherProps} />;
}

type inputErrorProps = {
	className?: string;
	children: React.ReactNode;
};

export function InputError({ className = "", children }: inputErrorProps) {
	return <div className={`${styles.inputError} ${className}`}>{children}</div>;
}
