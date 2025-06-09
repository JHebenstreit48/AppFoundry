import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const RNStyleLayout = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/Styling/Layout';

  return (
    <>
      <PageLayout>
        <Header text="Layout" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default RNStyleLayout;
