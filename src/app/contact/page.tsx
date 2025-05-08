'use client';

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Tatshom Infotech",
  description: "software development application development digital marketing",
  icons: "/favicon.png", 
  keywords : "software development application development digital marketing"  
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with Tatshom Infotech for project inquiries, support, or collaboration. We're here to help you with innovative IT solutions and reliable customer service."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
