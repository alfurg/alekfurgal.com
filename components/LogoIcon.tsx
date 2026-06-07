type LogoIconProps = {
  className?: string;
  backgroundColor?: string;
  emblemColor?: string;
  radius?: number;
  size?: number;
};

export function LogoIcon({
  className,
  backgroundColor = "#0f0f0e",
  emblemColor = "#f5f5f0",
  radius = 220,
  size = 28,
}: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <rect width="1024" height="1024" rx={radius} fill={backgroundColor} />

      <g transform="matrix(1.1 0 0 1.02 -62 -118)">
        <path
          d="
            M 130 970
            V 575

            C 130 330, 318 215, 520 215
            C 722 215, 910 330, 910 575

            V 860
            C 910 886, 890 903, 866 903
            H 742
            C 720 903, 700 886, 700 862

            V 798
            C 700 778, 685 762, 665 762

            H 528
            C 514 762, 506 754, 506 740
            V 650
            C 506 636, 514 628, 528 628

            H 686
            C 706 628, 717 617, 717 597

            V 500
            C 717 475, 695 445, 668 445

            H 348
            C 335 445, 325 465, 325 492
            V 575

            V 970
            C 325 996, 305 1010, 282 1010
            H 174
            C 150 1010, 130 996, 130 970
            Z
          "
          fill={emblemColor}
        />
      </g>
    </svg>
  );
}
