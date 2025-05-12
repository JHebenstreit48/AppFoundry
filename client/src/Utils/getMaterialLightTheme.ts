// src/Utils/getMaterialLightTheme.ts
import type { CSSProperties } from 'react';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import rawMaterialLight from 'react-syntax-highlighter/dist/esm/styles/prism/material-light';

const buildSafeTheme = (): SyntaxHighlighterProps['style'] => {
  const safeTheme: { [key: string]: CSSProperties } = {};

  // Copy only keys that are strings and values that look like CSS
  for (const key in rawMaterialLight) {
    const value = (rawMaterialLight as any)[key];
    if (typeof key === 'string' && typeof value === 'object') {
      safeTheme[key] = value;
    }
  }

  return safeTheme;
};

export default buildSafeTheme;
