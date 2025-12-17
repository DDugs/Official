"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Calendar, Trophy, Rocket, Star, Flag, ChevronDown, Linkedin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { timelineData, TimelineMilestone } from "@/data/timeline";

const icons: Record<string, React.ReactNode> = {
  "2025": <Rocket className="w-5 h-5" />,
  "July": <Flag className="w-5 h-5" />,
  "September": <Trophy className="w-5 h-5" />,
  "December": <Star className="w-5 h-5" />,
  "January": <Calendar className="w-5 h-5" />,
};

interface TimelineCardProps {
  item: TimelineMilestone;
  index: number;
  isLeft: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

function TimelineCard({ item, index, isLeft, isExpanded, onToggle }: TimelineCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          className={`w-12 h-12 rounded-full bg-background flex items-center justify-center timeline-dot ${isExpanded ? 'ring-2 ring-neon-orange ring-offset-2 ring-offset-background' : ''}`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
        >
          <span className="text-neon-orange">{icons[item.year]}</span>
        </motion.div>
      </div>

      {/* Date badge - Desktop only */}
      <div
        className={`hidden md:flex md:w-1/2 ${isLeft ? "justify-end pr-16" : "justify-start pl-16"
          }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? 20 : -20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Badge
            variant="outline"
            className="text-lg py-2 px-6 bg-background text-muted-foreground font-mono"
          >
            {item.year}
          </Badge>
        </motion.div>
      </div>

      {/* Card */}
      <div
        className={`w-full md:w-1/2 pl-20 md:pl-0 ${isLeft ? "md:pl-16" : "md:pr-16"
          }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card
            className={`overflow-hidden border-border bg-card/50 backdrop-blur-sm transition-all duration-300 group cursor-pointer ${isExpanded ? 'border-neon-orange/70 shadow-lg shadow-neon-orange/10' : 'hover:border-neon-orange/50'}`}
            onClick={onToggle}
          >
            <CardContent className="p-6">
              {/* Mobile date badge */}
              <Badge
                variant="outline"
                className="md:hidden mb-4 text-sm py-1 px-3 bg-background border-primary/50 text-primary font-mono"
              >
                {item.year}
              </Badge>

              <div className="flex items-start justify-between gap-2">
                <h3 className="text-2xl font-bold mb-3 group-hover:neon-text transition-all duration-300 font-[family-name:var(--font-cyber)]">
                  {item.title}
                </h3>
                {item.details && item.details.length > 0 && (
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Expandable details */}
              <AnimatePresence>
                {isExpanded && item.details && item.details.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 pt-4 border-t border-border/50 space-y-3">
                      {item.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-orange flex-shrink-0" />
                          <span className="flex-1">{detail.text}</span>
                          {detail.linkedinUrl && (
                            <Link
                              href={detail.linkedinUrl}
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                              className="text-muted-foreground hover:text-neon-orange transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                            </Link>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function VerticalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="journey"
      className="py-24 px-4 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-cyber)]">
            Our Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From humble beginnings to international recognition, trace our path
            through the cybersecurity landscape.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Static background line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border/30 z-0" />

          {/* Animated neon line */}
          <motion.div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 timeline-line-gradient z-10"
            style={{ height: lineHeight }}
          />

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <TimelineCard
              key={index}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
