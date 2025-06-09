import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const RNComponentBuiltIn = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/ComponentsNotes/BuiltIn';

  return (
    <>
      <PageLayout>
        <Header text="Built-In" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default RNComponentBuiltIn;
