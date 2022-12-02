import styles from "../styles/Menu.module.css";

export default function HomeContents() {
  return (
    <div>
      <div className="font-Clash Display">
        <p className={styles.middleText}>
          Photography is poetry & beautiful untold stories
        </p>
      <div className="w-full flex justify-center my-6">
      <p className="text-center font-sans w-4/6 text-2xl">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      </div>
    </div>
  );
}
