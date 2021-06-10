<template>
  <div id="loginApp" class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <p>Connectez-vous à MyGarden 🧑🏻‍🌾</p>
          </div>
          <form>
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Adresse mail"
              addon-left-icon="ni ni-email-83"
              v-on:input="updateEmail"
            >
            </base-input>
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Mot de passe ultra secret"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-on:input="updatePassword"
            >
            </base-input>

            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Se souvenir de moi</span>
            </base-checkbox>
            <div class="text-center">
              <base-button
                block
                type="primary"
                class="my-4"
                @click="submitForm"
              >
                Connexion
              </base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light">
            <small>Mot de passe oublié ?</small>
          </a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/register" class="text-light"
            ><small>Créer un nouveau compte</small></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "login",
  el: "#loginApp",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({ login: "LogIn" }),
    async submitForm() {
      axios
        .post("auth/login", {
          email: this.form.email,
          password: this.form.password,
        })
        .then((res) => {
          this.login(res.data);
          console.log(res.data.token);
          this.$router.push("/home");
        })
        .catch((err) => {
          if (err.message === "Network Error")
            this.$swal({
              icon: "error",
              title: "Oops! Petit problème",
              text: "Une erreur interne s'est produite",
            });
          else
            this.$swal({
              icon: "error",
              title: "Oops! Petit problème",
              text: err.response.data,
            });
        });
    },
    updateEmail(value) {
      this.form.email = value;
    },
    updatePassword(value) {
      this.form.password = value;
    },
  },
};
</script>
<style></style>
