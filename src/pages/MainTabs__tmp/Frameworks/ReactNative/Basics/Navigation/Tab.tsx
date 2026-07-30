import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Tab = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Basics/Navigation/Tab';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Basics - Tab Navigation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tab;