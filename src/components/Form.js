export function Form({ category }) {
  return (
    <form type>
      <input type="email" data-testid="email-input" placeholder="Email" />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Password"
      />
      <button
        type="submit"
        data-testid={category === 'Sign in' ? 'signin-button' : 'signup-button'}
      >
        {category}
      </button>
    </form>
  );
}
