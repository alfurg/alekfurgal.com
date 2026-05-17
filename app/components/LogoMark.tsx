type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "h-8 w-auto" }: LogoMarkProps) {
  const outerLeftX = 150;
  const innerLeftX = 330;

  const outerRightX = 890;
  const innerRightX = 710;

  const centerX = 520;

  const outerTopY = 240;
  const innerTopY = 420;

  const shoulderY = 575;

  const benchTopY = 620;
  const benchBottomY = 780;

  const cornerR = 55;

  const upperCornerStartX = innerRightX - cornerR; // 655
  const upperCornerEndY = benchTopY - cornerR; // 565

  const lowerCornerStartY = benchBottomY + cornerR; // 835
  const lowerCornerEndX = innerRightX - cornerR; // 655

  const benchLeftFlatX = 565;
  const benchLeftExtremeX = 500;

  const leftOuterBottomY = 920;
  const leftInnerBottomY = 978;

  const rightOuterStemBottomY = 845;
  const rightBottomY = 903; // mirrored cap depth
  const rightBottomOuterFlatEndX = 832; // 890 - 58
  const rightBottomInnerFlatStartX = 800; // 710 + 90

  return (
    <svg
      viewBox="0 0 1000 1075"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`
          M ${outerLeftX} ${leftOuterBottomY}
          V ${shoulderY}

          C ${outerLeftX} 350, 330 ${outerTopY}, ${centerX} ${outerTopY}
          C 710 ${outerTopY}, ${outerRightX} 350, ${outerRightX} ${shoulderY}

          V ${rightOuterStemBottomY}
          C ${outerRightX} 880, 870 ${rightBottomY}, ${rightBottomOuterFlatEndX} ${rightBottomY}
          H ${rightBottomInnerFlatStartX}
          C 748 ${rightBottomY}, ${innerRightX} 880, ${innerRightX} ${rightOuterStemBottomY}

          V ${lowerCornerStartY}
          C ${innerRightX} 805, 685 ${benchBottomY}, ${lowerCornerEndX} ${benchBottomY}

          H ${benchLeftFlatX}
          C 530 ${benchBottomY}, ${benchLeftExtremeX} 750, ${benchLeftExtremeX} 715
          V 685
          C ${benchLeftExtremeX} 650, 530 ${benchTopY}, ${benchLeftFlatX} ${benchTopY}

          H ${upperCornerStartX}
          C 685 ${benchTopY}, ${innerRightX} 595, ${innerRightX} ${upperCornerEndY}

          C ${innerRightX} 465, 615 ${innerTopY}, ${centerX} ${innerTopY}
          C 425 ${innerTopY}, ${innerLeftX} 475, ${innerLeftX} ${shoulderY}

          V ${leftOuterBottomY}
          C ${innerLeftX} 955, 310 ${leftInnerBottomY}, 272 ${leftInnerBottomY}
          H 240
          C 188 ${leftInnerBottomY}, ${outerLeftX} 955, ${outerLeftX} ${leftOuterBottomY}
          Z
        `}
        fill="currentColor"
      />
    </svg>
  );
}