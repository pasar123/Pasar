import Image from "next/image";
import { StaticImageData } from "next/image";
import config from "@/config";
import ButtonGradient from "@/components/ButtonGradient";

// Import local images
import user1 from "@/public/images/user1.jpg";
import user2 from "@/public/images/user2.jpg";
import user3 from "@/public/images/user3.jpg";

const list: {
  username?: string;
  name: string;
  text: string;
  img: StaticImageData;
}[] = [
  {
    username: "ئاکۆ",
    name: "ئاکۆ عەزیز",
    text: "پرۆگرامسازیا وان یا گەلەک پێشکەفتیە. من کاری پرۆژا خۆ ب لەزگینی و کوالیتیەکا بلند جێبەجێ بکەم. گەلەک سپاس بۆ شارەزایا تە!",
    img: user1,
  },
  {
    username: "شەیدا",
    name: "شەیدا محەمەد",
    text: "وەک پرۆگرامسازەکێ نوی، فێربوونا کۆدێن تە هاریکاریا من کر بۆ دەستپێکرنا کارێ من. ڕێنیشاندانێن تە گەلەک ب کێرهاتن.",
    img: user2,
  },
  {
    username: "هیڤا",
    name: "هیڤا ڕەحمان",
    text: "شارەزایا تە د داتابەیس و سەپانێن وێب دا گەلەک بلندە. پرۆژا مە ب سەدەما هاریکاریێن تە سەرکەفتی بوو.",
    img: user3,
  },
];

const Testimonial = ({ i }: { i: number }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-3xl max-md:text-sm flex flex-col shadow-lg">
        <blockquote className="relative flex-1">
          <p className="text-base-content/80 leading-relaxed">
            {testimonial.text}
          </p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 md:gap-8 md:pt-8 md:mt-8 border-t border-base-content/5">
          <div className="w-full flex items-center justify-between gap-2">
            <div>
              <div className="font-medium text-base-content md:mb-0.5">
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="text-sm text-base-content/80">
                  @{testimonial.username}
                </div>
              )}
            </div>
            <div className="shrink-0">
              {testimonial.img ? (
                <Image
                  className="w-10 h-10 md:w-12 md:h-12 rounded-2xl object-cover"
                  src={testimonial.img}
                  alt={`${testimonial.name} بۆ ${config.appName}`}
                  width={48}
                  height={48}
                />
              ) : (
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-2xl flex justify-center items-center text-lg font-medium bg-base-300">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <section id="testimonials" className="bg-base-100">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              پرۆگرامسازیا پێشکەفتی بۆ پرۆژێن تە
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            ئەم هاریکاریا تە دکەین بۆ چێکرنا سەپان و مالپەڕێن پێشکەفتی. ب شارەزایی و تەکنۆلۆژیا نوی، ئەم پرۆژێن تە دگەهینینە ئاستەکێ بلند.
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>

        <div className="text-center mt-16">
          <ButtonGradient className="rounded-xl">
            پەیوەندیێ ب مە بکە
          </ButtonGradient>
        </div>
      </div>
    </section>
  );
};

export default Testimonials3;