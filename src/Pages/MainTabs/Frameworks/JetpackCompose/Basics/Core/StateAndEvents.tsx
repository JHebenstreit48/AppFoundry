import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StateAndEvents = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Core/StateAndEvents';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="State & Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StateAndEvents;
