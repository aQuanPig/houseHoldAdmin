<template>
  <div>
    <Layout :style="{ minHeight: '100vh' }">
      <Sider
        hide-trigger
        theme="primary"
        :style="{ height: '100vh', background: '#fff' }"
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
        ref="side1"
      >
        <Menu
          active-name="1-1"
          width="auto"
          theme="primary"
          :class="menuitemClasses"
          :open-names="['1']"
        >
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <span>主页</span>
            </template>
            <MenuItem name="control">
              <span>控制台</span>
            </MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              <span>员工管理</span>
            </template>
            <MenuGroup title="Item 1">
                <MenuItem name="employeelist" to="/employee">
                  <span>员工列表</span>
                </MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </Sider>

      <Layout>
        <Header>
          <Menu
            mode="horizontal"
            theme="primary"
            active-name="3"
            width="auto"
            class="layout-header"
          >
            <MenuItem class="layout-sider" name="" title="全屏">
              <Icon
                type="md-reorder"
                :size="24"
                @click.native="collapsedSider"
                :class="changeSideIcon"
              />
            </MenuItem>
            <div class="layout-nav">
              <MenuItem class="nav-item" name="" title="全屏">
                <Icon
                  custom="iconfont icon-quanping"
                  :size="24"
                  @click="handleFullScreen"
                />
              </MenuItem>
              <MenuItem name="1" title="通知" class="nav-item">
                <Badge dot :offset="[16, 3]" type="success">
                  <Icon type="ios-notifications-outline" :size="22"></Icon>
                </Badge>
              </MenuItem>
              <Submenu name="user" class="nav-item">
                <template slot="title"> 娟娟子 </template>
                <MenuItem name="base">基本资料</MenuItem>
                <MenuItem name="change">修改密码</MenuItem>
                <MenuItem name="quit">退出</MenuItem>
              </Submenu>
            </div>
          </Menu>
        </Header>
        <Layout :style="{ padding: '18px 24px' }">
          <Content
            :style="{ padding: '0 10px', minHeight: '280px', background: '#fff' }"
          >
            <router-view/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>

import { toFullVideo, exitFullVideo } from "../utils/fullAndExitVideo";
export default {
  name: "Main",
 
  data() {
    return {
      isCollapsed: false, // 是否侧缩
      fullscreen: false, //是否全屏
    };
  },
  computed: {
    changeSideIcon() {
      return { "layout-icon": this.isCollapsed };
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    itemClasses() {
      return [this.isCollapsed ? "collapsed-menuitem" : ""];
    },
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.body;
      // document.exitFullVideo 文档来调用
      // element.requestFullScreen() 当前元素来调用
      this.fullscreen ? exitFullVideo(document) : toFullVideo(element);
      // 改变当前全屏状态
      this.fullscreen = !this.fullscreen;
    },
  },
};
</script>

<style scoped lang="less">
.menu-item {
  & i {
    font-size: 16px;
    transition: font-size 1s ease;
  }
  & span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease;
  }
}
.collapsed-menu {
  & i {
    font-size: 22px;
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  }
  & span {
    width: 0;
    transition: width 2s ease;
  }
}
.layout-header {
  display: flex;
  justify-content: space-between;
  .layout-sider {
    transition: all 2s;
  }
  .layout-icon {
    transform: rotate(-90deg);
  }
  .layout-nav {
    .nav-item {
      // 添加伪元素,伪元素不能直接hover,可以给父元素div添加hover效果,然后改变伪元素样式
      &:hover::after {
        width: 80%;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 0;
        height: 3px;
        transition: width 0.5s;
        background-color: #fff;
      }
    }
  }
}
</style>
