import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StateHoisting = () => {
  const markdownFilePath = 'Frameworks/JetpackCompose/Advanced/StateAndSideEffects/StateHoisting';

  return (
    <>
      <PageLayout>        <PageTitle title="State Hoisting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StateHoisting;
