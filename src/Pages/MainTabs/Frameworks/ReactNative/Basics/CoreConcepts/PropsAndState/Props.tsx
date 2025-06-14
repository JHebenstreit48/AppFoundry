import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const RNProps = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/Props';

  return (
    <>
      <PageLayout>
        <Header text="Props" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default RNProps;
