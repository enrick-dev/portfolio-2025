import { motion } from 'motion/react';
import React, { PropsWithChildren } from 'react';

const CYCLES_PER_LETTER = 1;
const SHUFFLE_TIME = 35;

const CHARS = '!@#$%^&*():{};|,.<>/?';

interface EncryptTextProps extends PropsWithChildren {
  children: string;
  className?: string;
  onScramble?: (scramble: () => void) => void;
  onStopScramble?: (stopScramble: () => void) => void;
}

const EncryptText: React.FC<EncryptTextProps> = ({
  children,
  className,
  onScramble,
  onStopScramble,
  ...props
}) => {
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const [text, setText] = React.useState(children);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = children
        .split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join('');

      setText(scrambled);
      pos++;

      if (pos >= children.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(children);
  };

  React.useEffect(() => {
    scramble();
  }, []);

  React.useEffect(() => {
    if (onScramble) {
      onScramble(scramble);
    }

    if (onStopScramble) {
      onStopScramble(stopScramble);
    }
  }, [onScramble, onStopScramble]);

  return (
    <motion.span
      className={`font-mono tracking-tighter ${className}`}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      {...props}
    >
      {text}
    </motion.span>
  );
};

export default EncryptText;
