import styles from "@/styles/login.module.css";
import MainButton from "@/components/buttons/MainButton";
import Img from "@/components/buttons/Img";

function login() {
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <div className={styles.login}>
                <Img src="/images/login.png" alt="Login Image" />
                <div className={styles.loginImage}>
                    <Img src="/images/metamask_poly.png" alt="Login Image" />
                    <div className={styles.loginButtons}>
                        <MainButton type="button">
                            Sign in with Metamask
                        </MainButton>
                        <MainButton type="button">
                            Sign in with Email
                        </MainButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;
