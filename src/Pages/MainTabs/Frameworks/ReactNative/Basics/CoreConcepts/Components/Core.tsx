import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RNComponentCore = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/ComponentsNotes/Core';

  return (
    <>
      <PageLayout>
        <Header />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default RNComponentCore;
