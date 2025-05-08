/**
 * Logs a string to the console with a fun letter effect
 * Inspired from bulbhead from figlet
 * http://www.figlet.org/fontdb_example.cgi?font=bulbhead.flf
 * @param {string} string - The text to display in fun style
 */
export const Logger = (string) => {
  // Define tthe character mappings
  const charMap = {
    A: ["  __   ", " / ,\\  ", "/    \\ ", "\\_/\\_/ "],
    B: [" ____  ", "(  , \\ ", " ) , ( ", "(____/ "],
    C: ["  ___  ", " / __) ", "( (__  ", " \\___) "],
    D: [" ____  ", "(    \\ ", " ) D  )", "(____/ "],
    E: [" ____  ", "(  __) ", " ) _)  ", "(____) "],
    F: [" ____  ", "(  __) ", " ) _)  ", "(__)   "],
    G: ["  ___  ", " / __) ", "( (_ \\ ", " \\___/ "],
    H: [" _  _  ", "/ )( \\ ", ") __ ( ", "\\_)(_/ "],
    I: ["  __   ", " (  )  ", "  )(   ", " (__)  "],
    J: ["   __  ", " .(  ) ", "/ \\) \\ ", "\\____/ "],
    K: [" __ _  ", "(  / ) ", " )  (  ", "(__\\_) "],
    L: [" __    ", "(  )   ", "/ (_/\\ ", "\\____/ "],
    M: [" _  _  ", "( \\/ ) ", "/ \\/ \\ ", "\\_)(_/ "],
    N: [" __ _  ", "(  ( \\ ", "/    / ", "\\_)__) "],
    O: ["  __   ", " /  \\  ", "(  O ) ", " \\__/  "],
    P: [" ____  ", "(  , \\ ", " ) __/ ", "(__)   "],
    Q: ["  __   ", " /  \\  ", "(  O ) ", " \\__\\) "],
    R: [" ____  ", "(  , \\ ", " )   / ", "(__\\_) "],
    S: [" ____  ", "/ ___) ", "\\___ \\ ", "(____/ "],
    T: [" ____  ", "(_  _) ", "  )(   ", " (__)  "],
    U: [" _  _  ", "/ )( \\ ", ") \\/ ( ", "\\____/ "],
    V: [" _  _  ", "/ )( \\ ", "\\ \\/ / ", " \\__/  "],
    W: [" _  _  ", "/ )( \\ ", "\\ /\\ / ", "(_/\\_) "],
    X: [" _  _  ", "( \\/ ) ", " )  (  ", "(_/\\_) "],
    Y: [" _  _  ", "( \\/ ) ", " )  /  ", "(__/   "],
    Z: [" ____  ", "(__  ) ", " / _/  ", "(____) "],
    ".": [" ", " ", " ", "."],
    " ": ["    ", "    ", "    ", "    "],
    ":": [" ", " ", ".", "."],
  };

  // Convert input to uppercase and split into characters
  const chars = string.toUpperCase().split("");
  // Build each line of the output
  let outputLine = "";
  for (let line = 0; line < 4; line++) {
    let defaultChar = ".";
    chars.forEach((char) => {
      const charLines = charMap[char] || defaultChar;
      outputLine += charLines[line];
    });
    outputLine += "\n";
  }
  console.log(outputLine);
};

// Example usage:
// Logger("HELLO");
