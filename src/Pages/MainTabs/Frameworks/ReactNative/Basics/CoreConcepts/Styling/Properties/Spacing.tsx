import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const RNStyleSpacing = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/Styling/Properties/Spacing';

  return (
    <>
      <PageLayout>
        <Header text="Properties Spacing" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default RNStyleSpacing;