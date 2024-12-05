"use client";

import localFont from "next/font/local";
import Fud from "@/assets/fud.svg";
import Image from "next/image";
import CopyContractAddress from "./CopyContract";
import Dexscreener from "@/assets/dex.png";
import Uni from "@/assets/uniswap.png";
import Tele from "@/assets/tele.png";
import Link from "next/link";
import CopyASCII from "./CopyASCII";
import { motion } from "framer-motion";

export const BubbleGum = localFont({
  src: "../app/fonts/Bubblegum.ttf",
  display: "swap",
  variable: "--font-bubblegum",
});

const Hero = () => {
  return (
    <div className="flex flex-col mt-32 md:mt-0 justify-center items-center text-center md:text-left h-screen w-full md:flex-row p-2">
      {/* IMAGE */}
      <div>
        <Image
          src={Fud}
          alt="fud"
          width={500}
          height={500}
          className="p-8 md:p-5"
        />
      </div>
      {/* TITLE */}
      <div className="grid">
        <h1
          className={`${BubbleGum.className} text-[#2d2c29] font-bold text-6xl`}
        >
          FUD ME BABY
        </h1>
        <div className="text-2xl">
          <p>fud is my food !!!</p>
          <p>just a fckng meme !</p>
          <p>no bs !!</p>
          <div className="bg-transparent rounded-2xl shadow flex flex-col items-center hover:bg-blue-400">
            <CopyASCII fckAscii="╭ᥥ╮ ( \ ╭╮ / )╭ᥥ╮" />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center p-2">
          <div>
            <p className="p-2 mr-5 bg-transparent rounded-full shadow">
              0x3378Ff8c...67a6BdA09e
            </p>
            <span className="p-2">
              <CopyContractAddress contractAddress="0x3378Ff8c1878209c8c1D61EB8Ac75B67a6BdA09e" />
            </span>
          </div>
          <div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={`https://dexscreener.com/base/0x81A825259fE5750d0173C6d5E9D50A19A34667C1`}
                target="_blank"
              >
                <Image
                  src={Dexscreener}
                  alt="dexscreener"
                  width={32}
                  height={32}
                  className="rounded-full shadow-md items-center m-2 ml-3"
                />
              </Link>
            </motion.div>

            <motion.div
              className="box"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={`https://app.uniswap.org/explore/tokens/base/0x3378ff8c1878209c8c1d61eb8ac75b67a6bda09e`}
                target="_blank"
              >
                <Image
                  src={Uni}
                  alt="uniswap"
                  width={32}
                  height={32}
                  className="rounded-full shadow-md items-center m-2 ml-3"
                />
              </Link>
            </motion.div>
            {/* 
            <motion.div
              className="box"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href={`https://t.me/+azc_r6TU10NiZWY1`} target="_blank">
                <Image
                  src={Tele}
                  alt="telegram"
                  width={32}
                  height={32}
                  className="rounded-full shadow-md items-center m-2 ml-3"
                />
              </Link>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
