type LogoMarkProps = {
  className?: string;
  backgroundColor?: string;
  emblemColor?: string;
};

export function LogoMark({
  className = "h-8 w-8",
  backgroundColor = "#0f0f0e",
  emblemColor = "#f5f5f0",
}: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="512" cy="512" r="460" fill={backgroundColor} />

      <g transform="matrix(1.08 0 0 1.08 -50 -136)">
        <path
          d="
            M 150 920
            V 575

            C 150 350, 330 240, 520 240
            C 710 240, 890 350, 890 575

            V 845
            C 890 870, 872 885, 850 885
            H 750
            C 728 885, 710 870, 710 845

            V 815
            C 710 790, 685 760, 655 760

            H 565
            C 530 760, 500 735, 500 705
            V 685
            C 500 650, 530 620, 565 620

            H 655
            C 685 620, 710 595, 710 565

            C 710 465, 615 420, 520 420
            C 425 420, 330 475, 330 575

            V 920
            C 330 945, 312 960, 290 960
            H 190
            C 168 960, 150 945, 150 920
            Z
          "
          fill={emblemColor}
        />
      </g>
    </svg>
  );
}