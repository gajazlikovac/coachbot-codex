export interface StepProps {
  question: string;
  subquestion: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}
