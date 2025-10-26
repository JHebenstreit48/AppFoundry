import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RNStylingBasics = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Basics';

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

export default RNStylingBasics;
