export function FormLayout({
  category,
  onChange,
  onSubmit,
  fields,
  isButtonActive,
}) {
  const { email, password } = fields;

  function handleChange(event) {
    const {
      target: { name, value },
    } = event;

    onChange({ name, value });
  }

  function handleSubmit() {
    return (event) => {
      event.preventDefault();

      onSubmit({ email, password });
    };
  }

  return (
    <form onSubmit={handleSubmit()}>
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
        disabled={!isButtonActive}
      >
        {category}
      </button>
    </form>
  );
}
