import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NavigationAdvanced = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/Interop/NavigationAdvanced';

  return (
    <>
      <PageLayout>        <PageTitle title="Navigation Advanced" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavigationAdvanced;
