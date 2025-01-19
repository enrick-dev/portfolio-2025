import { HTMLAttributes, useEffect, useState } from 'react';

const randomItem = (array: Array<any>, i?: number) =>
  i == undefined
    ? array[Math.floor(Math.random() * array.length)]
    : array.reverse()[i];

const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export interface TextScrambleProps extends HTMLAttributes<HTMLDivElement> {
  texts: string;
  className?: string;
  letterSpeed?: number;
  nextLetterSpeed?: number;
  paused?: boolean;
  pauseTime?: number;
}

const TextScramble = ({
  texts,
  className,
  letterSpeed = 1,
  nextLetterSpeed = 40,
  paused = false,
  pauseTime = 1500,
  ...rest
}: TextScrambleProps) => {
  const symbols: string[] = texts.split('').reverse().join('').split('');

  const [currentText, setCurrentText] = useState<string>(texts);

  const initSymbols: string = randomItem(symbols);

  const [displayedText, setDisplayedText] = useState<string>(initSymbols);

  const leftIndexes: number[] = [];

  const defaultLeftIndexes = (): void => {
    currentText.split('').forEach((_, i) => {
      leftIndexes.push(i);
    });
  };

  let bakeLetterInterval: any = 0;
  let bakeTextInterval: any = 0;

  const bakeLetter = () => {
    bakeLetterInterval = setInterval(() => {
      if (!paused) {
        const updatedText: string[] = [];

        currentText.split('').forEach((_, i) => {
          if (!leftIndexes.includes(i)) {
            updatedText[i] = currentText[i];
            return;
          }

          const randomSymbol = randomItem(symbols, i);
          updatedText[i] = randomSymbol;
        });

        setDisplayedText(updatedText.join(''));
      }
    }, letterSpeed);
  };

  const bakeText = () => {
    defaultLeftIndexes();
    bakeLetter();

    bakeTextInterval = setInterval(() => {
      if (!paused) {
        if (leftIndexes.length === 0) {
          clearInterval(bakeLetterInterval);
          clearInterval(bakeTextInterval);

          setTimeout(() => {
            setCurrentText(currentText);
            defaultLeftIndexes();
          }, pauseTime);
        }

        leftIndexes.shift();
      }
    }, nextLetterSpeed);
  };

  useEffect(() => {
    if (!paused) bakeText();
  }, [currentText, paused]);

  return (
    <div className={className} {...rest} onMouseEnter={bakeText}>
      <p className="flex flex-row flex-wrap">{displayedText}</p>
    </div>
  );
};

export default TextScramble;
