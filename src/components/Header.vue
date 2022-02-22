<template>
  <div class="container">
    <h1><b>Todo</b>List</h1>
    <button id="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 120px;
  margin-bottom: 100px;
}
h1 {
  cursor: default;
  color: #9fd4ff;
  font-size: 50px;
  font-weight: normal;
  max-width: 250px;
  display: block;
  padding: 5px 0px;
  margin: 30px auto;
  border-radius: 40px;
  background: linear-gradient(to left, #7e40f6, #508bfc);
  border: 1px solid #6a00e2;
}
h1 b {
  padding: 5px 10px;
  color: #fff;
  font-weight: bolder;
  background: linear-gradient(to left, #7e40f6, #7e40f6, #508bfc);
  border-radius: 40px;
}
h1:hover b {
  background: linear-gradient(to left, #7e40f6, #508bfc);
}
#btn {
  border-radius: 14px;
  background: #fff;
  border: none;
}
#btn .changeLink {
  padding: 10px;
  display: block;
  width: 150px;
  font-size: 15px;
  font-weight: bolder;
  color: #0003ce;
  border-radius: 14px;
  cursor: pointer;
  text-decoration: none;
}
#btn:hover .changeLink {
  background: #e6e7ff;
}
</style>