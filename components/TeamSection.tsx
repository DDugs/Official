"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Users, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Team data - edit this array to add/modify team members
// Add 'image' field with path like "/images/team/name.jpg" for member photos
export const teamMembers = [
  {
    name: "Dhruv Vishesh Gupta",
    role: "Founder",
    specialty: "Reverse Engineering",
    nickname: "dugs",
    github: "https://github.com/ddugs",
    linkedin: "https://linkedin.com/in/ddugs",
    image: "/images/team/dhruv.jpg"
  },
  {
    name: "Parv Bajaj",
    role: "Vice Lead",
    specialty: "Web Exploitation",
    nickname: "r00tp4rv",
    github: "https://github.com/parvbajaj",
    linkedin: "https://www.linkedin.com/in/parvbajaj/",
    image: ""
  },
  {
    name: "Gurpreet Singh",
    role: "Lead",
    specialty: "Forensics",
    nickname: "3v1l@D3v1l",
    github: "https://github.com/gurpreet",
    linkedin: "https://www.linkedin.com/in/gurupreet-singh-342978266/",
    image: ""
  },
  {
    name: "Arjun Kumar",
    role: "Lead",
    specialty: "Web Exploitation",
    nickname: "perman",
    github: "https://github.com/emmawi",
    linkedin: "https://www.linkedin.com/in/arjunkumar7/",
    image: ""
  },
  {
    name: "Abihimanyu V",
    role: "Lead",
    specialty: "Web Exploitation",
    nickname: "bobby_smiles",
    github: "https://github.com/emmawilson",
    linkedin: "https://www.linkedin.com/in/abihimanyu-v-344b4b34a/",
    image: ""
  },
  {
    name: "Ayush Hande",
    role: "Core Member",
    specialty: "Cryptography",
    nickname: "terminalord",
    github: "https://github.com/emmawilson",
    linkedin: "https://www.linkedin.com/in/ayushhande/",
    image: ""
  },
  {
    name: "Anonymous",
    role: "Core Member",
    specialty: "Forensics",
    nickname: "pr0nt0",
    github: "https://github.com/emmawilson",
    linkedin: "https://linkedin.com/in/emmawilson",
    image: ""
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-cyber)]">
            Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the brilliant minds behind Cryptonite&apos;s success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 text-center">
                  {/* Avatar - shows image if provided, otherwise icon */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center border-2 border-neon-orange/30 transition-colors overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Users className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-neon-orange mb-1">{member.name}</h3>
                  <Badge
                    variant="outline"
                    className="mb-2 border-neon-orange/50 text-white"
                  >
                    {member.role}
                  </Badge>
                  {/* Nickname in curly brackets - shows on hover */}
                  <p className="text-lg font-mono text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {`{${member.nickname}}`}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.specialty}
                  </p>
                  {/* Social Links */}
                  <div className="flex justify-center gap-4 pt-2 border-t border-border/50">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      className="text-muted-foreground hover:text-neon-orange transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                      href={member.github}
                      target="_blank"
                      className="text-muted-foreground hover:text-neon-orange transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
