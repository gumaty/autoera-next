import Image from "next/image";
import Link from "next/link";

function Logo() {
    return (
        <>
            <Link href={'/'}>
                <Image src={'/images/autoera.png'} alt="Logo Auto-era" width={125} height={55}/>
            </Link>

        </>
    )
}

export default Logo;