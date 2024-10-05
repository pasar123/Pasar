import Image from "next/image";

const Arrow = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <svg
      className={`w-4 h-4 ml-2 ${extraStyle}`}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
};

const Problem = () => {
  return (
    <section className="bg-base-200">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">
            داتابەیس
          </p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            سکیمایا Mongoose
          </p>
          <p className="text-xl font-light mt-6 text-base-content/80">
            پلەگینێن Mongoose بۆ ئاسانکرنا ژیانا تە
          </p>
          <div className="mt-8">
            <a href="#" className="text-primary font-semibold inline-flex items-center">
              دەمێ هاتیە پاشەکەفتکرن: ٢ دەمژمێر
              <Arrow extraStyle="animate-bounce-x" />
            </a>
          </div>
        </div>
        <div className="basis-1/2">
          <Image
            src="https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="داتابەیس"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="py-12 px-8 max-w-7xl mx-auto">
        <p className="text-3xl font-bold text-center text-base-content mb-8">
          ئامادەی بۆ زیندیکرنا پرۆژا خۆ؟
        </p>
        <p className="text-xl text-center text-base-content/80 mb-8">
          وەرە با پێکڤە هەڤکاریێ بکەین و دیتنا تە بکەینە راستی. ب شارەزایی د تەکنۆلۆژیێن نوی دا و حەزەکا مەزن بۆ چارەسەرکرنا پرسگرێکان، ئەز ل ڤێرە مە دا هاریکاریا تە بکەم بۆ سەرکەفتنێ.
        </p>
      </div>
    </section>
  );
};

export default Problem;