// TODO 国际化
const steps = () => {
  return [
    {
      element: "#guide-start",
      popover: {
        title: "基础引导",
        description: "这是一个引导，点击按钮关闭",
        position: "bottom-right",
      },
    },
    {
      element: "#guide-i18n",
      popover: {
        title: "语言切换",
        description: "点击此处进行语言切换",
        position: "bottom-right",
      },
    },
    {
      element: "#guide-full-screen",
      popover: {
        title: "全屏切换",
        description: "点击此处进行全屏切换",
        position: "bottom-right",
      },
    },
  ];
};

export default steps;
