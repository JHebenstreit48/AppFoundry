import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BordersAndShadows = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/BordersAndShadows';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Borders & Shadows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BordersAndShadows;