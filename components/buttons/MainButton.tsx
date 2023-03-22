import { MouseEventHandler, ReactNode } from "react";
import styles from "@/styles/utils.module.css";

type MainButtonProps = {
    type?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    // color?: string;
};

function MainButton({
    type = "submit",
    handleClick = () => console.log("Button clicked"),
    children,
}: // color = "var(--primary)",
MainButtonProps) {
    return (
        <button
            onClick={handleClick}
            className={styles.mainButton}
            // style={{ backgroundColor: color }}
            type={type}
        >
            {children}
        </button>
    );
}

export default MainButton;
