import * as echarts from "echarts";
import { onUnmounted } from "vue";

//方便管理
export default function useEchart(divEl) {
  let echartInstance = echarts.init(divEl, null, { renderer: "svg" });

  onUnmounted(() => {
    echartInstance.dispose(); //销毁
  });

  function setOption(option) {
    echartInstance.setOption(option);
  }

  function resizeEchart() {
    echartInstance.resize();
  }

  return {
    echartInstance,
    resizeEchart,
    setOption,
  };
}
