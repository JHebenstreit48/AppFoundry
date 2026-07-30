import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RecompositionAndSkips = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/Performance/RecompositionAndSkips';

  return (
    <>
      <PageLayout>        <PageTitle title="Recomposition & Skips" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RecompositionAndSkips;
