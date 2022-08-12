<template>
  <div class="auth_block">
    <h2 class="name_of_block">Регистрация</h2>
    <p class="ent_or_reg_txt">
      Зарегиструйтесь, чтобы получить доступ к бонусам и др. предложениям
    </p>
    <div class="reg_inp_block">
      <input
        @input="checkName()"
        v-model="user_data.name"
        class="inp name"
        type="text"
        placeholder="Ваше имя"
      /><span class="err_hint name">Некорректное имя</span>
    </div>
    <div class="reg_inp_block">
      <input
        @input="checkEmail()"
        v-model="user_data.email"
        class="inp email"
        type="email"
        placeholder="Email"
      /><span class="err_hint email">Некорректный email</span>
    </div>
    <div class="reg_inp_block">
      <input
        @input="checkPass()"
        v-model="user_data.password"
        class="inp password"
        type="password"
        placeholder="Пароль"
      /><span class="err_hint pass">Пароль не удовлетворяет требованиям</span>
    </div>
    <div class="reg_inp_block">
      <input
        @input="comparePass()"
        v-model="user_data.password_rep"
        class="inp password_rep"
        type="password"
        placeholder="Повторите пароль"
      />
      <span class="err_hint pass_rep">Пароли не совпадают</span>
    </div>
    <button @click="registrate" class="enter_btn">Зарегистрироваться</button>
  </div>
  <router-link :to="{ path: '/auth/login' }" class="registration_txt">
    Уже есть аккаунт? <i class="far fa-arrow-right"></i>
  </router-link>
</template>

<script>
import axios from "axios";

export default {
  name: "Registration",
  data() {
    return {
      user_data: {
        name: "",
        email: "",
        password: "",
        password_rep: "",
      },
    };
  },
  methods: {
    checkName() {
      let name = this.user_data.name;
      let inp_name = document.querySelector(".inp.name");
      let err_hint = document.querySelector(".err_hint.name");
      if (name.length <= 3) {
        inp_name.classList.add("error");
        err_hint.classList.add("error");
        return false;
      } else {
        inp_name.classList.remove("error");
        err_hint.classList.remove("error");
        return true;
      }
    },
    checkEmail() {
      let email = this.user_data.email;
      let inp_email = document.querySelector(".inp.email");
      let err_hint = document.querySelector(".err_hint.email");
      let check_email = /^[\w]+@[\w]+\.[a-z]{2,4}$/i;
      let valid = check_email.test(email);
      if (!valid || email == "") {
        inp_email.classList.add("error");
        err_hint.classList.add("error");
        console.log("add");
        return false;
      } else {
        err_hint.classList.remove("error");
        inp_email.classList.remove("error");
        console.log("rem");
        return true;
      }
    },
    checkPass() {
      let pass = this.user_data.password;
      let inp_pass = document.querySelector(".inp.password");
      let err_hint = document.querySelector(".err_hint.pass");
      let check_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      let valid = check_pass.test(pass);
      if (!valid) {
        inp_pass.classList.add("error");
        err_hint.classList.add("error");
        console.log("add");
        return false;
      } else {
        inp_pass.classList.remove("error");
        err_hint.classList.remove("error");
        console.log("rem");
        return true;
      }
    },
    comparePass() {
      let pass = this.user_data.password;
      let pass_rep = this.user_data.password_rep;
      let inp_pass_rep = document.querySelector(".inp.password_rep");
      let err_hint = document.querySelector(".err_hint.pass_rep");
      if (pass_rep != pass || pass_rep == "") {
        inp_pass_rep.classList.add("error");
        err_hint.classList.add("error");
        return false;
      } else {
        inp_pass_rep.classList.remove("error");
        err_hint.classList.remove("error");
        return true;
      }
    },
    registrate() {
      let checkName = this.checkName();
      let checkEmail = this.checkEmail();
      let checkPass = this.checkPass();
      let comparePass = this.comparePass();
      if (checkName && checkEmail && checkPass && comparePass) {
        axios
          .post("/api/users/create_user", this.user_data)
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("jwt", res.data);
            axios.defaults.headers.common["Authorization"] = res.data;
            if (res.data) {
              // let tokenData = res.data.split(" ")[1];
              // axios.defaults.headers.common["Authorization"] = res.data;
              // let decoded = jwt.decode(tokenData, {complete:true});
              // Коммит в локальную БД с апдейтом юзера
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style>
.reg_inp_block {
  position: relative;
  display: flex;
  flex-direction: column;
}
.inp.email {
  position: relative;
}
.err_hint {
  position: absolute;
  visibility: hidden;
  top: 3px;
  left: 15px;
  font-size: 0.8em;
  color: transparent;
  z-index: 30;
  background: transparent;
  border-radius: 30px;
  transition: 0.3s ease-in-out;
}
.err_hint.error {
  visibility: visible;
  color: #f04946;
  background: #fff;
}
</style>
