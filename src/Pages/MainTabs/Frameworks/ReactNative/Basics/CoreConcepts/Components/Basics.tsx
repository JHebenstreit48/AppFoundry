import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ComponentBasics = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/Components/Basics';

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

export default ComponentBasics;
