
import Link from "next/link"
import project from "@/assets/project.jpg";
import bg1 from "@/assets/bg1.png";
import bg2 from "@/assets/bg2.jpg";
import Image from "next/image";

export default function MemberCard() {
  return (
    <div className="space-y-60">
      <div className="grid h-10 grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-24 lg:py-32">
        <div className="top-0 flex items-center justify-center">
        <Image
            src={project}
            width={600}
            height={400}
            alt="Section 1 Image"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 md:text-4xl lg:text-5xl">Section 1 Heading</h2>
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nisl
            nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
          </p>
        </div>
      </div>
      <div className="grid h-96 grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-24 lg:py-32">
        <div className="top-0 h-screen flex items-center justify-center">
          <Image
            src={project}
            width={600}
            height={400}
            alt="Section 2 Image"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 md:text-4xl lg:text-5xl">Section 2 Heading</h2>
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl mb-8">
            Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="grid h-96 grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-24 lg:py-32">
        <div className="sticky top-0 h-screen flex items-center justify-center">
        <Image
            src={project}
            width={600}
            height={400}
            alt="Section 3 Image"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 md:text-4xl lg:text-5xl">Section 3 Heading</h2>
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl mb-8">
            Eget aliquam nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl
            eget ultricies tincidunt, nisl nisl aliquam nisl.
          </p>
        </div>
      </div>
    </div>
  )
}