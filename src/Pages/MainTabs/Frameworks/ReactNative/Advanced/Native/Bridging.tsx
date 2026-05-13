import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Bridging = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/Native/Bridging';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Bridging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Bridging;
