import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Composables = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Core/Composables';

  return (
    <>
      <PageLayout>        <PageTitle title="Composables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Composables;
