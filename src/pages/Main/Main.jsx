import {
  Container,
  HeroContainer,
  HeroContent,
} from "./Main.styled";

function Main() {
  return (
    <div>
      <div>
        <HeroContainer>
          <Container className="container">
            <HeroContent>
              <h1>RentAuto UA</h1>
              <h2>Welcome to RentAuto UA</h2>
              <p>
                Users can easily make car selections using convenient filters to quickly find a vehicle that suits their needs.
                This application aims to provide a user-friendly and efficient interface for car rental services in Ukraine.
              </p>
            </HeroContent>
          </Container>
        </HeroContainer>
      </div>
    </div>
  );
}

export default Main;
