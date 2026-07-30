import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TabsAndBackStack = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Navigation/TabsAndBackStack';

  return (
    <>
      <PageLayout>        <PageTitle title="Tabs & Back Stack" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TabsAndBackStack;
