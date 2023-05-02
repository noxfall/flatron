const colors = (mode) => ({
  ...(mode === 'dark'
    ? {
      bgcolor: {
        100: "#d5d5d8",
        200: "#ababb0",
        300: "#808289",
        400: "#565861",
        500: "#2c2e3a",  // MEDIUM GRAY [#282A36]
        600: "#23252e",
        700: "#1a1c23",
        800: "#121217",
        900: "#09090c"
      },
      primary: {
        100: "#d2d3d5",
        200: "#a5a6ab",
        300: "#797a81",
        400: "#4c4d57",
        500: "#1f212d", // DARK INDIGO
        600: "#191a24",
        700: "#13141b",
        800: "#0c0d12",
        900: "#060709"
      },
      secondary: {
        100: "#FFFFFF",
        200: "#b3b5bc",
        300: "#8e8f9a",
        400: "#686a79",
        500: "#424557", // INDIGO & WHITE
        600: "#353746",
        700: "#282934",
        800: "#1a1c23",
        900: "#0d0e11"
      },
      indigoAccent: {
        100: "#e0e3ed",
        200: "#c0c7db",
        300: "#a1aac8",
        400: "#818eb6",
        500: "#6272a4", // LIGHT INDIGO
        600: "#414964",
        700: "#424557",
        800: "#272e42",
        900: "#141721"
      },
      pinkAccent: {
        100: "#fee6f6",
        200: "#fecded",
        300: "#fdb5e5",
        400: "#fd9cdc",
        500: "#fc83d3", // PINK HIGHLIGHT
        600: "#ca69a9",
        700: "#974f7f",
        800: "#653454",
        900: "#321a2a"
      },
      greenAccent: {
        100: "#d8f8e0",
        200: "#b1f1c1",
        300: "#8aeba3",
        400: "#63e484",
        500: "#3cdd65", // GREEN HIGHLIGHT
        600: "#30b151",
        700: "#316347",
        800: "#185828",
        900: "#0c2c14"
      },              // D A R K
    } : {             // L I G H T
      bgcolor: {
        100: "#d5d5d8",
        200: "#ababb0",
        300: "#808289",
        400: "#565861",
        500: "#2c2e3a",
        600: "#23252e",
        700: "#1a1c23",
        800: "#121217",
        900: "#09090c"
      },
      primary: {
        100: "#d2d3d5",
        200: "#a5a6ab",
        300: "#797a81",
        400: "#4c4d57",
        500: "#1f212d",
        600: "#191a24",
        700: "#13141b",
        800: "#0c0d12",
        900: "#060709"
      },
      secondary: {
        100: "#FFFFFF",
        200: "#b3b5bc",
        300: "#8e8f9a",
        400: "#686a79",
        500: "#424557",
        600: "#353746",
        700: "#282934",
        800: "#1a1c23",
        900: "#0d0e11"
      },
      indigoAccent: {
        100: "#e0e3ed",
        200: "#c0c7db",
        300: "#a1aac8",
        400: "#818eb6",
        500: "#6272a4",
        600: "#4e5b83",
        700: "#414964",
        800: "#272e42",
        900: "#141721"
      },
      pinkAccent: {
        100: "#fee6f6",
        200: "#fecded",
        300: "#fdb5e5",
        400: "#fd9cdc",
        500: "#fc83d3",
        600: "#ca69a9",
        700: "#974f7f",
        800: "#653454",
        900: "#321a2a"
      },
      greenAccent: {
        100: "#d8f8e0",
        200: "#b1f1c1",
        300: "#8aeba3",
        400: "#63e484",
        500: "#3cdd65",
        600: "#30b151",
        700: "#316347",
        800: "#185828",
        900: "#0c2c14"
      },
    })
});

/*
$bgdarker: #1f212d;
$bgdark: #2c2e3a;
$bgdefault: #424557;
$bglight: #555977;
$bglighter: #6a6f95;

$background: $bgdark;
$background2: $bgdefault;
$background3: $bgdarker;
$lightbg: $bglighter;

$grey: #f8f8f2;
$blue: #6272a4;
$cyan: #8be9fd;
$green: #3cdd65;
$orange: #ffb86c;
$pink: #fc83d3;
$purple: #bd93f9;
$red: #ff5555;
$yellow: #f1fa8c;
$white: #fafafa;
$black: #202020;

$very-short-duration: 0.1s;
$short-duration: 0.3s;
$medium-duration: 0.5s;
$long-duration: 1s;

$nuclear-font: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
*/