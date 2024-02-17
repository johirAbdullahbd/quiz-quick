"use client ";

import Image from "next/image";

const Call = ({ bodyClass, Img }) => {
  const phoneNumber = "01322646880";
  const handleCallLog = () => {
    // Open call log with the specified phone number
    window.open(`tel:${phoneNumber}`, "_blank");
  };
  return (
    <div className={bodyClass} onClick={handleCallLog} role="button">
      <Image
        className={Img}
        src="https://ipfs.filebase.io/ipfs/QmPY9PdcevNfo6GAPTkXJSYj6h5rPztiDBHedgXAj7yqhd"
        alt="WhatsApp"
        width={200}
        height={100}
      />
    </div>
  );
};
export default Call;
