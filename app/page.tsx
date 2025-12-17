"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Target,
  Award,
  Users,
  Trophy,
  Globe,
  Star,
  Zap,
  Github,
  Linkedin,
  Mail,
  GlobeIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import VerticalTimeline from "@/components/Timeline";
import TeamSection from "@/components/TeamSection";
import FireSparks from "@/components/FireSparks";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Achievements data
const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "CTF Victories",
    value: "50+",
    description: "Captured flags worldwide",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Rank",
    value: "Top 5",
    description: "International competitions",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Members",
    value: "100+",
    description: "Active hackers",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Events Hosted",
    value: "20+",
    description: "Workshops & CTFs",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden fire-cursor">
      <FireSparks />
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider font-[family-name:var(--font-cyber)]">
              FLAGZ ON FIR3
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-mono">
              0wned. Exploited. Deleted.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="neon" size="lg" asChild>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScATOTxpLFIp_xN6Glr9kqWgBo5xkxXPEaV7vvXGO_pS3yZMA/viewform?usp=dialog" target="_blank">
                  Join The Team
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-cyber)]"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                About Us
              </motion.h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                It all ignited in June 2025—pure self-motivation, no shortcuts. In just months, FLAGZ 0N FIR3 has stormed into the Top 20 teams in India, burning through 50+ CTFs and counting. Our mission is clear: represent India on the global cybersecurity charts, dominate the battlefield, and leave no footprints behind.
                <br />
                <br />
                We’re here to find skilled minds, learn relentlessly, and outplay the best—together. If you thrive under pressure, love breaking limits, and want to set the scoreboard ablaze…
                <br />
                <br />
                Join us. Burn the flag. Leave only fire.🔥
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-neon-orange mt-1" />
                  <div>
                    <h3>Mission</h3>
                    <p className="text-muted-foreground text-sm">
                      Explore cutting-edge security methodologies and build
                      practical expertise.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-neon-orange mt-1" />
                  <div>
                    <h3>What We Do</h3>
                    <p className="text-muted-foreground text-sm">
                      CTF competitions, security research, workshops, and
                      mentorship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom GIF - place your GIF at public/images/about.gif */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <div className="w-4/5 aspect-[3/3] rounded-xl overflow-hidden border-2 border-neon-orange/30 bg-card/30">
                <img
                  src="/images/about.gif"
                  alt="About animation"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <VerticalTimeline />

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-cyber)]">
              Achievements & Recognition
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our track record of excellence in cybersecurity competitions and
              initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-border hover:border-neon-orange/50 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-neon-orange mb-4 flex justify-center">
                      {achievement.icon}
                    </div>
                    <h3 className="text-4xl font-bold text-neon-orange mb-2">
                      {achievement.value}
                    </h3>
                    <p className="font-semibold mb-1">{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <footer className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="/foflogo.png"
              alt="FLAGZONFIR3 Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold font-[family-name:var(--font-cyber)]">
              FLAGZ 0N FIR3
            </span>

          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Represent India globally. Dominate. Leave no footprints.
          </p>
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-4">
            <Link
              href="https://www.linkedin.com/company/fl4gz0nf1r3"
              target="_blank"
              className="text-muted-foreground hover:text-neon-orange transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:flags0nfirectf@gmail.com"
              target="_blank"
              className="text-muted-foreground hover:text-neon-orange transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://flagzonfire.xyz/"
              target="_blank"
              className="text-muted-foreground hover:text-neon-orange transition-colors"
            >
              <GlobeIcon className="w-5 h-5" />
            </Link>

          </div>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Flagz 0n Fir3. All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-3 mt-4">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground text-xs hover:text-neon-orange transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
