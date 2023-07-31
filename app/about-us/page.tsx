import { Metadata } from "next";
import Image from "next/image";

const AboutUs = async () => {
  return (
    <main className="w-full h-screen flex justify-center items-start  pt-16 px-6 lg:px-4 2xl:px-0 ">
      <div className="w-full flex flex-col gap-y-16  items-center max-w-5xl">
        <div className="mt-16 flex flex-col gap-y-6">
          <h1 className="text-neutral-800 text">
            Everything you need to get the attention of your audience
          </h1>

          <p className="text-neutral-500">
            our digital agency helps clients develop,implement and maintain
            successful digital marketing strategies across all channels{" "}
          </p>
        </div>

        <div className="relative 2xl:w-[800px] lg:h-[558px] lg:w-[650px] w-full h-[250px] rounded-xl">
          <Image
            src={
              "https://www.betterup.com/hubfs/Blog%20Images/Motivating%20a%20team/motivating-a-team-woman-at-meeting-smiling.jpg"
            }
            alt="team work"
            className="rounded-xl"
            fill
          />
        </div>

        <p className="leading-10 text-neutral-700 2xl:text-base lg:text-sm text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          laudantium fuga ex expedita adipisci iste exercitationem cupiditate
          consectetur, rem quam unde explicabo debitis earum molestias
          dignissimos perferendis aut sapiente sunt? Nam animi unde sed autem,
          quidem eaque magnam ex alias repellendus maiores debitis non,
          voluptatem expedita ullam beatae? Veniam accusantium odio quidem,
          velit facere animi neque amet repellendus perferendis voluptatem.
          Quibusdam laboriosam, nesciunt neque rem iste doloribus totam tempora
          est quo animi? Deleniti quas quaerat in facere sunt quibusdam
          voluptatibus vel sit delectus? Temporibus quidem rerum aspernatur
          ipsum mollitia accusamus. Excepturi voluptates adipisci repellendus,
          rem deserunt obcaecati. Ipsa atque deserunt, perferendis ad laboriosam
          vel minus reprehenderit corporis harum at expedita possimus assumenda
          asperiores? Vel, ad ea iure quam enim reprehenderit? Inventore,
          maxime? Voluptatem soluta tempore dolorem unde ullam! Voluptatibus,
          asperiores corporis? Assumenda incidunt, sapiente odit, ad dolore
          quisquam vel magnam impedit ab delectus veritatis sunt suscipit. Quae
          fugit quis nam?
        </p>
      </div>
    </main>
  );
};
export default AboutUs;

export const metadata: Metadata = {
  title: "about us",
};
