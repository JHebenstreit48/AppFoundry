import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Performance = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Navigation/NavigationPerformance';

  return (
    <>
      <PageLayout>        <PageTitle title="React Native Intermediate - Navigation Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Performance;