"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Settings, BarChart3 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const ProgrammeFlipCard = ({ p, index, isMobile, isActive, onCardClick }) => {
  const [hovered, setHovered] = React.useState(false);
  const Icon = p.icon;
  const isFlipped = isMobile ? isActive : hovered;

  return (
    <motion.div
      className={p.colSpan}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      viewport={{ once: true }}
      style={{ perspective: 1400 }}
    >
      {/* Stable hover zone (does NOT rotate) */}
      <div
        className="relative"
        onPointerEnter={
          !isMobile ? () => setHovered(true) : undefined
        }
        onPointerLeave={
          !isMobile ? () => setHovered(false) : undefined
        }
        onClick={
          isMobile && onCardClick ? () => onCardClick(index) : undefined
        }
      >
        <motion.div
          className="relative w-full h-64 md:h-72 lg:h-72"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
            backgroundColor: "transparent",
          }}
        >
          {/* Backing plane to avoid “see-through” looking like a white card */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              transform: "translateZ(-1px)",
              background: "rgba(15, 23, 42, 0.12)", // slate-900/12
            }}
          />

          {/* FRONT */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          >
            <div className="relative w-full h-full">
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

              <div
                className={`absolute right-6 top-1/2 -translate-y-1/2 ${p.badgeClass} text-white px-8 py-4 rounded-md shadow-lg`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-white/95" />
                  <span className="text-2xl font-bold tracking-wide">
                    {p.title}
                  </span>
                </div>
              </div>

              <div className="absolute left-0 right-0 bottom-0 p-5">
                <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                  {p.frontTeaser}
                </p>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(1px)",
            }}
          >
            <div className="w-full h-full bg-slate-100/95 flex flex-col">
              <div className={`${p.badgeClass} px-6 py-4`}>
                <div className="flex items-center gap-3 text-white">
                  <Icon className="w-5 h-5" />
                  <h3 className="text-lg font-bold tracking-wide">{p.title}</h3>
                </div>
              </div>

              <div className="px-6 py-5 flex-1 overflow-hidden">
                {/* scroll if content gets longer */}
                <div className="h-full overflow-y-auto pr-1">
                  {p.backParagraphs.map((t, i) => (
                    <p
                      key={i}
                      className="text-slate-700 text-sm leading-relaxed mb-3"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              {/* Removed Read More button */}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProgrammesSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const updateIsMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 749);
      }
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const programmes = [
    {
      title: "MCA",
      frontTeaser: "This programme rigorously covers industry-relevant topics.",
      backParagraphs: [
        "This programme rigorously covers industry-relevant topics to help students find a job and succeed as entrepreneurs or employees. This programme is based on best practices and industry-relevant skills.",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop&crop=center&q=80",
      icon: Settings,
      badgeClass: "bg-rose-500",
      colSpan: "lg:col-span-3",
    },
    {
      title: "MBA",
      frontTeaser: "Industry and domain specialisations for future leaders.",
      backParagraphs: [
        "The Two-year Online MBA programme exposes students to industry and domain specialisations to match their passions. Our prime objective is to develop future qualified professionals through a comprehensive",
      ],
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=700&fit=crop&crop=center&q=80",
      icon: Users,
      badgeClass: "bg-lime-500",
      colSpan: "lg:col-span-3",
    },
    {
      title: "BBA",
      frontTeaser:
        "Deep knowledge + leadership traits + personality development.",
      backParagraphs: [
        "The online BBA programme by GLA University is woven by industry experts to impart deep knowledge and develop leadership traits among learners. It is a combination of theory, practical knowledge application, and personality development.",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&crop=center&q=80",
      icon: TrendingUp,
      badgeClass: "bg-amber-400",
      colSpan: "lg:col-span-2",
    },
    {
      title: "BCA",
      frontTeaser: "In-demand IT skills for modern tech careers.",
      backParagraphs: [
        "The Online BCA program at GLA University Online equips students with in-demand IT skills, covering programming, cybersecurity, database management, and web development. Designed for flexibility,",
      ],
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=700&fit=crop&crop=center&q=80",
      icon: BarChart3,
      badgeClass: "bg-sky-500",
      colSpan: "lg:col-span-2",
    },
    {
      title: "B.COM",
      frontTeaser: "Industry-relevant commerce topics for a successful career.",
      backParagraphs: [
        "This programme has a rigorous coverage of industry-relevant topics that enable its students to secure a job and ensure that they build a successful career either as an entrepreneur or intrapreneur.",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=700&fit=crop&crop=center&q=80",
      icon: DollarSign,
      badgeClass: "bg-violet-600",
      colSpan: "lg:col-span-2",
    },
  ];

  return (
    <AnimatedSection className="py-10 sm:py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Explore Our <span className="text-emerald-600">Programmes</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose a programme designed to match your career goals and industry
            needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-start">
          {programmes.map((p, index) => (
            <ProgrammeFlipCard
              key={p.title}
              p={p}
              index={index}
              isMobile={isMobile}
              isActive={activeIndex === index}
              onCardClick={(clickedIndex) =>
                setActiveIndex((prev) =>
                  prev === clickedIndex ? null : clickedIndex
                )
              }
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProgrammesSection;
