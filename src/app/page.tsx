import HomeBanner from "@/components/layout/home/banner";
import CTA from "@/components/layout/home/cta";
import GetStarted from "@/components/layout/home/get-started";
import InnovateStatistics from "@/components/layout/home/innovate-statistics";
import Innovation from "@/components/layout/home/innovation";
import LatestNews from "@/components/layout/home/latest-news-section";
import MapSection from "@/components/layout/home/map-section";
import Sectors from "@/components/layout/home/sectors";
import Shape from "@/components/layout/home/Shape";
import Statistics from "@/components/layout/home/statistics";
import Testimonials from "@/components/layout/home/testimonial";
import TopBar from "@/components/layout/home/top-bar";
import TopInvestors from "@/components/layout/home/top-investors";
import VideoSection from "@/components/layout/home/video-section";

export default function Home() {
  return (
    <>
      <TopBar />
      <HomeBanner />
      <Statistics />
      <Innovation />
      <InnovateStatistics />
      <Shape />
      <Sectors />
      <MapSection />
      <GetStarted />
      <TopInvestors />
      <CTA />
      <Testimonials />
      <VideoSection />
      <LatestNews />
      {/* <p className="h-screen"></p> */}
    </>
  );
}