import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CICDPipelines = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/CICD/CICDPipelines';

  return (
    <>
      <PageLayout>        <PageTitle title="CI/CD Pipelines" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CICDPipelines;
