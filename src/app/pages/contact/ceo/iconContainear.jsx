import styles from "@/app/styles/buissnesPlan/body.module.css";
import Image from "next/image";
import Link from "next/link";

const IconContainear = () => {
  // const phoneNumber = "01322646880";
  // const handleCallLog = () => {
  //   // Open call log with the specified phone number
  //   window.open(`tel:${phoneNumber}`, "_blank");
  // };
  return (
    <div>
      <div className={styles.IconContainear}>
        {/* <div className={styles.contactItem} onClick={handleCallLog} role="button">
          <Image
            className={styles.Img}
            src="https://ipfs.filebase.io/ipfs/QmPY9PdcevNfo6GAPTkXJSYj6h5rPztiDBHedgXAj7yqhd"
            alt="WhatsApp"
            width={200}
            height={100}
          />
        </div> */}

        <div className={styles.contactItem}>
          <Link target="_blank" href="https://twitter.com/">
            <Image
              className={styles.Img}
              src="https://ipfs.filebase.io/ipfs/QmU82Shg72DR2BDsiCNNbf1CFPDsJZTQHZ2s1bZoirbMSr"
              alt="twitter"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className={styles.contactItem}>
          <Link target="_blank" href="https://www.linkedin.com/">
            <Image
              className={styles.Img}
              src="https://ipfs.filebase.io/ipfs/Qmcejf9W8Cu3KNxx1DWcY4nU5qndPZQJrX9p1gVssuy2zb"
              alt="linkedin"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className={styles.contactItem}>
          <Link target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mdeaamin9@gmail.com" rel="noopener noreferrer">
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
