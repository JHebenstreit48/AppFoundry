import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Colors = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/Colors';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Colors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Colors;