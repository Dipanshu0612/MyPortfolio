"use client";

import { FloatingCodeLight } from "@/components/floating-code";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <FloatingCodeLight count={3} />
      <div className="orb orb-cyan w-[300px] h-[300px] -top-20 right-20 opacity-20" />
      <div className="orb orb-blue w-[200px] h-[200px] bottom-10 left-10 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass border-border h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-5 mb-8">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: personalInfo.email,
                      href: `mailto:${personalInfo.email}`,
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: personalInfo.phone,
                      href: `tel:${personalInfo.phone}`,
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: personalInfo.location,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-1"
                          >
                            {item.value}
                            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-medium mb-4 text-muted-foreground">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {[
                      {
                        icon: FaGithub,
                        href: personalInfo.social.github,
                        label: "GitHub",
                      },
                      {
                        icon: FaLinkedin,
                        href: personalInfo.social.linkedin,
                        label: "LinkedIn",
                      },
                      {
                        icon: FaInstagram,
                        href: personalInfo.social.instagram,
                        label: "Instagram",
                      },
                      {
                        icon: FaWhatsapp,
                        href: personalInfo.social.whatsapp,
                        label: "WhatsApp",
                      },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:border-primary/40 transition-all"
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none text-sm"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="glow"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
