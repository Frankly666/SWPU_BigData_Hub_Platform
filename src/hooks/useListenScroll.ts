import { useAppDispatch } from "@/store";
import { changeIsShowHeaderAction } from "@/store/modules/main";
import _ from "lodash";
import { useEffect } from "react";

export function useListenScroll() {
  const dispatch = useAppDispatch();
  const handleScroll = _.throttle(() => {
    const top = document.documentElement.scrollTop;
    dispatch(changeIsShowHeaderAction(top < 200));
  }, 100); // 在100毫秒内最多执行一次

  useEffect(() => {
    // 监听滚动事件
    window.addEventListener("scroll", handleScroll);

    // 组件卸载时清除滚动事件监听
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
