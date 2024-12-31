import { useNavigate } from "react-router";

function Page1() {
  const navigate = useNavigate();

  return (
    <div>
      <div>this is page1</div>
      <button type="button" onClick={() => navigate(-1)}>
        back
      </button>
    </div>
  );
}

export default Page1;
