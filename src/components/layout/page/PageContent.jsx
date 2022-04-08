import Container from './Container';

const PageContent = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 px-4 pb-12">
      <Container>
        <div className="flex flex-col items-center px-3 py-4 space-y-2 lg:px-8">{children}</div>
      </Container>
    </div>
  );
};

export default PageContent;
