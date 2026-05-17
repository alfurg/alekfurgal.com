type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "h-8 w-auto" }: LogoMarkProps) {
  /**
   * Core construction
   */
  const outerLeftX = 150;
  const innerLeftX = 330;

  const outerRightX = 890;
  const innerRightX = 710;

  const centerX = 520;

  const outerTopY = 240;
  const innerTopY = 420;
  const shoulderY = 575;

  /**
   * Middle bench / negative-space F
   */
  const benchTopY = 620;
  const benchBottomY = 780;

  const cornerRadius = 55;

  const upperBenchCornerStartX = innerRightX - cornerRadius; // 655
  const upperBenchCornerEndY = benchTopY - cornerRadius; // 565

  const lowerBenchCornerStartY = benchBottomY + cornerRadius; // 835
  const lowerBenchCornerEndX = innerRightX - cornerRadius; // 655

  const benchLeftFlatX = 565;
  const benchLeftExtremeX = 500;

  /**
   * Arm endings
   */
  const leftArmBottomY = 920;
  const leftCapBottomY = 960;
  const leftCapInnerX = 290;
  const leftCapOuterX = 190;

  const rightArmBottomY = 845;
  const rightCapBottomY = 885;
  const rightCapOuterX = 850;
  const rightCapInnerX = 750;

  return (
    <svg
      viewBox="0 0 1000 1075"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`
          M ${outerLeftX} ${leftArmBottomY}
          V ${shoulderY}

          C ${outerLeftX} 350, 330 ${outerTopY}, ${centerX} ${outerTopY}
          C 710 ${outerTopY}, ${outerRightX} 350, ${outerRightX} ${shoulderY}

          V ${rightArmBottomY}
          C ${outerRightX} 870, 872 ${rightCapBottomY}, ${rightCapOuterX} ${rightCapBottomY}
          H ${rightCapInnerX}
          C 728 ${rightCapBottomY}, ${innerRightX} 870, ${innerRightX} ${rightArmBottomY}

          V ${lowerBenchCornerStartY}
          C ${innerRightX} 805, 685 ${benchBottomY}, ${lowerBenchCornerEndX} ${benchBottomY}

          H ${benchLeftFlatX}
          C 530 ${benchBottomY}, ${benchLeftExtremeX} 750, ${benchLeftExtremeX} 715
          V 685
          C ${benchLeftExtremeX} 650, 530 ${benchTopY}, ${benchLeftFlatX} ${benchTopY}

          H ${upperBenchCornerStartX}
          C 685 ${benchTopY}, ${innerRightX} 595, ${innerRightX} ${upperBenchCornerEndY}

          C ${innerRightX} 465, 615 ${innerTopY}, ${centerX} ${innerTopY}
          C 425 ${innerTopY}, ${innerLeftX} 475, ${innerLeftX} ${shoulderY}

          V ${leftArmBottomY}
          C ${innerLeftX} 945, 312 ${leftCapBottomY}, ${leftCapInnerX} ${leftCapBottomY}
          H ${leftCapOuterX}
          C 168 ${leftCapBottomY}, ${outerLeftX} 945, ${outerLeftX} ${leftArmBottomY}
          Z
        `}
        fill="currentColor"
      />
    </svg>
  );
}