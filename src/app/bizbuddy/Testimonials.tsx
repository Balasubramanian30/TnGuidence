"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SubTitle from "@/components/text-components/SubTitle";
import { getLanguageContent } from "@/i18n";
import { useAtom } from "jotai";
import { selectedLanguageAtom } from "@/jotai/store";
import Image from "next/image";

export default function TestimonialsSection() {
  const [selectedLang] = useAtom(selectedLanguageAtom);
  const langContent = getLanguageContent(selectedLang);
  const content =
    langContent.testimonials_section1 ||
    getLanguageContent("EN").testimonials_section1;

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SubTitle className="font-bold mb-7">
          <span className="bg-gradient-to-t from-[#5E72EB] to-[#da75bd] !bg-clip-text !text-transparent">
            Testimonials
          </span>
        </SubTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.list.map((testimonial: { name: string; image: string; position: string; description: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col md:flex-row items-center gap-x-6 p-6 shadow-lg rounded-2xl bg-white dark:bg-gray-800">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                </div>
                <CardContent className="p-0 text-left w-full md:text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {testimonial.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
