import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Lists = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Core/Lists';

  return (
    <>
      <PageLayout>        <PageTitle title="Lists (Lazy)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lists;
