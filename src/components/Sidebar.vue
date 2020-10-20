<template>
  <div class="sidebar">
      <div class="sidebar-items">
        <ul>
          <li>
            <a>
              <router-link to="/">HOME</router-link>
            </a>
          </li>
          <li>
            <a>
              <router-link to="/About">ABOUT</router-link>
            </a>
          </li>
          <li>
            <a>
              <router-link to="/Login">LOGIN</router-link>
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style>
.sidebar{
  position: fixed;
  left: 0;
  width: 20%;
  height: 100%;
  background: #096568;
}
.sidebar-items header{
  font-size: 20px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #07a59d;
  user-select: none;
}
.sidebar-items  ul a{
  display: block;
  height: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  border-top: 1px soild rgba(255, 255, 255, .1);
  text-decoration: none;
}
.sidebar-items  ul a:hover{
  background-color: black;
}
</style>