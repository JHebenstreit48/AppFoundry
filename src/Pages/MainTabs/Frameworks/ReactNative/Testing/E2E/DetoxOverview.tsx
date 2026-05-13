import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DetoxOverview = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Testing/E2E/DetoxOverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Detox Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DetoxOverview;
