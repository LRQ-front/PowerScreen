<template>
  <main class="screen-bg">
    <div class="header"></div>

    <div class="left-top">
      <pie-charts :echartDatas="chargingPile"></pie-charts>
    </div>
    <div class="left-bottom">
      <line-charts :echartDatas="processMonitoring"></line-charts>
    </div>

    <div class="center">
      <center-svg></center-svg>
    </div>
    <div class="bottom">
      <bottom-panel :panelItems="dataAnalysis"></bottom-panel>
    </div>

    <div class="right-top">
      <right-top-panel
        :percentage="percentage"
        :panelItems="chargingTop4"
      ></right-top-panel>
    </div>
    <div class="right-center">
      <bar-charts :echartDatas="chargingStatistics"></bar-charts>
    </div>
    <div class="right-bottom">
      <right-bottom-svg :dots="exceptionMonitoring"></right-bottom-svg>
    </div>
  </main>
</template>

<script setup>
import PieCharts from "@/components/pie-charts.vue";
import LineCharts from "@/components/line-charts.vue";
import BarCharts from "@/components/bar-charts.vue";
import RightBottomSvg from "@/components/right-bottom-svg.vue";
import CenterSvg from "@/components/center-svg.vue";
import BottomPanel from "@/components/bottom-panel.vue";
import RightTopPanel from "@/components/right-top-panel.vue";
import {
  chargingPileData,
  processMonitoringData,
  chargingStatisticsData,
  exceptionMonitoringData,
  dataAnalysisData,
  chargingTop4Data,
} from "./config/home-data";
import { ref } from "vue";

import { getPowerScreenData } from "@/services/index.js";

let chargingPile = ref(chargingPileData);
let processMonitoring = ref(processMonitoringData);
let chargingStatistics = ref(chargingStatisticsData);
let exceptionMonitoring = ref(exceptionMonitoringData);
let dataAnalysis = ref(dataAnalysisData);
let chargingTop4 = ref(chargingTop4Data);
let percentage = ref(0);

//获取数据
getPowerScreenData().then((res) => {
  console.log(1111);
  chargingPile.value = res.data.chargingPile.data;
  processMonitoring.value = res.data.processMonitoring.data;
  chargingStatistics.value = res.data.chargingStatistics.data;
  exceptionMonitoring.value = res.data.exceptionMonitoring.data;
  dataAnalysis.value = res.data.dataAnalysis.data;

  chargingTop4.value = res.data.chargingTop4.data;
  percentage.value = res.data.chargingTop4.totalPercentage;
});
</script>

<style scoped>
.screen-bg {
  /* 相对定位 */
  position: absolute;
  width: 100%;
  height: 100%;

  background-image: url("../assets/images/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.header {
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  height: 56px;

  background-image: url("../assets/images/bg_header.svg");
}

.left-top {
  position: absolute;

  top: 116px;
  left: 16px;
  width: 536px;
  height: 443px;

  background-image: url("../assets/images/bg_left-top.svg");
}

.left-bottom {
  /* 定位 */
  position: absolute;
  bottom: 49px;
  left: 16px;
  width: 536px;
  height: 443px;
  /* 背景 */
  background-image: url(@/assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
}
.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
}
.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
}

.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;

  /* border: 5px solid pink; */
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(../assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
}
</style>
