import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnvironmentVariables = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/CICD/EnvironmentVariables';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Environment Variables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvironmentVariables;
