import Link from "next/link";
import Styles from "./contact.module.css";
import Info from "@/components/Info";
import Image from "next/image";
export const metadata = {
  description: "Ini halaman contact meta desc",
  title: "Halamam contact",
  keywords: "next js, figma, html",
};
export default async function Contact() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <>
      <div className={Styles.main}>
        <h2>Halaman Contact</h2>
      </div>
      <Info title="Contact Component" />
      <Image width={500} height={300} src="/img/girl.jpg" alt="webdevindo" />
    </>
  )
}
