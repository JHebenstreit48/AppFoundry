import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import NotesRender from '@/Components/PageComponents/Notes/NotesRendering/NotesRender';

const RNSetup = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Basics/Fundamentals/Setup';

  return (
    <>
      <PageLayout>
        <Header text="Setup" />
        <NotesRender filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RNSetup;
