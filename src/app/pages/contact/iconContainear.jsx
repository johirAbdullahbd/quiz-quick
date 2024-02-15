import styles from "@/app/styles/buissnesPlan/body.module.css";
import Image from "next/image";
import Link from "next/link";

const IconContainear = () => {
  const phoneNumber = "01606454309";
  const handleCallLog = () => {
    // Open call log with the specified phone number
    window.open(`tel:${phoneNumber}`, "_blank");
  };
  return (
    <div>
      <div className={styles.IconContainear}>
        <div className={styles.contactItem} onClick={handleCallLog} role="button">
          <Image
            className={styles.Img}
            src="https://ipfs.filebase.io/ipfs/QmPY9PdcevNfo6GAPTkXJSYj6h5rPztiDBHedgXAj7yqhd"
            alt="WhatsApp"
            width={200}
            height={100}
          />
        </div>

        <div className={styles.contactItem}>
          <Link target="_blank" href="https://wa.me/your-whatsapp-number" passHref>
            <Image
              className={styles.Img}
              src="https://ipfs.filebase.io/ipfs/QmegGRha5BBxdEtsRnsQEJCx7iCgwVjS5sun3nKcaaxonX"
              alt="WhatsApp"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className={styles.contactItem}>
          <Link target="_blank" href="https://m.me/100067301229882" passHref>
            <Image
              className={styles.Img}
              src="https://ipfs.filebase.io/ipfs/QmR7aYsJ52h6tZZfYZVnt1bg6CpsyeVM3wf7CTzCsk2hW8"
              alt="msngr"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className={styles.contactItem}>
          <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=johirabdullahbd@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image
              className={styles.Img}
              src="https://ipfs.filebase.io/ipfs/QmPUPdYzUiWZr5GPgNvFXZpK8v8UjiTMKasTA9QiSoJyeD"
              alt="call"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default IconContainear;
