import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen hero" data-theme='autumn'>
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">There is nothing here!</p>
          <a className="btn btn-primary" href="/">
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error;