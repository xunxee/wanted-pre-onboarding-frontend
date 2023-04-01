export function Form({ category, onChange, fields }) {
  const { email, password } = fields;

  function handleChange(event) {
    const {
      target: { name, value },
    } = event;

    onChange({ name, value });
  }

  return (
    <form>
      <input
        type="email"
        name="email"
        data-testid="email-input"
        value={email}
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        data-testid="password-input"
        value={password}
        placeholder="Password"
        onChange={handleChange}
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
