import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StateAndEvents = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Basics/Core/StateAndEvents';

  return (
    <>
      <PageLayout>        <PageTitle title="State & Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StateAndEvents;
