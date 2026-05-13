import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TabsAndBackStack = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Navigation/TabsAndBackStack';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tabs & Back Stack" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TabsAndBackStack;
