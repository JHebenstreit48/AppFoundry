import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Structure = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Fundamentals/Structure';

  return (
    <>
      <PageLayout>        <PageTitle title="Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Structure;
