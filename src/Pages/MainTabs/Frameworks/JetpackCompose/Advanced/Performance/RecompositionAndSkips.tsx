import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RecompositionAndSkips = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/Performance/RecompositionAndSkips';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Recomposition & Skips" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RecompositionAndSkips;
