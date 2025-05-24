"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import SectionTitle from "@/components/SectionTitle";

const techCategories = [
  {
    name: "Frontend",
    skills: [
      {
        name: "HTML",
        level: 85,
        logo: "/icons/html_logo.png",
        topics: ["Semantic Tags", "Forms", "Accessibility", "SEO Basics"],
        mastered: [
          "Semantic HTML5 Structure",
          "Form Elements and Validation",
          "Embedding Media (Audio/Video)",
          "Tables and Lists",
          "Meta Tags and SEO",
          "Alt Attributes for Accessibility",
          "HTML APIs (Canvas, Audio)",
          "Document Structure and Nesting",
          "Forms with POST/GET",
          "Using iframes and embed tags",
        ],
      },
      {
        name: "CSS",
        level: 80,
        logo: "/icons/css_logo.png",
        topics: ["Selectors", "Flexbox", "Grid", "Animations"],
        mastered: [
          "Selectors and Specificity",
          "Box Model Understanding",
          "Responsive Layouts with Flexbox",
          "Grid Layouts",
          "Media Queries",
          "Custom Properties (CSS Variables)",
          "Transitions and Keyframe Animations",
          "Positioning Elements",
          "Z-index and Layering",
          "Styling Forms and Buttons",
        ],
      },
      {
        name: "JavaScript",
        level: 75,
        logo: "/icons/javascript.png",
        topics: ["DOM Manipulation", "ES6+", "Events", "APIs"],
        mastered: [
          "Variables and Data Types",
          "Functions and Scope",
          "DOM Selection and Events",
          "Loops and Conditionals",
          "Array and Object Manipulation",
          "Basic Fetch API Usage",
          "ES6 Features (let, const, arrow functions, destructuring)",
          "Local Storage",
          "Basic Form Validation",
          "Error Handling (try/catch)",
        ],
      },
    ],
  },
  {
    name: "Programming & Scripting",
    skills: [
      {
        name: "Python",
        level: 70,
        logo: "/icons/python.png",
        topics: ["Data Types", "Control Flow", "Functions", "File Handling"],
        mastered: [
          "Basic Syntax and Indentation",
          "Data Types and Variables",
          "Control Flow (if/else, loops)",
          "Functions and Modules",
          "File Input/Output",
          "Lists, Tuples, Dictionaries",
          "Exception Handling",
          "Basic Data Structures",
          "Working with Libraries (e.g., math, datetime)",
          "Intro to OOP",
        ],
      },
    ],
  },
  {
    name: "Tools & Productivity",
    skills: [
      {
        name: "Git & GitHub",
        level: 80,
        logo: "/icons/git.png",
        topics: ["Version Control", "Commits", "Push/Pull", "Collaboration"],
        mastered: [
          "Basic Git Commands (init, add, commit, push, pull)",
          "Using GitHub Repositories",
          "Branching and Merging",
          "Cloning and Forking Projects",
          "Creating Pull Requests",
          "Working in Teams",
          "Managing Readme and Docs",
          "Resolving Merge Conflicts (Intro)",
          "GitHub Pages for Hosting",
          "Basic CI/CD Setup",
        ],
      },
      {
        name: "Microsoft Excel",
        level: 90,
        logo: "/icons/excel.png",
        topics: ["Formulas", "Pivot Tables", "Charts", "Data Cleaning"],
        mastered: [
          "Advanced Excel Formulas",
          "Conditional Formatting",
          "Data Sorting & Filtering",
          "Pivot Tables and Charts",
          "VLOOKUP & INDEX-MATCH",
          "Data Validation",
          "Macros (Intro)",
          "Excel Dashboarding (Basic)",
          "What-If Analysis",
          "Shortcut Proficiency",
        ],
      },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      {
        name: "Workplace Skills",
        level: 95,
        logo: "/icons/team.png",
        topics: ["Team Collaboration", "Time Management", "Problem Solving", "Communication"],
        mastered: [
          "Effective Team Collaboration",
          "Meeting Deadlines",
          "Clear Written and Verbal Communication",
          "Adaptability in Fast-Paced Environments",
          "Self-Motivation and Initiative",
          "Task Prioritization",
          "Conflict Resolution Basics",
          "Feedback Reception",
          "Multitasking",
          "Professional Email Communication",
        ],
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 0.8, ease: "easeOut" },
  }),
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full py-20 px-4 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Tech Stack</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: catIndex * 0.2,
                  },
                },
              }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={cardVariants} whileHover="hover" className="group">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="cursor-pointer">
                          <div className="flex items-center justify-between mb-1">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
                                  <div className="flex items-center gap-2">
                                    <img
                                      src={skill.logo}
                                      alt={skill.name}
                                      className="w-5 h-5 object-contain"
                                    />
                                    <span className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400">
                                      {skill.name}
                                    </span>
                                  </div>
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-lg">
                                <DialogHeader>
                                  <DialogTitle className="flex items-center gap-2 text-xl">
                                    <img
                                      src={skill.logo}
                                      alt={skill.name}
                                      className="w-6 h-6 object-contain"
                                    />
                                    <span>{skill.name}</span>
                                    <span className="text-sm text-purple-600 dark:text-purple-400">
                                      Mastery Level: {skill.level}%
                                    </span>
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="mt-4">
                                  <h4 className="font-medium mb-2">Mastered Concepts:</h4>
                                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {skill.mastered.map((item, index) => (
                                      <li key={index} className="flex items-center gap-2">
                                        <span className="text-purple-600 dark:text-purple-400">•</span>
                                        <span className="text-sm">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>

                          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                              variants={progressVariants}
                              custom={skill.level}
                            />
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-64 bg-white dark:bg-slate-800 p-4 shadow-lg" align="start">
                        <h4 className="font-medium mb-2">Key Topics:</h4>
                        <ul className="space-y-1">
                          {skill.topics.map((topic, index) => (
                            <li key={index} className="text-sm flex items-center gap-2">
                              <span className="text-purple-600 dark:text-purple-400">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </HoverCardContent>
                    </HoverCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
