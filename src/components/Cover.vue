<template>
  <div class="cover">
    <div class="background">
      <div id="img"></div>
    </div>
    <div class="foreground cover-foreground">
      <div class="text-background">
        <h1 class="text-title">庐山观音桥</h1>

        <h2 class="text-subtitle">
          庐山观音桥建于公元1014年，距今1007年，是第一座公母榫结合的石拱桥，是号称“江南第一古桥”的千年国宝。观音桥桥长19.4米，宽4.8米，以雄伟的气势横跨在庐山的大峡谷——栖贤大峡谷之中
        </h2>
      </div>
    </div>
    <div class="scroll-invite">
      <div class="scroll-invite-btn" @click="scroll_to_content()"></div>
    </div>
  </div>
</template>
<style>
@font-face {
  font-family: JX ZhuoKai;
  src: url("../assets/江西拙楷.woff");
}

p {
  font-family: JX ZhuoKai;
}

@font-face {
  font-family: MaShanZheng Regular;
  src: url("../assets/MaShanZheng-Regular.woff");
}

p {
  font-family: MaShanZheng Regular;
}


.cover {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -100;
}

.background {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
}

#img {
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url("../assets/guanyinqiao.jpg");
}
.foreground {
  position: relative;
  width: 100%;
  z-index:1;
  vertical-align: middle;
  text-align: center;
  text-shadow: 0 0 100px rgba(0, 0, 0, 100);
  color: #fff;
}
.foreground.cover-foreground {
  position: absolute;
  top: 25%;
  left: 100px;
  z-index: 100;
  display: inline-block;
  width: calc(100% - 200px);
  margin-top: -50px;
}

.text-title {
  text-shadow: inherit;
  text-align: center;
  box-sizing: border-box;
  color: inherit;
  margin: 0;
  font-family: MaShanZheng Regular;
  font-weight: inherit;
  line-height: 1.2;
  border: 2px solid transparent;
  max-width: 100%;
  word-wrap: break-word;
  font-size: 8em;
  -webkit-text-stroke: 1px black;
  letter-spacing: 0.1em;
}

.text-subtitle {
  text-shadow: inherit;
  text-align: center;
  box-sizing: border-box;
  line-height: 1.2;
  color: inherit;
  margin: 0;
  font-family: JX ZhuoKai;
  font-weight: inherit;
  margin-top: 30px;
  border: 2px solid transparent;
  max-width: 100%;
  word-wrap: break-word;
  font-size: 1.8em;
  -webkit-text-stroke: 1px black;
  letter-spacing: 0.2em;
}

.scroll-invite {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  color: #4c4c4c;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: inherit;
  line-height: 180%;
  --esri-calcite-theme-name: "light";
  font-family: "noto_serif", "Georgia", "Hoefler Text", "Palatino", cursive;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 15px;
  text-align: center;
  z-index: 101;
}

.scroll-invite-btn {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  color: #4c4c4c;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: inherit;
  line-height: 180%;
  --esri-calcite-theme-name: "light";
  font-family: "noto_serif", "Georgia", "Hoefler Text", "Palatino", cursive;
  text-align: center;
  box-sizing: border-box;
  height: 52px;
  background: url("../assets/scroll-invite.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 130px 52px;
  cursor: pointer;
  animation: blinker 2.5s infinite;
  animation-timing-function: cubic-bezier(0.5, 0, 1, 1);
}

@keyframes blinker {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}
</style>
<script>
function scroll_to_content() {
  document.getElementById("main-sections").scrollIntoView({ block: 'start', behavior: 'smooth' })
}
export default {
  name: "Cover",
  methods: {
    scroll_to_content
  },
};
</script>
