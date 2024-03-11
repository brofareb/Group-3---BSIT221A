import { useRouter } from "next/router";
import ViewPage from "../viewpage";


const Contents = () => {
  const router = useRouter();
  const { id } = router.query;

  const recipe = {id: id};

  return (
    <>
      <ViewPage />
    </>
  );
};

export default Contents;
