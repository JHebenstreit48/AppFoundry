import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Bridging = () => {
  const markdownFilePath = 'Frameworks/ReactNative/Advanced/Native/Bridging';

  return (
    <>
      <PageLayout>        <PageTitle title="Bridging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Bridging;
