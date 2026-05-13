import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Modifiers = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Styling/Properties/Modifiers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Modifiers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Modifiers;
