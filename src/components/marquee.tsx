import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { cn } from "@/lib/utils";

type MarqueeAnimationProps = {
    children: string | React.ReactNode;
    classNameChild?: string;
    classNameParent?: string;
    direction?: "left" | "right";
    baseVelocity: number;
};

export default function MarqueeAnimation({
    children,
    classNameChild,
    classNameParent,
    direction = "left",
    baseVelocity = 10,
}: MarqueeAnimationProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (direction == "left") {
            directionFactor.current = 1;
        } else if (direction == "right") {
            directionFactor.current = -1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={cn("overflow-hidden max-w-[100vw] text-nowrap flex-nowrap flex relative", classNameParent)}>
            <motion.div
                className={cn(
                    "font-bold uppercase text-5xl flex flex-nowrap text-nowrap *:block *:me-10",
                    classNameChild
                )}
                style={{ x }}
            >
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}
