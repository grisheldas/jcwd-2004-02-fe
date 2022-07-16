import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

function PrescritpionBerhasil() {
  const router = useRouter();

  return (
    <div>
      <div className="hidden md:contents">
        <Navbar />
      </div>
      <div className="flex flex-col h-[600px] justify-center items-center">
        <img src={"/prescripsuccess1.svg"} />
        <img className="w-[200px] h-auto" src={"/prescripsuccess2.svg"} />
        <img src={"/prescripsuccess3.svg"} />
        {/* <Link href={"/payment"}> */}
        <Button colorScheme={"purple"} className="w-[260px] mt-2" type="button">
          Lihat Progress Pemesanan
        </Button>
        {/* </Link> */}
      </div>
      <div className="hidden md:contents">
        <Footer />
      </div>
    </div>
  );
}

export default PrescritpionBerhasil;
