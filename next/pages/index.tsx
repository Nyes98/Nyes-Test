import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  setTimeout(() => {
    console.log("잠간!1");
  }, 1000);

  setTimeout(() => {
    console.log("잠간!2");
  }, 1000);

  setTimeout(() => {
    console.log("잠간!3");
  }, 1000);

  setTimeout(() => {
    console.log("잠간!4");
  }, 2000);

  return <div>Hello!</div>;
}
