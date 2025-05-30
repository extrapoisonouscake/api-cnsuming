import { motion } from "motion/react";
import { ReactNode, useState } from "react";
export function FlipCard({
  front,
  back,
}: {
  front: ReactNode;
  back: ReactNode;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-full rounded-lg cursor-pointer"
      style={{
        minHeight: "250px",
        height: "100%",
        perspective: "1000px",
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          onClick={() => setIsFlipped(true)}
          style={{
            position: "absolute",
            backfaceVisibility: "hidden", // Ensures only one side is visible
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {front}
        </motion.div>

        {/* Back Side */}
        <motion.div
          onClick={() => setIsFlipped(false)}
          style={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {back}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
