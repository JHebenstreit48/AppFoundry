import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SizeAndDimensions = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/CoreConcepts/Styling/Properties/SizeAndDimensions';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Size & Dimensions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SizeAndDimensions;