import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsContext } from "../../lib/hooks";

export default function FeedbackList() {
  const { isLoading, errorMessage, filteredFeedbackItems } =
    useFeedbackItemsContext();

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner></Spinner>}
      {errorMessage && <ErrorMessage message={errorMessage}></ErrorMessage>}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem
          key={feedbackItem.id}
          feedbackItem={feedbackItem}
        ></FeedbackItem>
      ))}
    </ol>
  );
}
