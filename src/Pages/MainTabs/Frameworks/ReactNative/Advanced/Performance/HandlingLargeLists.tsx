import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HandlingLargeLists = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/Performance/HandlingLargeLists';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Handling Large Lists" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HandlingLargeLists;
