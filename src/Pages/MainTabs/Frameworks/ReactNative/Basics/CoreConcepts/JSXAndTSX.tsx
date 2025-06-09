import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import NotesRender from '@/Components/PageComponents/Notes/NotesRendering/NotesRender';

const RNJSXTSX = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/JSXAndTSX';

  return (
    <>
      <PageLayout>
        <Header
          text="JSX/TSX"
          size="md"
        />
        <NotesRender filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RNJSXTSX;
