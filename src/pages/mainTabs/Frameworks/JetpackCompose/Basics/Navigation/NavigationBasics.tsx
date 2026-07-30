import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NavigationBasics = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Navigation/NavigationBasics';

  return (
    <>
      <PageLayout>        <PageTitle title="Navigation Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavigationBasics;
