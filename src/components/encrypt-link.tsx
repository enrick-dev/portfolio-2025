import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

const DURATION = 0.25;
const STAGGER = 0.025;

const TARGET_TEXT = 'Encrypt data';
const CYCLES_PER_LETTER = 1;
const SHUFFLE_TIME = 35;

const CHARS = '!@#$%^&*():{};|,.<>/?';

interface EncryptLinkProps extends PropsWithChildren {
  href: string;
  children: string;
  className?: string;
}

const EncryptLink = ({ children, href = '', className }: EncryptLinkProps) => {
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

  return (
    <Link
      href={href}
      className={`font-mono tracking-tighter ${className}`}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
    >
      {text}
    </Link>
  );
};

export default EncryptLink;
