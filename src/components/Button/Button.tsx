import { ComponentPropsWithRef, MouseEventHandler } from "react";

// styles
import styles from "./Button.module.css";

type ButtonProps = {
	children?: React.ReactNode;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
} & ComponentPropsWithRef<"button">;

export function BtnPrimary({
	className = "",
	children,
	...otherProps
}: ButtonProps) {
	return (
		<button className={`${styles.btnPrimary} ${className}`} {...otherProps}>
			{children}
		</button>
	);
}

export function BtnSecondary({
	className = "",
	children,
	...otherProps
}: ButtonProps) {
	return (
		<BtnPrimary
			className={`${styles.btnSecondary} ${className}`}
			{...otherProps}>
			{children}
		</BtnPrimary>
	);
}

export function BtnOutline({
	className = "",
	children,
	...otherProps
}: ButtonProps) {
	return (
		<BtnPrimary className={`${styles.btnOutline} ${className}`} {...otherProps}>
			{children}
		</BtnPrimary>
	);
}
