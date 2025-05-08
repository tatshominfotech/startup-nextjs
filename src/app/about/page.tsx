import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Tatshom Infotech",
  description: "software development application development digital marketing",
  icons: "/favicon.png", 
  keywords : "software development application development digital marketing" 
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Tatshom Infotech"
        description="Tatshom Infotech is an innovative IT solutions company delivering web development, software, and digital services to help businesses grow with technology-driven excellence and reliability."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
