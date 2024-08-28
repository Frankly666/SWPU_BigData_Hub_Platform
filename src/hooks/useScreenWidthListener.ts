import { useEffect, useState, useCallback } from "react";

type ScreenWidthListenerCallback = (width: number) => void;

const useScreenWidthListener = (
  callback: ScreenWidthListenerCallback
): void => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isListening, setListening] = useState(false); // 使用状态来控制监听
  const callbackRef = useCallback(callback, []); // 使用 useCallback 确保回调函数的引用不会变

  useEffect(() => {
    // 初始化时调用回调函数
    callbackRef(screenWidth);

    // 定义 handleResize 函数
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // 如果 isListening 为 false，则开始监听 resize 事件
    if (!isListening) {
      window.addEventListener("resize", handleResize);
      setListening(true); // 开始监听
    }

    // 组件卸载时移除监听器
    return () => {
      if (isListening) {
        window.removeEventListener("resize", handleResize);
        setListening(false); // 停止监听
      }
    };
  }, [screenWidth, isListening, callbackRef]); // 依赖项数组中包含 screenWidth 和 isListening

  // 当 screenWidth 变化时，执行回调
  useEffect(() => {
    callbackRef(screenWidth);
  }, [screenWidth, callbackRef]);
};

export default useScreenWidthListener;
