import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/NotesRender';

const RNStructure = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Basics/Fundamentals/Structure';

  return (
    <>
      <PageLayout>
        <Header text="Structure" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default RNStructure;