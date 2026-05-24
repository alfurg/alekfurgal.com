type LogoIconProps = {
  className?: string;
  backgroundColor?: string;
  emblemColor?: string;
  radius?: number;
};

export function LogoIcon({
  className = "h-8 w-8",
  backgroundColor = "#0f0f0e",
  emblemColor = "#f5f5f0",
  radius = 220,
}: LogoIconProps) {
  const outerLeftX = 145;
  const innerLeftX = 325;

  const outerRightX = 895;
  const innerRightX = 715;

  const centerX = 520;

  const outerTopY = 225;
  const shoulderY = 575;

  const upperShelfY = 470;

  const benchTopY = 630;
  const benchBottomY = 770;

  const fCornerR = 45;
  const capR = 40;

  const benchRightX = innerRightX - fCornerR; // 670
  const upperShelfRightX = innerRightX - 65; // 650

  const benchLeftX = 510;
  const benchCapX = benchLeftX - capR; // 470

  const leftArmBottomY = 920;
  const leftCapBottomY = leftArmBottomY + capR; // 960

  const rightArmBottomY = 845;
  const rightCapBottomY = rightArmBottomY + capR; // 885

  return (
    <svg
      viewBox="0 0 1024 1024"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1024" height="1024" rx={radius} fill={backgroundColor} />

      <g transform="matrix(1.08 0 0 1.08 -50 -136)">
        <path
          d={`
            M ${outerLeftX} ${leftArmBottomY}
            V ${shoulderY}

            C ${outerLeftX} 340, 325 ${outerTopY}, ${centerX} ${outerTopY}
            C 715 ${outerTopY}, ${outerRightX} 340, ${outerRightX} ${shoulderY}

            V ${rightArmBottomY}
            C ${outerRightX} 870, ${outerRightX - 18} ${rightCapBottomY}, ${outerRightX - capR} ${rightCapBottomY}
            H ${innerRightX + capR}
            C ${innerRightX + 18} ${rightCapBottomY}, ${innerRightX} 870, ${innerRightX} ${rightArmBottomY}

            V 815
            C ${innerRightX} 790, 695 ${benchBottomY}, ${benchRightX} ${benchBottomY}

            H ${benchLeftX}
            C 488 ${benchBottomY}, ${benchCapX} 752, ${benchCapX} 730
            V 670
            C ${benchCapX} 648, 488 ${benchTopY}, ${benchLeftX} ${benchTopY}

            H ${benchRightX}
            C 695 ${benchTopY}, ${innerRightX} 610, ${innerRightX} 585
            V 545

            C ${innerRightX} 500, 690 ${upperShelfY}, ${upperShelfRightX} ${upperShelfY}
            H 490
            C 400 ${upperShelfY}, ${innerLeftX} 510, ${innerLeftX} ${shoulderY}

            V ${leftArmBottomY}
            C ${innerLeftX} 945, ${innerLeftX - 18} ${leftCapBottomY}, ${innerLeftX - capR} ${leftCapBottomY}
            H ${outerLeftX + capR}
            C ${outerLeftX + 18} ${leftCapBottomY}, ${outerLeftX} 945, ${outerLeftX} ${leftArmBottomY}
            Z
          `}
          fill={emblemColor}
        />
      </g>
    </svg>
  );
}