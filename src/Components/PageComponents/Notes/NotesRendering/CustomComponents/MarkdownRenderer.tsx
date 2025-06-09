import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

import CodeBlock from '@/Components/PageComponents/Notes/NotesRendering/CustomComponents/CodeBlock';
import LinkRenderer from '@/Components/PageComponents/Notes/NotesRendering/CustomComponents/LinkRenderer';
import TableWrapper from '@/Components/PageComponents/Notes/NotesRendering/CustomComponents/TableWrapper';

interface RendererProps {
    content: string;
    copyToClipboard: (code: string) => void;
    copiedCode: boolean;
  }
  
  const MarkdownRenderer = ({ content, copyToClipboard, copiedCode }: RendererProps) => {
    return (
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children }) {
            return (
              <CodeBlock
                className={className}
                children={children ?? ''}
                copyToClipboard={copyToClipboard}
                copied={copiedCode}
              />
            );
          },
          a: LinkRenderer,
          table: TableWrapper
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };
  
  export default MarkdownRenderer;
