// src/Utils/cleanMaterialTheme.ts
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import rawMaterialLight from 'react-syntax-highlighter/dist/esm/styles/prism/material-light';

const cleanMaterialTheme = rawMaterialLight as SyntaxHighlighterProps['style'];

export default cleanMaterialTheme;
