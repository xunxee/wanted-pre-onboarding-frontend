import FormContainer from './FormContainer';

export default function FormPage({ category, onSubmit }) {
  return <FormContainer category={category} onSubmit={onSubmit} />;
}
