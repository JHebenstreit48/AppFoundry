import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/NotesRender';

const RNEventHandling = () => {
  const markdownFilePath =
    'FrameworksNotes/ReactNativeNotes/Basics/CoreConcepts/EventHandling';

  return (
    <>
      <PageLayout>
        <Header text="Event Handling" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default RNEventHandling;
