import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ToolingAndProfilers = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/Performance/ToolingAndProfilers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tooling & Profilers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ToolingAndProfilers;
