import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Gestures = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Core/Gestures';

  return (
    <>
      <PageLayout>        <PageTitle title="Gestures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Gestures;
