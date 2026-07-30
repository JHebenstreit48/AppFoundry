import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Typography = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Styling/Properties/Typography';

  return (
    <>
      <PageLayout>        <PageTitle title="Typography" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Typography;
