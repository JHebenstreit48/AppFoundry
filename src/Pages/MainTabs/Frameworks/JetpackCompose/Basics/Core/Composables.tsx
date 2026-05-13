import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Composables = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Core/Composables';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Composables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Composables;
