import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ToolingAndProfilers = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/Performance/ToolingAndProfilers';

  return (
    <>
      <PageLayout>        <PageTitle title="Tooling & Profilers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ToolingAndProfilers;
