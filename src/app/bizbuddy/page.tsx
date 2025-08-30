import BizBuddy from "./HeroSection";
import VideoSection from "./AnimatedVideo";
import KeyFeatures from "./KeyFeatures";
import TestimonialsSection from "./Testimonials";
import ReachOut from "./ReactOut";
import ScrollAnimation from "./ScrollAnimation";

export default function BizBuddyPage() {
  return (
    <>
      <BizBuddy />
      <VideoSection />
      <ScrollAnimation />
      <KeyFeatures />
      <TestimonialsSection />
      <ReachOut />
    </>
  );
}
