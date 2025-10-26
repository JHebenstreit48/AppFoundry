import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ComponentBuiltIn = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/ComponentsNotes/BuiltIn';

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

export default ComponentBuiltIn;
