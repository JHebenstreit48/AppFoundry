import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Performance = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Intermediate/Navigation/NavigationPerformance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="React Native Intermediate - Navigation Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Performance;