<template>
  <div class="login_block">
    <div class="auth_block">
      <h2 class="name_of_block">Авторизация</h2>
      <p class="ent_or_reg_txt">
        Войдите или зарегиструйтесь, чтобы получить доступ к бонусам
      </p>
      <input class="inp" type="text" placeholder="Логин, email или телефон" />
      <input class="inp" type="password" placeholder="Пароль" />
      <button class="enter_btn">Войти</button>
    </div>
    <router-link :to="{ path: '/auth/registration' }" class="registration_txt">
      У вас ещё нет аккаунта? <i class="far fa-arrow-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
.login_block {
  width: 100%;
  height: calc(100% - 80px);
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
  width: 340px;
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
