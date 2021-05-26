<template>
  <div
    class="story-header"
    :class="header_class"
    role="banner"
    v-scroll="handleScroll"
    :style="`background-color: rgba(0, 0, 0, ${opct})`"
  >
    <div class="logo-title-container">
      <span class="logo">1818小组</span>
      <span class="title" :class="title_class">庐山观音桥故事地图</span>
    </div>
    <ul class="bookmarks bookmarks-hidden" role="navigation">
      <li class="bookmark visible" data-index="2">1. Parks Before NPS</li>
      <li class="bookmark" data-index="4">2. Gaining Momentum</li>
      <li class="bookmark" data-index="6">3. Establishing NPS</li>
      <li class="bookmark" data-index="10">4. 21st Century</li>
      <!--<li class="dropdown bookmark-dropdown visible" style="">
                <a class="dropdown-toggle" data-toggle="dropdown">
                    <span class="glyphicon glyphicon-th-list"></span> <span class="caret"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                    <li class="bookmark" data-index="2">1. Parks Before NPS</li>
                    <li class="bookmark visible" data-index="4">2. Gaining Momentum</li>
                    <li class="bookmark visible" data-index="6">3. Establishing NPS</li>
                    <li class="bookmark visible" data-index="10">4. 21st Century</li>

                </ul>
            </li>-->
    </ul>
  </div>
</template>
<style>
    .story-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 50px;
        padding: 5px;
        z-index: 9999;
        -moz-transition: background-color 1s linear;
        -webkit-transition: background-color 1s linear;
        -o-transition: background-color 1s linear;
        transition: background-color 1s linear;
        font-family: 'open_sans', sans-serif;
    }
    .story-header.show {
        -webkit-box-shadow: 0 3px 5px 0 rgb(0 0 0 / 75%);
        -moz-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .75);
        box-shadow: 0 3px 5px 0 rgb(0 0 0 / 75%);
    }
    .logo-title-container {
        height: 100%;
        color: white;
    }
    .logo {
        margin-left: 10px;
        font-family: JX ZhuoKai;
    }
    .title {
        position: relative;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        font-weight: 300;
        letter-spacing: inherit;
        font-family: MaShanZheng Regular;
        box-sizing: border-box;
        font-size: 2.1em;
        height: 42px;
        line-height: 38px;
        margin-left: 14px;
        transition: opacity 1s linear;
        color: #FFF;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        opacity: 0;
        bottom: -0.15em;
        letter-spacing: 0.1em;
    }
    .title.show {
        opacity: 1;
    }

    .bookmarks {
        display: flex;
        list-style-type: none;
        padding-left: 0;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0;
        justify-content: flex-end;
        margin: 2px 30px 0;
        flex-wrap: wrap;
        min-width: 40px;
        height: 100%;
    }

    .bookmarks.bookmarks-hidden {
        visibility: hidden;
    }
</style>
<script>
function handleScroll() {
    let hundred_percent = document.getElementById("img").clientHeight;
    let main_section_pos = window.scrollY;
    if (main_section_pos > hundred_percent / 2) {
        this.opct = main_section_pos / (hundred_percent-100) + 0.1
        if (main_section_pos > hundred_percent - 80) {
            this.header_class = this.title_class = "show"
        }
        else
            this.header_class = this.title_class = ""
    }
    else {
        this.opct = 0
    }
}
export default ({
    name: "Header",
    data: function () {
        return {
            header_class: "",
            title_class: "",
            opct: 0
        }
    },
    methods: {
        handleScroll
    }
})
</script>
