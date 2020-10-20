<template>
  <div class="navbar">
      <div class="navbar-items">
        <ul>
          <li>
            <a>
              <router-link to="/">HOME</router-link>
            </a>
          </li>
          <li>
            <a>
              <router-link to="/about">ABOUT</router-link>
            </a>
          </li>
          <li>
            <a>
              <router-link to="/profile">PROFILE</router-link>
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.navbar{
  position: relative;
  width: 100%;
  height: 66px;
  background: #042331;
}
.navbar-items {
  display: flex;
}
.navbar ul{
  display: flex;
  position: relative;
  left: 1000px;
  bottom: 14px;
  text-decoration: none;
}
.navbar-items  ul  a{
  display: flex;
  line-height: 65px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  padding-left: 30px;
  text-align: center;
}
.navbar-items  ul a:hover{
  color: blue;
}
</style>