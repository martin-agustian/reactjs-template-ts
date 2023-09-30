import { ComponentPropsWithRef } from "react";

// styles
import styles from "./Label.module.css";

type LabelProps = {
	children?: React.ReactNode;
	className?: string;
} & ComponentPropsWithRef<"label">;

export function Label({ className = "", children, ...otherProps }: LabelProps) {
	return (
		<label className={`${styles.label} ${className}`} {...otherProps}>
			{children}
		</label>
	);
}
