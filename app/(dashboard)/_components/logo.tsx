import LogoIcon from "@/components/LogoIcon";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        {" "}
        <LogoIcon width={160} height={46} />
      </Link>
    </>
  );
};

export default Logo;
