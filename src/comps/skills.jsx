import React from "react";

const Skills = () => {
  // Standardized Card Class: Fixed width/height, flex column, centered content
  const cardStyle =
    "ring-2 w-24 h-32 sm:w-28 sm:h-36 mt-7 flex flex-col items-center justify-between p-3 transition-transform duration-300 hover:scale-105 bg-gray-800 rounded-2xl";
  const iconStyle = "w-12 h-12 sm:w-16 sm:h-16 object-contain";
  const textStyle =
    "font-semibold text-center text-white text-xs sm:text-sm leading-tight mt-auto";

  return (
    <div>
      <section className="bg-gray-950 bg-center bg-cover min-h-screen">
        <div className="backdrop-blur-xl pb-12">
          <h2 className="text-center pt-5 text-white font-medium text-2xl">
            My Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-10 md:px-20 lg:px-40 xl:px-60 place-items-center">
            {/* Power BI */}
            <div
              className={`${cardStyle} ring-yellow-500 shadow-2xl shadow-yellow-500/60`}
            >
              <svg
                viewBox="0 0 32 32"
                className={iconStyle}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#E6AD00"
                  d="M21 7.5c0-.828.672-1.5 1.5-1.5h4c.828 0 1.5.672 1.5 1.5v17c0 .828-.672 1.5-1.5 1.5h-4c-.828 0-1.5-.672-1.5-1.5v-17z"
                />
                <path
                  fill="#F2C811"
                  d="M13 13.5c0-.828.672-1.5 1.5-1.5h4c.828 0 1.5.672 1.5 1.5v11c0 .828-.672 1.5-1.5 1.5h-4c-.828 0-1.5-.672-1.5-1.5v-11z"
                />
                <path
                  fill="#FFF176"
                  d="M5 19.5c0-.828.672-1.5 1.5-1.5h4c.828 0 1.5.672 1.5 1.5v5c0 .828-.672 1.5-1.5 1.5h-4c-.828 0-1.5-.672-1.5-1.5v-5z"
                />
              </svg>
              <h2 className={textStyle}>Power BI</h2>
            </div>

            {/* Excel */}
            <div
              className={`${cardStyle} ring-emerald-600 shadow-2xl shadow-emerald-600/50`}
            >
              <svg
                viewBox="0 0 48 48"
                className={iconStyle}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#1D6F42"
                  d="M24 4H12C7.58 4 4 7.58 4 12v24c0 4.42 3.58 8 8 8h24c4.42 0 8-3.58 8-8V24L24 4z"
                />
                <path
                  fill="#fff"
                  d="M31.3 26h-4.3l-2.5-4.1-2.5 4.1h-4.3l4.6-7.1-4.4-6.9h4.3l2.3 3.9 2.3-3.9h4.3l-4.4 6.9 4.6 7.1z"
                />
              </svg>
              <h2 className={textStyle}>Excel</h2>
            </div>

            {/* n8n */}
            <div
              className={`${cardStyle} ring-orange-600 shadow-2xl shadow-orange-600/50`}
            >
              <svg
                viewBox="0 0 24 24"
                className={iconStyle}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="#FF4F43"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#FF4F43"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#FF4F43"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className={textStyle}>
                n8n
                <br />
                Automation
              </h2>
            </div>

            {/* Python */}
            <div
              className={`${cardStyle} ring-blue-500 shadow-2xl shadow-blue-500/60`}
            >
              <svg viewBox="0 0 128 128" className={iconStyle}>
                <path
                  fill="#306998"
                  d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008z"
                />
                <path
                  fill="#FFE873"
                  d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268z"
                />
              </svg>
              <h2 className={textStyle}>Python</h2>
            </div>

            {/* SQL */}
            <div
              className={`${cardStyle} ring-rose-500 shadow-2xl shadow-rose-600`}
            >
              <svg
                viewBox="0 0 76 76"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                baseProfile="full"
                enable-background="new 0 0 76.00 76.00"
                class="size-15 sm:size-25 sm:-ml-1"
                xml:space="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="#c51b1b"
                    fill-opacity="0.701961"
                    stroke-width="0.2"
                    stroke-linejoin="round"
                    d="M 38,33C 47.384,33 54.9921,30.9874 55,28.5039L 55,52.5C 55,54.9853 47.3888,57 38,57L 38,49.1579L 38.0675,49.16L 39.23,50.4137C 39.6033,50.8029 39.9871,51.1417 40.3813,51.43C 40.7754,51.7183 41.1875,51.9454 41.6175,52.1113C 42.0475,52.2771 42.5183,52.36 43.03,52.36L 44.1075,52.2913L 44.8,52.155L 44.8,50.085L 44.5425,50.1663L 44.25,50.2288L 43.9487,50.2675L 43.675,50.28L 42.8237,50.215L 42.0613,49.9813L 41.3237,49.5213L 40.55,48.7775C 41.635,48.3892 42.4808,47.72 43.0875,46.77C 43.6958,45.81 44,44.6633 44,43.33C 44,41.6233 43.5025,40.2508 42.5075,39.2125C 41.5175,38.1642 40.2233,37.64 38.625,37.64L 38,37.6653L 38,33 Z M 52,23.5L 55,23.5L 55,25.5C 55,27.9853 47.3888,30 38,30L 38,25C 45.732,25 52,24.3285 52,23.5 Z M 38.5375,39.88C 39.3975,39.88 40.07,40.1992 40.555,40.8375C 41.0383,41.4658 41.28,42.34 41.28,43.46C 41.28,44.54 41.0275,45.3892 40.5225,46.0075C 40.0242,46.6158 39.3417,46.92 38.475,46.92L 38,46.8837L 38,39.9251L 38.5375,39.88 Z M 52.48,49L 52.48,46.92L 48.32,46.92L 48.32,37.8L 45.76,37.8L 45.76,49L 52.48,49 Z "
                  ></path>{" "}
                  <path
                    fill="#c51b1b"
                    fill-opacity="1"
                    stroke-width="0.2"
                    stroke-linejoin="round"
                    d="M 38,57C 28.6111,57 21,54.9853 21,52.5L 21,28.5C 21,30.9853 28.6112,33 38,33L 38,37.6436C 36.5609,37.7589 35.3876,38.296 34.48,39.2549C 33.4533,40.3399 32.94,41.7666 32.94,43.5349C 32.94,44.3083 33.0616,45.0324 33.305,45.7074C 33.5483,46.3824 33.8929,46.9704 34.3387,47.4712C 34.7846,47.972 35.3216,48.3703 35.95,48.6662C 36.5654,48.9559 37.2487,49.1134 38,49.1385L 38,57 Z M 55,23.5L 52,23.5C 52,22.6716 45.732,22 38,22C 30.268,22 24,22.6716 24,23.5C 24,24.3285 30.268,25 38,25L 38,30C 28.6111,30 21,27.9853 21,25.5L 21,23.5C 21,21.0148 28.6112,19 38,19C 47.384,19 54.9921,21.0127 55,23.5 Z M 24.14,48.5324C 24.5483,48.7341 25.0312,48.8858 25.5887,48.9874C 26.1462,49.0891 26.7341,49.1399 27.3525,49.1399C 27.9541,49.1399 28.5258,49.0829 29.0675,48.9687C 29.6091,48.8545 30.0841,48.6666 30.4925,48.4049C 30.9008,48.1433 31.2241,47.8016 31.4625,47.3799C 31.7008,46.9583 31.82,46.4366 31.82,45.8149C 31.82,45.3649 31.7533,44.9704 31.62,44.6312C 31.4866,44.292 31.2941,43.9904 31.0425,43.7262C 30.7908,43.462 30.4891,43.2249 30.1375,43.0149L 28.9475,42.4199L 28.0775,42.0287L 27.4225,41.6399L 27.0062,41.2212C 26.9087,41.0737 26.86,40.9066 26.86,40.7199C 26.86,40.5416 26.9037,40.3804 26.9912,40.2362L 27.3612,39.8649L 27.9475,39.6249L 28.7175,39.5399L 29.37,39.5874L 30.06,39.7349L 30.735,39.9874L 31.34,40.3399L 31.34,38.0424C 30.96,37.8991 30.5445,37.7929 30.0937,37.7237L 28.5425,37.6199C 27.9475,37.6199 27.3841,37.6833 26.8525,37.8099C 26.3208,37.9366 25.8529,38.1349 25.4487,38.4049C 25.0445,38.6749 24.7254,39.0183 24.4912,39.4349C 24.257,39.8516 24.14,40.3499 24.14,40.9299C 24.14,41.6699 24.3516,42.3016 24.775,42.8249C 25.1983,43.3483 25.8416,43.7908 26.705,44.1524L 27.6512,44.5649L 28.41,44.9849L 28.915,45.4587C 29.0383,45.6295 29.1,45.8233 29.1,46.0399L 28.9837,46.5074C 28.9062,46.6508 28.7883,46.7754 28.63,46.8812L 28.0387,47.1299L 27.21,47.2199C 26.6716,47.2199 26.1383,47.1266 25.61,46.9399C 25.0816,46.7533 24.5916,46.4733 24.14,46.0999L 24.14,48.5324 Z M 36.4325,40.8324C 36.8449,40.3182 37.3674,40.0079 38,39.9016L 38,46.8667C 37.3683,46.7709 36.8433,46.4678 36.425,45.9574C 35.915,45.3241 35.66,44.4699 35.66,43.3949C 35.66,42.3299 35.9175,41.4758 36.4325,40.8324 Z "
                  ></path>{" "}
                </g>
              </svg>
              <h2 className={textStyle}>SQL</h2>
            </div>

            {/* Pandas */}
            <div
              className={`
    ${cardStyle}
    ring-orange-600 shadow-2xl shadow-orange-600/50
    flex flex-col items-center justify-center gap-4
    
    rounded-2xl
    p-6
    border border-white/10
    shadow-[0_10px_40px_rgba(0,0,0,0.6)]
    hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]
    hover:-translate-y-2
    transition-all duration-300
  `}
            >
              <svg viewBox="0 0 512 512" className="w-16 h-16 ml-2.5">
                <rect
                  x="50"
                  y="40"
                  width="50"
                  height="420"
                  rx="8"
                  fill="#130654"
                />
                <rect
                  x="50"
                  y="160"
                  width="50"
                  height="50"
                  rx="8"
                  fill="#FFCA28"
                />
                <rect
                  x="50"
                  y="280"
                  width="50"
                  height="50"
                  rx="8"
                  fill="#E70488"
                />

                <rect
                  x="130"
                  y="80"
                  width="50"
                  height="340"
                  rx="8"
                  fill="#130654"
                />
                <rect
                  x="130"
                  y="200"
                  width="50"
                  height="50"
                  rx="8"
                  fill="#E70488"
                />

                <rect
                  x="210"
                  y="80"
                  width="50"
                  height="340"
                  rx="8"
                  fill="#130654"
                />
                <rect
                  x="210"
                  y="260"
                  width="50"
                  height="50"
                  rx="8"
                  fill="#FFCA28"
                />

                <rect
                  x="290"
                  y="40"
                  width="50"
                  height="420"
                  rx="8"
                  fill="#130654"
                />
                <rect
                  x="290"
                  y="120"
                  width="50"
                  height="50"
                  rx="8"
                  fill="#FFCA28"
                />
                <rect
                  x="290"
                  y="340"
                  width="50"
                  height="50"
                  rx="8"
                  fill="#E70488"
                />
              </svg>

              <h2 className={`${textStyle} text-white text-lg font-semibold`}>
                Pandas
              </h2>
            </div>

            {/* Jupyter Notebook */}
            <div
              className={`${cardStyle} ring-orange-600 shadow-2xl shadow-orange-600/50`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path
                  d="M109.766 7.281a7.691 7.691 0 01-1.09 4.282 7.583 7.583 0 01-3.262 2.949 7.49 7.49 0 01-4.34.62 7.525 7.525 0 01-3.953-1.913A7.642 7.642 0 0195.137 5a7.606 7.606 0 012.629-3.531 7.509 7.509 0 014.136-1.461 7.51 7.51 0 015.422 1.996 7.627 7.627 0 012.438 5.273zm0 0"
                  fill="#767677"
                />
                <path
                  d="M65.758 96.79c-20.098 0-37.649-7.364-46.766-18.267a49.95 49.95 0 0018.102 24.254 49.251 49.251 0 0028.676 9.215 49.279 49.279 0 0028.675-9.215 49.917 49.917 0 0018.094-24.254C103.406 89.426 85.855 96.79 65.758 96.79zm0 0M65.75 25.883c20.098 0 37.652 7.367 46.766 18.265a49.95 49.95 0 00-18.102-24.253 49.27 49.27 0 00-28.672-9.22 49.27 49.27 0 00-28.672 9.22A49.909 49.909 0 0018.97 44.148C28.102 33.27 45.652 25.883 65.75 25.883zm0 0"
                  fill="#f37726"
                />
                <path
                  d="M38.164 117.984a9.671 9.671 0 01-1.371 5.399 9.5 9.5 0 01-9.59 4.504 9.405 9.405 0 01-4.98-2.418 9.671 9.671 0 01-2.809-4.797 9.73 9.73 0 01.313-5.567 9.624 9.624 0 013.328-4.453 9.466 9.466 0 0112.043.688 9.63 9.63 0 013.066 6.648zm0 0"
                  fill="#989798"
                />
                <path
                  d="M21.285 23.418a5.53 5.53 0 01-3.14-.816 5.627 5.627 0 01-2.618-5.672 5.612 5.612 0 011.407-2.95 5.593 5.593 0 012.789-1.664 5.46 5.46 0 013.238.184 5.539 5.539 0 012.586 1.969 5.66 5.66 0 01-.399 7.129 5.557 5.557 0 01-3.867 1.82zm0 0"
                  fill="#6f7070"
                />
              </svg>
              <h2 className={textStyle}>
                Jupyter
                <br />
                Notebook
              </h2>
            </div>

            {/* Problem Solving */}
            <div
              className={`${cardStyle} ring-purple-500 shadow-2xl shadow-purple-500/50`}
            >
              <svg viewBox="0 0 24 24" className={iconStyle} fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#A855F7"
                  strokeWidth="2"
                />
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#A855F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className={textStyle}>
                Problem
                <br />
                Solving
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
