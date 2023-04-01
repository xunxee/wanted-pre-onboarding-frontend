import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <h2>wanted-pre-onboarding-frontend</h2>
      <div>
        <Link to="/signin">Sign In</Link>
      </div>
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
