import Image from "next/image";

import MaxContainer from "@/components/MaxContainer";

export default function Home() {
  return (
    <MaxContainer className="w-full flex items-center max-w-8xl flex-col pt-14 md:pt-28 gap-y-2 text-center">
      <p className="text-xs md:text-sm text-brown my-2">
        ENJOY A HIGH-CALIBER GASTRONOMIC EXPERIENCE
      </p>
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-5xl my-2 text-brown">
        ASN Confectioneries, For moments that need a touch of sweetness.
      </h1>
      <p className="text-sm xl:text-xl text-brown font-medium max-w-3xl w-full">
        We offer a premium selection of handcrafted, high-quality sweets,
        featuring rich chocolates, buttery pastries, and chewy confections that
        promise an unforgettable taste experience.
      </p>

      <Image
        src="/light-1.png"
        alt="ASN Confectioneries"
        width={600}
        height={600}
        quality={100}
      />
    </MaxContainer>
  );
}
