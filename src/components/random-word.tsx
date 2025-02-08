export default ({ words }: { words: string[] }) => {
  return words[Math.floor(Math.random() * words.length)];
};
