import MainButton from "@/components/buttons/MainButton";
import Header from "@/components/layout/header";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.home_conatiner}>
        <div className={styles.home_conatiner_left}>
          <div>
            <span className={styles.red_line}></span>
            Claymore
          </div>
          <h1>
            Our platform is like a superhero - it's always on guard, protecting
            you from harm!
          </h1>
          <div>
            With this platform, we have created an ecosystem where buyers and
            sellers can transact in a secure, transparent, and efficient manner.
          </div>
          <div className={styles.home_container_buttons}>
            <MainButton color="var(--secondary)">Get Started</MainButton>
            <MainButton color="var(--primary)">
              <span className={styles.underline}>About Us</span>
            </MainButton>
          </div>
        </div>
        <div className={styles.home_conatiner_right}>
          <Image
            src="/images/pages/home/homeImage.jpeg"
            alt="HomeImage"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
