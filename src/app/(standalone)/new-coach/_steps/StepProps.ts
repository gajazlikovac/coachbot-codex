export interface StepProps {
  question: string;
  category: string;
  subquestion: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}
