import React, { memo, useLayoutEffect, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { Avatar, List, message } from "antd";

import CommunityWrapper from "./style";
import { useAppDispatch, useAppSelector } from "@/store";
import { changeTagNameAction } from "@/store/modules/main";
import { useNavigate } from "react-router";

interface IProps {
  children?: ReactNode;
}

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const Community: FC<IProps> = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const { isLogin } = useAppSelector((state) => {
    return {
      isLogin: state.main.isLogin
    };
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    dispatch(changeTagNameAction("community"));
    try {
      if (!isLogin) {
        message.warning("请先登录后查看!");
        navigate("/home");
      }
    } catch (err) {
      console.log("err: ", err);
    }
  }, []);

  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <CommunityWrapper>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
          </List.Item>
        )}
      />
    </CommunityWrapper>
  );
};

export default memo(Community);
