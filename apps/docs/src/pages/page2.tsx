import { useNavigate } from "react-router";

function Page2() {
  const navigate = useNavigate();

  return (
    <div>
      <div>this is page2</div>
      <button type="button" onClick={() => navigate(-1)}>
        back
      </button>
    </div>
  );
}

export default Page2;
