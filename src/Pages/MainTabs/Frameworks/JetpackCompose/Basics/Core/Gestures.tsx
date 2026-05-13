import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Gestures = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Core/Gestures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Gestures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Gestures;
