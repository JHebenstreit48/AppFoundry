import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BasicsResources = () => {
  const markdownFilePath = 'Resources/Frameworks/ReactNative/Basics';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Resources" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicsResources;