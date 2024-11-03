import Pattern from "../Pattern";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import FeedbackForm from "../feedback/FeedbackForm";

type HeaderProps = {
  handleAddToList: (text: string) => void;
};

export default function Header({ handleAddToList }: HeaderProps) {
  return (
    <header>
      <Pattern></Pattern>
      <Logo></Logo>
      <PageHeading></PageHeading>
      <FeedbackForm onAddToList={handleAddToList}></FeedbackForm>
    </header>
  );
}
