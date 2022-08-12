<template>
  <div class="auth">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Authorization",
};
</script>

<style>
.auth {
  width: 100%;
  height: calc(100% - 75px);
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.loggining {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.auth_block {
  color: #323232;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
  /* height: 350px; */
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px #05050507;
}
.name_of_block {
  margin-bottom: 0;
}
.ent_or_reg_txt {
  font-size: 0.9em;
  padding: 0 10px 0 10px;
  margin-top: 10px;
  text-align: center;
  color: #a0a0a0;
}
.inp {
  width: 270px;
  height: 55px;
  border-radius: 20px;
  margin: 10px 0;
  padding: 0 15px;
  box-shadow: 0 0 10px 5px #05050506;
  transition: 0.2s ease-in-out 0.1s;
  border: 0;
  outline: none;
  font-size: 0.95em;
}
.inp.error {
  border: 2px solid #f04946dd;
}
.enter_btn {
  align-self: flex-end;
  margin: 5px 25px 20px 0;
  padding: 12px 15px;
  border-radius: 10px;
  color: #fafafa;
  font-size: 1em;
  background: #323232;
  border: none;
  box-shadow: 0 0 10px 5px #05050507;
}
.registration_txt {
  color: #a0a0a0;
  margin-top: 20px;
  text-decoration: underline;
}
</style>
