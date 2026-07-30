import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EnvironmentVariables = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/CICD/EnvironmentVariables';

  return (
    <>
      <PageLayout>        <PageTitle title="Environment Variables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvironmentVariables;
