import { flushData } from "@/service/modules/login";
import { useEffect } from "react";
import { useAppDispatch } from "@/store";
import { changeAvataAction, changeUserIdAction } from "@/store/modules/user";
// import { changeIsShowLoadingAction } from "@/store/modules/main";

function useFlushedData() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await flushData();
      dispatch(changeAvataAction(res.data.avatar));
      dispatch(changeUserIdAction(res.data.user.userId));
    };
    // dispatch(changeIsShowLoadingAction(true));
    fetchData()
      .then(() => {
        // dispatch(changeIsShowLoadingAction(false));
      })
      .catch((err) => {
        console.log("err: ", err);
        // dispatch(changeIsShowLoadingAction(false));
      });
  }, [dispatch]);
}

export default useFlushedData;
