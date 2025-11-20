function SVGIllustration() {
  return (
    <svg
      viewBox="0 0 900 1100"
      role="img"
      aria-labelledby="la-flor-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="la-flor-title">
        La Flor – Chicano arte illustration of a woman with Día de los Muertos
        motifs
      </title>
      <defs>
        <radialGradient
          id="faceGradient"
          cx="48%"
          cy="30%"
          r="60%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#f4f4f4" />
          <stop offset="40%" stopColor="#e1e1e1" />
          <stop offset="70%" stopColor="#b9b9b9" />
          <stop offset="100%" stopColor="#7d7d7d" />
        </radialGradient>
        <radialGradient
          id="cheekGlow"
          cx="42%"
          cy="48%"
          r="25%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#f8f8f8" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#cfcfcf" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#b5b5b5" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="faceShadow"
          x1="70%"
          y1="15%"
          x2="20%"
          y2="85%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#9f9f9f" stopOpacity="0.7" />
          <stop offset="40%" stopColor="#808080" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#5b5b5b" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient
          id="roseGradient"
          cx="44%"
          cy="40%"
          r="60%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#f45063" />
          <stop offset="55%" stopColor="#c71725" />
          <stop offset="100%" stopColor="#7e0610" />
        </radialGradient>
        <radialGradient
          id="roseHighlight"
          cx="35%"
          cy="30%"
          r="40%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ffbac6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#bb1622" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="dewPearl"
          cx="40%"
          cy="40%"
          r="50%"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#fefefe" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#e6e6e6" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="ornamentGold"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f9da7a" />
          <stop offset="30%" stopColor="#f4c95d" />
          <stop offset="70%" stopColor="#c88a24" />
          <stop offset="100%" stopColor="#fff0b0" />
        </linearGradient>
        <linearGradient
          id="ornamentGoldReverse"
          x1="100%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#fff0b0" />
          <stop offset="35%" stopColor="#c88a24" />
          <stop offset="70%" stopColor="#f4c95d" />
          <stop offset="100%" stopColor="#f9da7a" />
        </linearGradient>
        <linearGradient
          id="lipTone"
          x1="0%"
          y1="30%"
          x2="100%"
          y2="70%"
        >
          <stop offset="0%" stopColor="#d7d7d7" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
      </defs>
      <g transform="translate(40 40)">
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
          opacity="0.88"
        >
          <path
            d="M49 540c76-148 254-210 302-188 36 17-71 126-23 222 42 85 189 74 282 4 76-57 84-193 214-228"
            stroke="url(#ornamentGold)"
          />
          <path
            d="M96 420c36-52 132-130 206-144 69-13 130-4 188 18 48 18 93 52 98 82 6 34-27 95-83 120-66 30-156 14-212 30-48 14-113 64-151 118"
            stroke="url(#ornamentGoldReverse)"
          />
          <path
            d="M210 900c58-118 203-198 256-190 54 8 84 78 152 82 65 4 142-53 210-144"
            stroke="url(#ornamentGold)"
          />
          <path
            d="M650 260c-62 66-62 134-12 168 40 27 98 25 172-24"
            stroke="url(#ornamentGoldReverse)"
          />
          <path
            d="M122 212c80 10 148-46 194-118"
            stroke="url(#ornamentGold)"
          />
        </g>

        <g transform="translate(140 130)">
          <path
            d="M310 66c-132 20-222 178-182 356 26 118 123 220 245 232 103 10 192-52 216-150 17-70-5-175-59-248-64-88-155-134-220-190z"
            fill="url(#faceGradient)"
          />
          <path
            d="M520 200c48 71 66 158 53 223-18 88-96 145-183 138-115-9-202-114-224-216-26-121 26-229 123-278 71 56 170 81 231 133z"
            fill="url(#faceShadow)"
            opacity="0.55"
          />
          <ellipse
            cx="360"
            cy="330"
            rx="140"
            ry="130"
            fill="url(#cheekGlow)"
            opacity="0.85"
          />
          <path
            d="M525 315c-64-34-123-36-162-7-43 32-30 90-6 102 28 14 70-22 120-28 44-6 74 16 104 2 24-11-7-60-56-69z"
            fill="#9d9d9d"
            opacity="0.28"
          />

          <path
            d="M250 224c32-70 95-120 165-132 78-14 145 16 194 90-49-32-96-40-138-27-46 15-82 55-99 102-22 60-15 130 25 220-90-76-170-192-147-253z"
            fill="#bdbdbd"
            opacity="0.35"
          />

          <path
            d="M472 313c14-34 62-58 101-42 45 18 54 69 25 96-21 19-56 16-94-8-21-13-38-28-32-46z"
            fill="#d0d0d0"
          />

          <path
            d="M442 395c6-32 44-59 84-56 36 3 60 28 58 54-2 21-22 41-50 46-35 6-89-10-92-44z"
            fill="#e8e8e8"
          />

          <path
            d="M563 246c-32-12-64-5-85 17-16 17-23 41-22 71 27-33 63-48 105-44 34 3 66 18 94 44-20-43-49-73-92-88z"
            fill="#f0f0f0"
            opacity="0.6"
          />

          <path
            d="M382 516c-4 46 27 94 68 113 42 19 90 10 126-26-40 8-76 6-105-10-34-18-60-52-89-77z"
            fill="#8a8a8a"
            opacity="0.4"
          />

          <path
            d="M346 237c-17 38-13 80 12 112 32 42 87 60 152 44-40-8-74-34-93-70-21-40-23-84-11-126-27 10-47 23-60 40z"
            fill="#cacaca"
            opacity="0.42"
          />
        </g>

        <g transform="translate(180 180)">
          <path
            d="M394 300c-9 55-16 90-18 117 36-13 90-16 114-3-22-24-20-67-11-119-29 14-61 16-85 5z"
            fill="#a6a6a6"
            opacity="0.35"
          />

          <path
            d="M330 182c-27 9-44 34-37 55 7 21 36 28 63 19 28-10 42-38 34-59-7-20-32-25-60-15z"
            fill="#f2f2f2"
          />
          <path
            d="M332 193c-14 6-23 18-20 29 4 12 20 16 36 10s26-21 22-33c-4-11-19-13-38-6z"
            fill="#bcbcbc"
          />
        </g>

        <g transform="translate(228 225)">
          <path
            d="M310 174c-10 42-3 80 19 102 19 19 48 21 78 10l-0.5-1.5c-27-9-45-35-50-72-4-30 4-56 21-76-34 5-58 18-67 38z"
            fill="#d6d6d6"
          />
          <path
            d="M323 172c-7 30-0.4 58 19 77 17 17 41 22 67 16-24-14-39-37-43-69-3-23 2-44 14-62-29 5-48 18-57 38z"
            fill="#f3f3f3"
            opacity="0.8"
          />
          <ellipse
            cx="388"
            cy="216"
            rx="36"
            ry="44"
            fill="#1f1f1f"
          />
          <ellipse
            cx="392"
            cy="220"
            rx="20"
            ry="26"
            fill="#404040"
          />
          <ellipse
            cx="397"
            cy="225"
            rx="9"
            ry="12"
            fill="#f7f7f7"
          />
          <path
            d="M340 159c35-26 95-42 145-27-30-25-72-32-108-18-20 8-35 22-37 45z"
            fill="#ececec"
          />
          <path
            d="M302 114c38-40 98-57 150-45 44 10 83 40 98 102-24-37-54-62-93-73-54-14-108 1-155 46z"
            fill="#bfbfbf"
            opacity="0.5"
          />

          <path
            d="M454 324c-30 10-56 7-74-8-21-18-25-52-12-104-28 68-17 121 20 145 17 11 41 14 66 5z"
            fill="#9f9f9f"
            opacity="0.5"
          />
        </g>

        <g transform="translate(320 390)">
          <path
            d="M250 72c-48-8-92 2-122 27-24 20-41 49-42 89 47-55 117-80 177-74 53 6 86 35 120 34 24-1 49-14 72-41-40 10-67 12-90-5-20-15-44-28-115-30z"
            fill="#a7a7a7"
            opacity="0.35"
          />
        </g>

        <g transform="translate(250 540)">
          <path
            d="M318 68c-42 8-71 40-73 72-2 24 12 50 40 62 31 14 59 3 83-17-20 7-41 3-55-10-16-15-20-38-16-64 8-24 22-38 44-43-8-3-17-4-23 0z"
            fill="#bdbdbd"
          />
          <path
            d="M358 70c-32 10-45 39-32 62 11 20 40 27 68 16 30-12 42-40 28-60-12-18-40-23-64-18z"
            fill="#dcdcdc"
          />
          <path
            d="M354 92c-14 6-20 20-14 34 6 14 24 20 38 14 15-6 21-21 15-33-7-13-23-17-39-15z"
            fill="#f2f2f2"
          />
          <path
            d="M304 138c30 40 70 53 116 36-38 6-71-4-96-26-10-9-17-18-20-29z"
            fill="#8c8c8c"
            opacity="0.5"
          />
        </g>

        <g transform="translate(310 642)">
          <path
            d="M275 64c-38 7-61 39-54 62 6 20 35 36 75 32 50-5 84-44 68-83-9 29-35 45-64 47-30 1-60-12-84-48 18-5 36-8 59-10z"
            fill="#b5b5b5"
            opacity="0.55"
          />
        </g>

        <g transform="translate(260 660)">
          <path
            d="M315 50c-18 5-30 18-30 32 0 19 18 34 46 32 28-2 60-24 68-46-26 18-51 20-73 10-15-7-26-17-32-28z"
            fill="#d3d3d3"
            opacity="0.6"
          />
        </g>

        <g transform="translate(250 705)">
          <path
            d="M315 38c-25 7-42 24-42 44 0 24 24 42 58 42 38 0 68-23 78-58-26 30-62 42-98 32-22-7-33-21-36-37z"
            fill="#cdcdcd"
            opacity="0.5"
          />
        </g>

        <g transform="translate(310 742)">
          <path
            d="M316 30c-38 10-62 34-62 63 0 28 21 51 59 56 42 5 84-20 114-62-45 30-90 34-123 16-22-12-34-33-34-73z"
            fill="#bdbdbd"
            opacity="0.45"
          />
        </g>

        <g transform="translate(180 540)">
          <path
            d="M412 120c-35 12-66 12-92-3-27-16-36-45-26-82-20 30-26 62-16 91 14 40 57 61 108 46 19-6 32-16 44-29-8-10-14-18-18-23z"
            fill="#939393"
            opacity="0.4"
          />
        </g>

        <g transform="translate(180 480)">
          <path
            d="M424 120c-41 8-69 2-90-18-24-23-30-62-16-116-38 80-24 144 24 180 24 18 56 24 92 14 17-5 32-13 47-26-20-6-39-17-57-34z"
            fill="#8b8b8b"
            opacity="0.4"
          />
        </g>

        <g transform="translate(150 210)">
          <path
            d="M316 584c28 32 66 53 120 48 52-5 96-32 126-82-44 36-96 52-146 38-34-9-58-31-82-64-9 25-12 43-18 60z"
            fill="#7a7a7a"
            opacity="0.4"
          />
        </g>

        <g transform="translate(390 445)">
          <path
            d="M240 136c18 28 60 45 92 40 32-5 53-28 69-62-30 28-61 36-92 28-28-7-50-26-69-55 1 17 0 33 0 49z"
            fill="#b5b5b5"
            opacity="0.45"
          />
        </g>

        <g transform="translate(500 280)">
          <path
            d="M40 300c38 22 84 34 136 22 48-11 78-38 108-76-36 32-74 44-124 38-48-6-89-32-120-74v90z"
            fill="#a0a0a0"
            opacity="0.35"
          />
        </g>

        <g transform="translate(210 210)">
          <path
            d="M428 500c-26 21-30 40-18 57 10 14 36 18 60 8 26-11 45-36 52-68-17 22-36 34-58 37-24 3-48-4-74-34z"
            fill="#d0d0d0"
            opacity="0.4"
          />
        </g>

        <g transform="translate(205 310)">
          <path
            d="M470 358c-14 10-20 22-18 34 3 13 16 22 34 22 20 0 34-14 42-38-12 13-24 19-36 19-12 0-24-5-34-37z"
            fill="#d3d3d3"
            opacity="0.5"
          />
        </g>

        <g transform="translate(160 260)">
          <path
            d="M466 348c16 46 58 66 118 54-48 6-86-13-114-50l-4 40z"
            fill="#818181"
            opacity="0.4"
          />
        </g>

        <g transform="translate(320 110)">
          <path
            d="M344 312c-26 14-44 34-50 62-6 24-2 48 10 72-6-30-3-57 8-80 12-26 31-45 56-58-8-2-16-1-24 4z"
            fill="#c2c2c2"
            opacity="0.45"
          />
        </g>

        <g transform="translate(260 520)">
          <path
            d="M288 108c-16 6-24 18-24 32 0 18 16 34 42 34 24 0 50-16 60-42-22 20-44 25-64 20-16-4-28-14-38-44z"
            fill="#d8d8d8"
            opacity="0.45"
          />
        </g>

        <g transform="translate(280 230)">
          <path
            d="M328 410c-22 32-24 66-4 98 20 30 58 47 108 44-54-14-90-49-104-100z"
            fill="#989898"
            opacity="0.5"
          />
        </g>

        <g transform="translate(340 320)">
          <path
            d="M328 320c-18 26-20 56-4 84 18 32 52 52 100 56-44-18-72-52-86-104z"
            fill="#828282"
            opacity="0.45"
          />
        </g>

        <g transform="translate(300 300)">
          <path
            d="M334 300c-24 32-28 74-6 108 22 32 62 46 112 44-50-12-90-52-106-108z"
            fill="#8e8e8e"
            opacity="0.45"
          />
        </g>

        <g transform="translate(240 250)">
          <path
            d="M344 300c-32 42-34 92-3 138 30 43 86 64 154 58-68-16-118-62-151-132z"
            fill="#7b7b7b"
            opacity="0.4"
          />
        </g>

        <g transform="translate(320 260)">
          <path
            d="M432 402c-50 16-96 8-139-28 34 44 74 66 118 62 18-2 34-8 52-28-10-4-20-6-31-6z"
            fill="#bababa"
            opacity="0.5"
          />
        </g>

        <g transform="translate(200 180)">
          <path
            d="M348 280c-38 32-50 72-34 114 14 36 48 64 100 82-44-32-70-74-72-129-1-26 2-51 6-67z"
            fill="#a8a8a8"
            opacity="0.5"
          />
        </g>

        <g transform="translate(380 250)">
          <path
            d="M412 380c-38 8-68 2-94-20 26 32 58 46 92 42 15-2 28-8 45-28-18 6-30 8-43 6z"
            fill="#c6c6c6"
            opacity="0.5"
          />
        </g>

        <g transform="translate(220 160)">
          <path
            d="M368 260c-34 38-48 82-36 132 10 42 40 78 90 108-36-38-54-82-54-134 0-40 10-74 0-106z"
            fill="#b5b5b5"
            opacity="0.45"
          />
        </g>

        <g transform="translate(420 300)">
          <path
            d="M408 360c-28 6-52-2-74-20 20 26 44 38 70 36 13-1 26-6 42-22-14 4-26 6-38 6z"
            fill="#d2d2d2"
            opacity="0.5"
          />
        </g>

        <g transform="translate(180 140)">
          <path
            d="M352 230c-42 44-56 96-46 156 8 50 34 96 82 138-36-48-50-100-46-158 2-36 10-66 10-136z"
            fill="#b9b9b9"
            opacity="0.45"
          />
        </g>

        <g transform="translate(440 330)">
          <path
            d="M404 340c-20 6-38 0-54-16 13 22 32 34 52 32 11-1 22-6 34-20-8 2-18 2-32 4z"
            fill="#dfdfdf"
            opacity="0.55"
          />
        </g>

        <g transform="translate(150 110)">
          <path
            d="M332 210c-48 52-66 114-58 186 6 58 30 114 78 166-40-60-54-122-48-188 4-46 14-86 28-130z"
            fill="#c6c6c6"
            opacity="0.45"
          />
        </g>

        <g transform="translate(460 350)">
          <path
            d="M396 320c-14 6-28 2-40-10 10 16 22 24 36 24 7 0 16-4 28-16-8 1-18 2-24 2z"
            fill="#ebebeb"
            opacity="0.55"
          />
        </g>

        <g transform="translate(180 80)">
          <path
            d="M320 180c-52 61-72 130-66 210 5 66 26 128 74 190-42-70-54-138-46-210 6-52 20-98 38-190z"
            fill="#d8d8d8"
            opacity="0.45"
          />
        </g>

        <g transform="translate(500 360)">
          <path
            d="M388 300c-12 5-24 2-34-8 8 14 18 20 30 20 5 0 12-3 20-12-6 0-12 0-16 0z"
            fill="#f2f2f2"
            opacity="0.55"
          />
        </g>

        <g transform="translate(140 40)">
          <path
            d="M298 130c-62 74-88 156-80 244 6 78 32 150 86 220-48-82-64-162-56-246 6-72 26-132 50-218z"
            fill="#e1e1e1"
            opacity="0.45"
          />
        </g>

        <g transform="translate(238 420)">
          <path
            d="M326 220c-28 10-44 32-44 54 0 28 26 54 66 54 42 0 78-26 86-76-22 36-52 52-88 46-24-4-40-16-54-64z"
            fill="#acacac"
            opacity="0.45"
          />
        </g>

        <g transform="translate(260 460)">
          <path
            d="M330 200c-20 10-30 26-30 42 0 22 22 40 52 40 32 0 60-20 70-58-16 24-38 34-60 32-20-2-36-12-52-56z"
            fill="#c5c5c5"
            opacity="0.5"
          />
        </g>

        <g transform="translate(280 500)">
          <path
            d="M336 180c-16 6-24 18-24 32 0 18 16 34 42 34 24 0 48-14 60-44-20 22-40 30-62 26-18-4-32-14-46-48z"
            fill="#d5d5d5"
            opacity="0.55"
          />
        </g>

        <g transform="translate(300 540)">
          <path
            d="M342 160c-14 4-22 14-22 26 0 16 16 30 40 30 24 0 48-14 58-40-18 18-36 24-54 22-16-2-30-10-44-38z"
            fill="#dfdfdf"
            opacity="0.6"
          />
        </g>

        <g transform="translate(320 580)">
          <path
            d="M352 140c-12 4-18 12-18 22 0 14 14 24 34 24 22 0 42-12 50-34-16 16-32 20-48 18-12-2-24-8-36-30z"
            fill="#eaeaea"
            opacity="0.6"
          />
        </g>

        <g transform="translate(340 620)">
          <path
            d="M366 120c-10 4-16 10-16 18 0 12 12 20 28 20 18 0 34-10 42-28-14 12-28 16-40 14-10-2-20-6-30-24z"
            fill="#f4f4f4"
            opacity="0.6"
          />
        </g>

        <g transform="translate(500 570)">
          <path
            d="M150 108c32 46 74 60 120 36-44 8-82-10-116-48l-4 12z"
            fill="#8c8c8c"
            opacity="0.5"
          />
        </g>

        <g transform="translate(528 604)">
          <path
            d="M134 92c22 30 52 40 86 24-32 2-60-12-82-40l-4 16z"
            fill="#a0a0a0"
            opacity="0.5"
          />
        </g>

        <g transform="translate(560 630)">
          <path
            d="M116 80c16 20 36 26 60 16-18 0-38-10-56-32l-4 16z"
            fill="#b6b6b6"
            opacity="0.55"
          />
        </g>

        <g transform="translate(590 650)">
          <path
            d="M98 68c10 14 26 20 44 12-12 0-26-8-40-24l-4 12z"
            fill="#cccccc"
            opacity="0.6"
          />
        </g>

        <g transform="translate(618 664)">
          <path
            d="M82 56c8 10 18 14 30 8-8 0-18-6-28-18l-2 10z"
            fill="#dfdfdf"
            opacity="0.6"
          />
        </g>

        <g transform="translate(636 672)">
          <path
            d="M72 48c6 8 14 12 22 6-6 0-12-4-20-12l-2 6z"
            fill="#f2f2f2"
            opacity="0.6"
          />
        </g>

        <g transform="translate(450 310)">
          <path
            d="M216 164c38 6 64-4 86-26-22 8-44 10-64 4-20-6-38-18-56-40l4 68c10-4 20-6 30-6z"
            fill="#d9d9d9"
          />
        </g>

        <g transform="translate(338 318)">
          <path
            d="M272 180c-42 8-68 26-76 52 28-26 60-34 96-26 30 6 50 24 88 24-26-20-76-64-108-50z"
            fill="#b4b4b4"
            opacity="0.45"
          />
        </g>

        <g transform="translate(360 330)">
          <path
            d="M270 188c-34 10-50 28-50 56 20-22 46-32 76-28 24 4 40 16 70 24-24-22-72-60-96-52z"
            fill="#c8c8c8"
            opacity="0.5"
          />
        </g>

        <g transform="translate(380 345)">
          <path
            d="M270 194c-26 8-36 22-36 40 14-18 34-26 56-24 18 2 30 12 54 22-18-20-54-48-74-38z"
            fill="#d9d9d9"
            opacity="0.6"
          />
        </g>

        <g transform="translate(400 362)">
          <path
            d="M268 200c-18 6-26 16-24 28 10-12 26-18 42-16 12 2 22 8 38 18-12-16-38-38-56-30z"
            fill="#ececec"
            opacity="0.65"
          />
        </g>

        <g transform="translate(420 382)">
          <path
            d="M266 208c-12 4-18 10-16 18 6-8 18-12 28-10 8 2 16 6 26 14-8-12-26-26-38-22z"
            fill="#fafafa"
            opacity="0.7"
          />
        </g>

        <g transform="translate(220 280)">
          <path
            d="M348 384c-10 6-16 16-12 26 4 12 18 18 34 12 18-6 30-22 34-46-10 18-22 26-34 26-10 0-22-4-22-18z"
            fill="#efefef"
            opacity="0.55"
          />
        </g>

        <g transform="translate(260 320)">
          <path
            d="M344 356c-12 6-16 16-12 26 4 12 18 18 34 12 16-6 28-20 30-42-8 16-18 22-28 22-10 0-20-4-24-18z"
            fill="#fafafa"
            opacity="0.65"
          />
        </g>

        <g transform="translate(292 360)">
          <path
            d="M340 326c-10 6-12 16-8 24 6 12 22 16 34 12 14-4 22-16 22-32-8 12-16 16-26 16-10 0-18-4-22-20z"
            fill="#ffffff"
            opacity="0.7"
          />
        </g>

        <g transform="translate(260 440)">
          <ellipse
            cx="332"
            cy="210"
            rx="48"
            ry="14"
            fill="url(#lipTone)"
            opacity="0.8"
          />
          <path
            d="M290 210c18 14 40 22 64 22 26 0 48-8 68-24-28 8-52 12-74 10-26-2-44-6-58-8z"
            fill="#6c6c6c"
            opacity="0.35"
          />
          <path
            d="M304 191c14 12 34 18 58 18 24 0 46-6 64-20-28 8-52 10-72 8-26-4-36-4-50-6z"
            fill="#8f8f8f"
            opacity="0.45"
          />
          <path
            d="M310 185c12 10 30 14 52 14 20 0 40-4 56-14-22 6-42 8-58 6-20-2-34-4-50-6z"
            fill="#b2b2b2"
            opacity="0.55"
          />
        </g>

        <g transform="translate(250 420)">
          <path
            d="M296 92c10-6 30-12 44-12 18 0 34 4 54 12-24-20-48-30-72-30-24 0-44 10-72 30 30-10 46-10 46 0z"
            fill="#2e2e2e"
          />
          <path
            d="M290 96c18-8 32-10 48-10 20 0 38 4 60 12-28-16-56-24-84-24-26 0-48 8-72 26 28-6 44-6 48-4z"
            stroke="#c61b2a"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M290 108c18-6 36-8 56-8 18 0 34 2 54 8-24-14-50-20-78-20-26 0-52 6-76 24 26-4 40-4 44-4z"
            stroke="#c61b2a"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M290 120c18-6 36-6 56-6 18 0 34 2 54 6-24-12-50-16-78-16-26 0-52 6-76 22 26-4 40-4 44-6z"
            stroke="#c61b2a"
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        <g transform="translate(310 160)">
          <path
            d="M340 220c24-10 48-12 70-4 18 6 34 18 48 36-18-30-42-52-70-60-26-8-54-2-82 16 18 6 26 8 34 12z"
            fill="#303030"
          />
          <path
            d="M342 220c20-8 40-10 58-4 16 6 28 16 38 34-14-26-34-44-56-50-22-6-44 0-68 16 16 4 22 6 28 4z"
            stroke="#c61b2a"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M344 230c16-6 34-6 48-2 14 4 24 12 34 26-12-20-28-34-46-38-18-4-36 0-56 14 12 2 18 4 20 0z"
            stroke="#c61b2a"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M346 238c14-4 26-4 38 0 12 4 20 10 28 20-10-14-22-24-34-26-12-2-26 2-40 10 8 0 10 0 8-4z"
            stroke="#c61b2a"
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        <g transform="translate(540 350)">
          <path
            d="M0 0c62 28 112 24 148-12-32 20-62 26-90 16-30-12-46-34-58-60z"
            fill="#0f0f0f"
            opacity="0.75"
          />
        </g>

        <g transform="translate(540 640)">
          <path
            d="M0 0c32 40 72 54 120 40-40 6-74-12-100-44z"
            fill="#292929"
            opacity="0.6"
          />
        </g>

        <g transform="translate(486 474)">
          <path
            d="M0 0c32 23 70 33 114 24 42-9 72-33 106-78-40 36-82 50-128 44-40-6-70-28-92-56z"
            fill="#414141"
            opacity="0.6"
          />
        </g>

        <g transform="translate(548 510)">
          <path
            d="M0 0c24 14 48 20 78 12 26-6 46-22 68-48-26 20-54 26-78 20-24-6-44-20-60-40z"
            fill="#585858"
            opacity="0.6"
          />
        </g>

        <g transform="translate(570 540)">
          <path
            d="M0 0c18 10 36 14 58 8 18-4 32-14 46-30-18 12-40 16-58 10-18-4-34-14-46-30z"
            fill="#707070"
            opacity="0.6"
          />
        </g>

        <g transform="translate(588 564)">
          <path
            d="M0 0c12 6 26 8 40 4 12-4 22-10 32-20-12 6-26 8-38 4-12-4-22-10-34-22z"
            fill="#8f8f8f"
            opacity="0.6"
          />
        </g>

        <g transform="translate(602 582)">
          <path
            d="M0 0c8 4 18 6 28 2 8-2 14-6 20-12-8 4-16 4-24 2-8-2-16-6-24-16z"
            fill="#acacac"
            opacity="0.6"
          />
        </g>

        <g transform="translate(612 594)">
          <path
            d="M0 0c6 2 12 4 18 2 6-2 10-4 14-8-6 2-10 2-16 0-4 0-10-4-16-10z"
            fill="#c9c9c9"
            opacity="0.6"
          />
        </g>

        <g transform="translate(620 602)">
          <path
            d="M0 0c4 2 8 2 12 2 4 0 6-2 8-4-4 0-8 0-12-2-2 0-6-2-10-6z"
            fill="#e5e5e5"
            opacity="0.6"
          />
        </g>

        <g transform="translate(628 610)">
          <path
            d="M0 0c3 1 5 2 8 1 3 0 4-1 6-3-3 1-5 1-7 0-2 0-4-1-7-4z"
            fill="#fafafa"
            opacity="0.65"
          />
        </g>

        <g transform="translate(620 300)">
          <path
            d="M0 0c42 26 86 38 132 32 44-8 80-28 116-66-44 34-94 48-146 42-44-6-79-26-102-58z"
            fill="#191919"
            opacity="0.8"
          />
        </g>

        <g transform="translate(670 344)">
          <path
            d="M0 0c28 16 56 22 86 16 28-4 52-18 76-42-30 20-60 26-90 22-30-4-54-18-72-40z"
            fill="#292929"
            opacity="0.75"
          />
        </g>

        <g transform="translate(700 370)">
          <path
            d="M0 0c18 10 34 14 54 10 18-4 32-12 46-26-18 10-36 14-54 12-16-2-32-10-46-24z"
            fill="#3a3a3a"
            opacity="0.7"
          />
        </g>

        <g transform="translate(734 388)">
          <path
            d="M0 0c12 6 22 8 34 6 10-2 18-6 26-14-10 4-22 6-32 4-9-1-18-6-28-16z"
            fill="#505050"
            opacity="0.65"
          />
        </g>

        <g transform="translate(760 400)">
          <path
            d="M0 0c8 4 16 4 24 2 6-2 12-4 18-10-8 2-14 4-20 2-6-1-12-5-18-12z"
            fill="#676767"
            opacity="0.6"
          />
        </g>

        <g transform="translate(780 408)">
          <path
            d="M0 0c6 2 12 2 18 0 4-2 8-4 12-8-6 2-10 2-14 2-4-1-9-3-16-10z"
            fill="#848484"
            opacity="0.6"
          />
        </g>

        <g transform="translate(794 412)">
          <path
            d="M0 0c4 2 8 2 12 2 3-1 5-1 8-5-4 1-7 1-10 0-3-1-6-3-10-8z"
            fill="#a3a3a3"
            opacity="0.6"
          />
        </g>

        <g transform="translate(804 416)">
          <path
            d="M0 0c3 1 6 2 8 1 2 0 3-1 5-3-3 1-6 1-8 0-1 0-4-1-6-4z"
            fill="#c3c3c3"
            opacity="0.6"
          />
        </g>

        <g transform="translate(812 418)">
          <path
            d="M0 0c2 1 4 1 6 1 2 0 2-1 4-2-2 0-4 0-6-1-1 0-2-1-4-3z"
            fill="#e1e1e1"
            opacity="0.6"
          />
        </g>

        <g transform="translate(818 420)">
          <path
            d="M0 0c2 1 3 1 4 1 1 0 2 0 3-1-1 0-4 0-5-1-1 0-2-1-4-2z"
            fill="#f7f7f7"
            opacity="0.6"
          />
        </g>

        <g transform="translate(120 680)">
          <path
            d="M0 0c72 28 136 18 192-28 48-40 84-100 96-172-30 86-80 146-148 176-52 22-100 24-140 12z"
            fill="#1a1a1a"
            opacity="0.8"
          />
        </g>

        <g transform="translate(150 720)">
          <path
            d="M0 0c48 20 92 14 130-16 34-26 58-64 70-110-22 56-58 94-108 114-38 14-76 14-92 12z"
            fill="#2c2c2c"
            opacity="0.75"
          />
        </g>

        <g transform="translate(180 748)">
          <path
            d="M0 0c34 12 66 6 94-14 22-16 38-42 46-76-16 38-42 64-78 78-28 10-54 12-62 12z"
            fill="#3f3f3f"
            opacity="0.7"
          />
        </g>

        <g transform="translate(204 768)">
          <path
            d="M0 0c24 6 44 2 64-10 16-10 28-28 34-50-12 26-32 44-56 52-20 6-38 6-42 8z"
            fill="#575757"
            opacity="0.65"
          />
        </g>

        <g transform="translate(224 782)">
          <path
            d="M0 0c16 4 30 0 44-10 10-8 18-20 22-36-8 20-24 32-40 38-14 4-24 4-26 8z"
            fill="#707070"
            opacity="0.6"
          />
        </g>

        <g transform="translate(236 792)">
          <path
            d="M0 0c10 2 18 0 28-6 6-6 12-16 16-26-6 14-18 22-28 26-10 2-16 2-16 6z"
            fill="#888888"
            opacity="0.6"
          />
        </g>

        <g transform="translate(246 798)">
          <path
            d="M0 0c6 1 10 0 14-4 4-4 8-10 10-18-6 10-12 16-20 18-4 0-6 0-4 4z"
            fill="#a0a0a0"
            opacity="0.6"
          />
        </g>

        <g transform="translate(254 802)">
          <path
            d="M0 0c4 0 6 0 8-2 2-2 4-6 6-10-4 6-8 8-12 10-2 0-4 0-2 2z"
            fill="#bdbdbd"
            opacity="0.6"
          />
        </g>

        <g transform="translate(260 804)">
          <path
            d="M0 0c2 0 4 0 4-2 2-2 2-4 4-6-4 4-6 6-8 6 0 0-2 0 0 2z"
            fill="#d8d8d8"
            opacity="0.6"
          />
        </g>

        <g transform="translate(264 806)">
          <path
            d="M0 0c2 0 4 0 4-2 0-2 0-2 2-4-2 2-4 4-6 4 0 0 0 0 0 2z"
            fill="#f2f2f2"
            opacity="0.6"
          />
        </g>

        <g transform="translate(500 160)">
          <g transform="translate(-160 120)">
            <ellipse
              cx="470"
              cy="318"
              rx="180"
              ry="160"
              fill="url(#roseGradient)"
            />
            <path
              d="M470 158c-30 12-52 32-60 60-6 22-2 46 16 74-4-28 2-52 16-70 14-20 34-34 56-44-10-4-18-4-28-20z"
              fill="#b81224"
            />
            <path
              d="M520 220c-14-26-34-40-58-44-20-4-38 2-58 16 24-8 44-6 64 4 18 10 32 24 52 58z"
              fill="#910b19"
              opacity="0.7"
            />
            <path
              d="M416 254c18 0 40 6 58 20 24 16 40 40 48 74-4-38-18-68-44-90-22-18-50-26-82-24 12 12 16 16 20 20z"
              fill="#750712"
              opacity="0.7"
            />
            <path
              d="M522 344c-16-18-36-28-58-28-20 0-40 10-56 28 22-16 44-20 64-10 16 8 30 22 50 66z"
              fill="#61050e"
              opacity="0.7"
            />
            <path
              d="M470 478c-22-38-58-58-98-58-34 0-70 16-106 50 44-30 84-38 120-22 30 14 54 38 84 88z"
              fill="#53040c"
              opacity="0.65"
            />
            <path
              d="M338 438c24 0 50 12 70 34 24 26 36 62 32 106-2-48-18-86-46-112-24-22-52-34-84-32 14 12 18 18 28 32z"
              fill="#42030a"
              opacity="0.6"
            />
            <path
              d="M564 256c-28-12-54-10-76 4-18 10-30 28-32 52 12-20 30-30 52-30 20 0 40 10 56 32z"
              fill="#d01829"
            />
            <path
              d="M552 210c-22-12-46-12-68-2-18 8-32 24-36 44 12-16 28-24 46-24 20 0 40 8 58 28z"
              fill="#f04250"
              opacity="0.6"
            />
            <path
              d="M442 178c-18 8-30 22-34 38-4 12-2 26 4 42 0-18 6-32 16-44 8-10 18-18 30-24-4-4-4-6-16-12z"
              fill="#ff6b7a"
              opacity="0.65"
            />
            <path
              d="M546 422c-16-10-32-12-48-4-12 6-24 18-32 34 12-12 24-18 38-16 12 2 24 10 42 34z"
              fill="#8a0d1a"
              opacity="0.7"
            />
            <path
              d="M568 390c-18-12-36-12-52-6-12 6-22 18-28 32 10-12 22-18 36-18 12 0 26 6 44 24z"
              fill="#a71120"
              opacity="0.7"
            />
            <path
              d="M590 354c-18-10-36-12-52-6-12 4-22 14-32 26 12-12 24-18 38-18 16 0 28 6 46 24z"
              fill="#c61625"
              opacity="0.7"
            />
            <path
              d="M604 320c-16-8-32-10-48-6-12 4-22 12-30 22 10-10 22-14 34-14 14 0 26 4 44 22z"
              fill="#da1d2e"
              opacity="0.75"
            />
            <ellipse
              cx="412"
              cy="232"
              rx="32"
              ry="18"
              fill="url(#roseHighlight)"
              transform="rotate(-12 412 232)"
              opacity="0.7"
            />
            <ellipse
              cx="540"
              cy="210"
              rx="26"
              ry="16"
              fill="url(#roseHighlight)"
              transform="rotate(18 540 210)"
              opacity="0.55"
            />
            <ellipse
              cx="592"
              cy="312"
              rx="18"
              ry="10"
              fill="url(#roseHighlight)"
              transform="rotate(24 592 312)"
              opacity="0.6"
            />
            <ellipse
              cx="512"
              cy="392"
              rx="18"
              ry="12"
              fill="url(#roseHighlight)"
              transform="rotate(18 512 392)"
              opacity="0.5"
            />
            <ellipse
              cx="434"
              cy="440"
              rx="26"
              ry="16"
              fill="url(#roseHighlight)"
              transform="rotate(12 434 440)"
              opacity="0.5"
            />
            <ellipse
              cx="506"
              cy="310"
              rx="120"
              ry="120"
              fill="none"
              stroke="#47030a"
              strokeOpacity="0.45"
            />
            <g opacity="0.8">
              <ellipse
                cx="390"
                cy="236"
                rx="18"
                ry="12"
                fill="url(#dewPearl)"
              />
              <path
                d="M402 246c-6 12-14 16-22 14"
                stroke="#d7d7d7"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
            </g>
            <g opacity="0.75" transform="translate(96 94)">
              <ellipse
                cx="390"
                cy="236"
                rx="16"
                ry="10"
                fill="url(#dewPearl)"
              />
              <path
                d="M400 244c-4 8-10 12-18 10"
                stroke="#d7d7d7"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
              />
            </g>
            <g opacity="0.75" transform="translate(128 142)">
              <ellipse
                cx="390"
                cy="236"
                rx="12"
                ry="8"
                fill="url(#dewPearl)"
              />
              <path
                d="M396 242c-4 6-8 8-14 6"
                stroke="#d7d7d7"
                strokeWidth="0.8"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>
        </g>

        <g transform="translate(120 160)">
          <path
            d="M160 420c46-128 182-172 262-170 58 2 108 26 164 26 42 0 84-16 130-62-58 40-110 54-156 46-56-10-100-46-170-46-72 0-176 24-230 174z"
            fill="#2c2c2c"
            opacity="0.65"
          />
        </g>

        <g transform="translate(130 120)">
          <path
            d="M168 400c52-132 192-186 286-180 70 4 126 34 190 34 48 0 94-18 140-64-60 44-118 60-172 50-60-10-108-50-186-50-80 0-196 28-258 210z"
            fill="#1a1a1a"
            opacity="0.65"
          />
        </g>

        <g transform="translate(100 80)">
          <path
            d="M170 380c56-148 212-214 318-208 78 4 140 40 210 40 52 0 102-20 152-70-64 48-128 66-190 56-66-10-120-54-206-54-88 0-212 32-284 236z"
            fill="#080808"
            opacity="0.6"
          />
        </g>

        <g
          transform="translate(100 60)"
          fill="none"
          stroke="url(#ornamentGold)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        >
          <path d="M184 372c54-142 192-218 314-214 88 2 158 52 224 52 58 0 112-24 168-84" />
          <path d="M188 356c60-150 206-230 334-224 96 4 172 58 246 58 62 0 118-26 176-92" />
        </g>

        <g
          transform="translate(120 260)"
          fill="none"
          stroke="url(#ornamentGoldReverse)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M160 180c76-116 198-154 286-132 70 18 124 72 180 86 46 12 94 0 142-30" />
          <path d="M172 210c82-108 198-138 274-108 62 24 108 82 156 96 42 12 88 2 134-28" />
        </g>

        <g
          transform="translate(140 380)"
          fill="none"
          stroke="url(#ornamentGold)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.92"
        >
          <path d="M220 140c52-66 118-90 178-72 44 14 76 48 118 60 36 10 72 2 112-22" />
          <path d="M240 170c54-58 118-76 170-58 42 16 70 48 108 58 34 8 64 0 98-22" />
        </g>

        <g
          transform="translate(120 520)"
          fill="none"
          stroke="url(#ornamentGoldReverse)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.92"
        >
          <path d="M180 120c72-44 142-46 194-14 40 26 66 68 108 78 34 8 64-4 100-34" />
          <path d="M200 150c70-36 130-32 176 4 34 28 54 64 92 74 30 8 56-2 88-30" />
        </g>

        <g
          transform="translate(160 640)"
          fill="none"
          stroke="url(#ornamentGold)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.92"
        >
          <path d="M200 90c56-30 108-24 146 14 28 26 44 58 78 70 26 10 50 2 76-24" />
          <path d="M214 118c50-24 94-18 124 16 24 28 36 54 64 64 22 8 42 0 62-18" />
        </g>

        <g
          transform="translate(180 740)"
          fill="none"
          stroke="url(#ornamentGoldReverse)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.92"
        >
          <path d="M220 60c40-18 74-12 98 14 18 20 28 42 50 50 16 6 32 2 48-12" />
          <path d="M228 80c36-14 62-10 80 12 14 18 22 36 38 42 14 4 24 0 38-10" />
        </g>

        <g transform="translate(140 160)">
          <path
            d="M360 472c-32 8-56 0-98-34 28 48 60 76 98 82 32 4 62-10 90-44-40 20-64 22-90-4z"
            fill="#646464"
            opacity="0.45"
          />
        </g>

        <g transform="translate(260 220)">
          <path
            d="M318 276c-10 36-6 68 12 96 16 24 40 42 72 56-32-20-56-44-68-76-12-30-18-54-16-76z"
            fill="#5a5a5a"
            opacity="0.45"
          />
        </g>

        <g transform="translate(300 250)">
          <path
            d="M300 260c-6 30-2 58 12 82 12 20 32 36 58 48-24-16-42-36-52-60-12-24-16-46-18-70z"
            fill="#4e4e4e"
            opacity="0.45"
          />
        </g>

        <g transform="translate(580 190)">
          <path
            d="M0 0c32 16 60 20 90 12 24-6 44-20 62-40-24 18-48 24-72 20-24-4-44-16-62-34z"
            fill="#121212"
            opacity="0.85"
          />
        </g>

        <g transform="translate(620 210)">
          <path
            d="M0 0c22 10 40 12 60 6 16-4 30-12 42-24-16 12-34 16-50 12-16-2-30-10-44-22z"
            fill="#242424"
            opacity="0.8"
          />
        </g>

        <g transform="translate(650 226)">
          <path
            d="M0 0c14 6 26 8 40 4 10-2 20-8 30-16-12 8-24 10-36 8-12-2-22-8-34-18z"
            fill="#373737"
            opacity="0.75"
          />
        </g>

        <g transform="translate(674 236)">
          <path
            d="M0 0c10 4 18 6 28 2 6-2 12-6 18-12-8 4-16 6-24 4-8-2-14-6-22-14z"
            fill="#4e4e4e"
            opacity="0.7"
          />
        </g>

        <g transform="translate(694 244)">
          <path
            d="M0 0c6 2 12 2 18 0 4 0 8-4 12-8-6 2-12 4-16 2-6-2-10-4-16-10z"
            fill="#656565"
            opacity="0.65"
          />
        </g>

        <g transform="translate(708 248)">
          <path
            d="M0 0c4 2 8 2 12 0 2 0 6-2 8-6-4 2-8 2-10 2-4 0-8-2-12-6z"
            fill="#7e7e7e"
            opacity="0.6"
          />
        </g>

        <g transform="translate(720 252)">
          <path
            d="M0 0c4 2 6 2 8 0 2 0 4-2 6-4-4 2-6 2-8 2-2 0-4 0-6-2z"
            fill="#989898"
            opacity="0.6"
          />
        </g>

        <g transform="translate(730 254)">
          <path
            d="M0 0c2 0 4 0 6 0 0-2 2-2 4-4-2 2-4 2-6 2-2 0-4 0-4-2z"
            fill="#b5b5b5"
            opacity="0.6"
          />
        </g>

        <g transform="translate(738 256)">
          <path
            d="M0 0c2 0 2 0 4 0 0-2 0-2 2-2-2 2-2 2-4 2 0 0-2 0-2 0z"
            fill="#d2d2d2"
            opacity="0.6"
          />
        </g>

        <g transform="translate(744 258)">
          <path
            d="M0 0c2 0 2 0 2-2 0 0 2 0 2-2-2 2-2 2-4 2 0 0 0 0 0 2z"
            fill="#eaeaea"
            opacity="0.6"
          />
        </g>

        <g transform="translate(748 258)">
          <path
            d="M0 0c2 0 2-2 2-2 0 0 2 0 2-2-2 2-2 2-4 2 0 0 0 0 0 2z"
            fill="#f8f8f8"
            opacity="0.6"
          />
        </g>

        <g transform="translate(210 230)">
          <path
            d="M224 68c-34 10-54 34-52 60 2 22 22 44 52 52 34 8 64-6 86-32-24 14-48 18-70 10-26-8-42-26-48-54 10-18 20-30 32-36z"
            fill="#f0f0f0"
            opacity="0.4"
          />
        </g>

        <g transform="translate(220 240)">
          <path
            d="M224 74c-28 8-44 28-40 48 2 18 22 30 44 36 26 6 48-4 66-24-20 10-38 12-54 6-20-6-32-20-36-42 6-12 12-20 20-24z"
            fill="#fafafa"
            opacity="0.5"
          />
        </g>

        <g transform="translate(230 250)">
          <path
            d="M226 80c-20 6-32 20-28 36 2 14 16 24 34 28 20 4 36-2 48-14-16 6-28 6-40 2-14-4-22-14-26-30 6-8 8-16 12-22z"
            fill="#ffffff"
            opacity="0.6"
          />
        </g>

        <g transform="translate(380 310)">
          <path
            d="M288 86c32-10 60-4 84 18 18 16 28 36 30 60-8-26-22-44-42-54-24-12-50-12-78-2 2-8 4-16 6-22z"
            fill="#f2f2f2"
            opacity="0.4"
          />
        </g>

        <g transform="translate(370 320)">
          <path
            d="M288 90c28-8 52-4 72 14 14 12 24 28 26 46-6-20-18-34-34-40-20-10-40-10-64-2 0-6 0-12 0-18z"
            fill="#fcfcfc"
            opacity="0.5"
          />
        </g>

        <g transform="translate(360 330)">
          <path
            d="M290 96c22-6 40-2 56 10 10 8 18 20 18 34-4-12-12-22-22-26-16-8-32-8-50-2 0-6-2-10-2-16z"
            fill="#ffffff"
            opacity="0.6"
          />
        </g>

        <g transform="translate(340 300)">
          <path
            d="M300 90c-12 16-18 36-16 58 2 20 12 38 26 52-16-18-24-38-24-60 0-18 4-34 14-50z"
            fill="#4a4a4a"
            opacity="0.45"
          />
        </g>

        <g transform="translate(280 280)">
          <path
            d="M326 92c-20 24-28 52-24 86 4 28 16 54 40 76-20-28-32-56-32-88 0-24 4-48 16-74z"
            fill="#565656"
            opacity="0.45"
          />
        </g>

        <g transform="translate(240 260)">
          <path
            d="M346 92c-26 30-36 66-32 108 4 34 18 66 46 96-22-34-34-70-34-108 0-26 4-50 20-96z"
            fill="#646464"
            opacity="0.45"
          />
        </g>

        <g transform="translate(200 240)">
          <path
            d="M366 90c-30 36-42 78-38 128 4 40 16 78 50 118-26-42-38-86-38-132 0-30 4-58 26-114z"
            fill="#747474"
            opacity="0.45"
          />
        </g>

        <g transform="translate(400 460)">
          <path
            d="M244 162c10 18 26 28 50 26 20-2 38-14 52-36-16 16-34 22-52 20-18-2-34-10-50-28z"
            fill="#ffffff"
            opacity="0.55"
          />
        </g>

        <g transform="translate(432 490)">
          <path
            d="M234 146c10 14 22 20 36 18 12-2 24-10 34-26-12 12-24 16-36 14-12-2-22-8-34-20z"
            fill="#ffffff"
            opacity="0.6"
          />
        </g>

        <g transform="translate(456 512)">
          <path
            d="M226 134c8 10 16 14 26 12 8-2 16-6 22-18-8 8-18 10-26 8-8-2-16-6-22-16z"
            fill="#ffffff"
            opacity="0.65"
          />
        </g>

        <g transform="translate(474 528)">
          <path
            d="M220 126c6 8 12 12 20 10 6-2 12-4 18-12-8 6-14 8-20 6-6 0-12-4-18-10z"
            fill="#ffffff"
            opacity="0.7"
          />
        </g>

        <g transform="translate(488 542)">
          <path
            d="M214 118c4 6 10 8 16 8 4-2 8-4 12-8-6 4-10 4-14 4-4 0-8-2-14-4z"
            fill="#ffffff"
            opacity="0.75"
          />
        </g>

        <g transform="translate(500 552)">
          <path
            d="M210 112c4 4 6 4 10 4s6-2 10-4c-6 2-8 2-12 2s-6 0-8-2z"
            fill="#ffffff"
            opacity="0.8"
          />
        </g>

        <g transform="translate(510 560)">
          <path
            d="M206 108c2 2 4 2 6 2 2 0 4 0 6-2-4 2-6 2-8 2-2 0-4 0-4-2z"
            fill="#ffffff"
            opacity="0.85"
          />
        </g>

        <g transform="translate(518 566)">
          <path
            d="M204 104c2 0 2 2 4 2s2 0 4-2c-4 2-4 2-6 2 0 0-2 0-2-2z"
            fill="#ffffff"
            opacity="0.9"
          />
        </g>

        <g transform="translate(526 572)">
          <path
            d="M200 100c2 0 2 0 2 2 2 0 2 0 4-2-4 0-4 0-6 0z"
            fill="#ffffff"
            opacity="0.95"
          />
        </g>

        <g transform="translate(220 180)">
          <path
            d="M410 16c-42 2-78 22-102 64-20 32-30 70-28 116 16-72 50-116 102-132 42-12 86-4 128 26-32-40-64-70-100-74z"
            fill="#9d9d9d"
            opacity="0.45"
          />
        </g>

        <g transform="translate(210 160)">
          <path
            d="M420 10c-48 4-88 30-114 80-20 38-30 82-26 138 16-82 52-132 108-152 46-16 96-8 142 30-36-50-74-86-110-96z"
            fill="#b1b1b1"
            opacity="0.45"
          />
        </g>

        <g transform="translate(200 140)">
          <path
            d="M430 0c-56 6-102 38-136 94-24 42-34 94-28 160 16-96 56-154 122-180 52-20 108-12 162 34-42-60-88-102-120-108z"
            fill="#c8c8c8"
            opacity="0.45"
          />
        </g>

        <g transform="translate(180 110)">
          <path
            d="M450-10c-66 10-118 48-156 114-28 48-38 108-30 182 18-110 64-176 140-208 58-24 118-16 178 34-46-72-102-118-132-122z"
            fill="#dedede"
            opacity="0.45"
          />
        </g>

        <g transform="translate(600 770)">
          <path
            d="M0 0c36 12 68 8 94-12 22-16 38-40 46-72-18 40-46 64-80 72-26 6-50 4-60 12z"
            fill="#121212"
            opacity="0.75"
          />
        </g>

        <g transform="translate(620 790)">
          <path
            d="M0 0c26 8 48 6 68-8 14-10 24-26 30-46-12 26-34 42-58 48-18 4-36 2-40 6z"
            fill="#1e1e1e"
            opacity="0.75"
          />
        </g>

        <g transform="translate(640 804)">
          <path
            d="M0 0c18 4 34 2 48-6 10-8 18-18 22-32-8 18-22 30-36 34-12 4-24 2-34 4z"
            fill="#2e2e2e"
            opacity="0.75"
          />
        </g>

        <g transform="translate(656 814)">
          <path
            d="M0 0c12 2 22 2 32-2 6-4 12-12 16-20-6 12-16 18-24 20-8 2-16 0-22 2z"
            fill="#404040"
            opacity="0.75"
          />
        </g>

        <g transform="translate(670 820)">
          <path
            d="M0 0c8 2 16 2 22-2 4-2 8-8 10-14-4 8-12 12-16 12-6 2-10 0-16 2z"
            fill="#565656"
            opacity="0.75"
          />
        </g>

        <g transform="translate(682 826)">
          <path
            d="M0 0c4 0 8 0 12-2 2-2 4-4 4-8-4 4-6 6-10 6-4 0-6 0-6 4z"
            fill="#707070"
            opacity="0.75"
          />
        </g>

        <g transform="translate(690 830)">
          <path
            d="M0 0c4 0 6 0 8-2 0-2 2-4 2-6-4 2-4 4-8 4 0 0-2 0-2 4z"
            fill="#8c8c8c"
            opacity="0.75"
          />
        </g>

        <g transform="translate(698 832)">
          <path
            d="M0 0c2 0 4 0 4-2 0-2 2-2 2-4-2 2-4 2-6 2 0 0 0 0 0 4z"
            fill="#a8a8a8"
            opacity="0.75"
          />
        </g>

        <g transform="translate(704 834)">
          <path
            d="M0 0c2 0 2 0 4-2 0-2 0-2 2-2-2 0-2 2-4 2 0 0-2 0-2 2z"
            fill="#c4c4c4"
            opacity="0.75"
          />
        </g>

        <g transform="translate(710 836)">
          <path
            d="M0 0c2 0 2 0 2-2 0 0 2 0 2-2-2 2-2 2-4 2 0 0 0 0 0 2z"
            fill="#dfdfdf"
            opacity="0.75"
          />
        </g>

        <g transform="translate(714 836)">
          <path
            d="M0 0c2 0 2-2 2-2 0 0 2 0 2-2-2 2-2 2-4 2 0 0 0 0 0 2z"
            fill="#f4f4f4"
            opacity="0.75"
          />
        </g>

        <g transform="translate(96 160)">
          <path
            d="M268 300c-26 38-38 80-30 128 8 44 30 84 74 120-38-44-58-92-60-142-2-38 6-72 16-106z"
            fill="#545454"
            opacity="0.45"
          />
        </g>

        <g transform="translate(60 140)">
          <path
            d="M278 300c-30 42-42 88-34 138 6 42 26 80 64 114-32-40-50-84-52-132-2-34 6-66 22-120z"
            fill="#484848"
            opacity="0.45"
          />
        </g>

        <g transform="translate(40 120)">
          <path
            d="M286 300c-34 46-46 96-38 150 6 48 24 92 54 132-26-48-40-96-42-146-2-38 6-74 26-136z"
            fill="#3a3a3a"
            opacity="0.45"
          />
        </g>

        <g transform="translate(20 100)">
          <path
            d="M296 300c-36 50-48 102-40 162 6 50 22 98 44 140-20-54-32-106-34-160-2-42 4-80 30-142z"
            fill="#272727"
            opacity="0.45"
          />
        </g>

        <g transform="translate(0 80)">
          <path
            d="M304 300c-40 54-54 110-46 176 6 54 20 106 34 152-14-58-22-114-24-170-2-46 4-88 36-158z"
            fill="#161616"
            opacity="0.45"
          />
        </g>

        <g transform="translate(20 40)">
          <path
            d="M330 260c-46 60-62 122-54 198 4 60 18 118 24 168-6-64-12-128-10-190 4-56 18-108 40-176z"
            fill="#080808"
            opacity="0.45"
          />
        </g>

        <g transform="translate(22 20)">
          <path
            d="M348 232c-46 58-66 118-62 192 2 64 12 126 16 184-4-66-6-134-2-196 4-64 18-120 48-180z"
            fill="#050505"
            opacity="0.45"
          />
        </g>

        <g transform="translate(40 0)">
          <path
            d="M364 210c-42 54-62 112-62 182 0 66 10 130 14 190-4-70-4-140 0-204 6-68 20-128 48-168z"
            fill="#010101"
            opacity="0.45"
          />
        </g>

        <g
          transform="translate(150 860)"
          fill="none"
          stroke="url(#ornamentGold)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        >
          <path d="M80 80c54 32 110 42 172 30 52-10 94-38 134-82" />
          <path d="M94 102c60 26 120 28 178 8 48-18 88-50 126-98" />
        </g>

        <g
          transform="translate(200 920)"
          fill="none"
          stroke="url(#ornamentGoldReverse)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        >
          <path d="M96 54c46 26 94 32 146 18 42-10 78-34 110-70" />
          <path d="M108 70c46 20 90 22 132 8 36-12 68-34 96-64" />
        </g>

        <g transform="translate(260 920)">
          <path
            d="M120 58c18 14 42 18 68 14 22-4 44-14 66-30-24 20-50 32-76 36-26 4-46 0-58-20z"
            fill="#f5d688"
            opacity="0.82"
          />
        </g>

        <g transform="translate(320 940)">
          <path
            d="M90 42c12 10 28 12 44 10 16-4 30-10 46-22-18 16-36 24-56 26-18 2-32-2-34-14z"
            fill="#fbe59a"
            opacity="0.78"
          />
        </g>

        <g transform="translate(360 960)">
          <path
            d="M70 30c10 6 20 8 30 6 10-2 20-6 30-14-12 10-24 16-36 18-12 0-20-4-24-10z"
            fill="#ffe7ac"
            opacity="0.75"
          />
        </g>

        <g transform="translate(390 976)">
          <path
            d="M54 20c6 4 12 4 18 4 8-2 14-4 22-10-10 8-18 12-26 12-8 0-12-2-14-6z"
            fill="#fff1c1"
            opacity="0.72"
          />
        </g>

        <g transform="translate(420 988)">
          <path
            d="M40 12c6 2 10 2 14 0 4 0 8-2 12-6-6 4-12 6-16 6-6 0-8 0-10 0z"
            fill="#fff7d6"
            opacity="0.7"
          />
        </g>

        <g transform="translate(446 996)">
          <path
            d="M28 6c4 2 6 2 8 2 2 0 4 0 6-2-4 2-6 2-8 2-2 0-4 0-6-2z"
            fill="#fffbe8"
            opacity="0.68"
          />
        </g>

        <g transform="translate(468 1002)">
          <path
            d="M18 2c2 0 4 0 4 0 2 0 2 0 4-2-4 2-4 2-6 2-2 0-2 0-2 0z"
            fill="#fffef6"
            opacity="0.65"
          />
        </g>

        <g transform="translate(260 960)">
          <path
            d="M106 0c-18 32-20 62-2 92 18 28 52 46 104 52-48-16-76-44-86-80-6-24-6-44-16-64z"
            fill="#f5d688"
            opacity="0.5"
          />
        </g>

        <g transform="translate(320 990)">
          <path
            d="M86 0c-10 24-10 46 4 66 12 18 34 30 66 36-34-12-54-30-60-54-4-16-4-32-10-48z"
            fill="#fbe59a"
            opacity="0.5"
          />
        </g>

        <g transform="translate(360 1010)">
          <path
            d="M70 0c-8 18-6 34 6 48 10 12 26 20 46 24-24-10-38-22-40-40-2-10-2-22-12-32z"
            fill="#ffe7ac"
            opacity="0.5"
          />
        </g>

        <g transform="translate(400 1024)">
          <path
            d="M52 0c-4 12-4 22 4 30 6 8 16 14 30 16-16-6-26-14-26-26 0-8 0-12-8-20z"
            fill="#fff1c1"
            opacity="0.5"
          />
        </g>

        <g transform="translate(434 1034)">
          <path
            d="M38 0c-4 6-4 12 0 18 4 6 10 8 18 10-10-4-14-10-14-16 0-4 0-6-4-12z"
            fill="#fff7d6"
            opacity="0.5"
          />
        </g>

        <g transform="translate(460 1042)">
          <path
            d="M26 0c-2 4-2 6 0 8 2 4 6 4 12 6-6-2-8-6-8-10 0-2 0-2-4-4z"
            fill="#fffbe8"
            opacity="0.5"
          />
        </g>

        <g transform="translate(480 1048)">
          <path
            d="M18 0c-2 2 0 4 0 4 0 2 2 2 4 2-2-2-4-2-4-4 0-2 0-2 0-2z"
            fill="#fffef6"
            opacity="0.5"
          />
        </g>

        <g transform="translate(168 222)">
          <path
            d="M314 370c-14 36-10 72 10 104 18 28 46 48 86 60-40-20-68-44-82-76-12-26-16-52-14-82z"
            fill="#636363"
            opacity="0.45"
          />
        </g>

        <g transform="translate(134 202)">
          <path
            d="M330 370c-18 40-14 82 10 116 20 30 52 52 96 64-46-22-76-50-92-88-12-28-16-58-14-92z"
            fill="#575757"
            opacity="0.45"
          />
        </g>

        <g transform="translate(102 182)">
          <path
            d="M344 366c-22 44-18 92 8 132 22 36 62 62 114 76-54-24-88-56-106-100-14-32-18-66-16-108z"
            fill="#4c4c4c"
            opacity="0.45"
          />
        </g>

        <g transform="translate(70 164)">
          <path
            d="M360 360c-28 48-22 104 4 148 26 42 72 74 136 90-64-28-104-64-126-114-18-38-22-78-14-124z"
            fill="#3e3e3e"
            opacity="0.45"
          />
        </g>

        <g transform="translate(32 142)">
          <path
            d="M380 356c-34 52-30 116-4 166 30 52 88 92 168 110-80-32-130-74-158-130-22-44-28-90-6-146z"
            fill="#2e2e2e"
            opacity="0.45"
          />
        </g>

        <g transform="translate(12 122)">
          <path
            d="M392 352c-38 56-38 126-8 182 34 62 100 110 198 130-96-34-152-86-188-146-26-48-34-100-2-166z"
            fill="#1c1c1c"
            opacity="0.45"
          />
        </g>

        <g transform="translate(0 100)">
          <path
            d="M402 344c-44 60-46 138-14 200 38 70 118 124 232 150-110-36-172-92-214-156-30-50-40-106-4-194z"
            fill="#0d0d0d"
            opacity="0.45"
          />
        </g>

        <g transform="translate(470 940)" opacity="0.8">
          <path
            d="M110 0c-28 28-34 56-18 88 14 26 44 44 88 54-48-16-76-38-84-70-6-22-4-44 14-72z"
            fill="#8a5a12"
          />
          <path
            d="M140 12c-18 18-22 38-10 60 10 18 32 30 64 38-34-12-54-28-60-50-4-16-2-30 6-48z"
            fill="#ad741e"
          />
          <path
            d="M164 26c-12 12-16 26-6 40 8 12 24 22 46 26-24-8-38-20-40-34-2-10 0-20 0-32z"
            fill="#d59c3b"
          />
          <path
            d="M186 36c-8 8-10 16-4 24 4 8 16 12 32 16-18-6-28-12-28-22 0-6 0-10 0-18z"
            fill="#f4d076"
          />
          <path
            d="M204 46c-4 4-6 10-4 14 2 6 6 8 18 10-12-4-16-8-16-14 0-4 0-6 2-10z"
            fill="#ffe8a4"
          />
          <path
            d="M216 52c-2 2-4 4-2 6 0 2 4 4 10 4-8-2-10-4-10-8 0-2 0-2 2-2z"
            fill="#fff4ca"
          />
          <path
            d="M226 58c-2 0-2 2 0 4 2 2 4 2 6 2-4-2-6-2-6-6z"
            fill="#fff9e2"
          />
        </g>

        <g transform="translate(420 860)" opacity="0.9">
          <path
            d="M120 0c-36 38-46 78-28 122 16 36 54 64 110 78-60-22-96-52-108-92-8-28-6-58 26-108z"
            fill="#8a5a12"
            opacity="0.9"
          />
          <path
            d="M152 14c-22 26-26 52-12 78 10 24 38 40 76 52-42-16-66-38-74-64-6-20-4-40 10-66z"
            fill="#ad741e"
            opacity="0.88"
          />
          <path
            d="M178 30c-14 16-18 34-8 50 8 14 26 24 52 30-28-10-44-24-46-40-2-12 0-24 2-40z"
            fill="#d59c3b"
            opacity="0.86"
          />
          <path
            d="M200 46c-8 10-10 18-4 28 4 6 16 12 30 16-18-8-26-16-26-24 0-8 0-14 0-20z"
            fill="#f4d076"
            opacity="0.84"
          />
          <path
            d="M216 60c-4 4-4 10-2 14 2 4 6 6 16 8-12-6-14-10-12-18 0-2 0-2-2-4z"
            fill="#ffe8a4"
            opacity="0.82"
          />
          <path
            d="M228 68c-2 2-2 4 0 6 2 4 4 4 10 6-6-4-8-6-8-10 0-2 0-2-2-2z"
            fill="#fff4ca"
            opacity="0.8"
          />
          <path
            d="M240 74c-2 2-2 4 0 4 0 2 2 4 6 4-4-2-6-4-6-8z"
            fill="#fff9e2"
            opacity="0.78"
          />
        </g>

        <g transform="translate(210 180)">
          <path
            d="M470 182c-48-12-92 4-132 44-32 32-54 76-64 126 22-70 62-116 116-138 44-18 86-12 132 12-18-18-36-32-52-44z"
            fill="#0f0f0f"
            opacity="0.65"
          />
        </g>

        <g transform="translate(200 160)">
          <path
            d="M480 180c-56-14-108 6-154 54-36 36-60 86-74 142 24-80 70-132 130-156 52-22 102-16 152 12-18-22-36-40-54-52z"
            fill="#1c1c1c"
            opacity="0.6"
          />
        </g>

        <g transform="translate(190 140)">
          <path
            d="M494 178c-64-14-122 10-174 66-40 42-66 98-82 160 26-90 76-148 144-176 58-24 114-18 168 14-20-28-38-48-56-64z"
            fill="#292929"
            opacity="0.6"
          />
        </g>

        <g transform="translate(180 120)">
          <path
            d="M506 174c-72-12-138 14-194 76-46 48-76 112-96 184 30-102 86-164 162-196 64-28 126-22 184 16-20-36-44-64-56-80z"
            fill="#363636"
            opacity="0.6"
          />
        </g>

        <g transform="translate(170 100)">
          <path
            d="M520 172c-80-10-156 20-214 90-52 58-86 130-108 212 34-116 96-188 180-226 70-32 138-28 198 18-20-42-40-74-56-94z"
            fill="#424242"
            opacity="0.6"
          />
        </g>

        <g transform="translate(480 190)">
          <path
            d="M302 0c-34 36-54 76-58 120-4 36 6 72 28 108-14-48-16-90-6-126 12-40 32-72 68-102-14 2-24 4-32 0z"
            fill="#ffd36f"
            opacity="0.75"
          />
          <path
            d="M330 18c-26 30-38 62-38 96 0 30 10 60 30 92-12-38-16-70-10-100 6-34 18-60 46-88-10 0-20 0-28 0z"
            fill="#f8c053"
            opacity="0.75"
          />
          <path
            d="M356 36c-18 24-26 48-26 74 0 24 6 48 22 76-10-32-12-60-8-84 6-28 14-48 36-70-8 0-16 0-24 4z"
            fill="#ecaa34"
            opacity="0.75"
          />
          <path
            d="M380 54c-12 18-18 36-18 56 0 18 4 36 16 56-8-26-10-46-6-62 4-18 8-34 24-48-6 0-10 2-16-2z"
            fill="#dc931a"
            opacity="0.75"
          />
          <path
            d="M402 70c-8 12-10 26-10 40 0 12 2 26 12 40-8-18-10-32-8-44 4-14 6-26 20-36-6 0-8 0-14 0z"
            fill="#c97d0d"
            opacity="0.75"
          />
          <path
            d="M422 84c-4 8-6 16-6 24 0 8 2 16 8 26-6-12-8-20-6-30 2-8 4-14 12-20-4 0-6 0-8 0z"
            fill="#b66a06"
            opacity="0.75"
          />
          <path
            d="M440 100c-4 4-4 10-4 16 0 6 2 12 6 18-4-8-4-14-4-20 2-6 2-10 10-14-4 0-6 0-8 0z"
            fill="#a45a02"
            opacity="0.75"
          />
        </g>

        <g transform="translate(160 160)">
          <path
            d="M282 40c-24 32-28 66-14 104 12 32 36 56 70 70-34-18-54-42-64-74-8-24-8-46 8-74z"
            fill="#ffd36f"
            opacity="0.7"
          />
          <path
            d="M308 52c-18 26-20 52-10 76 8 20 26 38 50 48-24-14-38-32-44-54-6-18-4-34 4-54z"
            fill="#f8c053"
            opacity="0.7"
          />
          <path
            d="M330 64c-12 18-16 36-10 54 4 14 16 26 32 34-16-10-24-22-28-38-4-12-2-24 6-38z"
            fill="#ecaa34"
            opacity="0.7"
          />
          <path
            d="M350 76c-8 12-10 24-6 34 2 8 10 16 20 20-10-6-16-14-18-24-4-8-2-16 4-26z"
            fill="#dc931a"
            opacity="0.7"
          />
          <path
            d="M366 86c-6 8-6 16-2 22 2 4 6 8 12 12-6-4-10-10-10-16-2-6 0-12 0-18z"
            fill="#c97d0d"
            opacity="0.7"
          />
          <path
            d="M380 96c-4 4-4 8-2 12 0 4 4 6 8 8-4-2-6-6-6-10 0-2 0-6 0-10z"
            fill="#b66a06"
            opacity="0.7"
          />
          <path
            d="M392 102c-2 2-2 4 0 6 0 2 2 4 4 4-2-2-4-4-4-8z"
            fill="#a45a02"
            opacity="0.7"
          />
        </g>

        <g transform="translate(440 860)">
          <path
            d="M0 0c22 48 46 90 90 120 36 24 80 32 130 28-58 10-106 0-146-26-42-28-66-70-74-122z"
            fill="#876218"
            opacity="0.7"
          />
          <path
            d="M18 16c18 40 42 74 76 98 28 20 64 28 104 24-46 8-84 0-116-22-34-24-52-58-64-100z"
            fill="#a37b24"
            opacity="0.68"
          />
          <path
            d="M34 30c16 34 36 62 64 82 22 16 52 22 84 18-36 8-66 0-92-18-28-20-42-46-56-82z"
            fill="#c59636"
            opacity="0.66"
          />
          <path
            d="M48 44c12 26 28 48 48 62 16 12 38 18 64 14-28 6-50 0-68-14-20-14-32-34-44-62z"
            fill="#e1b453"
            opacity="0.64"
          />
          <path
            d="M62 56c10 18 20 34 34 44 10 8 26 10 42 8-20 4-36 0-48-8-14-10-22-24-32-44z"
            fill="#f9d679"
            opacity="0.62"
          />
          <path
            d="M74 68c8 14 14 24 22 30 8 4 18 6 30 4-14 4-24 0-32-4-8-6-12-16-20-30z"
            fill="#ffe9a0"
            opacity="0.6"
          />
          <path
            d="M84 78c6 10 10 16 16 18 4 2 12 2 18 2-10 2-18 0-22-4-4-4-8-10-12-16z"
            fill="#fff4c7"
            opacity="0.58"
          />
          <path
            d="M94 88c4 6 6 10 10 10 2 0 8 0 10 0-6 2-10 0-12-2-2-2-4-6-8-8z"
            fill="#fff9e0"
            opacity="0.56"
          />
        </g>

        <g transform="translate(580 860)">
          <path
            d="M0 0c-12 40-8 74 12 104 16 26 42 44 78 54-40-16-64-36-74-62-10-24-10-48-16-76z"
            fill="#876218"
            opacity="0.6"
          />
          <path
            d="M14 20c-8 28-4 52 10 72 12 18 32 30 60 36-30-12-48-28-56-46-6-16-6-32-14-62z"
            fill="#a37b24"
            opacity="0.58"
          />
          <path
            d="M28 34c-6 22-4 40 6 54 8 12 22 20 40 24-20-8-34-18-40-32-4-12-4-24-6-46z"
            fill="#c59636"
            opacity="0.56"
          />
          <path
            d="M40 46c-4 14-2 26 2 34 6 8 14 12 26 14-12-6-20-12-22-20-2-8-2-14-6-28z"
            fill="#e1b453"
            opacity="0.54"
          />
          <path
            d="M50 58c-2 8 0 14 2 18 4 4 10 6 16 6-8-4-10-8-12-12-2-4-2-10-6-12z"
            fill="#f9d679"
            opacity="0.52"
          />
          <path
            d="M58 66c0 4 0 6 2 8 2 2 6 4 10 4-4-2-6-4-6-6-2-2-2-4-6-6z"
            fill="#ffe9a0"
            opacity="0.5"
          />
        </g>

        <g transform="translate(200 160)">
          <path
            d="M298 344c-8 24-6 48 8 68 12 18 32 32 60 40-30-12-48-28-58-48-8-16-10-32-10-54z"
            fill="#fff5c0"
            opacity="0.4"
          />
        </g>

        <g transform="translate(180 140)">
          <path
            d="M308 340c-12 32-8 62 10 84 16 22 42 38 78 50-38-16-62-36-74-58-10-20-12-40-14-76z"
            fill="#fce089"
            opacity="0.42"
          />
        </g>

        <g transform="translate(160 120)">
          <path
            d="M320 334c-16 38-12 76 12 106 20 26 54 46 100 60-48-18-78-42-94-70-14-24-16-48-18-96z"
            fill="#f2c75f"
            opacity="0.44"
          />
        </g>

        <g transform="translate(506 894)">
          <path
            d="M0 0c10 36 26 66 52 90 24 20 54 32 90 34-38 4-72-6-100-28-26-22-40-52-42-96z"
            fill="#876218"
            opacity="0.6"
          />
        </g>

        <g transform="translate(530 918)">
          <path
            d="M0 0c8 28 22 52 40 70 18 16 40 24 68 26-28 2-52-6-72-22-18-16-30-36-36-74z"
            fill="#a37b24"
            opacity="0.58"
          />
        </g>

        <g transform="translate(552 938)">
          <path
            d="M0 0c6 20 16 36 28 48 12 10 28 16 48 18-20 2-38-4-52-16-12-12-20-26-24-50z"
            fill="#c59636"
            opacity="0.56"
          />
        </g>

        <g transform="translate(574 954)">
          <path
            d="M0 0c4 14 12 24 20 32 8 6 18 10 30 10-12 2-24-2-32-8-10-8-16-18-18-34z"
            fill="#e1b453"
            opacity="0.54"
          />
        </g>

        <g transform="translate(594 966)">
          <path
            d="M0 0c2 8 8 14 14 18 6 4 12 6 20 6-8 2-16 0-22-4-8-4-10-10-12-20z"
            fill="#f9d679"
            opacity="0.52"
          />
        </g>

        <g transform="translate(610 976)">
          <path
            d="M0 0c2 4 4 8 8 10 4 0 8 2 12 2-6 2-12 0-14-4-4-2-4-6-6-8z"
            fill="#ffe9a0"
            opacity="0.5"
          />
        </g>

        <g transform="translate(624 982)">
          <path
            d="M0 0c2 2 2 4 4 4 2 0 4 0 6 0-4 2-6 0-8-2-2-2-2-2-2-2z"
            fill="#fff4ca"
            opacity="0.48"
          />
        </g>

        <g transform="translate(264 896)">
          <path
            d="M0 0c12 60 42 102 92 132 38 24 86 36 140 32-58 8-108-4-150-32-42-30-68-74-82-132z"
            fill="#876218"
            opacity="0.65"
          />
        </g>

        <g transform="translate(288 924)">
          <path
            d="M0 0c10 48 34 84 72 110 30 20 66 28 110 28-46 4-86-6-120-30-34-24-56-58-62-108z"
            fill="#a37b24"
            opacity="0.63"
          />
        </g>

        <g transform="translate(308 948)">
          <path
            d="M0 0c8 34 26 60 52 80 22 16 48 22 80 22-32 4-60-4-84-22-24-18-40-40-48-80z"
            fill="#c59636"
            opacity="0.61"
          />
        </g>

        <g transform="translate(328 966)">
          <path
            d="M0 0c6 24 18 42 36 56 14 10 34 16 56 14-24 2-44-6-60-18-18-14-28-32-32-52z"
            fill="#e1b453"
            opacity="0.59"
          />
        </g>

        <g transform="translate(344 982)">
          <path
            d="M0 0c4 14 12 26 24 34 10 6 24 10 38 8-16 2-30-4-40-12-12-10-18-20-22-30z"
            fill="#f9d679"
            opacity="0.57"
          />
        </g>

        <g transform="translate(360 994)">
          <path
            d="M0 0c2 8 8 14 14 18 6 4 14 6 24 4-10 2-18 0-26-4-8-6-10-12-12-18z"
            fill="#ffe9a0"
            opacity="0.55"
          />
        </g>

        <g transform="translate(372 1004)">
          <path
            d="M0 0c2 4 4 8 8 10 2 0 8 2 12 2-6 2-12 0-14-2-4-4-4-6-6-10z"
            fill="#fff4ca"
            opacity="0.53"
          />
        </g>

        <g transform="translate(382 1012)">
          <path
            d="M0 0c2 2 2 4 4 4 2 0 4 0 6 0-4 2-6 0-8-2-2-2-2-2-2-2z"
            fill="#fff9e2"
            opacity="0.51"
          />
        </g>

        <g transform="translate(430 862)">
          <path
            d="M96 138c46 16 94 18 144 4 44-12 84-36 116-68-42 54-94 84-156 94-54 8-106-2-148-30z"
            fill="#fce089"
            opacity="0.52"
          />
          <path
            d="M120 160c40 12 82 10 128-4 40-12 74-30 104-58-34 42-78 68-130 80-46 10-90 6-128-18z"
            fill="#f2c75f"
            opacity="0.48"
          />
          <path
            d="M142 178c34 8 68 6 106-4 32-10 62-26 88-48-28 34-64 56-108 66-38 8-74 4-106-14z"
            fill="#dc931a"
            opacity="0.44"
          />
          <path
            d="M162 192c28 6 54 4 84-2 26-10 48-20 70-38-24 26-52 42-86 50-30 6-58 4-82-10z"
            fill="#c97d0d"
            opacity="0.42"
          />
          <path
            d="M182 204c22 4 42 2 64-2 20-6 36-14 54-26-18 20-42 32-66 38-24 4-46 2-52-10z"
            fill="#b66a06"
            opacity="0.38"
          />
          <path
            d="M198 212c18 4 34 2 52 0 16-4 28-10 40-18-14 14-30 22-48 26-18 2-30 2-44-8z"
            fill="#a45a02"
            opacity="0.34"
          />
        </g>

        <g transform="translate(220 880)">
          <path
            d="M80 180c58 24 120 32 188 18 58-12 112-38 156-76-52 58-114 94-188 104-66 10-128-4-180-46z"
            fill="#fce089"
            opacity="0.48"
          />
          <path
            d="M110 204c48 14 98 16 154 6 46-8 88-26 124-52-42 42-92 68-150 80-52 10-102 4-148-34z"
            fill="#f2c75f"
            opacity="0.44"
          />
          <path
            d="M136 224c40 10 82 12 128 2 36-8 68-24 96-46-34 32-76 52-124 60-42 8-82 4-116-16z"
            fill="#dc931a"
            opacity="0.4"
          />
          <path
            d="M158 240c32 6 60 6 96 0 28-6 52-18 74-34-26 26-58 38-92 44-32 4-60 2-78-10z"
            fill="#c97d0d"
            opacity="0.36"
          />
          <path
            d="M178 254c24 4 46 4 72 0 22-4 40-12 58-24-20 18-44 30-72 34-26 4-46 2-58-10z"
            fill="#b66a06"
            opacity="0.32"
          />
          <path
            d="M196 264c18 2 36 2 54 0 16-2 30-8 44-18-16 12-34 20-52 22-20 2-32 2-46-4z"
            fill="#a45a02"
            opacity="0.3"
          />
        </g>

        <g transform="translate(620 940)">
          <path
            d="M0 0c40 10 78 10 114-4 30-12 56-30 78-56-30 36-64 58-104 68-36 8-70 6-100-8z"
            fill="#fce089"
            opacity="0.48"
          />
          <path
            d="M20 16c32 8 62 8 92 0 24-8 44-20 62-38-24 28-54 44-86 50-28 6-54 4-68-12z"
            fill="#f2c75f"
            opacity="0.44"
          />
          <path
            d="M38 28c24 6 44 6 66 0 18-6 34-14 48-28-18 18-42 30-64 36-20 4-40 4-50-8z"
            fill="#dc931a"
            opacity="0.4"
          />
          <path
            d="M54 38c18 4 34 4 50 0 16-4 26-10 38-18-14 12-30 20-46 24-16 2-28 2-42-6z"
            fill="#c97d0d"
            opacity="0.36"
          />
          <path
            d="M68 46c12 2 24 4 36 2 10-2 20-6 30-12-12 10-24 16-36 18-12 2-20 0-30-8z"
            fill="#b66a06"
            opacity="0.32"
          />
          <path
            d="M78 52c10 0 18 2 26 0 8-2 12-4 20-8-10 6-18 10-26 10-8 0-12 0-20-2z"
            fill="#a45a02"
            opacity="0.3"
          />
        </g>

        <g transform="translate(110 860)">
          <path
            d="M70 180c36 42 80 66 134 74 48 8 96 0 146-24-54 28-106 36-158 24-48-10-88-34-122-74z"
            fill="#876218"
            opacity="0.68"
          />
          <path
            d="M92 202c30 32 68 52 112 60 38 6 76 0 118-16-46 20-88 26-132 18-40-8-74-26-98-62z"
            fill="#a37b24"
            opacity="0.66"
          />
          <path
            d="M112 222c24 26 54 40 88 46 30 4 60 2 94-10-36 16-68 20-102 14-32-6-56-20-80-50z"
            fill="#c59636"
            opacity="0.64"
          />
          <path
            d="M130 238c18 20 40 32 66 34 22 4 44 2 68-6-26 10-50 12-74 8-22-4-40-14-60-36z"
            fill="#e1b453"
            opacity="0.62"
          />
          <path
            d="M146 250c12 14 28 22 46 24 16 2 32 0 50-6-18 8-36 8-52 6-16-2-28-8-44-24z"
            fill="#f9d679"
            opacity="0.6"
          />
          <path
            d="M160 262c8 8 20 12 32 12 10 0 20-2 32-6-12 6-24 6-34 4-12-2-20-6-30-10z"
            fill="#ffe9a0"
            opacity="0.58"
          />
          <path
            d="M174 270c6 6 12 8 18 8 6 0 12 0 20-4-8 4-14 4-20 4-6-2-12-4-18-8z"
            fill="#fff4ca"
            opacity="0.56"
          />
        </g>

        <g transform="translate(320 1020)">
          <path
            d="M186 0c-40 18-66 46-76 82-8 28-8 58 0 90-10-38-10-72 0-104 12-40 36-66 76-68z"
            fill="#ffd36f"
            opacity="0.7"
          />
          <path
            d="M204 12c-32 16-50 40-58 70-6 22-6 46 0 72-8-30-8-58 0-86 10-32 28-52 58-56z"
            fill="#f8c053"
            opacity="0.68"
          />
          <path
            d="M220 24c-24 12-38 32-44 52-6 18-6 38 0 58-6-22-6-44 0-66 6-24 18-40 44-44z"
            fill="#ecaa34"
            opacity="0.66"
          />
          <path
            d="M234 36c-16 8-26 22-30 38-4 12-4 26 0 40-4-16-4-30 0-46 4-18 12-28 30-32z"
            fill="#dc931a"
            opacity="0.64"
          />
          <path
            d="M246 46c-10 6-16 16-18 26-2 8-2 18 0 28-2-12-2-22 0-34 2-12 8-18 18-20z"
            fill="#c97d0d"
            opacity="0.62"
          />
          <path
            d="M258 56c-6 4-10 10-10 16-2 6-2 12 0 18-2-8-2-14 0-22 2-8 4-10 10-12z"
            fill="#b66a06"
            opacity="0.6"
          />
          <path
            d="M268 64c-4 2-6 6-6 10-2 4-2 8 0 12-2-6-2-10 0-14 2-4 2-6 6-8z"
            fill="#a45a02"
            opacity="0.58"
          />
        </g>

        <g transform="translate(300 1040)">
          <path
            d="M208 0c-30 18-50 44-58 74-6 22-6 46 0 72-8-30-8-58 0-86 10-32 28-52 58-60z"
            fill="#ffd36f"
            opacity="0.65"
          />
          <path
            d="M224 10c-24 14-40 34-46 54-6 16-6 34 0 52-6-22-6-42 0-60 6-22 18-38 46-46z"
            fill="#f8c053"
            opacity="0.63"
          />
          <path
            d="M238 20c-16 10-26 24-30 38-4 10-4 22 0 34-4-14-4-26 0-40 4-16 12-26 30-32z"
            fill="#ecaa34"
            opacity="0.61"
          />
          <path
            d="M250 30c-10 6-16 12-18 20-2 10-2 18 0 26-2-12-2-20 0-28 2-12 6-16 18-18z"
            fill="#dc931a"
            opacity="0.59"
          />
          <path
            d="M260 38c-8 4-10 10-10 16-2 6-2 12 0 18-2-8-2-12 0-18 0-8 2-12 10-14z"
            fill="#c97d0d"
            opacity="0.57"
          />
          <path
            d="M270 46c-4 2-6 6-6 10-2 4-2 8 0 12-2-6-2-8 0-12 0-4 0-6 6-10z"
            fill="#b66a06"
            opacity="0.55"
          />
        </g>

        <g transform="translate(280 1060)">
          <path
            d="M228 0c-20 16-34 34-40 54-4 16-4 34 0 52-4-22-4-42 0-58 8-24 18-40 40-48z"
            fill="#ffd36f"
            opacity="0.6"
          />
          <path
            d="M242 8c-16 12-26 26-30 40-2 10-2 22 0 34-2-16-2-28 0-40 4-16 12-24 30-34z"
            fill="#f8c053"
            opacity="0.58"
          />
          <path
            d="M254 16c-12 8-18 16-20 26-2 6-2 14 0 22-2-8-2-18 0-26 2-10 6-16 20-22z"
            fill="#ecaa34"
            opacity="0.56"
          />
          <path
            d="M264 24c-6 4-10 8-10 12 0 6 0 12 0 18-2-8-2-12 0-18 0-6 4-8 10-12z"
            fill="#dc931a"
            opacity="0.54"
          />
        </g>

        <g transform="translate(340 1076)">
          <path
            d="M200 0c-16 12-24 24-28 40-2 12-2 22 0 34-4-12-4-24 0-34 4-14 12-24 28-40z"
            fill="#ffd36f"
            opacity="0.55"
          />
        </g>

        <g transform="translate(220 840)">
          <path
            d="M120 80c40 50 88 80 146 90 46 8 94 0 146-26-54 32-106 42-158 32-50-10-90-36-134-96z"
            fill="#ffd36f"
            opacity="0.52"
          />
        </g>

        <text
          x="120"
          y="960"
          fill="url(#ornamentGold)"
          fontFamily="'Playfair Display', 'Times New Roman', serif"
          fontSize="92"
          fontWeight="600"
          letterSpacing="18"
        >
          LA FLOR
        </text>
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="wrapper">
      <h1 className="title">La Flor Illustration</h1>
      <div className="card">
        <SVGIllustration />
      </div>
      <p className="caption">
        La Flor · Corazón de Chicano arte – Día de los Muertos adornos, oro
        cálido y rosas en penumbra.
      </p>
    </main>
  );
}
