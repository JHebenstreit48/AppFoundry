import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Modifiers = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Styling/Properties/Modifiers';

  return (
    <>
      <PageLayout>        <PageTitle title="Modifiers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Modifiers;
