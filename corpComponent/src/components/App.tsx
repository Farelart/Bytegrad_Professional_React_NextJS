import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import FeedbackItemsContextProvider from "../contexts/FeedbackItemsContextProvider";

export default function App() {
  return (
    <div className="app">
      <Footer></Footer>
      <FeedbackItemsContextProvider>
        <Container></Container>
        <HashtagList></HashtagList>
      </FeedbackItemsContextProvider>
    </div>
  );
}
