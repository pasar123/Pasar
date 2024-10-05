import Image from "next/image";

const Testimonial1Small = () => {
  return (
    <section className="bg-base-100">
      <div className="space-y-6 md:space-y-8 max-w-lg mx-auto px-8 py-16 md:py-32 ">
        <div className="rating !flex justify-center">
          {[...Array(5)].map((_, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-yellow-500"
              key={i}
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        <p className="text-xl font-medium text-center">
          <span className="bg-warning/25 px-1.5 rounded-md">
            {" "}
            ب ڕێکا {config.appName}{" "}
          </span>{" "}
          من کاری پرۆژا خۆ ب لەزگینی و کوالیتیەکا بلند جێبەجێ بکەم. گەلەک سپاس بۆ شارەزایا وە!
        </p>
        <div className="flex justify-center items-center gap-3">
          <Image
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
            alt="ئاکۆ عەزیز"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">ئاکۆ عەزیز</p>
            <p className="text-base-content/80 text-sm">٢٣.١ هزار شوینکەفتی ل سەر 𝕏</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1Small;