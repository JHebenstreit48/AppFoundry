import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StylingPositioning = () => {
  const markdownFilePath =
    'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Positioning';

  return (
    <>
      <PageLayout>
        <Header text="Properties Positioning" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default StylingPositioning;