<template>
  <div class="navbar">
    <div class="logo">
      <img alt="GWErio logo" src="../assets/GW2Aurene.png">
    </div>
    <div>
      <router-link class="" to="/">Home</router-link> |
      <div class="dropdown">
        <router-link to="/daily">Daily</router-link>
        <div class="dropdown-content">
          <router-link to="/dailys">Daily</router-link>
          <router-link to="/dailyss">Daily</router-link>
          <router-link to="/dailysss">Daily</router-link>
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
  }

  .logo {
    display: flex;
    align-items: center;
    width: 50px;

    img {
      width: 100%;
    }
  }

  .dropbtn {
    background-color: bisque;
    padding: 16px;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline;
  }

  .dropdown-content {
    display: none;
    background-color: white;
    position: absolute;
    left: 0;
    min-width: 160px;
  }

  .dropdown-content a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>