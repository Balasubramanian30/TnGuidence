import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

export function ScrollAnimation() {
  return (
    <div className="relative py-20 flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[5rem] font-bold tracking-[-0.02em]">
        <ScrollVelocityRow baseVelocity={5} direction={1} className="bg-gradient-to-t from-[#5E72EB] to-[#da75bd] !bg-clip-text !text-transparent" >
          Lets Grow Together • Lets Grow Together • Lets Grow Together •
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={5} direction={-1} className="text-gray-500">
          Lets Grow Together • Lets Grow Together • Lets Grow Together •
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
export default ScrollAnimation;