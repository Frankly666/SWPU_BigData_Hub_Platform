import Loading from "@/components/loading";
import { useAppSelector } from "@/store";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  const { isShowLoading } = useAppSelector((state) => {
    return {
      isShowLoading: state.main.isShowLoading
    };
  });
  console.log("isShowLoading: ", isShowLoading);

  return (
    <div>
      <h2>home</h2>
      {isShowLoading ? <Loading /> : ""}
    </div>
  );
};

export default memo(Home);
