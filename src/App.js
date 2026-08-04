import { Search, Menu, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChartBarIcon,
  BookmarkIcon,
  FolderOpenIcon,
  CheckIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ArrowRightIcon,
  Square2StackIcon,
} from "@heroicons/react/24/solid";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 0,
    grayStart: '"',
    blackHighlight: "Genuinely the best bread I've spent on a course. ",
    grayEnd:
      'The vids make soo much sense the recaps and indicators are so helpful like I been here 3 days I already have this hit down. Highkey Jenz is the goat im ngl."',
    name: "Dawsane",
    role: "Member",
    img: "/dawsane.png",
  },
  {
    id: 1,
    grayStart:
      "\"Thanks to Jenz's support and the community, I've taken a huge step forward and improved my analysis. ",
    blackHighlight: "Jenz completely changed my perspective on the markets, ",
    grayEnd: 'allowing me to become far more consistent now."',
    name: "Cxrs",
    role: "Member",
    img: "/cxrs.png",
  },
  {
    id: 2,
    grayStart: '"Jenz is ',
    blackHighlight:
      "incredibly humble that he never looks down on others or trolls his students. ",
    grayEnd:
      'He takes the time to answer every single question in detail and makes sure that every concept is clearly understood."',
    name: "Jamie",
    role: "Member",
    img: "/jamie.png",
  },
  {
    id: 3,
    grayStart:
      '"Thanks to Jenz for all the knowledge and all the sauce. Starting to understand the game, he is always helping and answering every question. ',
    blackHighlight: "Been profitable for days in a row thanks to him.",
    grayEnd: '"',
    name: "Luis Aldea",
    role: "Member",
    img: "/luisaldea19.png",
  },
  {
    id: 4,
    grayStart: '"I am making massive progress since I joined here. ',
    blackHighlight:
      "Have been able to get at least 90% of my evaluation accounts passed",
    grayEnd:
      ' because of Jenz and his concepts. He is an absolute mastermind of the markets."',
    name: "Christian",
    role: "Member",
    img: "/christian.png",
  },
  {
    id: 5,
    grayStart:
      '"I used to be lost in trading, just guessing setups. Ever since I joined everything started clicking and ',
    blackHighlight: "I am catching way more wins",
    grayEnd: ' with a strategy that can change my life if I stay locked in."',
    name: "Steezy",
    role: "Member",
    img: "/steezy.png",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-4 md:px-6 flex justify-between items-center text-left cursor-pointer group"
      >
        <span className="text-black text-[14px] md:text-lg font-normal font-['Inter_Tight'] leading-normal pr-10">
          {question}
        </span>

        {/* THE ROTATING ICON WRAPPER */}
        <div
          className={`transform transition-transform duration-500 ease-in-out shrink-0 ${
            isOpen ? "-rotate-45" : "rotate-0"
          }`}
        >
          <AddIcon fontSize="inherit" className="text-black/80 text-[24px]" />
        </div>
      </button>

      {/* THE BULLETPROOF INLINE GRID ANIMATION */}
      <div
        className={`grid transition-all duration-500 ease-in-out bg-white ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-black/60 text-[14px] font-normal font-['Inter_Tight'] leading-normal pb-6 px-4 md:px-6 pr-12">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isCopied, setIsCopied] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);

  const [activePage, setActivePage] = useState("home");
  const navigate = (pageName, urlPath) => {
    window.history.pushState({}, "", urlPath);
    setActivePage(pageName);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();

    if (activePage !== "home") {
      navigate("home", "/");
    }

    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen selection:bg-[#0E78E8] selection:text-white bg-white scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <nav className="bg-[#191A1C] w-full sticky top-0 z-50 border-b border-[#313237] font-['Inter']">
        <div className="max-w-4xl lg:max-w-2xl mx-auto w-full flex justify-between items-center py-2 px-5 lg:px-4 relative">
        <p
          onClick={() => navigate("home", "/")}
          className="text-white text-xl font-['Inter_Tight'] font-semibold tracking-[-1px]"
        >
          executionz
        </p>

        <div className="flex items-center gap-4 text-white">
          <a
            href="#pricing"
            onClick={(e) => {
              e.currentTarget.blur();
              e.preventDefault();
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#313237] md:hover:bg-[#0E78E8] active:bg-[#0E78E8] transition-colors duration-200 px-3.5 py-2 rounded-full text-[12px]"
          >
            Join Now
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-5 h-5 flex items-center justify-center lg:hidden md:hidden cursor-pointer text-white"
          >
            <motion.svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-full h-full"
>
  {/* Top Line: Slides down to middle (y=12) and fades out */}
  <motion.line
    x1="4"
    x2="20"
    animate={{
      y1: isMenuOpen ? 12 : 6,
      y2: isMenuOpen ? 12 : 6,
      opacity: isMenuOpen ? 0 : 1,
    }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  />

  {/* Middle Line: Stays static at y=12 */}
  <motion.line x1="4" x2="20" y1="12" y2="12" />

  {/* Bottom Line: Slides up to middle (y=12) and fades out */}
  <motion.line
    x1="4"
    x2="20"
    animate={{
      y1: isMenuOpen ? 12 : 18,
      y2: isMenuOpen ? 12 : 18,
      opacity: isMenuOpen ? 0 : 1,
    }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  />
</motion.svg>
          </button>
        </div>

        {/* THE DROPDOWN MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[calc(100%+4px)] right-5 bg-[#191A1C] rounded-xl p-2 flex flex-col min-w-[170px]"
            >
              {[
                "Features",
                "Testimonials",
                "Pricing",
                "Mentor",
                "Prop Firms",
                "FAQ",
              ].map((item) => (
                <span
                  key={item}
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (window.location.pathname !== "/") navigate("home", "/");
                    setTimeout(() => {
                      const id =
                        item === "FAQ"
                          ? "faqs"
                          : item.toLowerCase().replace(" ", "-");
                      document
                        .getElementById(id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="text-white px-4 py-2 rounded-xl text-xl font-medium font-['Inter_Tight'] cursor-pointer transition-colors"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
     </nav>

      {activePage === "home" ? (
        <div key="home" className="slide-down-active">
          <section id="home" className="bg-[#101115] scroll-mt-32 w-full pb-24">
            <main className="max-w-4xl lg:max-w-2xl mx-auto px-4 pt-24 font-['Inter_Tight']">
              <h1 className="text-white text-4xl lg:text-6xl font-medium tracking-tight lg:leading-none font-['Inter_Tight']">
                {"The markets aren't "}
                <span className="md:block">random.</span>
              </h1>

              <p className="mt-6 text-white/60 leading-normal text-base lg:text-lg font-normal font-['Inter_Tight']">
                Trade with greater confidence, consistency and conviction.
              </p>

              <div className="mt-6 flex gap-1">
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-3.5 py-2 rounded-full bg-[#0E78E8] text-white text-[12px] lg:px-5.25 lg:py-3 lg:text-sm font-normal font-['Inter']"
                >
                  Get Started
                </a>

                <button className="px-3.5 py-2 rounded-full bg-[#313237] text-white text-[12px] lg:px-5.25 lg:py-3 lg:text-sm font-normal font-['Inter']">
                  Testimonials
                </button>
              </div>

              <img
                src="/hero.png"
                alt="Illustration showing an open position in $1.8k of profit."
                className="w-full h-auto object-cover rounded-2xl mt-12"
              />

              <h1 className="mt-24 text-white text-4xl lg:text-6xl font-medium tracking-tight lg:tracking-none font-['Inter_Tight']">
                Join our free discord.
              </h1>
              <p className="mt-6 text-white/60 leading-normal text-base lg:text-lg font-normal font-['Inter_Tight']">
                Surround yourself with a community of 1,000+ like minded traders.
              </p>

              <button className="px-3.5 py-2 mt-6 lg:px-5.25 lg:py-3 lg:text-sm rounded-full bg-[#0E78E8] text-white text-[12px] font-normal font-['Inter']">
                Join Discord
              </button>
            </main>
          </section>

          <section
            id="features"
            className="w-full max-w-2xl md:max-w-4xl lg:max-w-2xl mx-auto px-4 pt-24 pb-24 font-['Inter_Tight']"
          >
            <h1 className="text-black text-4xl lg:text-6xl font-medium tracking-tight font-['Inter_Tight']">
              Where serious growth happens.
            </h1>

            <p className="mt-6 text-black/60 leading-normal text-base lg:text-lg font-normal font-['Inter_Tight']">
              We don't copy signals, We train you to see as clear as we do.
            </p>

            <div className="mt-12 flex items-center gap-2">
              <div className="w-3 h-3 rounded-[4px] bg-[#0E78E8]"></div>
              <span className="text-[#0E78E8] text-base lg:text-lg font-normal font-['Inter_Tight']">
                Trading Model
              </span>
            </div>

            <p className="mt-3 text-black/60 leading-normal text-base lg:text-lg font-normal font-['Inter_Tight']">
              Learn the complete framework I've developed and refined through
              real market conditions.
            </p>

            <div className="mt-12 flex items-center gap-2">
              <div className="w-3 h-3 rounded-[4px] bg-[#0E78E8]"></div>
              <span className="text-[#0E78E8] text-base lg:text-lg font-normal font-['Inter_Tight']">
                Community
              </span>
            </div>

            <p className="mt-3 text-black/60 leading-normal text-base lg:text-lg font-normal font-['Inter_Tight']">
              Connect with other traders using the same strategy, share
              insights, and stay sharp.
            </p>

            <div className="mt-12 flex items-center gap-2">
              <div className="w-3 h-3 rounded-[4px] bg-[#0E78E8]"></div>
              <span className="text-[#0E78E8] text-base lg:text-lg font-normal font-['Inter_Tight']">
                Education
              </span>
            </div>

            <p className="mt-3 text-black/60 leading-normal text-base lg:text-lg font-normal font-['Inter_Tight']">
              See exactly what works via trade recaps, strategy documentation
              and analysis posts.
            </p>

            <div className="mt-12 flex items-center gap-2">
              <div className="w-3 h-3 rounded-[4px] bg-[#0E78E8]"></div>
              <span className="text-[#0E78E8] text-base lg:text-lg font-normal font-['Inter_Tight']">
                Indicators
              </span>
            </div>

            <p className="mt-3 text-black/60 leading-normal text-base lg:text-lg font-normal font-['Inter_Tight']">
              Get access to the technical tools I actually use to identify
              high-probability setups.
            </p>

            <h1 className="mt-24 text-black text-4xl lg:text-6xl font-medium font-['Inter_Tight'] tracking-tight">
              Extensive recorded content library.
            </h1>

            <p className="mt-6 text-black/60 leading-normal text-base lg:text-lg font-normal font-['Inter_Tight']">
              Clear, detailed guides on how to implement and execute the
              strategy yourself.
            </p>

            <div className="mt-12 w-full grid grid-cols-2 gap-2 md:gap-6">
              <div className="p-4 border border-black/10 rounded-2xl bg-white">
                <BookmarkIcon className="w-4 h-4 text-[#0E78E8] mb-5" />
                <p className="text-black/70 text-[12px] lg:text-lg leading-normal font-normal text-left font-['Inter_Tight']">
                  Learn foundational basics to understand the markets and start
                  trading with clarity.
                </p>
              </div>

              <div className="p-4 border border-black/10 rounded-2xl bg-white">
                <FolderOpenIcon className="w-4 h-4 text-[#0E78E8] mb-5" />
                <p className="text-black/70 text-[12px] lg:text-lg leading-normal font-normal text-left font-['Inter_Tight']">
                  Watch visual tutorials to map out your charts and spot perfect
                  setups all by yourself.
                </p>
              </div>

              <div className="p-4 border border-black/10 rounded-2xl bg-white">
                <ChartBarIcon className="w-4 h-4 text-[#0E78E8] mb-5" />
                <p className="text-black/70 text-[12px] lg:text-lg leading-normal font-normal font-['Inter_Tight'] text-left">
                  Learn straightforward math to cap your losses small and let
                  your winning trades grow.
                </p>
              </div>

              <div className="p-4 border border-black/10 rounded-2xl bg-white">
                <LightBulbIcon className="w-4 h-4 text-[#0E78E8] mb-5" />
                <p className="text-black/70 text-[12px] lg:text-lg leading-normal font-normal font-['Inter_Tight'] text-left">
                  Learn to have a rock solid mindset to ignore the noise and
                  execute with confidence.
                </p>
              </div>
            </div>

            <h1
              id="testimonials"
              className="mt-24 scroll-mt-32 text-black text-4xl lg:text-6xl font-medium font-['Inter_Tight'] tracking-tight"
            >
              This is what winning looks like.
            </h1>
            <p className="mt-6 text-black/60 leading-normal font-normal font-['Inter_Tight'] text-base lg:text-lg">
              Real feedback from traders who actually put in the work.
            </p>

            {/* TESTIMONIAL CAROUSEL */}
            <div className="mt-24 w-full max-w-4xl mx-auto">
              {/* Progress Bars */}
              <div className="flex items-center gap-1 mb-8 px-1 md:px-0">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 w-5 rounded-full transition-colors duration-500 ${
                      activeSlide === index ? "bg-[#0E78E8]" : "bg-black/10"
                    }`}
                  ></div>
                ))}
              </div>

              {/* Text & Profile Container */}
              <div className="relative min-h-[300px] px-4 md:px-0 font-['Inter_Tight']">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute top-0 left-0 w-full transition-opacity duration-700 ${
                      activeSlide === index
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    {/* Quote */}
                    <p className="pr-10 text-xl md:text-2xl lg:text-3xl text-black/40 font-medium leading-[1.3] lg:leading-[1.4] tracking-tight mb-8">
                      {testimonial.grayStart}
                      <span className="text-black">
                        {testimonial.blackHighlight}
                      </span>
                      {testimonial.grayEnd}
                    </p>

                    {/* User Info */}
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={testimonial.img}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-black font-medium font-['Inter_Tight'] text-[14px]">
                          {testimonial.name}
                        </p>
                        <p className="text-black/50 font-['Inter_Tight'] text-[12px]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 w-full max-w-3xl mx-auto flex flex-col gap-2 md:px-0">
                <img 
                  src="/dg.jpg"
                  alt="testimonial image"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <img
                  src="/steezypayout.jpg"
                  alt="testimonial image"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <img
                  src="/icywin.jpg"
                  alt="testimonial image"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <img
                  src="/steezypnl.jpg"
                  alt="testimonial image"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <img
                  src="/icywin2.jpg"
                  alt="testimonial image"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <img
                  src="/jamie.jpg"
                  alt="testimonial image"
                  className="w-full h-auto rounded-xl object-cover"
                />
                <img
                  src="/benrhaywin2.jpg"
                  alt="testimonial image"
                  className="w-full h-auto rounded-xl object-cover"
                />
            </div>
          </section>

          <section
            id="pricing"
            className="bg-[#101115] w-full py-24 font-['Inter_Tight']"
          >
            <div className="max-w-5xl mx-auto px-4">
              <h1 className="text-white text-4xl font-medium tracking-tight font-['Inter_Tight']">
                The best money you will spend.
              </h1>

              <p className="mt-6 text-white/60 leading-normal font-normal font-['Inter_Tight'] text-base">
                No upsells, no hidden fees, just pure value from day one.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col gap-2">
                  <div className="p-4 md:p-8 border border-white/10 rounded-2xl bg-[#101115]">
                    <h1 className="text-xl font-medium font-['Inter_Tight'] mb-6 text-white">
                      Executionz Trading
                    </h1>
                    <p className="text-[14px] font-normal font-['Inter_Tight'] text-white/60 leading-relaxed mb-6">
                      Start your path to consistent trading and gain hands-on
                      experience.
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl text-white font-semibold font-['Inter_Tight'] tracking-tight">
                        $150
                      </span>
                      <span className="text-white/50 text-[15px]">/month</span>
                    </div>
                  </div>

                  <div className="pt-4 pr-4 pl-4 pb-8 md:p-8 flex-1 border rounded-2xl border-white/10">
                    <h1 className="text-lg font-medium font-['Inter_Tight'] mb-6 text-white">
                      Main benefits:
                    </h1>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-[#0E78E8] shrink-0 mt-0.5" />
                        <span className="text-white/80 text-[14px] font-normal font-['Inter_Tight']">
                          The Strategy I personally use
                        </span>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-[#0E78E8] shrink-0 mt-0.5" />
                        <span className="text-white/80 text-[14px] font-normal font-['Inter_Tight']">
                          10+ hours of recorded study content on my trading model
                        </span>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-[#0E78E8] shrink-0 mt-0.5" />
                        <span className="text-white/80 text-[14px] font-normal font-['Inter_Tight']">
                          Access to all the custom indicators I use every single day
                        </span>
                      </div>

                      <div className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-[#0E78E8] shrink-0 mt-0.5" />
                        <span className="text-white/80 text-[14px] font-normal font-['Inter_Tight']">
                          Detailed written study guide covering my complete trading style
                        </span>
                      </div>

                      <hr className="border-white/10 my-4" />

                      <div className="flex flex-col gap-4">
                        <p className="text-lg text-white font-medium font-['Inter_Tight']">
                          Other features:
                        </p>
                        <div className="flex items-start gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-[#0E78E8] shrink-0 mt-0.5" />
                          <span className="text-white/80 text-[14px] font-normal font-['Inter_Tight']">
                            Tightly knit community to hold you accountable
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-0 md:p-8">
                    <a
                      href="https://whop.com/executionz-strategy"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center rounded-2xl justify-center w-full pt-4 pb-4 pl-3 pr-3 md:p-8 bg-[#0E78E8] hover:bg-[#313237] transition-colors duration-300 text-white cursor-pointer group [box-shadow:inset_0px_0px_24px_rgba(255,255,255,0.35)]"
                    >
                      <span className="text-lg font-medium font-['Inter_Tight']">
                        Join Executionz
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="mentor"
            className="bg-white w-full py-24 text-black font-['Inter_Tight']"
          >
            <div className="max-w-5xl mx-auto px-4">
              <h1 className="text-black text-4xl font-medium font-['Inter_Tight'] tracking-tight">
                Who you are learning from.
              </h1>

              <p className="text-base text-black/60 font-normal font-['Inter_Tight'] leading-normal mt-6">
                Your blueprint to consistency, built by someone who actually
                walked the path.
              </p>

              <img src="/jenz.jpg"
                alt="Jenz"
                className="w-full h-auto object-cover rounded-2xl mt-12"
              />

              <div className="flex flex-col items-center mt-3 w-full text-center">
                <h1 className="text-black text-xl font-medium font-['Inter_Tight']">
                  Jenz
                </h1>

                <div className="flex flex-col items-center gap-1 mt-2">
                  <span className="px-3 py-1.5 rounded-full border border-black/10 text-black/60 text-[12px] font-normal font-['Inter_Tight']">
                    Trader for 3+ years
                  </span>

                  <span className="px-3 py-1.5 rounded-full border border-black/10 text-black/60 text-[12px] font-normal font-['Inter_Tight']">
                    Trading Educator for 1+ years
                  </span>
                </div>
              </div>

              <div className="mt-12 px-0 md:px-10 text-left">
                <div className="border border-black/10 rounded-2xl pr-6 pl-6 pb-6 pt-8 md:p-8 text-left bg-white shadow-sm">
                  <p className="text-black text-xl font-medium font-['Inter_Tight']">
                    I'm Jenz,
                  </p>

                  <p className="mt-8 text-black/60 text-lg font-normal font-['Inter_Tight'] leading-normal">
                    After graduating university with a double masters degree in
                    engineering and living the corporate life, I realized that
                    life wasn't for me and I wanted freedom. After years of
                    painful lessons handed to me from the market, I cracked the
                    code and I achieved everything I set out to accomplish. I've
                    now made over 7 figures trading and my passion stems from
                    teaching others how to do the exact same.
                  </p>

                  <p className="mt-8 text-black text-lg font-medium font-['Inter_Tight'] leading-normal">
                    My students have now extracted over 8 figures from the
                    markets using the same systems we teach in Executionz, built
                    on a repeatable logic.
                  </p>
                </div>
              </div>

              <h1
                id="faqs"
                className="text-black mt-24 scroll-mt-32 text-4xl font-medium font-['Inter_Tight'] tracking-tight"
              >
                Questions? Anyone?
              </h1>

              <p className="text-black/60 mt-6 text-base font-normal font-['Inter_Tight'] leading-normal">
                Find answers to frequently asked questions.
              </p>

              <div className="mt-12 w-full max-w-3xl mx-auto border rounded-2xl overflow-hidden border-black/10">
                <FAQItem
                  question="What level of trading experience is required to join?"
                  answer="Traders of all experience levels are welcome to join. The material is structured to be clear for newer traders while remaining precise enough for experienced participants. You also have direct access to mentors and instructors to guide you through questions as you develop."
                />

                <FAQItem
                  question="How much time per day is needed to make progress?"
                  answer="You can study and test at your own pace. The recorded content is always available, meaning you can fit it around a 9-5 job or school schedule."
                />

                <FAQItem
                  question="How frequent is the guidance within the community?"
                  answer="We host multiple livestreams every week and mentors are active daily inside the Discord to answer specific chart questions."
                />

                <FAQItem
                  question="What markets does Executionz focus on?"
                  answer="Our model is applicable to any market but we heavily emphasize the indices and commodities markets."
                />

                <FAQItem
                  question="Do you offer refunds?"
                  answer="No. All sales are final, and we do not offer refunds."
                />

                <FAQItem
                  question="I still have some questions"
                  answer={
                    <>
                      You can ask your remaining questions directly to Jenz in
                      our{" "}
                      <a
                        href="https://discord.gg/8GxtDnQymK"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 decoration-[#0E78E8] hover:decoration-[#0E78E8] text-[#0E78E8] transition-colors duration-200"
                      >
                        discord server
                      </a>
                    </>
                  }
                />
              </div>

              <h1
                id="prop-firms"
                className="mt-24 scroll-mt-32 text-black text-4xl font-['Inter_Tight'] font-medium tracking-tight"
              >
                Get the best discount with code "JENZ".
              </h1>

              <p className="mt-6 text-black/60 text-base font-['Inter_Tight'] font-normal leading-normal">
                Get the best available deals with the most trusted prop firms.
              </p>

              <div className="border mt-12 border-black/10 rounded-2xl p-3 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src="/tradeify.png"
                      alt="Tradeify"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h1 className="text-black text-lg font-medium font-['Inter_Tight']">
                      Tradeify
                    </h1>

                    <div className="w-fit bg-black/5 text-black/70 px-2 py-1 rounded-full text-[12px] font-normal font-['Inter_Tight']">
                      Trusted Futures Firm
                    </div>
                  </div>
                </div>

                <div className="w-full py-8 mt-6 flex flex-col items-center justify-center border border-black/10 rounded-2xl bg-white">
                  <h1 className="text-black text-3xl md:text-4xl font-semibold font-['Inter_Tight'] tracking-tight leading-none">
                    35% OFF
                  </h1>

                  <span className="text-black/60 text-[12px] font-normal font-['Inter_Tight'] mt-2">
                    All accounts
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <button
                    onClick={() => {
                      setIsCopied(true);
                      navigator.clipboard.writeText("JENZ");
                      setTimeout(() => setIsCopied(false), 1000);
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 md:py-4 border-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
                      isCopied
                        ? "border-solid border-[#0E78E8] bg-[#0E78E8] text-white"
                        : "border-dashed border-[#0E78E8] bg-transparent"
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <span className="text-[16px] font-medium font-['Inter_Tight']">
                          Copied
                        </span>
                        <CheckIcon className="w-[16px] h-[16px]" />
                      </>
                    ) : (
                      <>
                        <span className="text-black/60 text-[14px] font-normal font-['Inter_Tight']">
                          code
                        </span>
                        <span className="text-black text-base font-medium font-['Inter_Tight']">
                          JENZ
                        </span>
                        <Square2StackIcon className="w-[18px] h-[18px] ml-1 text-black" />
                      </>
                    )}
                  </button>

                  <a
                    href="https://tradeify.com"
                    className="flex-1 flex items-center justify-center py-2 md:py-4 bg-black/5 text-black/70 border-2 border-[#F2F4F5] rounded-full font-normal text-base font-['Inter_Tight']"
                  >
                    Visit
                  </a>
                </div>
              </div>

              <div className="border mt-4 border-black/10 rounded-2xl p-3 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[#EBEEED] rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src="/lucid.png"
                      alt="Lucid Trading"
                      className="w-full h-full object-contain p-1"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h1 className="text-black text-lg font-medium font-['Inter_Tight']">
                      Lucid Trading
                    </h1>

                    <div className="w-fit bg-black/5 text-black/70 px-2 py-1 rounded-full text-[12px] font-normal font-['Inter_Tight']">
                      Trusted Futures Firm
                    </div>
                  </div>
                </div>

                <div className="w-full py-8 mt-6 flex flex-col items-center justify-center border border-black/10 rounded-2xl bg-white">
                  <h1 className="text-black text-3xl md:text-4xl font-semibold font-['Inter_Tight'] tracking-tight leading-none">
                    50% OFF
                  </h1>

                  <span className="text-black/60 text-[12px] font-normal font-['Inter_Tight'] mt-2">
                    Pro accounts
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <button
                    onClick={() => {
                      setIsCopied2(true);
                      navigator.clipboard.writeText("JENZ");
                      setTimeout(() => setIsCopied2(false), 1000);
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 md:py-4 border-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
                      isCopied2
                        ? "border-solid border-[#0E78E8] bg-[#0E78E8] text-white"
                        : "border-dashed border-[#0E78E8] bg-transparent"
                    }`}
                  >
                    {isCopied2 ? (
                      <>
                        <span className="text-[16px] font-medium font-['Inter_Tight']">
                          Copied
                        </span>
                        <CheckIcon className="w-[16px] h-[16px]" />
                      </>
                    ) : (
                      <>
                        <span className="text-black/60 text-[14px] font-normal font-['Inter_Tight']">
                          code
                        </span>
                        <span className="text-black text-base font-medium font-['Inter_Tight']">
                          JENZ
                        </span>
                        <Square2StackIcon className="w-[18px] h-[18px] ml-1 text-black" />
                      </>
                    )}
                  </button>

                  <a
                    href="https://lucidtrading.com"
                    className="flex-1 flex items-center justify-center py-2 md:py-4 bg-black/5 text-black/70 border-2 border-[#F2F4F5] rounded-full font-normal text-base font-['Inter_Tight']"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div
          key="disclaimer"
          className="slide-up-active w-full bg-white text-black pt-24 pb-24 px-4 min-h-[60vh] font-['Inter_Tight'] flex justify-center"
        >
          <div className="max-w-3xl flex flex-col gap-6">
            <h1 className="text-black text-4xl font-medium font-['Inter_Tight'] tracking-tight">
              Risk Disclosure Statement for Futures, Forex and Options.
            </h1>
            <p className="text-black/60 text-base font-normal font-['Inter_Tight'] leading-normal mt-6">
              This brief statement does not disclose all of the risks and other
              significant aspects of trading in futures, crypto, forex, and
              options. In light of the risks, you should undertake such
              transactions only if you understand the nature of the contracts
              (and contractual relationships) into which you are entering and
              the extent of your exposure to risk. Trading in futures, crypto,
              forex, and options is not suitable for many members of the public.
              You should carefully consider whether trading is appropriate for
              you in light of your experience, objectives, financial resources,
              and other relevant circumstances.
            </p>

            <h1 className="mt-6 text-black text-3xl font-medium font-['Inter_Tight'] tracking-tight">
              Futures
            </h1>
            <h1 className="mt-2 text-black text-2xl font-medium font-['Inter_Tight'] tracking tight">
              Effect of leveraging or gearing
            </h1>
            <p className="mt-2 text-black/60 text-base font-normal font-['Inter_Tight'] leading-normal">
              Trading futures involves extreme financial risk. Because the
              upfront capital required is small compared to the total value of
              the contract, your trades are heavily "leveraged" or "geared."
              Consequently, minor price fluctuations can trigger a massive
              percentage impact on your trading balance, moving aggressively
              either in your favor or to your severe detriment. You face the
              very real possibility of completely wiping out your initial margin
              along with any extra capital added to sustain your open positions.
              If prices turn against you or required margin limits spike, you
              can be forced to deposit significant extra cash on urgent notice
              to keep your trades active. Failing to meet these urgent margin
              calls in time will trigger an automatic liquidation of your
              positions at a loss, leaving you legally responsible for paying
              off any remaining deficit.
            </p>
            <h1 className="text-black text-2xl mt-2 font-medium font-['Inter_Tight'] tracking-tight">
              Risk-reducing orders or strategies
            </h1>
            <p className="text-black/60 text-base mt-2 font-normal font-['Inter_Tight'] leading-normal">
              Setting specific protective orders like "stop-loss" or
              "stop-limit" boundaries, to cap your financial downside might fail
              during extreme market volatility, as sudden gaps can make
              executing those fills entirely impossible. Furthermore, executing
              advanced multi-leg strategies, such as complex "spreads" or
              "straddles," can carry just as much capital risk as holding
              standard, unidirectional long or short positions.
            </p>

            <h1 className="mt-6 text-black text-3xl font-medium font-['Inter_Tight'] tracking-tight">
              Forex
            </h1>
            <h1 className="mt-2 text-black text-2xl font-medium font-['Inter_Tight'] tracking-tight">
              Marginal or borrowed risk
            </h1>
            <p className="mt-2 text-black/60 text-base font-normal font-['Inter_Tight'] leading-normal">
              Engaging in retail forex trading using leverage involves
              substantial exposure and is not appropriate for every market
              participant. Extreme capital gearing can accelerate your financial
              losses just as quickly as it can amplify your gains. Prior to
              deploying any funds into currency markets, you must thoroughly
              evaluate your personal trading goals, practical experience, and
              threshold for risk. You face a realistic probability of losing a
              portion or the entirety of your starting capital; consequently,
              you must never risk money you cannot afford to lose. Ensure you
              fully comprehend all dangers bound to currency fluctuations or
              consult a certified advisor.
            </p>

            <h1 className="mt-6 text-black text-3xl font-medium font-['Inter_Tight'] tracking-tight">
              Options
            </h1>
            <h1 className="mt-2 text-black text-2xl font-medium font-['Inter_Tight'] tracking-tight">
              Variable degree of risk
            </h1>
            <p className="mt-2 text-black/60 text-base font-normal font-['Inter_Tight'] leading-normal">
              Trading derivatives like options involves substantial exposure.
              Both buyers and writers of these contracts must thoroughly
              understand the exact mechanics of puts and calls alongside their
              specific hazards. You must carefully determine how far the
              underlying asset needs to move for your trade to achieve
              profitability, factoring in the upfront premium paid as well as
              all associated trading fees.
            </p>
          </div>
        </div>
      )}

      <section className="w-full pt-6 pb-6 bg-white font-['Inter_Tight']">
        <div className="max-w-5xl mx-auto px-2 md:px-6">
          <div className="w-full bg-[#101115] rounded-2xl pl-5 pr-10 pb-10 py-20 md:py-28 flex flex-col items-start justify-center relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0E78E8]/30 to-transparent pointer-events-none"></div>
            <h1 className="text-white text-3xl text-left font-medium font-['Inter_Tight'] tracking-tight">
              The market moves with or without you.
            </h1>

            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#0E78E8] text-white mt-6 hover:bg-[#0E78E8] transition-colors duration-200 px-3.5 py-2 rounded-full font-['Inter'] text-[12px]"
            >
              Start Learning
            </a>

            <div className="w-full mt-12 md:mt-32 grid grid-cols-2 md:grid-cols-3 gap-12">
              {/* Column 1: Page Navigation */}
              <div className="flex flex-col gap-5">
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "home")}
                  className="text-white/60 text-[16px] font-normal font-['Inter_Tight'] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, "features")}
                  className="text-white/60 text-[16px] font-normal font-['Inter_Tight'] transition-colors"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  onClick={(e) => scrollToSection(e, "testimonials")}
                  className="text-white/60 text-[16px] font-normal font-['Inter_Tight'] transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, "pricing")}
                  className="text-white/60 text-[16px] font-normal font-['Inter_Tight'] transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#faqs"
                  onClick={(e) => scrollToSection(e, "faqs")}
                  className="text-white/60 text-[16px] font-normal font-['Inter_Tight'] transition-colors"
                >
                  FAQs
                </a>
              </div>

              {/* Column 3: Socials (Forced to the right on desktop) */}
              <div className="flex flex-col gap-5 md:col-start-3">
                <a
                  href="#"
                  className="text-white/60 text-[16px] font-normal font-['Inter_Tight'] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-white/60 text-[16px] font-normal font-['Inter_Tight'] transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-white/60 text-[16px] font-normal font-['Inter_Tight'] transition-colors"
                >
                  Discord
                </a>
              </div>
            </div>

            <div className="w-full border-t border-dashed border-white/30 mt-10"></div>
            <p className="mt-10 text-white/60 text-[16px] font-normal font-['Inter_Tight'] leading-normal">
              Futures and forex trading contains substantial risk and is not for
              every investor. An investor could potentially lose all or more
              than the initial investment. Risk capital is money that can be
              lost without jeopardizing ones financial security or life style.
              Only risk capital should be used for trading and only those with
              sufficient risk capital should consider trading. Testimonials
              appearing on this website may not be representative of other
              clients or customers and are not a guarantee of future performance
              or success. Past performance is not necessarily indicative of
              future results.
            </p>
            <p
              onClick={() => navigate("disclaimer", "/disclaimer")}
              className="mt text-[#0E78E8] text-base font-normal font-['Inter_Tight'] underline underline-offset-2 decoration-[#0E78E8]"
            >
              View full disclaimer
            </p>
          </div>
        </div>
        <div className="w-full mt-6 flex flex-col items-center justify-center gap-1.5 text-black/60 text-[16px] font-normal font-['Inter_Tight']">
          <span>
            ©2026 Executionz. All rights reserved.{" "}
            <span className="text-black/80 md:ml-1">•</span>
          </span>
          <span>
            Designed by{" "}
            <a href="#" className="text-[#0E78E8] cursor-pointer">
              Mayank
            </a>
          </span>
        </div>
      </section>
    </div>
  );
}
