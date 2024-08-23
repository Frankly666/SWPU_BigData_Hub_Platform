export function formatTime(timeString: string): string {
  const now = new Date();
  const givenDate = new Date(timeString);
  const diffInMs = now.getTime() - givenDate.getTime();

  // 计算时间差
  const diffInMinutes = Math.round(diffInMs / (1000 * 60));
  const diffInHours = Math.round(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  // 根据时间差选择不同的显示格式
  if (diffInMinutes < 60) {
    return `${diffInMinutes}分钟前`;
  } else if (diffInHours < 24) {
    return `${diffInHours}小时前`;
  } else if (diffInDays < 7) {
    return `${diffInDays}天前`;
  } else {
    // 超过7天，使用年月日号的格式
    const year = givenDate.getFullYear();
    const month = givenDate.getMonth() + 1;
    const day = givenDate.getDate();
    return `${year}年${month}月${day}号`;
  }
}
